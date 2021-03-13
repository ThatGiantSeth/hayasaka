module.exports = {
    category: 'Fun',
    description: 'Bruh someone else with your bruh power',
    minArgs: 1,
    maxArgs: 1,
    expectedArgs: '<@user>',
    guildOnly: true,
	callback: ({ message, args }) => {
		const taggedUser = message.mentions.users.first();
        try {
            message.reply(` you bruhed ${taggedUser.username}`);
        }
        catch (error) {
          message.reply('that is not a valid @user');
        }
	},
};