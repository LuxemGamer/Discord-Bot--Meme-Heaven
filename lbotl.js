console.log("-----------------------------------")
console.log("<===>  Bot is about to start  <===>")
console.log("-----------------------------------")
var os = require('os');
var os 	= require('os-utils');
var request = require('request');
const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
var points = JSON.parse(fs.readFileSync("Storage/points.json", "utf8"));
var config = JSON.parse(fs.readFileSync('./settings.json', 'utf-8'));
const prefix = config.prefix;
const discord_token = config.discord_token;


client.commands = new Discord.Collection(); // First, we need to make a collection of all the commands for the bot.
function reload () {
    fs.readdir('./commands/', (err, files) => { // This reads the directory of the commands folder.
        if(err) console.error(err); // This, sends an error message if it gets an error calling the commands,

        var jsfiles = files.filter(f => f.split('.').pop() === 'js'); // This checks if the file extension is 'js', or the text after the . is 'js'.
        if (jsfiles.length <= 0) { return console.log('No commands found...')} // This returns & sends to the console that no commands were found in the folder.
        else { console.log(jsfiles.length + ' commands found.') } // This tells how many commands it found.

        jsfiles.forEach((f, i) => { // This, loops through each file and runs the following code.
            delete require.cache[require.resolve(`./commands/${f}`)];
            var cmds = require(`./commands/${f}`); // This gets every js file in the chosen folder.
            console.log(`Command ${f} loading...`); // This logs to the console that the command <name> is loading.
            client.commands.set(cmds.config.command, cmds); // This gets the name of the command, as well as the modules in the file.
        })
    })
}
reload();


client.on('message', message => {
    if(message.author.bot) return;
    var sender = message.author; // The text before commands, you can set this to what ever you want
    var cont = message.content.slice(prefix.length).split(" "); // This slices off the prefix, then puts it in an array.
    var args = cont.slice(1); // This is everything after the command in an array.
    var msg = message.content.toUpperCase();
    const args3 = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const argss = message.content.split(' ').slice(1).join(" ");
    const args1 = message.content.split(" ").slice(1);
    var url1 = message.content.slice(6);
    if (!message.content.startsWith(prefix)) return; // This returns if the prefix of the command is not the one set.

    var cmd = client.commands.get(cont[0]) // This tries to grab the command that you called in chat.
    if (cmd){
      cmd.run(client, message, args, argss, args1, args3); // This checks if it exists, and if it does it runs the command.
    } else {
      message.channel.send("Please use "+ prefix +"help.")
    }






//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////
    const ownerID = "166754971843297280";
    if(message.author.id !== ownerID) return;
      if (msg === prefix + 'RELOAD') {

        message.channel.send({embed:{description: "@" + message.author.username + " All Commands Reloaded!"}})
        reload()
      }
///////////////////////////////////////////////////////////////////////
})




