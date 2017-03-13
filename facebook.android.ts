//NativeScript modules
import * as applicationModule from "application";

var _isInit: boolean = false;
var _AndroidApplication = applicationModule.android;
var _act: android.app.Activity;

var mCallbackManager;
var loginManager;

export function init(loginBehavior?: any): boolean {

    try{
    //fb initialization
    com.facebook.FacebookSdk.sdkInitialize(_AndroidApplication.context.getApplicationContext());
    }
    catch(e){
      console.log("nativescript-facebook-login: The plugin could not find the android library, try to clean the android platform")
    }
    mCallbackManager = com.facebook.CallbackManager.Factory.create();
    loginManager = com.facebook.login.LoginManager.getInstance();

    //This solve the case when user changes accounts error code 304
    loginManager.logOut();
    if (loginBehavior) {
      loginManager = loginManager.setLoginBehavior(loginBehavior);
    }

    if (mCallbackManager && loginManager) {
    _isInit = true;
    return true;
    }
    else {
    return false;
    }
}

export function registerCallback(successCallback: any, cancelCallback: any, failCallback: any) {

    if(_isInit){
      var act = _AndroidApplication.foregroundActivity || _AndroidApplication.startActivity;
      _act = act; 

      loginManager.registerCallback(mCallbackManager, new com.facebook.FacebookCallback({

        onSuccess: function(result) {
          successCallback(result);
        },
        onCancel: function() {
          cancelCallback();

        },
        onError: function(e) {
          failCallback(e);
        }

      }));

      var onActivityResult = (args) => {
        if (mCallbackManager.onActivityResult(args.requestCode, args.resultCode, args.intent)) {
          unsubscribe();
        }
      };

      var unsubscribe = () => {
        _AndroidApplication.off(applicationModule.AndroidApplication.activityResultEvent, onActivityResult);
      };

      _AndroidApplication.on(applicationModule.AndroidApplication.activityResultEvent, onActivityResult);
    }
  }

export function logInWithPublishPermissions(permissions: string[]) {

    if (_isInit) {
      var javaPermissions = java.util.Arrays.asList(permissions);
      //Start the login process
      loginManager.logInWithPublishPermissions(_act, javaPermissions);
    }
  }

export function logInWithReadPermissions(permissions: string[]) {
  if (_isInit) {
    var javaPermissions = java.util.Arrays.asList(permissions);
    //Start the login process
    loginManager.logInWithReadPermissions(_act, javaPermissions);
  }
}

