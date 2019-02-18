var application = require("tns-core-modules/application");
var iosApplication;
var appEventsLogger;
export function initAnalytics() {
    iosApplication = application.iosApplication;
    FBSDKAppEvents.activateApp();
}

export function logEvent(name: string, parameters?: any) {
    if (name === undefined) {
        throw ("Argument 'key' is missing");
    }

    if (parameters === undefined) {
        FBSDKAppEvents.logEvent(name);
    } else {
        const parametersDictionary = new (NSDictionary as any)(
            parameters.map(parameter => parameter.value),
            parameters.map(parameter => parameter.key));
        console.log(parametersDictionary);
    
        FBSDKAppEvents.logEventParameters(name, parametersDictionary)
    }
}