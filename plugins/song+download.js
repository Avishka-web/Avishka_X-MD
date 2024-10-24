const {cmd , commands} = require('../command')
const fg = require("api-dylux")
const yts = require("yt-search")


cmd({
    pattern: "song",
    desc: "download songs",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("plese enter your url or title")
const search =  await yts(q)
const data = search.videos[0];
const url =   data.url


let desc = `
💥 *Avishka_X-MD SONG DOWNLOADER* 💥

title: ${data.title}
description: ${data description}
time: ${data.timestamp}
ago: ${data.ago}
Views: ${data.views}

✅MADE BY AVISHKA_X🔰
`

await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download audio

  let down = await fg.yta(url)
  let downloadUrl = down.dl_url

 //download audio message
  await conn.sendMessages(from,{audio: {url:downloadUrl}.mimetype:"audio/mpeg"},{quoted:mek});


}catch(e){
console.log(e)
reply(`${e}`)
}
})

//========video_dl===========

cmd({
    pattern: "video",
    desc: "download videos",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("plese enter your url or title")
const search =  await yts(q)
const data = search.videos[0];
const url =   data.url


let desc = `
💥 *Avishka_X-MD VIDEO DOWNLOADER* 💥

title: ${data.title}
description: ${data description}
time: ${data.timestamp}
ago: ${data.ago}
Views: ${data.views}

✅MADE BY AVISHKA_X🔰
`

await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download video

  let down = await fg.ytv(url)
  let downloadUrl = down.dl_url

 //download video message
  await conn.sendMessages(from,{video: {url:downloadUrl}.mimetype:"video/mp4"},{quoted:mek});


}catch(e){
console.log(e)
reply(`${e}`)
}
})
