var webdriver = require('selenium-webdriver'),
     By = webdriver.By,
     until = webdriver.until;

class Browser {

    constructor() {
        
    }

    openPage(url) {
        let driver = new webdriver.Builder().forBrowser('firefox').build();
        driver.manage().setTimeouts( { implicit: 5000 } );
        global.driver = driver;
        driver.get(url);
    }

    stop() {
        global.driver.quit();
    }
}
module.exports = new Browser();