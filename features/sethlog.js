module.exports = (client) => {
    client.on('message', (message) => {
        const Discord = require('discord.js');
        if (message.author.id === '550520262894813194') {
          const embed3 = new Discord.MessageEmbed()
.setColor('#0099ff')
.setTitle('Message from Seth (UID: 550520262894813194)')
.addField('Link to message', message.url, true)
.setDescription(message.content);
    client.channels.cache.get('831403369091301396').send(embed3);
      }
    });
  };

  module.exports.config = {
    displayName: 'sethlog',
    dbName: 'sethlog',
    loadDBFirst: true,
  };