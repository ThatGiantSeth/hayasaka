/* eslint-disable no-shadow-restricted-names */
module.exports = {
	commands: ['latency'],
  category: 'Bot',
  description: 'Check the bot\'s latency.',
  cooldown: '3s',
	callback: ({ message }) => {
    message.channel.send('Testing <a:megloadtb:815413186869198858>').then (async (msg) =>{
      const pingmsg = (`:ping_pong: Pong! Latency: ${Date.now() - message.createdTimestamp}ms.`);
           // msg.edit({ timeout: 1000 }, pingmsg);
            setTimeout(function() {
                msg.edit(pingmsg);
            }, 1000);
          });
	},
};