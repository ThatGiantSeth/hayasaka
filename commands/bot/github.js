/* eslint-disable no-shadow-restricted-names */
module.exports = {
	commands: ['git', 'repository', 'repo'],
	category: 'Bot',
	description: 'View the bot\'s GitHub repository',
	cooldown: '10s',
	callback: ({ message }) => {
		const Discord = require('discord.js');
        const { version } = require('../../config.json');
		const gitEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('GitHub Link (Click Here)')
	.setDescription('Bot\'s source code can be found here (no token included sorry hackers).')
  .setURL('https://github.com/ThatGiantSeth/hayasaka')
	.setThumbnail('https://i.imgur.com/AxQslRW.jpg')
	.setFooter(`Hayasaka Bot ${version}`, 'https://i.imgur.com/W1lcK9M.gif');

  message.channel.send(gitEmbed);
	},
};