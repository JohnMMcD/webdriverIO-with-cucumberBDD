import Page from './page';
import utl   from '../../utilities/common-utilities';

class HALoginPage extends Page {

    /**
    * define elements
    */
    // JMM redefined all of these
    get usernameInput()   { return $('//input[@id="username"]'); }
    get passwordInput()   { return $('//input[@id="password"]'); }
    get loginButton()     { return $('//button/i[contains(text(), "Login")]'); }
    get headerLogin()     { return $('//h2[contains(text(), "Login Page")]'); }

    /**
     * define or overwrite page method
     */
    open () {
        super.open('login')  //this will append `login` to the baseUrl to form complete URL; didn't seem to work, so I added /login to the base URL
        browser.pause(3000); // JMM uncommented
    }

    waitForloginPageToLoad () {
      if(!this.headerLogin.isDisplayed()){
        this.headerLogin.waitForDisplayed(10000);
      }
    }

    login (username, password) {
      this.waitForloginPageToLoad();
      this.usernameInput.setValue(username);
      this.passwordInput.setValue(password);
      this.loginButton.click();
    }
}

export default new HALoginPage()
