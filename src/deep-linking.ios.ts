import {
    DeepLink
} from './deep-linking.common';
import { ios } from 'tns-core-modules/application';

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
            let deepLink = new DeepLink({ target: url.absoluteString });
            resolve(deepLink);
        });
    });
}

export function registerDeepLinkCallback(callback): void {
    if (ios && ios.delegate) {
        const crtHandler = ios.delegate.prototype["applicationOpenURLOptions"];
        ios.delegate.prototype["applicationOpenURLOptions"] = function () {
            const args = Array.from(arguments);
            if (crtHandler) {
                const result = crtHandler.apply(this, args);
                args.push(result);
            }
            return callback.apply(this, args);
        };
    }
}