// ✅ Main .menu command with button/non-button mode
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

        const intro = `*👋 Hello ${pushname}*,

*╭─「SANIJA-MD-V1」*
*│◈ Runtime:* ${uptime}
*│◈ RAM:* ${usedRam}MB / ${totalRam}MB
*│◈ Platform:* ${host}
*│◈ Version:* 1.0.0
*╰───────────────●●►*`;

        if (config.BUTTON === true) {
            const sections = [{
                title: "📂 SELECT A MENU CATEGORY",
                rows: [
                    { title: "1 • MAIN", rowId: "maincmd" },
                    { title: "2 • SEARCH", rowId: "searchcmd" },
                    { title: "3 • DOWNLOAD", rowId: "downcmd" },
                    { title: "4 • GROUP", rowId: "groupcmd" },
                    { title: "5 • OWNER", rowId: "ownercmd" },
                    { title: "6 • FUN", rowId: "funcmd" }
                ]
            }];

            await conn.sendMessage(from, {
                text: intro + "\n\n🌟 *Select a menu category below*",
                footer: "POWERED BY SANIJA-MD",
                title: "📜 SANIJA-MD COMMAND MENU",
                buttonText: "Tap to View Options",
                sections
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

                const menuMap = {
                    '1': 'maincmd',
                    '2': 'searchcmd',
                    '3': 'downcmd',
                    '4': 'groupcmd',
                    '5': 'ownercmd',
                    '6': 'funcmd'
                };

                const selectedKey = menuMap[selected];
                if (selectedKey) {
                    await conn.sendMessage(from, { text: `.${selectedKey}` }, { quoted: mek });
                } else {
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


// ===============================
// 🔧 Individual .<category>cmd Commands
// ===============================

const { cmd: subCmd } = require('../command');

subCmd({ pattern: "maincmd", desc: "Main command list", category: "main" }, async (_c, _m, m, { reply }) => {
    reply(`🔧 *MAIN COMMANDS*
◈ alive
◈ menu
◈ menu2
◈ system
◈ ping
◈ runtime
◈ jid
📊 Total: 7`);
});

subCmd({ pattern: "searchcmd", desc: "Search commands", category: "main" }, async (_c, _m, m, { reply }) => {
    reply(`🔍 *SEARCH COMMANDS*
◈ yts
◈ image
📊 Total: 2`);
});

subCmd({ pattern: "downcmd", desc: "Download commands", category: "main" }, async (_c, _m, m, { reply }) => {
    reply(`📥 *DOWNLOAD COMMANDS*
◈ apk
◈ twitter
◈ gdrive
◈ mediafire
◈ fb
◈ play
◈ play2
◈ video
◈ video2
◈ yta
◈ tiktok
◈ ytmp3
📊 Total: 12`);
});

subCmd({ pattern: "groupcmd", desc: "Group commands", category: "main" }, async (_c, _m, m, { reply }) => {
    reply(`👥 *GROUP COMMANDS*
◈ mute
◈ unmute
◈ promote
◈ demote
◈ del
◈ add
◈ admins
◈ groupdesc
◈ groupinfo
◈ gname
◈ setsubject
◈ tagall
◈ hidetag
◈ unlock
◈ lock
◈ join
◈ leave
◈ invite
◈ tagadmin
📊 Total: 20`);
});

subCmd({ pattern: "ownercmd", desc: "Owner commands", category: "main" }, async (_c, _m, m, { reply }) => {
    reply(`👑 *OWNER COMMANDS*
◈ shutdown
◈ alive
◈ ping
◈ clearchats
◈ block
◈ unblock
◈ repo
◈ owner
◈ owner2
📊 Total: 9`);
});

subCmd({ pattern: "funcmd", desc: "Fun commands", category: "main" }, async (_c, _m, m, { reply }) => {
    reply(`🎮 *FUN COMMANDS*
◈ joke
◈ flirt
◈ truth
◈ dare
◈ fact
◈ pickupline
◈ character
◈ repeat
◈ spam
◈ readmore
📊 Total: 10`);
});
