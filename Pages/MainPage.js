var basePage = require('./BasePage')
var webdriver = require('selenium-webdriver')
var By = webdriver.By
var until = webdriver.until
const timeOut = 70000
class MainPage extends basePage{

    isSearchFieldPresent(){
        return driver.isElementPresent(By.css('input#search_form_input_homepage'));
    }


    searchText(text){
        //let element = driver.findElement(By.css('input#search_form_input_homepage'));

        var element = driver.wait(until.elementLocated(By.css('input#search_form_input_homepage')), timeOut);

        element.click();
        element.sendKeys(text);
    }
}
module.exports = new MainPage();