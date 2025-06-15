require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const fetch = require('node-fetch');
const { OpenAI } = require('openai'); // Updated import for v4

const configuration = {
  apiKey: process.env.OPENAI_API_KEY || process.env.ADMIN_API_KEY,
};
const openai = new OpenAI(configuration); // Updated constructor

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;
  const content = message.content.toLowerCase();

  if (content.includes('submit transaction')) {
    message.reply('Please use the Alt1 App to submit your Grand Exchange transaction!');
  } else if (content.includes('how much is')) {
    const item = content.replace('how much is', '').trim().toLowerCase();
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const data = await response.json();
      message.reply(`Test price for ${item}: $${data.id * 10}`);
    } catch (error) {
      message.reply('Fetch failed; using AI.');
      try {
        const prompt = `What is the price of ${item} in RuneScape?`;
        const aiResponse = await openai.chat.completions.create({
          model: 'gpt-3.5-turbo', // Updated to a valid v4 model
          messages: [{ role: 'user', content: prompt }],
          max_tokens: 50,
        });
        message.reply(aiResponse.choices[0].message.content.trim());
      } catch (error) {
        message.reply('AI lookup failed.');
      }
    }
  } else if (content.includes('hello') || content.includes('hi')) {
    message.reply("Welcome to rs3discordalt1bot! Use 'how much is [item]' or submit transactions via Alt1!");
  }
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.login(process.env.BOT_TOKEN);