var webdriver = require('selenium-webdriver'),
     By = webdriver.By,
     until = webdriver.until;
var driver;

class Browser {

    constructor() {
        driver = new webdriver.Builder().forBrowser('firefox').build();
        driver.manage().setTimeouts( { implicit: 5000 } );
        global.driver = driver;
    }

    openPage(url) {
        driver.get(url);
    }

    stop() {
        driver.quit();
    }
}
module.exports = new Browser();