// NativeScript modules
import * as applicationModule from "tns-core-modules/application";
import { LoginButtonBase } from './login-button.common';

declare let com: any;

export class LoginButton extends LoginButtonBase {
  public createNativeView() {
    return new com.facebook.login.widget.LoginButton(this._context);
  }
}
