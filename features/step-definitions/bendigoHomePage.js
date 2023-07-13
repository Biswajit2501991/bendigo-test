import { Given, When, Then } from '@wdio/cucumber-framework';


Given(/^User should see the Bandigo Bank home page$/, async () => {

    await browser.url('https://www.bendigobank.com.au/');

});

When(/^User hover over Banking on home screen$/, async () => {
    await ('#banking').click;
    browser.pause(2000);
    const selector = '//*[@id="BendigoBankHeaderConfig-16378-re-mega-menu-desc-menu-row-menu-item-banking"]';
    const element = await $(selector);
    await $(element).click();

});

Then(/^User should see the following link Bank Account Credit card Personal Loans and Travel and International Payments and select the credit cards$/, async () => {


    const selector2 = '//button[@aria-label="3"]';
    const element2 = await $(selector2);
    await $(element2).click();


});



// Was not able to lunch 
Given(/^User should Click on apply now for Bendigo Bright® Credit Card$/, async () => {
    await browser.url('https://www.bendigobank.com.au/personal/credit-cards/');
    browser.pause(5000);
    // const selector3 = '$(document.querySelector("#Button-232952")])';
    // const element4 = await $(selector3);
    const selector2 = '#Button-232952';
    const element3 = await $(selector2);

    await element3.waitForClickable({ timeout: 10000 });
    await element3.click();

});


When(/^User see Check my eligibility screen is shown$/, async () => {
    const title = $('.title');
    expect(title).toBeDisplayed();

});

Then(/^User Click on Continue to Apply$/, async () => {

    try {
        const continueToApply = await $('//div[@class="col-12 text-left"]//a[@id="Button-237631"]');
        await continueToApply.waitForExist({ timeout: 5000 });
        await continueToApply.click();

        browser.pause(3000);

    } catch (error) {
        console.error('Error:', error.message);
    }

});


Given(/^User is on getting started section tab$/, async () => {
    browser.pause(3000);
    await browser.switchWindow("applynow.bendigobank")
    browser.pause(5000);
    // await browser.switchWindow("Product Details");
    // await inputElement.setValue("10000");




});

Then(/^user Enter Test Data Preferred Credit Limit 10000/, async () => {
    await (await $('//input[@id="creditLimitAmountInput"]')).setValue("10000");
});

Then(/^User select purpose as general purpose use$/, async () => {

});

Then(/^user click on Continue$/, async () => {

});



