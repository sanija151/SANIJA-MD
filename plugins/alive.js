const config = require("../config");
const os = require("os");
const fs = require("fs");
const {
  runtime
} = require("../lib/functions");
const { cmd } = require("../lib/command");

cmd({
  pattern: "alive",
  react: "👨‍💻",
  alias: ["online", "test", "bot"],
  desc: "Check bot online or not.",
  category: "main",
  use: ".alive",
  filename: __filename,
}, async (conn, mek, m, {
  from,
  prefix,
  pushname,
  reply
}) => {
  try {
    // Determine hosting provider based on hostname length
    let hostname = os.hostname();
    if (hostname.length === 12) hostname = "replit";
    else if (hostname.length === 36) hostname = "heroku";
    else if (hostname.length === 8) hostname = "koyeb";

    // Alive caption
    const statusMsg = `\`\`\`👋 Hello ${pushname}, I'm Alive!\`\`\`\n
*🚀 Version:* ${require("../package.json").version}
*🧠 Memory:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(os.totalmem() / 1024 / 1024)}MB
*⏱ Runtime:* ${runtime(process.uptime())}
*📍 Platform:* ${hostname}

🐼 This bot is the hard work of our technical team and is owned by us. Unauthorized re-uploading or cloning is prohibited.

🌻 Have A Nice Day 🌻`;

    // Fake loading animation
    const loadingStates = ["LOADING ●●○○○○", "LOADING ●●●●○○", "LOADING ●●●●●●", "`COMPLETED ✅`"];
    const baseMsg = await conn.sendMessage(from, { text: "" });

    for (const state of loadingStates) {
      await conn.sendMessage(from, {
        text: state,
        edit: baseMsg.key
      });
    }

    // Button Mode
    if (config.BUTTON === "true") {
      await conn.sendMessage(from, {
        image: { url: config.LOGO },
        caption: statusMsg,
        footer: config.FOOTER,
        buttons: [
          { buttonId: prefix + "menu", buttonText: { displayText: "MENU" }, type: 1 },
          { buttonId: prefix + "ping", buttonText: { displayText: "PING" }, type: 1 },
        ],
        headerType: 1,
        viewOnce: true
      }, { quoted: mek });
    }

    // List Mode (nonbutton)
    else if (config.BUTTON === "false") {
      const sections = [
        {
          title: "",
          rows: [
            { title: "1", rowId: prefix + "menu", description: "COMMANDS MENU" },
            { title: "2", rowId: prefix + "ping", description: "BOT SPEED" }
          ]
        }
      ];

      await conn.replyList(from, {
        image: { url: config.LOGO },
        caption: statusMsg,
        footer: config.FOOTER,
        title: "",
        buttonText: "*🔢 Reply below number*",
        sections
      }, { quoted: mek });
    }

  } catch (err) {
    console.error(err);
    reply("❌ ERROR occurred in alive command.");
  }
});
