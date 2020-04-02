const Discord = require('discord.js');

exports.run = (bot, message, args) => {
  
  var canal = client.channels.get('694911040219119717')
  
  var sugestao = args.slice(0).join(' ');
  if (!sugestao) message.reply(`vc precisa escrever algo!`)
  
      let embed = new Discord.MessageEmbed()

        .setTitle(`SUGESTÃO`)
        .setDescription(`:bust_in_silhouette: **Autor:** ${message.author}\n\n:inbox_tray: **Sugestão:** ${sugestao}`)
        .setColor('RANDOM')
        .setFooter(`Deixe sua opnião sobre, clicando em um dos emojis abaixo!`)
        
        message.channel.send(embed)
        .then(function (msg) {
            msg.react("👍");
            msg.react("👎"); 
              message.reply(`sua sugestão foi enviada ao ${canal}! :mailbox_with_no_mail:`)
        })
  

}


exports.help = {
 name: 'sugestao'
}
