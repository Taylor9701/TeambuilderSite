import puppeteer from "puppeteer";
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const preparePageForTests = async (page) => {

    // Pass the User-Agent Test.
    const userAgent = 'Mozilla/5.0 (X11; Linux x86_64)' +
      'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Safari/537.36';
    await page.setUserAgent(userAgent);
    }

const getQuotes = async () => {
  // Start a Puppeteer session with:
  // - a visible browser (`headless: false` - easier to debug because you'll see the browser in action)
  // - no default viewport (`defaultViewport: null` - website page will in full width and height)
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });

  

  // Open a new page

  const page = await browser.newPage();
  await preparePageForTests(page);

  await page.goto("https://dotgg.gg/nikke/characters", {
    waitUntil: "domcontentloaded",
  });
    await page.locator(`.class`).all();
    await page.locator(`#id`).all();



    const imgLinks = await page.evaluate(() => {
    const gridItems = document.querySelectorAll("li.gridList_gridItem__SUIGe");
    console.log(gridItems);
    return Array.from(gridItems).map((gridItem) => {
        //let imgBox = gridItem.querySelector(".gridList_gridItemImageContainer__FckvE");
        let pic = gridItem.querySelector("img.gridList_gridItemImage__eEIv5 SSRBG");
        let picPath = "null";
        let name = "null";

        if(pic){
            picPath = pic.src;
            name = pic.alt;
        }
        
        return {picPath, name};
    });
});

// burst: gridList_icon__9doAh
// class: gridList_icon__9doAh

var jsonData = JSON.stringify(imgLinks, null, "\t");

const fs = require('fs');
fs.writeFileSync('roster-info.json', jsonData, 'utf8');

console.log(imgLinks);
await page.screenshot({ path: "./screenshot.jpg", type: "jpeg", fullPage: true });
//await browser.close();
};

getQuotes();

  // On this new page:
  // - open the "http://quotes.toscrape.com/" website
  // - wait until the dom content is loaded (HTML is ready)

  /*
  await page.goto("http://quotes.toscrape.com/", {
    waitUntil: "domcontentloaded",
  });

  const quotes = await page.evaluate(() => {
    const quoteList = document.querySelectorAll(".quote");

    // Convert the quoteList to an iterable array
    // For each quote fetch the text and author
    return Array.from(quoteList).map((quote) => {
      // Fetch the sub-elements from the previously fetched quote element
      // Get the displayed text and return it (`.innerText`)
      const text = quote.querySelector(".text").innerText;
      const author = quote.querySelector(".author").innerText;

      return { text, author };
    });
  });*/