module.exports = {
	category: 'Bot',
	description: 'Make a downtime message for the bot.',
	ownerOnly: true,
	testOnly: true,
	minArgs: 1,
	expectedArgs: '<"Maintenance, "Incident" or "Update">',
	cooldown: '10s',
	slash: true,
	guildOnly: true,
	options: [
		{
			name: 'type',
			description: 'What kind of downtime is this?',
			required: true,
			type: 3,
		},
	],
	callback: async ({ interaction, args, client }) => {
		const Discord = require('discord.js');
		const issueType = args[0];
		if (issueType === 'Maintenance' || issueType === 'Incident' || issueType === 'Update') {
		const embed = new Discord.MessageEmbed()
		.setTitle(`${issueType}`)
		.setColor('#000000')
		.setDescription('The bot is currently down for the reason above.\n\nSee status page for details here: https://hayasaka.statuspage.io/')
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
			console.log(error);
			}
			catch (error) {
				return;
			}
		}
		}
		else {
			interaction.reply({ content: 'Issue type must be Maintenance or Incident', ephemeral: true });
		}
	},
};