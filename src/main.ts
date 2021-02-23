import { CommandoClient } from 'discord.js-commando';
import path from 'path';
import { prefix, token } from './config.json';

const client = new CommandoClient({
  commandPrefix: prefix,
  owner: '633668381954015235',
  invite: '',
});

client.registry
  .registerDefaultTypes()
  .registerGroups([
    ['gear', 'commands for finding info on gear'],
    ['admin', 'AdminTools'],
  ])
  .registerDefaultGroups()
  .registerDefaultCommands()
  .registerCommandsIn(path.join(__dirname, 'commands'))

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag} (${client.user.id})`);
  client.user.setActivity('in development');
});

client.on('error', console.error);
client.login(token);