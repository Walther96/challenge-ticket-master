import { driver, MobileBy, WebElement } from 'appium-webdriver';

export class AccountPage {

    public getSignOutButton(): WebElement {
        if (driver.isIOS()) {
            return $(MobileBy.iOSClassChain("**/XCUIElementTypeButton[`label == 'Sign Out'`]"));
        } else {
            return $(MobileBy.AndroidUIAutomator("new UiSelector().resourceIdMatches('.*:id/Sign Out Button')"));
        }
    }
    public getSignInButton(): WebElement {
        if (driver.isIOS()) {
            return $(MobileBy.iOSClassChain("**/XCUIElementTypeButton[`label == 'Sign In'`]"));
        } else {
            return $(MobileBy.AndroidUIAutomator("new UiSelector().resourceIdMatches('.*:id/Sign In Button')"));
        }
    }
    public getHeaderText(): WebElement {
        if (driver.isIOS()) {
            return $(MobileBy.iOSClassChain("**/XCUIElementTypeStaticText[`label == 'My Account'`]"));
        } else {
            return $(MobileBy.AndroidUIAutomator("new UiSelector().resourceIdMatches('.*:id/My Account')"));
        }
    }

}
