import fetch from 'node-fetch'
import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper'

let handler = async (m, { conn, text, args }) => {
	if (!args || !args[0]) throw 'Uhm... urlnya mana?'
	const isY = /y(es)/gi.test(args[1])
	try {
		const { audio: _audio, title } = await youtubedl(args[0]).catch(async _ => await youtubedlv2(args[0])).catch(async _ => await youtubedlv3(args[0]))
		let audio, source, res, link, lastError, sizeh
		for (let i in _audio) {
			try {
				audio = _audio[i]
				link = await audio.download()
				sizeh = await audio.fileSize
				if (link) res = await fetch(link)
				if (res) source = await res.arrayBuffer()
				if (source instanceof ArrayBuffer) break
			} catch (e) {
				audio = link = source = null
				lastError = e
			}
		}
		//if (!(source instanceof ArrayBuffer) || !link || !res.ok) throw 'Error: ' + (lastError || 'Can\'t download audio')
		if (sizeh > 200000) throw `Filesize: ${audio.fileSizeH}\nTidak dapat mengirim, maksimal file 200 MB`
		await conn.sendMessage(m.chat, {document: { url: link }, mimetype: 'audio/mpeg', fileName: `${title}.mp3`}, { quoted : m })
	} catch (e) {
		console.log(e)
		throw `Invalid Youtube URL / terjadi kesalahan.`
	}
}

handler.help = ['ytaudio <url>']
handler.tags = ['downloader']
handler.command = /^yt(a(udio)?|mp3)$/i

handler.limit = true

export default handler