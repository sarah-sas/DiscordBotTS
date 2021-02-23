import { CommandoMessage } from "discord.js-commando";

import { Command } from 'discord.js-commando';
import Discord from 'discord.js';

module.exports = class gCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'server',
			group: 'admin',
			memberName: 'server',
            description: 'Get server info',
		});
	}
	run(message:CommandoMessage) {
        const ServerStatsEmbed = new Discord.MessageEmbed()
        .setTitle('Server Stats')
        .addField("Server Name", message.guild.name)
        .addField("Created On", message.guild.createdAt)
        .addField("You Joined", message.member.joinedAt)
        .addField("Total Members", message.guild.memberCount)
        .setColor('RANDOM')
        .setTimestamp()
        return message.channel.send(ServerStatsEmbed)
	}
};