const Discord = require("discord.js");
const prefix = process.env.prefix

module.exports = (client, message) => {
if (message.author.bot) return;
    if (message.content === prefix + "move all") {
 if (!message.member.hasPermission("ADMINISTRATOR")) return;
   if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.channel.send("**لايوجد لدي صلاحية السحب**");
if (message.member.voiceChannel == null) return message.channel.send(`**الرجاء الدخول لروم صوتي**`)
 var author = message.member.voiceChannelID;
 var m = message.guild.members.filter(m=>m.voiceChannel)
 message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
 m.setVoiceChannel(author)
 })
 message.channel.send(`**تم سحب جميع الأعضاء إليك**`)

 }}
