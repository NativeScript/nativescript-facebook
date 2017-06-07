"use strict";
var nsAppium = require("nativescript-dev-appium");
var isAndroid = process.env.npm_config_runtype.includes("android");
describe("facebook tests", function () {
    this.timeout(100000);
    var driver;
    const FACEBOOK_BUTTON = "fbLogin";
    const USERNAME = "open_qgonlya_user@tfbnw.net";
    const PASSWORD = "P@ssw0rd";
    const CUSTOM_LOGOUT_BUTTON = "customLogOut";
    const USER_NAME = "Open Graph Test User";

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
        var config = {
            passwordFieldElement : isAndroid ? "textfield" : "securetextfield",
            loginButtonIndex : isAndroid ? 1 : 4,
            okButtonIndex : isAndroid ? 2 : 5
        }

        var step1 = driver
            .elementByAccessibilityId(FACEBOOK_BUTTON)
                .should.eventually.exist
            .click()
            .waitForElementsByClassName(nsAppium.getXPathElement("textfield"), 10000).first()
            .sendKeys(USERNAME)
            .elementsByClassName(nsAppium.getXPathElement(config.passwordFieldElement)).last()  //Password field
            .sendKeys(PASSWORD)
            .elementsByClassName(nsAppium.getXPathElement("button")).nth(config.loginButtonIndex) //Log in button
            .click();
        var step2 = isAndroid ? step1.sleep(6000) : step1.sleep(2000);
        step2
            .waitForElementsByClassName(nsAppium.getXPathElement("button"), 10000).nth(config.okButtonIndex)  // OK button
            .click();
        var step3 = isAndroid ? step2 : step2.sleep(5000);
        return step3
            .waitForElementsByClassName(nsAppium.getXPathElement("label"), 10000).last() //TODO use wait for element by text USER_ID
                .text().should.eventually.equal(USER_NAME);
    });

    it("should log out via custom button", function () {
        return driver
            .elementByAccessibilityId(CUSTOM_LOGOUT_BUTTON)
                .should.eventually.exist
            .click()
            .elementByAccessibilityId(FACEBOOK_BUTTON)
                .should.eventually.exist
    });
});