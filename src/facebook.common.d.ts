import { View } from "ui/core/view";
import { Property } from "ui/core/dependency-observable";
export declare abstract class LoginButton extends View {
    static onLoginProperty: Property;
    static fbIdProperty: Property;
    onLogin: Function;
    fbId: string;
    abstract onOnLoginChanged(callback: any): any;
    abstract onFbIdChanged(appId: any): any;
}
export declare class LoginResponse {
    userId: string;
    token: string;
    constructor(userId: string, token: string);
}
