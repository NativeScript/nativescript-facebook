import { Component, ChangeDetectorRef } from "@angular/core";
import * as Facebook from "nativescript-facebook";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})
export class AppComponent {
    userId: string = "not logged in";

    constructor(private ref: ChangeDetectorRef) {
    }

    onLogin = function (eventData: Facebook.LoginEventData) {
        if (eventData.error) {
            alert("Error during login: " + eventData.error);
        } else {
            this.userId = "UserId: " + eventData.loginResponse.userId;
            this.ref.detectChanges();
        }
    };

    manualLogin = function () {
        Facebook.login((error, loginResponse) => {
            this.userId = "UserId: " + loginResponse.userId;
            this.ref.detectChanges();
        });
    };

    manualLogout = function () {
        Facebook.logout(() => {
            this.userId = "not logged in";
            this.ref.detectChanges();
        });
    };

    public onLogout() {
        this.userId = "not logged in";
        this.ref.detectChanges();
    }
}
