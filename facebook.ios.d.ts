import { LoginButton as LoginButtonBase } from './facebook.common';
export declare class Facebook {
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
    onOnLoginChanged(callback: any): void;
    onFbIdChanged(appId: any): void;
}
