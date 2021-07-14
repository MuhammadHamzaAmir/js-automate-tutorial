const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();
  await page.goto("https://en.wikipedia.org/wiki/Coronavirus");
  
  await page.setViewport({ width: 1366, height: 766, deviceScaleFactor: 1 });
  await page.screenshot({ path: "./screenshots/wiki.png" });

  const result = await page.evaluate(() => {
    let node_list = document.querySelectorAll(".mw-headline");
    var arr = [...node_list];

    return arr.map(headings => headings.innerText);
    
  });

  console.log("Result:", result);
  //await browser.waitForTarget(()=>false);
  await browser.close();
})();
