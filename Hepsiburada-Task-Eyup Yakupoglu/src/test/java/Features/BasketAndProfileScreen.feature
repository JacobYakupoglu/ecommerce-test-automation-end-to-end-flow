Feature: Verifying whether related products are correctly added to the cart

  Background: Navigate to the website and login
    Given Navigate to the Trendyol website
    When Login to Trendyol website

  Scenario: Adding products to the cart and checking the cart content
    Then The "laptop" is searched from the search textbox. First and third product added to cart
    Then The quantity of any product in the basket is increased

  Scenario: Updating profile informations
    Then Click on my user information
    Then Date of birth is changed
    Then Click the update button and exit
