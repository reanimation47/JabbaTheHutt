
import { removeVN } from './../functions/removeVN'
import { getRandom } from './../functions/getRandomFromArray'
import { randomEmotes } from "../jsons/lists"
import { loseEmotes } from "../jsons/lists"
import { client } from "../index"
import {ask_gpt} from "../functions/openai-api"

module.exports = {
    name: 'OpenAI',
    description:'Jabba repeat something, and say deeznut..',
    async execute (message) {
        let mes: string = message.content.toLowerCase()
        let mess: string = removeVN(mes)
        if (message.author.id === "939491082717249558") return;

        if (mess.includes('jpt') && mess.includes('motiva')) {
            mess = mess.replace('jpt','')
            let _template_msg = `I want you to act as a motivational speaker. Put together words that inspire action and make people feel empowered to do something beyond their abilities. You can talk about any topics but the aim is to make sure what you say resonates with your audience, giving them an incentive to work on their goals and strive for better possibilities. My first request is "${mess}`
            //client.channels.cache.get("794818082584526868").send(mess);
            let _reply = await ask_gpt(_template_msg);
            message.channel.send(_reply);
        }else if (mess.includes('jpt') && mess.includes('magic') && mess.includes('trick')){
            mess = mess.replace('jpt','')
            let _template_msg = `I want you to act as a magician. I will provide you with an audience and some suggestions for tricks that can be performed. Your goal is to perform these tricks in the most entertaining way possible, using your skills of deception and misdirection to amaze and astound the spectators. My first request is "${mess}"`
            //client.channels.cache.get("794818082584526868").send(mess);
            let _reply = await ask_gpt(_template_msg);
            message.channel.send(_reply);
        }else if (mess.includes('jpt')){
            let _random:any = Math.random();
            let _template_msg:string;
            mess = mess.replace('jpt','')
            _template_msg = `I want you to act as a drunk person. You will only answer like a very drunk person texting and nothing else. Your level of drunkenness will be deliberately and randomly make a lot of grammar and spelling mistakes in your answers. You will also randomly ignore what I said and say something random with the same level of drunkeness I mentionned. Do not write explanations on replies. My sentence is ${mess}`

            mess = _random > 0.7 ? _template_msg : mess

            //client.channels.cache.get("794818082584526868").send(mess);
            let _reply = await ask_gpt(mess);
            if (_reply == null)
            {
                message.channel.send("jpt ain't available today" + getRandom(randomEmotes));
            }else
            {
                message.channel.send(_reply);
            }
            
        }
    }
}
