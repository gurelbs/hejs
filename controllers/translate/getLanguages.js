const puppeteer = require('puppeteer')

async function getLanguages() {
  const CATCH = new Map()
  let langIndex
  try {
    let url = `https://translate.google.co.il/`
    if (CATCH.has(url)) return CATCH.get(url)

    const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
    const context = await browser.createIncognitoBrowserContext()
    const page = await context.newPage();

    await page.goto(url);
    await page.$('body');
    await page.waitForSelector('body')
    langIndex = await page.evaluate(() => [...new Map([...document
      .querySelectorAll("div[data-language-code]")]
      .map( x => [x.lastElementChild.innerText,x.getAttribute('data-language-code')]))]
      .sort()
      .slice(2)
      .map( el => ({[el[0]]: el[1]}))
    )
    await context.close();
    CATCH.set(url, langIndex)
    console.log(langIndex);
    return langIndex
  } catch (error) {
    console.log(error);
    return error
  }
}

module.exports = getLanguages 