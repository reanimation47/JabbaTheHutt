import DiscordJS, { Intents, Message } from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
    ]
});

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



//Random imgur
function randomString() {
    var chars = '01234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz';
    var stringlength = 5; /* could be 6 or 7, but takes forever because there are lots of dead images */
    var text = '';
    for (var i = 0; i < stringlength; i++) {
        var rnum = Math.floor(Math.random() * chars.length);
        text += chars.substring(rnum, rnum + 1);
    }

    let source = 'https://i.imgur.com/' + text + '.jpg';
    return source


};









// Calc jail time left

const outTime = new Date("Nov 13, 2029 15:37:25").getTime();
let now = new Date().getTime();

let distance = outTime - now;
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
// var seconds = Math.floor((distance % (1000 * 60)) / 1000);

// Calc sum from all 1-digit from string
function StringSum(str:string) {
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


function sumNumbers(string:string) {
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
function mulStr(string:string) {
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

    } else if (mess.includes('pic')) {
        let srC = randomString();
        message.channel.send({ files: [srC] });

    } else if (mess.includes('sad')) {
        message.channel.send(`https://tenor.com/view/dont-cry-dont-worry-dont-be-sad-there-there-friends-gif-10717838`)

    } else if (mess.includes('yum') || mess.includes('ngon') || mess.includes('deli')) {
        message.channel.send(`https://tenor.com/view/jabba-the-hutt-monster-starwarsmay4-flirt-gif-13644607`)

    } else if (mess.includes('poc')) {
        message.channel.send('poc');

    } else if (mess.includes('hah') || mess.includes('heh') || mess.includes('hoh') || mess.includes('fun') || mess.includes('cuoi') || mess.includes('hi')) {
        let random = Math.floor(Math.random() * laugh.length);
        message.channel.send(laugh[random]);

    } else if (mess.includes('sexy') || mess.includes('sexi')) {
        message.channel.send('https://tenor.com/view/jabba-leia-jabba-leia-jabba-lick-gif-18933413');

    } else if (mess.includes('showid')) {
        message.channel.send(message.author.id);

    } else if (mess.includes('xin loi')) {
        message.channel.send("Biết lỗi là ngoan đó em");

    } else if (mess.includes('voi')||mess.includes('them')) {
        let sum1 = sumNumbers(mess)
        message.channel.send(`làaa ${sum1}`);

    } else if (mess.includes('*')) {
        let pro1 = mulStr(mess)
        message.channel.send(` = ${pro1}`);

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






//                      weird                  //
// else if (mess.includes('banh xin loi di')) {
//     message.channel.send('dm banh');
//     while (!mess.includes('xin loi')){
//         message.channel.send('dm banh');

//     }


// }
///////////////////////////////
client.login(process.env.TOKEN)
