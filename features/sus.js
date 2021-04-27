module.exports = (client) => {
    client.on('message', message => {
        const msgContent = (' sus ');
        if (!message.author.bot) {
        if (message.content.includes(msgContent) || message.content === 'sus' || message.content.endsWith(' sus') || message.content.startsWith('sus ')) {
            message.channel.send('[REDACTED] I\'m not allowed to make the joke anymore :(');
            return;
        }
    }
    });
};
module.exports.config = {
    displayName: 'susdetector',
    dbName: 'susdetector',
    loadDBFirst: true,
  };