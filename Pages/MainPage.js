var basePage = require('./BasePage')
var webdriver = require('selenium-webdriver')
var By = webdriver.By
var until = webdriver.until
const timeOut = 70000
var resultPage = require('./ResultPage')

const inputFieldCss = "input#search_form_input_homepage";
const searchButton = "input#search_button_homepage";

class MainPage extends basePage{

    isSearchFieldPresent(){
        let element = global.driver.wait(until.elementLocated(By.css(inputFieldCss)), timeOut);
        return element.isDisplayed();
    }

    async searchText(text){
        let element = await global.driver.wait(until.elementLocated(By.css(inputFieldCss)), timeOut);

        element.click();
        element.sendKeys(text);
        await global.driver.findElement(By.css(searchButton)).click();
        return resultPage;
    }
}
module.exports = new MainPage();