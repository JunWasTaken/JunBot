const discord = require('discord.js');
const bot = new discord.Client();
const token = 'NjQ2MDI1NTcyMTE5NDc4Mjcy.XdLmxA.gVN9qtLnbL5gHok3Zzt3UEw_Gj4';
const prefix ='>';
const userFunction = require('./user');
const content = require('./content');
const musicFunction = require('./music');
const useful = require('./useful');

function LoggedIn(){
    bot.user.setStatus("online");
    bot.user.setActivity('>help', {type : 'PLAYING'});
    console.log('Bot Online');
}

bot.on('ready', LoggedIn);

bot.on('message', msg=>{
    let args = msg.content.substring(prefix.length).split(" ");

    if (msg.content.startsWith(prefix)){
        switch(args[0]){
            case 'oss':
                content.oss(args, msg);
            break;
            case 'content':
                content.reaction(args, msg);
            break;
            /*case 'user':
                userFunction.user(args, msg);
            break;*/
            case 'say':
                if (msg.author.id == 271733914291142656)
                    content.say(args, msg);
                else
                    msg.reply('NO !');
            break;
            case 'help':
                content.help(msg);
            break;
            /*case 'clear':
                console.log(msg.author.);
                if (msg.guild.member(msg.author).hasPermission('ADMINISTRATOR') || msg.author.id == 271733914291142656){
                    if (!args[1])
                        msg.reply('Merci de saisir des arguments valides ! >:(');
                    else{
                        msg.channel.bulkDelete(args[1]);
                    }
                }else
                    msg.reply('Tu n\'as pas les droits petit coquinou ;)');
            break;
            case 'music':
                musicFunction.music(msg, args);
            break;*/
        }
    }else if (msg.content.match("yes") || msg.content.match("Yes")){
        msg.channel.send(useful.emoji(bot, "795738291819249694"));
    }else if (msg.content.includes("owo") || msg.content.includes("OwO") || msg.content.includes("uwu") || msg.content.includes("UwU") && msg.author.id != 646025572119478272){
        msg.channel.send(useful.furry());
    }
})

function emoji(id){
    return bot.emojis.get(id).toString();
}

bot.login(token);