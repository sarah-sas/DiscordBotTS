import { MessageEmbed } from 'discord.js';
import { Command, CommandoClient, CommandoMessage } from 'discord.js-commando';

export default class gCommand extends Command {
	constructor(client: CommandoClient){
		super(client, {
			name: 'pfp',
			group: 'gear',
			memberName: 'pfp',
            description: 'Get your php',
			args: [
				{
					key: 'user',
					prompt: 'Who\'s profile picture do you want to get?',
					type: 'user',
				},
			],
		});
	}
	run(message:CommandoMessage, { user }) {
        const Avatar = new MessageEmbed()
        .setTitle('Your Profile Picture')
		.setDescription(user.displayAvatarURL({size: 4096, dynamic: true}))
		.setImage(user.displayAvatarURL({size: 4096, dynamic: true}))
        .setColor('RANDOM')
        .setTimestamp()
        return message.channel.send(Avatar)
	}
};