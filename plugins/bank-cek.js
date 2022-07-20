let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
  const caption = `
╭───❑ 「 BALANCE 」 ❑────
├─ 📛 *Name:* ${user.registered ? user.name : conn.getName(m.sender)}
├─ 🏛️ *Bank:* ${user.atm}
├─ 🎫 *Limit*: ${user.limit}
├─ 💹 *Money*: ${user.money}
├─ 📍 *Role*: ${user.role}
├─ 📊 *Level*: ${user.level}
╰─❑ ✨ *Exp*: ${user.exp}
`.trim()
  conn.sendButton(m.chat, caption, global.wm, 'https://telegra.ph/file/c7cd3c7bd4e1a30167f14.jpg', [`Inventory`, '.inv'],m)
}
handler.help = ['bank']
handler.tags = ['rpg']
handler.command = /^(bank)$/i

handler.register = false
export default handler