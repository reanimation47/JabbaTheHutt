import { removeVN } from './../functions/removeVN'
import { getRandom } from './../functions/getRandomFromArray'
import { randomEmotes } from "../jsons/lists"
import { loseEmotes } from "../jsons/lists"
import { client } from "../index"

module.exports = {
    name: 'JabbaSay',
    description:'Jabba repeat something, and say deeznut..',
    async execute(message) {
        let mes: string = message.content.toLowerCase()
        let mess: string = removeVN(mes)
        if (message.author.id === "939491082717249558") return;
        if (mess.includes('jabba say')) {
            mess = mess.replace('jabba say','')
            client.channels.cache.get("794818082584526868").send(mess);
        }
        if (mess.includes('699533303044374528')) {
            // let user = client.users.cache.get("699533303044374528");
            // console.log(user)
            message.reply('deeznuts'+getRandom(randomEmotes))
        }
    }
}
