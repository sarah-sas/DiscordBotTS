import { MessageEmbed } from "discord.js";
import { Command, CommandoMessage } from "discord.js-commando";
const troopinf = require('./inf.json')
const d = new Date();
const n = d.getDay();
module.exports = class gCommand extends Command {
	constructor(client,) {
		super(client, {
			name: 'autoremind',
			group: 'gear',
			memberName: 'autoremind',
            description: 'remind players of the event',
        });
	}
	run(message:CommandoMessage,) {
            switch (n) {
                case 0:
                    const sundayAuto = new MessageEmbed()
                    .setTitle(`\`Todays Events Are\``)
                    .setDescription(`Guild: \`${troopinf.WeekEvents[0].Sunday[0].Guild}\` and \`${troopinf.WeekEvents[0].Sunday[0].Individual}\``)
                    .setColor('RANDOM')
                    .setTimestamp()
                    return message.channel.send(sundayAuto)
                case 1:
                        const mondayAuto = new MessageEmbed()
                        .setTitle(`\`Todays Events Are\``)
                        .setDescription(`Guild: \`${troopinf.WeekEvents[0].Monday[0].Guild}\` and \`${troopinf.WeekEvents[0].Monday[0].Individual}\``)
                        .setColor('RANDOM')
                        .setTimestamp()
                        return message.channel.send(mondayAuto)
                case 2:
                    const tuesdayAuto = new MessageEmbed()
                    .setTitle(`\`Todays Events Are\``)
                    .setDescription(`Guild: \`${troopinf.WeekEvents[0].Tuesday[0].Guild}\` and \`${troopinf.WeekEvents[0].Tuesday[0].Individual}\``)
                    .setColor('RANDOM')
                    .setTimestamp()
                    return message.channel.send(tuesdayAuto)
                case 3:
                    const wednesdayAuto = new MessageEmbed()
                    .setTitle(`\`Todays Events Are\``)
                    .setDescription(`Guild: \`${troopinf.WeekEvents[0].Wednesday[0].Guild}\` and \`${troopinf.WeekEvents[0].Wednesday[0].Individual}\``)
                    .setColor('RANDOM')
                    .setTimestamp()
                    return message.channel.send(wednesdayAuto)
                case 4:
                    const thursdayAuto = new MessageEmbed()
                    .setTitle(`\`Todays Events Are\``)
                    .setDescription(`Guild: \`${troopinf.WeekEvents[0].Thursday[0].Guild}\` and \`${troopinf.WeekEvents[0].Thursday[0].Individual}\``)
                    .setColor('RANDOM')
                    .setTimestamp()
                    return message.channel.send(thursdayAuto)
                case 5:
                    const fridayAuto = new MessageEmbed()
                    .setTitle(`\`Todays Events Are\``)
                    .setDescription(`Guild: \`${troopinf.WeekEvents[0].Friday[0].Guild}\` and \`${troopinf.WeekEvents[0].Friday[0].Individual}\``)
                    .setColor('RANDOM')
                    .setTimestamp()
                    return message.channel.send(fridayAuto)
                case 6:
                    const saturdayAuto = new MessageEmbed()
                    .setTitle(`\`Todays Events Are\``)
                    .setDescription(`Guild: \`${troopinf.WeekEvents[0].Saturday[0].Guild}\` and \`${troopinf.WeekEvents[0].Saturday[0].Individual}\``)
                    .setColor('RANDOM')
                    .setTimestamp()
                    return message.channel.send(saturdayAuto)
            };
            return message.channel.send("i dont know why this message even sent")
        }
    }
