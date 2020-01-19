var fs = require('fs');
var text = fs.readFileSync('./media/texte/help.txt').toString().split("\n");

module.exports = {
    help: function(msg){
        let text = fs.readFileSync('./media/texte/help.txt').toString().split("\n");
        msg.member.send(text);
    }
}