import DiscordJS, { Intents } from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();
const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
    ]
});
client.on('ready', () => {
    var _a;
    console.log('The bot is ready');
    const guildId = '862332424288731137';
    const guild = client.guilds.cache.get(guildId);
    let commands;
    if (guild) {
        commands = guild.commands;
    }
    else {
        commands = (_a = client.application) === null || _a === void 0 ? void 0 : _a.commands;
    }
    commands === null || commands === void 0 ? void 0 : commands.create({
        name: 'ping',
        description: 'Replies with pong.',
    });
    commands === null || commands === void 0 ? void 0 : commands.create({
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
    });
});
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
    return source;
}
;
// Calc jail time left
const outTime = new Date("Nov 13, 2029 15:37:25").getTime();
let now = new Date().getTime();
let distance = outTime - now;
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
// var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
// var seconds = Math.floor((distance % (1000 * 60)) / 1000);
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
client.on('messageCreate', (message) => {
    let mes = message.content.toLowerCase();
    const mess = removeVN(mes);
    if (mess === 'ping') {
        message.reply({
            content: 'pongggg',
        });
    }
    else if (mess.includes('time') || mess.includes('taim')) {
        message.reply({
            content: 'ɪᴛs ʀᴀᴍᴍᴍᴍᴍᴍ ᴛɪᴍᴇᴇᴇᴇᴇ',
        });
    }
    else if (mess.includes('banh') && mess.includes('chui')) {
        message.reply({
            content: 'dm banh',
        });
    }
    else if (mess.includes('tu')) {
        message.reply({
            content: `dm bảnh ngu ${days} ɴɢàʏ ɴữᴀ ʀᴀ ᴛù`,
        });
    }
    else if (mess.includes('pic')) {
        let srC = randomString();
        message.channel.send({ files: [srC] });
    }
});
// commands
client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) {
        return;
    }
    const { commandName, options } = interaction;
    if (commandName === 'ping') {
        interaction.reply({
            content: 'pong',
        });
    }
    else if (commandName === 'add') {
        const num1 = options.getNumber('num1') || 0;
        const num2 = options.getNumber('num2') || 0;
        const sum = num1 + num2;
        interaction.reply({
            content: `and the sum is ${sum}`
        });
    }
});
client.login(process.env.TOKEN);