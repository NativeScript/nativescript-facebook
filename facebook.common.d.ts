import button = require("ui/button");
import { StackLayout } from "ui/layouts/stack-layout";
import { Property } from "ui/core/dependency-observable";
export declare abstract class LoginButtonBase extends StackLayout {
    protected loginButtonElement: button.Button;
    static textProperty: Property;
    static onLoginProperty: Property;
    static fbIdProperty: Property;
    onLogin: Function;
    text: string;
    fbId: string;
    constructor();
    onLoaded(): void;
    abstract setFacebookAppId(appId: any): any;
    abstract onLoginClick(callback: any): any;
}
export declare class LoginResponse {
    userId: string;
    token: string;
    constructor(userId: string, token: string);
}
