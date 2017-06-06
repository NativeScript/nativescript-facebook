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
    const USER_ID = "UserId: 132396757312450";

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
//=============================== ANDROID TESTS ==========================
    if(isAndroid){
        describe("android tests", function () {

            it("should log in via original button", function () {
                return driver
                    .elementByAccessibilityId(FACEBOOK_BUTTON)
                        .should.eventually.exist
                    .click()
                    .waitForElementsByClassName(nsAppium.getXPathElement("textfield"), 10000).first()
                    .setText(USERNAME)
                    .elementsByClassName(nsAppium.getXPathElement("textfield")).last()  //Password field
                    .setText(PASSWORD)
                    .elementsByClassName(nsAppium.getXPathElement("button")).first() //Log in button
                    .click()
                    .sleep(3000)
                    .waitForElementsByClassName(nsAppium.getXPathElement("button"), 10000).last()  // OK button
                    .click()
                    .waitForElementsByClassName(nsAppium.getXPathElement("label"), 10000).last()
                        .text().should.eventually.equal(USER_ID)
            });

            it("should log out via custom button", function () {
                return driver
                    .elementByAccessibilityId(CUSTOM_LOGOUT_BUTTON)
                        .should.eventually.exist
                    .tap()
                    .waitForElementByAccessibilityId(FACEBOOK_BUTTON)
                        .text().should.eventually.equal("Log in with Facebook")
            });
        });
    } else {
//=========================================== IOS TESTS ======================================
        describe("ios tests", function(){

            it("should log in via original button", function () {
                return driver
                    .elementByAccessibilityId(FACEBOOK_BUTTON)
                        .should.eventually.exist
                    .click()
                    // Needed for IOS because IfExists does not have timeout
                    .sleep(5000)
                    .elementByClassNameIfExists(nsAppium.getXPathElement("textfield"))
                    .then(function(el){
                        if(el){
                            return driver
                            .elementsByClassName(nsAppium.getXPathElement("textfield")).first()
                            .sendKeys(USERNAME)
                            .elementsByClassName(nsAppium.getXPathElement("securetextfield")).last() // Password field
                            .sendKeys(PASSWORD)
                            .elementsByClassName(nsAppium.getXPathElement("button")).nth(4) //Log in button
                            .click()
                        }
                    })
                    .waitForElementsByClassName(nsAppium.getXPathElement("button"), 10000).nth(5) // OK button
                    .click()
                    .sleep(2000) // Take time to change label value
                    .elementByClassName(nsAppium.getXPathElement("label"))
                        .text().should.eventually.equal(USER_ID)
            });

            it("should log out via original button", function () {
                return driver
                    .elementByAccessibilityId(FACEBOOK_BUTTON)
                        .should.eventually.exist
                    .click()
                    .elementsByClassName(nsAppium.getXPathElement("button")).first() //Log out confirmation button
                    .click()
                    .sleep(2000) // Take time to change label value
                    .elementByClassName(nsAppium.getXPathElement("label"))
                        .text().should.eventually.equal("not logged in")
            });
        })
    }
});