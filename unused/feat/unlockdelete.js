require('dotenv').config();
module.exports = (client) => {
    client.on('message', (message) => {
      const Code = process.env.LOGIN_CODE;
      if (message.channel.id === '836837591046815744') {
        if (!message.content === `tt.login ${Code}` || !message.content === `t.login ${Code}` || !message.content === `t.unlock ${Code}`) {
          message.delete();
          console.log('deleted');
        }
      }
    });
  };

  module.exports.config = {
    displayName: 'unlockdelete',
    dbName: 'unlockdelete',
    loadDBFirst: true,
  };