Feature: Performing a login

    As a user on the Herokuapp login page
    I want to login
    Because I want to be more secure, or something

    Background:

        Given I am on the Herokuapp page

    Scenario Outline: Performing login operation with passing test data as data table
        When I login with username and password <user> <password> into the HA text box
        Then I should see the message "You logged into a secure area!" on my login page

        Examples:
        | user | password |
        | tomsmith | SuperSecretPassword! |
