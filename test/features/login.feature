@SignIn
Feature: Mobile application Sign In

@Success
Scenario: User is able to successfully sign into the application. 
  Given The user is currently signed out of the application 
    And the user has arrived on the app Sign In page 
    And the username is valid 'user'
    And the password is 'passValid'
    When the username is entered into the username field 
    And the password is entered into the password field 
    And the user taps the Sign In button 
    Then the user is successfully signed into the application 
    And the Sign Out button appears on My Account


@NotSuccess
Scenario: User receives correct error message for invalid password 
  Given The user is currently signed out of the application 
    And the user has arrived on the app Sign In page 
    And the username is valid 'user'
    And the password is 'passInvalid'
    When the username is entered into the username field 
    And the password is entered into the password field 
    And the user taps the Sign In button 
    Then the correct error message for invalid password appears