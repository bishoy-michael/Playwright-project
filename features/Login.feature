Feature: Account login
  Scenario: Login to the account
    Given I am on the login page
    When I log in with valid credentials
    Then I should reach the application