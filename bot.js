const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
  client.user.setActivity("relow help");
});

client.on('guildMemberAdd', member => {
    member.user.send("**👋 Welcome on board!**\n\nℹ️__SOME QUICK INFO__\n\n🎲 discover my functions with **relow help**\n🔑 **alpha key** will be sent by giveaway or before a playtest\n🎮 the next **playtest** will be in January\n🏆 waiting for the alpha playtest there’s a **tournament** in progress"); 
});

client.on('message', message => {
  
  if (message.author.bot) return undefined;
  
  if (message.content === 'relow help') {
    message.channel.send('__RELOWBOT FUNCTIONS__\n\n**relow key**\n**relow playtest**\n**relow tournament**\n**relow info**');
  }
  if (message.content === 'relow key') {
    message.channel.send('I will never give you a key');
  }
  if (message.content === 'relow playtest') {
    message.channel.send(':video_game: there is no playtest at the moment\n:bell: playtests will be announced in '+ message.guild.channels.find(channel => channel.name === "playtest-schedule").toString());
  }
  if (message.content === 'relow tournament') {
    message.channel.send(':fire: there is a tournament in progress\n:information_source: read more in' + message.guild.channels.find(channel => channel.name === "tournament-rules").toString());
  }
if (message.content === 'relow join') {
  message.channel.send('**👋 Welcome on board!**\n\nℹ️__SOME QUICK INFO__\n\n🎲 discover my functions with **relow help**\n **alpha key** will be sent by giveaway or before a playtest\n🎮 the next **playtest** will be in January\n🏆 waiting for the alpha playtest there’s a **tournament** in progress');
}

});

client.login(process.env.BOT_TOKEN);
