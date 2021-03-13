// THIS SECTION ONLY FOR WEB SERVER USE
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hayasaka v0.0.10 Beta Webserver Status.... is online I guess! Congratulations??'),
);
app.listen(port, () => console.log(`Server listening at http://localhost:${port}`));
// end web server use section

const Discord = require('discord.js');
const wokcommands = require('wokcommands');
require('dotenv').config();

const client = new Discord.Client({
    partials: ['MESSAGE', 'REACTION'],
});

client.on ('ready', () => {
    console.log('Bot online!');
        // sets bot status
        client.user.setPresence({
          status: 'available',
          activity: {
              name: 'my life waste away',
              type: 'WATCHING',
          },
      });

    // See the "Language Support" section of this documentation
  // An empty string = ignored
  const messagesPath = './messages.json';

    // Used to configure the database connection.
  // These are the default options but you can overwrite them
  const dbOptions = {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  };

    // If you want to disable built in commands you can add them to this array. Simply uncomment the strings to disable that command.

    const disabledDefaultCommands = [
        // 'help',
        // 'command',
        'language',
        // 'prefix',
        // 'requiredrole',
      ];

      // Initialize WOKCommands with specific folders and MongoDB
  new wokcommands(client, {
    commandsDir: 'commands',
    featureDir: 'features',
    messagesPath,
    showWarns: true,
    // ^^^ Show start up warnings
    dbOptions,
    disabledDefaultCommands,
  })
  .setBotOwner('411994450370232321')
  // Set your MongoDB connection path
  .setMongoPath(process.env.MONGO_URI)
  // Set the default prefix for your bot, it is ! by default
  .setDefaultPrefix('tt.')
  // Set the embed color for your bot. The default help menu will use this. This hex value can be a string too
  // eslint-disable-next-line semi
  .setColor(0x000000)
  .setCategorySettings([
    {
      name: 'Bot',
      emoji: '🤖',
    },
    {
      name: 'Fun',
      emoji: '😄',
    },
    {
      name: 'Other',
      emoji: '🤫',
      hidden: true,
    },
  ]);

});

client.login(process.env.TOKEN);