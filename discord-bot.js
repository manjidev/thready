const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.Guilds, Intents.FLAGS.GuildMessages, Intents.FLAGS.GuildMessageContent] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async message => {
  // Check if the message is in the specific channel
  if (message.channelId === '1115023649192300666') {
    // Create a new thread
    const thread = await message.startThread({
      name: 'New discussion',
      autoArchiveDuration: 60, // Duration until the thread is archived in minutes, choose between 60, 1440, 4320, 10080
    });

    // Send a message in the new thread
    thread.send(`${message.author.tag} has started a new discussion, please discuss it here.`);
  }
});

client.login('MTExOTM0NDA4MzM1ODQ1NzkyNg.GLXX94.iJWCDn_SABOAD1hH39wxxs00ZOr8s9V2HeEN68');
