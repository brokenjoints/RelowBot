const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
  client.user.setActivity("relow help");
});

client.on('guildMemberAdd', member => {
    member.user.send(""); 
});

client.on('message', message => {
  
  if (message.author.bot) return undefined;
  
  if ((message.content === 'relow key' || message.content === 'Relow key') && message.channel.id == '528232787514490890') {  
    message.channel.send("");
    message.author.send("**Congratulations " + message.author.toString() + "!**\n You are now a **playtester.**\n\nYou will receive the alpha key as soon as possible.");
  }
  
  });

client.login(process.env.BOT_TOKEN);
