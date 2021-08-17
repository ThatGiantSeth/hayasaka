module.exports = {
	commands: ['online', 'up'],
	category: 'Bot',
	description: 'Make an issue resolved message for the bot.',
	ownerOnly: true,
	testOnly: true,
	minArgs: 2,
	expectedArgs: '<"Maintenance", "Incident", or "Update"> <message>',
	cooldown: '10s',
	callback: async ({ message, args, client }) => {
		const Discord = require('discord.js');
		const issueType = args[0];
		args.shift();
		const issueMessage = args.join(' ');
		if (issueType === 'Maintenance') {
		const embed = new Discord.MessageEmbed()
		.setTitle('Maintenance Completed')
		.setColor('#00ff47')
		.setDescription(`${issueMessage}\n\nFor information about downtimes, visit the status page here: https://hayasaka.statuspage.io/`)
		.setFooter('Hayasaka', 'https://i.imgur.com/W1lcK9M.gif');
		const channel = client.channels.cache.get('840242888935473242');
		try {
			const webhooks = await channel.fetchWebhooks();
			const webhook = webhooks.first();

			await webhook.send({
				username: 'Hayasaka Information',
				avatarURL: 'https://i.imgur.com/OjYg78u.jpg',
				embeds: [embed],
			});
			message.delete();
		}
		catch (error) {
			try {
			message.reply('There was an error sending the webhook');
			}
			catch (error) {
				return;
			}
		}
		}
		if (issueType === 'Incident') {
			const embed = new Discord.MessageEmbed()
			.setTitle('Incident Resolved')
			.setColor('#00ff47')
			.setDescription(`${issueMessage}\n\nFor information about downtimes, visit the status page here: https://hayasaka.statuspage.io/`)
			.setFooter('Hayasaka', 'https://i.imgur.com/W1lcK9M.gif');
			const channel = client.channels.cache.get('840242888935473242');
			try {
				const webhooks = await channel.fetchWebhooks();
				const webhook = webhooks.first();

				await webhook.send({
					username: 'Hayasaka Information',
					avatarURL: 'https://i.imgur.com/OjYg78u.jpg',
					embeds: [embed],
				});
				message.delete();
			}
			catch (error) {
				try {
				message.reply('There was an error sending the webhook');
				}
				catch (error) {
					return;
				}
			}
		}
		if (issueType === 'Update') {
			const embed = new Discord.MessageEmbed()
			.setTitle('Incident Update')
			.setColor('#0070ff')
			.setDescription(`${issueMessage}\n\nFor information about downtimes, visit the status page here: https://hayasaka.statuspage.io/`)
			.setFooter('Hayasaka', 'https://i.imgur.com/W1lcK9M.gif');
			const channel = client.channels.cache.get('840242888935473242');
			try {
				const webhooks = await channel.fetchWebhooks();
				const webhook = webhooks.first();

				await webhook.send({
					username: 'Hayasaka Information',
					avatarURL: 'https://i.imgur.com/OjYg78u.jpg',
					embeds: [embed],
				});
				message.delete();
			}
			catch (error) {
				try {
				message.reply('There was an error sending the webhook');
				}
				catch (error) {
					return;
				}
			}
		}
	},
};