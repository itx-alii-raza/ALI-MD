
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.session = "https://ali-pair-xode.onrender.com"; 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ALI-MD~hETMsPVK7nwRBa4NzqcM", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
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
// That's All...ALI-MD~H4sIAAAAAAAAA62W227iSBCGX2XUt6Ch3T4jRVqfcYBgcIDAai8au23a+ITd5uBRHmHfZl9o32RlkuyMNLOZrDR37Xa76qvqqr/8BeQFrcmYXMHwCygresKMdEt2LQkYAr2JIlKBPggxw2AIqHdWjio57Zl9kopkvYZuz7rf4ZPnSxc+3+AiI9t2TNYj4Q4890HZ7FIavGMwlHiHoEQ2LOgvtbIp4pGTeEIg3dPULCByno6b5OkU7drDHXjuLGJa0Ty2yj3JSIXTMbl6mFYfwz8atkKlNF8k2xWUWHuWvY3CjZx4FRjxzKrm7b4Zp1tnityP4V81O5nvYbLV4cUQV94Mrfee4jtnN1o0yqynPh08/RSldl6/4Nc0zknohiRnlF0/nHfDczU7csdb98BWj5xXTOKiFRezeaLTtFxx28JbKKJXTfLiY+CmEEUJmhDnMVAi3DpNcMArs3f0w+oyG/BBpiT5kXkYv+X9Bdyr3mrl8H/yXs+43t7iCExG+bhx0PmxFS8XKjHTaHx7OhCnvm30yDVebj6Gz98v26xZpk02duAxGNyr6wvjTqP6kPg6Xh83u513FNB6Q7Wv+Jg11XuUcGD0qIcWC1rP4uXlQCVhWqwephneRaIqnTV7oVjW9WFtFQmS5OpEWHDk/YXs6ZZZ7ODMG01bx9zNMuZOzoe9g4yRPr+7RXQgVzcEQ+65DyoS05pVmNEi7/YQr/YBDk8+CSrCbukF2U6i851TaWwcKZun+5kxQD7/aOXcdbsbM7g7baDdanFONnegD8qqCEhdk3BEa1ZU1ympaxyTGgx/v91UF3RFsoKRexqCIVA5GcqCgKAiqr/Vn897zGpclp9zwkAfRFWRTQkYsqohfXD7gBNVpKmqgDhTFXSJV1RNk00F8YbG25LOdSFmL04faUZqhrMSDDlZFDlFEAX5uf9rOARVkhVDVnnTFJFqK7opKzwyRAPaFjT5n3Gov4pD0zSZMzWRQ1ATeGRKgmgpFodsWbegpOnvc4jKL+PQdV2TZANCWVJEqJqKbOomkpAqywbHme9zSNKv4lAlURARD3VZEA0IbRNxOod0TVYUZIqK8D6HDJ//6IOcXNiLvnRdwXN9ENGqZsu8KdMCh2/i8/YSB0HR5My/5oHRLUgFht9sE8ZoHtddZE2Oq2BPT8To4gDDCKc1+bcRSUXCt1heh4tRhJ0+KI9bUZ1KIujYO0Pf5WaI+O/Tk96OIUlSRI5TeFmBHOwOdvt9kOPOFuA+ffr0919/dnl5Je4chIRhmtad4N+v21R0bevelFVl7jiaFWtGrIGvEb4p2oti0DOejCQ4CljkokvLlpf5zCSikEzPs6fKpRcoeaG636/8+O4HRjr5myyO4iDaqOdlO3Lt1hIutLeYDtYmepwedWgKS35Wk7S1w5Zyk4NjzP3Rojfh/GURepasmuojl/dEc+TPtQT528tDYsZ3nbeQnGhAvnWGjycyyVbsAUHSnMnAnajLbXaJeE/flUIvKrTFuZhOBHlXn/3kMlVmMN+qEVemg1MWOLmcPbDSKw5hOF8fkt3DxtzXRvyitTetT19nLH1VQXp7jCi5jazXW/jpXb6AdyUHn/vf2Hgdgv8xSPRN7dBLj+n85On6UAfyaro0Y74hbjs1U+nq1uEs4aPNZrUswHNX+2WKWVRUWZeZPKyKW6lURdPVsJtHxXu/Bhp036ZMimumfe2LH0kg93LKq4pyhOt9p6nbhSf5XZFftbL0GWZvbdbJnKYZvT14/gdlQ0UxKQoAAA==
