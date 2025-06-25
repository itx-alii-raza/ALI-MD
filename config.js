const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ALI-MD~qI0H0LyB#DxB127YnAEZ-xQSNEQ5z4S6Eweu34ear4Sn7DKKmXHo",  
//chatbot integration 
CHATBOT: process.env.CHATBOT || "on",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS JUST NOW Aʙнɪ࿐™......👻*",
// set the auto reply massage on status reply  
WELCOME: process.env.WELCOME || "true",
// true if want welcome msg in groups
GOODBYE: process.env.GOODBYE || "true",
// true if want goodbye msg in groups 
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
ANTI_LINK_WARN: process.env.ANTI_LINK_WARN || "true",
ANTI_LINK_DELETE: process.env.ANTI_LINK_DELETE || "warm",
// make anti link true,false for groups
ANTI_CALL: process.env.ANTI_CALL || "true",
REJECT_MSG: process.env.REJECT_MSG || "*📞 ᴄαℓℓ ɴσт αℓℓσωє∂ ιɴ тнιѕ ɴᴜмвєʀ уσυ ∂σɴт нανє ᴘєʀмιѕѕισɴ 📵*",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "true",
// make true if want auto voice reply if someone menetion you 
ALIVE_IMG: process.env.ALIVE_IMG || "https://qu.ax/zrqFX.jpg",
// add custom menu image url
PREFIX: process.env.PREFIX || ".", 
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "ᴮᵒᵗℚ𝖚ℰℰℕ࿐™......",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "Aʙнɪ࿐™......",    
VPS: process.env.VPS || "",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
OWNER_REACT: process.env.OWNER_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
OWNER_NUMBER: process.env.OWNER_NUMBER || ("918447595871","919266372363",)
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "𓄂꯭𐎓⃝꯭🖤꯭𓆩꯭᪵𝐀 ꯭𝐁 ꯭𝐇 ꯭𝐈𓆪᪵ ꯭꯭🜲꯭‖꯭ॐ꯭°༏꯭༏꯭",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "© ᴘσωєʀє∂ ву ᴮᵒᵗℚ𝖚ℰℰℕ࿐™......",
// add bot desp name    
LIVE_MSG: process.env.LIVE_MSG || "HEY IM ALIVE",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD_WORD: process.env.ANTI_BAD_WORD || "true",
// false or true for anti bad words 
ANTI_BOT: process.env.ANTI_BOT || "true",
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTIVIEW_ONCE: process.env.ANTIVIEW_ONCE || "off",
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "true",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || ("919266372363","918447595871",)
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
ANTI_DELETE: process.env.ANTI_DELETE || "false",
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
