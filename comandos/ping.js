const Discord = require('discord.js');

exports.run = (bot, message, args) => {

    let embed = new Discord.MessageEmbed()

    .setDescription(`Meu ping eh de: \`${parseInt(bot.ws.ping)}\``)

    message.channel.send(embed)
}

exports.help = {
    name: 'ping'
}
