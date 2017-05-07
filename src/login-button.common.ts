import { View, Property } from "ui/core/view";
import * as loginManager from './login-manager';

export abstract class LoginButtonBase extends View {
  onLoginPropertyChanged(callback: any) {
    loginManager._registerLoginCallback(callback);
  }
}

export const onLoginProperty = new Property<LoginButtonBase, Function>({
  name: "login", valueChanged: (btn, oldV, newV) => {
    btn.onLoginPropertyChanged(newV);
  }
});
onLoginProperty.register(LoginButtonBase);
