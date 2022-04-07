import { removeVN } from '../functions/removeVN'
import { getRandom } from '../functions/getRandomFromArray'
import { randomEmotes } from "../jsons/lists"
const { MessageEmbed } = require('discord.js');

const help = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Main features')
	.setAuthor({ name: 'jabba helpingg', iconURL: 'https://cdn.discordapp.com/avatars/939491082717249558/ffb9b294305300620a00e1f1af169281.webp?size=128', url: 'https://discord.js.org' })
	.setDescription('Jabba provides lil bit help')
	.setThumbnail('https://cdn.discordapp.com/avatars/939491082717249558/ffb9b294305300620a00e1f1af169281.webp?size=128')
	.addFields(
		{ name: getRandom(randomEmotes)+' Jabba play musics', value: `---To start playing---\njabba play <SearchTerm> \n---How to enable/disable filters for current queue--- \njabba <effect> \n---Available effects--- \n3d, bassboost, echo, vaporwave, karaoke, nightcore` },
		{ name: '\u200B', value: '\u200B' },
        { name: getRandom(randomEmotes)+' Jabba helps with mc server', value: `---Check your subscription--- \njabba my sub \n---Check the server's status---\njabba server `},
        { name: '\u200B', value: '\u200B' },
        { name: getRandom(randomEmotes)+' 👊✋✌️ with jabba', value: `Just say '👊' or '✋' or '✌️' to play against jabba. \n---Check your current stats---\njabba my stats`},
        { name: '\u200B', value: '\u200B' },
        { name: getRandom(randomEmotes)+' ---Other features---', value: `jabba got many more minor stuff but jabba is too lazy to type them out :c`},
	)
	.setImage('https://cdn.discordapp.com/avatars/939491082717249558/ffb9b294305300620a00e1f1af169281.webp?size=128')
	.setTimestamp()
	.setFooter({ text: 'ldaq.org', iconURL: 'https://cdn.discordapp.com/avatars/939491082717249558/ffb9b294305300620a00e1f1af169281.webp?size=128' });


module.exports= {
    name: "jabba help",
    description: "jabba provide basic commands",
    async execute(message) {
        let mes: string = message.content.toLowerCase()
        let mess: string = removeVN(mes)
        if (message.author.id === "939491082717249558") return;
        if (mess == 'jabba help') {
            message.channel.send({embeds: [help]})
        }
    }
}