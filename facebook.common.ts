import { View } from "ui/core/view"
import { Property, PropertyChangeData, PropertyMetadataSettings } from "ui/core/dependency-observable";
import { PropertyMetadata } from "ui/core/proxy";
import { isAndroid } from "platform";

declare let com: any;
let AffectsLayout = isAndroid ? PropertyMetadataSettings.None : PropertyMetadataSettings.AffectsLayout;

export abstract class LoginButton extends View {

  public static onLoginProperty = new Property("onLogin", "LoginButton",
    new PropertyMetadata(undefined, AffectsLayout, args => (<LoginButton>args.object).onLogin = args.newValue));

  public static fbIdProperty = new Property("fbId", "LoginButton",
    new PropertyMetadata(undefined, AffectsLayout, args => (<LoginButton>args.object).fbId = args.newValue));

  public get onLogin() {
    return this._getValue(LoginButton.onLoginProperty);
  }

  public set onLogin(value: Function) {
    this._setValue(LoginButton.onLoginProperty, value);
    this.onOnLoginChanged(value);
  }

  public get fbId() {
    return this._getValue(LoginButton.fbIdProperty);
  }

  public set fbId(value: string) {
    this._setValue(LoginButton.fbIdProperty, value);
    this.onFbIdChanged(value);
  }

  abstract onOnLoginChanged(callback);

  abstract onFbIdChanged(appId);
}

export class LoginResponse {
  userId: string;
  token: string;
  constructor(userId: string, token: string){
    this.userId = userId;
    this.token = token;
  }
}