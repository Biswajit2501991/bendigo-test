
Feature: Launch Bendigo Prod URL

Scenario: Bendigo Bank home page
Given the user is on the Bendigo Bank home page
When the user hovers over Banking on the home screen
Then the user should see the following Bank Account , Credit card, Personal Loans,Travel and International Payments and select Credit card.

Scenario: select Bendigo Bright® Credit Card
Given the user clicks on Apply Now for Bendigo Bright® Credit Card
When the "Check my eligibility" screen is displayed
Then the user clicks on Continue to Apply


Scenario Outline: Getting Started
Given the user is on the Getting StartedS section
Then the user enters the test data Preferred Credit Limit 10000
Then the user selects General Purpose for the purpose
Then the user clicks on Continue


Scenario Outline: Application Details
Given the user is on the Application page
Then the user selects relationship status single
Then the user selects No for the next two questions
Then the user clicks on the Continue button.

Examples:
    | Application | 
    | Application Details| 

Scenario Outline: Time and Eligibility Section
Given the user is on the TimeScreen screen
Then the user selects Yes for the question
Then the user clicks on the Continue button.


Scenario Outline: Branch Details Screen
Given the user is on the BranchScreen screen
Then the user enters the Location <location> and clicks on the Find button
Then the user selects the Clifton Hill option and clicks on Continue
    
    Examples:
    | location   |
    | Melbourne  |
    

Scenario Outline: Income Details Screen
Given the user validates that the IncomeScreen section is displayed
 When the user selects the employment status as "Casual"
 Then the user should see the "Occupation" screen and selects "Professional"
 Then the user validates that the "Income" screen is displayed
 Then the user enters the amount - <enteramount>
 Then the user selects the frequency as "Annually"
 Then the user clicks on the "Continue" button.

Examples:
    | enteramount | 
    | 10000 | 

Scenario: Validate Expense details screen
Given the User expense section is displayed
Then the user enters the amount - <amount>
Then the user selects the payment frequency as "Monthly"
Then the user clicks on the "Cancel" button
Then the user clicks on "Yes"
Then the user validates the message: "Your application with Ref no has been cancelled."

Examples:
    | amount | 
    | 6000 | 