import * as applicationModule from "tns-core-modules/application";
import { LoginResponse } from './login-response';
import { LoginBehavior } from './login-behavior';
import { FacebookAccessToken } from "./facebook-access-token";
declare let FBSDKLoginManager: any;
declare let FBSDKAccessToken: any;
declare let FBSDKSettings: any;
declare class FBSDKLoginManagerLoginResult { isCancelled: boolean; token: any; }
declare class UIResponder { }
declare var UIApplicationDelegate: any;
declare class UIApplication { }
declare let FBSDKLoginButton: any;
declare class NSDictionary { }

const LOGIN_PERMISSIONS = ["public_profile", "email"];

// TODO: add getter and setter
export let onLoginCallback;
export let onLogoutCallback;

let loginManager;

export function init(fbId: string, fbLoginBehavior: LoginBehavior = LoginBehavior.LoginBehaviorBrowser) {
  setAppId(fbId);
  loginManager = FBSDKLoginManager.alloc().init();
  loginManager.loginBehavior = fbLoginBehavior;
}

export function _registerLogoutCallback(callback: Function) {
  onLogoutCallback = callback;
}

export function _registerLoginCallback(callback: Function) {

  onLoginCallback = function (result: FBSDKLoginManagerLoginResult, error: NSError) {

    if (error) {
      callback(new Error(error.localizedDescription));
      return;
    }

    if (!result) {
      callback(new Error("Fatal error"));
      return;
    }

    if (result.isCancelled) {
      callback(new Error('canceled'));
      return;
    }

    if (result.token) {
      let token = result.token.tokenString;
      let loginResponse = new LoginResponse(token);
      callback(null, loginResponse);
    }
    else {
      callback(new Error("Could not acquire an access token"));
      return;
    }
  };
}

function setAppId(fbAppId: string) {
  FBSDKSettings.setAppID(fbAppId);
}

export function requestPublishPermissions(permissions: string[], callback: Function) {
  _registerLoginCallback(callback);
  loginManager.logInWithPublishPermissionsHandler(permissions, onLoginCallback);
}

export function requestReadPermissions(permissions: string[], callback: Function) {
  _registerLoginCallback(callback);
  loginManager.logInWithReadPermissionsHandler(permissions, onLoginCallback);
}

export function login(callback: Function) {
  requestReadPermissions(LOGIN_PERMISSIONS, callback);
}

export function getCurrentAccessToken() {
  let sdkAccessToken = FBSDKAccessToken.currentAccessToken();
  let accessToken = null;

  if (sdkAccessToken) {
    accessToken = new FacebookAccessToken();
    accessToken.accessToken = sdkAccessToken.tokenString;
    accessToken.userId = sdkAccessToken.userID;
    accessToken.refreshDate = sdkAccessToken.refreshDate;
    accessToken.expirationDate = sdkAccessToken.expirationDate;
  }

  return accessToken;
}

export function logout(callback: Function) {
  loginManager.logOut();
  if (callback) {
    callback();
  }
}
