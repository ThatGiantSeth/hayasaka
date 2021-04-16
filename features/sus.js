module.exports = (client) => {
    client.on('message', message => {
        const msgContent = (' sus ');
        if (!message.author.bot) {
        if (message.content.includes(msgContent) || message.content === 'sus' || message.content.endsWith(' sus') || message.content.startsWith('sus ')) {
            message.channel.send('Was that the word **sus** I just heard?! Red *sus*. Red *suuuus*. I said red, *sus*, hahahahaha. **Why arent you laughing?** I just made a reference to the popular video game *"Among Us"*! How can you not laugh at it? **Emergency meeting!** Guys, this here guy doesnt laugh at my funny *Among Us* memes! Lets beat him to death! **Dead body reported! Skip! Skip! Vote blue! Blue was not an impostor.** *Among us* in a nutshell hahahaha. **What?!** Youre still not laughing your ass off? I made __SEVERAL__ funny references to *Among Us* and __YOU STILL ARENT LAUGHING__??!!! Bruh. Ya hear that? **Wooooooosh.** Whats woooosh? Oh, nothing. Just the sound of a joke __flying over your head__. Whats that? You think im **annoying**? Kinda *sus*, bro. Hahahaha! Anyway, yea, gotta go do **tasks**. Hahahaha!');
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