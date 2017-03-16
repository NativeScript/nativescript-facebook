//NativeScript modules
import * as applicationModule from "application";
declare var FBSDKLoginManager: any;
declare class FBSDKLoginManagerLoginResult { isCancelled: boolean; token: any};

export class Facebook {
  _isInit: boolean = false;

  mCallbackManager;
  loginManager;

  init(loginBehavior?: any): boolean {
    //fb initialization
    this.loginManager = FBSDKLoginManager.alloc().init();

    if (this.loginManager) {
      //This solve the case when user changes accounts error code 304
      this.loginManager.logOut();
      //Set the loginBehavior if there is one
      if (loginBehavior) {
        this.loginManager.loginBehavior = loginBehavior;
      }
      this._isInit = true;
      return true;
    }
    else {
      return false;
    }
  }

  registerCallback(successCallback: any, cancelCallback: any, failCallback: any) {
    if (this._isInit) {
      this.mCallbackManager = function (result: FBSDKLoginManagerLoginResult, error: NSError) {

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

  logInWithPublishPermissions(permissions: string[]) {
    if (this._isInit) {
      this.loginManager.logInWithPublishPermissionsHandler(permissions, this.mCallbackManager);
    }
  }

  logInWithReadPermissions(permissions: string[]) {
    if (this._isInit) {
      this.loginManager.logInWithReadPermissionsHandler(permissions, this.mCallbackManager);
    }
  }
}

