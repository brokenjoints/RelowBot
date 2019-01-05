const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
  client.user.setActivity("relow help");
});

client.on('guildMemberAdd', member => {
    member.user.send("_Welcome to the official RELOW discord server! Whether you're here to chat with the community/devs, receive updates or both._\n\n"

+ "__QUESTIONS?__\n"
+ "Use the <#484619958395863050> channel.\n\n"
                     
+ "Follow the development also on Twitter and YouTube\n"
+ "https://twitter.com/brokenjoints_\n"
+ "https://www.youtube.com/channel/UCtJGCNnXi0KGdRtvN_QBITQ\nn"
                     
+ "**Have a nice day and invite to support the game!**\n"
+ "https://discord.gg/bCUvtnz"); 
});

client.on('message', message => {
  
  if (message.author.bot) return undefined;
  
  if (message.content === 'relow help' || message.content === 'Relow help') {
    message.channel.send("work in progress");
  }  
  if(message.content === 'relow signup' || message.content === 'Relow signup') {
    message.author.send('work in progress');
  }
if (message.content === 'relow join') {
  message.author.send("_Welcome to the official RELOW discord server! Whether you're here to chat with the community/devs, receive updates or both._\n\n"

+ "__QUESTIONS?__\n"
+ "Use the <#484619958395863050> channel.\n\n"
                     
+ "Follow the development also on Twitter and YouTube\n"
+ "https://twitter.com/brokenjoints_\n"
+ "https://www.youtube.com/channel/UCtJGCNnXi0KGdRtvN_QBITQ\nn"
                     
+ "**Have a nice day and invite to support the game!**\n"
+ "https://discord.gg/bCUvtnz");
}

});

client.login(process.env.BOT_TOKEN);
