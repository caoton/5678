const Discord = require('discord.js'); // puxando a livraria 'discord.js'

exports.run = (bot, message, args) => { // setando a base

    // puxando um chao, com sistema randomico (de 6 a 1)
    var numero = Math.floor(Math.random() * 6) + 1;

    message.channel.send(`Você jogou o dado e... Ele caiu em: ${numero}`)
}

exports.help = { // setando o nome do arquivo, seguido do prefix
    name: 'dado'
}
