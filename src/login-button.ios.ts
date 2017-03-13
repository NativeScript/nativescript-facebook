import * as applicationModule from "application";
import { LoginButton as LoginButtonBase } from './login-button.common';
import * as loginManager from './login-manager';

declare let FBSDKLoginButton: any;
declare class FBSDKLoginButtonDelegate { };

export class LoginButton extends LoginButtonBase {

  protected _ios: any;
  private _localDelegate;

  get ios() {
    return this._ios;
  }

  constructor() {
    super()
    this._ios = new FBSDKLoginButton();
    this._localDelegate = LoginButtonDelegate.new();
  }

  onLoaded() {
    super.onLoaded();
    this._ios.delegate = this._localDelegate;
  }

  onUnloaded() {
    super.onUnloaded();
    this._ios.delegate = undefined;
  }

  onLoginPropertyChanged(callback: any) {
    loginManager.registerLoginCallback(this.onLogin);
  }

  fbIdPropertyChanged(appId: any) {
    loginManager.setAppId(this.fbId.toString());
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
    //TODO: Provide logout callback
  }

  loginButtonWillLogin(loginButton: any) {
    return true;
  }
}