import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page.js';
import SecurePage from '../pageobjects/secure.page.js';

const pages = {
    login: LoginPage
}

// Given(/^I am on the (\w+) page$/, async (page) => {
//     await pages[page].open()
// });

// When(/^I login with (\w+) and (.+)$/, async (username, password) => {
//     await LoginPage.login(username, password)
// });

// Then(/^I should see a flash message saying (.*)$/, async (message) => {
//     await expect(SecurePage.flashAlert).toBeExisting();
//     await expect(SecurePage.flashAlert).toHaveTextContaining(message);
// });

// Given(/^I am on the the Bendigo Bank website(\w+) page$/, async (page) => {
//     await pages[page].open()
// });


Given("I open the Bendigo Bank website", async () => {
    await page.goto('https://www.bendigobank.com.au/');
    await page.click('#banking');
    await page.click('a[href="/credit-cards/bendigo-bright-credit-card/apply-now/"]');
  });