const puppeteer = require('puppeteer');
const CATCH = new Map()
process.setMaxListeners(0)

async function getTranslate(q,to) {
  let res = {
    translate: '',
    alternative: []
  };
  let url = `https://translate.google.com/?tl=${to}&text=${q}&op=translate`
  if (CATCH.has(url)) return CATCH.get(url)

  try {
    const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
    const context = await browser.createIncognitoBrowserContext()
    const page = await context.newPage();

    await page.goto(url, {waitUntil: 'networkidle2' , timeout: 0});
    await page.$('.VIiyi');
    let translate = await page.waitForSelector('.VIiyi')
    let alternative = await page.waitForSelector('div[data-alternative-index]')

    if (translate){
      res.translate = await page.evaluate(() => document.querySelector(".VIiyi").innerText)
    }
    if (alternative){
      res.alternative = await page.evaluate(() => [...document.querySelectorAll("div[data-alternative-index]")]
          .map( x => x.innerText
          .replace('...','')
          .split('\n'))
          )
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
module.exports = getTranslate 