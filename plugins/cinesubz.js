const axios = require('axios');
const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson, fetchApi} = require('../lib/functions')
const fg = require('api-dylux');
const fetch = require('node-fetch');
var os = require('os')
const { File } = require('megajs');
const cinesubz = require('../lib/cinesubz')
const { storenumrepdata } = require('../lib/nonbutton')
function formatNumber(num) {
    return String(num).padStart(1, '0');
} 

//===============================================================================
var url = "Give me movie url ?"
var valid_url = "This Url Type is Invalid"
var not_sudo = 'Your not premier user 🚫									   					  	                 💸 please contact us and purchase the movie download facility                                                                                                              🌠Contact Owner : 0767858145'
var not_fo = 'I can\'t find anyting'
var giveme = "Please give me movie or tv show name"
var err = '❗ error'
var oce = ''

const apilink = "https://lakaofc-api.vercel.app"

//===============================================================================

cmd({
    pattern: "cinesubz",
    alias: ["mv2","cine"],
    react: "🎥",
    desc: "Download movie from cinesubz.co",
    category: "movie",
    use: '.cinesubz < Movie Name >',
    filename: __filename
},
async(conn, mek, m,{from, l, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, isDev, senderNumber, isPreUser, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const sudoNumber = config.SUDO;
	
	
if(!q) return await reply(giveme)
	
const movs = await fetchApi(`${apilink}/movie/cinesubz/search?q=${q}`)
var ty = ''
let mov = movs.data.data
let numrep = []
if (movs.data.data.datalength < 1) return await reply(not_fo)

		
              let cot = `🔮 *𝖲𝖠𝖭𝖨𝖩𝖠 𝖬𝖣 𝖢𝖨𝖭𝖤𝖲𝖴𝖡𝖹 𝖬𝖮𝖵𝖨𝖤 𝖲𝖤𝖠𝖱𝖢𝖧* 🔮


📲 Input: *${q}*


`
	
	                mov.forEach((movie, index) => {
				
		  if(data.type == 'TV' ) ty = 'citvjid '
                  if(data.type == 'Movie' ) ty = 'cimvjid ' 
				
                  cot += ` *${formatNumber( index + 1)} ||* ${data.title.replace(/Sinhala Subtitles \| සිංහල උපසිරැසි සමඟ/g , '').replace('Sinhala Subtitle | සිංහල උපසිරැසි සමඟ' , '')} | ${data.type}\n\n`
				
                  numrep.push(`${prefix}${ty} ${data.link}` )
                  })	      
  
	

	 const mass = await conn.sendMessage(from, { text: `${cot}\n\n${config.FOOTER}` }, { quoted: mek });
	
          const jsonmsg = {
            key : mass.key,
            numrep,
            method : 'nondecimal'
           }

await storenumrepdata(jsonmsg) 	
} catch (e) {
await conn.sendMessage(from, { react: { text: '✅', key: mek.key } })
console.log(e)
reply(e)
}
})


cmd({
    pattern: "cimvjid",
    react: "📽️",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const sudoNumber = config.SUDO;
	
	
if(!q) return await reply(url)
    if (!q.includes('cinesubz.co/movies')) return await reply(valid_url)

const anu = await fetchApi(`${apilink}/movie/cinesubz/movie?url=${q}`)
let mov = anu.result.data
    
var cast = ''
      for (let i of mov.cast ){ 
  cast += i.cast_name + ','
}

let cot = `🎬 *𝖲𝖠𝖭𝖨𝖩𝖠 𝖬𝖣 𝖢𝖨𝖭𝖤𝖲𝖴𝖡𝖹 𝖬𝖮𝖵𝖨𝖤 𝖣𝖮𝖶𝖭𝖫𝖮𝖠𝖣𝖤𝖱* 🎬


   📽️ Movie Name: ${mainDetails.maintitle}
   🍟 Release Date: ${mainDetails.dateCreated}
   🌎 𝗖ᴏᴜɴᴛʀʏ: ${mainDetails.country}
   ⏱ Duration: ${mainDetails.runtime}
   🔗 Description: ${mainDetails.description}
   🖇️ Movie Link: ${q}

▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃


*${formatNumber(1)} ||* SEND MOVIE
`
  
  let numrep = []
	
	numrep.push(`${prefix}cimvgo ${q}🎈${from}`)  

                 

for (let j = 0 ; j < config.JIDS.length; j++) {
     for (let i of config.JIDS[j].split(",") ){
                  cot += `*${formatNumber( j + 2)} ||* SEND JID: *${i}*\n`
				
                  numrep.push(`${prefix}cimvgo ${q}🎈${i}` )
                
     }}
  
 const mass = await conn.sendMessage(from, { text: `${cot}\n\n${config.FOOTER}` }, { quoted: mek });
	
          const jsonmsg = {
            key : mass.key,
            numrep,
            method : 'nondecimal'
           }

await storenumrepdata(jsonmsg) 	 
} catch (e) {
await conn.sendMessage(from, { react: { text: '✔', key: mek.key } })
console.log(e)
reply(e)
}
})


