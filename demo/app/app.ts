import * as application from 'application';

declare class UIResponder { };
declare var UIApplicationDelegate: any;
declare var FBSDKApplicationDelegate: any;
declare var FBSDKAppEvents: any;
declare class UIApplication { };
declare interface UIApplicationDelegate { };
declare class NSDictionary { };

if (application.ios) {

  class MyDelegate extends UIResponder implements UIApplicationDelegate {
    public static ObjCProtocols = [UIApplicationDelegate];

    applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary): boolean {
      return FBSDKApplicationDelegate.sharedInstance().applicationDidFinishLaunchingWithOptions(application, launchOptions);
    }

    applicationOpenURLSourceApplicationAnnotation(application, url, sourceApplication, annotation) {
      return FBSDKApplicationDelegate.sharedInstance().applicationOpenURLSourceApplicationAnnotation(application, url, sourceApplication, annotation);
    }

    applicationDidBecomeActive(application: UIApplication): void {
      FBSDKAppEvents.activateApp();
    }

    applicationWillTerminate(application: UIApplication): void {
      //Do something you want here
    }

    applicationDidEnterBackground(application: UIApplication): void {
      //Do something you want here
    }
  }

  application.ios.delegate = MyDelegate;
}

application.start({ moduleName: "main-page" });
