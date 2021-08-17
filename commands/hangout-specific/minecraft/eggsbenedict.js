module.exports = {
	commands: ['server12', 'eggserver', 'eggsinfo'],
	category: 'Minecraft',
	description: 'Information about the Eggs Benedict Minecraft server.',
	testOnly: true,
	cooldown: '10s',
	callback: async ({ message }) => {
        const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');
		const basrow = new MessageActionRow()
		.addComponents(
			new MessageButton()
			.setLabel('Mod List')
			.setStyle('LINK')
			.setURL('https://docs.google.com/spreadsheets/d/1Lm7ZVWK37m9Ou5W0xAs1nAUOyvO9Bny5d3MjGtoPNcE/edit'),
			new MessageButton()
			.setLabel('Instructions')
			.setStyle('LINK')
			.setURL('https://docs.google.com/document/d/1-aPMETJhhBA8rqcj-e2hWzBcdIx8yaZ62QkvkXxtZ4s/edit'),
			new MessageButton()
			.setLabel('Rules')
			.setStyle('LINK')
			.setURL('https://docs.google.com/document/d/16SNqpJ5ZstpP2D77-gN_9xBETJZi002WFZJ-Gji_70k/edit'),
			new MessageButton()
			.setCustomId('close')
			.setLabel('Close Menu')
			.setStyle('DANGER'),
		);
		const basicEmbed = new MessageEmbed()
		.setTitle('Server Information')
		.setColor('#000000')
		.setDescription('**Please read the rules!**\n\nServer Address/Port: `70.161.60.201:35584`\nGame Version: `1.12.2`\nGamemode: `Survival`\nModded: `Yes`\nForge Version (You don\'t need the same one but it must be equal to or newer): `14.23.5.2847`\n\nDynmap: http://70.161.60.201:8123/')
		.setFooter('For more information, re-type the command with the options "full" (shows all information), "mods" (shows only the list of mods), or "instructions" (only installation instructions).', 'https://i.imgur.com/W1lcK9M.gif');

		const buttonmsg = await message.channel.send({ embeds: [basicEmbed], components: [basrow] });

		const aFilter = i=>i.user.id === message.author.id;

		const collector = buttonmsg.channel.createMessageComponentCollector({ filter: aFilter, time: 60000 });

		const userMessage = message;

		collector.on('collect', async i => {
			if (i.customId === 'close') {
				try {
				await userMessage.delete();
				buttonmsg.delete();
				}
				catch (error) {
				return;
				}
			}
			else {
				return;
			}
		});
   },
};