import { getRandom } from "../functions/getRandomFromArray"
import { removeVN } from "../functions/removeVN"
import { drawEmotes } from "./../lists"
import { winEmotes } from "./../lists"
import { loseEmotes } from "./../lists"
import { randomEmotes } from "./../lists"

const { google } = require("googleapis")
const auth = new google.auth.GoogleAuth({
    keyFile: "credentials.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
})
const getSpreadsheet = async (Sheetname) => {
    const client = await auth.getClient

    const googleSheets = google.sheets({ version: "v4", auth: client });

    const spreadsheetId = '1ykziNQrh49vtgGWaXP3SdwX8zYeRbjoh576opXkjOCI'

    const getRows = await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId,
        range: Sheetname,
    })
    return getRows

}

const updateRows = async (x, y, a, b, c) => {

    const client = await auth.getClient

    const googleSheets = google.sheets({ version: "v4", auth: client });

    const spreadsheetId = '1ykziNQrh49vtgGWaXP3SdwX8zYeRbjoh576opXkjOCI'

    await googleSheets.spreadsheets.values.update({
        auth,
        spreadsheetId,
        range: `Sheet1!A${x}:C${y}`,
        valueInputOption: "USER_ENTERED",
        resource: {
            values: [
                [a, b, c],
            ]
        }
    })

}

const updateSingleRow = async (name, x, a) => {

    const client = await auth.getClient

    const googleSheets = google.sheets({ version: "v4", auth: client });

    const spreadsheetId = '1ykziNQrh49vtgGWaXP3SdwX8zYeRbjoh576opXkjOCI'

    await googleSheets.spreadsheets.values.update({
        auth,
        spreadsheetId,
        range: `${name}!${x}`,
        valueInputOption: "USER_ENTERED",
        resource: {
            values: [
                [a],
            ]
        }
    })

}

const addRows = async (name, x, y, a, b, c) => {

    const client = await auth.getClient

    const googleSheets = google.sheets({ version: "v4", auth: client });

    const spreadsheetId = '1ykziNQrh49vtgGWaXP3SdwX8zYeRbjoh576opXkjOCI'

    await googleSheets.spreadsheets.values.append({
        auth,
        spreadsheetId,
        range: `${name}!A${x}:C${y}`,
        valueInputOption: "USER_ENTERED",
        resource: {
            values: [
                [a, b, c],
            ]
        }
    })

}

