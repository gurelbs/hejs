const puppeteer = require('puppeteer');
const CATCH = new Map()

async function getTranslate(translate){
  let res;
  let err = 'לא מצאתי תרגום ל' + translate;
  try {
    let url = `https://google.com/search?q=תרגם ${translate}&hl=he`
    if (CATCH.has(url)) return CATCH.get(url)

    const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
    const context = await browser.createIncognitoBrowserContext()
    const page = await context.newPage();
    await page.goto(url);
    let isTranslate = await page.$('#tw-container')
    if (isTranslate){
      await page.waitForSelector('#tw-container')
        let translated = await page.evaluate(() => document.querySelector('#tw-container #tw-target-text').innerText)
        res = translated 
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

module.exports = getTranslate 