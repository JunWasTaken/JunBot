const ytdl = require('ytdl-core');
var playlist = new Array();
var connection;
var servers = {};

module.exports = {
    music:function(msg, args){
        play(args, msg);
    }
}

function logToChannel(msg){
    if (msg.member.voiceChannel){
        connection = msg.member.voiceChannel.join();
    }else{
        msg.reply('vous n\'êtes pas dans un channel vocal');
    }
}

function play(args, msg){
    if (!args[1]){
        return msg.reply('vous devez mettre un lien youtube pour que ça fonctionne ._.').catch(console.error);
    }else{
        if (!servers[msg.guild.id]){
            servers[msg.guild.id] = {queue: []};
        }
        var server = servers[msg.guild.id]
        //connection.playStream(ytdl(args[1], {filter: 'audioonly'}));
        if (!msg.guild.voiceConnection){
            logToChannel(msg);
        }
        server.dispatcher = connection.playStream(ytdl(server.queue[0], {filter: 'audioonly'}));
        server.queue.shift();
        server.dispatcher.on("end", function(){
            if (server.queue[0]){
                play(args[1], msg);
            }else{
                connection.disconnect();
            }
        })
    }
}



