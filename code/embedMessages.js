const discord = require('discord.js');
const useful = require('./useful');
const color = ['DEFAULT','WHITE','AQUA','GREEN','BLUE','PURPLE','LUMINOUS_VIVID_PINK','GOLD','ORANGE','RED','GREY','DARKER_GREY','NAVY','DARK_AQUA','DARK_GREEN','DARK_BLUE','DARK_PURPLE','DARK_VIVID_PINK','DARK_GOLD','DARK_ORANGE','DARK_RED','DARK_GREY','LIGHT_GREY','DARK_NAVY','RANDOM'];

module.exports = {
    userInfo: function(guildMember, member){
        let EmbedMessage = new discord.RichEmbed();
        let nickname;
        let joinDate = new Date();
        let joinString;

        joinDate.setDate(guildMember.joinedAt.getDate());
        joinDate.setMonth(guildMember.joinedAt.getMonth()+1);
        joinDate.setFullYear(guildMember.joinedAt.getFullYear());

        joinString = joinDate.getDate()+'/'+joinDate.getMonth()+'/'+joinDate.getFullYear();
        
        if (guildMember.nickname != null){
            nickname = guildMember.nickname;
        }else{
            nickname = member.username;
        }

        if (guildMember.voiceChannel != null){
            EmbedMessage.addField('Salon vocal actuel : ', guildMember.voiceChannel);
        }else{
            EmbedMessage.addField('Salon vocal actuel : ', 'N\'est connecté à aucun salon vocal');
        }
        EmbedMessage.setColor(color[useful.random(color.length)]);
        EmbedMessage.setTitle('Quelques infos à propos de '+nickname+' : ');
        EmbedMessage.setThumbnail(member.avatarURL);
        EmbedMessage.addField('Rôles de l\'utilisateur : ',guildMember.roles.map(r => `${r.name}`).join('| @'));
        EmbedMessage.setDescription('A rejoint le serveur le '+joinString);
        return EmbedMessage;
    }
}