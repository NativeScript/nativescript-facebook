NativeScript : Facebook SDK ![apple](https://cdn3.iconfinder.com/data/icons/picons-social/57/16-apple-32.png) ![android](https://cdn4.iconfinder.com/data/icons/logos-3/228/android-32.png)
 =======

[NativeScript](https://www.nativescript.org) plugin, wrapper of native [Facebook SDK](https://developers.facebook.com) for Android and iOS.

![demo](https://github.com/nativescript-space/nativescript-facebook/blob/assets/demo.gif?raw=true)

<!-- TOC -->

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
- [NativeScript + Angular](#nativescript--angular)
    - [Initialization](#initialization-1)
    - [Login](#login-1)
        - [Facebook Login Button](#facebook-login-button-1)
        - [Custom Login Button](#custom-login-button-1)
- [Login Response](#login-response)
- [License](#license)

<!-- /TOC -->

## Features
- [x] Login
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
var nsFacebook = require('nativescript-facebook');

application.on(application.launchEvent, function (args) {
    nsFacebook.init("{facebook_app_id}");
});

application.start({ moduleName: "main-page" });
```

### Login
#### Facebook Login Button
main-page.xml
```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd"
      xmlns:Facebook="nativescript-facebook"
  loaded="pageLoaded" class="page">

    ...

    <Facebook:LoginButton onLogin="{{ onLogin }}"></Facebook:LoginButton>

    ...

</Page> 
```

main-view-model.ts
```TypeScript
import { Observable } from 'data/observable';
let Facebook = require('nativescript-facebook');

export class HelloWorldModel extends Observable {

  public onLogin(error, data) {
    console.log("Success!");
  }

}
```

#### Custom Login Button
main-page.xml
```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd"
      xmlns:Facebook="nativescript-facebook"
  loaded="pageLoaded" class="page">

    ...

    <Button tap="{{ testAction }}" text="Custom Login Button"></Button>

    ...

</Page> 
```

main-view-model.ts
```TypeScript
import { Observable } from 'data/observable';
let Facebook = require('nativescript-facebook');

export class HelloWorldModel extends Observable {

  public testAction() {
    Facebook.login((error, data) => {
      console.log("Success!");
    });
  }

}
```

## NativeScript + Angular
### Initialization
Call init of nativescript-facebook module on application launch.

main.ts
```TypeScript
import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import * as application from 'application';
var nsFacebook = require('nativescript-facebook');

import { AppModule } from "./app.module";

application.on(application.launchEvent, function (args) {
    nsFacebook.init("{facebook_app_id}");
});

platformNativeScriptDynamic().bootstrapModule(AppModule);
```

### Login
#### Facebook Login Button
app.component.html
```html
<StackLayout>
    <FacebookLoginButton [onLogin]="onLogin"></FacebookLoginButton>
</StackLayout>
```

app.component.ts
```TypeScript
import { Component } from "@angular/core";
import { LoginResponse } from "nativescript-facebook";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})
export class AppComponent { 
    onLogin = function (error: string, loginResponse : LoginResponse) {
        console.log("TOKEN: " + loginResponse.token);
    }
}
```

#### Custom Login Button
app.component.html
```html
<StackLayout>
    <Button text="Custom Login Button" (tap)="testAction()"></Button>
</StackLayout>
```

app.component.ts
```TypeScript
import { Component } from "@angular/core";
import { LoginResponse } from "nativescript-facebook";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})
export class AppComponent { 
    testAction = function () {
        Facebook.login((error, data) => {
            console.log("Success!");
        });
    }
}
```

## Login Response
The callback that have to be provided to Facebook.login method receives 2 arguments: error and login response object. Login response object has the following structure:

| Property        | Description  
| ------------- |:-------------| 
| userId        | user Id of the logged in user | 
| token         | access token which will be used for further authentications      |  


## License
Apache 2.0
