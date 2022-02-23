import { getRandom } from "../functions/getRandomFromArray"
import { removeVN } from "../functions/removeVN"
import { randomEmotes } from "./../lists"
const fetch = require('node-fetch')

module.exports = {
    name: 'getCrypto',
    description: 'as name',
    async execute(message){
        let mes: string = message.content.toLowerCase()
        let mess: string = removeVN(mes)
        if (message.author.id === "939491082717249558") return;
        if (mess.includes('bitcoin') || mess.includes('btc')) {
            const getBtcData = async () => {
              fetch('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD')
                .then(response => {
                    if (!response.ok){
                        throw new Error()
                    }
                    return response.json()
                })
                .then(data => {
                  console.log(data);
                  message.channel.send(`bitcoin price rn is ${data.USD}$ ${getRandom(randomEmotes)}`)
                }).catch(error => {
                    console.log(error)
                    message.channel.send(`Hmmmm ${getRandom(randomEmotes)} jabba got some errors`)
                });
            }
            getBtcData()
          } else if (mess.includes('ethereum') || mess.includes('eth')) {
            const getBtcData = async () => {
              fetch('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD')
                .then(response => {
                    if (!response.ok){
                        throw new Error()
                    }
                    return response.json()
                })
                .then(data => {
                  console.log(data);
                  message.channel.send(`ethereum price rn is ${data.USD}$ ${getRandom(randomEmotes)}`)
                }).catch(error => {
                    console.log(error)
                    message.channel.send(`Hmmmm ${getRandom(randomEmotes)} jabba got some errors`)
                });
            }
            getBtcData()
          }
    }
}