const Discord = require("discord.js");
const prefix = process.env.prefix

module.exports = (client, message) => {
   
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;
   
    const embed  = new Discord.RichEmbed()
.setTitle(`** أمثله على الأوامر : **`)
.setDescription(`
**${prefix}role @َ! ʚɞ SaAD لا يبالي [role name]**: لأعطاء رتبة لعضو معين
\`\`ملاحظه : الامر لاعطاء او ازالة رتبه\`\`
**${prefix}role all (+,-) [role name]** :  لاعطاء او ازالة رتبه للجميع
**${prefix}role humans (+,-) [role name]**: لاعطاء او ازالة رتبه للبشر
**${prefix}role bots (+,-) [role name]**: لاعطاء او ازالة رتبه للبوتات`)
.setFooter('Requested by '+message.author.username, message.author.avatarURL)
.setColor(`#e60909`)

    var command = message.content.toLowerCase().split(" ")[0]; 
    var args = message.content.toLowerCase().split(" ");
    var userM = message.guild.member(message.mentions.users.first() || message.guild.members.find(m => m.id === args[1]));
   
    if(command == prefix + 'role') {
        if(!message.member.hasPermission('MANAGE_ROLES')) return;
        if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES')) return;
        if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
 

 
        if(!args[1]) return message.channel.send(embed);
        if(!userM && args[1] !== 'humans' && args[1] !== 'bots' && args[1] !== 'all') return message.channel.send(embed);
 
        if(userM) {
            var argsRole = message.content.toLowerCase().split(' ').slice(2);
        }else if(args[1] === 'humans' || args[1] === 'bots' || args[1] === 'all') {
            var argsRole = message.content.toLowerCase().split(' ').slice(3); 
        }
 
        var getRole = message.mentions.roles.first() || message.guild.roles.find(r => r.id === argsRole) || message.guild.roles.find(r => r.name.toLowerCase().includes(argsRole));
 
        if(userM) {
            if(!getRole) return message.channel.send(':x:**  اسف ولكن لم احد الرتبه المطلوبه!**');
            if(getRole.name === '@everyone') return message.channel.send(':x:  **اسف ولكن لم احد الرتبه المطلوبه!**');
            if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`GIVE\`\` Or \`\`DELETE\`\` Any user have or not have **${getRole.name}** role beacuse this role highest from my role!`);
           
            if(!message.guild.member(userM.user).roles.has(getRole.id)) {
                message.guild.member(userM.user).addRole(getRole.id);
				let rolegive1 = new Discord.RichEmbed()
				.setDescription(`:white_check_mark: **Changed roles for<@${userM.user.id}> , +${getRole.name}**`)
				.setColor('#060505')
				.setFooter('Requested by '+message.author.username, message.author.avatarURL)
			message.channel.send(rolegive1);
            }else if(message.guild.member(userM.user).roles.has(getRole.id)) {
                message.guild.member(userM.user).removeRole(getRole.id);
				let roleremove2 = new Discord.RichEmbed()
				.setDescription(`:white_check_mark: **Changed roles for<@${userM.user.id}> , -${getRole.name}**`)
				.setColor('#060505')
				.setFooter('Requested by '+message.author.username, message.author.avatarURL)
                message.channel.send(roleremove2);
            }
        }else if(args[1] === 'humans') {
           
            if(!args[2]) return message.channel.send(embed);
            if(!args[3]) return message.channel.send(embed); 
            if(!getRole) return message.channel.send(':x:**  اسف ولكن لم احد الرتبه المطلوبه!**');
            if(getRole.name === '@everyone') return message.channel.send(':x:  **اسف ولكن لم احد الرتبه المطلوبه!**');
 
            if(args[2] === '+') {
                if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`GIVE\`\` Any User the role with name **${getRole.name}** beacuse the role highest then my role!`);
                if(message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size == 0) return message.channel.send(`:no_entry: | I can\'t find any user not have **${getRole.name}** role!`);
 
                let humansSure = new Discord.RichEmbed()
				.setTitle(`**هل انت متاكد من اعطاء كل البشر رتبة ${getRole.name}**`)
				.setDescription('**لديك دقيقه واحده للاختيار**')
                .setColor('#060505')
                .setFooter(message.author.tag, message.author.avatarURL) 
 
                message.channel.send(humansSure).then(msg => {
                    msg.react('✅').then(() => msg.react('❎')) 
 
                    let giveHim = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
                    let dontGiveHim = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
                    let give = msg.createReactionCollector(giveHim, { time: 60000 });
                    let dontGive = msg.createReactionCollector(dontGiveHim, { time: 60000 });
 
                    give.on('collect', r => {
                        msg.delete();
                        message.channel.send(`:timer:**جار الان اعطاء ${message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size} شخص رتبة ${getRole.name}**`).then(message1 => {
                            message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id) && !m.user.bot).forEach(m => {
                                message.guild.member(m).addRole(getRole.id);
                                setTimeout(() => {
                                    message1.edit(`:white_check_mark: **تم اعطاء كل البشر رتبة ${getRole.name}** .`);
                                }, 10000)
                            });
                        });
                    });
                    dontGive.on('collect', r => { 
                        msg.delete();
                        message.channel.send(':negative_squared_cross_mark:** تم الغاء الطلب**.').then(msg => msg.delete(5000));
                    });
                })
            }else if(args[2] === '-') {
                if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`REMOVE\`\` The role with name **${getRole.name}** From any User beacuse the role highest then my role!`);
                if(message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size == 0) return message.channel.send(`:no_entry: | I can\'t find any user have **${getRole.name}** role!`);
 
                let humansSure = new Discord.RichEmbed()
                .setTitle(`**هل انت متاكد من ازالة رتبة ${getRole.name} من البشر**`)
                .setColor('#060505')
                .setDescription('**لديك دقيقه واحده للاختيار**')
                .setTimestamp()
                .setFooter(message.author.tag, message.author.avatarURL)
 
                message.channel.send(humansSure).then(msg => {
                    msg.react('✅').then(() => msg.react('❎')) 
 
                    let removeRole = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
                    let dontRemoveRole = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
                    let remove = msg.createReactionCollector(removeRole, { time: 60000 });
                    let dontRemove = msg.createReactionCollector(dontRemoveRole, { time: 60000 });
 
                    remove.on('collect', r => {
                        msg.delete();
                        message.channel.send(`:timer:جار الان ازالة رتبة ${getRole.name} من ${message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size} شخص ...`).then(message1 => {
                            message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id) && !m.user.bot).forEach(m => {
                                message.guild.member(m).removeRole(getRole.id);
                                setTimeout(() => {
                                    message1.edit(`:white_check_mark: **تم ازالة من كل البشر رتبة ${getRole.name}**`);
                                }, 10000)
                            });
                        });
                    }); 
                    dontRemove.on('collect', r => {
                        msg.delete();
                        message.channel.send(':negative_squared_cross_mark:** تم الغاء الطلب**.').then(msg => msg.delete(5000));
                    });
                })
            } 
        }else if(args[1] === 'bots') {
           
            if(!args[2]) return message.channel.send(embed);
            if(!args[3]) return message.channel.send(embed);
            if(!getRole) return message.channel.send(':x:**  اسف ولكن لم احد الرتبه المطلوبه!**');
            if(getRole.name === '@everyone') return message.channel.send(':x:  **اسف ولكن لم احد الرتبه المطلوبه!**');
 
            if(args[2] === '+') {
                if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`GIVE\`\` Any Bot the role with name **${getRole.name}** beacuse the role highest then my role!`);
                if(message.guild.members.filter(b => !message.guild.member(b).roles.has(getRole.id) && b.user.bot).size == 0) return message.channel.send(`:no_entry: | I can\'t find any bot not have **${getRole.name}** role!`);
 
                let botsSure = new Discord.RichEmbed()
                .setTitle(`**هل انت متاكد من اعطاء كل البوتات رتبة ${getRole.name}**`)
                .setColor('#060505')
                .setDescription('**لديك دقيقه واحده للاختيار**')
                .setTimestamp()
                .setFooter(message.author.tag, message.author.avatarURL)
 
                message.channel.send(botsSure).then(msg => {
                    msg.react('✅').then(() => msg.react('❎')) 
 
                    let giveHim = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
                    let dontGiveHim = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
                    let give = msg.createReactionCollector(giveHim, { time: 60000 });
                    let dontGive = msg.createReactionCollector(dontGiveHim, { time: 60000 });
 
                    give.on('collect', r => {
                        msg.delete();
                        message.channel.send(`**جار الان اعطاء ${message.guild.members.filter(b => !message.guild.member(b).roles.has(getRole.id) && b.user.bot).size} بوت رتبة ${getRole.name}...**`).then(message1 => {
                            message.guild.members.filter(b => !message.guild.member(b).roles.has(getRole.id) && b.user.bot).forEach(b => {
                                message.guild.member(b).addRole(getRole.id);
                                setTimeout(() => {
                                    message1.edit(`:white_check_mark: **تم اعطاء كل البوتات رتبة ${getRole.name}** .`);
                                }, 10000)
                            });
                        });
                    });
                    dontGive.on('collect', r => {
                        msg.delete();
                        message.channel.send(':negative_squared_cross_mark:** تم الغاء الطلب**.').then(msg => msg.delete(5000));
                    });
                })
            }else if(args[2] === '-') {
                if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`REMOVE\`\` The role with name **${getRole.name}** From any Bot beacuse the role highest then my role!`);
                if(message.guild.members.filter(b => message.guild.member(b).roles.has(getRole.id) && b.user.bot).size == 0) return message.channel.send(`:no_entry: | I can\'t find any bot have **${getRole.name}** role!`);
 
                let botsSure = new Discord.RichEmbed()
                .setTitle(`هل انت متاكد من ازالة رتبة ${getRole.name} من كل البوتات`)
                .setColor('#060505')
                .setDescription('**لديك دقيقه واحده للاختيار**')
                .setTimestamp()
                .setFooter(message.author.tag, message.author.avatarURL)
 
                message.channel.send(botsSure).then(msg => {
                    msg.react('✅').then(() => msg.react('❎'))
 
                    let removeRole = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
                    let dontRemoveRole = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
                    let remove = msg.createReactionCollector(removeRole, { time: 60000 });
                    let dontRemove = msg.createReactionCollector(dontRemoveRole, { time: 60000 });
 
                    remove.on('collect', r => {
                        msg.delete();
                        message.channel.send(`**جار الان ازالة رتبة ${getRole.name} من ${message.guild.members.filter(b => message.guild.member(b).roles.has(getRole.id) && b.user.bot).size} بوت**...`).then(message1 => {
                            message.guild.members.filter(b => message.guild.member(b).roles.has(getRole.id) && b.user.bot).forEach(b => {
                                message.guild.member(b).removeRole(getRole.id);
                                setTimeout(() => {
                                    message1.edit(`:white_check_mark:** تم ازالة رتبة ${getRole.name} من كل البوتات **.`);
                                }, 10000)
                            });
                        });
                    });
                    dontRemove.on('collect', r => { 
                        msg.delete();
                        message.channel.send(':negative_squared_cross_mark:** تم الغاء الطلب**.').then(msg => msg.delete(5000));
                    });
                })
            }
        }else if(args[1] === 'all') { 
           
            if(!args[2]) return message.channel.send(embed);
            if(!args[3]) return message.channel.send(embed);
            if(!getRole) return message.channel.send(':x:**  اسف ولكن لم احد الرتبه المطلوبه!**');
            if(getRole.name === '@everyone') return message.channel.send(':x:  **اسف ولكن لم احد الرتبه المطلوبه!**');
 
            if(args[2] === '+') {
                if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`GIVE\`\` Any User the role with name **${getRole.name}** beacuse the role highest then my role!`); // حقوق الفا كوودز Alpha Codes.
                if(message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id)).size == 0) return message.channel.send(`:no_entry: | I can\'t find any user not have **${getRole.name}** role!`);
 
                let allSure = new Discord.RichEmbed()
                .setTitle(`** هل انت متاكد من اعطاء الكل رتبة ${getRole.name}**`)
                .setColor('#060505')
                .setDescription('**لديك دقيقه واحده للاختيار**')
                .setTimestamp()
                .setFooter(message.author.tag, message.author.avatarURL)
 
                message.channel.send(allSure).then(msg => {
                    msg.react('✅').then(() => msg.react('❎'))
 
                    let giveAll = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
                    let dontGiveAll = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
                    let give = msg.createReactionCollector(giveAll, { time: 60000 });
                    let dontGive = msg.createReactionCollector(dontGiveAll, { time: 60000 });
 
                    give.on('collect', r => {
                        msg.delete();
                        message.channel.send(`**جار الان اعطاء الكل رتبة ${getRole.name}** ...`).then(message1 => {
                            message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id)).forEach(m => {
                                message.guild.member(m).addRole(getRole.id);
                                setTimeout(() => {
                                    message1.edit(`:white_check_mark: ** تم اعطاء الكل رتبة ${getRole.name}** .`);
                                }, 10000) 
                            });
                        });
                    });
                    dontGive.on('collect', r => {
                        msg.delete();
                        message.channel.send(':negative_squared_cross_mark:** تم الغاء الطلب**.').then(msg => msg.delete(5000));
                    });
                })
            }else if(args[2] === '-') {
                if(getRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I can\'t \`\`REMOVE\`\` The role with name **${getRole.name}** From any User beacuse the role highest then my role!`);
                if(message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id)).size == 0) return message.channel.send(`:no_entry: | I can\'t find any user have **${getRole.name}** role!`);
 
                let allSure = new Discord.RichEmbed() 
                .setTitle(`**هل انت متاكد ازالة رتبة ${getRole.name} من الكل**`)
                .setColor('#060505')
                .setDescription('**لديك دقيقه واحده للاختيار**')
                .setTimestamp()
                .setFooter(message.author.tag, message.author.avatarURL)
 
                message.channel.send(allSure).then(msg => {
                    msg.react('✅').then(() => msg.react('❎'))
 
                    let removeRole = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
                    let dontRemoveRole = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id; 
                    let remove = msg.createReactionCollector(removeRole, { time: 60000 });
                    let dontRemove = msg.createReactionCollector(dontRemoveRole, { time: 60000 });
 
                    remove.on('collect', r => {
                        msg.delete();
                        message.channel.send(`**جار الان ازالة رتبة ${getRole.name} من الكل** ...`).then(message1 => {
                            message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id)).forEach(m => {
                                message.guild.member(m).removeRole(getRole.id);
                                setTimeout(() => {
                                    message1.edit(`:white_check_mark: **تم ازالة رتبة ${getRole.name} من الكل **.`);
                                }, 10000)
                            });
                        });
                    });
                    dontRemove.on('collect', r => { 
                        msg.delete();
                        message.channel.send(':negative_squared_cross_mark:** تم الغاء الطلب**.').then(msg => msg.delete(5000));
                    }); 
                })
            } 
        }
   }else if(command == prefix + 'roles') {
        var roles = '',
        ros=message.guild.roles.size,
        role = [];
        for(let i =0;i<ros;i++){
            if(message.guild.roles.array()[i].id !== message.guild.id){
  role.push(message.guild.roles.filter(r => r.position == ros-i).map(r => `${i}- ${r.name}`));  
        }}
        message.channel.send(role.join("\n"));
    }
};
