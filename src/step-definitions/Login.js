import { Given, When, Then } from "cucumber";
import LoginScreen from "../../PageObjects/LoginScreen"
import TabBar from "../../PageObjects/TabBar";
import allureRerport from '@wdio/allure-reporter'

Given(/^I click on login tab$/, () => {
    allureRerport.addStep("User navigated to login screen.")
    TabBar.openLogin();
})

When(/^I enter no emailAddress$/, () => {
    LoginScreen.setEmailAddress("");
})

When(/^I enter \"(.*)\" emailAddress$/, (email) => {
    LoginScreen.setEmailAddress(email);
})

When(/^I enter \"(.*)\" password$/, (password) => {
    LoginScreen.setPassword(password)
})

When(/^I enter no password$/, () => {
    LoginScreen.setPassword("")
})

Then(/^I expect validation feilds in login tab$/, () => {

    LoginScreen.clickLoginButton()

    const emailError = LoginScreen.getEmailErrorLabel();
    const passwordError = LoginScreen.getPasswordErrorLabel();

    expect(emailError).equal("Please enter a valid email address")
    expect(passwordError).equal("Please enter at least 8 character")
})

Then(/^I expect user for sucessfull login$/, () => {

    LoginScreen.clickLoginButton()
    LoginScreen.loginAlertSuccess();
    allureRerport.addStep("User logged in successfully")
})