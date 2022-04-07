import { Intents, Message } from 'discord.js';
import * as DiscordJS from 'discord.js'
import * as dotenv from 'dotenv';
dotenv.config();

export const client: any = new DiscordJS.Client({
	intents: [
		Intents.FLAGS.GUILDS,
		Intents.FLAGS.GUILD_MESSAGES,
		Intents.FLAGS.GUILD_VOICE_STATES,
		Intents.FLAGS.DIRECT_MESSAGES,
		Intents.FLAGS.DIRECT_MESSAGE_TYPING,
	],
	partials: [
		'CHANNEL', // Required to receive DMs
	]
});
// const distube = new DisTube.default(client)



client.on('ready', () => {
	console.log('The bot is ready')
})

//Commands handler
const fs = require('fs')
client.commands = new DiscordJS.Collection()
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.ts'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	// Set a new item in the Collection
	// With the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}


// (async () => {
//   const res = await valid()
//   console.log(`da stuff is ${res}`)
// })();





client.on('messageCreate', async (message) => {

	//jabba help
	const JabbaHelp = client.commands.get('jabba help')
	if (!JabbaHelp) return;
	try {
		await JabbaHelp.execute(message);
	} catch (error) {
		console.error(error);
		await message.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}

	//Get random imgur pics
	const randomImgur = client.commands.get('randomImgur')
	if (!randomImgur) return;
	try {
		await randomImgur.execute(message);
	} catch (error) {
		console.error(error);
		await message.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}



	//Get imgur pics by search terms
	const getImgur = client.commands.get('getImgur')
	if (!getImgur) return;
	try {
		await getImgur.execute(message);
	} catch (error) {
		console.error(error);
		await message.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}


	//Basic replies
	const basicReply = client.commands.get('basicReply')
	if (!basicReply) return;
	try {
		await basicReply.execute(message);
	} catch (error) {
		console.error(error);
		await message.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}


	//Get crypto prices
	const getCrypto = client.commands.get('getCrypto')
	if (!getCrypto) return;
	try {
		await getCrypto.execute(message);
	} catch (error) {
		console.error(error);
		await message.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}



	//Timer
	client.commands.get('Timer').execute(message)


	//Music Bot
	const MusicBot = client.commands.get('MusicBot')
	if (!MusicBot) return;
	try {
		await MusicBot.execute(message);
	} catch (error) {
		console.error(error);
		await message.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}



	//OneTwoThree game
	const OneTwoThree = client.commands.get('OneTwoThree')
	if (!OneTwoThree) return;
	try {
		await OneTwoThree.execute(message);
	} catch (error) {
		console.error(error);
		await message.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}


	//Say random words
	client.commands.get('randomWords').execute(message)




	//Get weather data
	const GetWeatherData = client.commands.get('GetWeatherData')
	if (!GetWeatherData) return;
	try {
		await GetWeatherData.execute(message);
	} catch (error) {
		console.error(error);
		await message.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}



	//Guess gender and nationalities by names
	const GuessGen = client.commands.get('GuessGen')
	if (!GuessGen) return;
	try {
		await GuessGen.execute(message);
	} catch (error) {
		console.error(error);
		await message.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}




	//Cursing on DMs
	const cursingDMs = client.commands.get('cursingDMs')
	if (!cursingDMs) return;
	try {
		await cursingDMs.execute(message);
	} catch (error) {
		console.error(error);
		await message.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}


	//Jabba repeat words
	const JabbaSay = client.commands.get('JabbaSay')
	if (!JabbaSay) return;
	try {
		await JabbaSay.execute(message);
	} catch (error) {
		console.error(error);
		await message.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}

	
})



client.login(process.env.TOKEN)
