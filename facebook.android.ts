//NativeScript modules
import * as applicationModule from "application";
declare let com: any;

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

  private _registerLoginCallback(callback: Function) {

    let act = this._AndroidApplication.foregroundActivity || this._AndroidApplication.startActivity;
    this._act = act;

    this.loginManager.registerCallback(this.mCallbackManager, new com.facebook.FacebookCallback({

      onSuccess: function (result) {
        let token = result.getAccessToken().getToken();
        callback(null, token);
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

    this._registerLoginCallback(callback);

    let javaPermissionsList = java.util.Arrays.asList(permissions);
    //Start the login process
    this.loginManager.logInWithPublishPermissions(this._act, javaPermissionsList);
  }

  public requestReadPermissions(permissions: string[], callback: Function) {

    this._registerLoginCallback(callback);

    let javaPermissionsList = java.util.Arrays.asList(permissions);

    //Start the login process
    this.loginManager.logInWithReadPermissions(this._act, javaPermissionsList);
  }

  public login(callback: Function) {
    this.requestReadPermissions(["public_profile", "email"], callback);
  }
}

export let nsFacebook = new Facebook();

import button = require("ui/button");
import builder = require("ui/builder");
import * as x from "./ui/login-button"

import observable = require("data/observable");
import { StackLayout } from "ui/layouts/stack-layout";
import { Property, PropertyChangeData, PropertyMetadataSettings } from "ui/core/dependency-observable";
import { PropertyMetadata } from "ui/core/proxy";
import { isAndroid } from "platform";

let AffectsLayout = isAndroid ? PropertyMetadataSettings.None : PropertyMetadataSettings.AffectsLayout;

export class LoginButton extends StackLayout {
  public static textProperty = new Property("text", "LoginButton", new PropertyMetadata(undefined, AffectsLayout));
  public static onLoginProperty = new Property("onLogin", "LoginButton", new PropertyMetadata(undefined, AffectsLayout));
  public static fbIdProperty = new Property("fbId", "LoginButton", new PropertyMetadata(undefined, AffectsLayout));

  private loginButtonElement: button.Button;

  get onLogin() {
    return this._getValue(LoginButton.onLoginProperty);
  }

  set onLogin(value: Function) {
    this._setValue(LoginButton.onLoginProperty, value);
  }

  get text() {
    return this._getValue(LoginButton.textProperty) || "Continue with Facebook";
  }

  set text(value: string) {
    this._setValue(LoginButton.textProperty, value);
  }

  get fbId() {
    return this._getValue(LoginButton.fbIdProperty);
  }

  set fbId(value: string) {
    this._setValue(LoginButton.fbIdProperty, value);
  }

  constructor() {
    super();

    this.loginButtonElement = new button.Button();
  }

  onLoaded() {
    super.onLoaded();

    this.loginButtonElement.text = this.text;

    nsFacebook.setFacebookAppId(this.fbId.toString());

    this.loginButtonElement.on(button.Button.tapEvent, (args: observable.EventData) => {
      nsFacebook.login(this.onLogin);
    });

    this.addChild(this.loginButtonElement);
  }
}