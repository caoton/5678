const Discord = require('discord.js')

exports.run = async (bot, message, args) => {


    let member = message.mentions.users.first()
    let mMember = message.author.displayAvatarURL()

    var autor = new Discord.MessageEmbed()

        .setTitle('SEU AVATAR')
        .setColor('DARK_GREY')
        .setURL(mMember)
        .setImage(mMember)

    if (!member) return message.channel.send(autor).then(message => message.delete({ timeout: 80000}))
    
    let embed = new Discord.MessageEmbed()

        .setTitle('AVATAR DE ' + member.username + ' !')
        .setURL(member.avatarURL())
        .setColor('GREY')
        .setImage(member.avatarURL())

    message.channel.send(embed).then(message => message.delete({ timeout: 80000}))

}
exports.help = {
    name: "avatar"
}
