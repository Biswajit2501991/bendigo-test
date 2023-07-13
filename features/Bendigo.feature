Feature: Launch Bendigo Prod URL

Scenario: Check Banker url is launched successfully

    Given User should see the Bandigo Bank home page
    When User hover over Banking on home screen
    Then User should see the following link Bank Account Credit card Personal Loans and Travel and International Payments and select the credit cards
  

    Given User should Click on apply now for Bendigo Bright® Credit Card
    When User see Check my eligibility screen is shown
    Then User Click on Continue to Apply

    Given User is on getting started section tab
    Then user Enter Test Data Preferred Credit Limit 10000
    Then User select purpose as general purpose use
    Then user click on Continue


    