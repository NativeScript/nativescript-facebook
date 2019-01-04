import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { LoginComponent } from "./login.component";

import { NativeScriptFacebookModule } from "nativescript-facebook/angular";

export const routerConfig = [
    {
        path: "",
        component: LoginComponent
    }
];

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild(routerConfig)
    ],
    declarations: [ LoginComponent ],
    schemas: [ NO_ERRORS_SCHEMA ]
})
export class LoginModule { }