cmd({
    pattern: "cimvgo",
    react: "📽️",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const sudoNumber = config.SUDO;
	

	
	      var inp = ''
				var jidx = ''	                
				var text = q
				if (q.includes('🎈')) jidx = text.split('🎈')[1]
				if (text.includes('🎈')) { inp = text.split('🎈')[0]}    
	

if(!inp) return await reply(err)
    if (!q.includes('cinesubz.co/movies')) return await reply(valid_url)
  
const move = await fetchApi(`${apilink}/movie/cinesubz/movie?url=${inp}`)
let mov = move.result.data

let cot = `🎬 *𝖲𝖠𝖭𝖨𝖩𝖠 𝖬𝖣 𝖢𝖨𝖭𝖤𝖲𝖴𝖡𝖹 𝖬𝖮𝖵𝖨𝖤 𝖣𝖮𝖶𝖭𝖫𝖮𝖠𝖣𝖤𝖱* 🎬


  📽️ Movie Name: ${mainDetails.maintitle}
  🍟 Release Date: ${mainDetails.dateCreated}   
  🌍 Country: ${mainDetails.country}
  ⏱ Duration: ${mainDetails.runtime}  
  🖇️ Movie Link: ${inp}   
  🎀 Category: ${mainDetails.genres}
  ⭐ ImdbRate: ${movieData.imdbRating}   
  🤵 Director: ${movieData.director}

▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃


*${formatNumber(1)} ||* SEND DETAILS NORMAL IMG
*${formatNumber(2)} ||* SEND IMAGES

`
  
let numrep = []
numrep.push(`${prefix}cimvdet ${q}`) 	
numrep.push(`${prefix}cineimages ${q}`) 	
	

		                dllinks.directDownloadLinks.forEach((movie, index) => {
				
                  cot += `*${formatNumber( index + 3 )} ||* ${dllinks.quality} [ ${dllinks.size} ]\n`
				
                  numrep.push(`${prefix}cinedirectdl ${mainDetails.link}🎈${mainDetails.maintitle}🎈${dllinks.quality}🎈${dllinks.size}🎈${jidx}🎈${mainDetails.imageUrl}` )
                  })
                 

 const mass = await conn.sendMessage(from, { text: `${cot}\n\n${config.FOOTER}` }, { quoted: mek });
	
          const jsonmsg = {
            key : mass.key,
            numrep,
            method : 'nondecimal'
           }

await storenumrepdata(jsonmsg) 	
} catch (e) {
await conn.sendMessage(from, { react: { text: '✅', key: mek.key } })
console.log(e)
reply(e)
}
})




