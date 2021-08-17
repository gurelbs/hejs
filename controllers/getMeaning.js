const puppeteer = require('puppeteer')

async function getMeaning(meaning) {
	let res
	let err = 'לא מצאתי מידע על' + meaning
	try {
		let url = `https://milog.co.il/${meaning}`
		const browser = await puppeteer.launch({ args: ['--no-sandbox'] })
		const context = await browser.createIncognitoBrowserContext()
		const page = await context.newPage()
		await page.goto(url)
		let oxford = await page.$('.lr_container')
		let milog = await page.$('#sr_id')
		if (milog) {
			await page.waitForSelector('#sr_id')
			let result = await page.evaluate(() => {
				return [...document.querySelectorAll('.sr_e')]
					.map(x => ({
						term: x.firstElementChild.firstElementChild.innerText,
						data: x.innerText.replace(x.firstElementChild.firstElementChild.innerText, ''),
					}))
					.filter(item => !item.term.includes('הקישו להרחבה'))
			})
			res = result
		} else {
			if (oxford) {
				await page.waitForSelector('h2')
				let meaningResult = await page.evaluate(() => {
					let isDictionary =
						[...document.querySelectorAll('h2')].filter(x => x.innerText === 'מילון').length > 0
					if (isDictionary) {
						return [...document.querySelectorAll('ol li span')]
							.map(x => x.innerText)
							.filter(x => !x.match(/[\d]/g) && x !== '.' && !x.includes('ראו'))
							.join('')
					}
				})
				res = meaningResult
			}
		}
		await context.close()
		return res
	} catch (error) {
		console.log(error)
		await context.close()
	}
}

module.exports = getMeaning
