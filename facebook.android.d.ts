import * as applicationModule from "application";
import { LoginButtonBase } from './facebook.common';
export declare class Facebook {
    _AndroidApplication: applicationModule.AndroidApplication;
    _act: android.app.Activity;
    mCallbackManager: any;
    loginManager: any;
    setFacebookAppId(fbAppId: string): void;
    private _registerLoginCallback(callback);
    requestPublishPermissions(permissions: string[], callback: Function): void;
    requestReadPermissions(permissions: string[], callback: Function): void;
    login(callback: Function): void;
}
export declare let nsFacebook: Facebook;
export declare class LoginButton extends LoginButtonBase {
    setFacebookAppId(appId: any): void;
    onLoginClick(callback: any): void;
}
