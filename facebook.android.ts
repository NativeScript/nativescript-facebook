//NativeScript modules
import * as applicationModule from "application";
declare var com: any;

export class Facebook {
  _AndroidApplication = applicationModule.android;
  _act: android.app.Activity;

  mCallbackManager;
  loginManager;

  public setFacebookAppId(fbAppId: string) {
    com.facebook.FacebookSdk.setApplicationId(fbAppId);

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

  private registerLoginCallback(callback: Function) {

    var act = this._AndroidApplication.foregroundActivity || this._AndroidApplication.startActivity;
    this._act = act;

    this.loginManager.registerCallback(this.mCallbackManager, new com.facebook.FacebookCallback({

      onSuccess: function (result) {
        var token = result.getAccessToken().getToken();
        callback(null, token);
      },
      onCancel: function () {
        callback('canceled');

      },
      onError: function (e) {
        var errorMessage = "Error with Facebook";
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

    var onActivityResult = (args) => {
      if (this.mCallbackManager.onActivityResult(args.requestCode, args.resultCode, args.intent)) {
        unsubscribe();
      }
    };

    var unsubscribe = () => {
      this._AndroidApplication.off(applicationModule.AndroidApplication.activityResultEvent, onActivityResult);
    };

    this._AndroidApplication.on(applicationModule.AndroidApplication.activityResultEvent, onActivityResult);
  }

  private logInWithPublishPermissions(permissions: string[], callback: Function) {

    this.registerLoginCallback(callback);

    var javaPermissions = java.util.Arrays.asList(permissions);
    //Start the login process
    this.loginManager.logInWithPublishPermissions(this._act, javaPermissions);
  }

  private logInWithReadPermissions(permissions: string[], callback: Function) {

    this.registerLoginCallback(callback);

    var javaPermissions = java.util.Arrays.asList(permissions);
    //Start the login process
    this.loginManager.logInWithReadPermissions(this._act, javaPermissions);
  }

  public login(permissions: string[], callback: Function, withPublishPermissions: boolean = true) {
    withPublishPermissions ? this.logInWithPublishPermissions(permissions, callback) : this.logInWithReadPermissions(permissions, callback);
  }
}

export var nsFacebook = new Facebook();

var button = require("ui/button");
var builder = require("ui/builder");

import observable = require("data/observable");
import { StackLayout } from "ui/layouts/stack-layout";

export class LoginButton extends StackLayout {
  public text: string = "Continue with Facebook";
  public fbid: string
  public permissions: Array<string>;
  public onlogin: Function;
  loginButton: any;

  constructor() {
    super();

    this.loginButton = new button.Button();
  }

  onLoaded() {
    super.onLoaded();

    this.loginButton.text = this.text;

    this.loginButton.on(button.Button.tapEvent,  (args: observable.EventData) => {
      nsFacebook.login(this.permissions, this.onlogin);
    });

    this.addChild(this.loginButton);
  }
}



