module.exports = {
	category: 'Minecraft',
	description: 'Information about our Minecraft servers.',
	cooldown: '10s',
	minArgs: 1,
	maxArgs: 1,
	expectedArgs: 'Creative or Survival',
	slash: true,
	testOnly: true,
	guildOnly: true,
	options: [
		{
			name: 'type',
			description: 'Which server would you like to view? (Creative or Survival)',
			required: true,
			type: 3,
		},
	],
	callback: async ({ interaction, args }) => {
		require('dotenv').config();
		const ip = process.env.ADDRESS;
		const surVer = process.env.GAME_VERSION;
		const creVer = process.env.GAME_VERSION_C;
		const forgeVer = process.env.FORGE;
        const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

			if (args[0] === 'survival' || args[0] === 'Survival') {
				try {
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
					.setDescription(`**Please read the rules!**\n\nServer Address/Port: \`${ip}:35584\`\nGame Version: \`${surVer}\`\nGamemode: \`Survival\`\nModded: \`Yes\`\nForge Version (You don't need the same one but it must be equal to or newer): \`${forgeVer}\`\n\nDynmap: http://${ip}:8123/`)
					.setFooter('Survival Server', 'https://i.imgur.com/W1lcK9M.gif');

					await interaction.reply({ embeds: [basicEmbed], components: [basrow] });

					const aFilter = i=>i.user.id === interaction.user.id;

					const collector = interaction.channel.createMessageComponentCollector({ filter: aFilter, time: 60000 });

					collector.on('collect', async i => {
						if (i.customId === 'close') {
							try {
							await interaction.deleteReply();
							}
							catch (error) {
							return;
							}
						}
						else {
							return;
						}
					});
				}
				catch (error) {
				return;
				}
				return;
			}
			else if (args[0] === 'creative' || args[0] === 'Creative') {
					const basicEmbed = new MessageEmbed()
					.setTitle('Server Information')
					.setColor('#000000')
					.setDescription(`Server Address/Port: \`${ip}:35584\`\nGame Version: \`${creVer}\`\nGamemode: \`Creative\`\nModded: \`No\``)
					.setFooter('Creative Server', 'https://i.imgur.com/W1lcK9M.gif');
					const row33 = new MessageActionRow()
					.addComponents(
						new MessageButton()
						.setCustomId('close2')
						.setLabel('Close')
						.setStyle('DANGER'),
					);
					await interaction.reply({ embeds: [basicEmbed], components: [row33] });

					const aFilter = i=>i.user.id === interaction.user.id;

					const collector = interaction.channel.createMessageComponentCollector({ filter: aFilter, time: 60000 });

					collector.on('collect', async i => {
						if (i.customId === 'close2') {
							try {
							await interaction.deleteReply();
							}
							catch (error) {
							return;
							}
						}
						else {
							return;
						}
					});
					return;
			}
   },
};