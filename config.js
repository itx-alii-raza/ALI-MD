
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.session = "https://ali-pair-xode.onrender.com"; 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ALI-MD~H4sIAAAAAAAAA61VyY7bRhT8FaOvEizui4ABQlIUtYwkal+CHFpkcxFXNVsiKUOAb8khBgzEyM2YS5JbkFOAfI+POc0nBBzNZBzEGU8A89Agu5vv1at+Vf0KxImfoT4qQfMVSLF/hARVr6RMEWgC9eA4CIM6sCGBoAm4djvJzV40XMTFZjFtZbI05ZywhtYUw5tWFntjTVdmQyEaX4FzHaSHbehbTwTEYW7T5gkWRn96YCY7h2/E1lg9CTqpdSOdjUO7wIJpN7z1FThXEaGP/djVUw9FCMOwj0oT+vh58Ls6fdh3a+Ey8RyTFA2eM7Yj2tCNQ5RsmO4qz9FGWtOLPOw+D77M51SRR/xutco7kVGzC3e8HKwavXmqCoNjJs43ne5sJLqRdYGf+W6M7K6NYuKT8tm8W9ei3jezZYdrJ3ivusyym29Mij1x7dVqZ4vutqbukx1cRNTzgEuJsnZKZSXpi+Em1YzdFtvyqaeOD1zBMLu9PFWnFNI20uwfwE380CvB/+Fd7+HrXGrQE8tWbNtb7keuZAV71e3t09JbHK2Rs8S+yh0Xz4RfbLw4Ms2aLCK7kFcpFztJsTsM47jIx3l/t+xNENc9TTbF+BE+JAf8FMrdzi/szdHeJKu1OjZ080Tzpizb9CnnnInt4gbb6BM1NcP5aEMd022LhP0U4Wtbmfc3jjgh+2nBH0naCwQnVxvUYF9646u7igJUdm3QpM91gJHrZwRD4idxNcewfB1A+zhFFkbkjl7Q229ONAzbW2knEEffOoFSg8yYHuxToujb1JwErQ42WqtRcAXqIMWJhbIM2R0/IwkuByjLoIsy0Pz67qSqojGKEoJ6vl21LS3TAivSEitIX2Uvcw+SDKbpyxgRUAcOTqIBAk2CD6gOLj+0BaUtywLPKTIrcKLEMrrCKaraFts8o1FVidEl6cyPUEZglIImLfI8L7Isy57rXwaHwLYVRhUVhhNUnackVqTakipKjMCKFMfzT+Pg6C+Fg1EEgWq1FV3jaY3iRaEliSzPCxKly5SofQaHwJ2/qYMYFeSip6oLWKYOHB9nZB4f0jCB9oPYHhahZSWHmEzL2NKqF4RBk36cRoT4sZtVlR1iiC3PPyKtqgM0HRhm6O/GQxjZD7Xcm6mW2JUepJYwHS57BqiwV4H+xU3zU/SEF0ZEiZYlThJpWpQpudpZLdRBDKtg4Pbm7S8fXr+5vXn384sPr9/d3nz7x+37t+9e3L5/+301fFcNP3y4+f3P3369/fGnNxWD97VVUGxEoB9moAm0wSEqOVfVr0/rnTQ3DEV3Fc1VwCMXD1q/aCndpIk2Hq14YzoNlpF1PAYrt7Ony3nNaZQzE4+M1sr36OtO9+oTQUATdGouxXUsZ7EYH1kl6c2v04EzEnYCs/JWczfxlj2z5sJAGulBEIy24/yol84sLhuqdr3lotZ6Pt/2jq4/iw+esLSU1HJbylWVzUZH30IfJ1tBFFPeoF8bCuG0WLTSoZsyx3JunFRzBp1ed0EtZksHL8vFadm2BGwaO2Nd03v9/dRRtbDGxcss7fCF2Nqy8dx0J0bPVS4udOeC4f3t49/7g3/36fjozszvj+uzp34BXjUnda5/FOP+evgPi1XhEkIlaIW1SRCk7TS+Fvk2pwrECs24IQUn4eS5NJfY06IE50olaQiJk+AINAGMbZzc9RRODlW3d2MneSKZplBd9d5/Q5gR5VFBnxAlQ192mThJOzDzQBOwzjrX+pUcSiVNpwSSB0ECpXrUcgjOfwGafKJeQwkAAA==", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by ALI-MD", // // Input Yours custom...
MODE: process.env.MODE || "public", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "923003588997", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "𝐀ɭīī 𝐈𝐍𝅦𝐗īī𝐃𝐄 ‹³策", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "6.0.0",
ANTILINK: process.env.ANTILINK || "false", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*📞 ᴄαℓℓ ɴσт αℓℓσωє∂ ιɴ тнιѕ ɴᴜмвєʀ уσυ ∂σɴт нανє ᴘєʀмιѕѕισɴ 📵*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "𓆩ု᪳𝐀ɭīī 𝐌Ɗှ᪳𓆪", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://files.catbox.moe/2ka956.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "ALI MD ALIVE",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
//not working for the moment do don't on it
GOODBYE: process.env.GOODBYE || "false", //not working for the moment do don't on it
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Asia/Karachi", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
