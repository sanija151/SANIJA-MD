const { readEnv } = require('../config');
const config = require('../config');
const { cmd } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');

cmd({
    pattern: "menu",
    alias: ["list"],
    desc: "bot's commands",
    react: "📜",
    category: "main"
}, async (conn, mek, m, {
    from, pushname, reply
}) => {
    try {
        const uptime = runtime(process.uptime());
        const usedRam = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
        const totalRam = Math.round(os.totalmem() / 1024 / 1024);
        const host = os.hostname();

        const intro = `*👋 Hello ${pushname}*

*╭─「SANIJA-MD-V1」*
*│◈ Runtime:* ${uptime}
*│◈ RAM:* ${usedRam}MB / ${totalRam}MB
*│◈ Platform:* ${host}
*│◈ Version:* 1.0.0
*╰───────────────●●►*`;

        if (config.BUTTON === true) {
            await conn.sendMessage(from, {
                image: { url: "https://files.catbox.moe/uhn8p1.png" },
                caption: intro + `

🌟 *Select a category below*`,
                footer: "POWERED BY SANIJA-MD",
                buttons: [
                    { buttonId: "menu main", buttonText: { displayText: "1 • MAIN" }, type: 1 },
                    { buttonId: "menu search", buttonText: { displayText: "2 • SEARCH" }, type: 1 },
                    { buttonId: "menu download", buttonText: { displayText: "3 • DOWNLOAD" }, type: 1 },
                    { buttonId: "menu group", buttonText: { displayText: "4 • GROUP" }, type: 1 },
                    { buttonId: "menu owner", buttonText: { displayText: "5 • OWNER" }, type: 1 },
                    { buttonId: "menu fun", buttonText: { displayText: "6 • FUN" }, type: 1 }
                ],
                headerType: 4
            }, { quoted: mek });
        } else {
            const desc = intro + `

*╭───────────────◉*
*├ 1 • MAIN*
*├ 2 • SEARCH*
*├ 3 • DOWNLOAD*
*├ 4 • GROUP*
*├ 5 • OWNER*
*├ 6 • FUN*
*╰───────────────◉*

_🌟 Reply with the number to view that category._

> *POWERED BY SANIJA-MD*`;

            const msg = await conn.sendMessage(from, {
                image: { url: "https://files.catbox.moe/uhn8p1.png" },
                caption: desc
            }, { quoted: mek });

            let isHandled = false;

            const handler = async (msgUpdate) => {
                if (isHandled) return;
                const newMsg = msgUpdate.messages?.[0];
                if (!newMsg?.message?.extendedTextMessage) return;

                const context = newMsg.message.extendedTextMessage.contextInfo;
                const selected = newMsg.message.extendedTextMessage.text.trim();

                if (context?.stanzaId !== msg.key.id) return;
                isHandled = true;

                const sendCategory = (category, commandsList) => {
                    reply(`╔════════════════╗\n║ ${category} ║\n╚════════════════╝\n${commandsList}\n\n> 💡 *POWERED BY SANIJA-MD*`);
                };

                switch (selected) {
                    case '1':
                        sendCategory("🔧 MAIN COMMANDS", "◈ alive\n◈ menu\n◈ menu2\n◈ system\n◈ ping\n◈ runtime\n◈ jid\n📊 Total: 7");
                        break;
                    case '2':
                        sendCategory("🔍 SEARCH COMMANDS", "◈ yts\n◈ image\n📊 Total: 2");
                        break;
                    case '3':
                        sendCategory("📥 DOWNLOAD COMMANDS", "◈ apk\n◈ twitter\n◈ gdrive\n◈ mediafire\n◈ fb\n◈ play\n◈ play2\n◈ video\n◈ video2\n◈ yta\n◈ tiktok\n◈ ytmp3\n📊 Total: 12");
                        break;
                    case '4':
                        sendCategory("👥 GROUP COMMANDS", "◈ mute\n◈ unmute\n◈ promote\n◈ demote\n◈ del\n◈ add\n◈ admins\n◈ groupdesc\n◈ groupinfo\n◈ gname\n◈ setsubject\n◈ tagall\n◈ hidetag\n◈ unlock\n◈ lock\n◈ join\n◈ leave\n◈ invite\n◈ tagadmin\n📊 Total: 20");
                        break;
                    case '5':
                        sendCategory("👑 OWNER COMMANDS", "◈ shutdown\n◈ alive\n◈ ping\n◈ clearchats\n◈ block\n◈ unblock\n◈ repo\n◈ owner\n◈ owner2\n📊 Total: 9");
                        break;
                    case '6':
                        sendCategory("🎮 FUN COMMANDS", "◈ joke\n◈ flirt\n◈ truth\n◈ dare\n◈ fact\n◈ pickupline\n◈ character\n◈ repeat\n◈ spam\n◈ readmore\n📊 Total: 10");
                        break;
                    default:
                        reply("❌ Invalid option. Please enter a number between 1 and 6.");
                }

                conn.ev.off('messages.upsert', handler);
            };

            conn.ev.on('messages.upsert', handler);
        }

    } catch (err) {
        console.error(err);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } });
        reply('⚠️ An error occurred while showing the menu.');
    }
});
