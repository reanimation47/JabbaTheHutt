import { removeVN } from './../functions/removeVN'
import { getRandom } from './../functions/getRandomFromArray'
import { randomEmotes } from "../jsons/lists"
import { loseEmotes } from "../jsons/lists"
import { client } from "../index"

var cron = require('node-cron');

const { Client } = require('exaroton');
const exaroton = new Client('Y1ZfMZHTRHC4X7DuiscHPH6wpt4AFHs5wRHWNYibQ8pM17v6nWRoFeDaPfgm7riPBuWNKZSRuhCzAwWDELeUAShqtCMbELUAHES8');

cron.schedule('0 9 * * *', async () => {
                //client.channels.cache.get("794818082584526868").send("Hello")

                let account = await exaroton.getAccount();
                console.log("My account is " + account.name + " and I have " + account.credits + " credits.");

		client.channels.cache.get("794818082584526868").send("Daily update: \nThe minecraft server has " + account.credits + " credits left")
        });


module.exports = {
    name: 'JabbaCronJobs',
    descriptions: 'jabba cron jobs',
    async execute(message) {
    }
}

