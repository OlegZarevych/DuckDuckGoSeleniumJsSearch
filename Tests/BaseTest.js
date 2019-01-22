describe('DuckDuckGO Tests', function() {

var browser = require("../Browser");
var mainPage = require("../Pages/MainPage");
this.timeout(7000);

    beforeEach(function(done) {
        browser.openPage("https://duckduckgo.com/");
        done();
    });

    afterEach(function(done) {
       browser.stop();
       done();
    });

    it('Possible to enter text in search field', function(){
        mainPage.searchText('Hello')
    })
})
