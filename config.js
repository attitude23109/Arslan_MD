it'sconst fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0lTN0dnMFBFdGU3c0d3cnlzUFNJa3RBemM1aXpCRWU5SE1RaXFaNUxrYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibEdlYlVBeWd3ZXhxOTk2blo4TGhGU2k5ZDY5YUxsMGdpdzhYQVgyd2RYWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzR0pHQ3RiZEc2aE56eUJRVEJ5bnREM2drbnh1Vjk0QjdOc2Z3eEt4KzNrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBampDdjhiM0VQKzVzcyt0dHBLSjlqMXVuUmt1WnNRRXljK0tGMXplV3pnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlEZ25sVmJHSEJHZkxQbzFmU0xoRmpFakdaMThuOWFRVk85MkIvd3I1a0U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxHT05vcHNaQ3BoaEhnMjNoWm5WTmZUSkZxeUpicGpCRE0wUFZBWWk3Mk09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK045KzZyeER1VytadG5zM0ZYTGVrOXFObXpzODNFbXBoRFFVS0xWTWtsbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUDdKMlQ1MDdlRjgzY2ErSzg3S0NzZmNUWk1UbUZDTk1CQnRCazJKNmhrQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNreWtMZkFTeDdRcFo5QVNFVnZCVEtXWFdIaC9INStER3c4cEZ4NWF6ZHZDL1F1R2o1RnVQUXZYMFVVVDlQbXRka0VTN1VjSSt4NHFVaU1Pd3A3UkR3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIxLCJhZHZTZWNyZXRLZXkiOiJOQUNsbVN2UjlLQTR6eFcrdXlwVVc2VVlVZUg1dXdsNmU0eFQ5RURSRUJNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk4OTE5Nzc2MTI2MEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQzVFQTg5RjQzRDYwMEFDNTM1ODZDMjZDNjc1REQ3MCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU4NDgzNzIxfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5ODkxOTc3NjEyNjBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUMwQkM5NzYwRkM2NEE5QkM4QTMxMzY1MTQxMEVBMEYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1ODQ4MzcyMn0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTg5MTk3NzYxMjYwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDNUEzODg0NTcyRjE2NzMzNTYwQkM1MUEyOUIxOTJCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTg0ODM3MjN9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IjVLTVlBNjJYIiwibWUiOnsiaWQiOiI5ODkxOTc3NjEyNjA6NEBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjIzODk3Njg3OTM1Mzk3ODo0QGxpZCIsIm5hbWUiOiJDaGFuZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTkMrOXF3REVJU3F3Y1lHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNjZ5em1DMXdmTzZaT3pmWHNBRjg0TUxHMURzdnVMUVEwNVJKaXAxL3Ftcz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWFlKNXJBaGJkYkdFNUFZZHdCY25XUjFpYWNZbDEzb2xVZUdYQlM0UW1JV2FhMlZqZEc3cndhaFJkVnpzRVJhaUNBeGVnRzlJcy9tL2Q3NnpoQkdhQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6InZyVDR5MStJZUFmTDNTcDBnVDlsdisveWc4UkxMMFFOa3EvL0xmcXB1WUkxMWZjMjBOOTJSa3UrMzEyVEZ5d3pTRlAwRS9BVVNpMWlINVMyaGlzN0NBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTg5MTk3NzYxMjYwOjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZXVzczVndGNIenVtVHMzMTdBQmZPREN4dFE3TDdpMEVOT1VTWXFkZjZwciJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUVnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU4NDgzNzIwLCJsYXN0UHJvcEhhc2giOiIyUDFZaGYiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU5SUyJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY Arslan_MD 🇵🇰*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/lcpy9f.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "Arslan_MD",
// add bot namw here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// true to get auto status react
STICKER_NAME: process.env.STICKER_NAME || "Arslan_MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923237045919",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "ArslanMD Official",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 Arslan_MD*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/lcpy9f.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive*Arslan_MD*🇵🇰",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
