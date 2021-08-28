const puppeteer = require('puppeteer');

const CATCH = new Map();
async function nakdan(term) {
	let answer;
  let url = `https://nakdanlive.dicta.org.il/api`
  if (CATCH.has(answer)) return CATCH.get(answer);
	const browser = await puppeteer.launch()
	const context = await browser.newContext()
	const page = await context.newPage()
	await page.goto(url)
	await page.type('textarea', term)
  answer = await page.evaluate(() => document.querySelector('#nikud-text').innerText.trim())
	await browser.close()
  CATCH.set(answer, answer)
	console.log(answer)
	return answer
}
module.exports = nakdan