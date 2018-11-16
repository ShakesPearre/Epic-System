const Discord = require('discord.js');
const { Client } = require('discord.js');
const client = new Client();
const prefix = process.env.prefix
const adminprefix = process.env.adminprefix
const dev = [process.env.id1];
const owner = [process.env.id1 , process.env.id2 , process.env.id3];
const id = [process.env.id1, process.env.id2 , process.env.id3 , process.env.id4 , process.env.id5 , process.env.id6 , process.env.id7];
///////////////elmewal3/////////////////a7med////////////////anase
const ms = require("ms");
const fs = require('fs');
let data = JSON.parse(fs.readFileSync("./data.json", "utf8"));
//warnpac
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
//creditspac
let credits = JSON.parse(fs.readFileSync("./creditsCode.json", "utf8"));
//idpac

//credirpac
const games = JSON.parse(fs.readFileSync("./games.json", "utf8"));
//shortpac
const googl = require('goo.gl');
//restartpac
const child_process = require("child_process");
//console
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
  console.log('Yo this ready!')
});
client.on('warn', console.warn);
client.on('error', console.error);
client.on('reconnecting', () => console.log('I am reconnecting now!'));
//restart-leve server
      client.on('message',async message => {
        var argresult = message.content.split(` `).slice(1).join(' ');
          if (!dev.includes(message.author.id)) return;
          
        if (message.content === (prefix + "levebot")) {
        message.guild.leave();        
      } else     
    if(message.content === (prefix + "restart")) {
      if (!dev.includes(message.author.id)) return;
      message.channel.send('**:arrows_counterclockwise: Bot Restarting.**').then(msg => {
        setTimeout(() => {
        msg.edit('**:arrows_counterclockwise: | Bot Restarting..**');
        },500);  
        setTimeout(() => {
           msg.edit('**:arrows_counterclockwise: | Bot Restarting...**');
        },1000);
        setTimeout(() => {
           msg.edit('**:arrows_counterclockwise: | Bot Restarting....**');
        },2000);
      });
      console.log(`${message.author.tag} [ ${message.author.id} ] has restarted the bot.`);
      console.log(`Restarting..`);
      setTimeout(() => {
        client.destroy();
        client.login(process.env.BOT_TOKEN);
      },3000);
    }
      
      });
