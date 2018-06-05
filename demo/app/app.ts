import * as application from 'tns-core-modules/application';
import { init, LoginBehavior } from "nativescript-facebook";

application.on(application.launchEvent, function (args) {
    init("1771472059772879", LoginBehavior.LoginBehaviorWeb);
});

application.run({ moduleName: "app-root" });

