const {Given, When, Then} = require('@cucumber/cucumber');

const CelsiusToFahrenheitConvertorPage = require('./../pages/celsiusToFahrenheitConvertor.page');

const celsiusToFahrenheitConvertorPage = new CelsiusToFahrenheitConvertorPage();

Given(/^I launch the app$/, () => {
    celsiusToFahrenheitConvertorPage.launchApp();
});

When(/^I click on Get Started$/, () => {
    celsiusToFahrenheitConvertorPage.clickGetStarted();
});

Then(/^I should see pop up$/, () => {
    celsiusToFahrenheitConvertorPage;
});
