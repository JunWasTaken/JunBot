const discord = require('discord.js');
const musicClient = require('yet-another-discord.js-musicbot-addon');
const bot = new discord.Client();
const token = 'NjQ2MDI1NTcyMTE5NDc4Mjcy.XdLmxA.gVN9qtLnbL5gHok3Zzt3UEw_Gj4';
const prefix ='>';
const userFunction = require('./user');
const content = require('./content');
const musicFunction = require('./music');
const useful = require('./useful');
const MusicClient = require('yet-another-discord.js-musicbot-addon');

function LoggedIn(){
    bot.user.setStatus("online");
    bot.user.setActivity('>help', {type : 'PLAYING'});
    console.log('Bot Online');
}

bot.music = new MusicClient(bot, {
    apiKey : "AIzaSyCl4n-fnM_P6nDZh7WLbagv917fSjWUIVc",
    defVolume : 50,
    bitRate : 12000,
    maxHistory : 25,
    maxQueue: 100, 
    searchFilters: ['cover', 'live', 'remix', 'mix', 'parody', 'hour', 'extended', 'trailer'],
    color: 13632027,
});

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
            case 'clear':
                console.log(msg.guild.owner);
                console.log(msg.guild.members);
                //console.log(guild.member(msg.author));
                /*if (msg.guild.member(msg.author).hasPermission('ADMINISTRATOR') || msg.author.id == 271733914291142656){
                    if (!args[1])
                        msg.reply('Merci de saisir des arguments valides ! >:(');
                    else{
                        msg.channel.bulkDelete(args[1]);
                    }
                }else
                    msg.reply('Tu n\'as pas les droits petit coquinou ;)');*/
            break;
            case 'music':
                //console.log(bot.music);
                bot.music.joinFunction(msg);
                bot.music.playFunction(msg, args[1]);
                //musicFunction.music(msg, args, bot.music);
            break;
        }
    }else if (msg.content == "yes" || msg.content == ":yes:"){
        msg.channel.send(useful.emoji(bot, "795738291819249694"));
    }else if ((msg.content.toUpperCase().includes("OWO") || msg.content.toUpperCase().includes("UWU")) && msg.author.id != 646025572119478272){
        msg.channel.send(useful.furry());
    }
})

function emoji(id){
    return bot.emojis.get(id).toString();
}

bot.login(token);