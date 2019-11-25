const discord = require('discord.js');
const bot = new discord.Client();
const token = 'NjQ2MDI1NTcyMTE5NDc4Mjcy.XdLmxA.gVN9qtLnbL5gHok3Zzt3UEw_Gj4';
const prefix ='>';

const media = ['./media/bad.mp4', './media/biscotte.gif', './media/bonjour.gif', './media/BoNjOuR2.gif', './media/catastrophe.gif', './media/CHEH.mp4', './media/huile.gif', './media/mambo.gif', './media/sel.mp4'];

var dm = 'Bonjour, les différentes commandes disponibles sont : \n**oss + ** bonjour, bagarre, fight, hello, help -> renvoie un gif ou une vidéo en lien avec OSS\n**sel** -> MAIS C\'ETAIT SUR EN FAIT!!\n**beer** -> You know what it is :kappa:\n**cheh** -> Très utile\n**hello** -> vous ne voulez pas essayer';
var dmAdmin ='\nCertaines commandes nécessitent d\'être admin pour être éxécués, parmi lesquels :\n**clear** + le nombre de messages à supprimer +1 -> supprime le nombre de messages donnés en arguments';

function LoggedIn(){
    console.log('Bot Online');
}

function oss(args, msg){
    if (args[1]==='bonjour'){
        msg.channel.bulkDelete(1);
        if (!args[2]){
            msg.reply('vous dit : ');
            msg.channel.send({files : [media[2]]});
        }else{
            msg.channel.send(args[2]+', '+msg.member.nickname+' vous dit : ');
            msg.channel.send({files : [media[2]]});
        }
    }else if (args[1]==='help'){
        msg.channel.bulkDelete(1);
        msg.channel.send({files : [media[0]]});
    }else if (args[1]==='bagarre'){
        msg.channel.bulkDelete(1);
        msg.channel.send('https://tenor.com/view/oss-117-battre-gif-8766514');
    }else if (args[1]==='fight')
        msg.reply('J\'aime également me battre');
    else if (args[1]==='biscotte'){
        msg.channel.bulkDelete(1);
        msg.channel.send({files : [media[1]]});
    }else if (args[1]==='oops'){
        msg.channel.bulkDelete(1);
        msg.channel.send({files : [media[4]]});
    }else if (args[1]==='massage'){
        msg.channel.bulkDelete(1);
        msg.channel.send({files : [media[6]]});
    }else if (args[1]==='danse'){
        msg.channel.bulkDelete(1);
        msg.channel.send({files : [media[7]]});
    }else 
        msg.channel.send('Invalid Args');
}

function Random(length){
    return Math.floor(Math.random()*Math.floor(length));
}

bot.on('ready', LoggedIn);

bot.on('message', msg=>{
    let args = msg.content.substring(prefix.length).split(" ");

    if (msg.content.startsWith(prefix)){
        switch(args[0]){
            case 'oss':
                oss(args, msg);
            break;
            case 'sel':
                msg.channel.send({files : [media[8]]});
            break;
            case 'help':
                msg.member.user.send(dm);
                msg.member.user.send(dmAdmin);
            break;
            case 'clear':
                msg.channel.bulkDelete(1);
                if (msg.member.hasPermission('ADMINISTRATOR')){
                    if (!args[1])
                        msg.reply('Merci de saisir des arguments valides ! >:(');
                    else{
                        msg.channel.bulkDelete(args[1]);
                    }
                }else
                    msg.reply('Tu n\'as pas les droits petit coquinou ;)');
            break;
            case 'beer':
                msg.channel.bulkDelete(1);
                msg.channel.send('https://media.discordapp.net/attachments/603256095217156096/638069133707182112/hhBeer.gif');
            break;
            case 'cheh':
                msg.channel.bulkDelete(1);
                msg.channel.send({files : [media[5]]});
            break;
            case 'avatar':
                var pic = msg.member.user.avatarURL;
                msg.channel.send(pic);
            break;
            case 'hello':
                msg.channel.bulkDelete(1);
                msg.reply('vous dit : ');
                msg.channel.send({files : [media[3]]});
            break;
            case 'random': 
                msg.channel.bulkDelete(1);
                msg.channel.send({files : [media[Random(media.length)]]});
            break;
        }
    }
})

bot.login(token);