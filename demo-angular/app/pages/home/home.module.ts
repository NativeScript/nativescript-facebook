import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { HomeComponent } from "./home.component";
import { CommonModule } from "@angular/common";

import { NativeScriptFacebookModule } from "nativescript-facebook/angular";

export const routerConfig = [
    {
        path: "",
        component: HomeComponent
    }
];

@NgModule({
    imports: [
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild(routerConfig),
        CommonModule
    ],
    declarations: [ HomeComponent ],
    schemas: [ NO_ERRORS_SCHEMA ]
})
export class HomeModule { }
