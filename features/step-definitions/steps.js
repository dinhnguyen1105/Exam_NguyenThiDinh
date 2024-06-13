const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const HomePage = require('../pageobjects/login.page');

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open();
});


When('I choose desination', async () => {
    await HomePage.iChooseDestination();
})

When('I choose time to flight', async () => {
    await HomePage.iChooseTime();
})

Then(/^I should see a breadcrumb contains (.*)$/, async (message) => {
    const titleText = await SecurePage.iVerifyTitleFlight();
    console.log(titleText);
    expect(titleText).toBe(message);
});

Then('I choose Passenger', async () => {
    await HomePage.iChoosePeople();
});

Then('I click button Search', async () => {
  await HomePage.iSearchFlight();
})





