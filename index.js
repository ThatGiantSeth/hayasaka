// THIS SECTION ONLY FOR WEB SERVER USE
const express = require('express');
const app = express();
const port = 5523;

app.get('/', (req, res) => res.send('Hayasaka v1.0 Beta Webserver Status.... is online I guess! Congratulations??'),
);
app.listen(port, () => console.log(`Server listening at http://localhost:${port}`));
// end web server use section

const { Client, Intents } = require('discord.js');
const wokcommands = require('wokcommands');
require('dotenv').config();
const path = require('path');

const client = new Client({
    partials: ['MESSAGE', 'REACTION'],
    intents: [Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MESSAGE_TYPING, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.DIRECT_MESSAGE_REACTIONS, Intents.FLAGS.DIRECT_MESSAGE_TYPING, Intents.FLAGS.GUILD_BANS, Intents.FLAGS.GUILD_INTEGRATIONS, Intents.FLAGS.GUILD_WEBHOOKS],
});

client.on ('ready', async () => {
  console.log('Bot online!');
      // sets bot status
      const activities = [
        'life wasting sim',
        'best girl!',
        'the test version!',
      ];
      setInterval(()=>{
        const status = activities[Math.floor(Math.random() * activities.length)];
        client.user.setPresence({ activities : [ { name : `${status}` }] });
      }, 10000);

    // Used to configure the database connection.
  // These are the default options but you can overwrite them
  const dbOptions = {
    keepAlive: true,
  };

    // If you want to disable built in commands you can add them to this array. Simply uncomment the strings to disable that command.

    const disabledDefaultCommands = [
        // 'help',
        'command',
        'language',
        'prefix',
        'requiredrole',
      ];

      // Initialize WOKCommands with specific folders and MongoDB
  new wokcommands(client, {
    commandsDir: path.join(__dirname, 'commands'),
    featuresDir: path.join(__dirname, 'features'),
    messagesPath: path.resolve('./messages.json'),
    delErrMsgCooldown: -1,
    showWarns: true,
    dbOptions,
    disabledDefaultCommands,
    mongoUri: process.env.MONGO_URI,
    testServers: ['819442264043946004', '727554812299968582'],
    botOwners: (['411994450370232321', '702164630570663992']),
    ephemeral: true,
  })
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
    {
      name: 'Moderator',
      emoji: '💡',
    },
    {
      name: 'Security',
      emoji: '🔒',
    },
    {
      name: 'Minecraft',
      emoji: '🌲',
    },
  ]);

});

client.login(process.env.TOKEN);