import * as application from "application";
import { LoginResponse } from './login-response';
declare let com: any;

const LOGIN_PERMISSIONS = ["public_profile", "email"];

//TODO: add getter and setter
let onLoginCallback;
let androidApplication;
let _act: android.app.Activity;
let loginManager;

export function init(fbId: string) {
  setAppId(fbId);
  androidApplication = application.android;
  try {
    //fb initialization
    com.facebook.FacebookSdk.sdkInitialize(androidApplication.context.getApplicationContext());
  }
  catch (e) {
    console.log("nativescript-facebook: The plugin could not find the android library, try to clean the android platform")
  }
  onLoginCallback = com.facebook.CallbackManager.Factory.create();
  loginManager = com.facebook.login.LoginManager.getInstance();
  loginManager.logOut();
}

export function registerLoginCallback(callback: Function) {

  let act = androidApplication.foregroundActivity || androidApplication.startActivity;
  _act = act;
  loginManager.registerCallback(onLoginCallback, new com.facebook.FacebookCallback({

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
    if (onLoginCallback.onActivityResult(args.requestCode, args.resultCode, args.intent)) {
      unsubscribe();
    }
  };

  let unsubscribe = () => {
    androidApplication.off(application.AndroidApplication.activityResultEvent, onActivityResult);
  };

  androidApplication.on(application.AndroidApplication.activityResultEvent, onActivityResult);
}

export function setAppId(fbAppId: string) {
  com.facebook.FacebookSdk.setApplicationId(fbAppId);
}

export function requestPublishPermissions(permissions: string[], callback: Function) {
  registerLoginCallback(callback);

  let javaPermissionsList = java.util.Arrays.asList(permissions);
  loginManager.logInWithPublishPermissions(_act, javaPermissionsList);
}

export function requestReadPermissions(permissions: string[], callback: Function) {
  registerLoginCallback(callback);

  let javaPermissionsList = java.util.Arrays.asList(permissions);
  loginManager.logInWithReadPermissions(_act, javaPermissionsList);
}

export function login(callback: Function) {
  requestReadPermissions(LOGIN_PERMISSIONS, callback);
}

