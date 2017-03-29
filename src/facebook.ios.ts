import * as applicationModule from "application";
import { LoginButton as LoginButtonBase, LoginResponse } from './facebook.common';
declare let FBSDKLoginManager: any;
declare let FBSDKSettings: any;
declare class FBSDKLoginManagerLoginResult { isCancelled: boolean; token: any; userId: any;};
declare class UIResponder { };
declare var UIApplicationDelegate: any;
declare var FBSDKApplicationDelegate: any;
declare var FBSDKAppEvents: any;
declare class UIApplication { };
declare interface UIApplicationDelegate { };
declare class FBSDKLoginButtonDelegate { };
declare let FBSDKLoginButton: any;
declare class NSDictionary { };

const FB_LOGIN_BEHAVIOUR = 2;

let onLoginCallback;
let loginManager = FBSDKLoginManager.alloc().init();
loginManager.loginBehavior = FB_LOGIN_BEHAVIOUR;
loginManager.logOut();

let registerLoginCallback = function (callback: Function) {

  onLoginCallback = function (result: FBSDKLoginManagerLoginResult, error: NSError) {

    if (error) {
      callback(error);
      return;
    }

    //something went really wrong no error and no result
    if (!result) {
      callback("Fatal error");
      return;
    }

    if (result.isCancelled) {
      callback('canceled');
      return;
    }

    if (result.token) {
      let token = result.token.tokenString;
      let userId = result.token.userID;
      let loginResponse = new LoginResponse(userId, token);
      callback(null, loginResponse);
    }
    else {
      callback("Could not acquire an access token");
      return;
    }
  }
}

let setFacebookAppId = function (fbAppId: string) {
  FBSDKSettings.setAppID(fbAppId);
}


let requestPublishPermissions = function (permissions: string[], callback: Function) {

  registerLoginCallback(callback);
  loginManager.logInWithPublishPermissionsHandler(permissions, onLoginCallback);
}

let requestReadPermissions = function (permissions: string[], callback: Function) {

  registerLoginCallback(callback);
  loginManager.logInWithReadPermissionsHandler(permissions, onLoginCallback);
}

let login = function (callback: Function) {
  requestReadPermissions(["public_profile", "email"], callback);
}


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

  onOnLoginChanged(callback: any) {
    registerLoginCallback(this.onLogin);
  }

  onFbIdChanged(appId: any) {
    setFacebookAppId(this.fbId.toString());
  }
}

class LoginButtonDelegate extends NSObject implements FBSDKLoginButtonDelegate {
  public static ObjCProtocols = [FBSDKLoginButtonDelegate];

  loginButtonDidCompleteWithResultError(loginButton: any, result: any, error: NSError) {
    if (onLoginCallback) {
      onLoginCallback(result, error);
    }
  }

  loginButtonDidLogOut(loginButton: any) {
    //TODO: Provide logout callback
  }

  loginButtonWillLogin(loginButton: any) {
    return true;
  }
}

//TODO: Extend existing delegate if exists
class BaseDelegate extends UIResponder implements UIApplicationDelegate {
  public static ObjCProtocols = [UIApplicationDelegate];

  applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary): boolean {
    return FBSDKApplicationDelegate.sharedInstance().applicationDidFinishLaunchingWithOptions(application, launchOptions);
  }

  applicationOpenURLSourceApplicationAnnotation(application, url, sourceApplication, annotation) {
    return FBSDKApplicationDelegate.sharedInstance().applicationOpenURLSourceApplicationAnnotation(application, url, sourceApplication, annotation);
  }

  applicationDidBecomeActive(application: UIApplication): void {
    FBSDKAppEvents.activateApp();
  }
}

applicationModule.ios.delegate = BaseDelegate;

exports.login = login;
exports.requestPublishPermissions = requestPublishPermissions;
exports.requestReadPermissions = requestReadPermissions;
exports.setFacebookAppId = setFacebookAppId;