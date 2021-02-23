import { Command, CommandoMessage } from 'discord.js-commando';
import { MessageEmbed } from 'discord.js';
module.exports = class gCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'baselvl',
			group: 'gear',
			memberName: 'gearlevel',
            description: 'get the base level of your gear (Please use numbers)',
			args: [
				{
					key: 'stat1',
					prompt: 'what is stat one?',
                    type: 'string',
                    min: 0,
                },
                {
                    key: 'gearlevel',
					prompt: 'What Level is your gear?',
                    type: 'string',
                    min: 0,
                }
			],
		});
	}
	run(message:CommandoMessage, { stat1, gearlevel, }) {
        const base1 = stat1 / (1 + (gearlevel / 10));
        const BaseStatsEmbed = new MessageEmbed()
        .setTitle('Base Stats')
        .setDescription(`Base Stat 1: \`` + base1 + `\``)
        .setColor('RANDOM')
        .setTimestamp()
        return message.channel.send(BaseStatsEmbed)
	}
};