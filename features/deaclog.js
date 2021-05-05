module.exports = (client) => {
    client.on('message', (message) => {
        const Discord = require('discord.js');
        if (message.author.id === '482616537564315649') {
            const embed1 = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Message from Deacon (UID: 482616537564315649)')
  .addField('Link to message', message.url, true)
	.setDescription(message.content);
      client.channels.cache.get('831403369091301396').send(embed1);
        }
    });
  };

  module.exports.config = {
    displayName: 'deaclog',
    dbName: 'deaclog',
    loadDBFirst: true,
  };