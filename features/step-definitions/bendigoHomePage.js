import { Given, When, Then } from '@wdio/cucumber-framework';
const wdioConfig = await import('../../wdio.conf.js');

Given(/^User should see the Bandigo Bank home page$/, async () => {

    await browser.url('https://www.bendigobank.com.au/');

});

When(/^User hover over Banking on home screen$/, async () => {
    // await ('#banking').click;
    // browser.pause(2000);
    // const selector = $('//*[@id="BendigoBankHeaderConfig-16378-re-mega-menu-desc-menu-row-menu-item-banking"]');
    // //const element = await $(selector);
    // await $(selector).click();

});

Then(/^User should see the following link Bank Account Credit card Personal Loans and Travel and International Payments and select the credit cards$/, async () => {


    // const selector2 = $('//button[@aria-label="3"]');
    // //const element2 = await $(selector2);
    // browser.pause(3000);
    // await $(selector2).click();


});



// 
Given(/^User should Click on apply now for Bendigo Bright® Credit Card$/, async () => {
    await browser.url('https://www.bendigobank.com.au/personal/credit-cards/');
    browser.pause(2000);

    const applyNow = await $('//*[@id="Button-232952"]');
    //const element3 = await $(selector2);

    await applyNow.scrollIntoView();
    await applyNow.waitForClickable({ timeout: 5000 });
    await applyNow.click();
});



When(/^User see Check my eligibility screen is shown$/, async () => {
    const title = $('.title');
    title.scrollIntoView();
    expect(title).toBeDisplayed();

});

Then(/^User Click on Continue to Apply$/, async () => {

    try {
        const continueToApply = await $('//div[@class="col-12 text-left"]//a[@id="Button-237631"]');
        // continueToApply.scrollIntoView();
        await continueToApply.waitForExist({ timeout: 10000 });
        //continueToApply.scrollIntoView();
        await continueToApply.waitForClickable({ timeout: 10000 });
        // await continueToApply.click();
        browser.pause(3000);

    } catch (error) {
        console.error('Error:', error.message);
    }

});


Given(/^User is on getting started section tab$/, async () => {
    browser.pause(3000);

    Given(/^User is on getting started section tab$/, async () => {
        browser.pause(3000);
        await browser.switchWindow("applynow.bendigobank")
        browser.pause(5000);
        // await browser.switchWindow("Product Details");
        // await inputElement.setValue("10000");

    });
});

// browser.pause(3000);
// await browser.switchWindow("applynow.bendigobank")
// browser.pause(5000);
// // await browser.switchWindow("Product Details");
// // await inputElement.setValue("10000");


Then(/^user Enter Test Data Preferred Credit Limit 10000/, async () => {
    const CreditLimit = await $('//input[@type="text"]');
    //  await CreditLimit.scrollIntoView();
    // await CreditLimit.waitForDisplayed();
    await CreditLimit.setValue("10000");
    await browser.pause(5000);
});




Then(/^User select purpose general purpose use$/, async () => {
    const selectGenPurpose = await $('(//button[normalize-space()="General purpose use"])[1]');
    //await selectGenPurpose.waitForClickable(); // Wait for the button to be clickable
    await selectGenPurpose.click();
    await browser.pause(3000);
});


Then(/^user click on Continue$/, async () => {
    const clickContinue = await $('//button[@name="contBtn"]');
    await clickContinue.waitForClickable();
    await clickContinue.click();
    await browser.pause(5000);
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
    await clickOnContinue.click();
    await browser.pause(5000);
});



// Time and Eligibility Section

Given(/^User validate Time and Eligibility screen$/, async () => {
    const checkTimeAndEligibility = await $('//div[@class="sst-dp-approxTime-text sst-dp-left ng-scope"]');
    await expect(checkTimeAndEligibility).toBeDisplayed();
    await browser.pause(5000);

});



Then(/^User Select Yes from the question$/, async () => {
    const selectYes = await $('//button[contains(text(),"Yes")]');
    selectYes.scrollIntoView();
    await selectYes.click();
    await browser.pause(5000);
});



Then(/^User select Continue button$/, async () => {
    const TimeClickOnContinue = await $('//button[contains(text(),"Continue")]');
    TimeClickOnContinue.scrollIntoView();

    await TimeClickOnContinue.click();
    await browser.pause(5000);
});




Given(/^User is on Branch Details screen$/, async () => {
    const checkBranchDetailScreen = await $('//*[@id="sstAnchorScroll"]/h2')
    await expect(checkBranchDetailScreen).toBeDisplayed();
    await browser.pause(5000);
});

Then(/^User Enter location As Melbourne and Click on Find$/, async () => {
    const enterALocation = await $('//input[@name="branchSearch"]');
    const enterFind = await $('//button[@id="branchSearch"]');
    enterALocation.scrollIntoView();
    enterALocation.setValue("Clifton")
    await browser.pause(2000);
    enterFind.click();
    await browser.pause(2000);


});

