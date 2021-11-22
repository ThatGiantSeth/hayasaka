module.exports = {
	category: 'Moderator',
	description: 'Delete messages in any channel up to 14 days old.',
	minArgs: 1,
	maxArgs: 1,
  expectedArgs: 'number',
	permissions: ['MANAGE_GUILD', 'MANAGE_MESSAGES'],
	guildOnly: true,
  slash: true,
	cooldown: '10s',
  options: [
		{
			name: 'number',
			description: 'How many messages to purge',
			required: true,
			type: 3,
		},
	],
	callback: async ({ interaction, args }) => {
  const messageNumber = Number(args[0], 10);

  if (isNaN(messageNumber)) return interaction.reply('that is not a number! Please specify the amount in numbers.');
  if (!Number.isInteger(messageNumber)) return interaction.reply('the number must be an integer!');
  if (messageNumber < 1 || messageNumber > 99) return interaction.reply('amount of messages for me to purge should be between 2 and 99.');
  const fetched = await interaction.channel.messages.fetch({
    limit: messageNumber,
  });
  try {
    await interaction.channel.bulkDelete(fetched)
    .then(interaction.reply(`I have purged ${messageNumber} messages.`));
    setTimeout(async function() { await interaction.deleteReply();}, 5000);
  }
  catch (error) {
      console.log(error);
      interaction.reply('I cannot delete messages over 14 days old! This limit is imposed by Discord and not my developer.');
  }
	},
};