const Discord = require('discord.js');
const id = [process.env.id1, process.env.id2 , process.env.id3];
const adminprefix = process.env.adminprefix

module.exports = (client, msg) => {
  if(msg.content === adminprefix + 'hideall') {
	  if (!id.includes(msg.author.id)) return ;
    msg.guild.channels.forEach(c => {
      c.overwritePermissions(msg.guild.id, {
        SEND_MESSAGES: false,
        READ_MESSAGES: false
      })
    })
    msg.channel.send('Hide All.')
  }
    if(msg.content === adminprefix + 'showall') {
	  if (!id.includes(msg.author.id)) return ;
    msg.guild.channels.forEach(c => {
      c.overwritePermissions(msg.guild.id, {
        SEND_MESSAGES: true,
        READ_MESSAGES: true
      })
    })
    msg.channel.send('Show All.')
  }}
