import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
        let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)
let pepe = pp ? await (await fetch(pp)).buffer() : Buffer.alloc(0)
let str = `*NYARI ESCE ?*\nSilahkan dibawah ,Terimakasih`
conn.sendHydrated(m.chat, str, wm, pepe, 'https://xnxx.com/', '𝙶𝙸𝚃𝙷𝚄𝙱', null, null, [
['𝙼𝙴𝙽𝚄', '/menu']
['\n sᴇʙᴇɴᴀʀɴʏᴀ ɢᴡ sᴀɴɢᴇ\nᴊᴅɪ ᴍᴀ ɢᴀ ɴɢᴡᴇ sᴀᴍᴀ ɢᴡ?','tq']
], m)
}
handler.command = ['sc']

export default handler