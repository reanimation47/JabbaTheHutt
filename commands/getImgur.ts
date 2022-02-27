require('dotenv').config({ path: './../.env' })
const fetch = require('node-fetch')
import { getRandom } from "../functions/getRandomFromArray"
import { removeVN } from "../functions/removeVN"
import { loseEmotes } from "../jsons/lists"
import { randomEmotes } from "../jsons/lists"
let clientID = process.env.IMGUR_ID


// const WeatherData = async () => {
//     fetch(`https://weatherdbi.herokuapp.com/data/weather/${region}`)
//         .then(response => {
//             if (!response.ok){
//                 throw new Error()
//             }
//             return response.json()
//         })
//         .then(data => {


//         }).catch(error => {
//             console.log(error)
//             message.channel.send(`Hmmmm ${getRandom(randomEmotes)} jabba got some errors`)
//         });
// }

module.exports = {
    name: 'getImgur',
    description: 'get imgur images by search',
    async execute(message) {
        let mes: string = message.content.toLowerCase()
        let mess: string = removeVN(mes)
        if (message.author.id === "939491082717249558") return;
        if (mess.includes('pic')) {
            let search = mess.replace('pic', '')
            const getImgur = async () => {
                fetch(`https://api.imgur.com/3/gallery/search/top/all/?q=${search}`, {
                    method: 'GET',
                    headers: {
                        Authorization: `Client-ID ${clientID}`
                    },
                    redirect: 'follow'
                })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error()
                        }
                        return response.json()
                    })
                    .then(data => {
                        if (data.data.length==0){
                            message.channel.send(`No pic found ${getRandom(randomEmotes)} `)
                            return
                        }
                        let choice = Math.floor(Math.random() * (data.data.length + 1));
                        let img = data.data[choice].link
                        if (img.includes('i.imgur')&&((typeof img)=='string')) {
                            message.channel.send({ files: [img] });
                            console.log('img: ' + img)
                            console.log(typeof img)
                            return
                        } else {
                            message.channel.send(img)
                            console.log(img)
                            console.log(typeof img)
                        }

                    }).catch(error => {
                        console.log(error)
                        message.channel.send(`Hmmmm ${getRandom(randomEmotes)} jabba got some errors`)
                    });
            }
            await getImgur()
        }
    }
}