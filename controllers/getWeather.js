const puppeteer = require('puppeteer');
const CATCH = new Map()

async function getWeather(city){
  let res;
  let err = 'לא מצאתי מידע על מזג האוויר ב' + city;
  try {
    let url = `https://google.com/search?q=מזג אוויר ב${city}&hl=he`
    if (CATCH.has(url)) return CATCH.get(url)

    const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
    const context = await browser.createIncognitoBrowserContext()
    const page = await context.newPage();
    await page.goto(url);
    let weather = await page.$('#wob_wc')
    if (weather){
      await page.waitForSelector('#wob_wc')
        let weather = await page.evaluate( () => {
            let temp = document.querySelector("#wob_tm").innerText
            let loc = document.querySelector("#wob_loc").innerText
            let date = document.querySelector("#wob_dts").innerText
            let desc = document.querySelector('#wob_dc').innerText.replace('מעונן','מְעֻנָּן')
            return `מזג האוויר ב${loc}: ${temp}°, ${desc}. (${date}).`      
        })
        res = weather 
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

module.exports = getWeather;