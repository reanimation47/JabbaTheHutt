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
        { name: getRandom(randomEmotes) + ' Jabba play musics', value: `---To start playing---\njabba play <SearchTerm> \n---How to enable/disable filters for current queue--- \njabba <effect> \n---Available effects--- \n3d, bassboost, echo, vaporwave, karaoke, nightcore` },
        { name: '\u200B', value: '\u200B' },
        { name: getRandom(randomEmotes) + ' Jabba helps with mc server', value: `---Check your subscription--- \njabba my sub \n---Check the server's status---\njabba server ` },
        { name: '\u200B', value: '\u200B' },
        { name: getRandom(randomEmotes) + ' 👊✋✌️ with jabba', value: `Just say '👊' or '✋' or '✌️' to play against jabba. \n---Check your current stats---\njabba my stats` },
        { name: '\u200B', value: '\u200B' },
        { name: getRandom(randomEmotes) + ' ---Other features---', value: `jabba got many more minor stuff but jabba is too lazy to type them out :c` },
    )
    .setImage('https://cdn.discordapp.com/avatars/939491082717249558/ffb9b294305300620a00e1f1af169281.webp?size=128')
    .setTimestamp()
    .setFooter({ text: 'LDAQ.org', iconURL: 'https://cdn.discordapp.com/avatars/939491082717249558/ffb9b294305300620a00e1f1af169281.webp?size=128' });

const payment = new MessageEmbed()
    .setColor('#0099ff')
    .setTitle('How to pay jabba')
    .setAuthor({ name: 'jabba the hutt', iconURL: 'https://cdn.discordapp.com/avatars/939491082717249558/ffb9b294305300620a00e1f1af169281.webp?size=128', url: 'https://discord.js.org' })
    .setDescription('These are minimum prices, lil extra tips r always appreciated c: ')
    .setThumbnail('https://cdn.discordapp.com/avatars/939491082717249558/ffb9b294305300620a00e1f1af169281.webp?size=128')
    .addFields(
        { name: getRandom(randomEmotes) + ' TPbank: 30k', value: `05257200401 LE DOAN ANH QUAN` },
        { name: '\u200B', value: '\u200B' },
        { name: getRandom(randomEmotes) + ' Momo: 31k', value: `0367346680 LE DOAN ANH QUAN` },
        { name: '\u200B', value: '\u200B' },
        { name: getRandom(randomEmotes) + ' Paypal: 2$', value: `anhquan@ldaq.org` },
        { name: '\u200B', value: '\u200B' },
       
    )
    .setImage('https://cdn.discordapp.com/avatars/939491082717249558/ffb9b294305300620a00e1f1af169281.webp?size=128')
    .setTimestamp()
    .setFooter({ text: 'LDAQ.org', iconURL: 'https://cdn.discordapp.com/avatars/939491082717249558/ffb9b294305300620a00e1f1af169281.webp?size=128' });


module.exports = {
    name: "jabba help",
    description: "jabba provide basic commands",
    async execute(message) {
        let mes: string = message.content.toLowerCase()
        let mess: string = removeVN(mes)
        if (message.author.id === "939491082717249558") return;
        if (mess == 'jabba help') {
            message.channel.send({ embeds: [help] })
        }

        //jabba pay
        if (mess == 'jabba payment') {
            message.channel.send({ embeds: [payment] })
        }
    }
}