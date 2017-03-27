import { Observable } from 'data/observable';
var Facebook = require('nativescript-facebook');
// Facebook Authentication CODE
import * as application from "application";
var view = require("ui/core/view");

export class HelloWorldModel extends Observable {

  labelContent: string;

  public onLogin(error, data) {
    console.dump(arguments);
    console.log("GELEEEEEEE");
    this.set("labelContent", data);
  }

  public testAction(){
    Facebook.nsFacebook.login(()=>{
      alert("TEST");
    });
  }
}