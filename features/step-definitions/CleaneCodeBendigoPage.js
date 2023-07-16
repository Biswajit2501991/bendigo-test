import { Given, When, Then } from '@wdio/cucumber-framework';
const wdioConfig = await import('../../wdio.conf.js');
//const { browser } = import('webdriverio');


Given(/^the user is on the Bendigo Bank home page$/, async () => {
    await browser.url('https://www.bendigobank.com.au/');
    // await browser.maximizeWindow();
});


When(/^the user hovers over Banking on the home screen$/, async () => {
    const bankingLink = await $('(//button[@name="banking"])');
    await bankingLink.moveTo();
    await browser.pause(3000);


});



Then(/^the user should see the following Bank Account , Credit card, Personal Loans,Travel and International Payments and select Credit card.$/, async () => {
    const creditCardLink = await $('//a[@id="BendigoBankHeaderConfig-16378-re-mega-menu-desc-mega-menu-row-title-1-credit-cards"]');
    //await creditCardLink.scrollIntoView();
    await creditCardLink.waitForClickable();
    await browser.pause(2000);
    await creditCardLink.click();
    await browser.pause(2000);


});


Given(/^the user clicks on Apply Now for Bendigo Bright® Credit Card$/, async () => {
    const applyNowButton = await $('//div/a[@id="Button-232952"]');
    await applyNowButton.scrollIntoView();
    await browser.pause(3000);
    await applyNowButton.waitForClickable();
    await applyNowButton.click();
    await browser.pause(2000);
});




When(/^the "Check my eligibility" screen is displayed$/, async () => {
    const title = $('//div/h1[@class="title"]');
    //title.scrollIntoView();
    expect(title).toBeDisplayed();
    await browser.pause(2000);
});




Then(/^the user clicks on Continue to Apply$/, async () => {
    //*[@id="Button-237631"and @xpath="1"]
    const continueToApplyButton = await $('//div[@class="col-12 text-left"]//a[@id="Button-237631"] ');
    // await continueToApplyButton.waitForClickable();
    await continueToApplyButton.moveTo();
    await continueToApplyButton.click();
    await browser.pause(2000);

});


Given(/^the user is on the Getting StartedS section$/, async () => {
    await browser.switchWindow("applynow.bendigobank")
    browser.pause(1000);
    const GettingStarted = await $('//*[@id="loanDetailsStep"]/div/div[1]/a/div/div/div/div/h2');
    // await browser.switchWindow("Product Details");
    browser.pause(3000);
});


Then(/^the user enters the test data Preferred Credit Limit 10000$/, async () => {

    const CreditLimit = await $('//input[@type="text"]');
    await browser.pause(5000);
    await CreditLimit.setValue('10000');
    await browser.pause(5000);
});

Then(/^the user selects General Purpose for the purpose$/, async () => {
    const selectGenPurpose = await $('(//button[normalize-space()="General purpose use"])[1]');
    //await selectGenPurpose.waitForClickable(); // Wait for the button 
    await selectGenPurpose.click();
    await browser.pause(3000);
});

Then(/^the user clicks on Continue$/, async () => {
    const clickContinue = await $('//button[@name="contBtn"]');
    await clickContinue.waitForClickable();
    await clickContinue.click();
    await browser.pause(3000);
});



Given(/^the user is on the Application page$/, async () => {
    const title = await $('(//h2[normalize-space()="Application Details"])[1]');
    expect(title).toBeDisplayed();

});

Then(/^the user selects relationship status single$/, async () => {
    const relationshipStatus = await $('//select[@name="maritalStatus"]');
    const selectSingle = await $('//option[@value="object:506"]');
    await relationshipStatus.click();
    await browser.pause(2000);
    await selectSingle.click();
    await browser.pause(3000);

});

Then(/^the user selects No for the next two questions$/, async () => {
    const selectBankCusAsNo = await $('//div/button[@name="isPrimaryApplicantExistingCustomer"][2]');
    await selectBankCusAsNo.click();
    await browser.pause(3000);
    const selectPromoCodeAsNo = await $('//div/button[@name="hasPromoCode"][2]');
    await selectPromoCodeAsNo.click();
    await browser.pause(3000);

});

Then(/^the user clicks on the Continue button.$/, async () => {
    const clickOnContinue = await $('//div/button[@name="contBtn"]');
    // await clickOnContinue.waitForClickable(); 
    await clickOnContinue.click();
    await browser.pause(5000);

});


Given(/^the user is on the TimeScreen screen$/, async () => {
    const checkTimeAndEligibility = await $('//div[@class="sst-dp-approxTime-text sst-dp-left ng-scope"]');
    await expect(checkTimeAndEligibility).toBeDisplayed();
    await browser.pause(5000);

});

Then(/^the user selects Yes for the question$/, async () => {
    const selectYes = await $('//div/button[@name="hasApplicantConformToEligibilityCriteria"][1]');
    selectYes.scrollIntoView();
    await selectYes.click();
    await browser.pause(5000);

});