client.on('guildCreate', gc =>{
    if(gc.id !== '465553720474599434'){
        gc.leave()
    }
})
//الحمايه
        client.on('message', async message => {
            if(message.content.includes('discord.gg')){
                if(message.member.hasPermission("MANAGE_GUILD")) return;
        if(!message.channel.guild) return;
        message.delete()
          var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
           if(!message.channel.guild) return message.channel.send('** This command only for servers**');
     message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
      .setTitle("Muted ")
            .addField(`**  You Have Been Muted **` , `**Reason : Sharing Another Discord Link**`)
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter(`${message.guild.name} `)
     message.channel.send(embed500)
     message.author.send('`** \`\`انت معاقب ميوت شاتي بسبب نشر سرفرات, ان كان عن طريق الخطا ف تكلم مع \`\`الادارة **`');
   
       
    }
})
client.on('guildMemberRemove', (u) => {
    u.guild.fetchAuditLogs().then( s => {
        var ss = s.entries.first();
        if (ss.action == `MEMBER_KICK`) {
        if (!data[ss.executor.id]) {
            data[ss.executor.id] = {
            time : 1
          };
      } else {
          data[ss.executor.id].time+=1
      };
data[ss.executor.id].time = 0
u.guild.members.get(ss.executor.id).roles.forEach(r => {
                r.edit({
                    permissions : []
                });
                data[ss.executor.id].time = 0
            });
        setTimeout(function(){
            if (data[ss.executor.id].time <= 3) {
                data[ss.executor.id].time = 0
            }
        },60000)
    };
    });
    fs.writeFile("./data.json", JSON.stringify(data) ,(err) =>{
        if (err) console.log(err.message);
    });
});
client.on('roleDelete', (u) => {
    u.guild.fetchAuditLogs().then( s => {
        var ss = s.entries.first();
        if (ss.action == `ROLE_DELETE`) {
        if (!data[ss.executor.id]) {
            data[ss.executor.id] = {
            time : 1
          };
      } else {
          data[ss.executor.id].time+=1
      };
data[ss.executor.id].time = 0
u.guild.members.get(ss.executor.id).roles.forEach(r => {
                r.edit({
                    permissions : []
                });
                data[ss.executor.id].time = 0
            });
        setTimeout(function(){
            if (data[ss.executor.id].time <= 3) {
                data[ss.executor.id].time = 0
            }
        },60000)
    };
    });
    fs.writeFile("./data.json", JSON.stringify(data) ,(err) =>{
        if (err) console.log(err.message);
    });
});
client.on('channelDelete', (u) => {
    u.guild.fetchAuditLogs().then( s => {
        var ss = s.entries.first();
        if (ss.action == `CHANNEL_DELETE`) {
        if (!data[ss.executor.id]) {
            data[ss.executor.id] = {
            time : 1
          };
      } else {
          data[ss.executor.id].time+=1
      };
data[ss.executor.id].time = 0
u.guild.members.get(ss.executor.id).roles.forEach(r => {
                r.edit({
                    permissions : []
                });
                data[ss.executor.id].time = 0
            });
        setTimeout(function(){
            if (data[ss.executor.id].time <= 3) {
                data[ss.executor.id].time = 0
            }
        },60000)
    };
    });
    fs.writeFile("./data.json", JSON.stringify(data) ,(err) =>{
        if (err) console.log(err.message);
    });
})
//voise online
client.on('voiceStateUpdate', (old, now) => {
  const channel = client.channels.get('471810322601345024');
  const currentSize = channel.guild.members.filter(m => m.voiceChannel).size;
  const size = channel.name.match(/\[\s(\d+)\s\]/);
  if (!size) return channel.setName(`.Epic Online: [${currentSize}]`);
  if (currentSize !== size) channel.setName(`Voice Online: [${currentSize}]`);
});
//welcome-member-join
client.on('guildMemberAdd', member => {
	
     const welcomer =  member.guild.channels.find('name', 'chat');
    if(!welcomer) return;
      if(welcomer) {
         moment.locale('ar-ly');
         var m = member.user;
        let yumz = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(m.avatarURL)
        .setAuthor(m.username,m.avatarURL)
        .addField(': تاريخ دخولك الدسكورد',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)            
      
         .setFooter(`${m.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
     welcomer.send({embed:yumz});          
         
    
const w = ['./welc1.png'];

         let Image = Canvas.Image,
            canvas = new Canvas(400, 200),
            ctx = canvas.getContext('2d');
        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 400, 200);
             
          

                let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(100) + ".png" : member.user.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
                        
                        ctx.font = "bold 12px Arial";
                        ctx.fontSize = '20px';
                        ctx.fillStyle = "#f1f1f1";
                        ctx.textAlign = "center";
                        
                        ctx.font = "bold 12px Arial";
                        ctx.fontSize = '20px';
                        ctx.fillStyle = "#f1f1f1";
                        ctx.textAlign = "center";
                        ctx.fillText(member.user.username, 200, 150);
 
                let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                              ctx.arc(77, 101, 62, 0, Math.PI*2);
                              ctx.stroke();
                                 ctx.clip();
                                 ctx.drawImage(ava, 13, 38, 128, 126);  
                          
                
                             
welcomer.sendFile(canvas.toBuffer())

                    }  )  
      
})
      });                    
 }
});
var dat = JSON.parse("{}");
function forEachObject(obj, func) {
    Object.keys(obj).forEach(function (key) { func(key, obj[key]) });
}
client.on("ready", () => {
    var guild;
    while (!guild)
        guild = client.guilds.get("471700216278548480");
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            dat[Inv] = Invite.uses;
        });
    });
});
client.on("guildMemberAdd", (member) => {
    let channel = member.guild.channels.get("465553720474599434");
    if (!channel) {
        console.log("!the channel id it's not correct");
        return;
    }
    if (member.id == client.user.id) {
        return;
    }
    console.log('-');
    var guild;
    while (!guild)
        guild = client.guilds.get("465553720474599434");
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            if (dat[Inv])
                if (dat[Inv] < Invite.uses) {
                    setTimeout(function() {
 channel.send(`**by**: ${Invite.inviter}`) ;
                    },1500);
 }
            dat[Inv] = Invite.uses;
       
       });
    });
});
//role-retern
var KinG66S = {};
client.on('guildMemberRemove', member => {
KinG66S[member.id] = {roles: member.roles.array()};
});
client.on('guildMemberAdd', member => {
if(!KinG66S[member.user.id]) return;
console.log(KinG66S[member.user.id].roles.length);
for(let i = 0; i < KinG66S[member.user.id].roles.length + 1; i++) {
member.addRole(KinG66S[member.user.id].roles.shift());
}
});
//pic-room
client.on('message', ( message ) => {
  if(message.author.bot) return;

  if(message.channel.id !== '461468385402945536') return;


  let types = [
    'jpg',
    'jpeg',
    'gif',
    'png'
  ]
if(!message.member.hasPermission('MANAGE_SERVER')) return;
  if (message.attachments.size <= 0) {
    message.delete();
    message.channel.send(`${message.author}, **هذا الروم مخصص للصور فقط **`)
    .then(msg => {
      setTimeout(() => {
        msg.delete();
      }, 5000)
  })
  return;
}

  if(message.attachments.size >= 1) {
    let filename = message.attachments.first().filename
    console.log(filename);
    if(!types.some( type => filename.endsWith(type) )) {
      message.delete();
      message.channel.send(`${message.author}, This channel for Pic 🖼️ Only`)
      .then(msg => {
        setTimeout(() => {
          msg.delete();
        }, 5000)
      })
    }
  }

});
client.on("message", (message) => {
            if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        let yumz = new Discord.RichEmbed()
                    .setTimestamp()
                    .setTitle("Direct Message To The Bot")
                    .addField(`Sent By:`, `<@${message.author.id}>`)
                    .setThumbnail(message.author.displayAvatarURL)
                    .addField(`Message: `, `\n\n\`\`\`${message.content}\`\`\``)
                    .setFooter(`.Miracle Messages`)
                client.users.get("465553720474599434").send(yumz)
            }
});
//help
client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help") {

 message.author.sendMessage(`
**General commands | الأوامر العامة.**
 **❖ \`\`${prefix}colors\`\` ➾** لعرض قائمة الألوان
 **❖ \`\`${prefix}color\`\` ➾** لتغيير لونك في السيرفر
 **❖ \`\`${prefix}ping\`\` ➾** لعرض سرعة الاتصال
 **❖ \`\`${prefix}user\`\` ➾** لاظهار بعض المعلومات عن حسابك
 **❖ \`\`${prefix}time\`\` ➾** لأستخدام المنبه
 **❖ \`\`${prefix}avatar\`\` ➾ ** لرؤية الصورة الشخصية
 **❖ \`\`${prefix}invites\`\` ➾** لمعرفة عدد الاعضاء الي جبتهم 
 **❖ \`\`${prefix}roll\`\` ➾ ** القرعه
 **❖ \`\`${prefix}short\`\` ➾ ** لأختصار الروابط
`).catch(RebeL =>{console.log('`Error`: ' + RebeL);
message.channel.send("** يجب السماح بأستقبال رسائل الخاص قبل طلب الأمر **")
});

    }
});
client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help") {
	     if(!message.channel.guild) return; 
		   if(!message.member.hasPermission('MANAGE_MESSAGES')) return; 
	     
 message.author.sendMessage(`
 
**Administration commands | أوامر الأدارة.**
 **❖ \`\`${prefix}ban\`\` ➾** لحظر عضو من السيرفر
 **❖ \`\`${prefix}kick\`\` ➾** لطرد عضو من السيرفر
 **❖ \`\`${prefix}vkick\`\` ➾** لطرد العضو من الروم
 **❖ \`\`${prefix}clear\`\` ➾** لمسح الشات
 **❖ \`\`${prefix}mute\`\` ➾** لأعطاء العضو ميوت كتابي
 **❖ \`\`${prefix}unmute\`\` ➾** لفك الميوت عن العضو
 **❖ \`\`${prefix}mutechat\`\` ➾** لأقفال الشات
 **❖ \`\`${prefix}unmutechat\`\` ➾** لفتح الشات
 **❖ \`\`${prefix}hidechat\`\` ➾ ** لاخفاء الشات
 **❖ \`\`${prefix}showchat\`\` ➾** لاظهار الشات
 **❖ \`\`${prefix}bc\`\` ➾** لارسال رساله للاون لاين
 **❖ \`\`${prefix}obc\`\` ➾** لارسال رساله للاونلاين و للاوفلين
 **❖ \`\`${prefix}bcrole\`\` ➾** لارسال رساله لرتبه معينه
 **❖ \`\`${prefix}members\`\` ➾ ** لعرض معلومان الاعضاء
 **❖ \`\`${prefix}server\`\`  ➾ ** لعرض معلومات السيرفر
 **❖ \`\`${prefix}move\`\` ➾** لسحب الاشخاص 
 **❖ \`\`${prefix}move all\`\`  ➾** لسحب كل الناس لروم الموجود انت فيه
 **❖ \`\`${prefix}role\`\`  ➾ ** اوامر الرتب
**Other | اخرى**
 **❖ \`\`${prefix}members\`\`  ➾ ** لرؤية عدد اعضاء السيرفر
 **❖ \`\`${prefix}uptime\`\`  ➾ ** مدة تشغيل البوت
 **❖ \`\`${prefix}temp on\`\`  ➾ ** لتفعيل خاصية الرومات المؤقته
 **❖ \`\`${prefix}temp off\`\`  ➾ ** لتعطيل خاصية الرومات المؤقته
 **❖ \`\`${prefix}temptime\`\`  ➾ ** لتحديد وقت الروم المؤقت
`);

    }
});
client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help") {
	     if(!message.channel.guild) return; 
      if (!id.includes(message.author.id)) return;
	     
 message.author.sendMessage(`
 
**Privet Commands | الاوامر الخاصه.**
 **❖ \`\`${adminprefix}hideall\`\` ➾ **اخفا جميع رومات السيرفر
 **❖ \`\`${adminprefix}showall\`\` ➾ **اظهار جميع رومات السيرفر
 **❖ \`\`${prefix}setplaying\`\` ➾ **لتغير الحاله لplaying
 **❖ \`\`${prefix}setwatching\`\`  ➾** لتغير الحاله لWATCHING
 **❖ \`\`${prefix}setliste\`\`  ➾ **لتغير الحاله ل LISTENING
 **❖ \`\`${prefix}setstrem\`\`  ➾ **لتغير الحاله لSTREMING
 **❖ \`\`${prefix}setstatus\`\` \`\`ONLINE\`\`, \`\`IDLE\`\`, \`\`DND\`\`, \`\`INVISIBLE\`\`  ➾ ** لتغير حالات البوت الاربعه
 
`);

    }
});
client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help") {
	     if(!message.channel.guild) return; 
      if (!dev.includes(message.author.id)) return;
	     
 message.author.sendMessage(`
 
**Other | اخرى**
   
 **\`\`${prefix}setvoice\`\` ** - اذا اتمسح روم الفويز اونلاين تقدر تنشا واحد اخر
 ** \`\`${prefix}warn\`\` ** اذا اخطا احد الادارين او الممبر تقدر تسويله ورن بحين انه له اربع ورنات الرابع **باند**
 **\`\`${prefix}set server avatar\`\`** - لتغير صورة السيرفر
 **\`\`${prefix}set server name\`\`** - لتغير اسم السيرفر
 **\`\`${prefix}say\`\`** - اذا ارتدت ان يقول البوت الكلام الي تكتبه من غير ما يبان انك الي كاتبه
 **\`\`${prefix}emb\`\`** - نفس امر ساي ولكن بامبد
 **\`\`${prefix}sendpic <or> sendpice\`\`** - لارسال صوره بامبد وبدون
 **\`\`${adminprefix}deleteall\`\`** - لمسح كل شي
 **\`\`${adminprefix}crate server\`\`** - لانشاء سيرفر
`);

    }
});
//color-select
client.on('message', message => {
    let args = message.content.split(' ').slice(1);
if(message.content.split(' ')[0] == `${prefix}color`){
if (message.channel.id !== "467766985653223434") return;
     const embedd = new Discord.RichEmbed()
.setFooter('Requested by '+message.author.username, message.author.avatarURL)
.setDescription(`**There's No Color With This Number ** ❌ `)
.setColor(`ff0000`)

if(!isNaN(args) && args.length > 0)


 var a = message.guild.roles.find("name",`${args}`)
          if(!a)return;
          if (a.name > 250 || a.name < 1) return;
const embed = new Discord.RichEmbed()
.setFooter('Requested by '+message.author.username, message.author.avatarURL)
.setDescription(` ✅** | Color Changed Successfully**`)
.setColor(`${a.hexColor}`)
message.channel.sendEmbed(embed);
    if (!args)return;
setInterval(function(){})
            let count = 0;
            let ecount = 0;
  for(let x = 1; x < 201; x++){
     
      message.member.removeRole(message.guild.roles.find("name",`${x}`))
    
      }
          message.member.addRole(message.guild.roles.find("name",`${args}`));
  
      
}
});
client.on('message', message => {
    let args = message.content.split(' ').slice(1);
if(message.content.split(' ')[0] == `لون`){
if (message.channel.id !== "467766985653223434") return;
     const embedd = new Discord.RichEmbed()
.setFooter('Requested by '+message.author.username, message.author.avatarURL)
.setDescription(`**There's No Color With This Number ** ❌ `)
.setColor(`ff0000`)

if(!isNaN(args) && args.length > 0)


 var a = message.guild.roles.find("name",`${args}`)
          if(!a)return;
          if (a.name > 250 || a.name < 1) return;
const embed = new Discord.RichEmbed()
.setFooter('Requested by '+message.author.username, message.author.avatarURL)
.setDescription(` ✅** | Color Changed Successfully**`)
.setColor(`${a.hexColor}`)
message.channel.sendEmbed(embed);
    if (!args)return;
setInterval(function(){})
            let count = 0;
            let ecount = 0;
  for(let x = 1; x < 201; x++){
     
      message.member.removeRole(message.guild.roles.find("name",`${x}`))
    
      }
          message.member.addRole(message.guild.roles.find("name",`${args}`));
  
      
}
});
const swearWords = ["خول", "علي زبي", "كس امكم", "يلعن شكلك", "كس امك", "اكس امك", "زبي", "يلعن", "كلب" ];
client.on('message', message => {
	var log = message.guild.channels.find("name","log");
  if (swearWords.some(word => message.content.includes(word)) ) {
    message.reply("مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ").then(sentMessage =>{
      sentMessage.delete(20000)
    })
    message.delete(1000)
    log.send(message.author.toString() + "استخدم كلام لا يليق ~")
  }
});
//comand-adminsserver
 //members
