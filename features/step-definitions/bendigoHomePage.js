import { Given, When, Then } from '@wdio/cucumber-framework';
const wdioConfig = await import('../../wdio.conf.js');

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
    element3.scrollIntoView();
    await element3.waitForClickable({ timeout: 10000 });

    await element3.click();

});


When(/^User see Check my eligibility screen is shown$/, async () => {
    const title = $('.title');
    title.scrollIntoView();
    expect(title).toBeDisplayed();

});

Then(/^User Click on Continue to Apply$/, async () => {

    try {
        const continueToApply = await $('//div[@class="col-12 text-left"]//a[@id="Button-237631"]');
        await continueToApply.waitForExist({ timeout: 5000 });
        continueToApply.scrollIntoView();
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
    const element = await $('//*[@id="creditLimitAmountInput"]');
    element.scrollIntoView();
    await element.waitForDisplayed();
    await element.waitForEnabled();
    await element.setValue("10000");
    await browser.pause(5000);

});


Then(/^User select purpose general purpose use$/, async () => {
    const selectGenPurpose = await $('(//button[normalize-space()="General purpose use"])[1]');
    await selectGenPurpose.waitForClickable(); // Wait for the button to be clickable
    await selectGenPurpose.click(); // Click on the button
    await browser.pause(3000);
});


Then(/^user click on Continue$/, async () => {
    const clickContinue = await $('//button[@name="contBtn"]');
    await clickContinue.waitForClickable(); // Wait for the button to be clickable
    await clickContinue.click(); // Click on the button
    await browser.pause(5000); // Pause for 5 seconds (5000 milliseconds)
});



// Application Details

Given(/^User is on application details page$/, async () => {
    const title = await $('(//h2[normalize-space()="Application Details"])[1]');
    expect(title).toBeDisplayed();
});

Then(/^User select single relationship status$/, async () => {
    //const relationshipStatus = await $('//select[@name="maritalStatus"]');
    // const selectSingle = await $('//option[@value="object:507"]');
    // await relationshipStatus.click();
    // await selectSingle.click();
    // await browser.pause(5000);

    let relationshipStatus = $$('//select[@name="maritalStatus"]');
    for (var i = 0; i < relationshipStatus.length; i++) {
        // console.log(status[i].getText()
        if (relationshipStatus[i].getText() == "Single") {
            relationshipStatus[i].click();
            break;
        }

    }
});

Then(/^User select no for next two question$/, async () => {
    const selectBankCusAsNo = await $('(//button[contains(text(),"No")])[1]');

    await selectBankCusAsNo.click();
    await browser.pause(3000);
    const selectPromoCodeAsNo = await $('(//button[@ng-change="promoCodeDisplay(false)"])[1]');
    await selectPromoCodeAsNo.click();
    await browser.pause(3000);
});


Then(/^User click on Continue button$/, async () => {
    const clickOnContinue = await $('button[name="contBtn"]');
    // await clickOnContinue.waitForClickable(); // Wait for the button to be clickable
    await clickOnContinue.click(); // Click on the button
    await browser.pause(5000); // Pause for 5 seconds
});



// Time and Eligibility Section

Given(/^User validate Time and Eligibility screen$/, async () => {
    const checkTimeAndEligibility = await $('//div[@class="sst-dp-approxTime-text sst-dp-left ng-scope"]');
    await expect(checkTimeAndEligibility).toBeDisplayed();
    await browser.pause(5000);

});



Then(/^User Select Yes from the question$/, async () => {
    const selectYes = await $('//button[contains(text(),"Yes")]');
    await selectYes.click();
    await browser.pause(5000);
});



Then(/^User select Continue button$/, async () => {
    const TimeClickOnContinue = await $('//button[contains(text(),"Continue")]');
    await TimeClickOnContinue.waitForClickable(); // Wait for the button to be clickable
    await TimeClickOnContinue.click(); // Click on the button
    await browser.pause(5000); // Pause for 5 seconds
});


