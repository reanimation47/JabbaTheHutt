import { Intents, Message } from 'discord.js';
import * as DiscordJS from 'discord.js'
import * as dotenv from 'dotenv';
import fetch from 'cross-fetch';
const { DisTube } = require('distube')
dotenv.config();

const client = new DiscordJS.Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.DIRECT_MESSAGES,
  ]
});
// const distube = new DisTube.default(client)


client.on('ready', () => {
  console.log('The bot is ready')
  const guildId = '699533464151654471'
  const guild = client.guilds.cache.get(guildId)

  let commands

  if (guild) {
    commands = guild.commands
  } else {
    commands = client.application?.commands
  }
  commands?.create({
    name: 'chuibanh',
    description: 'bạn muốn chửi bảnh mấy lần?',
    options: [
      {
        name: 'solan',
        description: 'so lan chui',
        required: true,
        type: DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER,
      }
    ]
  });

  commands?.create({
    name: 'ping',
    description: 'Replies with pong.',
  });

  commands?.create({
    name: 'add',
    description: "adds two number",
    options: [
      {
        name: 'num1',
        description: ' da first',
        required: true,
        type: DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER,

      },
      {
        name: 'num2',
        description: 'da second',
        required: true,
        type: DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER,

      }

    ]
  })


})
//Jabba's gifs
const laugh = ["https://tenor.com/view/jabba-the-hutt-star-wars-gif-12663815", "https://tenor.com/view/jabba-laugh-star-wars-haha-mood-gif-11764102", "https://tenor.com/view/woahaha-jabba-starwars-gif-19246551", "https://tenor.com/view/jabba-the-hutt-laugh-monster-gif-13644611", "https://tenor.com/view/jabba-chumbolo-laugh-botek-solo-gif-24199365"];
const sexi = ["https://tenor.com/view/leia-jabba-gif-8984830", "https://tenor.com/view/leia-organa-slave-leia-leia-bikini-leia-metal-bikini-star-wars-gif-17965323", "https://tenor.com/view/jabba-leia-jabba-leia-jabba-lick-gif-18933413", "https://tenor.com/view/slave-leia-jabba-jabba-leia-jabba-lick-bricosplay-gif-23134280"]


//Random imgur
function randomString() {
  var chars = '01234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz';
  var stringlength = 5; /* could be 6 or 7, but takes forever because there are lots of dead images */
  var text = '';
  for (var i = 0; i < stringlength; i++) {
    var rnum = Math.floor(Math.random() * chars.length);
    text += chars.substring(rnum, rnum + 1);
  }

  let source = 'http://i.imgur.com/' + text + '.jpg';
  return source


};

let a = randomString();
console.log(a)



// Get img's metadata
const probe = require('probe-image-size');
async function getData(img: any) {
  let result = await probe(img);
  return result.url
}



//Get random valid imgur images
async function valid() {
  let imgUrl
  let con = true
  while (con === true) {
    let rand = await randomString()
    imgUrl = await getData(rand)
    con = imgUrl.includes('removed')
    console.log(imgUrl)

  }
  return imgUrl



}



// (async () => {
//   const res = await valid()
//   console.log(`da stuff is ${res}`)
// })();






// Calc jail time left

const outTime = new Date("Nov 13, 2029 15:37:25").getTime();
let now = new Date().getTime();

let distance = outTime - now;
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
// var seconds = Math.floor((distance % (1000 * 60)) / 1000);

// Calc sum from all 1-digit from string
function StringSum(str: string) {
  let nums = [];
  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    if (!isNaN(Number(str[i]))) {
      nums.push(Number(str[i]));
    }
  }
  console.log(nums);
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
}

//Calc all digits from string