client.on('message', function(message)  {
  if (message.author.bot) return;
                  if(!message.channel.guild) return;
                    if (message.content === prefix + "members") {
			          if(!message.channel.guild) return; 
				if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return;
 const embed = new Discord.RichEmbed()
    .setDescription(`**Members info ✨
Online :   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
DND :     ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
Idle :     ${message.guild.members.filter(m=>m.presence.status == 'idle').size}
Offline :     ${message.guild.members.filter(m=>m.presence.status == 'offline').size}
Server Members :  ${message.guild.memberCount - message.guild.members.filter(m=>m.user.bot).size} **`)
         message.channel.send({embed});

    }
      });
//mute-unmute
client.on('message', async message =>{
  if (message.author.boss) return;
if (!message.content.startsWith(prefix)) return;
	let command = message.content.split(" ")[0];
	 command = command.slice(prefix.length);
	let args = message.content.split(" ").slice(1);
	if (command == "mute") {
		if (!message.channel.guild) return;
		if (!message.member.hasPermission("MANAGE_MESSAGES")) return;
		if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x:** | للاداره فقط**").then(msg => msg.delete(5000));
		if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.channel.send("**I Don't Have Permissions**").then(msg => msg.delete(5000));
		if (message.mentions.users.size < 1) return message.channel.send(`:information_source: ** \`\`${prefix}mute @َζ͜͡ELMEWAL3 ヅ\`\` يجب تحديد شخص **`);
		let messageArray = message.content.split (" ");
                let cmd = messageArray[0];
                let argsnot = messageArray.slice(1);
		let muteu = message.guild.member(message.mentions.users.first() || message.guild.members.get(argsnot[0]));
		if(muteu.id === message.author.id) return message.channel.send(':x: | **لا يمكننك اعطاء ميوت لنفسك ._.**');
		if(muteu.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**لا يمكننك اعطاء ميوت لاحد من الاداره**");
		let user = message.mentions.users.first();
		var log = message.guild.channels.find("name","log");
		let muteRole = message.guild.roles.find("name", "Muted");
		if (!muteRole) return message.channel.send("** لا يوجد رتبة الميوت 'Muted' **").then(msg => {msg.delete(5000)});
		let reason = message.content.split(" ").slice(2).join(" ");
		message.guild.member(user).addRole(muteRole);
		message.channel.send(`**:white_check_mark: | ${user.username} Muted :zipper_mouth:**`);
		var mutelog = new Discord.RichEmbed()
		.setAuthor(`Muted!`, user.displayAvatarURL)
		.setThumbnail(user.displayAvatarURL)
		.addField("**:busts_in_silhouette:  المستخدم**",  '**[ ' + `<@${user.id}>` + ' ]**',true)
		.addField("**:hammer:  by  **", '**[ ' + `<@${message.author.id}>` + ' ]**',true)
		.addField("**:book:  reason**", '**[ ' + `${reason}` + ' ]**',true)
		.setFooter(`${message.author.tag}`, message.author.avatarURL)
		.setColor("BLACK")
		.setTimestamp();
	log.send(mutelog);
  }
if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":x:** | للاداره فقط**").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.channel.send("**I Don't Have Permissions**").then(msg => msg.delete(6000))

  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.send(`:information_source:  **\`\`${prefix}unmute @َζ͜͡ELMEWAL3 ヅ\`\` يجب تحديد شخص **`);

  let role = message.guild.roles.find (r => r.name === "Muted");
  let user = message.mentions.users.first();
  
  if(!role || !toMute.roles.has(role.id)) return message.channel.send(`:information_source:**  ${user.username} تم فك الميوت عنه مسبقاً! **`)

  await toMute.removeRole(role)
  message.channel.send(`**:white_check_mark: | ${user.username} Unmuted :smiley:**`);

  return;

  }

});
//ban-unban-kick
client.on('message', message => {
  if (message.author.kick) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command == "ban") {
  if (!message.channel.guild) return;
  var log = message.guild.channels.find("name","log");
  if (!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return  message.delete(); 
  if (!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.msg.channel.send("I Don't Have Ban_Members Permission");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
 
  if (message.mentions.users.size < 1) return message.channel.send(`:information_source: **\`\` ${prefix}ban @َζ͜͡ELMEWAL3\`\` يجب تحديد شخص **`);
  if (!reason) reason = 'No reason provided.';
 if(user.id === message.author.id) return message.channel.send(':x: | **لا يمكنك حظر نفسك ._.**');
 if(user.id === message.guild.owner.id) return message.channel.send(':x: | **لطيفة حاول يا صاح \:D**');
 if (user.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**:x: | لايمكنني حظر احد من الاداره**");

 
 message.guild.member(user).ban({reason : reason});
 message.channel.send(`**:white_check_mark: | ${user.username} baned from the server ** `);
 message.guild.owner.send(`لقد تم تبنيد <@${user.id}> من السيرف 
من قبل : <@${message.author.id}>
السبب : \`\`\`${reason}\`\`\``);
 
  const banembed = new Discord.RichEmbed()
  .setAuthor(user.tag, user.avatarURL)
  .setThumbnail(user.avatarUR)
  .setColor('#ff0000')
  .setDescription(`:airplane: **<@${user.id}> baned from the server**\n **by: **<@${message.author.id}>\n**Reason:** \`\`\`${reason}\`\`\``)
  .setFooter(message.author.tag)
  .setTimestamp()
  log.send({embed : banembed})
}
});
client.on('message' , message => {
    let user = message.mentions.users.first()|| client.users.get(message.content.split(' ')[1])
    if(message.content.startsWith(prefix + 'unban')) {
	if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return  message.delete(); 
	var log = message.guild.channels.find("name","log");
        if(!user) return;
        message.guild.unban(user);
        message.guild.owner.send(`**لقد تم فك الباند عن الشخص** \n ${user} \n **By :** <@${message.author.id}>`)
        var embed = new Discord.RichEmbed()
        .setThumbnail(message.author.avatarURl)
        .setColor(`#ff0000`)
        .setTitle('**Unban** !')
        .addField('**User Unban :** ', `${user}` , true)
        .addField('**By :**',` <@${message.author.id}> `)
        .setAuthor(message.guild.name)
       .setFooter('Requested by '+message.author.username, message.author.avatarURL)
        log.sendEmbed(embed)
    }
  });
client.on('message', message => {
  if (message.author.kick) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command == "kick") {
  if (!message.channel.guild) return;
  var log = message.guild.channels.find("name","log");
  if (!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return  message.delete(); 
  if (!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.msg.channel.send("I Don't Have KICK_Members Permission");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
 
  if (message.mentions.users.size < 1) return message.channel.send(`:information_source: **\`\` ${prefix}kick @َζ͜͡ELMEWAL3\`\` يجب تحديد شخص **`);
  if (!reason) reason = 'No reason provided.';
 if(user.id === message.author.id) return message.channel.send(':x: | **لا يمكنك طرد نفسك ._.**');
 if(user.id === message.guild.owner.id) return message.channel.send(':x: | **لطيفة حاول يا صاح \:D**');
 if (user.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**:x: | لايمكنني طرد احد من الاداره**");
 
  message.guild.member(user).kick({reason : reason});
 message.channel.send(`**:white_check_mark: | ${user.username} kicked from the server ** `);
 message.guild.owner.send(`لقد تم طرد <@${user.id}> من السيرفر 
من قبل : <@${message.author.id}>
السبب : \`\`\`${reason}\`\`\``);
 
  const kicke = new Discord.RichEmbed()
  .setAuthor(user.tag, user.avatarURL)
  .setThumbnail(user.avatarUR)
  .setColor('#ff0000')
  .setDescription(`**<@${user.id}> kicked from the server**\n **by: **<@${message.author.id}>\n**Reason:** ${reason}`)
  .setFooter(message.author.tag)
  .setTimestamp()
  log.send({embed : kicke})
}
});
//viocekick
client.on('message', message => require('./commands/vkick.js')(client, message));
 //clere-chat
client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "clear") {
    const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if(parseInt(textxt) > 100) return msg.channel.send('**انا اسف ,ولكن لايمكنك مسح اكثر من `100` رساله**')
    if (textxt == "") {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(100);
        msg.channel.send("```php\nعدد الرسائل التي تم مسحها : 100\n```").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nعدد الرسائل التي تم مسحها : " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
});
client.on('message', msg => {
	  var prefix1 = ""
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix1)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix1.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "مسح") {
    const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if(parseInt(textxt[0]) > 100) return msg.channel.send('**انا اسف ,ولكن لايمكنك مسح اكثر من `100` رساله**')
    if (textxt == "") {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(100);
        msg.channel.send("```php\nعدد الرسائل التي تم مسحها : 100\n```").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nعدد الرسائل التي تم مسحها : " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
});
client.on('message', msg => {
	  var prefix1 = ""
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix1)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix1.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "lsp") {
    const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if(parseInt(textxt[0]) > 100) return msg.channel.send('**انا اسف ,ولكن لايمكنك مسح اكثر من `100` رساله**')
    if (textxt == "") {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(100);
        msg.channel.send("```php\nعدد الرسائل التي تم مسحها : 100\n```").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nعدد الرسائل التي تم مسحها : " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
});
 //move-members
client.on('message', message => require('./commands/move1.js')(client, message));
client.on('message', message => require('./commands/move2.js')(client, message));
client.on('message', message => require('./commands/moveall.js')(client, message));
//bc-obc-bcrole
client.on('message', message => require('./commands/bc/bc.js')(client, message));
client.on('message', message => require('./commands/bc/obc.js')(client, message));
client.on('message', message => require('./commands/bc/bcrole.js')(client, message));
//settingchat:!chat-!unmutechat-!hidechat-!showchat
client.on('message', message => {

if (message.author.bot) return;
    if (message.content === prefix + "mutechat") {
                        if(!message.channel.guild) return message.channel.send(' This command only for servers');

if(!message.member.hasPermission('MANAGE_CHANNELS')) return;
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.channel.send("✅ | **Channel Muted**")
           }).then(message =>{message.delete(5000)});
             }
if (message.content === prefix + "unmutechat") {
    if(!message.channel.guild) return message.channel.send(' This command only for servers');

if(!message.member.hasPermission('MANAGE_CHANNELS')) return;
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.channel.send("✅ | **Channel Unmuted**")
           }).then(message =>{message.delete(5000)});
             }



});
client.on('message', message => {

if (message.author.bot) return;
    if (message.content === prefix + "hidechat") {
                        if(!message.channel.guild) return message.channel.send(' This command only for servers');

if(!message.member.hasPermission('ADMINISTRATOR')) return message.delete(); 
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false ,
	 READ_MESSAGES: false
	   
	   
	   }).then(() => {
               message.channel.send("✅ | **Channel Hided**")
           }).then(message =>{message.delete(5000)});
             }
