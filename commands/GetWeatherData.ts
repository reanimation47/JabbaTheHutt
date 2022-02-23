import { getRandom } from "../functions/getRandomFromArray"
import { removeVN } from "../functions/removeVN"
import { loseEmotes } from "./../lists"
import { randomEmotes } from "./../lists"

import { StringSum } from "../functions/StringSum"
const fetch = require('node-fetch')
module.exports = {
    name: 'GetWeatherData',
    description: 'Get weather data.',
    async execute(message) {
        let mes: string = message.content.toLowerCase()
        let mess: string = removeVN(mes)
        if (message.author.id === "939491082717249558") return;
        if (mess.includes('jabba weather in ')) {
            let er = StringSum(mess)
            let daysX = mess.replace(/[^0-9]/g, '')
            let days: number = +daysX
            if (er === 0) {
                message.channel.send(`Incorrect syntax. ${getRandom(randomEmotes)} \nSample: jabba weather in 2 hanoi. \nOr: jabba weather hanoi`)
                return
            }
            if (days < 0 || days > 7) {
                message.channel.send(`The number of days can't be less than 1 or greater than 8 ${getRandom(loseEmotes)}`)
                message.channel.send(`Do "jabba weather hanoi" for today's weather ${getRandom(randomEmotes)}`)
                return
            }
            let region = mess.replace('jabba weather in', '').replace(/[0-9]/g, '').replace('  ', '')

            message.channel.send(`Getting weather data for ${region} in the next ${days} day(s)`)
            const WeatherData = async () => {
                fetch(`https://weatherdbi.herokuapp.com/data/weather/${region}`)
                    .then(response => {
                        if (!response.ok){
                            throw new Error()
                        }
                        return response.json()
                    })
                    .then(data => {
                        let regionData = data.region
                        let daytime = data.next_days[days].day
                        let maxTemp = data.next_days[days].max_temp.c
                        let minTemp = data.next_days[days].min_temp.c
                        let comment = data.next_days[days].comment
                        message.channel.send(`Region: ${regionData}. \nDay: ${daytime}. \nMax Temp: ${maxTemp} °C. ${getRandom(randomEmotes)} \nMin Temp: ${minTemp} °C. \nWeather: ${comment} ${getRandom(randomEmotes)}`)


                    }).catch(error => {
                        console.log(error)
                        message.channel.send(`Hmmmm ${getRandom(randomEmotes)} jabba got some errors`)
                    });
            }
            await WeatherData()
            return
        }
        if (mess.includes('jabba weather')) {
            let region = mess.replace('jabba weather ', '')
            const WeatherData = async () => {
                fetch(`https://weatherdbi.herokuapp.com/data/weather/${region}`)
                    .then(response => {
                        if (!response.ok){
                            throw new Error()
                        }
                        return response.json()
                    })
                    .then(data => {
                        let wind = data.currentConditions.wind.km
                        let regionData = data.region
                        let dayhour = data.currentConditions.dayhour
                        let Temp = data.currentConditions.temp.c
                        let humidity = data.currentConditions.humidity
                        let weather = data.currentConditions.comment
                        let precip = data.currentConditions.precip
                        message.channel.send(`Region: ${regionData}. \nDayhour: ${dayhour}. \nCurrent Temp: ${Temp} °C. ${getRandom(randomEmotes)} \nChance of rain: ${precip} \nHumidity: ${humidity}. \nWind: ${wind} km/h \nWeather: ${weather} ${getRandom(randomEmotes)}`)


                    }).catch(error => {
                        console.log(error)
                        message.channel.send(`Hmmmm ${getRandom(randomEmotes)} jabba got some errors`)
                    });
            }
            await WeatherData()
        }
    }
}