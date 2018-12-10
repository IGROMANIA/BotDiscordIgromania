const Commando = require('discord.js-commando');
const bot = new Commando.Client();
const TOKEN = 'NTIxNjg4MjY0MTg5NTQyNDEw.DvAD9Q.XLFZrfYec9TNAcs2Asg40v6XTNw'

bot.registry.registerGroup('simple','Simple');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

bot.on('message',(message)=>{
 if(message.content == "ping"){
      message.reply("pong")
  }
});

bot.on('message',function(message){
    if(message.content == 'Hello')
    {
        message.channel.sendMessage('Hello ' + message.author + ', how are you?');
    }
});


bot.on('ready',function(){
    console.log("Ready");
})

bot.login(TOKEN);
