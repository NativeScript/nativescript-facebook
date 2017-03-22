import { Observable } from 'data/observable';
var Facebook = require('nativescript-facebook');
// Facebook Authentication CODE
import * as application from "application";

export class HelloWorldModel extends Observable {
  public onLogin(error, data) {
    console.dump(arguments);
  }
}