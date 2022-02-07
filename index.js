"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var discord_js_1 = require("discord.js");
var DiscordJS = require("discord.js");
var dotenv = require("dotenv");
dotenv.config();
var client = new DiscordJS.Client({
    intents: [
        discord_js_1.Intents.FLAGS.GUILDS,
        discord_js_1.Intents.FLAGS.GUILD_MESSAGES,
    ]
});
client.on('ready', function () {
    var _a;
    console.log('The bot is ready');
    var guildId = '699533464151654471';
    var guild = client.guilds.cache.get(guildId);
    var commands;
    if (guild) {
        commands = guild.commands;
    }
    else {
        commands = (_a = client.application) === null || _a === void 0 ? void 0 : _a.commands;
    }
    commands === null || commands === void 0 ? void 0 : commands.create({
        name: 'chuibanh',
        description: 'bạn muốn chửi bảnh mấy lần?',
        options: [
            {
                name: 'solan',
                description: 'so lan chui',
                required: true,
                type: DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER
            }
        ]
    });
    commands === null || commands === void 0 ? void 0 : commands.create({
        name: 'ping',
        description: 'Replies with pong.'
    });
    commands === null || commands === void 0 ? void 0 : commands.create({
        name: 'add',
        description: "adds two number",
        options: [
            {
                name: 'num1',
                description: ' da first',
                required: true,
                type: DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER
            },
            {
                name: 'num2',
                description: 'da second',
                required: true,
                type: DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER
            }
        ]
    });
});
//Jabba's gifs
var laugh = ["https://tenor.com/view/jabba-the-hutt-star-wars-gif-12663815", "https://tenor.com/view/jabba-laugh-star-wars-haha-mood-gif-11764102", "https://tenor.com/view/woahaha-jabba-starwars-gif-19246551", "https://tenor.com/view/jabba-the-hutt-laugh-monster-gif-13644611", "https://tenor.com/view/jabba-chumbolo-laugh-botek-solo-gif-24199365"];
var sexi = ["https://tenor.com/view/leia-jabba-gif-8984830", "https://tenor.com/view/leia-organa-slave-leia-leia-bikini-leia-metal-bikini-star-wars-gif-17965323", "https://tenor.com/view/jabba-leia-jabba-leia-jabba-lick-gif-18933413", "https://tenor.com/view/slave-leia-jabba-jabba-leia-jabba-lick-bricosplay-gif-23134280"];
//Random imgur
function randomString() {
    var chars = '01234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz';
    var stringlength = 5; /* could be 6 or 7, but takes forever because there are lots of dead images */
    var text = '';
    for (var i = 0; i < stringlength; i++) {
        var rnum = Math.floor(Math.random() * chars.length);
        text += chars.substring(rnum, rnum + 1);
    }
    var source = 'http://i.imgur.com/' + text + '.jpg';
    return source;
}
;
var a = randomString();
console.log(a);
const probe = require('probe-image-size');
async function hello(){
    let result = await probe(a, { rejectUnauthorized: false });
console.log(result);
}
hello()



