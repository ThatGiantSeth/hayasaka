module.exports = {
	commands: ['wonderegg', 'weptuesday'],
	category: 'Fun',
	description: 'Every Tuesday!',
	cooldown: '3s',
	ownerOnly: true,
	callback: ({ message }) => {
	const Discord = require('discord.js');

		const embed = new Discord.MessageEmbed()
	.setColor('#000000')
	.setTitle('Streaming Tuesdays!')
	.setDescription('Hayasaka approves.')
	.setImage('https://i.imgur.com/SvYDAEX.jpg');

  message.channel.send(embed);
	},
};