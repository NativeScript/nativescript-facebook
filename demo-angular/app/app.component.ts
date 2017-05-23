import { Component } from "@angular/core";
import * as Facebook from "nativescript-facebook";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})
export class AppComponent {
    userId: string = "not logged in";

    onLogin = function (eventData: Facebook.LoginEventData) {
        if (eventData.error) {
            alert("Error during login: " + eventData.error);
        } else {
            this.userId = "UserId: " + eventData.loginResponse.userId;
        }
    };

    manualLogin = function () {
        Facebook.login((error, loginResponse) => {
            this.userId = "UserId: " + loginResponse.userId;
        });
    };

    logout = function () {
        Facebook.logout(() => {
            this.userId = "not logged in";
        });
    };
}
