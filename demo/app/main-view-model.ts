import { Observable } from 'data/observable';
import { login } from "nativescript-facebook";

// Facebook Authentication CODE
export class HelloWorldModel extends Observable {

  public onLogin(error, data) {
    console.log("Success!");
  }

  public testAction() {
    login((error, data) => console.log("Success!"));
  }
}
