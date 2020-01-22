const embedMessage = require('./embedMessages');

module.exports = {
    user : function (args, msg){
        var guildMember = msg.guild.member(msg.mentions.users.first());
        var mentionedUser = msg.mentions.users.first();
        msg.channel.bulkDelete(1);
        switch (args[1]){
            case 'info':
                msg.channel.send(embedMessage.userInfo(guildMember, mentionedUser));
            break;
            case 'ban': 
                if (!args[2])
                    msg.reply('merci de spécifier qui vous voulez ban ... boulet :facepalm:');
                else{
                    if (args[3]){
                        
                    }
                    if (msg.member.hasPermission('ADMINISTRATOR'))
                        ban(guildMember, mentionedUser, msg);
                    else
                        msg.reply('aha jokes on you, tu n\'as pas les droits !');
                }
            break;
            case 'kick':
                if (!args[2])
                    msg.reply('merci de spécifier qui vous voulez ban ... boulet :facepalm:');
                else{
                    if (msg.member.hasPermission('ADMINISTRATOR'))
                        kick(guildMember, mentionedUser, msg);
                    else
                        msg.reply('aha jokes on you, tu n\'as pas les droits !');
                }
            break;
        }
    }
}


function ban(guildUser,user, msg){
    let serverID = msg.guild.id;
    let nickname;

    if (guildUser.nickname != null){
        nickname = guildUser.nickname;
    }else{
        nickname = user.username;
    }

    if (!guildUser.bannable || guildUser.id == 271733914291142656){
        msg.channel.send(guildUser+' n\'est pas bannissable !');
        console.log('Bannissement impossible');
    }else{
        guildUser.send('Tu as été vilain.e et on a décidé de te ban !');
        guildUser.ban();
        msg.channel.send(nickname+' banni');
    }
}

function kick(guildUser, user, msg){
    let serverID = msg.guild.id;
    let nickname;

    if (guildUser.nickname != null){
        nickname = guildUser.nickname;
    }else{
        nickname = user.username;
    }

    if (!user.kickable || user.id == 271733914291142656){
        msg.channel.send(user+' n\'est pas bannissable !');
        console.log('Kick impossible');
    }else{
        guildUser.send('Aha tu as été kick, **grosse merde !**');
        guildUser.kick();
        msg.channel.send(nickname+' kick');
        console.log(nickname+' kick');
    }
}