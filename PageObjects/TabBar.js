import allureRerport from '@wdio/allure-reporter'
export default class TabBar{

    static openHome () {
        $('~Home').click();
        allureRerport.addStep("User navigated to Home Tab.")
    }

    static openWebView () {
        $('~WebView').click();
        allureRerport.addStep("User navigated to Home Tab.")
    }

    static openLogin () {
        $('~Login').click();
        allureRerport.addStep("User navigated to Home Tab.")
    }

    static openForms () {
        $('~Forms').click();
        allureRerport.addStep("User navigated to Home Tab.")
    }

    static openSwipe () {
        $('~Swipe').click();
        allureRerport.addStep("User navigated to Home Tab.")
    }

    static waitForTabBarShown () {
        $('~Home').waitForDisplayed({
            timeout: 20000,
        });
        allureRerport.addStep("User waited for Home Tab to load.")
    }
}