cmd({
    pattern: "citvjid",
    react: "📺",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const sudoNumber = config.SUDO;
	
	
if (!q) return await reply(giveme)
  
const move = await fetchApi(`${apilink}/movie/cinesubz/tvshow?url=${q}`)
let mov = move.result.data

let cot = `📺 *𝖲𝖠𝖭𝖨𝖩𝖠 𝖬𝖣 𝖳𝖵 𝖲𝖧𝖮𝖶 𝖣𝖮𝖶𝖭𝖫𝖮𝖠𝖣𝖤𝖱* 📺


  📽 Tv Show Name: ${mainDetails.maintitle}
  ✨ First Air Date: ${mainDetails.dateCreated}
  🖇️ Tv Show Link: ${q}

▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃


*${formatNumber(1)} ||* SEND MOVIE
`
  
  let numrep = []
	
	numrep.push(`${prefix}citvgo ${q}🎈${from}`)  

                 

for (let j = 0 ; j < config.JIDS.length; j++) {
     for (let i of config.JIDS[j].split(",") ){
                  cot += `*${formatNumber( j + 2)} ||* underfied: *${i}*\n`
				
                  numrep.push(`${prefix}citvgo ${q}🎈${i}` )
                
     }}
  
 const mass = await conn.sendMessage(from, { text: `${cot}\n\n${config.FOOTER}` }, { quoted: mek });
	
          const jsonmsg = {
            key : mass.key,
            numrep,
            method : 'nondecimal'
           }

await storenumrepdata(jsonmsg) 
} catch (e) {
await conn.sendMessage(from, { react: { text: '✅', key: mek.key } })
console.log(e)
reply(e)
}
})


cmd({
    pattern: "citvgo",
    react: "📺",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const sudoNumber = config.SUDO;
	

	
	                        var inp = ''
				var jidx = ''	                
				var text = q
				if (q.includes('🎈')) jidx = text.split('🎈')[1]
				if (text.includes('🎈')) { inp = text.split('🎈')[0]}    
	

if(!inp) return await reply(err)
    if (!q.includes('cinesubz.co/tvshow')) return await reply(valid_url)
  
const move = await fetchApi(`${apilink}/movie/cinesubz/tvshow?url=${inp}`)
let mov = move.result.data

let cot = `📺 *𝖲𝖠𝖭𝖨𝖩𝖠 𝖬𝖣 𝖳𝖵 𝖲𝖧𝖮𝖶 𝖣𝖮𝖶𝖭𝖫𝖮𝖠𝖣𝖤𝖱* 📺


  📽 Tv Show Name: ${mainDetails.maintitle}
  ✨ First Air Date: ${mainDetails.dateCreated}
  🖇️ Tv Show Link: ${inp}
  🎀 Categories: ${mainDetails.genres}
  ⭐ TMDB RATIN: ${mainDetails.rating.value}
  🎡 Episode Count: ${mainDetails.count}

▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃

 
*${formatNumber(1)} ||* SEND DETAILS NORMAL IMG

`
  
let numrep = []
numrep.push(`${prefix}citvdet ${q}`) 
	

		                mov.episodes.forEach((movie, index) => {
				
                  cot += `*${formatNumber( index + 2)} ||*  ${movie.number} ( ${movie.name} )\n`
				
                  numrep.push(`${prefix}ciepgo ${movie.link}🎈${jidx}` )
                  })
                 

 const mass = await conn.sendMessage(from, { text: `${cot}\n\n${config.FOOTER}` }, { quoted: mek });
	
          const jsonmsg = {
            key : mass.key,
            numrep,
            method : 'nondecimal'
           }

await storenumrepdata(jsonmsg) 	      
}catch (e) {
await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
console.log(e)
reply(e)
}
})


