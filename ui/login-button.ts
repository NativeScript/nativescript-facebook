var button = require("ui/button");
var builder = require("ui/builder");

import observable = require("data/observable");
import { StackLayout } from "ui/layouts/stack-layout";

export class LoginButton extends StackLayout {
  public text: string = "Continue with Facebook";
  public fbid: string
  loginButton: any;

  constructor() {
    super();

    this.loginButton = new button.Button();
  }

  onLoaded() {
    super.onLoaded();

    this.loginButton.text = this.text;

    this.loginButton.on(button.Button.tapEvent, function (args: observable.EventData) {
      // Do something
    });

    this.addChild(this.loginButton);
  }
}