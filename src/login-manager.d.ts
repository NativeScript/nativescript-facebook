export declare function _registerLoginCallback(callback: Function): void;
export declare function _registerLogoutCallback(callback: Function): void;
export declare let onLoginCallback: Function;
export declare let onLogoutCallback: Function;

/**
* Sets the Facebook application Id for the current app and init the native facebook sdk.
* @param {string} fbAppId the application Id
*/
export declare function init(fbId: string): void;
/**
* Request the specified publish permissions.
* @param {string[]} permissions Array of the requested publish permissions.
* @param {Function} callback Function reference to be executed when the requested permissions are granted or denied.
*/
export declare function requestPublishPermissions(permissions: string[], callback: Function): void;
/**
* Request the specified read permissions.
* @param {string[]} permissions Array of the requested read permissions.
* @param {Function} callback Function reference to be executed when the requested permissions are granted or denied.
*/
export declare function requestReadPermissions(permissions: string[], callback: Function): void;
/**
* Trigger a login procedure by requesting the "public_profile" and "email" read permissions.
* @param {Function} callback Function reference to be executed when the requested permissions are granted or denied.
*/
export declare function login(callback: Function): void;
/**
* Trigger a logout procedure.
* @param {Function} callback Function reference to be executed when the logout is executed.
*/
export declare function logout(callback: Function): void;