cmd({
    pattern: "ciepgo",
    react: "📺",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const sudoNumber = config.SUDO;
	
	
if(!q) return await reply(url)
    if (!q.includes('cinesubz.co/episodes')) return await reply(valid_url)

		                
	                        var inp = ''
				var jidx = ''	                
				var text = q
				if (q.includes('🎈')) jidx = text.split('🎈')[1]
				if (text.includes('🎈')) { inp = text.split('🎈')[0]}  
	
  
const move = await fetchApi(`${apilink}/movie/cinesubz/episode?url=${inp}`)
let mov = move.result.data
	    
let cot = `📺 *𝖲𝖠𝖭𝖨𝖩𝖠 𝖬𝖣 𝖳𝖵 𝖲𝖧𝖮𝖶 𝖣𝖮𝖶𝖭𝖫𝖮𝖠𝖣𝖤𝖱* 📺


  📽 Episode Name: ${mainDetails.mainDetails}
  🖇️ Tv Show Link: ${inp}
  🧿 Views : ${mainDetails.views}
  
▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃


*${formatNumber(1)} ||* SEND DETAILS NORMAL IMG
*${formatNumber(2)} ||* SEND IMAGES

`
  
let numrep = []
numrep.push(`${prefix}ciepdet ${q}`)
numrep.push(`${prefix}cineimages ${q}`)

	
		                data.dl_links.forEach((movie, index) => {
				
                  cot += `*${formatNumber( index + 3)} ||* ${movie.quality} [ ${movie.size} ]\n`
				
                  numrep.push(`${prefix}cinedirectdl ${movie.link}🎈${mov.title}🎈${dllinks.directDownloadLinks.quality}🎈${dllinks.directDownloadLinks.size}🎈${jidx}` )
                  })
                 

 const mass = await conn.sendMessage(from, { text: `${cot}\n\n${config.FOOTER}` }, { quoted: mek });
	
          const jsonmsg = {
            key : mass.key,
            numrep,
            method : 'nondecimal'
           }

await storenumrepdata(jsonmsg) 

}catch (e) {
await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
console.log(e)
reply(e)
}
})


//---------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------

cmd({
    pattern: "cimvdet",
    react: "📽️",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, prefix, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, isBotAdmins, isCreator ,isDev, reply}) => {
try{
const sudoNumber = config.SUDO;
	
	
if(!q) return await reply(url)
    if (!q.includes('cinesubz.co/movies')) return await reply(valid_url)

  
	var inp = ''
				var jidx = ''	                
				var text = q
				if (q.includes('🎈')) jidx = text.split('🎈')[1]
				if (text.includes('🎈')) { inp = text.split('🎈')[0]}   


const anu = await fetchApi(`${apilink}/movie/cinesubz/movie?url=${inp}`)
let mov = anu.result.data	
var cast = ''
      for (let i of mov.cast ){ 
  cast += i.name + ','
	  }
const name = data.mainDetails.maintitle
const date = data.mainDetails.dateCreated
const country = data.mainDetails.country
const runtime = data.mainDetails.runtime
const cat = data.mainDetails.genres
const imdbrate = data.movieData.imdbRating
const imdbvote = data.mainDetails.rating.count
const director = data.movieData.director
	
let yt = `
🍟 _*${name}*_


🧿 ${oce}Release Date:${oce} ➜ ${date}

🌍 ${oce}Country:${oce} ➜ ${country}

⏱️ ${oce}Duration:${oce} ➜ ${runtime}

🎀 ${oce}Categories:${oce} ➜ ${cat}

⭐ ${oce}IMDB:${oce} ➜ ${imdbrate}

🤵‍♂️ ${oce}Director:${oce} ➜ ${director}

🕵️‍♂️ ${oce}Cast:${oce} ➜ ${cast}

🎉POWERED BY SANIJA-MD🎉
▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃

  💃 *ғᴏʟʟᴏᴡ ᴜs ➢* https://www.whatsapp.com/channel/0029Vai5pJa5vK9zcGR1PX2f


`

	
const jid = jidx || from
//await conn.sendMessage(jid,{image:{url: mov.mainDetails.imageUrl},caption: `${yt}\n\n` + config.FOOTER })   

const movImg = mov.mainImage.replace("fit=", "fit")
	
await conn.sendMessage(jid ,  { image : { url : movImg || mov.images[0] || mov.image || "" } , caption : yt + `${config.CAPTION}` })

if (jidx === from) { 
await conn.sendMessage(from, { react: { text: '✔', key: mek.key } }) 
//await sleep(1000 * 1) 
}	

else {
await conn.sendMessage(from, { text : 'Details Card Sended ✔' }, { quoted: mek }) 
await conn.sendMessage(from, { react: { text: '✔', key: mek.key } })	
//await sleep(1000 * 1) 
}
	
} catch (e) {
await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
console.log(e)
reply(e)
}
})



