import * as applicationModule from "application";
import { LoginButton as LoginButtonBase } from './facebook.common';
export declare class Facebook {
    _AndroidApplication: applicationModule.AndroidApplication;
    _act: android.app.Activity;
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
export declare class LoginButton extends LoginButtonBase {
    protected _android: any;
    static loginEvent: string;
    readonly android: any;
    _createUI(): void;
    onOnLoginChanged(callback: any): void;
    onFbIdChanged(appId: any): void;
}
