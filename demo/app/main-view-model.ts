import { Observable } from 'data/observable';
let Facebook = require('nativescript-facebook');
// Facebook Authentication CODE
import * as application from "application";
var view = require("ui/core/view");

export class HelloWorldModel extends Observable {

  public onLogin(error, data) {
    console.log("Success!");
  }

  public testAction() {
    Facebook.login((error, data) => {
      console.log("Success!");
    });
  }
}