cmd({
    pattern: "citvdet",
    react: "📺",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, prefix, isCmd, command, args, q, isGroup, sender, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
const sudoNumber = config.SUDO;
	
	
if(!q) return await reply(url)
    if (!q.includes('cinesubz.co/tvshow')) return await reply(valid_url)
 				
	
	
	var inp = ''
				var jidx = ''	                
				var text = q
				if (q.includes('🎈')) jidx = text.split('🎈')[1]
				if (text.includes('🎈')) { inp = text.split('🎈')[0]}   

	
const anu = await fetchApi(`${apilink}/movie/cinesubz/tvshow?url=${inp}`)
let mov = anu.result.data	


  
let yt = `
📺 *Tv Show Name:* ${data.mainDetails.maintitle}
✨ *First Air Date:* ${data.mainDetails.dateCreated}
🎀 *Categories:* ${data.mainDetails.genres}
⭐ *TMDB RATIN:* ${data.mainDetails.rating.value}
🔮 *TMDB COUNT:* ${data.mainDetails.rating.count}
🎡 *Episode Count:* ${mov.episode_count}

POWERED BY SANIJA MD
▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃

*🕺🏻 ғᴏʟʟᴏᴡ ᴜs:* https://www.whatsapp.com/channel/0029Vai5pJa5vK9zcGR1PX2f



`
const jid = jidx || from
const movImg = data.mainDetails.imageUrl.replace("fit=", "fit")
	
await conn.sendMessage(jid ,  { image : { url : movImg || data.mainDetails.imageUrl || '' } , caption : yt + `${config.CAPTION}`})


if (jidx === from) { 
await conn.sendMessage(from, { react: { text: '✔', key: mek.key } }) 
//await sleep(1000 * 1) 
}	

else {
await conn.sendMessage(from, { text : 'Details Card Sended ✔' }, { quoted: mek }) 
await conn.sendMessage(from, { react: { text: '✔', key: mek.key } })	
//await sleep(1000 * 1) 
}
	
} catch (e) {
await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
console.log(e)
reply(e)
}
})


cmd({
    pattern: "ciepdet",
    react: "📺",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, prefix, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, isBotAdmins, isCreator ,isDev, isAdmins, reply}) => {
try{
const sudoNumber = config.SUDO;
	
	
if(!q) return await reply(url)
    if (!q.includes('cinesubz.co/episode')) return await reply(valid_url)
 				
	
	
	var inp = ''
				var jidx = ''	                
				var text = q
				if (q.includes('🎈')) jidx = text.split('🎈')[1]
				if (text.includes('🎈')) { inp = text.split('🎈')[0]}   

	
const anu = await fetchApi(`${apilink}/movie/cinesubz/episode?url=${inp}`)
let mov = anu.result.data	


  
let yt = `
📺 *Episode Name:* ${data.mainDetails.episodeTitle}

🖇️ *Tv Show Link:* ${inp}

🧿 *Views:* ${data.mainDetails.views}
`
	
const jid = jidx || from

await conn.sendMessage(jid ,  { image : { url : data.mainDetails.imageUrl[0] || "" } , caption : yt + `


${config.CAPTION}`})


if (jidx === from) { 
await conn.sendMessage(from, { react: { text: '✔', key: mek.key } }) 
//await sleep(1000 * 1) 
}	

else {
await conn.sendMessage(from, { text : 'Details Card Sended ✔' }, { quoted: mek }) 
await conn.sendMessage(from, { react: { text: '✔', key: mek.key } })	
//await sleep(1000 * 1) 
}
	
} catch (e) {
await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
console.log(e)
reply(e)
}
})



