const Discord = require("discord.js");
const prefix = process.env.prefix

module.exports = (client, message) => {
    const command = message.content.split(" ")[0];
      let messageArray = message.content.split (" ");
      let cmd = messageArray[0];
      let args = messageArray.slice(1);

    if(command == prefix + "vkick"){

        if (!message.guild.member(message.author).hasPermission('MANAGE_CHANNELS') || !message.guild.member(message.author).hasPermission('ADMINISTRATOR')) {
            return;
        }
		
	let vkuser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
	if(vkuser.hasPermission("MANAGE_CHANNELS")) return message.channel.send("**لا يمكنك طرد احد صوتيا من الاداره**")
        var member = message.guild.members.get(message.mentions.users.array()[0].id);
        if(!message.mentions.users){
		message.channel.send(":information_source: ** `!vkick @َζ͜͡ELMEWAL3` يجب تحديد شخص **")
		return;
        }

        if(!member.voiceChannel){
    		message.channel.send("**i can't include voice channel for member!**")
    		return;
        }
              message.guild.createChannel('voicekick', 'voice').then(c => {
                member.setVoiceChannel(c).then(() => {
                    c.delete(305).catch(console.log)

      });
     });
    }
}
