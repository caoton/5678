const Discord = require('discord.js');

exports.run = (bot, message, args) => {

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`apenas ADMINISTRADORES podem utilizar esse comando!`)

    var fala = args.slice(0).join(' ');
    if (!fala) return message.reply(`escreva algo para que eu repita!`)
  
    let embed = new Discord.MessageEmbed()
    
    .setDescription(fala)
    .setColor('#00000')
    
    message.channel.send(embed)
    message.delete()

}

exports.help = {
    name: 'say'
}
