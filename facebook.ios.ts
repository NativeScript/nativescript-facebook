//NativeScript modules
import * as applicationModule from "application";
import { LoginButton as LoginButtonBase, LoginResponse } from './facebook.common';
declare let FBSDKLoginManager: any;
declare let FBSDKSettings: any;
declare class FBSDKLoginManagerLoginResult { isCancelled: boolean; token: any; };

export class Facebook {

  mCallbackManager;
  loginManager;

  public setFacebookAppId(fbAppId: string) {
    // com.facebook.FacebookSdk.setApplicationId(fbAppId);

    [FBSDKSettings setAppID:fbAppId];

    this.loginManager = FBSDKLoginManager.alloc().init();
    this.loginManager.loginBehavior = 2;

    //This solve the case when user changes accounts error code 304
    this.loginManager.logOut();

    if (!this.mCallbackManager || !this.loginManager) {
      // throw exception
    }
  }

  public registerLoginCallback(callback: Function) {

    this.mCallbackManager = function (result: FBSDKLoginManagerLoginResult, error: NSError) {

      if (error) {
        callback(error);
        return;
      }

      //something went really wrong no error and no result
      if (!result) {
        callback("Null error");
        return;
      }

      if (result.isCancelled) {
        callback('canceled');
        return;
      }

      if (result.token) {
        callback(null, result);
      }
      else {
        callback("Could not acquire an access token");
        return;
      }
    }
  }

  public requestPublishPermissions(permissions: string[], callback: Function) {

    this.registerLoginCallback(callback);

    this.loginManager.logInWithPublishPermissionsHandler(permissions, this.mCallbackManager);
  }

  public requestReadPermissions(permissions: string[], callback: Function) {

    this.registerLoginCallback(callback);

    this.loginManager.logInWithReadPermissionsHandler(permissions, this.mCallbackManager);
  }

  public login(callback: Function) {
    this.requestReadPermissions(["public_profile", "email"], callback);
  }
}

export let nsFacebook = new Facebook();

declare let FBSDKLoginButton: any;
export class LoginButton extends LoginButtonBase {
  protected _ios: any;

  public get ios() {
    return this._ios;
  }

  constructor() {
    super()
    this._ios = new FBSDKLoginButton();
  }

  onOnLoginChanged(callback: any) {
    nsFacebook.registerLoginCallback(this.onLogin);
  }

  onFbIdChanged(appId: any) {
    nsFacebook.setFacebookAppId(this.fbId.toString());
  }
}