const moment = require('moment');
require('dotenv').config();
module.exports = {
	commands: ['unlock'],
	category: 'Security',
	description: 'Log in',
	guildOnly: true,
	cooldown: '5s',
	callback: async ({ message, args, client }) => {
	const server = message.guild.id;
	if (server === '727554812299968582') {
  const time = moment();
  const timeFull = time.format('MMMM Do YYYY, h:mm:ss a');
  const author = message.author.username;
  const Code = process.env.LOGIN_CODE;
  if (args[0] !== Code || !args[0]) {
	message.delete();
	message.channel.send('Invalid code!')
  .then(msg => {
	setTimeout(function() {
    msg.delete();
	}, 1000);
  });
	return;
  }
  else if (args[0] === Code) {
	message.delete();
	client.channels.cache.get('836421516546539561').send(`${author} logged in ${timeFull}`);
	const role = message.member.guild.roles.cache.find(role => role.id === '836432624037134377');
	message.member.roles.add(role);
	setTimeout(function() {
		const timeOut = moment();
		const timeFullOut = timeOut.format('MMMM Do YYYY, h:mm:ss a');
		message.member.roles.remove(role);
		client.channels.cache.get('836421516546539561').send(`${author} logged out ${timeFullOut}`);
	}, 259200000);
  }
}
	},
};