if (message.content === prefix + "showchat") {
    if(!message.channel.guild) return message.channel.send(' This command only for servers');

if(!message.member.hasPermission('ADMINISTRATOR')) return message.delete(); 
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true,
	 READ_MESSAGES: true

           }).then(() => {
               message.channel.send("✅ | **Channel Showed**")
           }).then(message =>{message.delete(5000)});
             }



});
//role-command
client.on('message', message => require('./commands/role.js')(client, message));
//server-data 
client.on('message', function(msg) {
  if(msg.content === prefix + "server") { 
	if (!msg.member.hasPermission('MANAGE_MESSAGES')) return msg.delete();
    if(!msg.channel.guild) return;        
    let embed = new Discord.RichEmbed()
    .setColor('BLACK')
    .setThumbnail(msg.guild.iconURL)
    .addField(':globe_with_meridians: **اسم السيرفر : **' , `**[ ${msg.guild.name} ]**`,true)
    .addField(':earth_africa: ** موقع السيرفر :**',`**[ ${msg.guild.region} ]**`,true)
    .addField(':military_medal:** الرتب :**',`**[ ${msg.guild.roles.size} ]**`,true)
    .addField(':bust_in_silhouette:** عدد الاعضاء :**',`**[ ${msg.guild.memberCount} ]**`,true)
    .addField(':white_check_mark:** عدد الاعضاء الاونلاين :**',`**[ ${msg.guild.members.filter(m=>m.presence.status == 'online').size} ]**`,true)
    .addField(':pencil:** الرومات الكتابية :**',`**[ ${msg.guild.channels.filter(m => m.type === 'text').size} ]**`,true)
    .addField(':loud_sound:** رومات الصوت :**',`**[ ${msg.guild.channels.filter(m => m.type === 'voice').size} ]**`,true)
    .addField(':crown:** صاحب السيرفر :**',`**[ ${msg.guild.owner} ]**`,true)
    .addField(':id:** ايدي السيرفر :**',`**[ ${msg.guild.id} ]**`,true)
    .addField(':date:** تم عمل السيرفر في : **',msg.guild.createdAt.toLocaleString())
    msg.channel.send({embed:embed});
  }
});
//warn
client.on('message', async message => {

  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;


  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "warn") { 

               if(!message.channel.guild) return;
         
if(!message.member.hasPermission('ADMINISTRATOR')) return message.delete(); 
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");

  if (message.mentions.users.size < 1) return message.channel.send(`**${prefix}warn <mention> <Reason>**`);
  if(!reason) return message.channel.send (`**${prefix}warn <mention> <Reason>**`);

  if(!warns[user.id]) warns[user.id] = {
    warns: 0
  };


  warns[user.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });

  const banembed = new Discord.RichEmbed()
  .setAuthor(`WARNED!`, user.displayAvatarURL)
  .setColor(`#e60909`)
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**');
   client.channels.find('name', 'log').send({
    embed : banembed
  })
  
    if(warns[user.id].warns == 2){ 
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
    
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.channel.send(":x:") .then(m => m.delete(5000));
    

    let mutetime = "600s";
    await(tomute.addRole(muterole.id));
    message.channel.send(`<@${user.id}> has been temporarily muted`);

    setTimeout(async function(){
    await(tomute.removeRole(muterole.id));
      message.channel.send(`<@${user.id}> has been unmuted.`)
    }, ms(mutetime))

  }
    if(warns[user.id].warns == 3){ 
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
    
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.channel.send(":x:") .then(m => m.delete(5000));
    
    let mutetime = "86400s";
    await(tomute.addRole(muterole.id));
    message.channel.send(`<@${user.id}> has been temporarily muted`);

    setTimeout(async function(){
    await(tomute.removeRole(muterole.id));
      message.channel.send(`<@${user.id}> has been unmuted.`)
    }, ms(mutetime))

  }

}
});
//set-server-name
client.on('message', eyad => {
  let args = eyad.content.split(" ").slice(1).join(" ")
  if (eyad.content.startsWith(`${prefix}set server name`)) {
                if (!eyad.member.hasPermission("MANAGE_SERVER"))  return;
                if(!args) return eyad.channel.send('`**يرجي ادخال اسم السرفر الجديد**`');
                eyad.guild.owner.send(`**تم تغيير اسم السرفر الي ${args}
                بواسطة : <@${eyad.author.id}>**`)
                eyad.guild.setName(args)
                eyad.channel.send(`**تم تغير اسم السيرفر الي : __${args}__ **`);
                
       }

       });
