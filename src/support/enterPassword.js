import allureReporter from '@wdio/allure-reporter';

export default () => {
    allureReporter.addStep("User Entered Password: ")
    $('~input-password').setValue("")
};