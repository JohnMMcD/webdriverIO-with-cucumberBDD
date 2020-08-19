import { Then } from 'cucumber';
import yahooPage from '../pageobjects/yahoo-search.page';
import myAccount from '../pageobjects/ta-myaccount.page';
import herokuappPage from '../pageobjects/herokuapp.page';

Then(/^I should see a list of search results$/, function () {
  yahooPage.isSearched().should.be.true;
});

// *** belongs to ha-login feature
Then(/^I should see the message "([^"]*)" on my account page$/, function (message) {
  myAccount.getUserInfo().should.equal(message);
});

// *** belongs to ha-login feature
Then(/^I should see the message "([^"]*)" on my login page$/, function (message) {
  herokuappPage.getUserInfo().should.include(message);
});

