import { Observable } from 'tns-core-modules/data/observable';
import { LoginEventData, login as fbLogin } from "nativescript-facebook";
let frameModule = require("tns-core-modules/ui/frame");
let appSettings = require("tns-core-modules/application-settings");

export class LoginViewModel extends Observable {

  private _navigate(path: string) {
    let topmost = frameModule.topmost();
    topmost.navigate({
      moduleName: path,
      clearHistory: true
    });
  }

  public onLogin(eventData: LoginEventData) {
    if (eventData.error) {
      alert("Error during login: " + eventData.error.message);
    } else {
      appSettings.setString("access_token", eventData.loginResponse.token);
      this._navigate("home-page");
    }
  }

  public login() {
    fbLogin((err, fbData) => {
      if (err) {
        alert("Error during login: " + err.message);
      } else {
        appSettings.setString("access_token", fbData.token);
        this._navigate("home-page");
      }
    });
  }
}
