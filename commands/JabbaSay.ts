import { removeVN } from './../functions/removeVN'
import { getRandom } from './../functions/getRandomFromArray'
import { randomEmotes } from "../jsons/lists"
import { loseEmotes } from "../jsons/lists"
import { client } from "../index"

module.exports = {
    name: 'JabbaSay',
    description:'Jabba repeat something',
    async execute(message) {
        let mes: string = message.content.toLowerCase()
        let mess: string = removeVN(mes)
        if (message.author.id === "939491082717249558") return;
        if (mess.includes('jabba say')) {
            mess = mess.replace('jabba say','')
            client.channels.cache.get("794818082584526868").send(mess);
        }
    }
}
