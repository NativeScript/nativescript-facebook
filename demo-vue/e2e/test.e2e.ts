import {
    AppiumDriver,
    createDriver,
    SearchOptions
} from "nativescript-dev-appium";
import { isSauceLab, runType } from "nativescript-dev-appium/lib/parser";
import { expect } from "chai";
import "mocha";

const isSauceRun = isSauceLab;
const isAndroid: boolean = runType.includes("android");

describe("Facebook tests", async function () {
    const FACEBOOK_BUTTON = "fbLogin";
    const USERNAME = "nativescript_gctpjih_user@tfbnw.net";
    const PASSWORD = "P@ssw0rd";
    const CUSTOM_LOGOUT_BUTTON = "customLogOut";
    const USER_NAME = "Nativescript User";
    let driver: AppiumDriver;

    before(async () => {
        driver = await createDriver();
        driver.defaultWaitTime = 20000;
    });

    after(async () => {
        if (isSauceRun) {
            driver.sessionId().then(function (sessionId) {
                console.log("Report: https://saucelabs.com/beta/tests/" + sessionId);
            });
        }
        await driver.quit();
        console.log("Driver successfully quit");
    });

    it("should log in via custom button", async function () {
        if (isAndroid) {
            var userNameLabelElement = "[@text='Nativescript User']";
        } else {
            var userNameLabelElement = "[@name='Nativescript User']";
        }

        const facebookButton = await driver.findElementByText("Custom", SearchOptions.contains);
        await facebookButton.click();

        if (isAndroid) {
            const allFields = await driver.findElementsByClassName(driver.locators.getElementByName("textfield"));
            const wd = driver.wd();
            const action = new wd.TouchAction(driver.driver);
            action
                .press({ x: 52, y: 499 })
                .moveTo({ x: -2, y: -294 })
                .release();
            await action.perform();
            await driver.wait(1000);
            await allFields[1].sendKeys(PASSWORD);
            try {
                await driver.driver.hideDeviceKeyboard();
            } catch (error) { }
            await driver.wait(1000);
            await allFields[0].sendKeys(USERNAME);
        } else {
            const passField = await driver.findElementByClassName(driver.locators.getElementByName("securetextfield"));
            await passField.click();
            await passField.sendKeys(PASSWORD);
            const usernameField = await driver.findElementByClassName(driver.locators.getElementByName("textfield"));
            await usernameField.click();
            await usernameField.sendKeys(USERNAME);
        }
        try {
            await driver.driver.hideDeviceKeyboard("Done");
        } catch (error) { }
        if (isAndroid) {
            const logInButton = await driver.findElementByClassName(driver.locators.button);
            await logInButton.click();
            const continueButton = await driver.findElementByText("Continue");
            await continueButton.click();
        } else {
            const logInButton = await driver.findElementByText("Log In");
            await logInButton.click();
            const continueButton = await driver.findElementByText("Continue");
            await continueButton.click();
        }
        const userNameLabel = await driver.findElementByXPath(
            "//" + driver.locators.getElementByName("label") + userNameLabelElement
        );
        const userName = await userNameLabel.text();
        expect(userName).to.equal(USER_NAME, "Not logged with the same user");
    });

    it("should log out via custom button", async function () {
        const allButtons = await driver.findElementsByClassName(driver.locators.button);
        await allButtons[1].click();
        const facebookButton = await driver.findElementByText("Continue with Facebook", SearchOptions.exact);
        expect(facebookButton).to.exist;
    });

    it("should share a link", async function () {
        const shareLinkButton = await driver.findElementByText("Open Share dialog", SearchOptions.contains);
        await shareLinkButton.click();
        if (isAndroid) {
            const allFields = await driver.findElementsByClassName(driver.locators.getElementByName("textfield"));
            await allFields[1].sendKeys(PASSWORD);
            await allFields[0].sendKeys(USERNAME);
            const logInButton = await driver.findElementByClassName(driver.locators.button);
            await logInButton.click();
        } else {
            const passField = await driver.findElementByClassName(driver.locators.getElementByName("securetextfield"));
            await passField.click();
            await passField.sendKeys(PASSWORD);
            const usernameField = await driver.findElementByClassName(driver.locators.getElementByName("textfield"));
            await usernameField.click();
            await usernameField.sendKeys(USERNAME);
            const logInButton = await driver.findElementByText("Log In");
            await logInButton.click();
        }

        const postButton = await driver.findElementByText("Post");
        expect(postButton).to.exist;
    });
});
