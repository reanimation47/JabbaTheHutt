import { getRandom } from "../functions/getRandomFromArray"
import { removeVN } from "../functions/removeVN"
import { randomEmotes } from "../jsons/lists"
const fetch = require('node-fetch')

import { getFlagEmoji } from "../functions/getFlagEmoji"
const CountryNames = require('../jsons/names.json')
module.exports = {
    name: 'GuessGen',
    description: 'Guess genders and nationalities by name',
    async execute(message) {
        let mes: string = message.content.toLowerCase()
        let mess: string = removeVN(mes)
        if (message.author.id === "939491082717249558") return;
        if (mess.includes('jabba guess')) {
            if (mess == 'jabba guess') {
                return
            }
            let a = mess.replace('jabba guess ', '')

            const guessData = async () => {
                fetch(`https://api.genderize.io/?name=${a}`)
                    .then(response => {
                        if (!response.ok){
                            throw new Error()
                        }
                        return response.json()
                    })
                    .then(data => {
                        if (data.gender == null) {
                            message.channel.send(`Jabba cant guess dis ${getRandom(randomEmotes)} `)
                            return
                        }
                        if (data.gender == 'male') {
                            message.channel.send(`${getRandom(randomEmotes)} Jabba is ${data.probability * 100}% sure "${data.name}" is a boy name 👦`)
                            return
                        }
                        if (data.gender == 'female') {
                            message.channel.send(`${getRandom(randomEmotes)} Jabba is ${data.probability * 100}% sure "${data.name}" is a girl name 👧`)
                            return
                        }





                    }).catch(error => {
                        console.log(error)
                        message.channel.send(`Hmmmm ${getRandom(randomEmotes)} jabba got some errors`)
                    });
            }
            const GuessNat = async () => {
                fetch(`https://api.nationalize.io/?name=${a}`)
                    .then(response => {
                        if (!response.ok){
                            throw new Error()
                        }
                        return response.json()
                    })
                    .then(data => {
                        if (data.country.length == 0) {
                            message.channel.send(`No nationality data for "${a}" ${getRandom(randomEmotes)}`)
                            return
                        }
                        message.channel.send(`${getRandom(randomEmotes)} Jabba also is ${data.country[0].probability.toFixed(2) * 100}% certain "${a}" is a ${CountryNames[data.country[0].country_id]}${getFlagEmoji(data.country[0].country_id)} name `)


                    }).catch(error => {
                        console.log(error)
                        message.channel.send(`Hmmmm ${getRandom(randomEmotes)} jabba got some errors`)
                    });
            }
            await guessData().then(() => {
                GuessNat()
            })

        }
    }
}