function sumNumbers(string: string) {
  let pos = 1;
  let numArray = [];
  let numString = null;

  for (let num of string) {
    let isParsed = isNaN(parseInt(num));
    if (!numString && !isParsed && pos === string.length) {
      numArray.push(num);
    } else if (!numString && !isParsed && pos !== string.length) {
      numString = num;
    } else if (numString && !isParsed && pos === string.length) {
      numString += num;
      numArray.push(numString);
    } else if (numString && isParsed && pos === string.length) {
      numArray.push(numString);
    } else if (numString && !isParsed) {
      numString += num;
    } else if (numString && isParsed && pos !== string.length) {
      numArray.push(numString);
      numString = null;
    } else if (!numString && isParsed && pos === string.length) {
      numString += num;
      numArray.push(numString);
    }
    pos++;
  }
  //   console.log('numAray:', numArray);
  let result = 0;

  for (let num of numArray) {
    let value = parseInt(num!);
    result += value;
  }
  return result;
}

// Multiply digits 
function mulStr(string: string) {
  let pos = 1;
  let numArray = [];
  let numString = null;

  for (let num of string) {
    let isParsed = isNaN(parseInt(num));
    if (!numString && !isParsed && pos === string.length) {
      numArray.push(num);
    } else if (!numString && !isParsed && pos !== string.length) {
      numString = num;
    } else if (numString && !isParsed && pos === string.length) {
      numString += num;
      numArray.push(numString);
    } else if (numString && isParsed && pos === string.length) {
      numArray.push(numString);
    } else if (numString && !isParsed) {
      numString += num;
    } else if (numString && isParsed && pos !== string.length) {
      numArray.push(numString);
      numString = null;
    } else if (!numString && isParsed && pos === string.length) {
      numString += num;
      numArray.push(numString);
    }
    pos++;
  }
  //   console.log('numAray:', numArray);
  let result = 1;

  for (let num of numArray) {
    let value = parseInt(num!);
    result = result * value;
  }
  return result;
}




// Remove accents

function removeVN(str: string) {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
  str = str.replace(/Đ/g, "D");
  // Some system encode vietnamese combining accent as individual utf-8 characters
  // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
  str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
  // Remove extra spaces
  // Bỏ các khoảng trắng liền nhau
  str = str.replace(/ + /g, " ");
  str = str.trim();
  // Remove punctuations
  // Bỏ dấu câu, kí tự đặc biệt
  str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, " ");
  return str;
}

