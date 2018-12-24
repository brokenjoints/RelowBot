const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
  client.user.setActivity("relow help");
});

client.on('guildMemberAdd', member => {
    member.user.send("**WELCOME ON BOARD!**\n\n"
                     + "I'm a friendly bot.\n\n"
                     + "__YOUR OPINION IS IMPORTANT__\n"
                     + "The Relow team decided to"
                     + "Write me **relow help**\n"
                     + "Your support"
                    + ""); 
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
                         + "__RELOW WORLD CUP__\n"
                         + "**relow cup**\n\n"
                         + "__RELOW WIKI__\n"
                         + "**relow weapons**\n"
                         + "**relow armors**\n"
                         + "**relow biomes**\n\n"
                         + "__RELOW LINKS__\n"
                         + "**steam**\n"
                         + "**discord**\n"
                         + "**twitter**\n"
                         + "**youtubr**\n"
                         + "**indieDB**\n"
                         + "**gamejolt**\n"
                         + "**instagram**");
  }
  if (message.content === 'relow key' || message.content === 'Relow key') {
    message.channel.send("**RELOW KEY**\n\n"
                         + "__HOW TO RECEIVE A KEY__\n\n"
                         + "**the closed alpha \n\n"
                         + "__HOW TO REDEEM A KEY__\n"
                         + "click the button in the bottom left corner **+ ADD GAME...**\n"
                         + "**activate a product on Steam**\n"
                         + "follow the prompts and paste the key code");
  }
  if (message.content === 'relow playtest' || message.content === 'Relow playtest') {
    message.channel.send("**RELOW PLAYTEST**\n\n");
  }
  if (message.content === 'relow tournament' || message.content === 'Relow tournament') {
    message.channel.send("**RELOW TOURNAMENT**\n\n");
  }
  if(message.content === 'relow info' || message.content === 'Relow info') {
    message.channel.send('work in progress');
  }
  if(message.content === 'relow signup' || message.content === 'Relow signup') {
    message.author.send('work in progress');
  }
if (message.content === 'relow join') {
  message.author.send("**WELCOME ON BOARD!**\n\n"
                     + "if you have any questions write me **relow help** or contact any Relow developer\n\n"
                    + "");
}

});

client.login(process.env.BOT_TOKEN);
