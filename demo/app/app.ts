import * as application from 'application';
var nsFacebook = require('nativescript-facebook');

application.on(application.launchEvent, function (args) {
    nsFacebook.init("159198307916686");
});

application.start({ moduleName: "main-page" });

