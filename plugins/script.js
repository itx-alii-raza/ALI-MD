

/*
const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "script",
    alias: ["sc","repo","info"],
    desc: "bot repo",
    react: "🤖",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`
*╭──────────────●●►*
> *BOT OWNER:*
*|* *RAHEEL*

> *RAHEEL-MD-V1 REPO:*
*|* https://github.com/MIANG-8

> *SUPPORT GROUP:*
*|* https://whatsapp.com/channel/0029Vb5DD4s8aKvQg0TVPN3B
*╰──────────────●●►*

> *CREATED BY RAHEEL TECH*
`
await conn.sendMessage(from, { text: repo ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: false,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363318387454868@newsletter',
      newsletterName: "𝐑𝐀𝐇𝐄𝐄𝐋 𝐌Ɗ 🍁",
      serverMessageId: 999
    },
externalAdReply: { 
title: '𝐑𝐀𝐇𝐄𝐄𝐋 𝐌Ɗ 🍁',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://github.com/MIANG-8" ,
thumbnailUrl: "https://i.ibb.co/Zp4sXy4B/lordali.jpg" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`${e}`)
}
});
*/

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

const fetch = require('node-fetch');
const config = require('../config');    
const { cmd } = require('../command');

cmd({
    pattern: "script",
    alias: ["repo", "sc", "info"],
    desc: "Fetch information about a GitHub repository.",
    react: "🎗️",
    category: "info",
    filename: __filename,
},
async (conn, mek, m, { from, reply }) => {
    const githubRepoURL = 'https://github.com/MIANG-8';

    try {
        // Extract username and repo name from the URL
        const [, username, repoName] = githubRepoURL.match(/github\.com\/([^/]+)\/([^/]+)/);

        // Fetch repository details using GitHub API
        const response = await fetch(`https://api.github.com/repos/${username}/${repoName}`);
        
        if (!response.ok) {
            throw new Error(`GitHub API request failed with status ${response.status}`);
        }

        const repoData = await response.json();

        // Format the repository information
        const formattedInfo = `*𝐇𝐄𝐋𝐋𝐎 𝐓𝐇𝐄𝐑𝐄 𝐑𝐀𝐇𝐄𝐄𝐋-𝐌𝐃 𝐖.𝐀 𝐁𝐎𝐓 𝐔𝐒𝐄𝐑!😇👑* 

> *sɪᴍᴘʟᴇ, ɪᴄʏ, ᴄᴏʟᴅ  & ʀɪᴄʜ ʟᴏᴀᴅᴇᴅ ʙᴏᴛ ᴡɪᴛʜ ᴀᴍᴀᴢɪɴɢ ғᴇᴀᴛᴜʀᴇs, ᴅᴏɴ'ᴛ ғᴏʀɢᴇᴛ ᴛᴏ sᴛᴀʀ & ғᴏʀᴋ ᴛʜᴇ ʀᴇᴘᴏ🌟🍴*

*\`REPO LINK:\`📮*
> https://github.com/MIANG-8/fork

*\`BOT GC LINK:\`🪀*
> https://whatsapp.com/channel/0029Vb5DD4s8aKvQg0TVPN3B

*\`BOT NAME:\`🤖*
> ${repoData.name}

*\`OWNER NAME:\`👨‍💻*
> 𝐑𝐀𝐇𝐄𝐄𝐋

*\`STARS:\`🌟*
> ${repoData.stargazers_count}

*\`FORKS:\`🍴*
> ${repoData.forks_count}

*\`DESCRIPTION:\`📑*
> ${repoData.description || 'No description'}\n
──────────────────
\n> *© POWERED BY RAHEEL* 🎐`;

        // Send an image with the formatted info as a caption and context info
        await conn.sendMessage(from, {
            image: { url: `https://i.ibb.co/Zp4sXy4B/lordali.jpg` },
            caption: formattedInfo,
            contextInfo: { 
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363318387454868@newsletter',
                    newsletterName: '𝐑𝐀𝐇𝐄𝐄𝐋 𝐌Ɗ 𝐒ʊ̊𝐏𝐏๏፝֟ɼʈ  ⃪🤖͎᪳᪳𝆺𝅥',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

        // Send the audio file with context info
        await conn.sendMessage(from, {
            audio: { url: 'https://cdn.ironman.my.id/i/wp4a7x.mp4' },
            mimetype: 'audio/mp4',
            ptt: true,
            contextInfo: { 
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363318387454868@newsletter',
                    newsletterName: '𝐑𝐀𝐇𝐄𝐄𝐋 𝐌Ɗ 𝐒ʊ̊𝐏𝐏๏፝֟ɼʈ  ⃪🤖͎᪳᪳𝆺𝅥',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (error) {
        console.error("Error in repo command:", error);
        reply("Sorry, something went wrong while fetching the repository information. Please try again later.");
    }
});
                