// Messages
client.on('messageCreate', (message) => {
  let mes: string = message.content.toLowerCase()
  let mess: string = removeVN(mes)
  const multiplySign = /[*]+/;
  if (message.author.username === "jabba the hutttt") return;
  // if(message.author.bot) return;
  if (mess === 'ping') {
    message.reply({
      content: 'pongggg',
    })
  } else if (mess.includes('time') || mess.includes('taim')) {
    message.channel.send('ɪᴛs ʀᴀᴍᴍᴍᴍᴍᴍ ᴛɪᴍᴇᴇᴇᴇᴇ')

  } else if (mess.includes('chui') && mess.includes('lan') && mess.includes('banh')) {
    let matches = mess.replace(/[^0-9]/g, '');
    let x: number = +matches;
    let i = 0;
    if (x > 10) {
      x = 10
    }



    message.channel.send(`jabba chửi bảnh ${x} lần`);
    while (i < x) {
      message.channel.send(`dm bảnh lần ${i + 1}`)
      i++
    }
    return

  } else if (mess.includes('banh') && mess.includes('chui')) {
    message.channel.send(`dm banh ${getRandom(loseEmotes)}`)

  } else if (mess.includes('tu') && mess.includes('ra')) {
    message.channel.send(`dm bảnh ngu ${days} ɴɢàʏ ${hours} giờ ɴữᴀ ʀᴀ ᴛù ${getRandom(loseEmotes)}`)

  } else if (mess.includes('sad')) {
    message.channel.send(`https://tenor.com/view/dont-cry-dont-worry-dont-be-sad-there-there-friends-gif-10717838`)

  } else if (mess.includes('yum') || mess.includes('ngon') || mess.includes('deli')) {
    message.channel.send(`https://tenor.com/view/jabba-the-hutt-monster-starwarsmay4-flirt-gif-13644607`)

  } else if (mess.includes('poc')) {
    message.channel.send('poc');

  } else if (mess.includes('hah') || mess.includes('heh') || mess.includes('hoh') || mess.includes('fun') || mess.includes('cuoi') || mess.includes('dumb')) {
    let random = Math.floor(Math.random() * laugh.length);
    message.channel.send(laugh[random]);

  } else if (mess.includes('sexy') || mess.includes('sexi')) {
    var random = Math.floor(Math.random() * sexi.length);
    message.channel.send(sexi[random]);

  } else if (mess.includes('showid')) {
    message.channel.send(message.author.id);

  } else if (mess.includes('xin loi')) {
    message.channel.send(`Biết lỗi là ngoan đó em ${getRandom(randomEmotes)}`);

  } else if (mess.includes('voi') || mess.includes('them')) {
    let sum1 = sumNumbers(mess)
    if (!isNaN(sum1)){
      message.channel.send(`làaa ${sum1} ${getRandom(randomEmotes)}`);
    }
    

  } else if (mess.includes(' x ')) {
    let pro1 = mulStr(mess)
    message.channel.send(` = ${pro1}`);

  } else if (mess.includes('pic')) {
    (async () => {
      const res = await valid()
      message.channel.send({ files: [res] });
    })();


  } else if (mess.includes('bitcoin') || mess.includes('btc')) {
    const getBtcData = async () => {
      fetch('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD')
        .then(response => response.json())
        .then(data => {
          console.log(data);
          message.channel.send(`bitcoin price rn is ${data.USD}$ ${getRandom(randomEmotes)}`)
        });
    }
    getBtcData()
  } else if (mess.includes('ethereum') || mess.includes('eth')) {
    const getBtcData = async () => {
      fetch('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD')
        .then(response => response.json())
        .then(data => {
          console.log(data);
          message.channel.send(`ethereum price rn is ${data.USD}$ ${getRandom(randomEmotes)}`)
        });
    }
    getBtcData()
  } else if (mess.includes('jabba count')) {
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
})

// commands
client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) {
    return
  }

  const { commandName, options } = interaction

  if (commandName === 'ping') {
    interaction.reply({
      content: 'pong',
    })
  } else if (commandName === 'add') {
    const num1 = options.getNumber('num1') || 0;
    const num2 = options.getNumber('num2') || 0;
    const sum = num1 + num2;

    interaction.reply({
      content: `and the sum is ${sum}`
    })

  } else if (commandName === 'chuibanh') {
    let i = 0
    const solan = options.getNumber('solan') || 0;
    while (i < solan) {
      interaction.channel?.send('dm banh')
      i++


    }
  }
})


//Using distube for Music




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

// Music
client.on('messageCreate', message => {
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
    distube.play(message, args.join(' '))
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
    distube.stop(message)
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
    distube.stop(message)
    message.channel.send(`jabba stopped ${getRandom(randomEmotes)}`)

  }

  if ([`3d`, `bassboost`, `echo`, `karaoke`, `nightcore`, `vaporwave`].includes(command)) {
    const filter = distube.setFilter(message, command)
    message.channel.send(`Current queue filter: ${filter.join(", ") || "Off"} ${getRandom(randomEmotes)} `)
  }
  if (command == "volume") {
    if (isNaN(args[0])) {
      message.channel.send(`jabba u dumbling ${getRandom(randomEmotes)}`)
      let random = Math.floor(Math.random() * laugh.length);
      message.channel.send(laugh[random]);
      return
    }
    distube.setVolume(message, Number(args[0]));
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
    distube.voices.get(message)?.leave()
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
    distube.resume(message)
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
    distube.pause(message)
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
    distube.skip(message)
    message.channel.send("jabba skipped")
  }

  if (command === "queue") {
    const queue = distube.getQueue(message)
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

})

//Connect to Google Sheets for Database

