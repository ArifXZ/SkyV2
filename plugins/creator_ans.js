let fs = require('fs')
let handler = async (m, { conn }) => {
let teks = 'Creator'
let numberowner = global.numberowner
let teks = 'Pilih dibawah kak'
const sections = [
   {
	title: `${htjava} OWNER –––––––––·•`,
	rows: [
	    {title: "📱 • Nomor SkyBotz", rowId: ".owner nomor"},
	{title: "🎨 • Biodata SkyBotz", rowId: ".biodata"},
	{title: "🌎 • Script yang SkyBotz gunakan", rowId: ".sc"},
	]
    },{
	title: `${htjava} SUPPORT ME –––––––·•`,
	rows: [
	    {title: "💹 • Donasi", rowId: ".donasi"},
	{title: "🔖 • Sewa", rowId: ".sewa"},
	]
  },
]

handler.help = ['owner']
handler.tags = ['info']
handler.command = /^(owner|creator)$/i
export default handler