import { getRandom } from "../functions/getRandomFromArray"
import { removeVN } from "../functions/removeVN"
import { loseEmotes } from "./../lists"
import { randomEmotes } from "./../lists"

import { client } from ".."


const laugh = ["https://tenor.com/view/jabba-the-hutt-star-wars-gif-12663815", "https://tenor.com/view/jabba-laugh-star-wars-haha-mood-gif-11764102", "https://tenor.com/view/woahaha-jabba-starwars-gif-19246551", "https://tenor.com/view/jabba-the-hutt-laugh-monster-gif-13644611", "https://tenor.com/view/jabba-chumbolo-laugh-botek-solo-gif-24199365"];
const { DisTube } = require('distube')
const distube = new DisTube(client, {
    searchSongs: 10,
    searchCooldown: 30,
    leaveOnEmpty: false,
    leaveOnFinish: false,
    leaveOnStop: false,

})

const prefix = "jabba"

//Bot status messages
const status = queue =>
  `Volume: \`${queue.volume}%\` | Filter: \`${queue.filters.join(", ") || "Off"}\` | Loop: \`${queue.repeatMode ? (queue.repeatMode === 2 ? "All Queue" : "This Song") : "Off"
  }\` | Autoplay: \`${queue.autoplay ? "On" : "Off"}\``

