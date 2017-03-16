export declare class Facebook {
    _isInit: boolean;
    mCallbackManager: any;
    loginManager: any;
    init(loginBehavior?: any): boolean;
    registerCallback(successCallback: any, cancelCallback: any, failCallback: any): void;
    logInWithPublishPermissions(permissions: string[]): void;
    logInWithReadPermissions(permissions: string[]): void;
}
