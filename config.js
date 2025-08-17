const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ALI-MD~H4sIAAAAAAAAA61VO4/bRhD+K8G2EiyS4lPAAaFIUa/TW6QkBilW5PItklou9TIE2EAqB2lSuYibxIADIwhSBAkQ2D/BfS5V0qY5/4SAujv7ADv2BQiLwe5wOfPNt/MN74M48TPURXtQuw9S7G8gQcWS7FMEaqCeOw7CoAxsSCCoAbF9PvVsNNJo8yDTFO5aeYdqJuak7fWDrnUeOcNRbhreVGfPwLEM0nwZ+dYHAh7a+dBIA352kA/ObC3ng2BRXfSaOybyd4ncWy2l9cY4NAStdwaORUToYz92G6mHVgjDqIv2Q+jju8EfqGpshdMSWfWZ7czrTfeB2LVWa4tz88YiFOw0tGlzmgmr0d3g93v2xjogFkWNc2VlRkOpN2gvbYWm6jtqbNr9VGqpU+xwOnUFP/PdGNltG8XEJ/s78x52hO2EMLpCGdtOZ3zIzDlfWs6R6VrigPC6miIvMZoxZWR3A96mFx2n2qKcFs/tS11RlNZM6AUlgWz0XTs0BxWzK9moSanhbeBDfNMr4X/h3a3HM97MmnIp7WU5ToNuZSYoyMSDulTqT8drKIihS8vK7I68x94kd/fyEHfYsb7T53E+3+pxKaBcXxtv/e2QJuEgGIZJfIt3SHL8IZRamyt5iumrSX0xUdv6WEtpmLUcZ1NXjcXYiEPU5fPSqN8atpJWYjJIaxAjjbjt2GTNgMhY1yi2Af2lgTdCX9mzc9nfnp0qCtG+bYMafSwDjFw/IxgSP4kLn1QtA2hvJsjCiJzYBaoYKxhvaG7eC3qy2JKt7URQdj0u5oeUOezHVL7b8/UM5/oZKIMUJxbKMmS3/IwkeN9DWQZdlIHaZ6eLKmrGaJUQ1PFtUAMSLTIcxbGCyFCfZve2HiQZTNN7MSKgDBycrHoI1AjOURmcPmAZVZUpVqUoSmzQqspIlCYwjMzTEqvybLWocHWVdOqvUEbgKgU1WuA4lpEkkTuW/ycctKoJKt0QG7KgybLWEBlGkHiOUmlVYyn1ozg+L4MY7chVGxfkV+kycHycET3O0yiB9k2P37yElpXkMZnsY0spFgiD2i03IsSP3ayoLI8htjx/g5SiDlBzYJShN/eNMLJvarmeYUpiF21YpUfGhGa6oMBeBHqHm1qVe5eeGBanweWLp5cvH16+/Pry5ZeXL776+9nD108e//zJ6yePfyrML4X5sTC/FebbP1988fuzi0d/PL948OqHiwcXD149Lexfv35z2nx/st+d7POLBxePQBlEJzwiw4uMxEuUKDI0WyAq/Mc3TBTAbUSgH2WgBpT28jxN3HqjV2W9TG825YYrK64M3jJ3I8irjteCzVKInHARl/xtNx+16TTRJH0EWSK5Ky23ZsGIR5RuyOzZe4KAGlhWtExrSS0vbFqzDE6SBpS2Xn1t87PDFPmDfkpHLFR2db6yH26RS+/2skAPMNNtTLaVScc1xM6+0mcSkvJkxGhCKerK7lmRzUYb30K3k439XTCcM7ZWyqMurQ6NVqck6eJapqmDEaca0+HjoNsJSoeUh9XBfH1uDElblUbcwFJR0GT1elrxImjhZtjYnE9ZxBqBezUqTqMquv5F+Ncq9k9bx0eniXt99x/tkSvgRStTx/KtGNcz/F/mYH28EJgSN+eanUqSKThU+hDWHaPRzM+dRcdbxlpCDWKiaaMBOBaaSiNInASvQA1kqyUEZYCTvBBGO3aSD2RSZKotX5cdwYzIb8X2Hv0K4tWpIU7SFsy8IgDrdPqFcPZymk4IJDfSBXLxaNYEHP8BFNWdFeQIAAA=",  
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS JUST NOW SOUMYA 👻*",
// set the auto reply massage on status reply  
WELCOME: process.env.WELCOME || "true",
// true if want welcome msg in groups
GOODBYE: process.env.GOODBYE || "true",
// true if want goodbye msg in groups 
ADMIN_EVENTS: process.env.ADMIN_ACTION || "true",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups
ANTI_CALL: process.env.ANTI_CALL || "false",
REJECT_MSG: process.env.REJECT_MSG || "*📞 ᴄαℓℓ ɴσт αℓℓσωє∂ ιɴ тнιѕ ɴᴜмвєʀ уσυ ∂σɴт нανє ᴘєʀмιѕѕισɴ 📵*",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "true",
// make true if want auto voice reply if someone menetion you 
ALIVE_IMG: process.env.ALIVE_IMG || "https://qu.ax/zrqFX.jpg",
// add custom menu image url
PREFIX: process.env.PREFIX || ".", 
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "DERK- SOUMYA",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "ALI-MD",    
VPS: process.env.VPS || "",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
OWNER_REACT: process.env.OWNER_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
OWNER_NUMBER: process.env.OWNER_NUMBER || "918250547820",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "DERK SOUMYA",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "© ᴘσωєʀє∂ ву 🅓︎🅔︎🅡︎🅚︎ 🆂︎🅾︎🆄︎🅼︎🆈︎🅰︎⎯꯭̽💀",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD_WORD: process.env.ANTI_BAD_WORD || "false",
// false or true for anti bad words 
ANTI_BOT: process.env.ANTI_BOT || "true",
MODE: process.env.MODE || "group",
// make bot public-private-inbox-group 
ANTIVIEW_ONCE: process.env.ANTIVIEW_ONCE || "on",
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "true",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "false",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "918250547820",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
ANTI_DELETE: process.env.ANTI_DELETE || "true",
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