Then(/^the user clicks on the Continue button.$/, async () => {
    const TimeClickOnContinue = await $('//div/button[@name="contBtn"]');
    // TimeClickOnContinue.scrollIntoView();

    await TimeClickOnContinue.click();
    await browser.pause(5000);

});


Given(/^user is on the BranchScreen screen$/, async () => {

    const checkBranchDetailScreen = await $('//*[@id="sstAnchorScroll"]/h2')
    await expect(checkBranchDetailScreen).toBeDisplayed();
    await browser.pause(5000);

});

Then(/^the user enters the Location <location> and clicks on the Find button$/, async (location) => {
    const enterALocation = await $('//input[@name="branchSearch"]');
    const enterFind = await $('//button[@id="branchSearch"]');
    enterALocation.scrollIntoView();
    enterALocation.setValue(location)
    await browser.pause(2000);
    enterFind.click();
    await browser.pause(2000);

});

Then(/^the user selects the Clifton Hill option and clicks on Continue$/, async () => {
    const selectCliftonHill = await $('//*[@class="list-unstyled"]/li[4]');
    const selectContinue = await $('//button[@name="contBtn"]');
    await browser.pause(2000);
    selectCliftonHill.click();
    await browser.pause(2000);
    selectContinue.click()
});



Given(/^the user validates that the <IncomeScreen> section is displayed$/, async () => {
    const validateIncomeDetailsScreen = await $('//div[@id="sstAnchorScroll"]/h2');
    await expect(validateIncomeDetailsScreen).toBeDisplayed();
    await browser.pause(2000);
});

When(/^the user selects the employment status as "Casual"$/, async () => {
    const selectEmpStatus = await $('//select[@name="employmentStatus"]/option[6]');

    selectEmpStatus.click();
    await browser.pause(2000);


});

Then(/^the user should see the "Occupation" screen and selects "Professional"$/, async () => {
    const selectAccupation = await $('//input[@name="occupationSearch"]')
    const selectSocial = await $('//a[@title="Social Professionals (general)"]')
    selectAccupation.scrollIntoView();
    await browser.pause(2000);
    selectAccupation.setValue("Professional")
    await browser.pause(2000);
    //selectSocial.selectByVisibleText('Social Professionals (general)');
    selectSocial.click();
    await browser.pause(2000);

});

Then(/^the user validates that the "Income" screen is displayed$/, async () => {


});

Then(/^the user enters the amount - <enteramount>$/, async (enteramount) => {

    const enterTheAmount = await $('//input[@name="incomeAmount"]')
    await browser.pause(2000);
    enterTheAmount.setValue(enteramount)
    await browser.pause(2000);

});

Then(/^the user selects the frequency as "Annually"$/, async () => {
    const selectFrequency = await $('//select[@name="incomeFrequency"]');
    await browser.pause(2000);
    const selectOptionAmually = await $('//option[@label="Annually"]');
    await browser.pause(2000);
    selectFrequency.click();
    await browser.pause(2000);
    selectOptionAmually.click();

});

Then(/^the user clicks on the "Continue" button.$/, async () => {
    const selectContinue = await $('//button[@name="contBtn"]');
    await browser.pause(2000);
    selectContinue.click();
    await browser.pause(5000);

});





Given(/^the User expense section is displayed$/, async () => {


});

Then(/^the user enters the amount - <amount>$/, async (amount) => {
    const inputAmount = await $('//input[@name="expenseAmount"]');
    await browser.pause(2000);
    inputAmount.setValue(amount);
    await browser.pause(2000);

});

Then(/^the user selects the payment frequency as "Monthly"$/, async () => {
    const selectPaymentFrequency = await $('//select[@name="frequency"]');
    const selectpayment = await $('//option[@value="string:MONTHLY"]')
    await browser.pause(2000);
    selectPaymentFrequency.click();
    await browser.pause(2000);
    selectpayment.click();
    await browser.pause(2000);

});

Then(/^the user clicks on the "Cancel" button$/, async () => {
    const ClickOnCancle = await $('//button[@name="cancelBtn"]')
    await browser.pause(2000);
    ClickOnCancle.click();
    await browser.pause(2000);

});

Then(/^the user clicks on "Yes"$/, async () => {
    const accpetAlertYes = await $('//button[@type="button"][2]')
    await accpetAlertYes.waitForClickable({ timeout: 50000 });
    await browser.pause(2000);
    await accpetAlertYes.click();


});

Then(/^the user validates the message: "Your application with Ref no has been cancelled."$/, async () => {
    const refNumberElement = await $('//span[@id="appNumber"]');
    const refValue = await refNumberElement.getText();

    const messageElement = await $('//div[@class="sst-dp-cancel-wrapper"]/h1');
    const fullMessage = await messageElement.getText();

    const headingElement = await $('//a[contains(text(),"You can apply for other loans here")]');
    const headingText = await headingElement.getText();

    const expectedMessage = `Your application ${refValue} has been cancelled`;
    expect(fullMessage).toContain(expectedMessage);
    await browser.pause(2000);
    const ExpectUrlMessage = `You can apply for other loans here`
    expect(headingText).toContain(ExpectUrlMessage);

});

