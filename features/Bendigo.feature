Feature: Launch Bendigo Prod URL

Scenario: Check Banker url is launched successfully

    Given User should see the Bandigo Bank home page
    When User hover over Banking on home screen
    Then User should see the following link Bank Account Credit card Personal Loans and Travel and International Payments and select the credit cards


    Given User is on credit card home screen
    When User select select Apply now for  Bendigo Bright® Credit Card
    Then User should see the following link Bank Account Credit card Personal Loans and Travel and International Payments and select the credit cards