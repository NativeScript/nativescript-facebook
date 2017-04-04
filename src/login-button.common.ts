import { View, Property } from "ui/core/view"

export abstract class LoginButton extends View {
  abstract onLoginPropertyChanged(callback);

  abstract fbIdPropertyChanged(appId);
}

export const onLoginProperty = new Property<LoginButton, Function>({
  name: "onLogin", defaultValue: undefined, valueChanged: (btn, oldV, newV) => {
    btn.onLoginPropertyChanged(newV);
  }
});
onLoginProperty.register(LoginButton);


export const fbIdProperty = new Property<LoginButton, string>({
  name: "fbId", defaultValue: "", valueChanged: (btn, oldV, newV) => {
    btn.fbIdPropertyChanged(newV);
  }
});
fbIdProperty.register(LoginButton);