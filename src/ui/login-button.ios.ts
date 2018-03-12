import * as applicationModule from "tns-core-modules/application";
import { LoginButtonBase } from './login-button.common';
import * as loginManager from './../login-manager';

declare let FBSDKLoginButton: any;
declare class FBSDKLoginButtonDelegate { }

export class LoginButton extends LoginButtonBase {

  public nativeView: any;
  private _localDelegate;

  constructor() {
    super();
    this.nativeView = new FBSDKLoginButton();
    this._localDelegate = LoginButtonDelegate.new();
  }

  onLoaded() {
    super.onLoaded();
    this.nativeView.delegate = this._localDelegate;
  }

  onUnloaded() {
    super.onUnloaded();
    this.nativeView.delegate = undefined;
  }
}

class LoginButtonDelegate extends NSObject implements FBSDKLoginButtonDelegate {
  public static ObjCProtocols = [FBSDKLoginButtonDelegate];

  loginButtonDidCompleteWithResultError(loginButton: any, result: any, error: NSError) {
    if (loginManager.onLoginCallback) {
      loginManager.onLoginCallback(result, error);
    }
  }

  loginButtonDidLogOut(loginButton: any) {
    if (loginManager.onLogoutCallback) {
      loginManager.onLogoutCallback();
    }
  }

  loginButtonWillLogin(loginButton: any) {
    return true;
  }
}
