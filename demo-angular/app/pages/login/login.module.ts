import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
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
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild(routerConfig)
    ],
    declarations: [ LoginComponent ],
    schemas: [ NO_ERRORS_SCHEMA ]
})
export class LoginModule { }
