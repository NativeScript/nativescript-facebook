NativeScript : Facebook SDK ![apple](https://cdn3.iconfinder.com/data/icons/picons-social/57/16-apple-32.png) ![android](https://cdn4.iconfinder.com/data/icons/logos-3/228/android-32.png)
 =======
[![npm](https://img.shields.io/npm/v/nativescript-facebook.svg)](https://www.npmjs.com/package/nativescript-facebook)
[![npm](https://img.shields.io/npm/dm/nativescript-facebook.svg)](https://www.npmjs.com/package/nativescript-facebook)
[![Build Status](https://travis-ci.org/NativeScript/nativescript-facebook.svg?branch=master)](https://travis-ci.org/NativeScript/nativescript-facebook)
-------

[NativeScript](https://www.nativescript.org) plugin, wrapper of native [Facebook SDK](https://developers.facebook.com) for Android and iOS.

![demo](https://github.com/nativescript-space/nativescript-facebook/blob/assets/demo.gif?raw=true)

<!-- TOC depthFrom:2 -->

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
    - [Share](#share)
        - [Create Sharing Content](#create-sharing-content)
        - [Facebook Share Button](#facebook-share-button)
        - [Facebook Send Button](#facebook-send-button)
        - [Show Share Dialog Programmatically](#show-dialog-programmatically)
        - [Hide Custom Button If Can't share](#hide-custom-button)
- [NativeScript Angular](#nativescript-angular)
    - [Initialization](#initialization-1)
    - [Login](#login-1)
        - [Facebook Login Button](#facebook-login-button-1)
        - [Custom Login Button](#custom-login-button-1)
    - [Logout](#logout)
        - [Facebook Logout Button](#facebook-logout-button-1)
        - [Custom Logout Button](#custom-logout-button-1)
    - [Share](#share-1)
        - [Create Sharing Content](#create-sharing-content-1)
        - [Facebook Share Button](#facebook-share-button-1)
        - [Facebook Send Button](#facebook-send-button-1)
        - [Show Share Dialog Programmatically](#show-dialog-programmatically-1)
        - [Hide Custom Button If Can't share](#hide-custom-button-1)
- [Login Response](#login-response)
- [Get Current Access Token](#get-current-access-token)
- [Basic Analytics](#basic-analytics)
- [Graph API Example](#graph-api-example)
- [Release notes](#release-notes)
- [FAQ](#faq)
- [Contribute](#contribute)
- [Get Help](#get-help)

<!-- /TOC -->

## Features
- [x] Login & Logout
- [x] Share
- [ ] Graph API
- [x] Basic Analytics


## Installation
```
tns plugin add nativescript-facebook
```

## Configuration
### Android
Update AndroidManifest.xml (app/App_Resources/Android/AndroidManifest.xml) to put `provider` under `<application>`  
`{facebook_app_id}` is your app id

```xml
<provider android:authorities="com.facebook.app.FacebookContentProvider{facebook_app_id}"
				  android:name="com.facebook.FacebookContentProvider"
				  android:exported="true"/>
```
### iOS
Update Info.plist file (app/App_Resources/iOS/Info.plist) to contains `CFBundleURLTypes` and `LSApplicationQueriesSchemes` like below:
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
		<key>LSApplicationQueriesSchemes</key>
        <array>
            <string>fbapi</string>
            <string>fb-messenger-share-api</string>
            <string>fbauth2</string>
            <string>fbshareextension</string>
        </array>
    </dict>
</plist>
```
>Make sure you replaced {facebook_app_id} with your Facebook App Id. More info regarding how to obtain a Facebook App Id can be found [here](https://developers.facebook.com/docs/apps/register).

# Usage
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

### Share
### Create Sharing Content
For sharing, you have to create sharing content first. 
Currently the available content types are: 
- **createShareLinksContent(link: string, quote?: string, addition?: ShareAdditionContent)** available for every condition 
- **createSharePhotosContent(images: ImageSource[] | string[], userGenerated: boolean, addition?: ShareAdditionContent)** available for ShareButton and `showShareDialog` ( only when user have native Facebook installed, version 7.0 or higher )
- **createShareMessageGenericTemplateContent(contentConfig: MessageGenericTemplateContent)**  available for SendButton and `showMessageDialog`
- **createShareMessageMediaTemplateContent(contentConfig: MessageMediaTemplateContent)**  available for SendButton and `showMessageDialog`

You can see more information from [https://developers.facebook.com/docs/sharing/overview#content](https://developers.facebook.com/docs/sharing/overview#content) and [https://developers.facebook.com/docs/sharing/messenger#share-types](https://developers.facebook.com/docs/sharing/messenger#share-types)
```TypeScript
import {
    LoginEventData,
    getCurrentAccessToken,
    createShareLinksContent,
    createSharePhotosContent,
    createShareMessageGenericTemplateContent,
    MessageGenericTemplateImageAspectRatio,
    showShareDialog,
    showMessageDialog,
    canShareDialogShow,
    canMessageDialogShow
} from 'nativescript-facebook';

const linkContent = createShareLinksContent('https://www.nativescript.org',
            'Create Native iOS and Android Apps With JavaScript',
            {
                hashtag: '#Nativescript'
            });

// you can also pass in imageUrls as string[] in here
const logoImage = fromResource('logo');
const photosContent = createSharePhotosContent([logoImage], false, {
              hashtag: '#Nativescript'
          });
const GenericTemplate = createShareMessageGenericTemplateContent({
            element: {
                title: 'Nativescript',
                subtitle: 'Create Native iOS and Android Apps With JavaScript',
                imageUrl: 'https://d2odgkulk9w7if.cloudfront.net/images/default-source/home/how-it-works-min.png',
                button: {
                    title: 'Check Doc',
                    url: 'https://docs.nativescript.org'
                },
                defaultAction: {
                    title: 'Go HomePage',
                    url: 'https://www.nativescript.org'
                }
            },
            // it seems android have to provide a pageId, otherwise the MessageDialog just wont show
            pageID: 'testestsett',
            imageAspectRatio: MessageGenericTemplateImageAspectRatio.Horizontal
        });

```

### Facebook Share Button
```xml
<Facebook:ShareButton content="{{ linkContent }}"></Facebook:ShareButton>
```

### Facebook Send Button

If the Messenger app is not installed, the Send button will be hidden. Be sure that your app layout is appropriate when this button is hidden.
 
```xml
<Facebook:SendButton content="{{ genericContent }}"></Facebook:SendButton>
```

### Show Share Dialog Programmatically

**Note** The share dialog will try fallback to browse page sharing if user doesn't have Facebook installed (only for linkContent)

```TypeScript
showShareDialog(this.linkContent);
showMessageDialog(this.linkContent);
showShareDialog(this.linkContent, (error:Error, result:ShareCallbackResult) => {
    if(!error){
        console.log(result.android); // com.facebook.share.Sharer.Result
        console.log(result.ios); // (NSDictionary * ) The results from the sharer. This may be nil or empty.
    }
});
```

### Hide Custom Button If Can't share

You can use this method to check if the content can be shared and hide the custom button if can't

```TypeScript
public canShowPhotosShareDialog = canShareDialogShow(this.photosContent);
public canShowGenericMessageDialog = canMessageDialogShow(this.genericContent);
```
```xml
<Button tap="{{ onShareDialogPhotos }}" text="Open Share dialog (photos)" visibility="{{ canShowPhotosShareDialog ? 'visible' : 'collapsed' }}"></Button>
<Button tap="{{ onSendGenericDialog }}" text="Share Message Generic Template" visibility="{{ canShowGenericMessageDialog ? 'visible' : 'collapsed' }}"></Button>
```

## NativeScript Angular
### Initialization
Call init of nativescript-facebook module on application launch.

[app.module.ts](https://github.com/NativeScript/nativescript-facebook/blob/master/demo-angular/app/app.module.ts)
```TypeScript
...
import * as application from 'application';
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFacebookModule } from "nativescript-facebook/angular";

let nsFacebook = require('nativescript-facebook');

application.on(application.launchEvent, function (args) {
    nsFacebook.init("{facebook_app_id}");
});
...
@NgModule({
    ...
    imports: [
        AppRoutingModule,
        NativeScriptModule,
        NativeScriptFacebookModule,
        ...
    ],
    ...
})
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


### Share
### Create Sharing Content
Read Nativescript [chapter](#create-sharing-content) for this

### Facebook Share Button
```html
<FacebookShareButton [content] = "linkContent"></FacebookShareButton>
```

### Facebook Send Button

If the Messenger app is not installed, the Send button will be hidden. Be sure that your app layout is appropriate when this button is hidden.
 
```html
<FacebookSendButton [content] = "genericContent"></FacebookSendButton>
```

### Show Share Dialog Programmatically

**Note** The share dialog will try fallback to browse page sharing if user doesn't have Facebook installed (only for linkContent)

```TypeScript
showShareDialog(this.linkContent);
showMessageDialog(this.linkContent);
showShareDialog(this.linkContent, (error:Error, result:ShareCallbackResult) => {
    if(!error){
        console.log(result.android); // com.facebook.share.Sharer.Result
        console.log(result.ios); // (NSDictionary * ) The results from the sharer. This may be nil or empty.
    }
});
```

### Hide Custom Button If Can't share

You can use this method to check if the content can be shared and hide the custom button if can't

```TypeScript
public canShowPhotosShareDialog = canShareDialogShow(this.photosContent);
public canShowGenericMessageDialog = canMessageDialogShow(this.genericContent);
```
```html
<Button (tap) = "onShareDialogPhotos()" text = "Open Share dialog (photos)" *ngIf = "canShowPhotosShareDialog"></Button>
<Button (tap) = "onSendGenericDialog()" text = "Share Message Generic Template" *ngIf = "canShowGenericMessageDialog"></Button>
```

## Login Response
The callback that have to be provided to Facebook.login method receives 2 arguments: error and login response object. Login response object has the following structure:

| Property        | Description  
| ------------- |:-------------| 
| token         | access token which will be used for further authentications      |  


## Get Current Access Token
The plugin allows to get the current access token, if any, via getCurrentAccessToken() method.

## Basic Analytics
The plugin allows to log analytics events. At the initialization of the application you need to init analytics:

```Typescript
application.on(application.launchEvent, function (args) {
    nsFacebook.init("{facebook_app_id}");
    nsFacebook.initAnalytics();
});
```

Events logging:

```Typescript
nsFacebook.logEvent('Lead');
```

Logging event with parameters:

```Typescript
const value = 5;
const parameters = [{
    key: 'value',
    value: value.toString(),
}];

nsFacebook.logEvent(FundsAdded, parameters);
```

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

Check out release notes [here](https://github.com/NativeScript/nativescript-facebook/releases)

## FAQ
Check out our FAQ section [here](https://github.com/NativeScript/nativescript-facebook/wiki/FAQ).

## Contribute
We love PRs! Check out the [contributing guidelines](CONTRIBUTING.md). If you want to contribute, but you are not sure where to start - look for [issues labeled `help wanted`](https://github.com/NativeScript/nativescript-facebook/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22).

  
## Get Help 
Please, use [github issues](https://github.com/NativeScript/nativescript-facebook/issues) strictly for [reporting bugs](CONTRIBUTING.md#reporting-bugs) or [requesting features](CONTRIBUTING.md#requesting-new-features). For general questions and support, check out [Stack Overflow](https://stackoverflow.com/questions/tagged/nativescript) or ask our experts in [NativeScript community Slack channel](http://developer.telerik.com/wp-login.php?action=slack-invitation).
  
![](https://ga-beacon.appspot.com/UA-111455-24/nativescript/nativescript-facebook?pixel) 
