import { Component } from "@angular/core";
import * as Facebook from "nativescript-facebook";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})
export class AppComponent {
    onLogin = function (error: string, loginResponse: Facebook.LoginResponse) {
        console.log("TOKEN: " + loginResponse.token);
    };

    testAction = function () {
        Facebook.login((error, data) => {
            console.log("Success!");
        });
    };
}
