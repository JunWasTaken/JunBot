const media = ['./media/reaction/bad.mp4', './media/reaction/biscotte.gif', './media/reaction/bonjour.gif', './media/reaction/BoNjOuR2.gif', './media/reaction/catastrophe.gif', './media/reaction/CHEH.mp4', './media/reaction/huile.gif', './media/reaction/mambo.gif', './media/reaction/sel.mp4', './media/reaction/rigolo.mp4'];
const useful = require('./useful');

module.exports = {
    reaction: function(args, msg){
        msg.channel.bulkDelete(1);
        switch(args[1]){
            case 'sel':
                msg.channel.send({files : [media[8]]});
            break;
            case 'beer':
                msg.channel.send('https://media.discordapp.net/attachments/603256095217156096/638069133707182112/hhBeer.gif');
            break;
            case 'cheh':
                msg.channel.send({files : [media[5]]});
            break;
            case 'hello':
                msg.reply('vous dit : ');
                msg.channel.send({files : [media[3]]});
            break;
            case 'random': 
                msg.channel.send({files : [media[useful.random(media.length)]]});
            break;
        }
    },

    oss: function(args, msg){
        msg.channel.bulkDelete(1);
        switch (args[1]){
            case 'bonjour':
                if (!args[2]){
                    msg.reply('vous dit : ');
                    msg.channel.send({files : [media[2]]});
                }else{
                    msg.channel.send(args[2]+', '+msg.member.nickname+' vous dit : ');
                    msg.channel.send({files : [media[2]]});
                }
            break;
            case 'help':
                msg.channel.send({files : [media[0]]});
            break;
            case 'bagarre':
                msg.channel.send('https://tenor.com/view/oss-117-battre-gif-8766514');
            break;
            case 'fight':
                msg.reply('J\'aime également me battre');
            break;
            case 'biscotte':
                msg.channel.send({files : [media[1]]});
            break;
            case 'oops':
                msg.channel.send({files : [media[4]]});
            break;
            case 'massage':
                msg.channel.send({files : [media[6]]});
            break;
            case 'danse':
                msg.channel.send({files : [media[7]]});
            break;
            case 'rigolo':
                msg.channel.send({files : [media[9]]});
            break;
            default : 
                msg.channel.send('Arguments invalides');
        }
    },

    say: function(args, msg){
        let say = "";
        let array = args.slice(1);
        array.forEach(item => {
            if (say == null){
                say+=item;
            }else{
                say+= ' '+item;
            }
        });
        msg.channel.bulkDelete(1);
        msg.channel.send(say);
        return;
    }
}