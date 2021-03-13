module.exports = {
	commands: ['explode', 'explosion'],
  category: 'Fun',
  description: 'I bet you can\'t guess what this does.',
  cooldown: '3s',
	callback: ({ message }) => {
		const images = [
      'https://media.nbcdfw.com/2020/08/beirut-explosion-motion.gif?crop&resize=850%2C478',
      'https://media0.giphy.com/media/n6uToGd0j3vdnKCq63/200.gif',
      'https://i.pinimg.com/originals/d3/80/2d/d3802d54095dad307bd771b5984e5b88.gif',
      'https://media3.giphy.com/media/aUCduQgMqzlcY/giphy.gif',
      'http://i.imgur.com/Li5aKeg.gif',
    ];
    const image = images[Math.floor(Math.random() * images.length)];

  message.channel.send(image);
	},
};