const {google} = require("googleapis")
const auth = new google.auth.GoogleAuth({
  keyFile: "credentials.json",
  scopes: "https://www.googleapis.com/auth/spreadsheets",
})
const getSpreadsheet = async(Sheetname) =>{
  const client = await auth.getClient

  const googleSheets = google.sheets({version: "v4",auth: client});

  const spreadsheetId = '1ykziNQrh49vtgGWaXP3SdwX8zYeRbjoh576opXkjOCI'
  
  const getRows = await googleSheets.spreadsheets.values.get({
      auth,
      spreadsheetId,
      range: Sheetname,
  })
  return getRows

}

const updateRows = async(x,y,a,b,c) =>{
    
  const client = await auth.getClient

  const googleSheets = google.sheets({version: "v4",auth: client});

  const spreadsheetId = '1ykziNQrh49vtgGWaXP3SdwX8zYeRbjoh576opXkjOCI'

  await googleSheets.spreadsheets.values.update({
      auth,
      spreadsheetId,
      range: `Sheet1!A${x}:C${y}`,
      valueInputOption: "USER_ENTERED",
      resource : {
          values: [
              [a,b,c],
          ]
      }
  })

}

const updateSingleRow = async(name,x,a) =>{
    
  const client = await auth.getClient

  const googleSheets = google.sheets({version: "v4",auth: client});

  const spreadsheetId = '1ykziNQrh49vtgGWaXP3SdwX8zYeRbjoh576opXkjOCI'

  await googleSheets.spreadsheets.values.update({
      auth,
      spreadsheetId,
      range: `${name}!${x}`,
      valueInputOption: "USER_ENTERED",
      resource : {
          values: [
              [a],
          ]
      }
  })

}

const addRows = async(name,x,y,a,b,c) =>{
    
  const client = await auth.getClient

  const googleSheets = google.sheets({version: "v4",auth: client});

  const spreadsheetId = '1ykziNQrh49vtgGWaXP3SdwX8zYeRbjoh576opXkjOCI'

  await googleSheets.spreadsheets.values.append({
      auth,
      spreadsheetId,
      range: `${name}!A${x}:C${y}`,
      valueInputOption: "USER_ENTERED",
      resource : {
          values: [
              [a,b,c],
          ]
      }
  })

}



// One two three game
const randomEmotes = ['😄','😅','🙃','🧐','😑','😶','😒','🙄','😬','🤢','🤧','😰','🤮','😭','🖕','🤡','🤭','😎','🥳','🤓','🥰','😙','🤪','😷']
const drawEmotes = ['😄','😅','🙃','🧐']
const winEmotes = ['😑','😶','😒','🙄','😬','🤢','🤧','😰','🤮','😭','🖕']
const loseEmotes = ['🤡','🤭','😎']

function getRandom(list){
  return list[Math.floor(Math.random() * list.length)]
}

