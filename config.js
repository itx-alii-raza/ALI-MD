
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.session = "https://ali-pair-xode.onrender.com"; 
 ALI-MD~H4sIAAAAAAAAA5VU25KiSBD9l3rVGJGbSERHLCoqKIKNILgxDwUUN7lJFQpO+O8T2N3T87A72/tWJBmZJ885mT9AUSYYbVAHxB+gqpMrJKh/kq5CQASzJgxRDYYggAQCEZxXKyQcT/fc5/ijRDsDTdV2xZXN5rYb0Pni6Haueh15acG+gMcQVI2XJf4fClKnaVgeIn8gUIb02mnwtHCVcM8dldTgBGXPVvQSmSmLKOkFPPqKMKmTIpKrGOWohtkGdQZM6q/BR2rbZssqmNXCzrOdAFeZDUNh+3oYh+fB6V5Xo9nRYW1+WX4N/tocaeoVXrwm8LXINLLz5pxvYnZj7NvmRo+DxdKNL41dMvgNPk6iAgVKgAqSkO7LvPvrxakYzQTdZql8MRK49dW4eEl4mJjLg3HN1VbWOiWXzVz4GvDBtpNvYUgJ6kQVEtbKXJIJd8TuBvN7dOPt2X6zFjRs1Z32O3Cj/vDK+f/wDmebQySPsHxv3WVsaapwoQeJv2rCnLiso9wu2Ty6ngaO5X7RNlF4y3TJOG92tNMuR+VUz+9VanQC602cOdOFXtzOx69OKn/Ch6Sp/4SypOzzdu6eynJ93UjWIS00Zqtn7knbN5l3T2VoVkeeP9+YQxln3A7Fjr51MzWiUTW9hczF2trtSBtctgQpr+Mdr17sJHp5TnRGnRIAcfwYghpFCSY1JElZPGPCeAhgcDWRXyPypBcQWZDJvtLv3kVXiwnr7A6BKp8Hi10zOc7YVrMO651qSctQeAFDUNWljzBGwTrBpKw7DWEMI4SB+Pf3IShQS96E69sx4yEIkxoTq2iqrITBh6ofP6Hvl01BzK7w5/0D1UCkPsOIkKSIcM9jU8Daj5MrmseQYCCGMMPo14SoRgEQSd2gX1s7L4Oe+L3Asivn1QRDkD8FSQIggul4Qk1YlqYEbirS9F/4260vC6vqW4EIGILsmUbzvMCNxwIzEagx1Sf28ccvgH29ABGYZBiIYK6a94xTlrJucgLer1aSEknzSAKfA30444355Aa3a55a+yRU6PZOrHavLxDHptpNd2olaSneCKZxbJvRyz8UASLY6Hh9I2etO7j3M7PnvWy09Wk7N+QVKWBlZ6xPgts43DR+BvFxZGAl9QZTq5QVrxqwjAXDGSXjSuf9pk5T2eB5JPU2GoIAXRMf/d7sGBejI7a7pjx7gibwTpSejFhnvIDdbQ7Sujuxmr6bt6zHmxyTFv4mm0ykS8mx5V13W7g/u4PdNJja02K7yPkmVxGO92+efe5M9n6rkqebeqn6zzBBz9UvYC/gf0v3Brx3GPUY/lbj/Zj8y0LOXLxK2gGZMVun22F/YmvWImIapNy1RcZ3Cg70lAld17ZK8Hh8H4IqgyQs67y/OUVQl0kAhqAum96yShGWf2g2lyhl9j55BjGRPtfgkOQIE5hXQBxPOI6asjQ3ecsy6rJaQxwDEbCnV4M3weMn579yd1QHAAA=
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
// That's All...
