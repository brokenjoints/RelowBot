const Discord = require('discord.js');
const client = new Discord.Client();
var key = 0;
var totalKey = 5;

client.on('ready', () => {
  console.log('I am ready!');
  client.user.setActivity("relow help");
});

client.on('guildMemberAdd', member => {
    member.user.send("_Welcome to the official RELOW discord server! Whether you're here to chat with the community/devs, receive updates or both._\n\n"

+ "__QUESTIONS?__\n"
+ "Use the <#484619958395863050> channel.\n\n"
                     
+ "**Follow the development also on Twitter and YouTube**\n"
+ "<https://twitter.com/brokenjoints_>\n"
+ "<https://www.youtube.com/channel/UCtJGCNnXi0KGdRtvN_QBITQ>\n\n"
                     
+ "**Have a nice day and invite to support the game!**\n"
+ "https://discord.gg/bCUvtnz"); 
});

client.on('message', message => {
  
  if (message.author.bot) return undefined;
  
  if (message.content === 'relow help' || message.content === 'Relow help') {
    message.channel.send("**RELOW HELP**\n\n"
                         
                        + "__RELOW BOT FUNCTIONS__\n"
                        + "**relow signup**\n"
                        + "**relow screenshot**");
  }  
  if(message.content === 'relow signup' || message.content === 'Relow signup') {
    if (key === totalKey) {
      message.channel.send('**unfortunately all the keys have been taken**\nthere will be a new giveaway very soon');
    }
    if (key < totalKey) {
      key++;
    message.author.send('**RELOW ALPHA SIGNUP**\n\n__registered correctly__\n\n**WE WILL SEND YOU A KEY AS SOON AS POSSIBLE**');
    message.channel.send('**registered correctly**\n__' + (totalKey - key) + ' keys left__');
    }
    
  }
  
  if (message.content === 'relow screenshot' || message.content === 'Relow screenshot') {
    const rando_imgs = [
'http://imgur.com/LLx3YWa',
'http://imgur.com/0PHMVhl',
'http://imgur.com/sR9ji1k',
      'http://imgur.com/9J68liG',
      'http://imgur.com/7T3oeNc',
      'http://imgur.com/JFhYaZm',
]
    message.channel.send("**RELOW RANDOM SCREENSHOT**\n" + rando_imgs[Math.floor(Math.random() * rando_imgs.length)]);
  } 
  if (message.author.id == '441681903481782294' && (message.channel.id == '522667266454847488' || message.channel.id == '531074059904221184' || message.channel.id == '521600711491059712' || message.channel.id == '526715633803722753' || message.channel.id == '526423137512849408')) {
    message.react("😍")
    .then(reaction => console.log(typeof reaction));
    message.react("❤️")
    .then(reaction => console.log(typeof reaction));
    message.react("😱")
    .then(reaction => console.log(typeof reaction));
    message.react(client.emojis.get("485732441567526914"))
    .then(reaction => console.log(typeof reaction));
    message.react(client.emojis.get("485732441676578816"))
    .then(reaction => console.log(typeof reaction));
    message.react("🔥")
    .then(reaction => console.log(typeof reaction));
    message.react(client.emojis.get("496682914340405248"))
    .then(reaction => console.log(typeof reaction));
    message.react(client.emojis.get("511642863566585868"))
    .then(reaction => console.log(typeof reaction));
    message.react(client.emojis.get("511642863172321280"))
    .then(reaction => console.log(typeof reaction));
    message.react(client.emojis.get("485732441345228805"))
    .then(reaction => console.log(typeof reaction));
    message.react(client.emojis.get("511642863172321280"))
    .then(reaction => console.log(typeof reaction));
    message.react(client.emojis.get("511642863759523867"))
    .then(reaction => console.log(typeof reaction));
    message.react(client.emojis.get("496682913492893697"))
    .then(reaction => console.log(typeof reaction));
    message.react(client.emojis.get("511642863508127757"))
    .then(reaction => console.log(typeof reaction));
    message.react(client.emojis.get("534753111034560512"))
    .then(reaction => console.log(typeof reaction));
      }
  
  
if (message.content === 'relow join') {
  message.author.send("_Welcome to the official RELOW discord server! Whether you're here to chat with the community/devs, receive updates or both._\n\n"

+ "__QUESTIONS?__\n"
+ "Use the <#484619958395863050> channel.\n\n"
                     
+ "**Follow the development also on Twitter and YouTube**\n"
+ "<https://twitter.com/brokenjoints_>\n"
+ "<https://www.youtube.com/channel/UCtJGCNnXi0KGdRtvN_QBITQ>\n\n"
                     
+ "**Have a nice day and invite to support the game!**\n"
+ "https://discord.gg/bCUvtnz");
}

});

client.login(process.env.BOT_TOKEN);
