/* eslint-disable no-shadow-restricted-names */
module.exports = {
	commands: ['changelog'],
	category: 'Bot',
	description: 'Make an update message for the bot.',
	ownerOnly: true,
	testOnly: true,
	minArgs: 3,
	expectedArgs: '<"Major" or "Minor"> <version> <changelog link>',
	cooldown: '10s',
	guildOnly: true,
	slash: true,
	options: [
		{
			name: 'type',
			description: 'Major or Minor update type.',
			required: true,
			type: 3,
		},
		{
			name: 'version',
			description: 'Update version in x.x.x format',
			required: true,
			type: 3,
		},
		{
			name: 'link',
			description: 'Link to changelog.',
			required: true,
			type: 3,
		},
	],
	callback: async ({ interaction, args, client }) => {
		const Discord = require('discord.js');
		const updateType = args[0];
		args.shift();
		const updateVersion = args[0];
		args.shift();
		const changeLink = args[0];
		if (updateType === 'Minor' || updateType === 'Major') {
		const embed = new Discord.MessageEmbed()
		.setTitle(`${updateType} Update v${updateVersion}`)
		.setColor('#000000')
		.setDescription(`An update has been completed.\n\nSee this link for details: ${changeLink}`)
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
		else {
			interaction.reply({ content: 'Update type must be Major or Minor', ephemeral: true });
		}
	},
};