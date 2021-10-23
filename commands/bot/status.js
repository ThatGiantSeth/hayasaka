/* eslint-disable no-shadow-restricted-names */
module.exports = {
	category: 'Bot',
	description: 'View the bot\'s status page',
	cooldown: '10s',
	slash: true,
	guildOnly: true,
	callback: async ({ interaction }) => {
		const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');
        const { version } = require('../../config.json');
		const row = new MessageActionRow()
		.addComponents(
			new MessageButton()
			.setLabel('Statuspage')
			.setStyle('LINK')
			.setURL('https://hayasaka.statuspage.io/'),
			new MessageButton()
			.setLabel('UptimeRobot')
			.setStyle('LINK')
			.setURL('https://stats.uptimerobot.com/EWKxNcWVDB'),
		);
		const statusEmbed = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Bot Status Pages')
	.setDescription('The Statuspage one has more in-depth information about when updates are being pushed or maintenance is being conducted. The UptimeRobot one has automatic downtime detection but no detailed info on updates/planned maintenance.')
	.setThumbnail('https://i.imgur.com/OjYg78u.jpg')
	.setFooter(`Hayasaka Bot ${version}`, 'https://i.imgur.com/W1lcK9M.gif');

  interaction.reply({ embeds: [statusEmbed], components: [row] });
	},
};