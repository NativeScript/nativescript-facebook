import { LoginEventData } from './login-event-data';
import { EventData } from "data/observable";
import { View } from "ui/core/view";

export declare class LoginButton extends View {
    on(event: "login", callback: (data: LoginEventData) => void, thisArg?: any);
    on(eventNames: string, callback: (data: EventData) => void, thisArg?: any);
}
