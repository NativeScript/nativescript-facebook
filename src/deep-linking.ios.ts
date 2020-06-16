
export function initDeepLinking() {
    FBSDKSettings.autoInitEnabled = true;
}

export function fetchDeferredAppLink(): Promise<NSURL> {
    return new Promise((resolve, reject) => {
        FBSDKAppLinkUtility.fetchDeferredAppLink((url, error) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(url);
            }
        });
    });
}