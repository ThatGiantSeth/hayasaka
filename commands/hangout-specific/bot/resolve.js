module.exports = {
	category: 'Bot',
	description: 'Make an issue resolved message for the bot.',
	ownerOnly: true,
	testOnly: true,
	minArgs: 1,
	maxArgs: 1,
	expectedArgs: '<"Maintenance", "Incident", or "Update">',
	cooldown: '10s',
	guildOnly: true,
	slash: true,
	options: [
		{
			name: 'type',
			description: 'Incident type',
			required: true,
			type: 3,
		},
	],
	callback: async ({ interaction, args, client }) => {
		const Discord = require('discord.js');
		const issueType = args[0];
		if (issueType === 'Maintenance' || issueType === 'Update') {
		const embed = new Discord.MessageEmbed()
		.setTitle('Maintenance/Update Completed')
		.setColor('#00ff47')
		.setDescription('The maintenance/update is complete and the bot is now online.\n\nFor information about downtimes, visit the status page here: https://hayasaka.statuspage.io/')
		.setFooter('Hayasaka', 'https://i.imgur.com/W1lcK9M.gif');
		try {
			const webhook = await client.fetchWebhook('818234228294287370', 'UE6AGXXv5jDjIgwyIecP-wiZO_PFLpl5tvDIDWuWOiHwGnz-OhY3s8f6QGut14gLBm1J');

			await webhook.send({
				username: 'Hayasaka Information',
				avatarURL: 'https://i.imgur.com/OjYg78u.jpg',
				embeds: [embed],
			});
			await interaction.reply({ content: 'Message successfully sent.', ephemeral: true });
		}
		catch (error) {
			try {
			interaction.reply({ content: 'There was an error sending the webhook', ephemeral: true });
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
			.setDescription('The incident is resolved and the bot is now online.\n\nFor information about downtimes, visit the status page here: https://hayasaka.statuspage.io/')
			.setFooter('Hayasaka', 'https://i.imgur.com/W1lcK9M.gif');
			try {
				const webhook = await client.fetchWebhook('818234228294287370', 'UE6AGXXv5jDjIgwyIecP-wiZO_PFLpl5tvDIDWuWOiHwGnz-OhY3s8f6QGut14gLBm1J');

				await webhook.send({
					username: 'Hayasaka Information',
					avatarURL: 'https://i.imgur.com/OjYg78u.jpg',
					embeds: [embed],
				});
				await interaction.reply({ content: 'Message successfully sent.', ephemeral: true });
			}
			catch (error) {
				try {
				interaction.reply({ content: 'There was an error sending the webhook', ephemeral: true });
				}
				catch (error) {
					return;
				}
			}
		}
	},
};