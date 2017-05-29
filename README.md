NativeScript : Facebook SDK ![apple](https://cdn3.iconfinder.com/data/icons/picons-social/57/16-apple-32.png) ![android](https://cdn4.iconfinder.com/data/icons/logos-3/228/android-32.png)
 =======
[![npm](https://img.shields.io/npm/v/nativescript-facebook.svg)](https://www.npmjs.com/package/nativescript-facebook)
[![npm](https://img.shields.io/npm/dm/nativescript-facebook.svg)](https://www.npmjs.com/package/nativescript-facebook)
[![Build Status](https://travis-ci.org/NativeScript/nativescript-facebook.svg?branch=master)](https://travis-ci.org/NativeScript/nativescript-facebook)
-------

[NativeScript](https://www.nativescript.org) plugin, wrapper of native [Facebook SDK](https://developers.facebook.com) for Android and iOS.

![demo](https://github.com/nativescript-space/nativescript-facebook/blob/assets/demo.gif?raw=true)

<!-- TOC -->

- [Breaking Changes](#breaking-changes)
- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
    - [Android](#android)
    - [iOS](#ios)
- [NativeScript Core](#nativescript-core)
    - [Initialization](#initialization)
    - [Login](#login)
        - [Facebook Login Button](#facebook-login-button)
        - [Custom Login Button](#custom-login-button)
- [NativeScript Angular](#nativescript-angular)
    - [Initialization](#initialization-1)
    - [Login](#login-1)
        - [Facebook Login Button](#facebook-login-button-1)
        - [Custom Login Button](#custom-login-button-1)
- [Login Response](#login-response)
- [License](#license)

<!-- /TOC -->

## Breaking Changes

2.0.0
-------------
* Login event instead of login callback

## Features
- [x] Login & Logout
- [ ] Share
- [ ] Graph API


## Installation
```
tns plugin add nativescript-facebook
```

## Configuration
### Android
No additional configuration required!
### iOS
Update Info.plist file (app/App_Resources/iOS/Info.plist) to contains `CFBundleURLTypes` like below:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
    <dict>
    ...

        <key>CFBundleURLTypes</key>
        <array>
            <dict>
                <key>CFBundleURLSchemes</key>
                <array>
                    <string>fb{facebook_app_id}</string>
                </array>
            </dict>
        </array>

    </dict>
</plist>
```
>Make sure you replaced {facebook_app_id} with your Facebook App Id. More info regarding how to obtain a Facebook App Id can be found [here](https://developers.facebook.com/docs/apps/register).

## NativeScript Core
### Initialization
Call init of nativescript-facebook module on application launch.

app.ts
```TypeScript
import * as application from 'application';
import { init } from "nativescript-facebook";

application.on(application.launchEvent, function (args) {
    init("{facebook_app_id}");
});

application.start({ moduleName: "login-page" });
```

### Login
#### Facebook Login Button
login-page.xml
```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd"
      xmlns:Facebook="nativescript-facebook"
  loaded="pageLoaded" class="page">

    ...

    <Facebook:LoginButton login="{{ onLogin }}"></Facebook:LoginButton>

    ...

</Page> 
```

login-view-model.ts
```TypeScript
import { Observable } from 'data/observable';
import { LoginEventData } from "nativescript-facebook";

export class LoginViewModel extends Observable {

  public onLogin(eventData: LoginEventData) {
    if (eventData.error) {
      alert("Error during login: " + eventData.error.message);
    } else {
      console.log(eventData.loginResponse.token);
    }
  }

}
```

#### Custom Login Button
login-page.xml
```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd"
      xmlns:Facebook="nativescript-facebook"
  loaded="pageLoaded" class="page">

    ...

    <Button tap="{{ login }}" text="Log in (custom)"></Button>

    ...

</Page> 
```

login-view-model.ts
```TypeScript
import { Observable } from 'data/observable';
import { login as fbLogin } from "nativescript-facebook";

export class LoginViewModel extends Observable {

  public login() {
    fbLogin((err, fbData) => {
      if (err) {
        alert("Error during login: " + err.message);
      } else {
        console.log(fbData.token);
      }
    });
  }

}
```

## NativeScript Angular
### Initialization
Call init of nativescript-facebook module on application launch.

app.module.ts
```TypeScript
...
import * as application from 'application';
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

let nsFacebook = require('nativescript-facebook');

application.on(application.launchEvent, function (args) {
    nsFacebook.init("{facebook_app_id}");
});
...
```

### Login
#### Facebook Login Button
pages/login/login.component.html
```html
<StackLayout>
    <FacebookLoginButton (login)="onLogin($event)"></FacebookLoginButton>
</StackLayout>
```

pages/login/login.component.ts
```TypeScript
import { Component } from "@angular/core";
import * as Facebook from "nativescript-facebook";

@Component({
    selector: "login",
    templateUrl: "login.component.html",
})
export class LoginComponent { 
    onLogin = function (eventData: Facebook.LoginEventData) {
        if (eventData.error) {
            alert("Error during login: " + eventData.error);
        } else {
            console.log(eventData.loginResponse.token);
        }
    }
}
```

#### Custom Login Button
pages/login/login.component.html
```html
<StackLayout>
    <Button text="Login Button (custom)" (tap)="testAction()"></Button>
</StackLayout>
```

pages/login/login.component.ts
```TypeScript
import { Component } from "@angular/core";
import * as Facebook from "nativescript-facebook";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})
export class AppComponent { 
    login = function () {
        Facebook.login((error, fbData) => {
            if (error) {
                alert("Error during login: " + error.message);
            } else {
                console.log(fbData.token);
            }
        });
    };
}
```

## Login Response
The callback that have to be provided to Facebook.login method receives 2 arguments: error and login response object. Login response object has the following structure:

| Property        | Description  
| ------------- |:-------------| 
| token         | access token which will be used for further authentications      |  


## License
Apache 2.0
