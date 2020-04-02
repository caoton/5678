const Discord = require('discord.js')

exports.run = async (bot, message, args) => {

    let sIcon = message.guild.iconURL()
    
    let embed = new Discord.MessageEmbed()

        .setTitle('' + message.guild.name + '')
        .setURL(sIcon)
        .setColor('GREY')
        .setImage(sIcon)

    message.channel.send(embed).then(message => message.delete({ timeout: 80000}))

}
exports.help = {
    name: "servericon"
}
