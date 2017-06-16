import { LoginEventData } from './login-event-data';
import { EventData } from "tns-core-modules/data/observable";
import { View } from "tns-core-modules/ui/core/view";

export declare class LoginButton extends View {
    on(event: "login", callback: (data: LoginEventData) => void, thisArg?: any);
    on(eventNames: string, callback: (data: EventData) => void, thisArg?: any);
}
