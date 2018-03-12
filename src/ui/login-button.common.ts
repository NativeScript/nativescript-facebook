import { View, Property } from "tns-core-modules/ui/core/view";
import * as loginManager from './../login-manager';
import { LoginResponse } from './../login-response';
import { LoginEventData } from './../login-event-data';
import { EventData } from "tns-core-modules/data/observable";

export abstract class LoginButtonBase extends View {
  public static loginEvent: string = "login";
  public static logoutEvent: string = "logout";

  initNativeView() {
    loginManager._registerLoginCallback((error: Error, loginResponse: LoginResponse) => {
      this.notify(<LoginEventData>{ eventName: LoginButtonBase.loginEvent, object: this, error: error, loginResponse: loginResponse });
    });
    loginManager._registerLogoutCallback(() => {
      this.notify(<EventData>{ eventName: LoginButtonBase.logoutEvent, object: this });
    });
  }
}
