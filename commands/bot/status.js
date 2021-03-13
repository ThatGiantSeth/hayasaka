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
	.setDescription('Save this page in case the bot goes down or requires maintenance')
  .setURL('https://stats.uptimerobot.com/EWKxNcWVDB/787368094')
	.setThumbnail('https://i.imgur.com/AxQslRW.jpg')
	.setFooter(`Hayasaka Bot ${version}`);

  message.channel.send(statusEmbed);
	},
};