import { LoginButton as LoginButtonBase } from './login-button.common';
export declare class LoginButton extends LoginButtonBase {
    protected _ios: any;
    private _localDelegate;
    readonly ios: any;
    constructor();
    onLoaded(): void;
    onUnloaded(): void;
    onLoginPropertyChanged(callback: any): void;
    fbIdPropertyChanged(appId: any): void;
}
