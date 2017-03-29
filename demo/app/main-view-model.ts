import { Observable } from 'data/observable';
let Facebook = require('nativescript-facebook');
// Facebook Authentication CODE
import * as application from "application";
var view = require("ui/core/view");

export class HelloWorldModel extends Observable {

  labelContent: string;

  public onLogin(error, data) {
    console.dump(arguments);
    console.log("GELEEEEEEE");
  }

  public testAction(){
    Facebook.login(()=>{
      alert("TEST");
    });
  }
}