//set-server-avatar
client.on('message', eyadandr3d => {
  let args = eyadandr3d.content.split(" ").slice(1).join(" ")
  if (eyadandr3d.content.startsWith(`${prefix}set server avatar`)) {
                if (!eyadandr3d.member.hasPermission("MANAGE_SERVER"))  return;
                if(!args) return eyadandr3d.channel.send('`**ضع رابط الصوره**`');
                eyadandr3d.guild.owner.send(`**تم تغيير صوره السرفر الي ${args}
                بواسطة : <@${eyadandr3d.author.id}>**`)
            eyadandr3d.guild.setIcon(args)
                eyadandr3d.channel.send(`**تم تغير صورة السيرفر الي : __${args}__ ** `);
                
       }

       });
//send-pic
client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  var argresult = message.content.split(" ").slice(1);
if (command == "sendpic") {
	    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.delete(); 
  message.channel.sendFile(argresult.join(" "))

}
});
client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  var argresult = message.content.split(" ").slice(1);
if (command == "sendpice") {
	    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.delete(); 
    let embedsay = new Discord.RichEmbed()
 .setColor("RANDOM")
.setDescription("ـــــــــــــــــــــــــــــــــ")
.setImage(`${argresult}`)
message.channel.send({embed:embedsay});


}
});
//say-emb
client.on('message', message => { 
  if (message.author.bot) return;   
  if (!message.content.startsWith(prefix)) return;   
    var argresult = message.content.split(` `).slice(1).join(' ');   
      if (!owner.includes(message.author.id)) return;   
  let command = message.content.split(" ")[0];   
  command = command.slice(prefix.length);   
	
  let args = message.content.split(" ").slice(1);    

  if (command === "say")  {   
  if(!message.channel.guild) return; 
	  	if(!message.member.hasPermission('ADMINISTRATOR')) return message.delete(); 
          message.delete()   
    message.channel.sendMessage(args.join(" ")).catch(console.error);   
  } 
	
if (command == "saye")    {   
  if(!message.channel.guild) return; 
		if(!message.member.hasPermission('ADMINISTRATOR')) return message.delete(); 
    let say = new Discord.RichEmbed() 
    .setDescription(args.join("  "))   
    .setColor("RANDOM") 
    message.channel.sendEmbed(say); 
    message.delete(); 
  }    
});
//up-time-bot
client.on('message', message => {
     if (message.author.bot) return;
if (message.content.startsWith(prefix + "uptime")) {
	if(!message.member.hasPermission('MANAGE_MESSAGE')) return;
    let uptime = client.uptime;

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let notCompleted = true;

    while (notCompleted) {

        if (uptime >= 8.64e+7) {

            days++;
            uptime -= 8.64e+7;

        } else if (uptime >= 3.6e+6) {

            hours++;
            uptime -= 3.6e+6;

        } else if (uptime >= 60000) {

            minutes++;
            uptime -= 60000;

        } else if (uptime >= 1000) {
            seconds++;
            uptime -= 1000;

        }

        if (uptime < 1000)  notCompleted = false;

    }

    message.channel.send("`" + `${days} days, ${hours} hrs, ${minutes} min, ${seconds} sec` + "`");


}
});
//Temporary Channels
const temp = {};
client.on('message', async message => {
 if(message.channel.type === "dm") return;
  if(message.author.bot) return;
   if(!temp[message.guild.id]) temp[message.guild.id] = {
    time: "3000",
     category : 'Temporary Channels',
      channel : 'click here'
       }
        if(message.content.startsWith(`${prefix}temp on`)){
         if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
          var ggg= message.guild.createChannel('Temporary Channels', 'category').then(cg => {
           var ccc =message.guild.createChannel('click here', 'voice').then(ch => {
            ch.setParent(cg)
             message.channel.send('**:white_check_mark: | Done .**')
              client.on('message' , message => {
               if(message.content === `${prefix}temp off`) {
                if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
                 cg.delete()
                  ch.delete()
                   message.channel.send('**:white_check_mark: | Done .**')
                    }
                     });
                      const time = temp[message.guild.id].time
                       client.on('message' , message => {
                        if (message.content.startsWith(prefix + "temptime")) {
                         if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
                          let newTime= message.content.split(' ').slice(1).join(" ")
                          if(!newTime) return message.channel.send(`**${prefix}temptime <time>  \`1000 = 1s\`**`)
	                 if(isNaN(newTime)) return message.channel.send(`** The Time Be Nambers :face_palm: **`);
	                if(newTime < 1) return message.channel.send(`**The Time Be Up \`3000s\`**`)
                       temp[message.guild.id].time = newTime
                      message.channel.send(`**Temp Rooms Time Change To \`${newTime}\`**`);
                     }
                    });
                   client.on('voiceStateUpdate', (old, neww) => {
                  let newUserChannel = neww.voiceChannel
                 let oldUserChannel = old.voiceChannel
                temp[message.guild.id].category = cg.id
               temp[message.guild.id].channel = ch.id
              let channel = temp[message.guild.id].channel
             let category = temp[message.guild.id].category
            if(oldUserChannel === undefined && newUserChannel !== undefined && newUserChannel.id == channel) {
           neww.guild.createChannel(neww.displayName , 'voice').then(c => {
          c.setParent(category)
         let scan = setTimeout(()=>{
        if(!neww.voiceChannel) {
       c.delete();
      client.channels.get(channel).overwritePermissions(neww, {
     CONNECT:true,
    SPEAK:true
   })
  }
 }, temp[neww.guild.id].time);
  c.overwritePermissions(neww, {
   CONNECT:true,
    SPEAK:true,
     MANAGE_CHANNEL:true,
      MUTE_MEMBERS:true,
       DEAFEN_MEMBERS:true,
	MOVE_MEMBERS:true,
	 VIEW_CHANNEL:true
	  })
	   neww.setVoiceChannel(c)
            })
             client.channels.get(channel).overwritePermissions(neww, {
	      CONNECT:false,
	       SPEAK:false
		})
               }
              })
             })
           })
          }
      });
