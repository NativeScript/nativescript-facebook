// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import * as application from 'application';
var nsFacebook = require('nativescript-facebook');

import { AppModule } from "./app.module";

application.on(application.launchEvent, function (args) {
    nsFacebook.init("159198307916686");
});

platformNativeScriptDynamic().bootstrapModule(AppModule);