client.on('ready', () => {
  console.log("Thanks for using THE MEME DESTROYER");
  console.log("                 ♥                 ");
  console.log("          By LuXeM#6409            ");
  console.log("-----------------------------------");
  console.log("<===>     Bot is started!     <===>");
  console.log("-----------------------------------");
//  client.user.setGame("<help");
  var pressence = [
    "Scanning for Memes...",
    "No Memes found...",
    "Low Quality detected!",
    "Posting Memes",
    "Error 404",
    "Sad Pepe :(",
    "Watching Hentai",
    "Starting WW3",
    "Saving kittens",
    "Memes?",
    "Notice ME!",
    "Serving Meme Heaven",
    "Playing with memes"
  ]
function prese(arg) {
  client.user.setPresence({ game: { name: pressence[Math.floor(Math.random() * pressence.length)], type: 0 } });
}
setInterval(prese, 300000);
//////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////
function mimis(arg) {
request.get('https://www.reddit.com/r/memes/new/.json', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var reddit1 = JSON.parse(body);
    var recentmimis = [
      reddit1.data.children[0].data.url,
      reddit1.data.children[1].data.url,
      reddit1.data.children[2].data.url,
      reddit1.data.children[3].data.url,
      reddit1.data.children[4].data.url,
      reddit1.data.children[5].data.url,
      reddit1.data.children[6].data.url,
      reddit1.data.children[7].data.url,
      reddit1.data.children[8].data.url,
      reddit1.data.children[9].data.url
    ]
function randomMimi(recentmimis) {
  console.log("Mimis: " + recentmimis[Math.floor(Math.random() * recentmimis.length)])
  return recentmimis[Math.floor(Math.random() * recentmimis.length)];
}
var chosenmimi = randomMimi(recentmimis)
if (chosenmimi.includes('.png')){
client.channels.get('605119806386995213').send({embed: {
  color: 3447003,
  image: {
    "url": chosenmimi
}}})
}else if (chosenmimi.includes('.jpg')){
  client.channels.get('605119806386995213').send({embed: {
    color: 3447003,
    image: {
      "url": chosenmimi
  }}})
}else if (chosenmimi.includes('.webm')){
  client.channels.get('605119806386995213').send({embed: {
    color: 3447003,
    image: {
      "url": chosenmimi
  }}})
  }else if (chosenmimi.includes('.jpeg')){
      client.channels.get('605119806386995213').send({embed: {
        color: 3447003,
        url: chosenmimi
      }})
    }
  }
})
}
//////////////////////////////////////////////////////////////////////////
function dankmimis(arg) {
request.get('https://www.reddit.com/r/dankmemes/new/.json', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var reddit2 = JSON.parse(body);
    var recentdankmimis = [
      reddit2.data.children[0].data.url,
      reddit2.data.children[1].data.url,
      reddit2.data.children[2].data.url,
      reddit2.data.children[3].data.url,
      reddit2.data.children[4].data.url,
      reddit2.data.children[5].data.url,
      reddit2.data.children[6].data.url,
      reddit2.data.children[7].data.url,
      reddit2.data.children[8].data.url,
      reddit2.data.children[9].data.url
    ]
function randomDankmimis(recentdankmimiss) {
  console.log("Dankmimis: "+ recentdankmimis[Math.floor(Math.random() * recentdankmimis.length)])
  return recentdankmimis[Math.floor(Math.random() * recentdankmimis.length)];
}
var chosendankmimi = randomDankmimis(recentdankmimis)
if (chosendankmimi.includes('.png')){
client.channels.get('605119824229695513').send({embed: {
  color: 3447003,
  image: {
    "url": chosendankmimi
}}})
}else if (chosendankmimi.includes('.jpg')){
  client.channels.get('605119824229695513').send({embed: {
    color: 3447003,
    image: {
      "url": chosendankmimi
  }}})
}else if (chosendankmimi.includes('.webm')){
    client.channels.get('605119824229695513').send({embed: {
      color: 3447003,
      image: {
        "url": chosendankmimi
    }}})
  }else if (chosendankmimi.includes('.jpeg')){
      client.channels.get('605119824229695513').send({embed: {
        color: 3447003,
        image: {
          "url": chosendankmimi
      }}})
    }
  }
})
}
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
function fthanos(arg) {
request.get('https://www.reddit.com/r/animemes/new/.json', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var reddit4 = JSON.parse(body);
    var recentthanos = [
      reddit4.data.children[0].data.url,
      reddit4.data.children[1].data.url,
      reddit4.data.children[2].data.url,
      reddit4.data.children[3].data.url,
      reddit4.data.children[4].data.url,
      reddit4.data.children[5].data.url,
      reddit4.data.children[6].data.url,
      reddit4.data.children[7].data.url,
      reddit4.data.children[8].data.url,
      reddit4.data.children[9].data.url
    ]
function randomthanos(recentthanos) {
  console.log("Dankmimis: "+ recentthanos[Math.floor(Math.random() * recentthanos.length)])
  return recentthanos[Math.floor(Math.random() * recentthanos.length)];
}
var chosenthanos = randomthanos(recentthanos)
if (chosenthanos.includes('.png')){
client.channels.get('605326197714321428').send({embed: {
  color: 3447003,
  image: {
    "url": chosenthanos
}}})
}else if (chosenthanos.includes('.jpg')){
  client.channels.get('605326197714321428').send({embed: {
    color: 3447003,
    image: {
      "url": chosenthanos
  }}})
}else if (chosenthanos.includes('.webm')){
    client.channels.get('605326197714321428').send({embed: {
      color: 3447003,
      image: {
        "url": chosenthanos
    }}})
  }else if (chosenthanos.includes('.jpeg')){
      client.channels.get('605326197714321428').send({embed: {
        color: 3447003,
        image: {
          "url": chosenthanos
      }}})
    }
  }
})
}
//////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////
function fakehistoryporn(arg) {
request.get('https://www.reddit.com/r/fakehistoryporn/new/.json', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var reddit6 = JSON.parse(body);
    var recentfakehistory = [
      reddit6.data.children[0].data.url,
      reddit6.data.children[1].data.url,
      reddit6.data.children[2].data.url,
      reddit6.data.children[3].data.url,
      reddit6.data.children[4].data.url,
      reddit6.data.children[5].data.url,
      reddit6.data.children[6].data.url,
      reddit6.data.children[7].data.url,
      reddit6.data.children[8].data.url,
      reddit6.data.children[9].data.url
    ]
function randomfakehistory(recentfakehistory) {
  console.log("Dankmimis: "+ recentfakehistory[Math.floor(Math.random() * recentfakehistory.length)])
  return recentfakehistory[Math.floor(Math.random() * recentfakehistory.length)];
}
var chosenfakehistory = randomfakehistory(recentfakehistory)
if (chosenfakehistory.includes('.png')){
client.channels.get('605157147440971915').send({embed: {
  color: 3447003,
  image: {
    "url": chosenfakehistory
}}})
}else if (chosenfakehistory.includes('.jpg')){
  client.channels.get('605157147440971915').send({embed: {
    color: 3447003,
    image: {
      "url": chosenfakehistory
  }}})
}else if (chosenfakehistory.includes('.webm')){
    client.channels.get('605157147440971915').send({embed: {
      color: 3447003,
      image: {
        "url": chosenfakehistory
    }}})
  }else if (chosenfakehistory.includes('.jpeg')){
      client.channels.get('605157147440971915').send({embed: {
        color: 3447003,
        image: {
          "url": chosenfakehistory
      }}})
    }
  }
})
}
//////////////////////////////////////////////////////////////////////////
function cursedimages(arg) {
request.get('https://www.reddit.com/r/cursedimages/new/.json', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var reddit7 = JSON.parse(body);
    var recentcursedimages = [
      reddit7.data.children[0].data.url,
      reddit7.data.children[1].data.url,
      reddit7.data.children[2].data.url,
      reddit7.data.children[3].data.url,
      reddit7.data.children[4].data.url,
      reddit7.data.children[5].data.url,
      reddit7.data.children[6].data.url,
      reddit7.data.children[7].data.url,
      reddit7.data.children[8].data.url,
      reddit7.data.children[9].data.url
    ]
function randomcursedimages(recentcursedimages) {
  console.log("Dankmimis: "+ recentcursedimages[Math.floor(Math.random() * recentcursedimages.length)])
  return recentcursedimages[Math.floor(Math.random() * recentcursedimages.length)];
}
var chosencursedimages = randomcursedimages(recentcursedimages)
if (chosencursedimages.includes('.png')){
client.channels.get('605157435165900862').send({embed: {
  color: 3447003,
  image: {
    "url": chosencursedimages
}}})
}else if (chosencursedimages.includes('.jpg')){
  client.channels.get('605157435165900862').send({embed: {
    color: 3447003,
    image: {
      "url": chosencursedimages
  }}})
}else if (chosencursedimages.includes('.webm')){
    client.channels.get('605157435165900862').send({embed: {
      color: 3447003,
      image: {
        "url": chosencursedimages
    }}})
  }else if (chosencursedimages.includes('.jpeg')){
      client.channels.get('605157435165900862').send({embed: {
        color: 3447003,
        image: {
          "url": chosencursedimages
      }}})
    }
  }
})
}
//////////////////////////////////////////////////////////////////////////
function blursedimages(arg) {
request.get('https://www.reddit.com/r/blursedimages/new/.json', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var reddit8 = JSON.parse(body);
    var recentblursedimages = [
      reddit8.data.children[0].data.url,
      reddit8.data.children[1].data.url,
      reddit8.data.children[2].data.url,
      reddit8.data.children[3].data.url,
      reddit8.data.children[4].data.url,
      reddit8.data.children[5].data.url,
      reddit8.data.children[6].data.url,
      reddit8.data.children[7].data.url,
      reddit8.data.children[8].data.url,
      reddit8.data.children[9].data.url
    ]
function randomblursedimages(recentblursedimages) {
  console.log("Dankmimis: "+ recentblursedimages[Math.floor(Math.random() * recentblursedimages.length)])
  return recentblursedimages[Math.floor(Math.random() * recentblursedimages.length)];
}
var chosenblursedimages = randomblursedimages(recentblursedimages)
if (chosenblursedimages.includes('.png')){
client.channels.get('605157547472846886').send({embed: {
  color: 3447003,
  image: {
    "url": chosenblursedimages
}}})
}else if (chosenblursedimages.includes('.jpg')){
  client.channels.get('605157547472846886').send({embed: {
    color: 3447003,
    image: {
      "url": chosenblursedimages
  }}})
}else if (chosenblursedimages.includes('.webm')){
    client.channels.get('605157547472846886').send({embed: {
      color: 3447003,
      image: {
        "url": chosenblursedimages
    }}})
  }else if (chosenblursedimages.includes('.jpeg')){
      client.channels.get('605157547472846886').send({embed: {
        color: 3447003,
        image: {
          "url": chosenblursedimages
      }}})
    }
  }
})
}
//////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////
function histmeme(arg) {
request.get('https://www.reddit.com/r/HistoryMemes/new/.json', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var reddit11 = JSON.parse(body);
    var recenthistmeme = [
      reddit11.data.children[0].data.url,
      reddit11.data.children[1].data.url,
      reddit11.data.children[2].data.url,
      reddit11.data.children[3].data.url,
      reddit11.data.children[4].data.url,
      reddit11.data.children[5].data.url,
      reddit11.data.children[6].data.url,
      reddit11.data.children[7].data.url,
      reddit11.data.children[8].data.url,
      reddit11.data.children[9].data.url
    ]
function randomhistmeme(recenthistmeme) {
  console.log("Dankmimis: "+ recenthistmeme[Math.floor(Math.random() * recenthistmeme.length)])
  return recenthistmeme[Math.floor(Math.random() * recenthistmeme.length)];
}
var chosenhistmeme = randomhistmeme(recenthistmeme)
if (chosenhistmeme.includes('.png')){
client.channels.get('605158355715227662').send({embed: {
  color: 3447003,
  image: {
    "url": chosenhistmeme
}}})
}else if (chosenhistmeme.includes('.jpg')){
  client.channels.get('605158355715227662').send({embed: {
    color: 3447003,
    image: {
      "url": chosenhistmeme
  }}})
}else if (chosenhistmeme.includes('.webm')){
    client.channels.get('605158355715227662').send({embed: {
      color: 3447003,
      image: {
        "url": chosenhistmeme
    }}})
  }else if (chosenhistmeme.includes('.jpeg')){
      client.channels.get('605158355715227662').send({embed: {
        color: 3447003,
        image: {
          "url": chosenhistmeme
      }}})
    }
  }
})
}
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////



setInterval(mimis, 300000);
setInterval(dankmimis, 305000);
setInterval(fthanos, 305000);
setInterval(fakehistoryporn, 500000);
setInterval(cursedimages, 530000);
setInterval(blursedimages, 335000);
setInterval(histmeme, 350000);


//console.log(os.cpus());
console.log(os.totalmem());
console.log(os.freemem())

/////////////////////////////////////////////////////////////////////////
});
client.login(discord_token);