cmd({
    pattern: "cinedirectdl",
    react: "⬆",
    dontAddCommandList: true,
    filename: __filename
},
async(conn, mek, m,{from, prefix, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, form, isOwner, groupMetadata, groupName, isBotAdmins, isAdmins, reply}) => {
try{
	
const sudoNumber = config.SUDO;
			 

	
	
if (!q) return reply("❗ *Please give me valid link*")	
	
                                var typ = ''
				var jidx = ''
				var inp = ''
				var nmf = ''
				var size = ''
			        var quality = ''
	                        var img_s = ''
				var text = q
				if (q.includes('🎈')) nmf = text.split('🎈')[1]
				if (text.includes('🎈')) { inp = text.split('🎈')[0]
                                                      quality =  text.split('🎈')[2]
							size =  text.split('🎈')[3]
							jidx =  text.split('🎈')[4]
							img_s =  text.split('🎈')[5]}


if (!inp) return await conn.sendMessage(from, { text: "*An error occurred 🧑‍🎨❌*"}, { quoted : mek })

const anu = await fetchApi(`${apilink}/movie/cinesubz/dl?url=${inp}`)

	
	if(data.type.gdrive) {
	
const dlk = data.type.gdrive
const dl_link = dlk.replace("https://drive.usercontent.google.com/", "https://drive.google.com/")
const up_mg = await conn.sendMessage(from, { text : 'Uploading Your Request MOVIE..⬆' }, {quoted: mek})
		
 let res = await fg.GDriveDl(dl_link)
 const jid = jidx ? jidx : from
 const f_name = nmf ? nmf : res.fileName
 var ext = ''

		if(res.mimetype == "video/mkv") { ext = "mkv"
						} else { ext = "mp4" }

const mvdoc = await conn.sendMessage( jid , { 
		document : { url : res.downloadUrl } , 
		fileName: `${f_name}.` + ext  , 
		mimetype: res.mimetype, 
		caption: f_name + ` (${quality})


` + config.CAPTION
	})		


if (jidx === from) { 
await conn.sendMessage(from, { react: { text: '✔', key: mek.key } }) 
await sleep(1000 * 1) }	

else {
await conn.sendMessage(from, { text : 'Movie Send Succesfull ✔' }, { quoted: mek }) 
await conn.sendMessage(from, { react: { text: '✔', key: mek.key } })	
await sleep(1000 * 1) }
	
	} else if (anu.result.direct) {

	
const mimeType = require('mime-types');	
const up_mg = await conn.sendMessage(from, { text : 'Uploading Your Request Movie..⬆' }, {quoted: mek})


const bufferdata = await getBuffer( anu.result.direct )	
	
	const { default: fileType } = await import('file-type');
	const type = await fileType.fromBuffer(bufferdata);
	const mime = type ? type.mime : 'video/mp4';
	let ext = mimeType.extension(mime);
        const jid = jidx || from
    
	const mvdoc = await conn.sendMessage( jid , { 
		document : bufferdata , 
		fileName: `${nmf}.` + ext  , 
		mimetype: mime, 
		caption: nmf + ` (${quality})


` + config.CAPTION
	})


if (jidx === from) { 
await conn.sendMessage(from, { react: { text: '✔', key: mek.key } }) 
await sleep(1000 * 1)}	

else {
await conn.sendMessage(from, { text : 'Movie Send Succesfull ✔' }, { quoted: mek }) 
await conn.sendMessage(from, { react: { text: '✔', key: mek.key } })	
await sleep(1000 * 1)}

		
	} else if (anu.result.mega) {

        const up_mg = await conn.sendMessage(from, { text : 'Uploading Your Request Movie..⬆' }, {quoted: mek})

        const file = File.fromURL(anu.result.mega)
        await file.loadAttributes()
	const data = await file.downloadBuffer();
        const jid = jidx ? jidx : from
	
            await conn.sendMessage(jid, { 
		    document: data, 
		    mimetype: "video/mp4", 
		    fileName: ` ${nmf}.mp4`, 
		    caption: nmf + ` (${quality})
      
` + config.CAPTION
	    }); 

	
if (jidx === from) { 	
await conn.sendMessage(from, { react: { text: '✔', key: mek.key } }) 
await sleep(1000 * 1) }	

else {
await conn.sendMessage(from, { text : 'File Send Succesfull ✔' }, { quoted: mek }) 
await conn.sendMessage(from, { react: { text: '✔', key: mek.key } })	
await sleep(1000 * 1) }

	} else {

return reply(msr.not_fo)
		
	}

} catch (e) {	
await conn.sendMessage(from, { react: { text: '✅', key: mek.key } })
console.log(e)
reply(e)
}
})
