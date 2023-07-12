import { Given, When, Then } from '@wdio/cucumber-framework';


Given(/^User should see the Bandigo Bank home page$/, async () => {

    await browser.url('https://www.bendigobank.com.au/');
});

When(/^User hover over Banking on home screen$/, async () => {
    await ('#banking').click;
});

Then(/^User should see the following link Bank Account Credit card Personal Loans and Travel and International Payments and select the credit cards$/, async () => {

});

Given(/^User is on credit card home screen$/, async () => {
    await browser.url('https://www.bendigobank.com.au/personal/credit-cards/');
});

When(/^User select select Apply now for  Bendigo Bright® Credit Card$/, async () => {
    const selector = '//*[@id="react_0HMS20HR5AJH0"]/div/div[2]/div/div/div/div[4]/div/div/div[3]/div/div[1]/div/div/div[2]/a';
    await $$xpath(selector)[0].click();
});

Then(/^User should see the following link Bank Account Credit card Personal Loans and Travel and International Payments and select the credit cards$/, async () => {

});


