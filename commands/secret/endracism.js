module.exports = {
	commands: ['blm', 'blacksquare'],
	category: 'Other',
	description: 'BLM :flushed:',
	cooldown: '5s',
	execute({ message }) {
		const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');
		const row = new MessageActionRow()
		.addComponents(
			new MessageButton()
			.setLabel('How You Can Help')
			.setStyle('LINK')
			.setURL('https://www.youtube.com/watch?v=iik25wqIuFo'),
		);

		const embed = new MessageEmbed()
	.setColor('#000000')
	.setTitle('WE ARE ENDING RACISM :pensive::fist:')
	.setImage('https://i.imgur.com/m8zd1bC.jpg');

  message.channel.send({ embeds: [embed], components: [row] });
	},
};