import { Observable } from 'data/observable';
var Facebook = require('nativescript-facebook');
// Facebook Authentication CODE
import * as application from "application";

export class HelloWorldModel extends Observable {
  public message: string;
  private fbPermissions = ["publish_actions", "public_profile"];

  onLogin() {
    console.log("YES");
    Facebook.nsFacebook.requestReadPermissions(["email"], () => {
      console.log("YES2");
    });
  }
  constructor() {
    super();
  }
}