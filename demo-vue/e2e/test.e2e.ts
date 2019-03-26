import { AppiumDriver, createDriver, SearchOptions, Direction } from "nativescript-dev-appium";
import { isSauceLab, runType } from "nativescript-dev-appium/lib/parser";
import { expect } from "chai";
import { scrollToElement } from "./helper"
import "mocha";
const fs = require('fs');
const addContext = require('mochawesome/addContext');
const rimraf = require('rimraf');
const isSauceRun = isSauceLab;

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
        let dir = "mochawesome-report";
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
        rimraf('mochawesome-report/*', function () { });
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

    afterEach(async function () {
        if (this.currentTest.state && this.currentTest.state === "failed") {
            let png = await driver.logScreenshot(this.currentTest.title);
            fs.copyFile(png, './mochawesome-report/' + this.currentTest.title + '.png', function (err) {
                if (err) {
                    throw err;
                }
                console.log('Screenshot saved.');
            });
            addContext(this, './' + this.currentTest.title + '.png');
        }
    });

    it("should log in via custom button", async function () {
        if (driver.isAndroid) {
            var userNameLabelElement = "Nativescript User";
        } else {
            var userNameLabelElement = "[@name='Nativescript User']";
        }

        const facebookButton = await driver.findElementByText("Custom", SearchOptions.contains);
        await facebookButton.click();

        if (driver.isAndroid) {
            await driver.wait(1000);
            const allFields = await driver.findElementsByClassName("android.widget.EditText");
            const wd = driver.wd();
            const action = new wd.TouchAction(driver.driver);
            action
                .press({ x: 380, y: 720 })
                .moveTo({ x: 380, y: 410 })
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
        if (driver.isAndroid) {
            const logInButton = await driver.findElementByClassName(driver.locators.button);
            await logInButton.click();
            await driver.wait(2000);
        } else {
            const logInButton = await driver.findElementByText("Log In");
            await logInButton.click();
            await driver.wait(2000);
        }
        let continueButton;
        if(driver.isAndroid){
            continueButton = await driver.findElementByAccessibilityId("Continue")
        }
        else{
            continueButton = await driver.findElementByText("Continue", SearchOptions.exact);
        }
        await continueButton.click();
        await driver.wait(1000);
        const userNameLabel = await driver.findElementByText("Nativescript User", SearchOptions.contains);
        expect(userNameLabel).to.exist;
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
        if (driver.isAndroid) {
            const allFields = await driver.findElementsByClassName(driver.locators.getElementByName("textfield"));
            await allFields[1].sendKeys(PASSWORD);
            await allFields[0].sendKeys(USERNAME);
            try {
                await driver.driver.hideDeviceKeyboard("Done");
            } catch (error) { }
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
        
        await scrollToElement(driver, "Post", Direction.down);
        const postButton = await driver.findElementByText("Post");
        expect(postButton).to.exist;
    });
});
