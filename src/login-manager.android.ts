import * as application from "tns-core-modules/application";
import { LoginResponse } from './login-response';
import { FacebookAccessToken } from "./facebook-access-token";
import { LoginBehavior } from "./login-behavior";
declare let com: any;

const LOGIN_PERMISSIONS = ["public_profile", "email"];

export let onLoginCallback;
export let onLogoutCallback;
let androidApplication;
let _act: android.app.Activity;
let loginManager;

export function _registerLogoutCallback(callback: Function) {
  onLogoutCallback = callback;
}

export function init(fbId: string, fbLoginBehavior: LoginBehavior = LoginBehavior.LoginBehaviorBrowser) {
  com.facebook.FacebookSdk.setAutoLogAppEventsEnabled(true);
  setAppId(fbId);
  androidApplication = application.android;
  try {
    // fb initialization
    com.facebook.FacebookSdk.sdkInitialize(androidApplication.context.getApplicationContext());
  }
  catch (e) {
    console.log("nativescript-facebook: The plugin could not find the android library, try to clean the android platform");
  }
  loginManager = com.facebook.login.LoginManager.getInstance();

  // Workaround for firing the logout event in android:
  // https://stackoverflow.com/questions/30233284/how-to-add-a-logout-callback-for-facebook-sdk-in-android
  let LogoutAccessTokenTracker = com.facebook.AccessTokenTracker.extend({
    onCurrentAccessTokenChanged: function (oldToken, newToken) {
      if (oldToken != null && newToken == null && onLogoutCallback) {
        onLogoutCallback();
      }
    }
  });
  let accessTokenTracker = new LogoutAccessTokenTracker();
  accessTokenTracker.startTracking();
}

export function _registerLoginCallback(callback: Function) {
  let onLoginCallback = com.facebook.CallbackManager.Factory.create();
  _act = androidApplication.startActivity || androidApplication.foregroundActivity;
  loginManager.registerCallback(onLoginCallback, new com.facebook.FacebookCallback({

    onSuccess: function (result) {
      let token = result.getAccessToken().getToken();
      let loginResponse = new LoginResponse(token);
      callback(null, loginResponse);
    },
    onCancel: function () {
      callback(new Error('canceled'));

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
      callback(new Error(errorMessage));
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

function setAppId(fbAppId: string) {
  com.facebook.FacebookSdk.setApplicationId(fbAppId);
}

export function requestPublishPermissions(permissions: string[], callback: Function) {
  _registerLoginCallback(callback);

  let javaPermissionsList = java.util.Arrays.asList(permissions);
  loginManager.logInWithPublishPermissions(_act, javaPermissionsList);
}

export function requestReadPermissions(permissions: string[], callback: Function) {
  _registerLoginCallback(callback);

  let javaPermissionsList = java.util.Arrays.asList(permissions);
  loginManager.logInWithReadPermissions(_act, javaPermissionsList);
}

export function login(callback: Function) {
  requestReadPermissions(LOGIN_PERMISSIONS, callback);
}

export function getCurrentAccessToken() {
  let sdkAccessToken = com.facebook.AccessToken.getCurrentAccessToken();
  let accessToken = null;

  if (sdkAccessToken) {
    accessToken = new FacebookAccessToken();
    accessToken.accessToken = sdkAccessToken.getToken();
    accessToken.userId = sdkAccessToken.getUserId();
    accessToken.expirationDate = convertToISOStringDate(sdkAccessToken.getExpires().toGMTString());
    accessToken.refreshDate = convertToISOStringDate(sdkAccessToken.getLastRefresh().toGMTString());
  }

  return accessToken;
}

export function logout(callback: Function) {
  loginManager.logOut();
  if (callback) {
    callback();
  }
}

function convertToISOStringDate(GMTStringDate: string) {
  return new Date(GMTStringDate).toISOString();
}
