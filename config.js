const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || " Hear",
ALIVE_IMG: process.env.ALIVE_IMG || "https://iili.io/2KVSNkv.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "*🔰𝐇𝐞𝐲 𝐈'𝐦 𝐀𝐯𝐢𝐬𝐡𝐤𝐚_𝐗-𝐌𝐃 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐁𝐨𝐭⚡*\n\n*🔔𝐈'𝐦 𝐀𝐥𝐢𝐯𝐞 𝐍𝐨𝐰❤️*\n\n*⚖️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : 𝐀𝐯𝐢𝐬𝐡𝐤𝐚_𝐗 𝐓𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐲``| 2024🤍*"  
};
