let handler = async (m, {
	conn,
	usedPrefix
}) => {

	let user = global.db.data.users[m.sender]
	let __timers = (new Date - user.lastmining)
	let _timers = (500000 - __timers)
	let timers = clockString(_timers)
	
	if (user.pickaxe < 1) return m.reply(`*Kamu tidak memiliki Pickaxe*\n*Silahkan membeli Pickaxe si shop dengan mengetik _${usedPrefix}buy pickaxe_ atau _${usedPrefix}craft pickaxe_ agar kamu bisa nambang*`)
    if (user.pickaxedurability < 10) return m.reply(`Durability pickaxe anda kurang\nSilahkan repair pickaxe agar bisa nambang dengan menggunakan command _${usedPrefix}repair pickaxe_`)
    if (user.stamina < 20) return m.reply(`Stamina anda tidak cukup untuk bekerja\nharap isi stamina anda dengan _#eat_`)
	if (new Date - user.lastmining > 500000) {
		let randomaku1 = `${Math.floor(Math.random() * 5)}`
		let randomaku2 = `${Math.floor(Math.random() * 10)}`
		let randomaku4 = `${Math.floor(Math.random() * 7)}`
		let randomaku3 = `${Math.floor(Math.random() * 4)}`
		let randomaku5 = `${Math.floor(Math.random() * 200)}`
		let randomaku6 = `${Math.floor(Math.random() * 200)}`
		let randomaku7 = `${Math.floor(Math.random() * 20)}`
		let randomaku8 = `${Math.floor(Math.random() * 100)}`
		let randomaku9 = `${Math.floor(Math.random() * 100)}`
			.trim()

		let rbrb1 = (randomaku1 * 1)
		let rbrb2 = (randomaku2 * 1)
		let rbrb3 = (randomaku3 * 1)
		let rbrb4 = (randomaku4 * 1)
		let rbrb5 = (randomaku5 * 1)
		let rbrb6 = (randomaku6 * 1)
		let rbrb7 = (randomaku7 * 1)
		let rbrb8 = (randomaku8 * 1)
		let rbrb9 = (randomaku9 * 1)

		hsl = `
*《 Hasil Nambang Kali Ini 》*

 *💎 = [ ${rbrb1} ] Diamond*
 *⛓️ = [ ${rbrb2} ] Iron*
 *🪙 = [ ${rbrb3} ] Gold*
 *💚 = [ ${rbrb4} ] Emerald*
 *🪨 = [ ${rbrb5} ] Rock*
 *🌕 = [ ${rbrb6} ] Clay*
 *🕳️ = [ ${rbrb7} ] Coal*
 *🌑 = [ ${rbrb8} ] Sand*
 *✉️ = [ ${rbrb9} ] Exp*
 
 Stamina anda berkurang -20
`
		user.diamond += rbrb1
		user.iron += rbrb2
		user.gold += rbrb3
		user.emerald += rbrb4
		user.rock += rbrb5
		user.clay += rbrb6
		user.coal += rbrb7
		user.sand += rbrb8
		user.exp += rbrb9
		user.stamina -= 20

		setTimeout(() => {
			m.reply(`${hsl}`)
		}, 20000)

		setTimeout(() => {
			m.reply(`Nah ini dia`)
		}, 18000)

		setTimeout(() => {
			m.reply('mulai menggali ore')
		}, 15000)

		setTimeout(() => {
			m.reply('Sabar')
		}, 14000)

		setTimeout(() => {
			m.reply('Masuk ke tambang dulu ngab')
		}, 0)
		user.lastmining = new Date * 1
		user.pickaxedurability -= 5
	} else conn.sendButton(m.chat, `\n*Sepertinya Anda Sudah Kecapekan*\n*Silahkan Istirahat Dulu sekitar ${timers}*\n*Untuk bisa melanjutkan Nambang*\n`, author, null, [
		['Inventory', '/inv']
	], m)
	
}
handler.help = ['nambang']
handler.tags = ['rpg']
handler.command = /^(nambang)$/i
export default handler

function clockString(ms) {
	let h = Math.floor(ms / 3600000)
	let m = Math.floor(ms / 60000) % 60
	let s = Math.floor(ms / 1000) % 60
	console.log({
		ms,
		h,
		m,
		s
	})
	return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}