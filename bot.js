const mineflayer = require('mineflayer');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

// Tạo bot
const bot = mineflayer.createBot({
  host: 'wood.pikamc.vn',
  port: 25283,
  username: 'botgay123'
});

// Đơn giản chỉ đứng yên và log
bot.on('spawn', () => {
  console.log('🤖 Bot đã vào server!');
});

// Route giữ web sống
app.get('/', (req, res) => res.send('Bot is alive!'));
app.listen(port, () => console.log(`🌐 Web service running on port ${port}`));
