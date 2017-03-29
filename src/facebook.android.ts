//NativeScript modules
import * as applicationModule from "application";
import { LoginButton as LoginButtonBase, LoginResponse } from './facebook.common';
declare let com: any;

export class Facebook {
  _AndroidApplication = applicationModule.android;
  _act: android.app.Activity;

  mCallbackManager;
  loginManager;

  public init() {
    try {
      //fb initialization
      com.facebook.FacebookSdk.sdkInitialize(this._AndroidApplication.context.getApplicationContext());
    }
    catch (e) {
      console.log("nativescript-facebook-login: The plugin could not find the android library, try to clean the android platform")
    }

    this.mCallbackManager = com.facebook.CallbackManager.Factory.create();
    this.loginManager = com.facebook.login.LoginManager.getInstance();

    //This solve the case when user changes accounts error code 304
    this.loginManager.logOut();

    if (!this.mCallbackManager || !this.loginManager) {
      // throw exception
    }
  }

  public setFacebookAppId(fbAppId: string) {
    com.facebook.FacebookSdk.setApplicationId(fbAppId);
  }

  public registerLoginCallback(callback: Function) {

    let act = this._AndroidApplication.foregroundActivity || this._AndroidApplication.startActivity;
    this._act = act;

    this.loginManager.registerCallback(this.mCallbackManager, new com.facebook.FacebookCallback({

      onSuccess: function (result) {
        let token = result.getAccessToken().getToken();
        let userId = result.getAccessToken().getUserId();
        let loginResponse = new LoginResponse(userId, token);
        callback(null, loginResponse);
      },
      onCancel: function () {
        callback('canceled');

      },
      onError: function (e) {
        let errorMessage = "Error with Facebook";
        if (e.getErrorMessage) {
          errorMessage += ": " + e.getErrorMessage();
        }
        else if (e.getErrorCode) {
          errorMessage += ": Code " + e.getErrorCode();
        }
        else {
          errorMessage += ": " + e;
        }
        callback(errorMessage);
      }

    }));

    let onActivityResult = (args) => {
      if (this.mCallbackManager.onActivityResult(args.requestCode, args.resultCode, args.intent)) {
        unsubscribe();
      }
    };

    let unsubscribe = () => {
      this._AndroidApplication.off(applicationModule.AndroidApplication.activityResultEvent, onActivityResult);
    };

    this._AndroidApplication.on(applicationModule.AndroidApplication.activityResultEvent, onActivityResult);
  }

  public requestPublishPermissions(permissions: string[], callback: Function) {

    this.registerLoginCallback(callback);

    let javaPermissionsList = java.util.Arrays.asList(permissions);
    //Start the login process
    this.loginManager.logInWithPublishPermissions(this._act, javaPermissionsList);
  }

  public requestReadPermissions(permissions: string[], callback: Function) {

    this.registerLoginCallback(callback);

    let javaPermissionsList = java.util.Arrays.asList(permissions);

    //Start the login process
    this.loginManager.logInWithReadPermissions(this._act, javaPermissionsList);
  }

  public login(callback: Function) {
    this.requestReadPermissions(["public_profile", "email"], callback);
  }
}

export let nsFacebook = new Facebook();

export class LoginButton extends LoginButtonBase {
  protected _android: any;

  public get android() {
    return this._android;
  }

  public _createUI() {
    nsFacebook.init();
    this._android = new com.facebook.login.widget.LoginButton(this._context);
  }

  onOnLoginChanged(callback: any) {
    nsFacebook.registerLoginCallback(this.onLogin);
  }

  onFbIdChanged(appId: any) {
    nsFacebook.setFacebookAppId(this.fbId.toString());
  }
}