//setvoice-online
client.on('message',async message => {
  if(message.content.startsWith(prefix + "setvoice")) {
  if(!message.guild.member(message.author).hasPermissions('ADMINISTRATOR')) return ;
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return;
  message.channel.send('✅| **تم عمل الروم بنجاح**');
  message.guild.createChannel(`.Miracle Online: [ ${message.guild.members.filter(m => m.voiceChannel).size} ]` , 'voice').then(c => {
    console.log(`Voice online channel setup for guild: \n ${message.guild.name}`);
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(() => {
      c.setName(`.Epic Online :[${message.guild.members.filter(m => m.voiceChannel).size}]`)
    },1000);
  });
  }
});
//comand-memberserver
//user
client.on('message', message => {
           if (message.content.startsWith(prefix + "user")) {
		   if (message.channel.id !== "465552810298310657") return;
                     if(!message.channel.guild) return;

                message.guild.fetchInvites().then(invs => {
      let member = client.guilds.get(message.guild.id).members.get(message.author.id);
      let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      var moment = require('moment');
      var args = message.content.split(" ").slice(1);
let user = message.mentions.users.first();
var men = message.mentions.users.first();
 var heg;
 if(men) {
     heg = men
 } else {
     heg = message.author
 }
var mentionned = message.mentions.members.first();
  var h;
 if(mentionned) {
     h = mentionned
 } else {
     h = message.member
 }
        moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
    .setColor("#0a0909")
.addField(': تاريخ دخولك للديسكورد',` \`${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} \`**\n ${moment(heg.createdTimestamp).fromNow()}**` ,true) 
.addField(': تاريخ دخولك لسيرفرنا', `\`${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')}  \` **\n ${moment(h.joinedAt).fromNow()} **`, true)
.addField(` :WELOCOME TO SERVER Epic
لقد قمت بدعوة `, ` **${inviteCount}** `)
.setFooter(`${message.author.tag}`, 'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')                                 
.setThumbnail(heg.avatarURL);
    message.channel.sendEmbed(id);
})
}



 });
