export declare enum LoginBehavior {
    /**
    This is the default behavior, and indicates logging in through the native
    Facebook app may be used. The SDK may still use Safari instead.
    */
    LoginBehaviorNative = 0,
    /**
    Attempts log in through the Safari or SFSafariViewController, if available.
    */
    LoginBehaviorBrowser = 1,
    /**
    Attempts log in through the Facebook account currently signed in through
    the device Settings.
    @note If the account is not available to the app (either not configured by user or
    as determined by the SDK) this behavior falls back to \c LoginBehaviorNative.
    */
    LoginBehaviorSystemAccount = 2,
    /**
    Attempts log in through a modal \c UIWebView pop up
    @note This behavior is only available to certain types of apps. Please check the Facebook
    Platform Policy to verify your app meets the restrictions.
    */
    LoginBehaviorWeb = 3,
}