const { cmd } = require('../command');
const axios = require('axios');

cmd({
    pattern: "pinterest",
    alias: ["pinterestdl", "pin", "pins", "pindownload"],
    desc: "Download media from Pinterest",
    category: "download",
    filename: __filename
}, async (conn, mek, m, { args, quoted, from, reply }) => {
    try {
        if (!args[0]) {
            return reply('❎ Please provide a Pinterest URL.\nExample: .pinterest https://pin.it/abc123');
        }

        const pinterestUrl = args[0];
        const response = await axios.get(`https://allstars-apis.vercel.app/pinterest?search=${encodeURIComponent(pinterestUrl)}`);

        if (!response.data?.status || !Array.isArray(response.data?.BK9)) {
            return reply('❎ Failed to fetch data from Pinterest.');
        }

        const media = response.data.BK9;
        const video = media.find(item => item.url?.endsWith('.mp4'));
        const image = media.find(item => item.url?.endsWith('.jpg') || item.url?.endsWith('.jpeg') || item.url?.endsWith('.png'));

        const caption = `*®𝐌𝐑 SANIJA 💚*\n\n💚 *DOWNLOAD PINTEREST* 💚\n\n╭━━〔 SANIJA 𝙈𝘿 〕━━┈⊷
┃◈• 👨‍💻 Owner: ${response.data.owner || "Unknown"}
┃◈• 🤖 Bot: SANIJA MD
┃◈• 💻 Platform: Linux
╰━━━━━━━━━━━━━━━⊷
> ⚡ Powered by ᴍʀ ʟᴀᴋꜱɪᴅᴜ ᶜᵒᵈᵉʀ`;

        if (video) {
            await conn.sendMessage(from, { video: { url: video.url }, caption }, { quoted: mek });
        } else if (image) {
            await conn.sendMessage(from, { image: { url: image.url }, caption }, { quoted: mek });
        } else {
            reply('❎ No valid media found in the link.');
        }

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } });
        reply('❎ An error occurred while processing your request.');
    }
});