//creditsCode
/*
const coolDown = new Set();
client.on('message',async message => {
if(message.author.bot) return;
if(!credits[message.author.id]) credits[message.author.id] = {
    credits: 50
};
	
let userData = credits[message.author.id];
let m = userData.credits;
fs.writeFile("./creditsCode.json", JSON.stringify(credits), (err) => {
    if (err) console.error(err);
  });
  credits[message.author.id] = {
      credits: m + 0.5,
  }
    if(message.content.startsWith(prefix + "credit" || prefix + "credits")) {
message.channel.send(`**${message.author.username}, your :credit_card: balance is \`\`${userData.credits}\`\`.**`);
}
});
client.on('message', async message => {
    let amount = 250;
    if(message.content.startsWith(prefix + "daily")) {
    if(message.author.bot) return;
    if(coolDown.has(message.author.id)) return message.channel.send(`**:stopwatch: | ${message.author.username}, your daily :yen: credits refreshes in \`\`1 Day\`\`.**`);
    let userData = credits[message.author.id];
    let m = userData.credits + amount;
    credits[message.author.id] = {
    credits: m
    };
    fs.writeFile("./creditsCode.json", JSON.stringify(userData.credits + amount), (err) => {
    if (err) console.error(err);
    });
    message.channel.send(`**:atm: | ${message.author.username}, you received your :yen: ${amount} credits!**`).then(() => {
        coolDown.add(message.author.id);
    });
    setTimeout(() => {
       coolDown.remove(message.author.id);
    },86400000);
    }
});
*/
//id

