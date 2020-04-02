const Discord = require('discord.js'); // puxando a livraria 'discord.js'

exports.run = async (bot, message, args) => { // setando as bases

    if (!message.member.hasPermission('BAN_MEMBERS')) return message.reply("permissões insuficientes!") // caso o membro não possua a permissão 'BANIR_MEMBROS', vamos botar o erro

    let member = message.mentions.members.first() // puxando um membro mencionavel
    if (!member) return message.reply("selecione um usuário válido!") // caso o autor esqueça de mencionar um membro, vamos dar o erro
    if (!member.bannable) return message.reply("não é possível punir este usuário.") // caso o membro tenha um cargo acima do seu bot, ele não vai banir
    let reason = args.slice(1).join(' ') // puxando um motivo
    if (!reason) reason = "Nenhuma razão fornecida" // caso nao haja, daremos com tal mensagem
    await member.ban(reason) // finalizando com o ban
      .catch(error => message.reply(`${message.author}, não foi possível completar esta punição devido ao erro: ${error}`)) // caso ocorra um erro no final, vamos filtrar e avisar qual foi

      let pEmbed = new Discord.MessageEmbed()
          .setTitle("BANIMENTO")
          .addField("Usuário:", member.user.tag)
          .addField("Staff responsável:", message.author.tag)
          .addField("Motivo:", reason)
          .setFooter(`Autor: ${message.author.tag}`, message.author.displayAvatarURL)
          .setColor("DARK_RED")

          message.channel.send(pEmbed)
          
}

exports.help = { // setando o nome do arquivo, seguido do prefix
    name: 'ban'
}
