require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const fs = require('fs-extra');
const path = require('path');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
const memoryFile = path.join(__dirname, 'bot_data', 'shared_memory.json');

// Load or initialize memory
let memory = fs.existsSync(memoryFile) ? fs.readJsonSync(memoryFile) : { prices: {} };

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;
  const args = message.content.split(' ');
  if (args[0] === '!run' && args[1] === 'shake' && args[2] === 'priceCheck' && args[3]) {
    const item = args[3].toLowerCase();
    let price = memory.prices[item] || "Price not found, check RS Wiki!";
    message.reply(`Price check for ${item}: ${price}`);
  } else if (args[0] === '!help') {
    message.reply("Commands: !run shake priceCheck [item]");
  }
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
  // Update memory with static data (manual or from RS Wiki API if free)
  memory.prices.sword = "100k GP";
  fs.writeJsonSync(memoryFile, memory);
});

client.login(process.env.BOT_TOKEN);