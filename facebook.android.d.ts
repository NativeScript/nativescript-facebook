import * as applicationModule from "application";
export declare class Facebook {
    _AndroidApplication: applicationModule.AndroidApplication;
    _act: android.app.Activity;
    mCallbackManager: any;
    loginManager: any;
    setFacebookAppId(fbAppId: string): void;
    private registerLoginCallback(callback);
    private logInWithPublishPermissions(permissions, callback);
    private logInWithReadPermissions(permissions, callback);
    login(permissions: string[], callback: Function, withPublishPermissions?: boolean): void;
}
export declare let nsFacebook: Facebook;
import { StackLayout } from "ui/layouts/stack-layout";
import { Property } from "ui/core/dependency-observable";
export declare class LoginButton extends StackLayout {
    static textProperty: Property;
    static onLoginProperty: Property;
    static permissionsProperty: Property;
    static fbIdProperty: Property;
    private loginButtonElement;
    onLogin: Function;
    permissions: string[];
    text: string;
    fbId: string;
    constructor();
    onLoaded(): void;
}
