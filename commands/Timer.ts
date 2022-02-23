import { getRandom } from "../functions/getRandomFromArray"
import { removeVN } from "../functions/removeVN"
import { loseEmotes } from "./../lists"
import { randomEmotes } from "./../lists"
import { sumNumbers } from '../functions/sumNumbersFromString'

module.exports = {
    name: 'Timer',
    description: 'Jabba timer',
    execute(message) {
        let mes: string = message.content.toLowerCase()
        let mess: string = removeVN(mes)
        if (message.author.id === "939491082717249558") return;
        if (mess.includes('jabba count')) {
            let sum = sumNumbers(mess);
            if (isNaN(sum)) {
                message.channel.send(`U did something wrong ${message.author.username} ${getRandom(loseEmotes)}`)
                message.channel.send('Example : jabba count 10')
                return
            }
            let ms = sum * 1000;
            if (sum > 3600) {
                message.channel.send(`Jabba dont wanna count beyond 3600 seconds ${getRandom(randomEmotes)}`)
                return
            }
            message.channel.send(`⏱ jabba counting down from ${sum} seconds ${getRandom(randomEmotes)}`)
            function printEnd() {
                message.channel.send(`⏰ ${sum} seconds have passed. ${getRandom(randomEmotes)}`)
                console.log(`Jabba finished counting ${sum} seconds`)
            }
            function Count(time) {
                setTimeout(printEnd, time)
            }
            Count(ms)

        } else if (mess.includes('jabba remind me to')) {
            let sum = sumNumbers(mess);
            let work = mess.substring(19, mess.length - 4)
            if (isNaN(sum)) {
                message.channel.send(`U did something wrong ${message.author.username} ${getRandom(loseEmotes)}`)
                message.channel.send('Proper syntax : jabba remind me to study in 5')
                return
            }
            let ms = sum * 1000 * 60;
            if (sum > 60) {
                message.channel.send(`Jabba dont wanna count beyond 60 minutes ${getRandom(randomEmotes)}`)
                return
            }
            message.channel.send(`⏲ jabba will remind u to ${work}in ${sum} minutes ${getRandom(randomEmotes)} `)
            function printEnd() {
                message.channel.send(`⏰ ${sum} minutes have passed. ${getRandom(randomEmotes)}`)
                message.channel.send(`Hey ${message.author.username} its time to ${work} ${getRandom(randomEmotes)}`)
                console.log(`Jabba finished counting ${sum} minute`)
            }
            function Count(time) {
                setTimeout(printEnd, time)
            }
            Count(ms)

        } else if (mess.includes('jabba remind')) {
            let sum = sumNumbers(mess);
            if (isNaN(sum)) {
                message.channel.send(`U did something wrong ${message.author.username} ${getRandom(loseEmotes)}`)
                message.channel.send('Example : jabba remind 10')
                return
            }
            let ms = sum * 1000 * 60;
            if (sum > 60) {
                message.channel.send(`Jabba wont count beyond 60 minutes ${getRandom(randomEmotes)}`)
                return
            }
            message.channel.send(`⏱ jabba counting down from ${sum} minutes ${getRandom(randomEmotes)}`)
            function printEnd() {
                message.channel.send(`⏰ ${sum} minutes have passed. ${getRandom(randomEmotes)}`)
                console.log(`Jabba finished counting ${sum} minute`)
            }
            function Count(time) {
                setTimeout(printEnd, time)
            }
            Count(ms)

        }
    }
}