module.exports = {
    name: 'OneTwoThree',
    description: 'Just a 123 game',
    async execute(message) {
        let list123 = ['✋', '👊', ':v:']
        let mes: string = message.content.toLowerCase()
        let mess: string = removeVN(mes)
        if (message.author.id === "939491082717249558") return;
        if (mess.includes('✋') || (mess.includes('🤚')) || (mess.includes('🖐'))) {
            const userID = message.author.id
            let botChoice = list123[Math.floor(Math.random() * list123.length)];
            message.channel.send(botChoice)
            // If jabba draws
            if (botChoice == '✋') {
                message.channel.send(getRandom(drawEmotes) + getRandom(drawEmotes))
            }
            //If jabba loses
            if (botChoice == '👊') {
                message.channel.send(getRandom(winEmotes) + getRandom(winEmotes))
                await getSpreadsheet('OneTwoThree').then((sheet) => {
                    const len = sheet.data.values.length

                    //Check if user already exists
                    let i = 0
                    let check = false
                    let index
                    while (i < len) {
                        if (sheet.data.values[i][0] == message.author.id) {
                            check = true
                            index = i
                        }
                        i++
                    }
                    index = +index
                    //If user exists
                    if (check === true) {
                        let wins = sheet.data.values[index][1]
                        wins = +wins + 1
                        updateSingleRow('OneTwoThree', `B${index + 1}`, wins)
                    }
                    if (check === false) {
                        addRows('OneTwoThree', len + 1, len + 1, userID, 1, 0)
                    }
                })
            }


            //If jabba wins
            if (botChoice == ':v:') {
                message.channel.send(getRandom(loseEmotes) + getRandom(loseEmotes))
                await getSpreadsheet('OneTwoThree').then((sheet) => {
                    const len = sheet.data.values.length

                    //Check if user already exists
                    let i = 0
                    let check = false
                    let index
                    while (i < len) {
                        if (sheet.data.values[i][0] == message.author.id) {
                            check = true
                            index = i
                        }
                        i++
                    }
                    index = +index
                    //If user exists
                    if (check === true) {
                        let loses = sheet.data.values[index][2]
                        loses = +loses + 1
                        updateSingleRow('OneTwoThree', `C${index + 1}`, loses)
                    }
                    if (check === false) {
                        addRows('OneTwoThree', len + 1, len + 1, userID, 0, 1)
                    }
                })
            }

        }


        if (mess.includes('👊') || mess.includes('✊') || mess.includes('🤛') || mess.includes('🤜')) {
            const userID = message.author.id
            let botChoice = list123[Math.floor(Math.random() * list123.length)];
            message.channel.send(botChoice)
            // If jabba draws
            if (botChoice == '👊') {
                message.channel.send(getRandom(drawEmotes) + getRandom(drawEmotes))
            }
            //If jabba loses
            if (botChoice == ':v:') {
                message.channel.send(getRandom(winEmotes) + getRandom(winEmotes))
                await getSpreadsheet('OneTwoThree').then((sheet) => {
                    const len = sheet.data.values.length

                    //Check if user already exists
                    let i = 0
                    let check = false
                    let index
                    while (i < len) {
                        if (sheet.data.values[i][0] == message.author.id) {
                            check = true
                            index = i
                        }
                        i++
                    }
                    index = +index
                    //If user exists
                    if (check === true) {
                        let wins = sheet.data.values[index][1]
                        wins = +wins + 1
                        updateSingleRow('OneTwoThree', `B${index + 1}`, wins)
                    }
                    if (check === false) {
                        addRows('OneTwoThree', len + 1, len + 1, userID, 1, 0)
                    }
                })
            }


            //If jabba wins
            if (botChoice == '✋') {
                message.channel.send(getRandom(loseEmotes) + getRandom(loseEmotes))
                await getSpreadsheet('OneTwoThree').then((sheet) => {
                    const len = sheet.data.values.length

                    //Check if user already exists
                    let i = 0
                    let check = false
                    let index
                    while (i < len) {
                        if (sheet.data.values[i][0] == message.author.id) {
                            check = true
                            index = i
                        }
                        i++
                    }
                    index = +index
                    //If user exists
                    if (check === true) {
                        let loses = sheet.data.values[index][2]
                        loses = +loses + 1
                        updateSingleRow('OneTwoThree', `C${index + 1}`, loses)
                    }
                    if (check === false) {
                        addRows('OneTwoThree', len + 1, len + 1, userID, 0, 1)
                    }
                })
            }

        }
        if (mess.includes('✌️')) {
            const userID = message.author.id
            let botChoice = list123[Math.floor(Math.random() * list123.length)];
            message.channel.send(botChoice)
            // If jabba draws
            if (botChoice == ':v:') {
                message.channel.send(getRandom(drawEmotes) + getRandom(drawEmotes))
            }
            //If jabba loses
            if (botChoice == '✋') {
                message.channel.send(getRandom(winEmotes) + getRandom(winEmotes))
                await getSpreadsheet('OneTwoThree').then((sheet) => {
                    const len = sheet.data.values.length

                    //Check if user already exists
                    let i = 0
                    let check = false
                    let index
                    while (i < len) {
                        if (sheet.data.values[i][0] == message.author.id) {
                            check = true
                            index = i
                        }
                        i++
                    }
                    index = +index
                    //If user exists
                    if (check === true) {
                        let wins = sheet.data.values[index][1]
                        wins = +wins + 1
                        updateSingleRow('OneTwoThree', `B${index + 1}`, wins)
                    }
                    if (check === false) {
                        addRows('OneTwoThree', len + 1, len + 1, userID, 1, 0)
                    }
                })
            }


            //If jabba wins
            if (botChoice == '👊') {
                message.channel.send(getRandom(loseEmotes) + getRandom(loseEmotes))
                await getSpreadsheet('OneTwoThree').then((sheet) => {
                    const len = sheet.data.values.length

                    //Check if user already exists
                    let i = 0
                    let check = false
                    let index
                    while (i < len) {
                        if (sheet.data.values[i][0] == message.author.id) {
                            check = true
                            index = i
                        }
                        i++
                    }
                    index = +index
                    //If user exists
                    if (check === true) {
                        let loses = sheet.data.values[index][2]
                        loses = +loses + 1
                        updateSingleRow('OneTwoThree', `C${index + 1}`, loses)
                    }
                    if (check === false) {
                        addRows('OneTwoThree', len + 1, len + 1, userID, 0, 1)
                    }
                })
            }

        }
        if (mess == 'jabba my stats') {
            const userID = message.author.id
            await getSpreadsheet('OneTwoThree').then((sheet) => {
              const len = sheet.data.values.length
              //Check if user already exists
              let i = 0
              let check = false
              let index
              while (i < len) {
                if (sheet.data.values[i][0] == message.author.id) {
                  check = true
                  index = i
                }
                i++
              }
              index = +index
        
              //If user already exists
              if (check === true) {
                let wins = +sheet.data.values[index][1]
                let loses = +sheet.data.values[index][2]
                let winrate = (wins / (wins + loses) * 100).toFixed(2)
                message.channel.send(`<@${userID}>'s stats: \nWins: ${wins}. \nLoses: ${loses}. \nWinrate: ${winrate}%. ${getRandom(randomEmotes)}`)
              }
              if (check === false) {
                message.channel.send(`Jabba's never played with u ${getRandom(loseEmotes)}`)
              }
            })
          }
          if (mess == 'jabba top 123') {
            await getSpreadsheet('OneTwoThree').then((sheet) => {
              const len = sheet.data.values.length
              message.channel.send(`Top OneTwoThree Wins: ${getRandom(randomEmotes)}`)
              let i = 1
              while (i < len) {
        
                let user = `<@${sheet.data.values[i][4]}>`
        
                let wins = +sheet.data.values[i][5]
                let loses = +sheet.data.values[i][6]
                let winrate = (wins / (wins + loses) * 100).toFixed(2)
                message.channel.send(`${i}.${user} - Wins: ${wins} - Winrate: ${winrate}% ${getRandom(randomEmotes)}`)
                i++
              }
        
        
            })
          }

    }
}
