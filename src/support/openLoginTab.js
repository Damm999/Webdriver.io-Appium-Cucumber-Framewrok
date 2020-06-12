import allureReporter from '@wdio/allure-reporter';

/**
 * Open the given URL
 * @param  {String}   type Type of navigation (getUrl or site)
 * @param  {String}   page The URL to navigate to
 */
export default () => {
    allureReporter.addStep('Clicked on Login Tab')
    $('~Login').click();
};