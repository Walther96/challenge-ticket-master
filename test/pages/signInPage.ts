import { driver, MobileBy, WebElement } from 'appium-webdriver';

export class SignInPage {
    
    public getEmailField(): WebElement {
        if (driver.isIOS()) {
            return $(MobileBy.iOSClassChain("**/XCUIElementTypeTextField[`label == 'Email Field'`]"));
        } else {
            return $(MobileBy.AndroidUIAutomator("new UiSelector().resourceIdMatches('.*:id/Email Field')"));
        }
    }

    public getPasswordField(): WebElement {
        if (driver.isIOS()) {
            return $(MobileBy.iOSClassChain("**/XCUIElementTypeSecureTextField[`label == 'Password Field'`]"));
        } else {
            return $(MobileBy.AndroidUIAutomator("new UiSelector().resourceIdMatches('.*:id/Password Field')"));
        }
    }

    public getSignInBtn(): WebElement {
        if (driver.isIOS()) {
            return $(MobileBy.iOSClassChain("**/XCUIElementTypeButton[`label == 'Sign In'`]"));
        } else {
            return $(MobileBy.AndroidUIAutomator("new UiSelector().resourceIdMatches('.*:id/Sign In Button')"));
        }
    }
    
}