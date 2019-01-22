var basePage = require('./BasePage')
var webdriver = require('selenium-webdriver')
var By = webdriver.By


class MainPage extends basePage{

    searchText(text){
        let element = driver.findElement(By.css('input#search_form_input_homepage'));
  //      element.click();
 //       element.sendKeys(text);
    }
}
module.exports = new MainPage();