// Calc jail time left
var outTime = new Date("Nov 13, 2029 15:37:25").getTime();
var now = new Date().getTime();
var distance = outTime - now;
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
// var seconds = Math.floor((distance % (1000 * 60)) / 1000);
// Calc sum from all 1-digit from string
function StringSum(str) {
    var nums = [];
    var sum = 0;
    for (var i = 0; i < str.length; i++) {
        if (!isNaN(Number(str[i]))) {
            nums.push(Number(str[i]));
        }
    }
    console.log(nums);
    for (var i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return sum;
}
//Calc all digits from string
function sumNumbers(string) {
    var pos = 1;
    var numArray = [];
    var numString = null;
    for (var _i = 0, string_1 = string; _i < string_1.length; _i++) {
        var num = string_1[_i];
        var isParsed = isNaN(parseInt(num));
        if (!numString && !isParsed && pos === string.length) {
            numArray.push(num);
        }
        else if (!numString && !isParsed && pos !== string.length) {
            numString = num;
        }
        else if (numString && !isParsed && pos === string.length) {
            numString += num;
            numArray.push(numString);
        }
        else if (numString && isParsed && pos === string.length) {
            numArray.push(numString);
        }
        else if (numString && !isParsed) {
            numString += num;
        }
        else if (numString && isParsed && pos !== string.length) {
            numArray.push(numString);
            numString = null;
        }
        else if (!numString && isParsed && pos === string.length) {
            numString += num;
            numArray.push(numString);
        }
        pos++;
    }
    //   console.log('numAray:', numArray);
    var result = 0;
    for (var _a = 0, numArray_1 = numArray; _a < numArray_1.length; _a++) {
        var num = numArray_1[_a];
        var value = parseInt(num);
        result += value;
    }
    return result;
}
// Multiply digits 
function mulStr(string) {
    var pos = 1;
    var numArray = [];
    var numString = null;
    for (var _i = 0, string_2 = string; _i < string_2.length; _i++) {
        var num = string_2[_i];
        var isParsed = isNaN(parseInt(num));
        if (!numString && !isParsed && pos === string.length) {
            numArray.push(num);
        }
        else if (!numString && !isParsed && pos !== string.length) {
            numString = num;
        }
        else if (numString && !isParsed && pos === string.length) {
            numString += num;
            numArray.push(numString);
        }
        else if (numString && isParsed && pos === string.length) {
            numArray.push(numString);
        }
        else if (numString && !isParsed) {
            numString += num;
        }
        else if (numString && isParsed && pos !== string.length) {
            numArray.push(numString);
            numString = null;
        }
        else if (!numString && isParsed && pos === string.length) {
            numString += num;
            numArray.push(numString);
        }
        pos++;
    }
    //   console.log('numAray:', numArray);
    var result = 1;
    for (var _a = 0, numArray_2 = numArray; _a < numArray_2.length; _a++) {
        var num = numArray_2[_a];
        var value = parseInt(num);
        result = result * value;
    }
    return result;
}
// Remove accents
function removeVN(str) {
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
client.on('messageCreate', function (message) {
    var mes = message.content.toLowerCase();
    var mess = removeVN(mes);
    var multiplySign = /[*]+/;
    if (message.author.username === "jabba the hutttt")
        return;
    // if(message.author.bot) return;
    if (mess === 'ping') {
        message.reply({
            content: 'pongggg'
        });
    }
    else if (mess.includes('time') || mess.includes('taim')) {
        message.channel.send('ɪᴛs ʀᴀᴍᴍᴍᴍᴍᴍ ᴛɪᴍᴇᴇᴇᴇᴇ');
    }
    else if (mess.includes('chui') && mess.includes('lan') && mess.includes('banh')) {
        var matches = mess.replace(/[^0-9]/g, '');
        var x = +matches;
        var i = 0;
        if (x > 10) {
            x = 10;
        }
        message.channel.send("jabba ch\u1EEDi b\u1EA3nh ".concat(x, " l\u1EA7n"));
        while (i < x) {
            message.channel.send("dm b\u1EA3nh l\u1EA7n ".concat(i + 1));
            i++;
        }
        return;
    }
    else if (mess.includes('banh') && mess.includes('chui')) {
        message.channel.send('dm banh');
    }
    else if (mess.includes('tu') && mess.includes('ra')) {
        message.channel.send("dm b\u1EA3nh ngu ".concat(days, " \u0274\u0262\u00E0\u028F ").concat(hours, " gi\u1EDD \u0274\u1EEF\u1D00 \u0280\u1D00 \u1D1B\u00F9"));
    }
    else if (mess.includes('pic')) {
        var srC = randomString();
        message.channel.send({ files: [srC] });
    }
    else if (mess.includes('sad')) {
        message.channel.send("https://tenor.com/view/dont-cry-dont-worry-dont-be-sad-there-there-friends-gif-10717838");
    }
    else if (mess.includes('yum') || mess.includes('ngon') || mess.includes('deli')) {
        message.channel.send("https://tenor.com/view/jabba-the-hutt-monster-starwarsmay4-flirt-gif-13644607");
    }
    else if (mess.includes('poc')) {
        message.channel.send('poc');
    }
    else if (mess.includes('hah') || mess.includes('heh') || mess.includes('hoh') || mess.includes('fun') || mess.includes('cuoi') || mess.includes('hi')) {
        var random = Math.floor(Math.random() * laugh.length);
        message.channel.send(laugh[random]);
    }
    else if (mess.includes('sexy') || mess.includes('sexi')) {
        message.channel.send('https://tenor.com/view/jabba-leia-jabba-leia-jabba-lick-gif-18933413');
    }
    else if (mess.includes('showid')) {
        message.channel.send(message.author.id);
    }
    else if (mess.includes('xin loi')) {
        message.channel.send("Biết lỗi là ngoan đó em");
    }
    else if (mess.includes('voi') || mess.includes('them')) {
        var sum1 = sumNumbers(mess);
        message.channel.send("l\u00E0aa ".concat(sum1));
    }
    else if (mess.includes(' x ')) {
        var pro1 = mulStr(mess);
        message.channel.send(" = ".concat(pro1));
    }
});
// commands
client.on('interactionCreate', function (interaction) { return __awaiter(void 0, void 0, void 0, function () {
    var commandName, options, num1, num2, sum, i, solan;
    var _a;
    return __generator(this, function (_b) {
        if (!interaction.isCommand()) {
            return [2 /*return*/];
        }
        commandName = interaction.commandName, options = interaction.options;
        if (commandName === 'ping') {
            interaction.reply({
                content: 'pong'
            });
        }
        else if (commandName === 'add') {
            num1 = options.getNumber('num1') || 0;
            num2 = options.getNumber('num2') || 0;
            sum = num1 + num2;
            interaction.reply({
                content: "and the sum is ".concat(sum)
            });
        }
        else if (commandName === 'chuibanh') {
            i = 0;
            solan = options.getNumber('solan') || 0;
            while (i < solan) {
                (_a = interaction.channel) === null || _a === void 0 ? void 0 : _a.send('dm banh');
                i++;
            }
        }
        return [2 /*return*/];
    });
}); });
//                      weird                  //
// else if (mess.includes('banh xin loi di')) {
//     message.channel.send('dm banh');
//     while (!mess.includes('xin loi')){
//         message.channel.send('dm banh');
//     }
// }
///////////////////////////////
client.login(process.env.TOKEN);