Then(/^User Select Clifton Hill Option and Click Contine$/, async () => {

    const selectCliftonHill = await $('//*[@class="list-unstyled"]/li[4]');
    const selectContinue = await $('//button[@name="contBtn"]');
    await browser.pause(2000);
    selectCliftonHill.click();
    await browser.pause(2000);
    selectContinue.click()

});


//Validate income details screen

Given(/^User Validate income details section is displaying$/, async () => {

    const validateIncomeDetailsScreen = await $('//div[@id="sstAnchorScroll"]/h2');
    await expect(validateIncomeDetailsScreen).toBeDisplayed();
    await browser.pause(2000);


});

When(/^User select the Empy Status As Casual$/, async () => {
    const selectEmpStatus = await $('//select[@name="employmentStatus"]');
    const selectEmpAsCasual = await $('//option[@label="Casual"]');
    await expect(selectEmpAsCasual).toBeDisplayed();
    selectEmpStatus.click();
    await browser.pause(2000);
    selectEmpAsCasual.click();
    await browser.pause(2000);

});

Then(/^User Input Occupation As Professional screen shoul display$/, async () => {
    const selectAccupation = await $('//input[@name="occupationSearch"]')
    selectAccupation.scrollIntoView();
    selectAccupation.setValue("Professional")
    await browser.pause(2000);


});

Then(/^User select Social Professionals$/, async () => {
    const selectSocial = await $('//*[@id="typeahead-860-4513-option-1"]')
    await browser.pause(2000);
    selectSocial.click();
    await browser.pause(2000);

});

Then(/^User Validate Income Screen is displaying$/, async () => {

    const incomeScreenIsDisplaying = await $('//div[@class="mandatory-field-label"]')
    await browser.pause(2000);
    await expect(incomeScreenIsDisplaying).toBeDisplayed();

});

Then(/^User Enter amount as 20000$/, async () => {
    const enterTheAmount = await $('//input[@type="text"]')
    await browser.pause(2000);
    enterTheAmount.setValue('20000')
    await browser.pause(2000);

});

Then(/^user Select frequency as Anually$/, async () => {

    const selectFrequency = await $('//select[@name="incomeFrequency"]');
    await browser.pause(2000);
    const selectOptionAmually = await $('//option[@label="Annually"]');
    await browser.pause(2000);
    selectFrequency.click();
    await browser.pause(2000);
    selectOptionAmually.click();



});

Then(/^User Click on contine button$/, async () => {

    const selectContinue = await $('//button[@name="contBtn"]');
    await browser.pause(2000);
    selectContinue.click();
    await browser.pause(5000);

});




// Expense is displaying

Given(/^User Expenses section is displaying$/, async () => {
    const OnExpenseScreen = await $('//div[@calss="sst-dp-padding-top-bottom ng-scope"]/h3')
    await browser.pause(2000);
    await expect(OnExpenseScreen).toBeDisplayed();
    await browser.pause(2000);

});

Then(/^User enter amount as 6000$/, async () => {

    const inputAmount = await $('//input[@type="text"]');
    await browser.pause(2000);
    inputAmount.setValue("6000");
    await browser.pause(2000);


});

Then(/^user select payment frequency as Monthly$/, async () => {

    const selectPaymentFrequency = await $('//select[@name="frequency"]');
    const selectpayment = await $('//option[@value="string:MONTHLY"]')
    await browser.pause(2000);
    selectPaymentFrequency.click();
    await browser.pause(2000);
    selectpayment.click();
    await browser.pause(2000);


});

Then(/^User click on Cancel buttion$/, async () => {

    const ClickOnCancle = await $('//button[@name="cancelBtn"]')
    await browser.pause(2000);
    ClickOnCancle.click();
    await browser.pause(2000);

});

Then(/^User Click on Yes$/, async () => {
    const accpetAlertYes = await $('//button[@type="button"][2]')
    await accpetAlertYes.waitForClickable({ timeout: 50000 });
    await browser.pause(2000);
    await accpetAlertYes.click();
    // console.log(await browser.getAlertText())
    // await browser.pause(2000);
    // //expect
    // await browser.acceptAlert();

});

Then(/^User validate Your application with Ref no has been cancelled message$/, async () => {

    const RefNumber = await $('//span[@id="appNumber"]')
    const refValue = await RefNumber.getText();
    const message = await $('//div[@class="sst-dp-cancel-wrapper"]')
    const fullmessage = await message.getText();

    expect(await (await $('//div[@class="sst-dp-cancel-wrapper"]/h1'))).getText().toContain(refValue);
    await browser.pause(2000);
    expect(await (await $('//div[@class="sst-dp-cancel-wrapper"]/h1'))).getText().toContain(fullmessage);
    await browser.pause(2000);


});


