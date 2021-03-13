module.exports = {
	commands: ['blm', 'blacksquare'],
	category: 'Other',
	description: 'BLM :flushed:',
	cooldown: '5s',
	execute({ message }) {
		const Discord = require('discord.js');

		const embed = new Discord.MessageEmbed()
	.setColor('#000000')
	.setTitle('RACISM ENDED :pensive::fist:')
	.setImage('https://i.imgur.com/m8zd1bC.jpg');

  message.channel.send(embed);
	},
};