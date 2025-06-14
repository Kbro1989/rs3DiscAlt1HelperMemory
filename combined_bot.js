require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const fs = require('fs-extra');
const path = require('path');
const { exec } = require('child_process');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
const memoryFile = path.join(__dirname, 'bot_data', 'shared_memory.json');

let memory = fs.existsSync(memoryFile) ? fs.readJsonSync(memoryFile) : { prices: {} };

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;
  const args = message.content.split(' ');
  if (args[0] === '!run' && args[1] === 'shake' && args[2] === 'priceCheck' && args[3]) {
    const item = args[3].toLowerCase();
    let price = memory.prices[item] || "Price not found, check RS Wiki!";
    message.reply(`Price check for ${item}: ${price}`);
    // Update memory and sync to GitHub
    memory.prices[item] = `Updated ${new Date().toISOString()}`; // Example update
    fs.writeJsonSync(memoryFile, memory);
    exec('git add bot_data/shared_memory.json && git commit -m "Updated memory" && git push', (err) => {
      if (err) console.error('Git push failed:', err);
    });
  } else if (args[0] === '!help') {
    message.reply("Commands: !run shake priceCheck [item]");
  } else if (args[0] === '!status') {
    message.reply("Bot is running locally. Memory synced via GitHub.");
  }
});

client.on('guildMemberAdd', member => {
  member.send("Welcome to rs3DiscAlt1Helper! Use !help for commands.");
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.login(process.env.BOT_TOKEN);