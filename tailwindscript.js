const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://tailwinduikit.com/");

  var xpath_of_component_main = "//*[@id='header']/div[1]/div/ul/li[1]/a";
  var xpath_of_menu = "//*[@id='i-menu']";
  var xpath_of_component_in_menu =
    "//*[@id='header']/div[2]/div/div/div/div[2]/div/ul/a[1]";
  var xpath_of_sidemenu = "//*[@id='header']/div[2]/div/div/div/div[2]/div";

  //await page.setViewport({ width: 1366, height: 766, deviceScaleFactor: 1 });

  try {
    var component_main = await page.waitForXPath(xpath_of_component_main, {
      visible: true,
    });
    await component_main.click();
    console.log("Component is clicked");
  } catch (error) {
    console.log("Component is in side menu");
  }

  try {
    var menu_item = await page.waitForXPath(xpath_of_menu, {
      visible: true,
    });
    await menu_item.click();
    console.log("Menu is clicked");
    try {
      console.log("Waiting for menu bar to appear");
      let menu_bar_x = await page.waitForXPath(xpath_of_sidemenu, {
        visible: true,
      });
      //console.log(menu_bar_x);
      console.log("Menu Bar appeared");
    } catch (error) {
      console.log("Menu bar did not appear");
    }
  } catch (error) {
    console.log("Menu is not clicked");
  }

  await page.waitForTimeout(6000);

  try {
    var comp_in_menu = await page.waitForXPath(xpath_of_component_in_menu, {
      visible: true,
    });
    await comp_in_menu.click();
    console.log("Component is clicked");
  } catch (error) {
    console.log("Component is not in side menu and is not clicked");
  }

  await page.waitForTimeout(5000);
  
  var xpath_sidemenu_comp = "//*[@id='__next']/div/main/div/div/div/div[1]/div[2]";

  try {
    
      var xpath_of_comp_page = "//*[@id='boxed_layout']/div[1]";
      try{
          let comp_page = await page.waitForXPath(xpath_of_comp_page, {
            visible: true,
          });
          //console.log(comp_page);
          console.log("Component page has appeared");
      }
      catch(error){
          console.log("Component page did not appear");
      }
    await page.waitForTimeout(6000);
    
    var side_menu_onComp = await page.waitForXPath(xpath_sidemenu_comp, {visible: true,});
    //console.log(boxed_layout_onComp);
    //await page.waitForNavigation();
    /*
    // to find coordinates of the div
    const rect = await page.evaluate((el) => {
      const { x, y } = el.getBoundingClientRect();
      return { x, y };
    }, boxed_layout_onComp);
    
    const properties_of_div_fn = await page.evaluate(() => {
      var properties_of_div = document.querySelector(
        "#boxed_layout > div.flex.justify-center.items-center.border.rounded-tl.rounded-tr.border-gray-200.dark\\:border-gray-800 > img"
      ).getBoundingClientRect();
      
        return {
          x: properties_of_div.x,
          y: properties_of_div.y,
        };
    });


    //console.log(rect.x,rect.y);
    
    //let properties_of_div = boxed_layout_onComp.getBoundingClientRect();
    const offset = { x: properties_of_div_fn.x+10, y: properties_of_div_fn.y+10 };
    await page.waitForTimeout(5000);
    await page.mouse.click(rect.x + offset.x, rect.y + offset.y);*/
  await side_menu_onComp.click();
  /*
    const side_menu_comp_page = await page.evaluate(() => {
      var properties_of_div = document.querySelector(
        "#__next > div > main > div > div > div > div:nth-child(1) > div.fixed.flex.justify-center.items-center.bg-gray-800.dark\\:bg-gray-50.text-gray-50.dark\\:text-gray-800.rounded-r-lg.w-8.h-8.xl\\:hidden.left-0.top-0.mt-32.z-10 > svg"
      );
        
      return {
        properties_of_div
      };
    });
    side_menu_comp_page.properties_of_div.click();**/
    console.log("Side menu is clicked");
  } catch (error) {
    console.log("Side menu is not clicked");
    console.error(error);
  }

  //await page.screenshot({ path: "./screenshots/tail.png" });
  /** 
   * 
  const result = await page.evaluate(() => {
    let node_list = document.querySelectorAll(".mw-headline");
    var arr = [...node_list];

    return arr.map((headings) => headings.innerText);
  });document.querySelector("#header > div.mx-auto.container.lg\\:py-6.px-4.xl\\:px-12.\\32 xl\\:px-4 > div > ul > li:nth-child(1) > a")

  console.log("Result:", result);*/



  await page.waitForTimeout(5000);
  var xpath_mas_lay_b = "//*[@id='__next']/div/main/div/div/div/div[1]/div[1]/div[2]/div[1]/div/div[1]/button";
  try {
    var mas_lay_b = await page.waitForXPath(xpath_mas_lay_b, {
      visible: true,
    });
    await mas_lay_b.click();
    console.log("Button is clicked");
  } catch (error) {
    console.log("Button is not clicked");
  }

  await page.waitForTimeout(5000);
  var xpath_boxed_lay =
    "//*[@id='__next']/div/main/div/div/div/div[1]/div[1]/div[2]/div[1]/div/div[2]/div/a";
  try {
    var xbox_lay = await page.waitForXPath(xpath_boxed_lay, {
      visible: true,
    });
    await xbox_lay.click();
    console.log("Boxed Layout is clicked");
  } catch (error) {
    console.log("Boxed Layout is not clicked");
  }

  await page.waitForTimeout(5000);
  var xpath_link_cop ="//*[@id='linkCopyBtn0']";
  try {
    var link_cop = await page.waitForXPath(xpath_link_cop, {
      visible: true,
    });
    await link_cop.click();
    console.log("Link copied to clipboard");
  } catch (error) {
    console.log("Link did not copy to clipboard");
  }

  await page.waitForTimeout(4500);
  var xpath_lay_change = "//*[@id='previewTriggerBtn0']";
  try {
    var lay_change = await page.waitForXPath(xpath_lay_change, {
      visible: true,
    });
    await lay_change.click();
    console.log("Layout is changed");
  } catch (error) {
    console.log("Layout is not changed");
  }

  await page.waitForTimeout(4500);
  var xpath_code = "//*[@id='__next']/div/main/div[1]/div[2]/div[2]/div/div[1]/div/div/div[2]/div/div/svg/path[2]";
  try {
    var code = await page.waitForXPath(xpath_code, {
      visible: true,
    });
    await code.click();
    console.log("Code is clicked");
  } catch (error) {
    console.log("Code is not clicked");
  }

  await page.waitForTimeout(4500);
  var xpath_ang_code =
    "//*[@id='filters']/div[2]";
  try {
    var ang_code = await page.waitForXPath(xpath_ang_code, {
      visible: true,
    });
    await ang_code.click();
    console.log("Angular Code is clicked");
  } catch (error) {
    console.log("Angular is not clicked");
  }

  await page.waitForTimeout(4500);
  var xpath_rect_code = "//*[@id='filters']/div[3]";
  try {
    var rect_code = await page.waitForXPath(xpath_rect_code, {
      visible: true,
    });
    await rect_code.click();
    console.log("React Code is clicked");
  } catch (error) {
    console.log("React is not clicked");
  }

  await page.waitForTimeout(4500);
  var xpath_last_code = "//*[@id='filters']/div[4]";
  try {
    var last_code = await page.waitForXPath(xpath_last_code, {
      visible: true,
    });
    await last_code.click();
    console.log("Last Code is clicked");
  } catch (error) {
    console.log("Last is not clicked");
  }
  await browser.waitForTarget(() => false);
  await browser.close();
})();

