const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "2AE3iSRT#S3qxBqNxfCTD3AyunUrE2Mv-aJkeqMg9whXVJrnz5Cw",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/Avishka-web/5/blob/5a31450e7e176d039f7ade189cb4c80a5c818c21/AK.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "Hi, I'm Avishka_X-MD.I'm Alive now.🔰"  
};
