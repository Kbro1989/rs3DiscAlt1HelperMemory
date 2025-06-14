require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const fetch = require('node-fetch');
const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY || process.env.ADMIN_API_KEY,
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
      message.reply('Fetch failed; using AI.');
      try {
        const prompt = `What is the price of ${item} in RuneScape?`;
        const aiResponse = await openai.createCompletion({
          model: 'text-davinci-003',
          prompt: prompt,
          max_tokens: 50,
        });
        message.reply(aiResponse.data.choices[0].text.trim());
      } catch (error) {
        message.reply('AI lookup failed.');
      }
    }
  }

  if (content.includes('hello') || content.includes('hi')) {
    message.reply("Welcome to rs3discordalt1bot! Ask 'how much is [item]'!");
  }
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.login(process.env.BOT_TOKEN);