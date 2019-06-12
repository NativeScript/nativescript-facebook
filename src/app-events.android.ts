let application = require("tns-core-modules/application");
let androidApplication;
let appEventsLogger;
export function initAnalytics() {
    androidApplication = application.android;
    appEventsLogger = com.facebook.appevents.AppEventsLogger.newLogger(androidApplication.context.getApplicationContext());
}

export function logEvent(name: string, parameters?: any) {
    if (name === undefined) {
        throw ("Argument 'name' is missing");
    }

    const bundle = new android.os.Bundle();

    if (parameters !== undefined) {
        for (let p in parameters) {
            let param = parameters[p];
            if (param.value !== undefined) {
                bundle.putString(param.key, param.value);
            }
        }
    }
    appEventsLogger.logEvent(name, bundle);
}
