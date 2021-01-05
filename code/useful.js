module.exports = {
    random: function(length){
        return Math.floor(Math.random()*Math.floor(length));
    },

    emoji: function(id){
        return bot.emojis.get(id);
    }
}