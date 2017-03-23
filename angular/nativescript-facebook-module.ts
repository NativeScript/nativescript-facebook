import { NgModule } from "@angular/core";
import { registerElement } from "nativescript-angular/element-registry";

import { DIRECTIVES } from "./nativescript-facebook-directives";
var LoginButton = require("../");

@NgModule({
    declarations: [DIRECTIVES],
    exports: [DIRECTIVES],
})
export class NativescriptFacebookModule { }

registerElement("FacebookLoginButton", () => LoginButton.LoginButton);