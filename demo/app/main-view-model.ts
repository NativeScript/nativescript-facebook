import { Observable } from 'data/observable';
import * as nsFacebook from "nativescript-facebook";

// Facebook Authentication CODE
export class HelloWorldModel extends Observable {

  public onLogin(error, data) {
    console.log("Success!");
  }

  public testAction() {
    nsFacebook.login((error, data) => console.log("Success!"));
  }
}
