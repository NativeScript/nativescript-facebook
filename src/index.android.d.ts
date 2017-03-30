import * as applicationModule from "application";
import { LoginButton as LoginButtonBase } from './login-button.common';
export declare class Facebook {
    _AndroidApplication: applicationModule.AndroidApplication;
    _act: android.app.Activity;
    mCallbackManager: any;
    loginManager: any;
    init(): void;
    setFacebookAppId(fbAppId: string): void;
    registerLoginCallback(callback: Function): void;
    requestPublishPermissions(permissions: string[], callback: Function): void;
    requestReadPermissions(permissions: string[], callback: Function): void;
    login(callback: Function): void;
}
export declare let nsFacebook: Facebook;
export declare class LoginButton extends LoginButtonBase {
    protected _android: any;
    readonly android: any;
    _createUI(): void;
    onLoginPropertyChanged(callback: any): void;
    fbIdPropertyChanged(appId: any): void;
}
