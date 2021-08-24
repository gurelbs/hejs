const puppeteer = require('puppeteer')
const CATCH = new Map()
const fetch = require('node-fetch');

async function getIsraelCitiesAndSettelments() {
	try {
    let res = '';
		let url = `https://data.gov.il/dataset/citiesandsettelments/resource/5c78e9fa-c2e2-4771-93ff-7f400a12f7ba`
		if (CATCH.has(url)) return CATCH.get(url)
		const browser = await puppeteer.launch({ args: ['--no-sandbox'] })
		const context = await browser.createIncognitoBrowserContext()
		const page = await context.newPage()
		await page.goto(url)
		let header = await page.$('body')
		if (header) {
			await page.waitForSelector('body')
			let headers = await page.evaluate(() => {
				return [...document.querySelectorAll('body')].map(x => x.innerText.split('\n'))
			})
      res = headers
		}
		await context.close();
    CATCH.set(url, res)
    console.log(res);
    return res
  } catch (error) {
    console.log(error);
		return error
  }
}

fetch('https://data.gov.il/api/3/action/datastore_search?resource_id=5c78e9fa-c2e2-4771-93ff-7f400a12f7ba&limit=1271')
    .then(res => res.text())
    .then(text => console.log(text))

module.exports = getIsraelCitiesAndSettelments
