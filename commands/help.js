const fs = require("fs");
var msghelp = (fs.readFileSync('Storage/msghelp.txt', 'utf-8'));
module.exports.run = async (client, message, args) => {

  message.delete();
  message.channel.send({embed: {
    color: 298357,
    author: {
      name: client.user.username,
      icon_url: 'https://cdn.pixabay.com/photo/2017/03/17/05/21/info-2150941__340.png'
    },
    description: (msghelp),
    timestamp: new Date(),
    footer: {
      icon_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Info_Simple_bw.svg/768px-Info_Simple_bw.svg.png',
      text: "Help"
    }
  }})
  }

module.exports.config = {
  command: "help555"
}
