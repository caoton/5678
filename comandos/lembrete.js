const Discord = require('discord.js'); // puxando a livraria 'discord.js'
const ms = require('ms'); // puxando o NPM ms (instale utilizando: npm i ms)

exports.run = async (bot, message, args) => { // setando a base, com async

  let Timer = args[0]; // os argumentos, no caso, o tempo (s, m ou h)

  if (!args[0]){ // caso ele nao escreva, daremos o erro
    return message.reply(`escreva o tempo! Ex.: \`!lembrete 10s\``);
  }

  if (args[0] <= 0){ // caso seja menor que zero
    return message.channel.send(`escreva um tempo maior que zero!`);
  }

  message.channel.send("Irei te lembrar em: " + `\`${ms(ms(Timer), {long: true})}\``)

  setTimeout(function(){ // caso termine o tempo, avisaremos o membro
    message.channel.send(`BIP BIP BIP! ${message.author}`)

  }, ms(Timer));
}

exports.help = { // setando o nome do arquivo, seguido do prefix
    name: 'lembrete' 
}
