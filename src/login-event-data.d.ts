import { EventData } from "tns-core-modules/data/observable";
import { LoginResponse } from "./login-response";

export declare interface LoginEventData extends EventData {
    error: Error;
    loginResponse: LoginResponse;
}