let list123 = ['✋', '👊', ':v:']
let botChoice = list123[Math.floor(Math.random() * list123.length)];
client.on('messageCreate', (message) => {
  let mes: string = message.content.toLowerCase()
  let mess: string = removeVN(mes)
  if (message.author.id === "939491082717249558") return;
  if (mess.includes('✋') || (mess.includes('🤚')) || (mess.includes('🖐')))  {
    const userID = message.author.id
    let botChoice = list123[Math.floor(Math.random() * list123.length)];
    message.channel.send(botChoice)
    // If jabba draws
    if (botChoice == '✋') {
      message.channel.send(getRandom(drawEmotes)+getRandom(drawEmotes))
    }
    //If jabba loses
    if (botChoice == '👊'){
      message.channel.send(getRandom(winEmotes)+getRandom(winEmotes))
      getSpreadsheet('OneTwoThree').then((sheet) =>{
        const len = sheet.data.values.length

        //Check if user already exists
        let i = 0
        let check = false
        let index
        while (i < len){
          if (sheet.data.values[i][0] == message.author.id){
            check = true
            index = i
          }
          i++
        }
        index = +index
        //If user exists
        if ( check === true){
          let wins = sheet.data.values[index][1]
          wins = +wins + 1
          updateSingleRow('OneTwoThree',`B${index+1}`,wins)
        }
        if ( check === false){
          addRows('OneTwoThree',len+1,len+1,userID,1,0)
        }
      })
    }

    
    //If jabba wins
    if (botChoice == ':v:'){
      message.channel.send(getRandom(loseEmotes)+getRandom(loseEmotes))
      getSpreadsheet('OneTwoThree').then((sheet) =>{
        const len = sheet.data.values.length

        //Check if user already exists
        let i = 0
        let check = false
        let index
        while (i < len){
          if (sheet.data.values[i][0] == message.author.id){
            check = true
            index = i
          }
          i++
        }
        index = +index
        //If user exists
        if ( check === true){
          let loses = sheet.data.values[index][2]
          loses = +loses + 1
          updateSingleRow('OneTwoThree',`C${index+1}`,loses)
        }
        if ( check === false){
          addRows('OneTwoThree',len+1,len+1,userID,0,1)
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
      message.channel.send(getRandom(drawEmotes)+getRandom(drawEmotes))
    }
    //If jabba loses
    if (botChoice == ':v:'){
      message.channel.send(getRandom(winEmotes)+getRandom(winEmotes))
      getSpreadsheet('OneTwoThree').then((sheet) =>{
        const len = sheet.data.values.length

        //Check if user already exists
        let i = 0
        let check = false
        let index
        while (i < len){
          if (sheet.data.values[i][0] == message.author.id){
            check = true
            index = i
          }
          i++
        }
        index = +index
        //If user exists
        if ( check === true){
          let wins = sheet.data.values[index][1]
          wins = +wins + 1
          updateSingleRow('OneTwoThree',`B${index+1}`,wins)
        }
        if ( check === false){
          addRows('OneTwoThree',len+1,len+1,userID,1,0)
        }
      })
    }

    
    //If jabba wins
    if (botChoice == '✋'){
      message.channel.send(getRandom(loseEmotes)+getRandom(loseEmotes))
      getSpreadsheet('OneTwoThree').then((sheet) =>{
        const len = sheet.data.values.length

        //Check if user already exists
        let i = 0
        let check = false
        let index
        while (i < len){
          if (sheet.data.values[i][0] == message.author.id){
            check = true
            index = i
          }
          i++
        }
        index = +index
        //If user exists
        if ( check === true){
          let loses = sheet.data.values[index][2]
          loses = +loses + 1
          updateSingleRow('OneTwoThree',`C${index+1}`,loses)
        }
        if ( check === false){
          addRows('OneTwoThree',len+1,len+1,userID,0,1)
        }
      })
    }

  }
  if (mess.includes('✌️') ) {
    const userID = message.author.id
    let botChoice = list123[Math.floor(Math.random() * list123.length)];
    message.channel.send(botChoice)
    // If jabba draws
    if (botChoice == ':v:') {
      message.channel.send(getRandom(drawEmotes)+getRandom(drawEmotes))
    }
    //If jabba loses
    if (botChoice == '✋'){
      message.channel.send(getRandom(winEmotes)+getRandom(winEmotes))
      getSpreadsheet('OneTwoThree').then((sheet) =>{
        const len = sheet.data.values.length

        //Check if user already exists
        let i = 0
        let check = false
        let index
        while (i < len){
          if (sheet.data.values[i][0] == message.author.id){
            check = true
            index = i
          }
          i++
        }
        index = +index
        //If user exists
        if ( check === true){
          let wins = sheet.data.values[index][1]
          wins = +wins + 1
          updateSingleRow('OneTwoThree',`B${index+1}`,wins)
        }
        if ( check === false){
          addRows('OneTwoThree',len+1,len+1,userID,1,0)
        }
      })
    }

    
    //If jabba wins
    if (botChoice == '👊'){
      message.channel.send(getRandom(loseEmotes)+getRandom(loseEmotes))
      getSpreadsheet('OneTwoThree').then((sheet) =>{
        const len = sheet.data.values.length

        //Check if user already exists
        let i = 0
        let check = false
        let index
        while (i < len){
          if (sheet.data.values[i][0] == message.author.id){
            check = true
            index = i
          }
          i++
        }
        index = +index
        //If user exists
        if ( check === true){
          let loses = sheet.data.values[index][2]
          loses = +loses + 1
          updateSingleRow('OneTwoThree',`C${index+1}`,loses)
        }
        if ( check === false){
          addRows('OneTwoThree',len+1,len+1,userID,0,1)
        }
      })
    }

  }
  
})

// Check OneTwoThree stats
client.on('messageCreate', (message) =>{
  let mes: string = message.content.toLowerCase()
  let mess: string = removeVN(mes)
  if (message.author.id === "939491082717249558") return;
  //Check user's stats
  if (mess == 'jabba my stats'){
    const userID = message.author.id
    getSpreadsheet('OneTwoThree').then((sheet)=>{
      const len = sheet.data.values.length
      //Check if user already exists
      let i = 0
      let check = false
      let index
      while (i < len){
        if (sheet.data.values[i][0] == message.author.id){
          check = true
          index = i
        }
        i++
      }
      index = +index

      //If user already exists
      if ( check === true){
        let wins = +sheet.data.values[index][1]
        let loses = +sheet.data.values[index][2]
        let winrate = (wins/(wins+loses)*100).toFixed(2)
        message.channel.send(`<@${userID}>'s stats: \nWins: ${wins}. \nLoses: ${loses}. \nWinrate: ${winrate}%. ${getRandom(randomEmotes)}`)
      }
      if (check === false){
        message.channel.send(`Jabba's never played with u ${getRandom(loseEmotes)}`)
      }
    })
  }
  if (mess == 'jabba top 123'){
    getSpreadsheet('OneTwoThree').then((sheet)=>{
      const len = sheet.data.values.length
      message.channel.send(`Top OneTwoThree Wins: ${getRandom(randomEmotes)}`)
      let i = 1
      while (i < len){

        let user = `<@${sheet.data.values[i][4]}>`
        
        let wins = +sheet.data.values[i][5]
        let loses = +sheet.data.values[i][6]
        let winrate = (wins/(wins+loses)*100).toFixed(2)
        message.channel.send(`${i}.${user} - Wins: ${wins} - Winrate: ${winrate}% ${getRandom(randomEmotes)}`)
        i++
      }

     
    })
  }
})


//Jabba say random sentences
const { sentence } = require('txtgen/dist/cjs/txtgen.js')

client.on('messageCreate', (message) =>{
  let mes: string = message.content.toLowerCase()
  let mess: string = removeVN(mes)
  if (message.author.id === "939491082717249558") return;
  if (mess.includes('fact')||mess.includes('jabba say')){
    while (true){
      let a = sentence()
      if (!a.includes('However')){
          message.channel.send(a)
          break;
      }
  }
  }
})





//Get weather data

client.on('messageCreate', (message) =>{
  let mes: string = message.content.toLowerCase()
  let mess: string = removeVN(mes)
  if (message.author.id === "939491082717249558") return;
  if (mess.includes('jabba weather in ')){
    let er = StringSum(mess)
    let daysX = mess.replace(/[^0-9]/g, '')
    let days :number = +daysX
    if (er === 0){
      message.channel.send(`Incorrect syntax. ${getRandom(randomEmotes)} \nSample: jabba weather in 2 hanoi. \nOr: jabba weather hanoi`)
      return
    }
    if ( days < 0 || days > 7){
      message.channel.send(`The number of days can't be less than 1 or greater than 8 ${getRandom(loseEmotes)}`)
      message.channel.send(`Do "jabba weather hanoi" for today's weather ${getRandom(randomEmotes)}`)
      return
    }
    let region = mess.replace('jabba weather in','').replace(/[0-9]/g, '').replace('  ','')
    
    message.channel.send(`Getting weather data for ${region} in the next ${days} day(s)`)
    const WeatherData = async () => {
      fetch(`https://weatherdbi.herokuapp.com/data/weather/${region}`)
        .then(response => response.json())
        .then(data => {
          let regionData = data.region
          let daytime = data.next_days[days].day
          let maxTemp = data.next_days[days].max_temp.c
          let minTemp = data.next_days[days].min_temp.c
          let comment = data.next_days[days].comment
          message.channel.send(`Region: ${regionData}. \nDay: ${daytime}. \nMax Temp: ${maxTemp} °C. ${getRandom(randomEmotes)} \nMin Temp: ${minTemp} °C. \nWeather: ${comment} ${getRandom(randomEmotes)}`)

          
        });
    }
  WeatherData()
  return
  }
  if (mess.includes('jabba weather')){
    let region = mess.replace('jabba weather ','')
    const WeatherData = async () => {
      fetch(`https://weatherdbi.herokuapp.com/data/weather/${region}`)
        .then(response => response.json())
        .then(data => {
          let wind = data.currentConditions.wind.km
          let regionData = data.region
          let dayhour = data.currentConditions.dayhour
          let Temp = data.currentConditions.temp.c
          let humidity = data.currentConditions.humidity
          let weather = data.currentConditions.comment
          let precip = data.currentConditions.precip
          message.channel.send(`Region: ${regionData}. \nDayhour: ${dayhour}. \nCurrent Temp: ${Temp} °C. ${getRandom(randomEmotes)} \nChance of rain: ${precip} \nHumidity: ${humidity}. \nWind: ${wind} km/h \nWeather: ${weather} ${getRandom(randomEmotes)}`)

          
        });
    }
  WeatherData()
  }

})






//Guess genders and nationalities by name
const CountryNames = require('./names.json')
function getFlagEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char =>  127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}


client.on('messageCreate', (message) =>{
  let mes: string = message.content.toLowerCase()
  let mess: string = removeVN(mes)
  if (message.author.id === "939491082717249558") return;
  if (mess.includes('jabba guess')){
    if (mess == 'jabba guess'){
      return
    }
    let a = mess.replace('jabba guess ', '')

    const guessData = async () => {
      fetch(`https://api.genderize.io/?name=${a}`)
        .then(response => response.json())
        .then(data => {
          if ( data.gender == null){
            message.channel.send(`Jabba cant guess dis ${getRandom(randomEmotes)} `)
            return
          }
          if ( data.gender == 'male'){
            message.channel.send(`${getRandom(randomEmotes)} Jabba is ${data.probability*100}% sure "${data.name}" is a boy name 👦`)
            return
          }
          if ( data.gender == 'female'){
            message.channel.send(`${getRandom(randomEmotes)} Jabba is ${data.probability*100}% sure "${data.name}" is a girl name 👧`)
            return
          }



         
          
        });
    }
    const GuessNat = async () => {
      fetch(`https://api.nationalize.io/?name=${a}`)
        .then(response => response.json())
        .then(data => {
          if (data.country.length == 0){
            message.channel.send(`No nationality data for "${a}" ${getRandom(randomEmotes)}`)
            return
          }
          message.channel.send(`${getRandom(randomEmotes)} Jabba also is ${data.country[0].probability.toFixed(2)*100}% certain "${a}" is a ${CountryNames[data.country[0].country_id]}${getFlagEmoji(data.country[0].country_id)} name ` )
         
          
        });
    }
    guessData().then(()=>{
      GuessNat()
    })
    
  }
})


















//                      weird                  //
// else if (mess.includes('banh xin loi di')) {
//     message.channel.send('dm banh');
//     while (!mess.includes('xin loi')){
//         message.channel.send('dm banh');

//     }


// }
///////////////////////////////
client.login(process.env.TOKEN)
