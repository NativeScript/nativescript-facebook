"use strict";
var nsAppium = require("nativescript-dev-appium");
var isAndroid = process.env.npm_config_runtype.includes("android");
describe("facebook tests", function () {
    this.timeout(100000);
    var driver;
    const FACEBOOK_BUTTON = "fbLogin";
    const USERNAME = "nativescript_gctpjih_user@tfbnw.net";
    const PASSWORD = "P@ssw0rd";
    const CUSTOM_LOGOUT_BUTTON = "customLogOut";
    const USER_NAME = "Nativescript User";
    var timeout = 10000;

    before(function () {
        driver = nsAppium.createDriver();
    });

    after(function () {
        return driver
        .quit()
        .finally(function () {
            console.log("Driver quit successfully");
        });
    });

    it("should log in via original button", function () {
        if(isAndroid){
            var usernameFieldElement = "//" + nsAppium.getXPathElement("textfield") + "[@content-desc='Email or Phone']";
            var passwordFieldElement = "//" + nsAppium.getXPathElement("textfield") + "[@NAF='true']";
            var loginButtonElement = "//" + nsAppium.getXPathElement("button") + "[@text='']";
            var okButtonElement = "//" + nsAppium.getXPathElement("button") + "[@text='' and @instance='1']";
            var userNameLabelElement = "//" + nsAppium.getXPathElement("label") + "[@text='Nativescript User']";
        } else {
            var usernameFieldElement = "//" + nsAppium.getXPathElement("textfield") + "[@value='Email or Phone']";
            var passwordFieldElement = "//" + nsAppium.getXPathElement("securetextfield") + "[@value='Facebook Password']";
            var loginButtonElement = "//" + nsAppium.getXPathElement("button") + "[@name='Log In']";
            var okButtonElement = "//" + nsAppium.getXPathElement("button") + "[@name='OK']";
            var userNameLabelElement = "//" + nsAppium.getXPathElement("label") + "[@name='Nativescript User']";
        }

        var step1 = driver
            .waitForElementByAccessibilityId(FACEBOOK_BUTTON, timeout)
                .should.eventually.exist
            .click()
            .waitForElementByXPath(usernameFieldElement, timeout)
            .sendKeys(USERNAME)
            .waitForElementByXPath(passwordFieldElement, timeout)  //Password field
            .sendKeys(PASSWORD)
            .waitForElementByXPath(loginButtonElement, timeout) //Log in button
            .click();
        var step2 = isAndroid ? step1.sleep(6000) : step1.sleep(2000);
        step2
            .waitForElementByXPath(okButtonElement, timeout) // OK button
            .click();
        var step3 = isAndroid ? step2 : step2.sleep(5000);
        return step3
            .waitForElementByXPath(userNameLabelElement, timeout) //TODO use wait for element by text USER_ID
                .text().should.eventually.equal(USER_NAME);
    });

    it("should log out via custom button", function () {
        return driver
            .waitForElementByAccessibilityId(CUSTOM_LOGOUT_BUTTON, timeout)
                .should.eventually.exist
            .click()
            .waitForElementByAccessibilityId(FACEBOOK_BUTTON, timeout)
                .should.eventually.exist
    });
});