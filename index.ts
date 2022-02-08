import { Intents, Message } from 'discord.js';
import * as DiscordJS from 'discord.js'
import * as dotenv from 'dotenv';
const { DisTube } = require('distube')
dotenv.config();

const client = new DiscordJS.Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_VOICE_STATES,
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
    message.channel.send('dm banh')

  } else if (mess.includes('tu') && mess.includes('ra')) {
    message.channel.send(`dm bảnh ngu ${days} ɴɢàʏ ${hours} giờ ɴữᴀ ʀᴀ ᴛù`)

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
    message.channel.send("Biết lỗi là ngoan đó em");

  } else if (mess.includes('voi') || mess.includes('them')) {
    let sum1 = sumNumbers(mess)
    message.channel.send(`làaa ${sum1}`);

  } else if (mess.includes(' x ')) {
    let pro1 = mulStr(mess)
    message.channel.send(` = ${pro1}`);

  } else if (mess.includes('pic')) {
    (async () => {
      const res = await valid()
      message.channel.send({ files: [res] });
    })();


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
      `jabba playing \`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${song.user.tag}\n${status(queue)}`
    )
  )
  .on("addSong", (queue, song) =>
    queue.textChannel.send(`jabba added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user.tag}`)
  )
  .on("addList", (queue, playlist) =>
    queue.textChannel.send(
      `jabba added \`${playlist.name}\` playlist (${playlist.songs.length} songs) to queue\n${status(queue)}`
    )
  )
  .on("error", (textChannel, e) => {
    console.error(e)
    textChannel.send(`An error encountered`)
  })
  .on("finish", queue => queue.textChannel.send("jabba done"))
  .on("finishSong", queue => queue.textChannel.send("jabba done"))
  .on("disconnect", queue => queue.textChannel.send("jabba gone"))
  .on("empty", queue => queue.textChannel.send("jabba u dumb"))
  // DisTubeOptions.searchSongs > 1
  .on("searchResult", (message, result) => {
    let i = 0
    message.channel.send(
      `**Choose an option from below**\n${result
        .map(song => `**${++i}**. ${song.name} - \`${song.formattedDuration}\``)
        .join("\n")}\n*Enter anything else or wait 30 seconds to cancel*`
    )
  })
  .on("searchCancel", message => message.channel.send(`Searching canceled`))
  .on("searchInvalidAnswer", message => message.channel.send(`Invalid number of result.`))
  .on("searchNoResult", message => message.channel.send(`No result found!`))
  .on("searchDone", () => { })

// Music
client.on('messageCreate', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return

  const args: any = message.content.slice(prefix.length).trim().split(/ +/g)
  const command = args.shift().toLowerCase()

  if (command === 'play') {


    if (!message.member.voice.channel) {
      message.channel.send('jabba u dumb')
      let random = Math.floor(Math.random() * laugh.length);
    message.channel.send(laugh[random]);
      return
    }
    if (!args[0]) {
      message.channel.send('jabba u dumbass')
      let random = Math.floor(Math.random() * laugh.length);
    message.channel.send(laugh[random]);
      return
    }
    message.channel.send('jabba bout to play a song')
    distube.play(message, args.join(' '))
  }

  if (["repeat", "loop"].includes(command)) {
    const mode = distube.setRepeatMode(message)
    message.channel.send(`jabba set repeat mode to \`${mode ? (mode === 2 ? "All Queue" : "This Song") : "Off"}\``)
  }

  if (command === 'stop') {

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
    distube.stop(message)
    message.channel.send("jabba stopped")

  }

  if (command === 'stfu') {

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
    distube.stop(message)
    message.channel.send("jabba stopped")

  }

  if ([`3d`, `bassboost`, `echo`, `karaoke`, `nightcore`, `vaporwave`].includes(command)) {
    const filter = distube.setFilter(message, command)
    message.channel.send(`Current queue filter: ${filter.join(", ") || "Off"}`)
  }
  if (command == "volume") {
    if (isNaN(args[0])) {
      message.channel.send('jabba u dumbling')
      let random = Math.floor(Math.random() * laugh.length);
    message.channel.send(laugh[random]);
      return
    }
    distube.setVolume(message, Number(args[0]));
    message.channel.send(`jabba changed volume to ${args[0]}%`)
  }



  if (command === "leave") {
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
    distube.voices.get(message)?.leave()
    message.channel.send("jabba left")
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
      message.channel.send("jabba no playing rn")
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



//                      weird                  //
// else if (mess.includes('banh xin loi di')) {
//     message.channel.send('dm banh');
//     while (!mess.includes('xin loi')){
//         message.channel.send('dm banh');

//     }


// }
///////////////////////////////
client.login(process.env.TOKEN)

