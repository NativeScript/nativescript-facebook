import { LoginButton as LoginButtonBase } from './facebook.common';
export declare class FBSDKLoginButtonDelegate {
}
export declare class Facebook {
    mCallbackManager: any;
    loginManager: any;
    constructor();
    setFacebookAppId(fbAppId: string): void;
    registerLoginCallback(callback: Function): void;
    requestPublishPermissions(permissions: string[], callback: Function): void;
    requestReadPermissions(permissions: string[], callback: Function): void;
    login(callback: Function): void;
}
export declare let nsFacebook: Facebook;
export declare class LoginButton extends LoginButtonBase implements FBSDKLoginButtonDelegate {
    static ObjCProtocols: typeof FBSDKLoginButtonDelegate[];
    protected _ios: any;
    readonly ios: any;
    constructor();
    loginButtonDidCompleteWithResult(result: any, error: NSError): void;
    onOnLoginChanged(callback: any): void;
    onFbIdChanged(appId: any): void;
}
