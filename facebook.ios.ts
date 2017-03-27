import * as applicationModule from "application";
import { LoginButton as LoginButtonBase, LoginResponse } from './facebook.common';

declare let FBSDKLoginManager: any;
declare let FBSDKSettings: any;
declare class FBSDKLoginManagerLoginResult { isCancelled: boolean; token: any; };
declare class UIResponder { };
declare var UIApplicationDelegate: any;
declare var FBSDKApplicationDelegate: any;
declare var FBSDKAppEvents: any;
declare class UIApplication { };
declare interface UIApplicationDelegate { };
declare class FBSDKLoginButtonDelegate { };
declare let FBSDKLoginButton: any;
declare class NSDictionary { };

export class Facebook {

  mCallbackManager;
  loginManager;

  constructor() {
    this.loginManager = FBSDKLoginManager.alloc().init();
    this.loginManager.loginBehavior = 2;

    //This solve the case when user changes accounts error code 304
    this.loginManager.logOut();

    if (!this.mCallbackManager || !this.loginManager) {
      // throw exception
    }
  }

  public setFacebookAppId(fbAppId: string) {
    FBSDKSettings.setAppID(fbAppId);
  }

  public registerLoginCallback(callback: Function) {

    this.mCallbackManager = function (result: FBSDKLoginManagerLoginResult, error: NSError) {

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

export class LoginButton extends LoginButtonBase {

  protected _ios: any;

  public get ios() {
    return this._ios;
  }

  constructor() {
    super()
    this._ios = new FBSDKLoginButton();
    this._localDelegate = LoginButtonDelegate.new();
  }
  private _localDelegate;
  public onLoaded() {
    super.onLoaded();
    this._ios.delegate = this._localDelegate;
  }

  public onUnloaded() {
    super.onUnloaded();
    this._ios.delegate = 'undefined';
  }

  onOnLoginChanged(callback: any) {
    nsFacebook.registerLoginCallback(this.onLogin);
  }

  onFbIdChanged(appId: any) {
    nsFacebook.setFacebookAppId(this.fbId.toString());
  }
}

class LoginButtonDelegate extends NSObject implements FBSDKLoginButtonDelegate {
  public static ObjCProtocols = [FBSDKLoginButtonDelegate];


  loginButtonDidCompleteWithResultError(loginButton: any, result: any, error: NSError) {
    alert('loginButtonDidCompleteWithResult');
  }

  loginButtonDidLogOut(loginButton: any) {
    alert('loginButtonDidLogOut');
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