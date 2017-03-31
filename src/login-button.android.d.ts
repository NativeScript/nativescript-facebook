import { LoginButton as LoginButtonBase } from './login-button.common';
export declare class LoginButton extends LoginButtonBase {
    protected _android: any;
    readonly android: any;
    _createUI(): void;
    onLoginPropertyChanged(callback: any): void;
    fbIdPropertyChanged(appId: any): void;
}
