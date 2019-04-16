const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
  client.user.setActivity("relow help");
});

client.on('guildMemberAdd', member => {
    member.user.send("**WELCOME TO THE OFFICIAL RELOW DISCORD SERVER!**\n\n"

+ "__ALPHA TESTING__\n"
+ "- To receive an alpha key write __relow key__ in the <#528232787514490890> channel when there's a key giveaway in progress.\n"
+ "- Playtests will be announced here <#521600711491059712>\n\n"
                     
+ "**FOLLOW THE DEVELOPMENT**\n"
+ "<https://twitter.com/brokenjoints_>\n"
+ "<https://www.youtube.com/channel/UCtJGCNnXi0KGdRtvN_QBITQ>\n\n"
                     
+ "**INVITE TO SUPPORT THE GAME**\n"
+ "https://discord.gg/bCUvtnz \n\n"
+ "**HAVE A NICE DAY!**"); 
});

client.on('message', message => {
  
  if (message.author.bot) return undefined;
  
  if (message.content.toLowerCase() === 'relow key' && message.channel.id == '528232787514490890') {  
    message.channel.send(message.author.toString() + " is now a **playtester**");
    message.author.send("**Congratulations " + message.author.toString() + "!**\n You are now a **playtester.**\n\n__You will receive the alpha key as soon as possible.__");
  }
  
  if (message.content.toLowerCase() === 'relow join') {  
    message.channel.send("**WELCOME TO THE OFFICIAL RELOW DISCORD SERVER!**\n\n"

+ "__ALPHA TESTING__\n"
+ "- To receive an alpha key write __relow key__ in the <#528232787514490890> channel when there's a key giveaway in progress.\n"
+ "- Playtests will be announced here <#521600711491059712>\n\n"
                     
+ "**FOLLOW THE DEVELOPMENT**\n"
+ "<https://twitter.com/brokenjoints_>\n"
+ "<https://www.youtube.com/channel/UCtJGCNnXi0KGdRtvN_QBITQ>\n\n"
                     
+ "**INVITE TO SUPPORT THE GAME**\n"
+ "https://discord.gg/bCUvtnz \n\n"
+ "**HAVE A NICE DAY!**");
  }

});

client.login(process.env.BOT_TOKEN);
