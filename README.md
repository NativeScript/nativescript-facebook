NativeScript : Facebook SDK ![apple](https://cdn3.iconfinder.com/data/icons/picons-social/57/16-apple-32.png) ![android](https://cdn4.iconfinder.com/data/icons/logos-3/228/android-32.png)
 =======
[![npm](https://img.shields.io/npm/v/nativescript-facebook.svg)](https://www.npmjs.com/package/nativescript-facebook)
[![npm](https://img.shields.io/npm/dm/nativescript-facebook.svg)](https://www.npmjs.com/package/nativescript-facebook)
[![Build Status](https://travis-ci.org/NativeScript/nativescript-facebook.svg?branch=master)](https://travis-ci.org/NativeScript/nativescript-facebook)
-------

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
    - [Log out](#log-out)
        - [Facebook Logout Button](#facebook-logout-button)
        - [Custom Logout Button](#custom-logout-button)
- [NativeScript Angular](#nativescript-angular)
    - [Initialization](#initialization-1)
    - [Login](#login-1)
        - [Facebook Login Button](#facebook-login-button-1)
        - [Custom Login Button](#custom-login-button-1)
    - [Logout](#logout)
        - [Facebook Logout Button](#facebook-logout-button-1)
        - [Custom Logout Button](#custom-logout-button-1)
- [Login Response](#login-response)
- [Graph API Example](#graph-api-example)
- [Release notes](#release-notes)
- [FAQ](#faq)
- [Contributing](#contributing)
- [License](#license)

<!-- /TOC -->

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

[app.ts](https://github.com/NativeScript/nativescript-facebook/blob/master/demo/app/app.ts)
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
Add Facebook login button as simple as adding a Facebook:LoginButton tag in your view. Then you can define `login` event handler name. In the example below - `onLogin`.

[login-page.xml](https://github.com/NativeScript/nativescript-facebook/blob/master/demo/app/login-page.xml)
```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd"
      xmlns:Facebook="nativescript-facebook"
  loaded="pageLoaded" class="page">

    ...

    <Facebook:LoginButton login="{{ onLogin }}"></Facebook:LoginButton>

    ...

</Page> 
```

Implement `onLogin` event handler in your view-model. It receives an argument from type `LoginEventData`. Currently `LoginEventData` object has 2 properties: error and loginResponse. loginResponse is an object that consists of 1 property - token that keeps the facebook access token which will be used for further authentications. Ideally we can add some other properties here in the future such as Facebook user id.

[login-view-model.ts](https://github.com/NativeScript/nativescript-facebook/blob/master/demo/app/login-view-model.ts)
```TypeScript
import { Observable } from 'data/observable';
import { Facebook:LoginButton } from "nativescript-facebook";

export class LoginViewModel extends Observable {

  onLogin(eventData: LoginEventData) {
    if (eventData.error) {
      alert("Error during login: " + eventData.error.message);
    } else {
      console.log(eventData.loginResponse.token);
    }
  }
}
```

#### Custom Login Button
Add a button and define a `tap` event handler in your login view. 

[login-page.xml](https://github.com/NativeScript/nativescript-facebook/blob/master/demo/app/login-page.xml)
```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd"
      xmlns:Facebook="nativescript-facebook"
  loaded="pageLoaded" class="page">

    ...

    <Button tap="{{ login }}" text="Log in (custom)"></Button>

    ...

</Page> 
```

In the view model implement the tap event handler in this case `login` method. It just has to call the login method that comes from the plugin. In the example below the login method from the plugin is imported as fbLogin.

> **BEST PRACTICE**: 
Import only the methods that you need instead of the entire file. It is crucial when you bundle your app with webpack.

[login-view-model.ts](https://github.com/NativeScript/nativescript-facebook/blob/master/demo/app/login-view-model.ts)
```TypeScript
import { Observable } from 'data/observable';
import { login as fbLogin } from "nativescript-facebook";

export class LoginViewModel extends Observable {

  login() {
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

### Log out
#### Facebook Logout Button

Add Facebook logout button as simple as adding a Facebook:LoginButton tag in your view. Then you can define `logout` event handler name. In the example below - `onLogout`.

[home-page.xml](https://github.com/NativeScript/nativescript-facebook/blob/master/demo/app/home-page.xml)
```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd"
      xmlns:Facebook="nativescript-facebook"
  loaded="pageLoaded" class="page">

    ...

    <Facebook:LoginButton logout="{{ onLogout }}"></Facebook:LoginButton>

    ...

</Page> 
```

Implement `onLogout` event handler in your view-model.

[home-view-model.ts](https://github.com/NativeScript/nativescript-facebook/blob/master/demo/app/home-view-model.ts)
```TypeScript
import { Observable } from 'data/observable';

export class HomeViewModel extends Observable {

  onLogout() {
    console.log("logged out");
  }

}
```

#### Custom Logout Button

Add a button and define a `tap` event handler in your view. In this case - `logout`

[home-page.xml](https://github.com/NativeScript/nativescript-facebook/blob/master/demo/app/home-page.xml)
```xml
<Page xmlns="http://schemas.nativescript.org/tns.xsd"
      xmlns:Facebook="nativescript-facebook"
  loaded="pageLoaded" class="page">

    ...

    <Button tap="{{ logout }}" text="Log out (custom)"></Button>

    ...

</Page> 
```

In the view model implement the tap event handler in this case `logout` method. It just has to call the logout method that comes from the plugin. In the example below the logout method from the plugin is imported as fbLogout.

[home-view-model.ts](https://github.com/NativeScript/nativescript-facebook/blob/master/demo/app/home-view-model.ts)
```TypeScript
import { Observable } from 'data/observable';
import { logout as fbLogout } from "nativescript-facebook";

export class LoginViewModel extends Observable {

  logout() {
    fbLogout(() => {
      console.log("logged out");
    });
  }

}
```


## NativeScript Angular
### Initialization
Call init of nativescript-facebook module on application launch.

[app.module.ts](https://github.com/NativeScript/nativescript-facebook/blob/master/demo-angular/app/app.module.ts)
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

Add Facebook login button as simple as adding a Facebook:LoginButton tag in your component html file. Then you can define `login` event handler name. In the example below - `onLogin`. Bare in mind the $event argument.

[pages/login/login.component.html](https://github.com/NativeScript/nativescript-facebook/blob/master/demo-angular/app/pages/login/login.component.html)
```html
<StackLayout>
    <FacebookLoginButton (login)="onLogin($event)"></FacebookLoginButton>
</StackLayout>
```

Implement `onLogin` event handler in your component. It receives an argument from type `LoginEventData`. Currently `LoginEventData` object has 2 properties: error and loginResponse. loginResponse is an object that consists of 1 property - token that keeps the facebook access token which will be used for further authentications. Ideally we can add some other properties here in the future such as Facebook user id.

[pages/login/login.component.ts](https://github.com/NativeScript/nativescript-facebook/blob/master/demo-angular/app/pages/login/login.component.ts)
```TypeScript
import { Component } from "@angular/core";
import * as Facebook from "nativescript-facebook";

@Component({
    selector: "login",
    templateUrl: "login.component.html",
})
export class LoginComponent { 
    onLogin(eventData: Facebook.LoginEventData) {
        if (eventData.error) {
            alert("Error during login: " + eventData.error);
        } else {
            console.log(eventData.loginResponse.token);
        }
    }
}
```

#### Custom Login Button

Add a button and define a `tap` event handler in your login component html.

[pages/login/login.component.html](https://github.com/NativeScript/nativescript-facebook/blob/master/demo-angular/app/pages/login/login.component.html)
```html
<StackLayout>
    <Button text="Login Button (custom)" (tap)="login()"></Button>
</StackLayout>
```

In the component implement the tap event handler in this case `login` method. It just has to call the login method that comes from the plugin.

[pages/login/login.component.ts](https://github.com/NativeScript/nativescript-facebook/blob/master/demo-angular/app/pages/login/login.component.ts)
```TypeScript
import { Component } from "@angular/core";
import * as Facebook from "nativescript-facebook";

@Component({
    selector: "login",
    templateUrl: "login.component.html",
})
export class LoginComponent { 
    login() {
        Facebook.login((error, fbData) => {
            if (error) {
                alert("Error during login: " + error.message);
            } else {
                console.log(fbData.token);
            }
        });
    }
}
```


### Logout
#### Facebook Logout Button

Add Facebook logout button as simple as adding a Facebook:LoginButton tag in your component html file. Then you can define `logout` event handler name. In the example below - `onLogout`. Bare in mind the $event argument.

[pages/home/home.component.html](https://github.com/NativeScript/nativescript-facebook/blob/master/demo-angular/app/pages/home/home.component.html)
```html
<StackLayout>
    <FacebookLoginButton (logout)="onLogout($event)"></FacebookLoginButton>
</StackLayout>
```

Implement `onLogout` event handler.

[pages/home/home.component.ts](https://github.com/NativeScript/nativescript-facebook/blob/master/demo-angular/app/pages/home/home.component.ts)
```TypeScript
import { Component } from "@angular/core";
import * as Facebook from "nativescript-facebook";

@Component({
    selector: "home",
    templateUrl: "home.component.html",
})
export class HomeComponent { 
    onLogout(eventData: Facebook.LoginEventData) {
        if (eventData.error) {
            alert("Error during login: " + eventData.error);
        } else {
            console.log("logged out");
        }
    }
}
```

#### Custom Logout Button

Add a button and define a `tap` event handler in your view. In this case - `logout`

[pages/home/home.component.html](https://github.com/NativeScript/nativescript-facebook/blob/master/demo-angular/app/pages/home/home.component.html)
```html
<StackLayout>
    <Button text="Log out (custom)" (tap)="logout()"></Button>
</StackLayout>
```

In the component implement the tap event handler in this case `logout` method. It just has to call the logout method that comes from the plugin. In the example below the logout method from the plugin is imported as fbLogout.

[pages/home/home.component.ts](https://github.com/NativeScript/nativescript-facebook/blob/master/demo-angular/app/pages/home/home.component.ts)
```TypeScript
import { Component } from "@angular/core";
import { logout as fbLogout } from "nativescript-facebook";

@Component({
    selector: "home",
    templateUrl: "home.component.html",
})
export class AppComponent { 
  logout() {
    fbLogout(() => {
      console.log("logged out");
    });
  }
}
```


## Login Response
The callback that have to be provided to Facebook.login method receives 2 arguments: error and login response object. Login response object has the following structure:

| Property        | Description  
| ------------- |:-------------| 
| token         | access token which will be used for further authentications      |  


## Graph API Example
Once the Facebook access token is retrieved you can execute Graph API requests. In the example below after successful login, the access token is stored in application settings. And then on the home view it is retrieved and 2 Graph API calls are executed.
1. Get Facebook id of the logged in user
2. Get the logged in user avatar (this is kind of workaround of this NativeScript issue. [#2176](https://github.com/NativeScript/NativeScript/issues/2176))

```TypeScript
export class HomeComponent {
    accessToken: string = appSettings.getString("access_token");
    userId: string;
    username: string;
    avatarUrl: string;

    constructor(private ref: ChangeDetectorRef, private navigationService: NavigationService) {
        // Get logged in user's info
        http.getJSON(config.FACEBOOK_GRAPH_API_URL + "/me?access_token=" + this.accessToken).then((res) => {
            this.username = res.name;
            this.userId = res.id;

            // Get logged in user's avatar
            // ref: https://github.com/NativeScript/NativeScript/issues/2176
            http.getJSON(config.FACEBOOK_GRAPH_API_URL + "/" + this.userId + "/picture?type=large&redirect=false&access_token=" + this.accessToken).then((res) => {
                this.avatarUrl = res.data.url;
                this.ref.detectChanges();
            }, function (err) {
                alert("Error getting user info: " + err);
            });
        }, function (err) {
            alert("Error getting user info: " + err);
        });
    }
```

This sample is part of the demo apps and can be observed [here](https://github.com/NativeScript/nativescript-facebook/blob/master/demo/app/home-view-model.ts) for Nativescript Code and [here](https://github.com/NativeScript/nativescript-facebook/blob/master/demo-angular/app/pages/home/home.component.ts) for NativeScript + Angular.


## Release notes

Check out release notes [here] (https://github.com/NativeScript/nativescript-facebook/releases)

## FAQ
Check out our FAQ section [here](https://github.com/NativeScript/nativescript-facebook/wiki/FAQ).

## Contributing
Check out our Contribution guide [here](https://github.com/NativeScript/nativescript-facebook/blob/master/CONTRIBUTING.md).

## License
[Apache 2.0](https://github.com/NativeScript/nativescript-facebook/blob/master/LICENSE)
