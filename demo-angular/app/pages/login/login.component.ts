import { Component, ChangeDetectorRef } from "@angular/core";
import * as Facebook from "nativescript-facebook";
import { NavigationService } from "../../services/navigation.service";
import * as appSettings from "tns-core-modules/application-settings";

@Component({
    selector: "login",
    moduleId: module.id,
    templateUrl: "login.component.html",
    styleUrls: ["login.component.css"]
})
export class LoginComponent {

    constructor(private ref: ChangeDetectorRef, private navigationService: NavigationService) {
    }

    onLogin(eventData: Facebook.LoginEventData) {
        if (eventData.error) {
            alert("Error during login: " + eventData.error);
        } else {
            appSettings.setString("access_token", eventData.loginResponse.token);
            this.navigationService.go(['home']);
        }
    }

    login() {
        Facebook.login((error, fbData) => {
            if (error) {
                alert("Error during login: " + error.message);
            } else {
                appSettings.setString("access_token", fbData.token);
                this.navigationService.go(['home']);
            }
        });
    }

    public getCurrentAccessToken() {
        let accessToken = Facebook.getCurrentAccessToken();

        alert("Current access token: " + JSON.stringify(accessToken, null, '\t'));
    }
}
