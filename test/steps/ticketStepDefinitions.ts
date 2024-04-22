import { SignInPage } from '../pages/signInPage';
import { AccountPage } from '../pages/accountPage';
import { PasswordErrorPage } from '../pages/passwordErrorPage';

const { Given, When, Then } = require('cucumber');

declare const userField: string;
declare const passField: string;

Given('The user is currently signed out of the application', () => {
    
});

Given('the user has arrived on the apps Sign In page', () => {
    expect(SignInPage.getSignInBtn.getText()).to.equal('Sign in');
});
Given('the username is valid {string}', (user) => {
    userField === user;
});
Given('the password is {string}', (pass) => {
    passField === pass;
});
When('the username is entered into the username field', () => {
    SignInPage.getEmailField.setValue(userField);
}); 
When('the password is entered into the password field', () => {
    SignInPage.getPasswordField.setValue(passField);
});
When('the user taps the Sign In button', () => {
    SignInPage.getSignInBtn.click();
});
Then('the user is successfully signed into the application', () => {
    expect(AccountPage.getHeaderText.getText()).to.equal('My Account');
});
Then('the correct error message for invalid password appears', () => {
    expect(PasswordErrorPage.getInvalidPasswordError.getText()).to.equal('Long Error String For Invalid Password');
});


