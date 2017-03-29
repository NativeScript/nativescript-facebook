import { LoginButton as LoginButtonBase } from './facebook.common';
export declare class LoginButton extends LoginButtonBase {
    protected _ios: any;
    private _localDelegate;
    readonly ios: any;
    constructor();
    onLoaded(): void;
    onUnloaded(): void;
    onOnLoginChanged(callback: any): void;
    onFbIdChanged(appId: any): void;
}
