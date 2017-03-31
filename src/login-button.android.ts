//NativeScript modules
import * as applicationModule from "application";
import { LoginButton as LoginButtonBase } from './login-button.common';
import * as loginManager from './login-manager';

declare let com: any;

export class LoginButton extends LoginButtonBase {
  protected _android: any;

  public get android() {
    return this._android;
  }

  public _createUI() {
    this._android = new com.facebook.login.widget.LoginButton(this._context);
  }

  onLoginPropertyChanged(callback: any) {
    loginManager.registerLoginCallback(this.onLogin);
  }

  fbIdPropertyChanged(appId: any) {
    loginManager.setAppId(this.fbId.toString());
  }
}