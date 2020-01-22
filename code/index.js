const discord = require('discord.js');
const bot = new discord.Client();
const token = 'NjQ2MDI1NTcyMTE5NDc4Mjcy.XdLmxA.gVN9qtLnbL5gHok3Zzt3UEw_Gj4';
const prefix ='>';
const userFunction = require('./user');
const content = require('./content');
const textFunction = require('./text');
const musicFunction = require('./music');

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
            case 'user':
                userFunction.user(args, msg);
            break;
            case 'say':
                content.say(args, msg);
            break;
            case 'help':
                textFunction.help(msg);
            break;
            case 'clear':
                if (msg.member.hasPermission('ADMINISTRATOR') || msg.member.id == 271733914291142656){
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
            break;
        }
    }
})

bot.login(token);