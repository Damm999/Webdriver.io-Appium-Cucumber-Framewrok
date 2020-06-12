Feature: WDIO APP test
   Perform login action and validate login

    Background:
        Given I click on login tab

    Scenario: Validate login error feilds
        When I enter no emailAddress
        When I enter no password 
        Then I expect validation feilds in login tab

    Scenario: Validate login action
        When I enter "user@gmail.com" emailAddress
        When I enter "password" password 
        Then I expect user for sucessfull login
    