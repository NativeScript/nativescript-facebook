import { Component } from "@angular/core";
import * as Facebook from "nativescript-facebook";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})
export class AppComponent {
    userId: string;

    onLogin = function (eventData: Facebook.LoginEventData) {
        this.userId = "UserId: " + eventData.loginResponse.userId;
    };

    manualLogin = function () {
        Facebook.login((error, loginResponse) => {
            this.userId = "UserId: " + loginResponse.userId;
        });
    };
}
