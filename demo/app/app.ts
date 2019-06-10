import * as application from 'tns-core-modules/application';
import { init, initAnalytics } from "nativescript-facebook";

application.on(application.launchEvent, function (args) {
    init("1771472059772879");
    initAnalytics();
});

application.run({ moduleName: "app-root" });

