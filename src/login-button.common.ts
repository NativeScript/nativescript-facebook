import { View, Property } from "ui/core/view"
import * as loginManager from './login-manager';

export abstract class LoginButton extends View {
  onLoginPropertyChanged(callback: any) {
    loginManager._registerLoginCallback(callback);
  }
}

export const onLoginProperty = new Property<LoginButton, Function>({
  name: "onLogin", defaultValue: undefined, valueChanged: (btn, oldV, newV) => {
    btn.onLoginPropertyChanged(newV);
  }
});
onLoginProperty.register(LoginButton);