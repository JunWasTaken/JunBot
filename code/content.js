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
    }
}