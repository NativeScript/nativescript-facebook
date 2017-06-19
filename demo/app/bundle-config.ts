if ((<any>global).TNS_WEBPACK) {
    require("tns-core-modules/bundle-entry-points");

    global.registerModule("login-page", () => require("./login-page"));
    global.registerModule("home-page", () => require("./home-page"));

    // register application modules
    global.registerModule("nativescript-facebook", () => require("nativescript-facebook"));
}
