var application = require("tns-core-modules/application");
var androidApplication;
var appEventsLogger;
export function initAnalytics() {
    androidApplication = application.android;
    appEventsLogger = com.facebook.appevents.AppEventsLogger.newLogger(androidApplication.context.getApplicationContext());
}

export function logEvent(name: string, parameters?: any) {
    if (name === undefined) {
        throw ("Argument 'key' is missing");
    }
    
    const bundle = new android.os.Bundle();

    if (parameters !== undefined) {
        for (var p in parameters) {
            var param = parameters[p];
            if (param.value !== undefined) {
                bundle.putString(param.key, param.value);
            }
        }
    }
    
    appEventsLogger.logEvent(name, bundle);
}
