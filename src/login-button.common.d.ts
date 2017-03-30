import { View } from "ui/core/view";
import { Property } from "ui/core/dependency-observable";
export declare abstract class LoginButton extends View {
    static onLoginProperty: Property;
    static fbIdProperty: Property;
    onLogin: Function;
    fbId: string;
    abstract onLoginPropertyChanged(callback: any): any;
    abstract fbIdPropertyChanged(appId: any): any;
}
