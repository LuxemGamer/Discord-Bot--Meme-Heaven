var os = require('os');
var os 	= require('os-utils');
module.exports.run = async (client, message, args1, args, argss) => {
  const ownerID = "166754971843297280";
  if(message.author.id !== ownerID) return;
  try {
    const code = args1.join(" ");
    let evaled = eval(code);

    if (typeof evaled !== "string")
      evaled = require("util").inspect(evaled);

      message.channel.send({embed: {
      color: 0x55FF00,
      author: {
        icon_url: client.user.avatarURL
      },
      title: "**:white_check_mark: Success:**",
      fields: [{
          name: "**Input:**",
          value: `\`\`\`xl\n${code}\n\`\`\``
        },
        {
          name: "**Output:**",
          value: `\`\`\`xl\n${clean(evaled)}\n\`\`\``
        }
      ],
      footer: {
        icon_url: client.user.avatarURL,
        text: "© L-Bot Eval"
      }
    }
  });
  } catch (err) {
    message.channel.send({embed: {
    color: 0xFF0000,
    author: {
      icon_url: client.user.avatarURL
    },
    title: "**:x:ERROR:**",
    fields: [{
        name: "**Input:**",
        value: `\`\`\`xl\n${args1.join(" ")}\n\`\`\``
      },
      {
        name: "**Output:**",
        value: `\`\`\`xl\n${clean(err)}\n\`\`\``
      }
    ],
    footer: {
      icon_url: client.user.avatarURL,
      text: "© L-Bot | Eval"
    }
  }
});
  }
}


function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}

module.exports.config = {
  command: "eval"
}
