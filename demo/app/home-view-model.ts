import { Observable } from 'tns-core-modules/data/observable';
import { LoginEventData, logout as fbLogout, logEvent, getCurrentAccessToken } from "nativescript-facebook";

let frameModule = require("tns-core-modules/ui/frame");
let appSettings = require("tns-core-modules/application-settings");
let imageSource = require("tns-core-modules/image-source");
let http = require("tns-core-modules/http");
let config = require("./app.config").config;

export class HomeViewModel extends Observable {
  userId: string;
  accessToken: string = appSettings.getString("access_token");
  eventCounter: 0;

  constructor() {
    super();
    // Get logged in user's info
    http.getJSON(config.FACEBOOK_GRAPH_API_URL + "/me?access_token=" + this.accessToken).then((res) => {
      this.set("username", res.name);
      this.set("userId", res.id);

      // Get logged in user's avatar
      // ref: https://github.com/NativeScript/NativeScript/issues/2176
      console.log(config.FACEBOOK_GRAPH_API_URL + "/" + this.get("userId") + "/picture?type=large&redirect=false&access_token=" + this.accessToken);
      http.getJSON(config.FACEBOOK_GRAPH_API_URL + "/" + this.get("userId") + "/picture?type=large&redirect=false&access_token=" + this.accessToken).then((res) => {
        this.set("avatarUrl", res.data.url);
      }, function (err) {
        alert("Error getting user info: " + err);
      });
    }, function (err) {
      alert("Error getting user info: " + err);
    });
  }

  private _navigate(path: string) {
    let topmost = frameModule.topmost();
    topmost.navigate({
      moduleName: path,
      clearHistory: true
    });
  }

  public onLogout() {
    appSettings.clear();
    this._navigate("login-page");
  }

  public logout() {
    fbLogout(() => {
      appSettings.clear();
      this._navigate("login-page");
    });
  }

  public getCurrentAccessToken() {
    let accessToken = getCurrentAccessToken();

    alert("Current access token: " + JSON.stringify(accessToken, null, '\t'));
  }

  public logEventAction() {
    this.eventCounter++;
    logEvent('Home', [{
      key: 'counter',
      value: this.eventCounter.toString()
    }]);
  }
}
