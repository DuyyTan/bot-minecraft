const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: '103.161.113.60', // IP server m
    port: 25283,            // Port server
    username: 'DuyyBot',    // Tên bot
  });

  bot.on('error', (err) => {
    console.log('Bot error:', err.code);
    if (err.code === 'ECONNREFUSED') {
      console.log('Server offline, retrying in 10s...');
      setTimeout(createBot, 10000);
    }
  });

  bot.on('end', () => {
    console.log('Bot disconnected, reconnecting in 10s...');
    setTimeout(createBot, 10000);
  });
}

createBot();
