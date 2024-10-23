const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "https://iili.io/2KVSNkv.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "Hi, I'm Avishka_X-MD.I'm Alive now.🔰.     ❤️This bot is now making it will finished one day ❤️"  
};
