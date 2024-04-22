import { Builder, Capabilities } from 'appium-webdriver';

const androidCapabilities: Capabilities = {
    platformName: 'Android',
    deviceName: '', //device name
    automationName: 'UiAutomator2',
    appPackage: '', //appPackage
    appActivity: 'MainActivity',
    platformVersion: '', //version 11
};

const iosCapabilities: Capabilities = {
    platformName: 'iOS',
    deviceName: '', //device name
    automationName: 'XCUITest',
    app: '', //.ipa
    platformVersion: '', //version 14.5
};


function getCapabilities(platform: string): Capabilities {
    if (platform.toLowerCase() === 'android') {
        return androidCapabilities;
    } else if (platform.toLowerCase() === 'ios') {
        return iosCapabilities;
    } else {
        throw new Error('Unsupported platform');
    }
}



const platform = 'android'; 
const capabilities = getCapabilities(platform);

const driver = new Builder()
    .usingServer('http://localhost:4723/wd/hub')
    .withCapabilities(capabilities)
    .build();
    