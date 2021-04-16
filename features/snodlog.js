module.exports = (client) => {
    client.on('message', (message) => {
        const Discord = require('discord.js');
        if (message.author.id === '482616537564315649') {
            const embed1 = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Message from Deacon (UID: 482616537564315649)')
	.setDescription(message.content);
      client.channels.cache.get('831403369091301396').send(embed1);
        }
        if (message.author.id === '250671142233309186') {
            const embed2 = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Message from Kai (UID: 250671142233309186)')
	.setDescription(message.content);
      client.channels.cache.get('831403369091301396').send(embed2);
        }
    });
  };
  module.exports.config = {
    displayName: 'snodlog',
    dbName: 'snodlog',
    loadDBFirst: true,
  };