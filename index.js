const Discord = require('discord.js');
const config =  require('./config.json');
const fs = require('fs');
const bot = new Discord.Client();
bot.commands = new Discord.Collection();

fs.readdir('./comandos/', (err, files) => {
    if(err) console.error(err)

    let arquivojs = files.filter(f => f.split('.').pop() === 'js');
    arquivojs.forEach((f, i) => {
        let props = require(`./comandos/${f}`)
        console.log(`Command ${f} loaded!`)
        if (props.help && props.help.name) {
        bot.commands.set(props.help.name, props)
    };
 })
});
bot.on('guildMemberAdd', member => {
    const sErvidor = bot.guilds.cache.get('id do servidor')
    const canal = bot.channels.cache.get('id do canal')

    let embed = new Discord.MessageEmbed()

    .setTimestamp()
    .setAuthor('BOAS-VINDAS!', bAvatar)
    .setColor('PURPLE')
    .setDescription(`${member} entrou em nosso servidor, seja muito bem-vindo! Contamos com sua ajuda para manter o servidor de pé!`)
    .setFooter(`By: ${bot.user.username}`)

    canal.send(embed)
  
    member.roles.add('id de um cargo')

});
bot.on('ready', () => {
    console.log(`Bot ${bot.user.username} has been started!`);
    var tabela = [
        {name: 'Visual Studio Code', type: "PLAYING"},
        {name: 'Spotify', type: "LISTENING"}
    ]
    setInterval(function(){
        let altstatus = tabela[Math.floor(Math.random() * tabela.length)];
        bot.user.setActivity(altstatus)
      }, 6000)
});

bot.on('message', async message => {
    if (message.author.bot) return;
    if (message.channel.type === 'dm') return;

    let prefix = config.prefix;
    if (!message.content.startsWith(prefix)) return;
    let messageArray = message.content.split(" ");
    let command = messageArray[0];  
    let args = messageArray.slice(1);

    let arquivocmd = bot.commands.get(command.slice(prefix.length))
    if (arquivocmd) arquivocmd.run(bot, message, args)
});


bot.login(config.token)