//Bot event listeners
distube
  .on("playSong", (queue, song) =>
    queue.textChannel.send(
      `🎵 jabba playing \`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${song.user.tag} ${getRandom(randomEmotes)} \n${status(queue)}🎶`
    )
  )
  .on("addSong", (queue, song) =>
    queue.textChannel.send(`jabba added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user.tag} ${getRandom(randomEmotes)}`)
  )
  .on("addList", (queue, playlist) =>
    queue.textChannel.send(
      `jabba added \`${playlist.name}\` playlist (${playlist.songs.length} songs) to queue\n${status(queue)} ${getRandom(randomEmotes)}`
    )
  )
  .on("error", (textChannel, e) => {
    console.error(e)
    textChannel.send(`An error encountered`)
  })
  .on("finish", queue => queue.textChannel.send(`jabba done ${getRandom(randomEmotes)}`))
  .on("finishSong", queue => queue.textChannel.send(`jabba done ${getRandom(randomEmotes)}`))
  .on("disconnect", queue => queue.textChannel.send(`jabba gone ${getRandom(randomEmotes)}`))
  .on("empty", queue => queue.textChannel.send(`jabba u dumb ${getRandom(randomEmotes)}`))
  // DisTubeOptions.searchSongs > 1
  .on("searchResult", (message, result) => {
    let i = 0
    message.channel.send(
      `**Choose an option from below**\n${result
        .map(song => `**${++i}**. ${song.name} - \`${song.formattedDuration}\``)
        .join("\n")}\n*Enter anything else or wait 30 seconds to cancel* ${getRandom(randomEmotes)}`
    )
  })
  .on("searchCancel", message => message.channel.send(`Searching canceled ${getRandom(randomEmotes)}`))
  .on("searchInvalidAnswer", message => message.channel.send(`Invalid number of result. ${getRandom(randomEmotes)}`))
  .on("searchNoResult", message => message.channel.send(`No result found! ${getRandom(randomEmotes)}`))
  .on("searchDone", () => { })


module.exports = {
    name: 'MusicBot',
    description: 'play yt musics',
    async execute(message) {
        if (!message.content.startsWith(prefix) || message.author.bot) return

        const args: any = message.content.slice(prefix.length).trim().split(/ +/g)
        const command = args.shift().toLowerCase()

        if (command === 'play') {


            if (!message.member.voice.channel) {
                message.channel.send(`jabba u dumb ${getRandom(randomEmotes)}`)
                let random = Math.floor(Math.random() * laugh.length);
                message.channel.send(laugh[random]);
                return
            }
            if (!args[0]) {
                message.channel.send(`jabba u dumbass`)
                let random = Math.floor(Math.random() * laugh.length);
                message.channel.send(laugh[random]);
                return
            }
            message.channel.send(`jabba bout to play a song ${getRandom(randomEmotes)}`)
            await distube.play(message, args.join(' '))
        }

        if (["repeat", "loop"].includes(command)) {
            const mode = distube.setRepeatMode(message)
            message.channel.send(`${getRandom(randomEmotes)} jabba set repeat mode to \`${mode ? (mode === 2 ? "All Queue" : "This Song") : "Off"}\``)
        }

        if (command === 'stop') {

            const bot = message.guild.members.cache.get(client.user.id);
            if (!message.member.voice.channel) {
                message.channel.send(`jabba u dumb ${getRandom(randomEmotes)}`)
                let random = Math.floor(Math.random() * laugh.length);
                message.channel.send(laugh[random]);
                return
            }
            if (bot.voice.channel !== message.member.voice.channel) {
                message.channel.send(`jabba u dumb dumb ${getRandom(randomEmotes)}`)
                let random = Math.floor(Math.random() * laugh.length);
                message.channel.send(laugh[random]);
                return
            }
            await distube.stop(message)
            message.channel.send(`jabba stopped ${getRandom(randomEmotes)}`)

        }

        if (command === 'stfu') {

            const bot = message.guild.members.cache.get(client.user.id);
            if (!message.member.voice.channel) {
                message.channel.send(`jabba u dumb ${getRandom(randomEmotes)}`)
                let random = Math.floor(Math.random() * laugh.length);
                message.channel.send(laugh[random]);
                return
            }
            if (bot.voice.channel !== message.member.voice.channel) {
                message.channel.send(`jabba u dumb dumb ${getRandom(randomEmotes)}`)
                let random = Math.floor(Math.random() * laugh.length);
                message.channel.send(laugh[random]);
                return
            }
            await distube.stop(message)
            message.channel.send(`jabba stopped ${getRandom(randomEmotes)}`)

        }

        if ([`3d`, `bassboost`, `echo`, `karaoke`, `nightcore`, `vaporwave`].includes(command)) {
            const filter = await distube.setFilter(message, command)
            message.channel.send(`Current queue filter: ${filter.join(", ") || "Off"} ${getRandom(randomEmotes)} `)
        }
        if (command == "volume") {
            if (isNaN(args[0])) {
                message.channel.send(`jabba u dumbling ${getRandom(randomEmotes)}`)
                let random = Math.floor(Math.random() * laugh.length);
                message.channel.send(laugh[random]);
                return
            }
            await distube.setVolume(message, Number(args[0]));
            message.channel.send(`jabba changed volume to ${args[0]}% ${getRandom(randomEmotes)}`)
        }



        if (command === "leave") {
            const bot = message.guild.members.cache.get(client.user.id);
            if (!message.member.voice.channel) {
                message.channel.send(`jabba u dumb ${getRandom(randomEmotes)}`)
                let random = Math.floor(Math.random() * laugh.length);
                message.channel.send(laugh[random]);
                return
            }
            if (bot.voice.channel !== message.member.voice.channel) {
                message.channel.send(`jabba u dumb dumb ${getRandom(randomEmotes)}`)
                let random = Math.floor(Math.random() * laugh.length);
                message.channel.send(laugh[random]);
                return
            }
            await distube.voices.get(message)?.leave()
            message.channel.send(`jabba left ${getRandom(randomEmotes)}`)
        }
        if (command === "resume") {
            const bot = message.guild.members.cache.get(client.user.id);
            if (!message.member.voice.channel) {
                message.channel.send('jabba u dumb')
                let random = Math.floor(Math.random() * laugh.length);
                message.channel.send(laugh[random]);
                return
            }
            if (bot.voice.channel !== message.member.voice.channel) {
                message.channel.send('jabba u dumb dumb')
                let random = Math.floor(Math.random() * laugh.length);
                message.channel.send(laugh[random]);
                return
            }
            await distube.resume(message)
            message.channel.send("jabba resumed")
        }

        if (command === "pause") {
            const bot = message.guild.members.cache.get(client.user.id);
            if (!message.member.voice.channel) {
                message.channel.send('jabba u dumb')
                let random = Math.floor(Math.random() * laugh.length);
                message.channel.send(laugh[random]);
                return
            }
            if (bot.voice.channel !== message.member.voice.channel) {
                message.channel.send('jabba u dumb dumb')
                let random = Math.floor(Math.random() * laugh.length);
                message.channel.send(laugh[random]);
                return
            }
            await distube.pause(message)
            message.channel.send("jabba paused")
        }
        if (command === "skip") {
            const bot = message.guild.members.cache.get(client.user.id);
            if (!message.member.voice.channel) {
                message.channel.send('jabba u dumb')
                let random = Math.floor(Math.random() * laugh.length);
                message.channel.send(laugh[random]);
                return
            }
            if (bot.voice.channel !== message.member.voice.channel) {
                message.channel.send('jabba u dumb dumb')
                let random = Math.floor(Math.random() * laugh.length);
                message.channel.send(laugh[random]);
                return
            }
            await distube.skip(message)
            message.channel.send("jabba skipped")
        }

        if (command === "queue") {
            const queue = await distube.getQueue(message)
            if (!queue) {
                message.channel.send(`jabba no playing rn`)
            } else {
                message.channel.send(
                    `Current queue:\n${queue.songs
                        .map((song, id) => `**${id ? id : "Playing"}**. ${song.name} - \`${song.formattedDuration}\``)
                        .slice(0, 10)
                        .join("\n")}`
                )
            }



        }
    }
}