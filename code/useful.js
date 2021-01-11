module.exports = {
    random: function(length){
        return Math.floor(Math.random()*Math.floor(length));
    },

    emoji: function(client, id){
        return client.emojis.get(id).toString();
    },

    furry: function(){
        var furries = ["OwO What dis ? ", "fucking furry", "owo", "jk OwO", "UwU show me ur bulgy wudgy", "https://cdn.discordapp.com/attachments/754722624721911870/797796050433867806/JB5NPR7QQqlEICmObDkVSUW1Xr5BvYpXW3JtlfhkG2Kako6pbcr3X0MO9t6irMuESOufXVCQpLpaNo9ho1sgXPK04u9HBHgPtGv8.png"];
        return furries[this.random(furries.length)];
    }
}