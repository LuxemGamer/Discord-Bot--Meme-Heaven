module.exports.run = async (client, message, args, argss, [mention, ...reason]) => {
message.delete();
var color1 = "546845"
message.channel.send({embed: {
 color: 298357,
 author: {
 name: client.user.username,
},
description: message.channel.nsfw,
footer: {
 text: "help"
}
}})
}
module.exports.config = {
  command: "test"
}
