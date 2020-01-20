const media = ['./media/reaction/bad.mp4', './media/reaction/biscotte.gif', './media/reaction/bonjour.gif', './media/reaction/BoNjOuR2.gif', './media/reaction/catastrophe.gif', './media/reaction/CHEH.mp4', './media/reaction/huile.gif', './media/reaction/mambo.gif', './media/reaction/sel.mp4'];
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
}