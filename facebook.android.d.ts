import * as applicationModule from "application";
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
import { StackLayout } from "ui/layouts/stack-layout";
import { Property } from "ui/core/dependency-observable";
export declare class LoginButton extends StackLayout {
    static textProperty: Property;
    static onLoginProperty: Property;
    static fbIdProperty: Property;
    private loginButtonElement;
    onLogin: Function;
    text: string;
    fbId: string;
    constructor();
    onLoaded(): void;
}
