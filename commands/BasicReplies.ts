import { getRandom } from "../functions/getRandomFromArray"
import { removeVN } from "../functions/removeVN"
import { loseEmotes } from "../jsons/lists"
import { randomEmotes } from "../jsons/lists"
import { sumNumbers } from "../functions/sumNumbersFromString"
import { mulStr } from "../functions/multiplyNumbersFromString"
const laugh = ["https://tenor.com/view/jabba-the-hutt-star-wars-gif-12663815", "https://tenor.com/view/jabba-laugh-star-wars-haha-mood-gif-11764102", "https://tenor.com/view/woahaha-jabba-starwars-gif-19246551", "https://tenor.com/view/jabba-the-hutt-laugh-monster-gif-13644611", "https://tenor.com/view/jabba-chumbolo-laugh-botek-solo-gif-24199365"];
const sexi = ["https://tenor.com/view/leia-jabba-gif-8984830", "https://tenor.com/view/leia-organa-slave-leia-leia-bikini-leia-metal-bikini-star-wars-gif-17965323", "https://tenor.com/view/jabba-leia-jabba-leia-jabba-lick-gif-18933413", "https://tenor.com/view/slave-leia-jabba-jabba-leia-jabba-lick-bricosplay-gif-23134280"]

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

module.exports = {
    name: 'basicReply',
    description: 'basic replies',
    execute(message) {
        let mes: string = message.content.toLowerCase()
        let mess: string = removeVN(mes)
        const multiplySign = /[*]+/;
        if (message.author.username === "jabba the hutttt") return;
        // if(message.author.bot) return;
        if (mess === 'ping') {
            message.reply({
                content: 'papapapa',
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

        } else if (mess.includes('hah') || mess.includes('heh') || mess.includes('hoh') || mess.includes('fun') || mess.includes('cuoi') || mess.includes('dumb')) {
            let random = Math.floor(Math.random() * laugh.length);
            message.react('🤡');
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
            if (!isNaN(sum1)) {
                message.channel.send(`làaa ${sum1} ${getRandom(randomEmotes)}`);
            }


        } else if (mess.includes(' x ')) {
            let pro1 = mulStr(mess)
            message.channel.send(` = ${pro1}`);

        }
    }
}