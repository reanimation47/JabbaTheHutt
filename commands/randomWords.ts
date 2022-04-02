
import { removeVN } from "../functions/removeVN"
const {
    sentence
} = require('txtgen/dist/cjs/txtgen.js')

module.exports = {
    name: 'randomWords',
    description: 'just spitting random words',
    execute(message) {
        let mes = message.content.toLowerCase()
        let mess = removeVN(mes)
        if (message.author.id === "939491082717249558") return;
        if (mess.includes('fatcheck') || mess.includes('jabba fat')) {
            while (true) {
                let a = sentence()
                if (!a.includes('However')) {
                    message.channel.send(a)
                    break;
                }
            }
        }
    }
}
