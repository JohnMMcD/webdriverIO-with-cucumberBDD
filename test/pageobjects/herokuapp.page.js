import Page from './page'

class herokuappPage extends Page {

    /**
    * define elements
    */

    get accountMessage () { return $('#flash'); } // JMM Not sure what this represents - a CSS style? I changed it from its original

    /**
     * define or overwrite page methods
     */
    open () {
        super.open('https://the-internet.herokuapp.com/login')
        browser.pause(2000);
    }

    waitForAccountPageToLoad () {
      if(!this.accountMessage.isDisplayed()){
        this.accountMessage.waitForDisplayed(5000);
      }
    }
    getUserInfo (){
      return this.accountMessage.getText();
    }
}

export default new herokuappPage()
