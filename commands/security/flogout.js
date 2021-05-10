const moment = require('moment');
module.exports = {
	commands: ['forcelogout', 'flog'],
	category: 'Security',
	description: 'Log out a user forcefully',
    minArgs: 1,
    maxArgs: 1,
    expectedArgs: '<@user>',
	guildOnly: true,
    ownerOnly: true,
	testOnly: true,
	callback: async ({ message, client, args }) => {
		const Discord = require('discord.js');
  const time = moment();
  const timeFull = time.format('MMMM Do YYYY, h:mm:ss a');
  const user = message.mentions.members.first() || await message.guild.members.fetch(args[0]).catch(error => {
 return;
  });
  message.delete();
  if (user) {
	const embed = new Discord.MessageEmbed()
	.setColor('#ff0000')
	.setTitle('Security Alert')
	.setDescription(`${user} was forcefully logged out ${timeFull}`);
	client.channels.cache.get('836421516546539561').send(embed);
	const role = message.member.guild.roles.cache.find(role => role.name === 'Aci');
	user.roles.remove(role);
  }
	},
};