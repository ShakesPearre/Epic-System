const Discord = require("discord.js");
const prefix = process.env.prefix

module.exports = (client, message) => {
if(!message.channel.guild) return;
if (!message.content.startsWith(prefix)) return;
	var command = message.content.split(" ")[0];
	 command = command.slice(prefix.length);
	if (command == "move") {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("**:x:  لم يتم العثور على العضو المطلوب **")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannelname = message.member.voiceChannel.name;
 var authorchannel = message.member.voiceChannelID;
 var userid = message.mentions.members.first().id;
 var log = message.guild.channels.find('name', 'log');
 var movelog = new Discord.RichEmbed()
 .setAuthor(message.guild.name, message.guild.iconURL)
 .setColor("#000000")
 .setDescription(`**<@${userid}> moved to \`\`${authorchannelname}\`\` by : <@${message.author.id}>**`)
 .setFooter(message.author.tag, message.author.avatarURL) 
 .setTimestamp();
 message.guild.members.get(userid).setVoiceChannel(authorchannel).then(m => message.channel.send(`:white_check_mark: **<@${userid}> moved to \`\`${authorchannelname}\`\`**`))
 message.guild.members.get(userid).setVoiceChannel(authorchannel).then(m => log.send({embed : movelog}))
	 
} else {
message.channel.send("**:x:  العضو يجب أن يكون متواجد بروم صوتي **")
}
} else {
 message.channel.send("**:x:  You must be in voice channel!**")
}
} else {
message.react("❌")
 }}}
