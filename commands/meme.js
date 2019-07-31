module.exports.run = async (client, message, args) => {
  var request = require('request');
  request.get('https://www.reddit.com/r/memes/new/.json', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var reddit = JSON.parse(body);

      console.log(reddit.data.children[0].data.url)
//      var recentmemes = [
//        reddit.data.children[0].data.url,
//        reddit.data.children[1].data.url,
//        reddit.data.children[2].data.url,
//        reddit.data.children[3].data.url,
//        reddit.data.children[4].data.url,
//        reddit.data.children[5].data.url,
//        reddit.data.children[6].data.url,
//        reddit.data.children[7].data.url,
//        reddit.data.children[8].data.url,
//        reddit.data.children[9].data.url
//      ]

//function randomMeme(recentmemes) {
//    return recentmemes[Math.floor(Math.random() * recentmemes.length)];
//}
//var chosenmeme = randomMeme(recentmemes)
//if (chosenmeme.includes('.png')){
//  message.channel.send(randomMeme(recentmemes))
//}else if (chosenmeme.includes('.jpg')){
//    message.channel.send(randomMeme(recentmemes))
//  }else if (chosenmeme.includes('.webm')){
//      message.channel.send(randomMeme(recentmemes))
//    }else if (chosenmeme.includes('.jpeg')){
//        message.channel.send(randomMeme(recentmemes))
//      }
    }
  })
}
module.exports.config = {
  command: "meme"
}
