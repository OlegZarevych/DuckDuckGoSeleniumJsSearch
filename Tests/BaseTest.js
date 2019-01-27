const timeOut = 7000;

describe('DuckDuckGO Tests', function() {

var browser = require("../Browser");
var mainPage = require("../Pages/MainPage");
var assert = require("assert");

this.timeout(timeOut);

    beforeEach(async function() {
        await browser.openPage("https://duckduckgo.com/");
    });

    afterEach(async function() {
       await browser.stop();
    });

    it('Possible to enter text in search field', async function(){
        await mainPage.searchText('Hello');
        //mainPage.isSearchFieldPresent();
    })
})
