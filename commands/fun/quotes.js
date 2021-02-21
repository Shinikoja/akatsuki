const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const jojo = require('./quotes.js.json');

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'quotes',
            group: 'fun',
            memberName: 'quotes',
            description: 'Replies with a random out of context quote from friends of the developer.',
            aliases: [''],
            throttling: {
                usages: 10,
                duration: 15
            }
        });
    }

   async run(message) {
        return message.embed(new RichEmbed()
            .setColor('RANDOM')
            .setTitle(jojo[Math.floor(Math.random()*jojo.length)])
        );
    }
};
