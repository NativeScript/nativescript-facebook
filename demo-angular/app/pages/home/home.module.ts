import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { HomeComponent } from "./home.component";

import { NativeScriptFacebookModule } from "nativescript-facebook/angular";

export const routerConfig = [
    {
        path: "",
        component: HomeComponent
    }
];

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild(routerConfig)
    ],
    declarations: [ HomeComponent ],
    schemas: [ NO_ERRORS_SCHEMA ]
})
export class HomeModule { }
