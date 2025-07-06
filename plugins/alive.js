const config = require("../config");
const os = require("os");
const fs = require("fs");
const {
  runtime
} = require("../lib/functions");
const { cmd } = require("../command");
st _0x39e611 = {
  pattern: "alive",
  react: "👨‍💻",
  alias: ["online", "test", "bot"],
  desc: "Check bot online or no.",
  category: "main"
};
function _0x4fa466(_0x198f7c, _0x3ee1b0, _0x1f7616, _0x67bd77, _0x6fbf) {
  return _0x5d2a(_0x6fbf + 0x16e, _0x198f7c);
}
_0x39e611.use = ".alive";
_0x39e611.filename = __filename;
cmd(_0x39e611, async (_0x278a76, _0x7a9f33, _0x4f4baf, {
  from: _0x2d34a3,
  prefix: _0x1b257a,
  l: _0x187633,
  quoted: _0x39e886,
  body: _0x14a04a,
  isCmd: _0x7d1c09,
  command: _0x45f476,
  args: _0x145bec,
  q: _0x527a4c,
  isGroup: _0x5a44ff,
  sender: _0x4aaf94,
  senderNumber: _0x12469b,
  botNumber2: _0x329768,
  botNumber: _0x2dcb7a,
  pushname: _0x314fc7,
  isMe: _0x1ca3bf,
  isOwner: _0x1d0543,
  groupMetadata: _0x4c7e68,
  groupName: _0x57026b,
  participants: _0x45b21d,
  groupAdmins: _0x2c6073,
  isBotAdmins: _0x37292a,
  isAdmins: _0x48715f,
  reply: _0x22321c
}) => {
  try {
    if (os.hostname().length == 12) {
      hostname = "replit";
    } else {
      if (os.hostname().length == 36) {
        hostname = "heroku";
      } else {
        if (os.hostname().length == 8) {
          hostname = "koyeb";
        } else {
          hostname = os.hostname();
        }
      }
    }
    const _0x1a13c9 = "```👋 කොහිමද " + _0x314fc7 + " I'm alive now" + "```" + "\n    \n*🚀Version:* " + require("../package.json").version + "\n*⌛Memory:* " + (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + "MB / " + Math.round(require('os').totalmem / 1024 / 1024) + "MB\n*🕒Runtime:* " + runtime(process.uptime()) + "\n*📍Platform:* " + hostname + "\n\n🐼This is the result of our teams hard work and our technical cybers team owns the bots rights and code rights. Therefore, you have no chance to change and submit our bot under any circumstances And 100 Commands And logo, thumbnail,banner Maker Commands Ai Chatbot feathers On Our Bot\n                    \n*🌻Have A Nice Day..*🌻";
    var _0x2173e2 = ["LOADING ●●○○○○", "LOADING ●●●●○○", "LOADING ●●●●●●", "`COMPLETED ✅`"];
    const _0x3f2c5f = {
      text: ''
    };
    let {
      key: _0x541a80
    } = await _0x278a76.sendMessage(_0x2d34a3, _0x3f2c5f);
    for (let _0x514bed = 0; _0x514bed < _0x2173e2.length; _0x514bed++) {
      const _0x3605c0 = {
        text: _0x2173e2[_0x514bed],
        edit: _0x541a80
      };
      await _0x278a76.sendMessage(_0x2d34a3, _0x3605c0);
    }
    if (config.MODE === "nonbutton") {
      const _0x4f8e08 = [{
        'title': '',
        'rows': [{
          'title': '1',
          'rowId': _0x1b257a + "menu",
          'description': "COMMANDS MENU"
        }, {
          'title': '2',
          'rowId': _0x1b257a + "ping",
          'description': "VAJIRA-MD SPEED"
        }]
      }];
      const _0x8dace8 = {
        url: config.LOGO
      };
      const _0x2d457c = {
        caption: _0x1a13c9,
        image: _0x8dace8,
        footer: config.FOOTER,
        title: '',
        buttonText: "*🔢 Reply below number*",
        sections: _0x4f8e08
      };
      const _0xd9075f = {
        quoted: _0x7a9f33
      };
      return await _0x278a76.replyList(_0x2d34a3, _0x2d457c, _0xd9075f);
    }
    if (config.MODE === "button") {
      const _0x828ca4 = {
        url: config.LOGO
      };
      const _0x2490b6 = {
        displayText: "MENU"
      };
      const _0x4beb09 = {
        buttonId: _0x1b257a + "menu",
        buttonText: _0x2490b6
      };
      const _0x537104 = {
        displayText: "PING"
      };
      const _0x157fac = {
        buttonId: _0x1b257a + "ping",
        buttonText: _0x537104
      };
      const _0x55bce0 = {
        image: _0x828ca4,
        caption: _0x1a13c9,
        footer: config.FOOTER,
        buttons: [_0x4beb09, _0x157fac],
        headerType: 0x1,
        viewOnce: true
      };
      const _0x3e39a1 = {
        quoted: _0x4f4baf
      };
      _0x278a76.sendMessage(_0x2d34a3, _0x55bce0, _0x3e39a1);
    }
  } catch (_0x1baa40) {
    _0x22321c("*ERROR !!*");
    _0x187633(_0x1baa40);
  }
});
