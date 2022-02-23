import { removeVN } from './../functions/removeVN'
import { getRandom } from './../functions/getRandomFromArray'
import { randomEmotes } from "./../lists"
import { loseEmotes } from "./../lists"

let badwords = require('badwords/array');
const range = ['10', '11', '12', '9', '8']
function Curse() {
    let i = ''
    let index = 0
    let rangex = getRandom(range)
    while (index < rangex) {
        let word = getRandom(badwords)
        i = i + ' ' + word
        index++
    }
    return i
}

module.exports = {
    name: 'cursingDMs',
    descriptions: 'jabba cursing randomly',
    async execute(message) {
        let mes: string = message.content.toLowerCase()
        let mess: string = removeVN(mes)
        if (message.author.id === "939491082717249558") return;
        if (message.author.bot) { return }
        if (message.guild === null) {
            await console.log(`Received partial message- ${message.author.id}: ${message} from ${message.author.username}`);
            await message.author.send(`${getRandom(randomEmotes)} ${Curse()} ${getRandom(randomEmotes)} ${message.author.username}`)
            return;
        }
        if ((mess.includes('dm')||mess.includes('dit me')||mess.includes('ditme')||mess.includes('cunt')||mess.includes('fuck')||mess.includes('fk')) && mess.includes('jabba')) {
            await message.channel.send(getRandom(loseEmotes)+getRandom(randomEmotes))
            await console.log(`Received partial message- ${message.author.id}: ${message} from ${message.author.username}`);
            await message.author.send(`${getRandom(randomEmotes)} ${Curse()} ${getRandom(randomEmotes)} ${message.author.username}`)
            return;
        }

    }
}