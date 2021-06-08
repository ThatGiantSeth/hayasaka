/* eslint-disable no-shadow-restricted-names */
module.exports = {
	commands: ['changelog'],
	category: 'Bot',
	description: 'Make an update message for the bot.',
	ownerOnly: true,
	testOnly: true,
	minArgs: 3,
	expectedArgs: '<"Major" or "Minor"> <version> <message>',
	cooldown: '10s',
	callback: async ({ message, args, client }) => {
		const Discord = require('discord.js');
		const updateType = args[0];
		args.shift();
		const updateVersion = args[0];
		args.shift();
		const updateMessage = args.join(' ');
		if (updateType === 'Minor' || updateType === 'Major') {
		const embed = new Discord.MessageEmbed()
		.setTitle(`${updateType} Update v${updateVersion}`)
		.setColor('#000000')
		.setDescription(`${updateMessage}`)
		.setFooter('Hayasaka', 'https://i.imgur.com/W1lcK9M.gif');
		const channel = client.channels.cache.get('840242888935473242');
		try {
			const webhooks = await channel.fetchWebhooks();
			const webhook = webhooks.first();

			await webhook.send('', {
				username: 'Hayasaka Information',
				avatarURL: 'https://i.imgur.com/OjYg78u.jpg',
				embeds: [embed],
			});
		}
		catch (error) {
			message.reply('There was an error sending the webhook');
		}
		message.delete();
		}
		else {
			message.reply('update type must be Major or Minor');
		}
	},
};