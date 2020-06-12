import allureReporter from '@wdio/allure-reporter';

export default () => {
    allureReporter.addStep("User Entered emailAddress: ")
    $('~input-email').setValue("");
};