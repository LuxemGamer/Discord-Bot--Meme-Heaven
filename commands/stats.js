var os = require('os');
var os 	= require('os-utils');
const Discord = require("discord.js");
const client = new Discord.Client();
module.exports.run = async (client, message, [mention, ...reason]) => {
  const mess = message.content.toLowerCase();
      var mem1 = (os.totalmem() / 1000000);
      var mem2 = (os.freemem() / 1000000);
      var memPercent = ((mem2 / mem1) * 100).toFixed(2);
      message.channel.send({embed:{
        title:"Stats",
        color: 0x17A589,
        fields:[
          {
            name:"Users",
            value: client.users.size,
            inline: true
          },
          {
            name:"Guilds",
            value: client.guilds.size,
            inline: true
          },
          {
            name:"Channels",
            value: client.channels.size,
            inline: true
          },
          {
            name:"Bot Version",
            value: "v0.2.1",
            inline: true
          },
          {
            name:"Mem. Usage",
            value: Math.round(100 - memPercent) + '% Usage',
            inline: true
          },
          {
            name:"Ping",
            value: Math.round(client.ping) + "ms",
            inline: true
          },
          {
            name:"Node version",
            value: process.versions.node,
            inline: true
          },
          {
            name:"Modules installed",
            value: process.versions.modules,
            inline: true
          },
          {
            name:"Dev",
            value: "╲⎝⧹LuXeM⧸⎠╱#6409",
            inline: true
          }
        ]
      }});
};




module.exports.config = {
  command: "stats"
}
