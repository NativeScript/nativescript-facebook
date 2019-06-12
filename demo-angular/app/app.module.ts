import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { AppComponent } from "./app.component";
import { NativeScriptFacebookModule } from "nativescript-facebook/angular";
import * as application from 'tns-core-modules/application';
import { routes } from "./app.routing";
import { NavigationService } from "./services/navigation.service";
import { init, initAnalytics } from "nativescript-facebook";

application.on(application.launchEvent, function (args) {
    init("1771472059772879");
    initAnalytics();
});

@NgModule({
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptFacebookModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes)
    ],
    providers: [
        NavigationService
    ],
    declarations: [AppComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
