const moment = require('moment');
module.exports = {
	commands: ['lock'],
	category: 'Security',
	description: 'Log out',
	guildOnly: true,
	cooldown: '10s',
	testOnly: true,
	callback: async ({ message, client }) => {
		const server = message.guild.id;
		if (server === '727554812299968582') {
  const time = moment();
  const timeFull = time.format('MMMM Do YYYY, h:mm:ss a');
  const author = message.author.username;
  const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');
  const row = new MessageActionRow()
  .addComponents(
	new MessageButton()
	.setCustomId('yes')
	.setLabel('Yes')
	.setStyle('SUCCESS'),
	new MessageButton()
	.setCustomId('no')
	.setLabel('No')
	.setStyle('DANGER'),
  );
 const buttonmsg = await message.reply({ content: 'Are you sure you want to log out?', components: [row] });

 const aFilter = i=>i.user.id === message.author.id;

 const collector = buttonmsg.channel.createMessageComponentCollector({ filter: aFilter, time: 30000 });

try {
 await message.delete();
}
catch (error) {
	return;
}

 collector.on('collect', async i => {
	if (i.customId === 'no') {
		try {
		await buttonmsg.edit({ content: 'Logout canceled.', components: [] });
		setTimeout(function() {buttonmsg.delete(); }, 3000);
		}
		catch (error) {
		return;
		}
	}
	else if (i.customId === 'yes') {
		try {
			await buttonmsg.edit({ content: 'Logged out.', components: [] });
			setTimeout(function() {buttonmsg.delete(); }, 3000);
		}
		catch (error) {
			return;
		}
		client.channels.cache.get('836421516546539561').send(`${author} logged out ${timeFull}`);
		const role = message.member.guild.roles.cache.find(role => role.name === 'Aci');
		message.member.roles.remove(role);
		if (message.author.id === '702164630570663992') {
			const ikeRole = message.member.guild.roles.cache.find(role => role.name === 'Bot Dev');
			message.member.roles.remove(ikeRole);
		}
	}
	else {
		return;
	}
 });

		}
	},
};