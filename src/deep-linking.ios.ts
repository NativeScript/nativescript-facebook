import {
    DeepLink
} from './deep-linking.common';

export function initDeepLinking(appId: string) {
    FBSDKSettings.autoInitEnabled = true;
    FBSDKSettings.appID = appId;
}

export function fetchDeferredAppLink(): Promise<DeepLink> {
    return new Promise((resolve, reject) => {
        FBSDKAppLinkUtility.fetchDeferredAppLink((url, error) => {
            if (error) {
                reject(error);
                return;
            }
            if (!url) {
                resolve(null);
                return;
            }
            var deepLink = new DeepLink({ target: url.absoluteString });
            resolve(deepLink);
        });
    });
}