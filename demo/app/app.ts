import "./bundle-config";

import * as application from 'application';
import { init } from "nativescript-facebook";

application.on(application.launchEvent, function (args) {
    init("1771472059772879");
});

application.start({ moduleName: "login-page" });

