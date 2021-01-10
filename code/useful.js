module.exports = {
    random: function(length){
        return Math.floor(Math.random()*Math.floor(length));
    },

    emoji: function(client, id){
        return client.emojis.get(id).toString();
    },

    furry: function(){
        var furries = ["OwO What dis ? ", "fucking furry", "owo", "jk OwO", "UwU show me ur bulgy wudgy"];
        return furries[this.random(furries.length)];
    }
}