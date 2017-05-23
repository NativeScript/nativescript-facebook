import { View, Property } from "ui/core/view";
import * as loginManager from './login-manager';
import { LoginResponse } from './login-response';
import { LoginEventData } from './login-event-data';

export abstract class LoginButtonBase extends View {
  public static loginEvent: string = "login";

  initNativeView() {
    loginManager._registerLoginCallback((error: Error, loginResponse: LoginResponse) => {
      this.notify(<LoginEventData>{ eventName: LoginButtonBase.loginEvent, object: this, error: error,loginResponse: loginResponse });
    });
  }
}
