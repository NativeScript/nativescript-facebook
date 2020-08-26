import * as application from "tns-core-modules/application";
import { DeepLink } from './deep-linking.common';

let androidApplication;

export function initDeepLinking(appId: string) {
    com.facebook.FacebookSdk.setApplicationId(appId);
    androidApplication = application.android;
    try {
        // fb initialization
        com.facebook.FacebookSdk.sdkInitialize(androidApplication.context.getApplicationContext());
        com.facebook.FacebookSdk.setAutoLogAppEventsEnabled(true);
    }
    catch (e) {
        console.log(e);
    }
}

export function fetchDeferredAppLink(): Promise<DeepLink> {
    return new Promise((resolve, reject) => {
        try {
            com.facebook.applinks.AppLinkData.fetchDeferredAppLinkData(androidApplication.context.getApplicationContext(), new com.facebook.applinks.AppLinkData.CompletionHandler({
                onDeferredAppLinkDataFetched: function (appLinkData) {
                    // Process app link data
                    if (!appLinkData) {
                        resolve(null);
                        return;
                    }
                    let targetUri = appLinkData.getTargetUri();
                    let target = null;
                    if (targetUri) target = targetUri.toString();
                    let deepLink = new DeepLink({ target: target, ref: appLinkData.getRef(), promoCode: appLinkData.getPromotionCode() });
                    resolve(deepLink);
                }
            }));
        }
        catch (e) {
            reject(e);
        }
    });
}

export function registerDeepLinkCallback(callback): void {
    application.android.on(
        application.AndroidApplication.activityNewIntentEvent,
        args => {
            const intent: android.content.Intent = args.activity.getIntent();
            try {
                var data = intent.getData();
                let url = null;
                if (data) {
                    url = data.toString();
                }
                if (url == null) {
                    var appLink = com.facebook.applinks.AppLinkData.createFromAlApplinkData(intent);
                    if (!appLink) return;
                    url = appLink.getTargetUri();
                }
                if (callback)
                    callback(null, url, null);
            } catch (e) {
                console.error(e);
            }
        }
    );
}


