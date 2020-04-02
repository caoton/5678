const Discord = require('discord.js'); // puxando a livraria 'discord.js'
const math = require('mathjs'); // puxando o NPM 'mathjs' (instale utilizando: npm i mathjs)
const ms = require('ms'); // puxando o NPM 'ms' (instale utilizando: npm i ms)

exports.run = async (bot, message, args) => { // setando a base, com async

    var conta = args.slice(0).join(' ');
    if (!conta) return message.reply('escreva uma conta! Ex.: \`!calc 2 + 2\`') // caso o membro nao escreva uma conta
                         // filtrando o que o membro enviou, com o NPM Mathjs, criando a conta
   message.channel.send(`Resultado de \`${conta}\` é: \`${math.evaluate(args.join(' '))}\``)
}

exports.help = { // setando o nome do arquivo, seguido do prefix
  name: 'calc'
}
