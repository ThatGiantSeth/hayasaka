module.exports = {
	category: 'Other',
	description: 'BLM :flushed:',
	cooldown: '5s',
	slash: true,
	testOnly: true,
	guildOnly: true,
	callback({ interaction }) {
		if (interaction) {
		const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');
		const row = new MessageActionRow()
		.addComponents(
			new MessageButton()
			.setLabel('How You Can Help')
			.setStyle('LINK')
			.setURL('https://bit.ly/3C94bAx'),
		);

		const embed = new MessageEmbed()
	.setColor('#000000')
	.setTitle('WE ARE ENDING RACISM :pensive::fist:')
	.setImage('https://i.imgur.com/m8zd1bC.jpg');

  interaction.reply({ embeds: [embed], components: [row] });
		}
	},
};