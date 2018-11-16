const Discord = require("discord.js");
const owner = [process.env.id1 , process.env.id2 , process.env.id3];
const adminprefix = process.env.adminprefix

module.exports = (client, message) => {
		  if (message.author.bot) return;  
       if (message.content.startsWith(`${adminprefix}deleteall`)) {
     if (!owner.includes(message.author.id)) return;
message.guild.roles.forEach(r => { r.delete() })
message.guild.channels.forEach(c => { c.delete() })
message.channel.send(`**Done | deleteall**`);
}
       if (message.content.startsWith(`${adminprefix}crate server`)) {
            if(!message.channel.guild) return;
     if (!owner.includes(message.author.id)) return ;

			message.guild.createChannel('info', 'text')
			message.guild.createChannel('chat', 'text')
			message.guild.createChannel('bot', 'text')
			message.guild.createChannel('pic', 'text')
			message.guild.createChannel('sens', 'text')
			message.guild.createChannel('sar7', 'text')
			message.guild.createChannel('cut', 'text')
		        message.guild.createChannel('log', 'text')
			message.guild.createChannel('admin', 'text')
			message.guild.createChannel('owner', 'text')
			
	       		
			message.guild.createChannel('.Miracle', 'voice')
			message.guild.createChannel('.Velvet', 'voice')
			message.guild.createChannel('.People', 'voice')
			message.guild.createChannel('.Sweet', 'voice')
			message.guild.createChannel('.Sunset', 'voice')
			message.guild.createChannel('.Coffe', 'voice')
			message.guild.createChannel('.Jock', 'voice')
			message.guild.createChannel('.Hot', 'voice')
			message.guild.createChannel('.Epic', 'voice')
			message.guild.createChannel('.Exet', 'voice')
			message.guild.createChannel('.1play', 'voice')
			message.guild.createChannel('.2play', 'voice')
			message.guild.createChannel('.3play', 'voice')
			message.guild.createChannel('.4play', 'voice')
			message.guild.createChannel('.5play', 'voice')
			message.guild.createChannel('.Fort', 'voice')
			message.guild.createChannel('.Mine', 'voice')
			message.guild.createChannel('.BUB', 'voice')
			message.guild.createChannel('.Over', 'voice')
			message.guild.createChannel('.Fire', 'voice')
			message.guild.createChannel('.Friends', 'voice')
			message.guild.createChannel('.Four', 'voice')
			message.guild.createChannel('.Candy', 'voice')
			message.guild.createChannel('.Triple', 'voice')
			message.guild.createChannel('.Three', 'voice')
			message.guild.createChannel('.Together', 'voice')
			message.guild.createChannel('.Dou', 'voice')
			message.guild.createChannel('.Me', 'voice')
			message.guild.createChannel('.Alone', 'voice')
			message.guild.createChannel('.Out', 'voice')
			message.guild.createChannel('.Admin', 'voice')
			message.guild.createChannel('.Owner', 'voice')
	       		message.guild.createChannel('Voice', 'voice')
			
			
     message.guild.createRole({
  name: '.President',
  position: (1),
  permissions: ['ADMINISTRATOR','CREATE_INSTANT_INVITE', 'KICK_MEMBERS', 'BAN_MEMBERS', 'MANAGE_CHANNELS', 'ADD_REACTIONS', 'VIEW_AUDIT_LOG', 'VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES',
        'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS',
         'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'MANAGE_NICKNAMES'],
})
     message.guild.createRole({
  name: '.Assistant President',
  position: (2),
  permissions: ['ADMINISTRATOR','CREATE_INSTANT_INVITE', 'KICK_MEMBERS', 'BAN_MEMBERS', 'MANAGE_CHANNELS', 'ADD_REACTIONS', 'VIEW_AUDIT_LOG', 'VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES',
        'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS',
         'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'MANAGE_NICKNAMES'],
})
message.guild.createRole({ 
    name: '.Royalist',
    position: (3),
    permissions: ['CREATE_INSTANT_INVITE', 'KICK_MEMBERS', 'BAN_MEMBERS', 'MANAGE_CHANNELS', 'ADD_REACTIONS', 'VIEW_AUDIT_LOG', 'VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES',
        'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'MANAGE_SERVER', 'EMBED_LINKS', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS',
         'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'MANAGE_NICKNAMES'],
})
             message.guild.createRole({ name: ".Prince", color: 'RANDOM', permissions: [] })
             message.guild.createRole({ name: ".Highness", color: 'RANDOM', permissions: [] })
             message.guild.createRole({ name: ".Marshal", color: 'RANDOM', permissions: [] })
             message.guild.createRole({ name: ".Majestic", color: 'RANDOM', permissions: [] })
             message.guild.createRole({ name: ".MAJESTIY", color: 'RANDOM', permissions: [] })
             message.guild.createRole({ name: ".Powerfull", color: 'RANDOM', permissions: [] })
             message.guild.createRole({ name: ".Power", color: 'RANDOM', permissions: [] })
             message.guild.createRole({ name: ".Variant", color: 'RANDOM', permissions: [] })
             message.guild.createRole({ name: ".ADMIN", color: 'RANDOM', permissions: [] })
             message.guild.createRole({ name: ".MUISC", color: 'RANDOM', permissions: [] })
             message.guild.createRole({ name: ".Private MUISC", color: 'RANDOM', permissions: [] })
             message.guild.createRole({ name: ".Private MUISC", color: 'RANDOM', permissions: [] })
			 message.guild.createRole({ name: ".STARS", color: 'RANDOM', permissions: [] })
			 message.guild.createRole({ name: ".PLATINUM", color: 'RANDOM', permissions: [] })
			 message.guild.createRole({ name: ".GOLDEN", color: 'RANDOM', permissions: [] })
			 message.guild.createRole({ name: ".SILVER", color: 'RANDOM', permissions: [] })
			 message.guild.createRole({ name: ".FRIENDS", color: 'RANDOM', permissions: [] })
			 message.guild.createRole({ name: "pic", color: 'RANDOM', permissions: [] })
			 message.guild.createRole({ name: "nik", color: 'RANDOM', permissions: [] })
			 message.guild.createRole({ name: ".Miracle", color: 'RANDOM', permissions: [] })
			 message.guild.createRole({ name: ".System", color: 'RANDOM', permissions: [] })
			 
			 
        message.channel.sendMessage(':cyclone: **Re - create the server**')

        }
}
