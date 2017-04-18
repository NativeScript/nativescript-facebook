import { LoginResponse } from './login-response';
declare let FBSDKLoginManager: any;
declare let FBSDKSettings: any;
declare class FBSDKLoginManagerLoginResult { isCancelled: boolean; token: any; userId: any; }
declare class UIResponder { }
declare let UIApplicationDelegate: any;
declare class UIApplication { }
declare let FBSDKLoginButton: any;
declare class NSDictionary { }

const FB_LOGIN_BEHAVIOUR = 2;
const LOGIN_PERMISSIONS = ["public_profile", "email"];

// TODO: add getter and setter
export let onLoginCallback;
let loginManager;

export function init(fbId: string) {
  setAppId(fbId);
  loginManager = FBSDKLoginManager.alloc().init();
  loginManager.loginBehavior = FB_LOGIN_BEHAVIOUR;
  loginManager.logOut();
}

export function _registerLoginCallback(callback: Function) {

  onLoginCallback = function (result: FBSDKLoginManagerLoginResult, error: NSError) {

    if (error) {
      callback(error);
      return;
    }

    // something went really wrong: no error and no result
    if (!result) {
      callback("Fatal error");
      return;
    }

    if (result.isCancelled) {
      callback("canceled");
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

