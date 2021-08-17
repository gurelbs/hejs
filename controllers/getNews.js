const puppeteer = require('puppeteer')
const CATCH = new Map()

async function getNews(term) {
	let res
	let err = `לא מצאתי חדשות על ${term}`
	try {
		let url = `https://news.google.com/search?q=${term}&hl=he&gl=IL&ceid=IL:he`
		if (CATCH.has(url)) return CATCH.get(url)

    const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
		const context = await browser.createIncognitoBrowserContext()
		const page = await context.newPage()
		await page.goto(url)
		let isNews = await page.$('body')
		if (isNews) {
			await page.waitForSelector('body')
			let newsResult = await page.evaluate(() =>
				[...document.querySelectorAll('article')].map(x => ({
					header: x.children[1].innerText,
					time: [...x.children[2].children[0].children].filter(x => x.tagName === 'TIME')[0]
						?.innerText,
					origin: x.children[2].children[0].children[1].innerText,
				}))
			)
			res = newsResult
		} else {
			return err
		}
		await context.close();
    CATCH.set(url, res)
    return res
  } catch (error) {
    console.log(error);
		return error
  }
}

module.exports = getNews
