import * as application from 'tns-core-modules/application';
import { init, initAnalytics, LoginBehavior } from "nativescript-facebook";

application.on(application.launchEvent, function (args) {
    init("1771472059772879", LoginBehavior.LoginBehaviorWeb);
    initAnalytics();
});

application.run({ moduleName: "app-root" });

