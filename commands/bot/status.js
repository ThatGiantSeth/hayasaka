/* eslint-disable no-shadow-restricted-names */
module.exports = {
	commands: ['botup', 'botdown'],
	category: 'Bot',
	description: 'View the bot\'s status page',
	cooldown: '10s',
	callback: ({ message }) => {
		const Discord = require('discord.js');
        const { version } = require('../../config.json');
		const statusEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Bot Status Page (Click Here)')
	.setDescription('Save this page in case the bot goes down or requires maintenance\n\nAlternative status page with automatic downtime detection (but no information on updates/planned maintenance: https://stats.uptimerobot.com/EWKxNcWVDB')
	.setURL('https://hayasaka.statuspage.io/')
	.setThumbnail('https://i.imgur.com/OjYg78u.jpg')
	.setFooter(`Hayasaka Bot ${version}`, 'https://i.imgur.com/W1lcK9M.gif');

  message.channel.send(statusEmbed);
	},
};