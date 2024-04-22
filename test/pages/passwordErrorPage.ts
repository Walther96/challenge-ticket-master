import { driver, MobileBy, WebElement } from 'appium-webdriver';

export class PasswordErrorPage {
    public getInvalidEmailError(): WebElement {
        if (driver.isIOS()) {
            return $(MobileBy.iOSClassChain("**/XCUIElementTypeStaticText[`label == 'Long Error String For Invalid Email'`]"));
        } else {
            return $(MobileBy.AndroidUIAutomator("new UiSelector().resourceIdMatches('.*:id/Long Error String For Invalid Email')"));
        }
    }

    public getInvalidPasswordError(): WebElement {
        if (driver.isIOS()) {
            return $(MobileBy.iOSClassChain("**/XCUIElementTypeStaticText[`label == 'Long Error String For Invalid Password'`]"));
        } else {
            return $(MobileBy.AndroidUIAutomator("new UiSelector().resourceIdMatches('.*:id/Long Error String For Invalid Password')"));
        }
    }

    public getForgotPasswordButton(): WebElement {
        if (driver.isIOS()) {
            return $(MobileBy.iOSClassChain("**/XCUIElementTypeButton[`label == 'Forgot Password'`]"));
        } else {
            return $(MobileBy.AndroidUIAutomator("new UiSelector().resourceIdMatches('.*:id/Forgot Password Button')"));
        }
    }
}