let handler = async (m, { conn, text, usedPrefix, command }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    
    let jir = flaaa.getRandom()
    let hore = `${pickRandom(['Mancing mania mangtaf', 'Killing spriii', 'Owalahh dapet segini', 'Lain kali gwejh berusaha', 'Okwew..', 'Thanks', 'Dihh..', 'Xixixii..', 'Yaelah dapet segini', 'Hongreewww..', 'Baakaaaa', 'Ara..Ara..'])}`
    let emot = `${pickRandom(['😨','😅','😂','😳','😎', '🥵', '😱', '🐦', '🙄', '🐤','🗿','🐦','🤨','🥴','😐','👆','😔', '👀','👎'])}`
    
    let cht = global.db.data.users[who]
    cht.fullatm += 100
    
     // Mampuss
     let ran = Math.floor(Math.random() * 10000000000000000000)
     let niexp = cht.exp += ran
     let nilim = cht.limit += ran
     let nimon = cht.money += ran
     let niatm = cht.atm += ran
     
     // Button
    await conn.sendButton(m.chat, `*${hore}* ${emot}
*${niexp}* EXP Total
*${nilim}* Limit Total
*${nimon}* Money Total
*${niatm}* ATM Total
    
    Ketik *.limit* untuk cek limit`, author, jir + 'Jir Ngechit', [
        ['Nambah', `${usedPrefix + command}`]
    ], m, {quoted: fkontak})
}
handler.help = ['ngechit']
handler.tags = ['xp']
handler.command = /^(ngechit|cheat)$/i
handler.private = false
handler.premium = true

export default handler

function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }