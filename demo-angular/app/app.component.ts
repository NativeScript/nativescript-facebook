import { Component } from "@angular/core";
import { LoginResponse } from "nativescript-facebook";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})
export class AppComponent { 
    onLogin = function (error: string, loginResponse : LoginResponse) {
        console.log("TOKEN: " + loginResponse.token);
    }
}
