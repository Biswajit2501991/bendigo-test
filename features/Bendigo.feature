Feature: Launch Bendigo Prod URL

Scenario: End to End Testing

    Given User should see the Bandigo Bank home page
    When User hover over Banking on home screen
    Then User should see the following link Bank Account Credit card Personal Loans and Travel and International Payments and select the credit cards
  

    Given User should Click on apply now for Bendigo Bright® Credit Card
    When User see Check my eligibility screen is shown
    Then User Click on Continue to Apply

    Given User is on getting started section tab
    Then user Enter Test Data Preferred Credit Limit 10000
    Then User select purpose general purpose use
    Then user click on Continue

    Given User is on application details page
    Then User select single relationship status
    Then User select no for next two question
    Then User click on Continue button

    Given User validate Time and Eligibility screen
    Then User Select Yes from the question 
    Then User select Continue button

    Given User is on Branch Details screen
    Then User Enter location As Melbourne and Click on Find
    Then User Select Clifton Hill Option and Click Contine


    Given User Validate income details section is displaying
    When User select the Empy Status As Casual
    Then User Input Occupation As Professional screen shoul display
    Then User select Social Professionals
    Then User Validate Income Screen is displaying
    Then User Enter amount as 20000
    Then user Select frequency as Anually
    Then User Click on contine button

    Given User Expenses section is displaying
    Then User enter amount as 6000
    Then user select payment frequency as Monthly
    Then User click on Cancel buttion
    Then User Click on Yes
    Then User validate Your application with Ref no has been cancelled message








    