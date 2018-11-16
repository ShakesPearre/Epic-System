const Discord = require('discord.js');
const prefix = process.env.prefix

module.exports = (client, message) => {
if(!message.channel.guild) return;
if (!message.content.startsWith(prefix)) return;
	let command = message.content.split(" ")[0];
	 command = command.slice(prefix.length);
	if (command == "bc") {
		 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
		var args = message.content.split(' ').slice(1).join(' ');
		if(message.author.bot) return;
		if(!args) return message.channel.send(":information_source:** `!bc [message]` قم بكتابة الرسلبه **");
		
		message.channel.send(`:white_check_mark: اذا كنت متاكد من ارسال الرساله اختر`).then(msg => {
			msg.react('✅').then(() => msg.react('❎'));
			message.delete();
			
			
			let yesEmoji = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
			let noEmoji = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
			
			let sendBC = msg.createReactionCollector(yesEmoji);
			let dontSendBC = msg.createReactionCollector(noEmoji);
			
			sendBC.on('collect', r => {
				message.guild.members.filter(member => member.presence.status !== 'offline').forEach(member => {
					member.send(args.replace(`[user]`, member)).catch();
					if(message.attachments.first()){
						member.sendFile(message.attachments.first().url).catch();
					}
				})
				message.channel.send(`:timer: **يتم الان الارسال الى** \`\`${message.guild.members.filter(member => member.presence.status !== 'offline').size}\`\` **عضو**`);
				msg.delete();
			})
			dontSendBC.on('collect', r => {
				msg.delete();
				message.channel.send(':white_check_mark: **تم الغاء ارسال رسالتك بنجاح**').then(msg => msg.delete(5000));
			});
		})
	}
};
