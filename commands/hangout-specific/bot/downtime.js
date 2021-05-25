module.exports = {
	commands: ['offline', 'down'],
	category: 'Bot',
	description: 'Make a downtime message for the bot.',
	ownerOnly: true,
	testOnly: true,
	minArgs: 2,
	expectedArgs: '<"Maintenance" or "Incident"> <message>',
	cooldown: '10s',
	callback: async ({ message, args, client }) => {
		const Discord = require('discord.js');
		const issueType = args[0];
		args.shift();
		const issueMessage = args.join(' ');
		if (issueType === 'Maintenance' || issueType === 'Incident') {
		const embed = new Discord.MessageEmbed()
		.setTitle(`${issueType}`)
		.setColor('#ff0000')
		.setDescription(`${issueMessage}\n\nSee status page for details here: https://hayasaka.statuspage.io/`)
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
			message.reply('issue type must be Maintenance or Incident');
		}
	},
};