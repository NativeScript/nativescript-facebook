//NativeScript modules
import * as applicationModule from "application";

var _isInit: boolean = false;

var mCallbackManager;
var loginManager;


export function init(loginBehavior? : any): boolean {
    //fb initialization
  loginManager = FBSDKLoginManager.alloc().init();

  if (loginManager) {
    //This solve the case when user changes accounts error code 304
    loginManager.logOut();
    //Set the loginBehavior if there is one
    if (loginBehavior) {
      loginManager.loginBehavior = loginBehavior;
    }
    _isInit = true;
    return true;
   }
   else {
   return false;
   }
  }

export function registerCallback(successCallback: any, cancelCallback: any, failCallback: any) {
    if (_isInit) {
      mCallbackManager= function(result: FBSDKLoginManagerLoginResult, error: NSError) {

        if (error) {
          failCallback(error);
          return;
        }
        //something went really wrong no error and no result
        if (!result) {
          failCallback("Null error");
          return;
        }

        if (result.isCancelled) {
          cancelCallback();
          return;
        }

        if (result.token) {
          successCallback(result);
        }
        else {
          failCallback("Could not acquire an access token");
          return;
        }
      }
    }
  }
export function logInWithPublishPermissions(permissions: string[]) {
    if (_isInit) {
      loginManager.logInWithPublishPermissionsHandler(permissions, mCallbackManager);
    }
  }
export function logInWithReadPermissions(permissions: string[]) {
    if (_isInit) {
    loginManager.logInWithReadPermissionsHandler(permissions, mCallbackManager);
    }
}