//ping
client.on('message', message =>{
    let args = message.content.split(' ');
    
    if(args[0] === `${prefix}ping`){
        let mentions = message.mentions.members.first()
        if(!mentions) {
			let start = Date.now(); 
          message.channel.send('pong..').then(message => { 
	
message.edit(`\`\`\`js
Time taken: ${Date.now() - start} ms
Discord API: ${client.ping.toFixed(0)} ms\`\`\``);
	
    });
        } else {
			let start = Date.now(); 
          message.channel.send('pong..').then(message => { 
	
message.edit(`\`\`\`js
Time taken: ${Date.now() - start} ms
Discord API: ${client.ping.toFixed(0)} ms\`\`\``);
	
    });
        }
    };
});
client.on('message' , async (message) => {
    if (message.content.startsWith(prefix + 'time')) {
         let args = message.content.split(" ").slice(1);
let Timer = args[0];
if(!args[0]){
  return message.channel.send("**Please enter a period of time, with either `s,m or h` at the end**!");
}
if(args[0] <= 0){
  return message.channel.send("**Please enter a period of time, with either `s,m or h` at the end**!");
}
message.channel.send(":white_check_mark: **Timer has been set for**: " + `${ms(ms(Timer), {long: true})}`)

setTimeout(function(){
  message.channel.send(`**Timer has ended, it lasted**: ${ms(ms(Timer), {long: true})}` + message.author.toString())
}, ms(Timer));
} 
}); 
//invite
client.on("message", async message => {
            if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + 'invites')) {
        var nul = 0
        var guild = message.guild
        await guild.fetchInvites()
            .then(invites => {
             invites.forEach(invite => {
                if (invite.inviter === message.author) {
                     nul+=invite.uses
                    }
                });
            });
          if (nul > 0) {
              console.log(`\n${message.author.tag} has ${nul} invites in ${guild.name}\n`)
		  
                          message.channel.send(`لقد قمت بدعوة **${nul}** شخص`);
                      return;
                    } else {

                       message.channel.send(`لم تقم بدعوة أي شخص لهذة السيرفر`);
                        return;
                    }
        }
});
//link
client.on('message', message => {
    if (message.content.startsWith("رابط")) {
 
  message.channel.createInvite({
        thing: true,
        maxUses: 10,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )

      message.channel.send(`**:link:  تم ارسال الرابط على الخاص  **`);

      message.author.send(`
**
		
مدة الرابط : يـوم 
عدد استخدامات الرابط : 10
 
 **
 ***link:***
	  `)
    }
});
   // Yor avatar
client.on('message', message =>{
    let args = message.content.split(' ');
    
    if(args[0] === `${prefix}avatar`){
	     if (message.channel.id !== "467766985653223434") return;
        let mentions = message.mentions.members.first()
        if(!mentions) {
          let sicon = message.author.avatarURL

          message.channel.send(`**${message.author.username}** avatar URL: ${sicon}`)
        } else {
          let sicon = mentions.user.avatarURL

          message.channel.send(`**${mentions.user.username}** avatar URL: ${sicon}`)
        }
    };
});
//roll
client.on('message', function(message) {
    if(message.content.startsWith(prefix + 'roll')) {
        let args = message.content.split(" ").slice(1);
        if (!args[0]) {
            message.channel.send('**Please supply a number**');
            return;
            }
    message.channel.send(Math.floor(Math.random() * args.join(' ')));
            if (!args[0]) {
          message.edit('1')
          return;
        }
    }
});
//short
client.on('message', message => {
 let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'short')) {
    if(!message.channel.guild) return;  

        googl.setKey('x5To45pqy6jGGVRiK1cW4BCyt7EhKeuS');
        googl.getKey();
        googl.shorten(args.join(' ')).then(shorturl => {
            message.channel.send(''+shorturl)
        }).catch(e=>{
            console.log(e.message);
            message.channel.send('Error!');
        });

    }

});
//الردوت العاديه
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'الوان') {
		    if (message.channel.id !== "467766985653223434") return;
              message.channel.send('لأختيار اللون اكتب ( لون `رقم الون`)  مثال :  لون 1');
		    message.delete(); 
            }
});
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'الوان') {
		    if (message.channel.id !== "467766985653223434") return;
              message.channel.sendFile("./color1.png");
               message.delete(); 

            }
});
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === `${prefix}colors`) {
		    if (message.channel.id !== "467766985653223434") return;
              message.channel.send('لأختيار اللون اكتب ( لون `رقم الون`)  مثال :  لون 1');
		    message.delete(); 
            }
});
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === `${prefix}colors`) {
		    if (message.channel.id !== "467766985653223434") return;
              message.channel.sendFile("./color1.png");
               message.delete(); 

            }
});
//privet-commands
client.on('message', message => require('./commands/show-hide.js')(client, message));
//معلومات البوت
client.on('message', message => {
  if (message.content.startsWith(prefix + "data")) {
     if (!dev.includes(message.author.id)) return;
    message.channel.send({
embed: new Discord.RichEmbed() 
  .setColor(`#ff0303`)
  .addField('**الذاكرة المستخدمة 💾**', `${(process.memoryUsage().rss / 1000000).toFixed()}MB`, true)
  .addField('**سرعة الاتصال📡**' , `${Date.now() - message.createdTimestamp}` + ' ms')
  .addField('**وقت الاقلاع⌚**', timeCon(process.uptime()), true)
  .addField('**استخدام المعالج💿**', `${(process.cpuUsage().rss / 10000).toFixed()}%`, true)
   })
  }
function timeCon(time) {
  let days = Math.floor(time % 31536000 / 86400)
  let hours = Math.floor(time % 31536000 % 86400 / 3600)
  let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
  let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
  days = days > 9 ? days : '0' + days
  hours = hours > 9 ? hours : '0' + hours
  minutes = minutes > 9 ? minutes : '0' + minutes
  seconds = seconds > 9 ? seconds : '0' + seconds
  return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
}
});
//adminstratin-id
client.on('message', async message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!id.includes(message.author.id)) return;
      
  if (message.content.startsWith(prefix + 'setplaying')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(prefix + 'setwatching')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(prefix + 'setliste')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(prefix + 'setstrem')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(prefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(prefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
} else
if (message.content.startsWith(prefix + "setstatus")) {
            let args = message.content.split(' ').slice(1).join(' ');
            let sigMessage = await args;
		     
            if (!args[0]) {
                return message.channel.send("**يجب تحديد نوع الحاله ما بين : \`\`ONLINE\`\`, \`\`IDLE\`\`, \`\`DND\`\`, \`\`INVISIBLE\`\`**");
            }
            
            if (sigMessage === "ONLINE") {
                client.user.setStatus("online");
                message.channel.send(":white_check_mark: **Your status was set to online.**");
            }
            if (sigMessage === "IDLE") {
                client.user.setStatus("idle");
                message.channel.send(":white_check_mark: **Your status was set to idle.**");
            }
            if (sigMessage === "INVISIBLE") {
                client.user.setStatus("invisible");
                message.channel.send(":white_check_mark: **Your status was set to invisible.**");
            }
            if (sigMessage === "DND") {
                client.user.setStatus("dnd");
                message.channel.send(":white_check_mark: **Your status was set to dnd.**");
            }
           
        
}
});
//save-server
client.on('message', message => require('./commands/save-server.js')(client, message));


client.on('message', message => {
   
    let args = message.content.split(' ').slice(1).join(' ');
   
  if (message.content === 'ولكم') {
      message.channel.send(`*WELCOME TO SERVER EPIC :heart: :yellow_heart:*`)
  }
 

client.login("NTExODU5ODgzMzI3NDg4MDEx.Ds-qVA.sO09dYR6iMcYaqXh7MC1C02cgW4");
