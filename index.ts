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



// Messages

client.on('messageCreate', async (message) => {
  const command = client.commands.get('basicReply')
  if (!command) return;
  try {
		await command.execute(message);
	} catch (error) {
		console.error(error);
		await message.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
})

//Get random Imgur pics

client.on('messageCreate', async (message) => {
  const command = client.commands.get('randomImgur')
  if (!command) return;
  try {
		await command.execute(message);
	} catch (error) {
		console.error(error);
		await message.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
})

//Get crypto prices

client.on('messageCreate', async (message) => {
  const command = client.commands.get('getCrypto')
  if (!command) return;
  try {
		await command.execute(message);
	} catch (error) {
		console.error(error);
		await message.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
})


//Timer

client.on('messageCreate', (message)=>{
  client.commands.get('Timer').execute(message)
})


//Using distube for Music

client.on('messageCreate', async (message) => {
  const command = client.commands.get('MusicBot')
  if (!command) return;
  try {
		await command.execute(message);
	} catch (error) {
		console.error(error);
		await message.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
})


//OneTwoThree
client.on('messageCreate', async (message) => {
  const command = client.commands.get('OneTwoThree')
  if (!command) return;
  try {
		await command.execute(message);
	} catch (error) {
		console.error(error);
		await message.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
})


//Say random words
client.on('messageCreate', (message) => {
  client.commands.get('randomWords').execute(message)
})


//Get weather data

client.on('messageCreate', async (message) => {
  const command = client.commands.get('GetWeatherData')
  if (!command) return;
  try {
		await command.execute(message);
	} catch (error) {
		console.error(error);
		await message.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
})



//Guess genders and nationalities by name

client.on('messageCreate', async (message) => {
  const command = client.commands.get('GuessGen')
  if (!command) return;
  try {
		await command.execute(message);
	} catch (error) {
		console.error(error);
		await message.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
})


client.on("error", () => { 
  client.login(process.env.token) });

client.login(process.env.TOKEN)
