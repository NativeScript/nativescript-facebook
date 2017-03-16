import * as applicationModule from "application";
export { LoginButton } from "./ui/login-button";
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
export declare var nsFacebook: Facebook;
