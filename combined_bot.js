require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const fetch = require('node-fetch');
const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;
  const content = message.content.toLowerCase();

  if (content.includes('how much is')) {
    const item = content.replace('how much is', '').trim().toLowerCase();
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const data = await response.json();
      message.reply(`Test price for ${item}: $${data.id * 10}`);
    } catch (error) {
      message.reply('Test error; AI disabled in test mode.');
    }
  }

  if (content.includes('hello') || content.includes('hi')) {
    message.reply("Test mode active! Welcome to rs3DiscAlt1Helper!");
  }
});

client.on('ready', () => {
  console.log(`Test mode logged in as ${client.user.tag}`);
});

client.login(process.env.BOT_TOKEN);