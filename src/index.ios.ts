import * as applicationModule from "tns-core-modules/application";
export * from "./ui/login-button";
export * from "./login-manager";
export * from "./login-event-data";
export * from './share-manager';
export * from "./ui/share-button";
export * from "./app-events";

declare interface UIApplicationDelegate { }

// TODO: Extend existing delegate if exists
class BaseDelegate extends UIResponder implements UIApplicationDelegate {
  public static ObjCProtocols = [UIApplicationDelegate];

  applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<any, any>): boolean {
    //TODO: Make this a setting somewhere.
    FBSDKSettings.autoInitEnabled = true;
    //TODO: Make this configurable;
    FBSDKSettings.appID = "";
    var launced = FBSDKApplicationDelegate.sharedInstance.applicationDidFinishLaunchingWithOptions(application, launchOptions);
    //TODO: Make this a setting somewhere.
    FBSDKAppLinkUtility.fetchDeferredAppLink((url, error) => {
      if (url) {
        console.log(url);
      }
      if (error) {
        console.log(error);
      }

    })
    return launced;

  }

  applicationOpenURLSourceApplicationAnnotation(application, url, sourceApplication, annotation) {
    return FBSDKApplicationDelegate.sharedInstance.applicationOpenURLSourceApplicationAnnotation(application, url, sourceApplication, annotation);
  }

  applicationDidBecomeActive(application: UIApplication): void {
    FBSDKAppEvents.activateApp();
  }
}

applicationModule.ios.delegate = BaseDelegate;