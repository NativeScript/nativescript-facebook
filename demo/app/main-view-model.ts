import { Observable } from 'data/observable';
import { LoginEventData } from "nativescript-facebook";

export class HelloWorldModel extends Observable {
  public userId: string;

  public onLogin(eventData: LoginEventData) {
    if (eventData.error) {
      alert("Error during login: " + eventData.error.message);
    } else {
      this.set("userId", "UserId: " + eventData.loginResponse.userId);
    }
  }
}
