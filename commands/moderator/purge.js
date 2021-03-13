module.exports = {
	commands: ['clear'],
	category: 'Moderator',
	description: 'Delete messages in any channel up to 14 days old.',
	minArgs: 1,
	maxArgs: 1,
  expectedArgs: '<number of messages to purge>',
	permissions: ['MANAGE_GUILD', 'MANAGE_MESSAGES'],
	guildOnly: true,
	cooldown: '10s',
	callback: async ({ message, args }) => {
  const messageNumber = Number(args[0], 10);

  if (isNaN(messageNumber)) return message.reply('that is not a number! Please specify the amount in numbers.');
  if (!Number.isInteger(messageNumber)) return message.reply('the number must be an integer!');
  if (messageNumber < 2 || messageNumber > 99) return message.reply('amount of messages for me to purge should be between 2 and 99.');
  const fetched = await message.channel.messages.fetch({
    limit: messageNumber + 1,
  });
  try {
    await message.channel.bulkDelete(fetched)
    .then(message.channel.send(`I have purged ${messageNumber} messages.`).then(msg => {
        msg.delete({ timeout: 3000 });
    }));
  }
  catch (error) {
      console.log(error);
      message.reply('I cannot delete messages over 14 days old! This limit is imposed by Discord and not my developer.');
  }
	},
};