import { Observable } from 'data/observable';
import { LoginEventData, logout as fbLogout } from "nativescript-facebook";

export class HelloWorldModel extends Observable {
  public userId: string = "not logged in";

  public onLogin(eventData: LoginEventData) {
    if (eventData.error) {
      alert("Error during login: " + eventData.error.message);
    } else {
      this.set("userId", "UserId: " + eventData.loginResponse.userId);
    }
  }

  public onLogout() {
    this.set("userId", "not logged in");
  }

  public logout() {
    fbLogout(() => this.set("userId", "not logged in"));
  }
}
