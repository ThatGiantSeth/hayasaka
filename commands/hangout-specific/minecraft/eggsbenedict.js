module.exports = {
	commands: ['server12', 'eggserver', 'eggsinfo'],
	category: 'Minecraft',
	description: 'Information about the Eggs Benedict Minecraft server.',
	testOnly: true,
	cooldown: '10s',
	callback: async ({ message }) => {
        const Discord = require('discord.js');
		const disbut = require('discord-buttons');
        const client = message.client;
        let basicInfo = new disbut.MessageMenuOption()
        .setLabel('Basic Info')
        .setEmoji('🔤')
        .setValue('basinf')
		.setDefault()
        .setDescription('Basic information about the server.');

        let modInfo = new disbut.MessageMenuOption()
        .setLabel('Mod Info')
        .setEmoji('⚙️')
        .setValue('modinf')
        .setDescription('Link to list of installed mods.');

		let instrInfo = new disbut.MessageMenuOption()
        .setLabel('Instructions/Downloads')
        .setEmoji('⬇️')
        .setValue('instrinf')
        .setDescription('Instructions on how to install the mods and where to download them.');

		let allInfo = new disbut.MessageMenuOption()
        .setLabel('All Info')
        .setEmoji('➕')
        .setValue('allinf')
        .setDescription('All information about the server put together.');

		let delMenu = new disbut.MessageMenuOption()
        .setLabel('Close Menu')
        .setEmoji('❌')
        .setValue('closemenu')
		.setDescription('This will delete the message containing the selection menu.');


    let select = new disbut.MessageMenu()
        .setID('viewselect')
        .setPlaceholder('Select Info View')
        .setMaxValues(1)
        .setMinValues(1)
        .addOption(basicInfo)
        .addOption(modInfo)
		.addOption(instrInfo)
		.addOption(allInfo)
		.addOption(delMenu);

    await message.channel.send('Choose an info view below.', select);

    function menuselection(menu) {
        switch(menu.values[0]) {
            case 'basinf': {
				let delButton = new disbut.MessageButton()
				.setLabel('')
				.setID('del1')
				.setStyle('grey')
				.setEmoji('❌');
				const basicEmbed = new Discord.MessageEmbed()
				.setTitle('Server Information')
				.setColor('#000000')
				.setDescription('**Rules (you must read these)**:\nhttps://docs.google.com/document/d/16SNqpJ5ZstpP2D77-gN_9xBETJZi002WFZJ-Gji_70k/edit \n\nServer Address/Port: `70.161.60.201:35584`\nGame Version: `1.12.2`\nGamemode: `Survival`\nModded: `Yes`\nForge Version (You don\'t need the same one but it must be equal to or newer): `14.23.5.2847`\n\nDynmap: http://70.161.60.201:8123/')
				.setFooter('For more information, re-type the command with the options "full" (shows all information), "mods" (shows only the list of mods), or "instructions" (only installation instructions).', 'https://i.imgur.com/W1lcK9M.gif');
				menu.reply.send(basicEmbed, delButton);
				client.on('clickButton', async (button) => {
					button.message.delete();
				});
			}
            break;
            case 'modinf': {
				let delButton = new disbut.MessageButton()
				.setLabel('')
				.setID('del1')
				.setStyle('grey')
				.setEmoji('❌');
				const modEmbed = new Discord.MessageEmbed()
				.setTitle('Mods List')
				.setColor('#000000')
				.setDescription('A full list of mods, versions, and descriptions can be found here:\nhttps://docs.google.com/spreadsheets/d/1Lm7ZVWK37m9Ou5W0xAs1nAUOyvO9Bny5d3MjGtoPNcE/edit')
				.setFooter('Hayasaka', 'https://i.imgur.com/W1lcK9M.gif');
				menu.reply.send(modEmbed, delButton);
				client.on('clickButton', async (button) => {
					button.message.delete();
				});
			}
            break;
			case 'instrinf': {
				let delButton = new disbut.MessageButton()
				.setLabel('')
				.setID('del1')
				.setStyle('grey')
				.setEmoji('❌');
				const instEmbed = new Discord.MessageEmbed()
				.setTitle('Installation Guide')
				.setColor('#000000')
				.setDescription('Download links and instructions can be found here:\nhttps://docs.google.com/document/d/1-aPMETJhhBA8rqcj-e2hWzBcdIx8yaZ62QkvkXxtZ4s/edit')
				.setFooter('Hayasaka', 'https://i.imgur.com/W1lcK9M.gif');
				menu.reply.send(instEmbed, delButton);
				client.on('clickButton', async (button) => {
					button.message.delete();
				});
			}
            break;
			case 'allinf': {
				let delButton = new disbut.MessageButton()
				.setLabel('')
				.setID('del1')
				.setStyle('grey')
				.setEmoji('❌');
				const fullEmbed = new Discord.MessageEmbed()
				.setTitle('Full Info View')
				.setColor('#000000')
				.setDescription('**Rules (you must read these)**:\nhttps://docs.google.com/document/d/16SNqpJ5ZstpP2D77-gN_9xBETJZi002WFZJ-Gji_70k/edit \n\nServer Address/Port: `70.161.60.201:35584`\nGame Version: `1.12.2`\nGamemode: `Survival`\nModded: `Yes`\nForge Version (You don\'t need the same one but it must be equal to or newer): `14.23.5.2847`\n\nA list of mods, versions, and descriptions can be found here:\nhttps://docs.google.com/spreadsheets/d/1Lm7ZVWK37m9Ou5W0xAs1nAUOyvO9Bny5d3MjGtoPNcE/edit  \n\nDownload links and instructions can be found here:\nhttps://docs.google.com/document/d/1-aPMETJhhBA8rqcj-e2hWzBcdIx8yaZ62QkvkXxtZ4s/edit \n\nExtras:\nDynamic Map Access - http://70.161.60.201:8123/ \nThere\'s a sidebar on the right where you can change the map type and stuff like that.')
				.setFooter('Hayasaka', 'https://i.imgur.com/W1lcK9M.gif');
				menu.reply.send(fullEmbed, delButton);
				client.on('clickButton', async (button) => {
					button.message.delete();
				});
			}
            break;
			case 'closemenu': {
				menu.message.delete();
			}
        }
    }

    client.on('clickMenu', (menu) => {
        menuselection(menu);
    });
   },
};