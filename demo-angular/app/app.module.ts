import { NgModule, NO_ERRORS_SCHEMA, NgModuleFactoryLoader } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule, NSModuleFactoryLoader } from "nativescript-angular/router";
import { AppComponent } from "./app.component";
import { LoginModule } from "./pages/login/login.module";
import { HomeModule } from "./pages/home/home.module";
import { NativeScriptFacebookModule } from "nativescript-facebook/angular";
import * as application from 'tns-core-modules/application';
import { routes } from "./app.routing";
import { NavigationService } from "./services/navigation.service";
import { init, LoginBehavior } from "nativescript-facebook";

application.on(application.launchEvent, function (args) {
    init("1771472059772879", LoginBehavior.LoginBehaviorWeb);
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
        NavigationService,
        { provide: NgModuleFactoryLoader, useClass: NSModuleFactoryLoader }
    ],
    declarations: [AppComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
