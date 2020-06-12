import allureReporter from '@wdio/allure-reporter';

export default () => {
    $('~button-LOGIN').click();
    allureReporter.addStep('Validating Error message')
    const errorLabel = 'new UiSelector().text("Please enter a valid email address")'
   $(`android=${errorLabel}`).getText().should.equal('Please enter a valid email address')

    const errorLabel2 = 'new UiSelector().text("Please enter at least 8 characters")'
    $(`android=${errorLabel2}`).getText().should.equal('Please enter at least 8 character')

    allureReporter.addStep("Validation successfull")
};