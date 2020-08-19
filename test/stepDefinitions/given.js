import { Given} from 'cucumber';
import loginPage from '../pageobjects/ta-login.page';
import yahooPage from '../pageobjects/yahoo-search.page';
import herokuappPage from '../pageobjects/herokuapp.page';

// *** belongs to Yahoo search feature
Given(/^I am on the search page$/, function () {
  yahooPage.open();
  browser.getTitle().should.equal('Yahoo Search - Web Search');
});

Given('I am on the phptravels page', function () {
  loginPage.open();     // navigating to login page
  // expect(browser).toHaveTitle('PHPTRAVELS | Travel Technology Partner');
  browser.getTitle().should.equal('PHPTRAVELS | Travel Technology Partner') > 0;
});

Given('I am on the Herokuapp page', function () {
  herokuappPage.open();     // navigating to login page
  // these fail because they are from a new version of webdriver.io
  // expect(browser).toHaveTitle('The Internet');
  // expect(browser).toHaveTitleContaining('Internet');
  browser.getTitle().should.equal('The Internet') > 0;
  
});