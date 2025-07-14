 const fs = require('fs');
 if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
 
 function convertToBool(text, fault = 'true') {
     return text === fault ? true : false;
 }
 module.exports = {
 SESSION_ID: process.env.SESSION_ID || "SANIJA-MD=OBUFAJYC#g68lajc8Z6yE5BGVPTpYiq01cWqNJd4Btejb0nknCHs", //ADD YOUR SESSION ID HERE
 AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
 MODE: process.env.MODE || "private",
 AUTO_VOICE: process.env.AUTO_VOICE || "true",
 AUTO_STICKER: process.env.AUTO_STICKER || "false",
 AUTO_REPLY: process.env.AUTO_REPLY || "false",
 ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/v02why.jpg",
 MENU_IMG: process.env.MENU_IMG || "https://files.catbox.moe/uhn8p1.png",
 ALIVE_MSG: process.env.ALIVE_MSG || "_Hi 💁🏽 How Can I Assist You. I Am alive Now. Thank You For Installing Me To Your Whatsapp",
 ANTI_LINK: process.env.ANTI_LINK || "true",
 ANTI_BAD: process.env.ANTI_BAD || "true",
 PREFIX: process.env.PREFIX || ".",
 FAKE_RECORDING: process.env.FAKE_RECORDING || "false",
 FAKE_TYPING: process.env.FAKE_TYPING || "false",
 ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
 CURRENT_STATUS: process.env.CURRENT_STATUS || "true",
 AUTO_REACT: process.env.AUTO_REACT || "false",
 HEART_REACT: process.env.HEART_REACT || "false",
 OWNER_REACT: process.env.OWNER_REACT || "false",
 BOT_NAME: process.env.BOT_NAME || "『 SANIJA-MD_V1 』",
 OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39",// omdbapi.com
 START_IMG: process.env.START_IMG || "https://files.catbox.moe/v02why.jpg",
 LOGO: process.env.LOGO || "https://files.catbox.moe/v02why.jpg",
 FOOTER: process.env.FOOTER || "SANIJA MD",
 BUTTON: process.env.BUTTON || "true",
 MOVIE_API_KEY: process.env.MOVIE_API_KEY || "sky|be538a46034c192460b9ac614a00d705c7fbd7cb",
 MONGODB: process.env.MONDODB || "mongodb+srv://rafama4631:fXX1CtlsNX8lONRc@manudb.oygo33i.mongodb.net",
 CAPTION: "> *NADEEN-MD*",
 JIDS: [120363401116280569@g.us],
 SUDO: ['94711451319','94779483535','94724481155']
 };
