require('dotenv').config();
const Discord = reqscord.js');
const Commando = require('discord.js-commando');
const path = require('path');
const sqlite = require('sqlite');
const config = require('./config.json');
const MongoClient = require('mongodb').MongoClient;
const client = new Commando.Client({
    owner: process.env.BOT_OWNER || config.owner,
    commandPrefix: process.env.BOT_PREFIX || config.prefix || '-',
    disableEveryone: true,
    unknownCommandResponse: false
    
});

const prefix = config.prefix;

client.once('ready', () => {
    client.user.setPresence({
        game: { 
            name: 'with Hibiki!',
            type: 'STREAMING', url: 'https://www.twitch.tv/emlamora'
        },
        status: 'streaming'
    })
})

client.on('message', message =>{

    if(message.content.toLowerCase() === 'based')
        message.channel.send('Based on what?');

});

client.on('message', message =>{

    if(message.content.toLowerCase() === 'in 2077 what makes someone a criminal?')
        message.channel.send('Getting COCK');

});

client.on('message', message =>{

    if(message.content.toLowerCase() === 'get stick bugged lol')
        message.channel.send('<a:StickBugged:743238536190492772>');

});

client.on('message', message =>{

    if(message.content.toLowerCase() === 'fuck you akatsuki')
        message.channel.send("<:emily:749443096290394123>");

});

client.on('message', message =>{

    if(message.content.toLowerCase() === 'true')
        message.channel.send('ANY TRUERS?');

});

client.on('message', message =>{

    if(message.content.toLowerCase() === 'cum')
        message.channel.send('<a:DeliciousDrink:745273623794942033>');

});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'status'){
        message.channel.send('Online!')
    } else if (command == 'gay'){
        message.channel.send('https://i.redd.it/i3srsz6mgu341.jpg');
    } else if (command == 'poggers')
        message.channel.send('You are very poggers!')
     else if (command == 'pog')
        message.channel.send('https://i.redd.it/qnnxdixjld641.jpg')
     else if (command == 'wife')
        message.channel.send('https://i.redd.it/nkgd8cuvos441.jpg')
     else if (command == 'wack')
        message.channel.send('https://i.imgur.com/dr16xKo.jpg');  
    
});

require('./events/event.js')(client);
// require('./dbl.js')(process.env.DBL_TOKEN, process.env.DBL_PASSWORD, client);
global.BOT_DEFAULT_COLOR = config.defaultColor || [233, 91, 169];


client.setProvider(
    sqlite.open(path.join(__dirname, 'settings.sqlite3')).then(db => {
        return new Commando.SQLiteProvider(db)
    })
).catch(console.error);


client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['anime', 'Anime and Manga commands'],
        ['bot', 'Helpful bot commands'],
        ['fun', 'Fun commands'],
        ['moderation', 'Moderation commands'],
        ['owner', 'Owner only commands'],
        ['setup', 'Server utility setup commands'],
        ['subscription', 'Tag subscription commands'],
        ['utility', 'Utility commands']
    ])
    .registerDefaultGroups()
    .registerDefaultCommands({
        ping: false,
        help: false
    })
    .registerCommandsIn(path.join(__dirname, 'commands'));


client.login(process.env.BOT_TOKEN || config.token).catch(console.error);
