import button = require("ui/button");
import builder = require("ui/builder");

import observable = require("data/observable");
import { StackLayout } from "ui/layouts/stack-layout";
import { Property, PropertyChangeData, PropertyMetadataSettings } from "ui/core/dependency-observable";
import { PropertyMetadata } from "ui/core/proxy";
import { isAndroid } from "platform";

let AffectsLayout = isAndroid ? PropertyMetadataSettings.None : PropertyMetadataSettings.AffectsLayout;

export abstract class LoginButtonBase extends StackLayout {
  protected loginButtonElement: button.Button;

  public static textProperty = new Property("text", "LoginButtonBase", new PropertyMetadata(undefined, AffectsLayout));
  public static onLoginProperty = new Property("onLogin", "LoginButtonBase", new PropertyMetadata(undefined, AffectsLayout));
  public static fbIdProperty = new Property("fbId", "LoginButtonBase", new PropertyMetadata(undefined, AffectsLayout));

  public get onLogin() {
    return this._getValue(LoginButtonBase.onLoginProperty);
  }

  public set onLogin(value: Function) {
    this._setValue(LoginButtonBase.onLoginProperty, value);
  }

  public get text() {
    return this._getValue(LoginButtonBase.textProperty) || "Continue with Facebook";
  }

  public set text(value: string) {
    this._setValue(LoginButtonBase.textProperty, value);
  }

  public get fbId() {
    return this._getValue(LoginButtonBase.fbIdProperty);
  }

  public set fbId(value: string) {
    this._setValue(LoginButtonBase.fbIdProperty, value);
  }

  constructor() {
    super();

    this.loginButtonElement = new button.Button();
  }

  onLoaded() {
    super.onLoaded();

    this.loginButtonElement.text = this.text;

    this.setFacebookAppId(this.fbId.toString());

    this.loginButtonElement.on(button.Button.tapEvent, (args: observable.EventData) => {
      this.onLoginClick(this.onLogin);
    });

    this.addChild(this.loginButtonElement);
  }

  abstract setFacebookAppId(appId);

  abstract onLoginClick(callback);
}

export class LoginResponse {
  userId: string;
  token: string;
  constructor(userId: string, token: string){
    this.userId = userId;
    this.token = token;
  }
}