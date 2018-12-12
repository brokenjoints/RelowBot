const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === 'relow help') {
    message.channel.send('These are my funcions:');
  }
  if (message.content === 'relow key') {
    message.channel.send('I will never give you a key');
  }

});

client.login(process.env.BOT_TOKEN);
