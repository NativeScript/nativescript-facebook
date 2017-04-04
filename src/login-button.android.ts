//NativeScript modules
import * as applicationModule from "application";
import { LoginButton as LoginButtonBase } from './login-button.common';
import * as loginManager from './login-manager';

declare let com: any;

export class LoginButton extends LoginButtonBase {
  public createNativeView() {
    return new com.facebook.login.widget.LoginButton(this._context);
  }

  onLoginPropertyChanged(callback: any) {
    loginManager.registerLoginCallback(callback);
  }

  fbIdPropertyChanged(appId: any) {
    loginManager.setAppId(appId.toString());
  }
}