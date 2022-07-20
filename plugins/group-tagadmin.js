let handler = async (m, { conn, participants, groupMetadata }) => {

    const getGroupAdmin = (participants) => {
     let admin = []
        for (let i of participants) {
        let i.admin === "admin" ? admin.push(i.id) : ''
        }
        return admin
    }

    let pp = './src/avatar_contact.png'
    try {
        pp = await conn.profilePictureUrl(m.chat, 'image')
    } catch (e) {
    } finally {
        let { isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink } = global.db.data.chats[m.chat]
        const groupAdmin = { getGroupAdmin(participants)
        let listAdmin = groupAdmin.map((v, i) => `${i + 1}. @${v.split('@')[0]}`).join('\n')
        let text = `*「 TAG ADMIN 」*\nlet handler = async (m, { conn, participants, groupMetadata }) => {

    const getGroupAdmin = (participants) => {
        admin = []
        for (let i of participants) {
            i.admin === "admin" ? admin.push(i.id) : ''
        }
        return admin
    }

    let pp = './src/avatar_contact.png'
    try {
        pp = await conn.profilePictureUrl(m.chat, 'image')
    } catch (e) {
    } finally {
        let { isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink } = global.db.data.chats[m.chat]
        const groupAdmin = { getGroupAdmin(participants)
        let listAdmin = groupAdmin.map((v, i) => `${i + 1}. @${v.split('@')[0]}`).join('\n')
        let text = `*「 TAG ADMIN 」*\n

*Name:* 
${groupMetadata.subject}

*Group Owner:* 
@${m.chat.split`-`[0]}

*Group Admin:*
${listAdmin}
`.trim()
        ownernya = [`${m.chat.split`-`[0]}@s.whatsapp.net`]
        let mentionedJid = groupAdmin.concat(ownernya)
        conn.sendFile(m.key.remoteJid, pp, 'pp.jpg', text, m, false, { contextInfo: { mentionedJid } })
    }
}
handler.help = ['tagadmin']
handler.tags = ['group']
handler.command = /^(tagadmin)$/i

handler.group = true

export default handler

*Name:* 
${groupMetadata.subject}

*Group Owner:* 
@${m.chat.split`-`[0]}

*Group Admin:*
${listAdmin}
`.trim()
        ownernya = [`${m.chat.split`-`[0]}@s.whatsapp.net`]
        let mentionedJid = groupAdmin.concat(ownernya)
        conn.sendFile(m.key.remoteJid, pp, 'pp.jpg', text, m, false, { contextInfo: { mentionedJid } })
    }
}
handler.help = ['tagadmin']
handler.tags = ['group']
handler.command = /^(tagadmin)$/i

handler.group = true

export default handler