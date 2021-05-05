const moment = require('moment');
module.exports = {
	commands: ['lock'],
	category: 'Security',
	description: 'Log out',
	guildOnly: true,
	cooldown: '5s',
	callback: async ({ message, client }) => {
		const server = message.guild.id;
		if (server === '727554812299968582') {
  const time = moment();
  const timeFull = time.format('MMMM Do YYYY, h:mm:ss a');
  const author = message.author.username;

	message.delete();
	client.channels.cache.get('836421516546539561').send(`${author} logged out ${timeFull}`);
	const role = message.member.guild.roles.cache.find(role => role.id === '836432624037134377');
	message.member.roles.remove(role);
		}
	},
};