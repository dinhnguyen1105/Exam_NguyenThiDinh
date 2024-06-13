
Feature: test the exam

  Scenario: As a user, I can log into the secure area

    Given I am on the login page
    When I choose desination
    When I choose time to flight
    Then I choose Passenger
    Then I click button Search
    Then I should see a breadcrumb contains Hà Nội - Sài Gòn (TP.HCM)


