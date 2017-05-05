import { NgModule } from "@angular/core";
import { registerElement } from "nativescript-angular/element-registry";

import { DIRECTIVES } from "./nativescript-facebook-directives";

@NgModule({
    declarations: [DIRECTIVES],
    exports: [DIRECTIVES],
})
export class NativeScriptFacebookModule { }

registerElement("FacebookLoginButton", () => require("../").LoginButton);
