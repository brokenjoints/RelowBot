const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
  client.user.setActivity("relow help");
});

client.on('guildMemberAdd', member => {
    member.user.send("_Welcome to the official RELOW discord server! Whether you're here to chat with the community/devs, receive updates or both._\n"

+ "__QUESTIONS?__\n"
+ "Use the <#484619958395863050> channel.\n"

+ "**Have a nice day and invite to support the game!**\n"
+ "https://discord.gg/bCUvtnz"); 
});

client.on('message', message => {
  
  if (message.author.bot) return undefined;
  
  if (message.content === 'relow help' || message.content === 'Relow help') {
    message.channel.send("__RELOWBOT FUNCTIONS__\n\n"
                         + "__INFO__\n"
                         + "**relow key**\n"
                         + "**relow playtest**\n"
                         + "**relow signup**\n"
                         + "**relow date**\n"
                         + "**relow platform**\n"
                         + "**relow price**\n\n"
                         + "__RELOW WIKI__\n"
                         + "**relow weapons**\n"
                         + "**relow armors**\n"
                         + "**relow biomes**\n\n"
                         + "__RELOW ESPORT__\n"
                         + "**relow esport**\n\n"
                         + "__RELOW LINKS__\n"
                         + "**relow links**");
  }
  if (message.content === 'relow key' || message.content === 'Relow key') {
    message.channel.send("**RELOW KEY**\n\n"
                         + "__HOW TO RECEIVE A KEY__\n\n"
                         + "**the alpha sign up isn’t started yet**\n\n"
                         + "__HOW TO REDEEM A KEY__\n"
                         + "click the button in the bottom left corner **+ ADD GAME...**\n"
                         + "**activate a product on Steam**\n"
                         + "follow the prompts and paste the key code");
  }
  if (message.content === 'relow playtest' || message.content === 'Relow playtest') {
    message.channel.send("**WIP**\n\n");
  }
  if (message.content === 'relow tournament' || message.content === 'Relow tournament') {
    message.channel.send("**WIP**\n\n");
  }
  if(message.content === 'relow info' || message.content === 'Relow info') {
    message.channel.send('WIP');
  }
  if(message.content === 'relow signup' || message.content === 'Relow signup') {
    message.author.send('WIP');
  }
if (message.content === 'relow join') {
  message.author.send("_Welcome to the official RELOW discord server! Whether you're here to chat with the community/devs, receive updates or both._\n"

+ "__QUESTIONS?__\n"
+ "Use the <#484619958395863050> channel.\n"

+ "**Have a nice day and invite to support the game!**\n"
+ "https://discord.gg/bCUvtnz");
}

});

client.login(process.env.BOT_TOKEN);
