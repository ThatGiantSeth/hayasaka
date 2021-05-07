const moment = require('moment');
module.exports = {
	commands: ['forcelogout'],
	category: 'Security',
	description: 'Log out a user forcefully',
    minArgs: 1,
    maxArgs: 1,
    expectedArgs: '<@user>',
	guildOnly: true,
    ownerOnly: 'true',
	callback: ({ message, client }) => {
  const time = moment();
  const timeFull = time.format('MMMM Do YYYY, h:mm:ss a');
  const taggedUser = message.mentions.users.first();

	client.channels.cache.get('836421516546539561').send(`${taggedUser} logged out forcefully ${timeFull}`);
	const role = message.member.guild.roles.cache.find(role => role.id === '836432624037134377');
	taggedUser.roles.remove(role);
	// ^^ broken ^^
	},
};