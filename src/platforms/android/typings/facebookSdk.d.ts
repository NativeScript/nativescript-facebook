declare module com {
	export module facebook {
		export class AccessToken {
			public static class: java.lang.Class<com.facebook.AccessToken>;
			public static ACCESS_TOKEN_KEY: string;
			public static EXPIRES_IN_KEY: string;
			public static USER_ID_KEY: string;
			public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.AccessToken>;
			public static isCurrentAccessTokenActive(): boolean;
			public static createFromNativeLinkingIntent(param0: globalAndroid.content.Intent, param1: string, param2: com.facebook.AccessToken.AccessTokenCreationCallback): void;
			public equals(param0: any): boolean;
			public getPermissions(): java.util.Set<string>;
			public getDeclinedPermissions(): java.util.Set<string>;
			public constructor(param0: string, param1: string, param2: string, param3: java.util.Collection<string>, param4: java.util.Collection<string>, param5: com.facebook.AccessTokenSource, param6: java.util.Date, param7: java.util.Date);
			public getToken(): string;
			public static refreshCurrentAccessTokenAsync(param0: com.facebook.AccessToken.AccessTokenRefreshCallback): void;
			public getApplicationId(): string;
			public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
			public static refreshCurrentAccessTokenAsync(): void;
			public toString(): string;
			public getExpires(): java.util.Date;
			public getSource(): com.facebook.AccessTokenSource;
			public getLastRefresh(): java.util.Date;
			public describeContents(): number;
			public static getCurrentAccessToken(): com.facebook.AccessToken;
			public getUserId(): string;
			public isExpired(): boolean;
			public static setCurrentAccessToken(param0: com.facebook.AccessToken): void;
			public hashCode(): number;
		}
		export module AccessToken {
			export class AccessTokenCreationCallback {
				public static class: java.lang.Class<com.facebook.AccessToken.AccessTokenCreationCallback>;
				/**
				 * Constructs a new instance of the com.facebook.AccessToken$AccessTokenCreationCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onSuccess(param0: com.facebook.AccessToken): void;
					onError(param0: com.facebook.FacebookException): void;
				});
				public constructor();
				public onSuccess(param0: com.facebook.AccessToken): void;
				public onError(param0: com.facebook.FacebookException): void;
			}
			export class AccessTokenRefreshCallback {
				public static class: java.lang.Class<com.facebook.AccessToken.AccessTokenRefreshCallback>;
				/**
				 * Constructs a new instance of the com.facebook.AccessToken$AccessTokenRefreshCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					OnTokenRefreshed(param0: com.facebook.AccessToken): void;
					OnTokenRefreshFailed(param0: com.facebook.FacebookException): void;
				});
				public constructor();
				public OnTokenRefreshFailed(param0: com.facebook.FacebookException): void;
				public OnTokenRefreshed(param0: com.facebook.AccessToken): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export class AccessTokenCache {
			public static class: java.lang.Class<com.facebook.AccessTokenCache>;
			public clear(): void;
			public constructor();
			public load(): com.facebook.AccessToken;
			public save(param0: com.facebook.AccessToken): void;
		}
		export module AccessTokenCache {
			export class SharedPreferencesTokenCachingStrategyFactory {
				public static class: java.lang.Class<com.facebook.AccessTokenCache.SharedPreferencesTokenCachingStrategyFactory>;
				public create(): com.facebook.LegacyTokenHelper;
			}
		}
	}
}

declare module com {
	export module facebook {
		export class AccessTokenManager {
			public static class: java.lang.Class<com.facebook.AccessTokenManager>;
			public static TAG: string;
			public static ACTION_CURRENT_ACCESS_TOKEN_CHANGED: string;
			public static EXTRA_OLD_ACCESS_TOKEN: string;
			public static EXTRA_NEW_ACCESS_TOKEN: string;
			public static SHARED_PREFERENCES_NAME: string;
		}
		export module AccessTokenManager {
			export class RefreshResult {
				public static class: java.lang.Class<com.facebook.AccessTokenManager.RefreshResult>;
				public accessToken: string;
				public expiresAt: number;
			}
		}
	}
}

declare module com {
	export module facebook {
		export class AccessTokenSource {
			public static class: java.lang.Class<com.facebook.AccessTokenSource>;
			public static NONE: com.facebook.AccessTokenSource;
			public static FACEBOOK_APPLICATION_WEB: com.facebook.AccessTokenSource;
			public static FACEBOOK_APPLICATION_NATIVE: com.facebook.AccessTokenSource;
			public static FACEBOOK_APPLICATION_SERVICE: com.facebook.AccessTokenSource;
			public static WEB_VIEW: com.facebook.AccessTokenSource;
			public static CHROME_CUSTOM_TAB: com.facebook.AccessTokenSource;
			public static TEST_USER: com.facebook.AccessTokenSource;
			public static CLIENT_TOKEN: com.facebook.AccessTokenSource;
			public static DEVICE_AUTH: com.facebook.AccessTokenSource;
			public static values(): native.Array<com.facebook.AccessTokenSource>;
			public static valueOf(param0: string): com.facebook.AccessTokenSource;
		}
	}
}

declare module com {
	export module facebook {
		export abstract class AccessTokenTracker {
			public static class: java.lang.Class<com.facebook.AccessTokenTracker>;
			public onCurrentAccessTokenChanged(param0: com.facebook.AccessToken, param1: com.facebook.AccessToken): void;
			public startTracking(): void;
			public stopTracking(): void;
			public constructor();
			public isTracking(): boolean;
		}
		export module AccessTokenTracker {
			export class CurrentAccessTokenBroadcastReceiver {
				public static class: java.lang.Class<com.facebook.AccessTokenTracker.CurrentAccessTokenBroadcastReceiver>;
				public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export class BuildConfig {
			public static class: java.lang.Class<com.facebook.BuildConfig>;
			public static DEBUG: boolean;
			public static APPLICATION_ID: string;
			public static BUILD_TYPE: string;
			public static FLAVOR: string;
			public static VERSION_CODE: number;
			public static VERSION_NAME: string;
			public constructor();
		}
	}
}

declare module com {
	export module facebook {
		export class CallbackManager {
			public static class: java.lang.Class<com.facebook.CallbackManager>;
			/**
			 * Constructs a new instance of the com.facebook.CallbackManager interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): boolean;
			});
			public constructor();
			public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): boolean;
		}
		export module CallbackManager {
			export class Factory {
				public static class: java.lang.Class<com.facebook.CallbackManager.Factory>;
				public static create(): com.facebook.CallbackManager;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export class CurrentAccessTokenExpirationBroadcastReceiver {
			public static class: java.lang.Class<com.facebook.CurrentAccessTokenExpirationBroadcastReceiver>;
			public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
			public constructor();
		}
	}
}

declare module com {
	export module facebook {
		export class CustomTabActivity {
			public static class: java.lang.Class<com.facebook.CustomTabActivity>;
			public static CUSTOM_TAB_REDIRECT_ACTION: string;
			public static DESTROY_ACTION: string;
			public onCreate(param0: globalAndroid.os.Bundle): void;
			public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
			public constructor();
			public onDestroy(): void;
		}
	}
}

declare module com {
	export module facebook {
		export class CustomTabMainActivity {
			public static class: java.lang.Class<com.facebook.CustomTabMainActivity>;
			public static EXTRA_PARAMS: string;
			public static EXTRA_CHROME_PACKAGE: string;
			public static EXTRA_URL: string;
			public static REFRESH_ACTION: string;
			public onResume(): void;
			public onCreate(param0: globalAndroid.os.Bundle): void;
			public constructor();
			public static getRedirectUrl(): string;
			public onNewIntent(param0: globalAndroid.content.Intent): void;
		}
	}
}

declare module com {
	export module facebook {
		export class FacebookActivity {
			public static class: java.lang.Class<com.facebook.FacebookActivity>;
			public static PASS_THROUGH_CANCEL_ACTION: string;
			public onCreate(param0: globalAndroid.os.Bundle): void;
			public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
			public constructor();
			public getFragment(): globalAndroid.support.v4.app.Fragment;
			public getCurrentFragment(): globalAndroid.support.v4.app.Fragment;
		}
	}
}

declare module com {
	export module facebook {
		export class FacebookAuthorizationException extends com.facebook.FacebookException {
			public static class: java.lang.Class<com.facebook.FacebookAuthorizationException>;
			public constructor(param0: string, param1: native.Array<any>);
			public constructor(param0: java.lang.Throwable);
			public constructor(param0: string, param1: java.lang.Throwable);
			public constructor();
			public constructor(param0: string);
		}
	}
}

declare module com {
	export module facebook {
		export class FacebookBroadcastReceiver {
			public static class: java.lang.Class<com.facebook.FacebookBroadcastReceiver>;
			public onFailedAppCall(param0: string, param1: string, param2: globalAndroid.os.Bundle): void;
			public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
			public constructor();
			public onSuccessfulAppCall(param0: string, param1: string, param2: globalAndroid.os.Bundle): void;
		}
	}
}

declare module com {
	export module facebook {
		export abstract class FacebookButtonBase {
			public static class: java.lang.Class<com.facebook.FacebookButtonBase>;
			public getCompoundPaddingLeft(): number;
			public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number, param4: string, param5: string);
			public getRequestCode(): number;
			public setFragment(param0: globalAndroid.support.v4.app.Fragment): void;
			public onDraw(param0: globalAndroid.graphics.Canvas): void;
			public getCompoundPaddingRight(): number;
			public configureButton(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number): void;
			public measureTextWidth(param0: string): number;
			public getDefaultRequestCode(): number;
			public getActivity(): globalAndroid.app.Activity;
			public setInternalOnClickListener(param0: globalAndroid.view.View.OnClickListener): void;
			public getNativeFragment(): globalAndroid.app.Fragment;
			public setOnClickListener(param0: globalAndroid.view.View.OnClickListener): void;
			public setFragment(param0: globalAndroid.app.Fragment): void;
			public callExternalOnClickListener(param0: globalAndroid.view.View): void;
			public onAttachedToWindow(): void;
			public getFragment(): globalAndroid.support.v4.app.Fragment;
			public getDefaultStyleResource(): number;
		}
	}
}

declare module com {
	export module facebook {
		export class FacebookCallback<RESULT>  extends java.lang.Object {
			public static class: java.lang.Class<com.facebook.FacebookCallback<any>>;
			/**
			 * Constructs a new instance of the com.facebook.FacebookCallback<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				onSuccess(param0: RESULT): void;
				onCancel(): void;
				onError(param0: com.facebook.FacebookException): void;
			});
			public constructor();
			public onCancel(): void;
			public onSuccess(param0: RESULT): void;
			public onError(param0: com.facebook.FacebookException): void;
		}
	}
}

declare module com {
	export module facebook {
		export class FacebookContentProvider {
			public static class: java.lang.Class<com.facebook.FacebookContentProvider>;
			public onCreate(): boolean;
			public update(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues, param2: string, param3: native.Array<string>): number;
			public openFile(param0: globalAndroid.net.Uri, param1: string): globalAndroid.os.ParcelFileDescriptor;
			public delete(param0: globalAndroid.net.Uri, param1: string, param2: native.Array<string>): number;
			public constructor();
			public query(param0: globalAndroid.net.Uri, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string): globalAndroid.database.Cursor;
			public static getAttachmentUrl(param0: string, param1: java.util.UUID, param2: string): string;
			public insert(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues): globalAndroid.net.Uri;
			public getType(param0: globalAndroid.net.Uri): string;
		}
	}
}

declare module com {
	export module facebook {
		export class FacebookDialog<CONTENT, RESULT>  extends java.lang.Object {
			public static class: java.lang.Class<com.facebook.FacebookDialog<any,any>>;
			/**
			 * Constructs a new instance of the com.facebook.FacebookDialog<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				canShow(param0: CONTENT): boolean;
				show(param0: CONTENT): void;
				registerCallback(param0: com.facebook.CallbackManager, param1: com.facebook.FacebookCallback<RESULT>): void;
				registerCallback(param0: com.facebook.CallbackManager, param1: com.facebook.FacebookCallback<RESULT>, param2: number): void;
			});
			public constructor();
			public registerCallback(param0: com.facebook.CallbackManager, param1: com.facebook.FacebookCallback<RESULT>, param2: number): void;
			public canShow(param0: CONTENT): boolean;
			public show(param0: CONTENT): void;
			public registerCallback(param0: com.facebook.CallbackManager, param1: com.facebook.FacebookCallback<RESULT>): void;
		}
	}
}

declare module com {
	export module facebook {
		export class FacebookDialogException extends com.facebook.FacebookException {
			public static class: java.lang.Class<com.facebook.FacebookDialogException>;
			public constructor(param0: string, param1: number, param2: string);
			public getErrorCode(): number;
			public toString(): string;
			public constructor(param0: string, param1: native.Array<any>);
			public constructor(param0: java.lang.Throwable);
			public constructor(param0: string, param1: java.lang.Throwable);
			public getFailingUrl(): string;
			public constructor();
			public constructor(param0: string);
		}
	}
}

declare module com {
	export module facebook {
		export class FacebookException {
			public static class: java.lang.Class<com.facebook.FacebookException>;
			public toString(): string;
			public constructor(param0: string, param1: native.Array<any>);
			public constructor(param0: java.lang.Throwable);
			public constructor(param0: string, param1: java.lang.Throwable);
			public constructor();
			public constructor(param0: string);
		}
	}
}

declare module com {
	export module facebook {
		export class FacebookGraphResponseException extends com.facebook.FacebookException {
			public static class: java.lang.Class<com.facebook.FacebookGraphResponseException>;
			public constructor(param0: com.facebook.GraphResponse, param1: string);
			public toString(): string;
			public constructor(param0: string, param1: native.Array<any>);
			public constructor(param0: java.lang.Throwable);
			public constructor(param0: string, param1: java.lang.Throwable);
			public constructor();
			public constructor(param0: string);
			public getGraphResponse(): com.facebook.GraphResponse;
		}
	}
}

declare module com {
	export module facebook {
		export class FacebookOperationCanceledException extends com.facebook.FacebookException {
			public static class: java.lang.Class<com.facebook.FacebookOperationCanceledException>;
			public constructor(param0: string, param1: native.Array<any>);
			public constructor(param0: java.lang.Throwable);
			public constructor(param0: string, param1: java.lang.Throwable);
			public constructor();
			public constructor(param0: string);
		}
	}
}

declare module com {
	export module facebook {
		export class FacebookRequestError {
			public static class: java.lang.Class<com.facebook.FacebookRequestError>;
			public static INVALID_ERROR_CODE: number;
			public static INVALID_HTTP_STATUS_CODE: number;
			public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.FacebookRequestError>;
			public constructor(param0: number, param1: string, param2: string);
			public getErrorCode(): number;
			public getCategory(): com.facebook.FacebookRequestError.Category;
			public getConnection(): java.net.HttpURLConnection;
			public getErrorUserMessage(): string;
			public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
			public getBatchRequestResult(): any;
			public getRequestResult(): org.json.JSONObject;
			public getSubErrorCode(): number;
			public getErrorMessage(): string;
			public toString(): string;
			public describeContents(): number;
			public getErrorType(): string;
			public getErrorRecoveryMessage(): string;
			public getErrorUserTitle(): string;
			public getRequestStatusCode(): number;
			public getRequestResultBody(): org.json.JSONObject;
			public getException(): com.facebook.FacebookException;
		}
		export module FacebookRequestError {
			export class Category {
				public static class: java.lang.Class<com.facebook.FacebookRequestError.Category>;
				public static LOGIN_RECOVERABLE: com.facebook.FacebookRequestError.Category;
				public static OTHER: com.facebook.FacebookRequestError.Category;
				public static TRANSIENT: com.facebook.FacebookRequestError.Category;
				public static values(): native.Array<com.facebook.FacebookRequestError.Category>;
				public static valueOf(param0: string): com.facebook.FacebookRequestError.Category;
			}
			export class Range {
				public static class: java.lang.Class<com.facebook.FacebookRequestError.Range>;
			}
		}
	}
}

declare module com {
	export module facebook {
		export class FacebookSdk {
			public static class: java.lang.Class<com.facebook.FacebookSdk>;
			public static APPLICATION_ID_PROPERTY: string;
			public static APPLICATION_NAME_PROPERTY: string;
			public static CLIENT_TOKEN_PROPERTY: string;
			public static WEB_DIALOG_THEME: string;
			public static AUTO_LOG_APP_EVENTS_ENABLED_PROPERTY: string;
			public static CODELESS_DEBUG_LOG_ENABLED_PROPERTY: string;
			public static CALLBACK_OFFSET_PROPERTY: string;
			public static publishInstallAsync(param0: globalAndroid.content.Context, param1: string): void;
			public static sdkInitialize(param0: globalAndroid.content.Context, param1: com.facebook.FacebookSdk.InitializeCallback): void;
			public static setFacebookDomain(param0: string): void;
			public static getCodelessDebugLogEnabled(): boolean;
			public static getExecutor(): java.util.concurrent.Executor;
			public static clearLoggingBehaviors(): void;
			public static getApplicationSignature(param0: globalAndroid.content.Context): string;
			public static isDebugEnabled(): boolean;
			public static setIsDebugEnabled(param0: boolean): void;
			public static getGraphApiVersion(): string;
			public static setExecutor(param0: java.util.concurrent.Executor): void;
			public static setApplicationName(param0: string): void;
			public static getCallbackRequestCodeOffset(): number;
			public static isFacebookRequestCode(param0: number): boolean;
			public static setAutoLogAppEventsEnabled(param0: boolean): void;
			public static setOnProgressThreshold(param0: number): void;
			public static sdkInitialize(param0: globalAndroid.content.Context, param1: number, param2: com.facebook.FacebookSdk.InitializeCallback): void;
			public static getOnProgressThreshold(): number;
			public static isInitialized(): boolean;
			public static setGraphApiVersion(param0: string): void;
			public static setLegacyTokenUpgradeSupported(param0: boolean): void;
			public static getLimitEventAndDataUsage(param0: globalAndroid.content.Context): boolean;
			public static sdkInitialize(param0: globalAndroid.content.Context): void;
			public static getApplicationId(): string;
			public static sdkInitialize(param0: globalAndroid.content.Context, param1: number): void;
			public static getApplicationContext(): globalAndroid.content.Context;
			public static getLoggingBehaviors(): java.util.Set<com.facebook.LoggingBehavior>;
			public static getApplicationName(): string;
			public constructor();
			public static getFacebookDomain(): string;
			public static addLoggingBehavior(param0: com.facebook.LoggingBehavior): void;
			public static setApplicationId(param0: string): void;
			public static getClientToken(): string;
			public static setCodelessDebugLogEnabled(param0: boolean): void;
			public static setClientToken(param0: string): void;
			public static getCacheDir(): java.io.File;
			public static isLoggingBehaviorEnabled(param0: com.facebook.LoggingBehavior): boolean;
			public static getAutoLogAppEventsEnabled(): boolean;
			public static setCacheDir(param0: java.io.File): void;
			public static setLimitEventAndDataUsage(param0: globalAndroid.content.Context, param1: boolean): void;
			public static getSdkVersion(): string;
			public static removeLoggingBehavior(param0: com.facebook.LoggingBehavior): void;
			public static isLegacyTokenUpgradeSupported(): boolean;
		}
		export module FacebookSdk {
			export class InitializeCallback {
				public static class: java.lang.Class<com.facebook.FacebookSdk.InitializeCallback>;
				/**
				 * Constructs a new instance of the com.facebook.FacebookSdk$InitializeCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onInitialized(): void;
				});
				public constructor();
				public onInitialized(): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export class FacebookSdkNotInitializedException extends com.facebook.FacebookException {
			public static class: java.lang.Class<com.facebook.FacebookSdkNotInitializedException>;
			public constructor(param0: string, param1: native.Array<any>);
			public constructor(param0: java.lang.Throwable);
			public constructor(param0: string, param1: java.lang.Throwable);
			public constructor();
			public constructor(param0: string);
		}
	}
}

declare module com {
	export module facebook {
		export class FacebookSdkVersion {
			public static class: java.lang.Class<com.facebook.FacebookSdkVersion>;
			public static BUILD: string;
		}
	}
}

declare module com {
	export module facebook {
		export class FacebookServiceException extends com.facebook.FacebookException {
			public static class: java.lang.Class<com.facebook.FacebookServiceException>;
			public toString(): string;
			public constructor(param0: string, param1: native.Array<any>);
			public constructor(param0: com.facebook.FacebookRequestError, param1: string);
			public constructor(param0: java.lang.Throwable);
			public constructor(param0: string, param1: java.lang.Throwable);
			public constructor();
			public constructor(param0: string);
			public getRequestError(): com.facebook.FacebookRequestError;
		}
	}
}

declare module com {
	export module facebook {
		export class GraphRequest {
			public static class: java.lang.Class<com.facebook.GraphRequest>;
			public static MAXIMUM_BATCH_SIZE: number;
			public static TAG: string;
			public static ACCESS_TOKEN_PARAM: string;
			public static FIELDS_PARAM: string;
			public setVersion(param0: string): void;
			public constructor(param0: com.facebook.AccessToken, param1: string, param2: globalAndroid.os.Bundle, param3: com.facebook.HttpMethod, param4: com.facebook.GraphRequest.Callback, param5: string);
			public static executeBatchAndWait(param0: native.Array<com.facebook.GraphRequest>): java.util.List<com.facebook.GraphResponse>;
			public static executeConnectionAsync(param0: globalAndroid.os.Handler, param1: java.net.HttpURLConnection, param2: com.facebook.GraphRequestBatch): com.facebook.GraphRequestAsyncTask;
			public getCallback(): com.facebook.GraphRequest.Callback;
			public static newMyFriendsRequest(param0: com.facebook.AccessToken, param1: com.facebook.GraphRequest.GraphJSONArrayCallback): com.facebook.GraphRequest;
			public static toHttpConnection(param0: native.Array<com.facebook.GraphRequest>): java.net.HttpURLConnection;
			public static newUploadPhotoRequest(param0: com.facebook.AccessToken, param1: string, param2: globalAndroid.graphics.Bitmap, param3: string, param4: globalAndroid.os.Bundle, param5: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
			public setCallback(param0: com.facebook.GraphRequest.Callback): void;
			public getTag(): any;
			public static toHttpConnection(param0: java.util.Collection<com.facebook.GraphRequest>): java.net.HttpURLConnection;
			public static executeConnectionAndWait(param0: java.net.HttpURLConnection, param1: java.util.Collection<com.facebook.GraphRequest>): java.util.List<com.facebook.GraphResponse>;
			public getParameters(): globalAndroid.os.Bundle;
			public constructor(param0: com.facebook.AccessToken, param1: string);
			public getBatchEntryDependsOn(): string;
			public constructor();
			public static executeBatchAsync(param0: com.facebook.GraphRequestBatch): com.facebook.GraphRequestAsyncTask;
			public getGraphObject(): org.json.JSONObject;
			public static setDefaultBatchApplicationId(param0: string): void;
			public static executeAndWait(param0: com.facebook.GraphRequest): com.facebook.GraphResponse;
			public static executeConnectionAsync(param0: java.net.HttpURLConnection, param1: com.facebook.GraphRequestBatch): com.facebook.GraphRequestAsyncTask;
			public static getDefaultBatchApplicationId(): string;
			public static newGraphPathRequest(param0: com.facebook.AccessToken, param1: string, param2: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
			public static executeBatchAndWait(param0: java.util.Collection<com.facebook.GraphRequest>): java.util.List<com.facebook.GraphResponse>;
			public static newPostRequest(param0: com.facebook.AccessToken, param1: string, param2: org.json.JSONObject, param3: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
			public executeAndWait(): com.facebook.GraphResponse;
			public static newUploadPhotoRequest(param0: com.facebook.AccessToken, param1: string, param2: globalAndroid.net.Uri, param3: string, param4: globalAndroid.os.Bundle, param5: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
			public static newMeRequest(param0: com.facebook.AccessToken, param1: com.facebook.GraphRequest.GraphJSONObjectCallback): com.facebook.GraphRequest;
			public static newDeleteObjectRequest(param0: com.facebook.AccessToken, param1: string, param2: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
			public setBatchEntryName(param0: string): void;
			public setGraphPath(param0: string): void;
			public setParameters(param0: globalAndroid.os.Bundle): void;
			public static executeBatchAsync(param0: native.Array<com.facebook.GraphRequest>): com.facebook.GraphRequestAsyncTask;
			public static executeConnectionAndWait(param0: java.net.HttpURLConnection, param1: com.facebook.GraphRequestBatch): java.util.List<com.facebook.GraphResponse>;
			public getBatchEntryOmitResultOnSuccess(): boolean;
			public static toHttpConnection(param0: com.facebook.GraphRequestBatch): java.net.HttpURLConnection;
			public setSkipClientToken(param0: boolean): void;
			public setTag(param0: any): void;
			public setBatchEntryOmitResultOnSuccess(param0: boolean): void;
			public static executeBatchAndWait(param0: com.facebook.GraphRequestBatch): java.util.List<com.facebook.GraphResponse>;
			public constructor(param0: com.facebook.AccessToken, param1: string, param2: globalAndroid.os.Bundle, param3: com.facebook.HttpMethod);
			public static newCustomAudienceThirdPartyIdRequest(param0: com.facebook.AccessToken, param1: globalAndroid.content.Context, param2: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
			public executeAsync(): com.facebook.GraphRequestAsyncTask;
			public static executeBatchAsync(param0: java.util.Collection<com.facebook.GraphRequest>): com.facebook.GraphRequestAsyncTask;
			public setAccessToken(param0: com.facebook.AccessToken): void;
			public setHttpMethod(param0: com.facebook.HttpMethod): void;
			public static newCustomAudienceThirdPartyIdRequest(param0: com.facebook.AccessToken, param1: globalAndroid.content.Context, param2: string, param3: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
			public toString(): string;
			public constructor(param0: com.facebook.AccessToken, param1: string, param2: globalAndroid.os.Bundle, param3: com.facebook.HttpMethod, param4: com.facebook.GraphRequest.Callback);
			public setGraphObject(param0: org.json.JSONObject): void;
			public getHttpMethod(): com.facebook.HttpMethod;
			public getAccessToken(): com.facebook.AccessToken;
			public static newUploadPhotoRequest(param0: com.facebook.AccessToken, param1: string, param2: java.io.File, param3: string, param4: globalAndroid.os.Bundle, param5: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
			public getVersion(): string;
			public getBatchEntryName(): string;
			public getGraphPath(): string;
			public setBatchEntryDependsOn(param0: string): void;
			public static newPlacesSearchRequest(param0: com.facebook.AccessToken, param1: globalAndroid.location.Location, param2: number, param3: number, param4: string, param5: com.facebook.GraphRequest.GraphJSONArrayCallback): com.facebook.GraphRequest;
		}
		export module GraphRequest {
			export class Attachment {
				public static class: java.lang.Class<com.facebook.GraphRequest.Attachment>;
				public constructor(param0: com.facebook.GraphRequest, param1: any);
				public getRequest(): com.facebook.GraphRequest;
				public getValue(): any;
			}
			export class Callback {
				public static class: java.lang.Class<com.facebook.GraphRequest.Callback>;
				/**
				 * Constructs a new instance of the com.facebook.GraphRequest$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onCompleted(param0: com.facebook.GraphResponse): void;
				});
				public constructor();
				public onCompleted(param0: com.facebook.GraphResponse): void;
			}
			export class GraphJSONArrayCallback {
				public static class: java.lang.Class<com.facebook.GraphRequest.GraphJSONArrayCallback>;
				/**
				 * Constructs a new instance of the com.facebook.GraphRequest$GraphJSONArrayCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onCompleted(param0: org.json.JSONArray, param1: com.facebook.GraphResponse): void;
				});
				public constructor();
				public onCompleted(param0: org.json.JSONArray, param1: com.facebook.GraphResponse): void;
			}
			export class GraphJSONObjectCallback {
				public static class: java.lang.Class<com.facebook.GraphRequest.GraphJSONObjectCallback>;
				/**
				 * Constructs a new instance of the com.facebook.GraphRequest$GraphJSONObjectCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onCompleted(param0: org.json.JSONObject, param1: com.facebook.GraphResponse): void;
				});
				public constructor();
				public onCompleted(param0: org.json.JSONObject, param1: com.facebook.GraphResponse): void;
			}
			export class KeyValueSerializer {
				public static class: java.lang.Class<com.facebook.GraphRequest.KeyValueSerializer>;
				/**
				 * Constructs a new instance of the com.facebook.GraphRequest$KeyValueSerializer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					writeString(param0: string, param1: string): void;
				});
				public constructor();
				public writeString(param0: string, param1: string): void;
			}
			export class OnProgressCallback extends com.facebook.GraphRequest.Callback {
				public static class: java.lang.Class<com.facebook.GraphRequest.OnProgressCallback>;
				/**
				 * Constructs a new instance of the com.facebook.GraphRequest$OnProgressCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onProgress(param0: number, param1: number): void;
					onCompleted(param0: com.facebook.GraphResponse): void;
				});
				public constructor();
				public onCompleted(param0: com.facebook.GraphResponse): void;
				public onProgress(param0: number, param1: number): void;
			}
			export class ParcelableResourceWithMimeType<RESOURCE>  extends globalAndroid.os.Parcelable {
				public static class: java.lang.Class<com.facebook.GraphRequest.ParcelableResourceWithMimeType<any>>;
				public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.GraphRequest.ParcelableResourceWithMimeType<any>>;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public constructor(param0: any, param1: string);
				public getResource(): any;
				public getMimeType(): string;
				public describeContents(): number;
			}
			export class Serializer extends com.facebook.GraphRequest.KeyValueSerializer {
				public static class: java.lang.Class<com.facebook.GraphRequest.Serializer>;
				public writeString(param0: string, param1: string): void;
				public writeBytes(param0: string, param1: native.Array<number>): void;
				public writeLine(param0: string, param1: native.Array<any>): void;
				public writeFile(param0: string, param1: globalAndroid.os.ParcelFileDescriptor, param2: string): void;
				public write(param0: string, param1: native.Array<any>): void;
				public writeBitmap(param0: string, param1: globalAndroid.graphics.Bitmap): void;
				public writeContentDisposition(param0: string, param1: string, param2: string): void;
				public writeRecordBoundary(): void;
				public constructor(param0: java.io.OutputStream, param1: com.facebook.internal.Logger, param2: boolean);
				public writeRequestsAsJson(param0: string, param1: org.json.JSONArray, param2: java.util.Collection<com.facebook.GraphRequest>): void;
				public writeContentUri(param0: string, param1: globalAndroid.net.Uri, param2: string): void;
				public writeObject(param0: string, param1: any, param2: com.facebook.GraphRequest): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export class GraphRequestAsyncTask extends globalAndroid.os.AsyncTask<java.lang.Void,java.lang.Void,java.util.List<com.facebook.GraphResponse>> {
			public static class: java.lang.Class<com.facebook.GraphRequestAsyncTask>;
			public constructor(param0: java.net.HttpURLConnection, param1: native.Array<com.facebook.GraphRequest>);
			public constructor(param0: java.net.HttpURLConnection, param1: java.util.Collection<com.facebook.GraphRequest>);
			public constructor(param0: native.Array<com.facebook.GraphRequest>);
			public toString(): string;
			public onPostExecute(param0: java.util.List<com.facebook.GraphResponse>): void;
			public getException(): java.lang.Exception;
			public doInBackground(param0: native.Array<java.lang.Void>): java.util.List<com.facebook.GraphResponse>;
			public constructor(param0: java.net.HttpURLConnection, param1: com.facebook.GraphRequestBatch);
			public getRequests(): com.facebook.GraphRequestBatch;
			public onPreExecute(): void;
			public constructor(param0: java.util.Collection<com.facebook.GraphRequest>);
			public constructor(param0: com.facebook.GraphRequestBatch);
		}
	}
}

declare module com {
	export module facebook {
		export class GraphRequestBatch extends java.util.AbstractList<com.facebook.GraphRequest> {
			public static class: java.lang.Class<com.facebook.GraphRequestBatch>;
			public clear(): void;
			public setTimeout(param0: number): void;
			public constructor(param0: native.Array<com.facebook.GraphRequest>);
			public get(param0: number): com.facebook.GraphRequest;
			public size(): number;
			public add(param0: number, param1: com.facebook.GraphRequest): void;
			public add(param0: com.facebook.GraphRequest): boolean;
			public removeCallback(param0: com.facebook.GraphRequestBatch.Callback): void;
			public constructor();
			public executeAsync(): com.facebook.GraphRequestAsyncTask;
			public constructor(param0: java.util.Collection<com.facebook.GraphRequest>);
			public setBatchApplicationId(param0: string): void;
			public addCallback(param0: com.facebook.GraphRequestBatch.Callback): void;
			public remove(param0: number): com.facebook.GraphRequest;
			public set(param0: number, param1: com.facebook.GraphRequest): com.facebook.GraphRequest;
			public getTimeout(): number;
			public constructor(param0: com.facebook.GraphRequestBatch);
			public executeAndWait(): java.util.List<com.facebook.GraphResponse>;
			public getBatchApplicationId(): string;
		}
		export module GraphRequestBatch {
			export class Callback {
				public static class: java.lang.Class<com.facebook.GraphRequestBatch.Callback>;
				/**
				 * Constructs a new instance of the com.facebook.GraphRequestBatch$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onBatchCompleted(param0: com.facebook.GraphRequestBatch): void;
				});
				public constructor();
				public onBatchCompleted(param0: com.facebook.GraphRequestBatch): void;
			}
			export class OnProgressCallback extends com.facebook.GraphRequestBatch.Callback {
				public static class: java.lang.Class<com.facebook.GraphRequestBatch.OnProgressCallback>;
				/**
				 * Constructs a new instance of the com.facebook.GraphRequestBatch$OnProgressCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onBatchProgress(param0: com.facebook.GraphRequestBatch, param1: number, param2: number): void;
					onBatchCompleted(param0: com.facebook.GraphRequestBatch): void;
				});
				public constructor();
				public onBatchProgress(param0: com.facebook.GraphRequestBatch, param1: number, param2: number): void;
				public onBatchCompleted(param0: com.facebook.GraphRequestBatch): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export class GraphResponse {
			public static class: java.lang.Class<com.facebook.GraphResponse>;
			public static NON_JSON_RESPONSE_PROPERTY: string;
			public static SUCCESS_KEY: string;
			public getRequestForPagedResults(param0: com.facebook.GraphResponse.PagingDirection): com.facebook.GraphRequest;
			public getJSONArray(): org.json.JSONArray;
			public getRequest(): com.facebook.GraphRequest;
			public toString(): string;
			public getConnection(): java.net.HttpURLConnection;
			public getRawResponse(): string;
			public getJSONObject(): org.json.JSONObject;
			public getError(): com.facebook.FacebookRequestError;
		}
		export module GraphResponse {
			export class PagingDirection {
				public static class: java.lang.Class<com.facebook.GraphResponse.PagingDirection>;
				public static NEXT: com.facebook.GraphResponse.PagingDirection;
				public static PREVIOUS: com.facebook.GraphResponse.PagingDirection;
				public static values(): native.Array<com.facebook.GraphResponse.PagingDirection>;
				public static valueOf(param0: string): com.facebook.GraphResponse.PagingDirection;
			}
		}
	}
}

declare module com {
	export module facebook {
		export class HttpMethod {
			public static class: java.lang.Class<com.facebook.HttpMethod>;
			public static GET: com.facebook.HttpMethod;
			public static POST: com.facebook.HttpMethod;
			public static DELETE: com.facebook.HttpMethod;
			public static valueOf(param0: string): com.facebook.HttpMethod;
			public static values(): native.Array<com.facebook.HttpMethod>;
		}
	}
}

declare module com {
	export module facebook {
		export class LegacyTokenHelper {
			public static class: java.lang.Class<com.facebook.LegacyTokenHelper>;
			public static TOKEN_KEY: string;
			public static EXPIRATION_DATE_KEY: string;
			public static LAST_REFRESH_DATE_KEY: string;
			public static TOKEN_SOURCE_KEY: string;
			public static PERMISSIONS_KEY: string;
			public static DECLINED_PERMISSIONS_KEY: string;
			public static APPLICATION_ID_KEY: string;
			public static DEFAULT_CACHE_KEY: string;
			public clear(): void;
			public static putLastRefreshDate(param0: globalAndroid.os.Bundle, param1: java.util.Date): void;
			public static putSource(param0: globalAndroid.os.Bundle, param1: com.facebook.AccessTokenSource): void;
			public static putApplicationId(param0: globalAndroid.os.Bundle, param1: string): void;
			public constructor(param0: globalAndroid.content.Context, param1: string);
			public static putPermissions(param0: globalAndroid.os.Bundle, param1: java.util.Collection<string>): void;
			public static getLastRefreshDate(param0: globalAndroid.os.Bundle): java.util.Date;
			public load(): globalAndroid.os.Bundle;
			public static getToken(param0: globalAndroid.os.Bundle): string;
			public static putExpirationDate(param0: globalAndroid.os.Bundle, param1: java.util.Date): void;
			public static getExpirationDate(param0: globalAndroid.os.Bundle): java.util.Date;
			public static putExpirationMilliseconds(param0: globalAndroid.os.Bundle, param1: number): void;
			public save(param0: globalAndroid.os.Bundle): void;
			public static getApplicationId(param0: globalAndroid.os.Bundle): string;
			public static hasTokenInformation(param0: globalAndroid.os.Bundle): boolean;
			public static getSource(param0: globalAndroid.os.Bundle): com.facebook.AccessTokenSource;
			public static putToken(param0: globalAndroid.os.Bundle, param1: string): void;
			public static getPermissions(param0: globalAndroid.os.Bundle): java.util.Set<string>;
			public static getExpirationMilliseconds(param0: globalAndroid.os.Bundle): number;
			public static putLastRefreshMilliseconds(param0: globalAndroid.os.Bundle, param1: number): void;
			public constructor(param0: globalAndroid.content.Context);
			public static getLastRefreshMilliseconds(param0: globalAndroid.os.Bundle): number;
			public static putDeclinedPermissions(param0: globalAndroid.os.Bundle, param1: java.util.Collection<string>): void;
		}
	}
}

declare module com {
	export module facebook {
		export class LoggingBehavior {
			public static class: java.lang.Class<com.facebook.LoggingBehavior>;
			public static REQUESTS: com.facebook.LoggingBehavior;
			public static INCLUDE_ACCESS_TOKENS: com.facebook.LoggingBehavior;
			public static INCLUDE_RAW_RESPONSES: com.facebook.LoggingBehavior;
			public static CACHE: com.facebook.LoggingBehavior;
			public static APP_EVENTS: com.facebook.LoggingBehavior;
			public static DEVELOPER_ERRORS: com.facebook.LoggingBehavior;
			public static GRAPH_API_DEBUG_WARNING: com.facebook.LoggingBehavior;
			public static GRAPH_API_DEBUG_INFO: com.facebook.LoggingBehavior;
			public static values(): native.Array<com.facebook.LoggingBehavior>;
			public static valueOf(param0: string): com.facebook.LoggingBehavior;
		}
	}
}

declare module com {
	export module facebook {
		export class LoginStatusCallback {
			public static class: java.lang.Class<com.facebook.LoginStatusCallback>;
			/**
			 * Constructs a new instance of the com.facebook.LoginStatusCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				onCompleted(param0: com.facebook.AccessToken): void;
				onFailure(): void;
				onError(param0: java.lang.Exception): void;
			});
			public constructor();
			public onCompleted(param0: com.facebook.AccessToken): void;
			public onFailure(): void;
			public onError(param0: java.lang.Exception): void;
		}
	}
}

declare module com {
	export module facebook {
		export class Profile {
			public static class: java.lang.Class<com.facebook.Profile>;
			public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.Profile>;
			public static fetchProfileForCurrentAccessToken(): void;
			public equals(param0: any): boolean;
			public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: globalAndroid.net.Uri);
			public getProfilePictureUri(param0: number, param1: number): globalAndroid.net.Uri;
			public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
			public getId(): string;
			public getMiddleName(): string;
			public getName(): string;
			public getFirstName(): string;
			public describeContents(): number;
			public getLastName(): string;
			public static getCurrentProfile(): com.facebook.Profile;
			public static setCurrentProfile(param0: com.facebook.Profile): void;
			public getLinkUri(): globalAndroid.net.Uri;
			public hashCode(): number;
		}
	}
}

declare module com {
	export module facebook {
		export class ProfileCache {
			public static class: java.lang.Class<com.facebook.ProfileCache>;
		}
	}
}

declare module com {
	export module facebook {
		export class ProfileManager {
			public static class: java.lang.Class<com.facebook.ProfileManager>;
			public static ACTION_CURRENT_PROFILE_CHANGED: string;
			public static EXTRA_OLD_PROFILE: string;
			public static EXTRA_NEW_PROFILE: string;
		}
	}
}

declare module com {
	export module facebook {
		export abstract class ProfileTracker {
			public static class: java.lang.Class<com.facebook.ProfileTracker>;
			public startTracking(): void;
			public stopTracking(): void;
			public constructor();
			public isTracking(): boolean;
			public onCurrentProfileChanged(param0: com.facebook.Profile, param1: com.facebook.Profile): void;
		}
		export module ProfileTracker {
			export class ProfileBroadcastReceiver {
				public static class: java.lang.Class<com.facebook.ProfileTracker.ProfileBroadcastReceiver>;
				public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export class ProgressNoopOutputStream implements com.facebook.RequestOutputStream {
			public static class: java.lang.Class<com.facebook.ProgressNoopOutputStream>;
			public setCurrentRequest(param0: com.facebook.GraphRequest): void;
			public write(param0: number): void;
			public write(param0: native.Array<number>, param1: number, param2: number): void;
			public write(param0: native.Array<number>): void;
		}
	}
}

declare module com {
	export module facebook {
		export class ProgressOutputStream implements com.facebook.RequestOutputStream {
			public static class: java.lang.Class<com.facebook.ProgressOutputStream>;
			public setCurrentRequest(param0: com.facebook.GraphRequest): void;
			public write(param0: number): void;
			public write(param0: native.Array<number>, param1: number, param2: number): void;
			public write(param0: native.Array<number>): void;
			public close(): void;
		}
	}
}

declare module com {
	export module facebook {
		export class RequestOutputStream {
			public static class: java.lang.Class<com.facebook.RequestOutputStream>;
			/**
			 * Constructs a new instance of the com.facebook.RequestOutputStream interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				setCurrentRequest(param0: com.facebook.GraphRequest): void;
			});
			public constructor();
			public setCurrentRequest(param0: com.facebook.GraphRequest): void;
		}
	}
}

declare module com {
	export module facebook {
		export class RequestProgress {
			public static class: java.lang.Class<com.facebook.RequestProgress>;
		}
	}
}

declare module com {
	export module facebook {
		export class ShareGraphRequest {
			public static class: java.lang.Class<com.facebook.ShareGraphRequest>;
			public static createOpenGraphObject(param0: com.facebook.share.model.ShareOpenGraphObject): com.facebook.GraphRequest;
			public constructor();
		}
	}
}

declare module com {
	export module facebook {
		export class WebDialog {
			public static class: java.lang.Class<com.facebook.WebDialog>;
			public static setWebDialogTheme(param0: number): void;
			public static getWebDialogTheme(): number;
		}
	}
}

declare module com {
	export module facebook {
		export module all {
			export class All {
				public static class: java.lang.Class<com.facebook.all.All>;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export class AccessTokenAppIdPair {
				public static class: java.lang.Class<com.facebook.appevents.AccessTokenAppIdPair>;
				public constructor(param0: com.facebook.AccessToken);
				public getAccessTokenString(): string;
				public hashCode(): number;
				public getApplicationId(): string;
				public equals(param0: any): boolean;
				public constructor(param0: string, param1: string);
			}
			export module AccessTokenAppIdPair {
				export class SerializationProxyV1 {
					public static class: java.lang.Class<com.facebook.appevents.AccessTokenAppIdPair.SerializationProxyV1>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export class AnalyticsUserIDStore {
				public static class: java.lang.Class<com.facebook.appevents.AnalyticsUserIDStore>;
				public static setUserID(param0: string): void;
				public static initStore(): void;
				public static getUserID(): string;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export class AppEvent {
				public static class: java.lang.Class<com.facebook.appevents.AppEvent>;
				public getJSONObject(): org.json.JSONObject;
				public getIsImplicit(): boolean;
				public getName(): string;
				public constructor(param0: string, param1: string, param2: java.lang.Double, param3: globalAndroid.os.Bundle, param4: boolean, param5: java.util.UUID);
				public isChecksumValid(): boolean;
				public toString(): string;
			}
			export module AppEvent {
				export class SerializationProxyV1 {
					public static class: java.lang.Class<com.facebook.appevents.AppEvent.SerializationProxyV1>;
				}
				export class SerializationProxyV2 {
					public static class: java.lang.Class<com.facebook.appevents.AppEvent.SerializationProxyV2>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export class AppEventCollection {
				public static class: java.lang.Class<com.facebook.appevents.AppEventCollection>;
				public addEvent(param0: com.facebook.appevents.AccessTokenAppIdPair, param1: com.facebook.appevents.AppEvent): void;
				public addPersistedEvents(param0: com.facebook.appevents.PersistedEvents): void;
				public get(param0: com.facebook.appevents.AccessTokenAppIdPair): com.facebook.appevents.SessionEventsState;
				public keySet(): java.util.Set<com.facebook.appevents.AccessTokenAppIdPair>;
				public getEventCount(): number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export class AppEventQueue {
				public static class: java.lang.Class<com.facebook.appevents.AppEventQueue>;
				public static flush(param0: com.facebook.appevents.FlushReason): void;
				public static add(param0: com.facebook.appevents.AccessTokenAppIdPair, param1: com.facebook.appevents.AppEvent): void;
				public static persistToDisk(): void;
				public static getKeySet(): java.util.Set<com.facebook.appevents.AccessTokenAppIdPair>;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export class AppEventStore {
				public static class: java.lang.Class<com.facebook.appevents.AppEventStore>;
				public static persistEvents(param0: com.facebook.appevents.AppEventCollection): void;
				public static readAndClearStore(): com.facebook.appevents.PersistedEvents;
				public static persistEvents(param0: com.facebook.appevents.AccessTokenAppIdPair, param1: com.facebook.appevents.SessionEventsState): void;
			}
			export module AppEventStore {
				export class MovedClassObjectInputStream {
					public static class: java.lang.Class<com.facebook.appevents.AppEventStore.MovedClassObjectInputStream>;
					public constructor(param0: java.io.InputStream);
					public readClassDescriptor(): java.io.ObjectStreamClass;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export class AppEventsConstants {
				public static class: java.lang.Class<com.facebook.appevents.AppEventsConstants>;
				public static EVENT_NAME_ACTIVATED_APP: string;
				public static EVENT_NAME_DEACTIVATED_APP: string;
				public static EVENT_NAME_SESSION_INTERRUPTIONS: string;
				public static EVENT_NAME_TIME_BETWEEN_SESSIONS: string;
				public static EVENT_NAME_COMPLETED_REGISTRATION: string;
				public static EVENT_NAME_VIEWED_CONTENT: string;
				public static EVENT_NAME_SEARCHED: string;
				public static EVENT_NAME_RATED: string;
				public static EVENT_NAME_COMPLETED_TUTORIAL: string;
				public static EVENT_NAME_PUSH_TOKEN_OBTAINED: string;
				public static EVENT_NAME_ADDED_TO_CART: string;
				public static EVENT_NAME_ADDED_TO_WISHLIST: string;
				public static EVENT_NAME_INITIATED_CHECKOUT: string;
				public static EVENT_NAME_ADDED_PAYMENT_INFO: string;
				public static EVENT_NAME_PURCHASED: string;
				public static EVENT_NAME_ACHIEVED_LEVEL: string;
				public static EVENT_NAME_UNLOCKED_ACHIEVEMENT: string;
				public static EVENT_NAME_SPENT_CREDITS: string;
				public static EVENT_NAME_CONTACT: string;
				public static EVENT_NAME_CUSTOMIZE_PRODUCT: string;
				public static EVENT_NAME_NONATE: string;
				public static EVENT_NAME_FIND_LOCATION: string;
				public static EVENT_NAME_SCHEDULE: string;
				public static EVENT_NAME_START_TRIAL: string;
				public static EVENT_NAME_SUBMIT_APPLICATION: string;
				public static EVENT_NAME_SUBSCRIBE: string;
				public static EVENT_NAME_AD_IMPRESSION: string;
				public static EVENT_NAME_AD_CLICK: string;
				public static EVENT_NAME_LIVE_STREAMING_START: string;
				public static EVENT_NAME_LIVE_STREAMING_STOP: string;
				public static EVENT_NAME_LIVE_STREAMING_PAUSE: string;
				public static EVENT_NAME_LIVE_STREAMING_RESUME: string;
				public static EVENT_NAME_LIVE_STREAMING_ERROR: string;
				public static EVENT_NAME_LIVE_STREAMING_UPDATE_STATUS: string;
				public static EVENT_NAME_PRODUCT_CATALOG_UPDATE: string;
				public static EVENT_PARAM_LIVE_STREAMING_PREV_STATUS: string;
				public static EVENT_PARAM_LIVE_STREAMING_STATUS: string;
				public static EVENT_PARAM_LIVE_STREAMING_ERROR: string;
				public static EVENT_PARAM_CURRENCY: string;
				public static EVENT_PARAM_REGISTRATION_METHOD: string;
				public static EVENT_PARAM_CONTENT_TYPE: string;
				public static EVENT_PARAM_CONTENT: string;
				public static EVENT_PARAM_CONTENT_ID: string;
				public static EVENT_PARAM_SEARCH_STRING: string;
				public static EVENT_PARAM_SUCCESS: string;
				public static EVENT_PARAM_MAX_RATING_VALUE: string;
				public static EVENT_PARAM_PAYMENT_INFO_AVAILABLE: string;
				public static EVENT_PARAM_NUM_ITEMS: string;
				public static EVENT_PARAM_LEVEL: string;
				public static EVENT_PARAM_DESCRIPTION: string;
				public static EVENT_PARAM_SOURCE_APPLICATION: string;
				public static EVENT_PARAM_VALUE_YES: string;
				public static EVENT_PARAM_VALUE_NO: string;
				public static EVENT_PARAM_AD_TYPE: string;
				public static EVENT_PARAM_ORDER_ID: string;
				public static EVENT_PARAM_VALUE_TO_SUM: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export class AppEventsLogger {
				public static class: java.lang.Class<com.facebook.appevents.AppEventsLogger>;
				public static APP_EVENT_PREFERENCES: string;
				public static ACTION_APP_EVENTS_FLUSHED: string;
				public static APP_EVENTS_EXTRA_NUM_EVENTS_FLUSHED: string;
				public static APP_EVENTS_EXTRA_FLUSH_RESULT: string;
				public logPurchase(param0: java.math.BigDecimal, param1: java.util.Currency): void;
				public logPurchaseImplicitly(param0: java.math.BigDecimal, param1: java.util.Currency, param2: globalAndroid.os.Bundle): void;
				public static updateUserProperties(param0: globalAndroid.os.Bundle, param1: string, param2: com.facebook.GraphRequest.Callback): void;
				public static initializeLib(param0: globalAndroid.content.Context, param1: string): void;
				public isValidForAccessToken(param0: com.facebook.AccessToken): boolean;
				public static setUserData(param0: globalAndroid.os.Bundle): void;
				public logEvent(param0: string, param1: number): void;
				public static newLogger(param0: globalAndroid.content.Context): com.facebook.appevents.AppEventsLogger;
				public static setFlushBehavior(param0: com.facebook.appevents.AppEventsLogger.FlushBehavior): void;
				public flush(): void;
				public logSdkEvent(param0: string, param1: java.lang.Double, param2: globalAndroid.os.Bundle): void;
				public static setUserID(param0: string): void;
				public static getFlushBehavior(): com.facebook.appevents.AppEventsLogger.FlushBehavior;
				public logProductItem(param0: string, param1: com.facebook.appevents.AppEventsLogger.ProductAvailability, param2: com.facebook.appevents.AppEventsLogger.ProductCondition, param3: string, param4: string, param5: string, param6: string, param7: java.math.BigDecimal, param8: java.util.Currency, param9: string, param10: string, param11: string, param12: globalAndroid.os.Bundle): void;
				public logPurchase(param0: java.math.BigDecimal, param1: java.util.Currency, param2: globalAndroid.os.Bundle): void;
				public getApplicationId(): string;
				public static activateApp(param0: globalAndroid.app.Application): void;
				public static newLogger(param0: globalAndroid.content.Context, param1: com.facebook.AccessToken): com.facebook.appevents.AppEventsLogger;
				public static getUserID(): string;
				public static clearUserData(): void;
				public logEvent(param0: string): void;
				public logPurchaseImplicitlyInternal(param0: java.math.BigDecimal, param1: java.util.Currency, param2: globalAndroid.os.Bundle): void;
				public static setPushNotificationsRegistrationId(param0: string): void;
				public logEventImplicitly(param0: string, param1: java.math.BigDecimal, param2: java.util.Currency, param3: globalAndroid.os.Bundle): void;
				public constructor(param0: string, param1: string, param2: com.facebook.AccessToken);
				public logPushNotificationOpen(param0: globalAndroid.os.Bundle): void;
				public static augmentWebView(param0: globalAndroid.webkit.WebView, param1: globalAndroid.content.Context): void;
				public static activateApp(param0: globalAndroid.content.Context, param1: string): void;
				public logPushNotificationOpen(param0: globalAndroid.os.Bundle, param1: string): void;
				public static deactivateApp(param0: globalAndroid.content.Context): void;
				public static getAnonymousAppDeviceGUID(param0: globalAndroid.content.Context): string;
				public logEvent(param0: string, param1: number, param2: globalAndroid.os.Bundle): void;
				public static updateUserProperties(param0: globalAndroid.os.Bundle, param1: com.facebook.GraphRequest.Callback): void;
				public static newLogger(param0: globalAndroid.content.Context, param1: string, param2: com.facebook.AccessToken): com.facebook.appevents.AppEventsLogger;
				public static activateApp(param0: globalAndroid.app.Application, param1: string): void;
				public static getUserData(): string;
				public static clearUserID(): void;
				public static onContextStop(): void;
				public static activateApp(param0: globalAndroid.content.Context): void;
				public static deactivateApp(param0: globalAndroid.content.Context, param1: string): void;
				public static newLogger(param0: globalAndroid.content.Context, param1: string): com.facebook.appevents.AppEventsLogger;
				public logEvent(param0: string, param1: globalAndroid.os.Bundle): void;
			}
			export module AppEventsLogger {
				export class FlushBehavior {
					public static class: java.lang.Class<com.facebook.appevents.AppEventsLogger.FlushBehavior>;
					public static AUTO: com.facebook.appevents.AppEventsLogger.FlushBehavior;
					public static EXPLICIT_ONLY: com.facebook.appevents.AppEventsLogger.FlushBehavior;
					public static values(): native.Array<com.facebook.appevents.AppEventsLogger.FlushBehavior>;
					public static valueOf(param0: string): com.facebook.appevents.AppEventsLogger.FlushBehavior;
				}
				export class PersistedAppSessionInfo {
					public static class: java.lang.Class<com.facebook.appevents.AppEventsLogger.PersistedAppSessionInfo>;
				}
				export class ProductAvailability {
					public static class: java.lang.Class<com.facebook.appevents.AppEventsLogger.ProductAvailability>;
					public static IN_STOCK: com.facebook.appevents.AppEventsLogger.ProductAvailability;
					public static OUT_OF_STOCK: com.facebook.appevents.AppEventsLogger.ProductAvailability;
					public static PREORDER: com.facebook.appevents.AppEventsLogger.ProductAvailability;
					public static AVALIABLE_FOR_ORDER: com.facebook.appevents.AppEventsLogger.ProductAvailability;
					public static DISCONTINUED: com.facebook.appevents.AppEventsLogger.ProductAvailability;
					public static valueOf(param0: string): com.facebook.appevents.AppEventsLogger.ProductAvailability;
					public static values(): native.Array<com.facebook.appevents.AppEventsLogger.ProductAvailability>;
				}
				export class ProductCondition {
					public static class: java.lang.Class<com.facebook.appevents.AppEventsLogger.ProductCondition>;
					public static NEW: com.facebook.appevents.AppEventsLogger.ProductCondition;
					public static REFURBISHED: com.facebook.appevents.AppEventsLogger.ProductCondition;
					public static USED: com.facebook.appevents.AppEventsLogger.ProductCondition;
					public static valueOf(param0: string): com.facebook.appevents.AppEventsLogger.ProductCondition;
					public static values(): native.Array<com.facebook.appevents.AppEventsLogger.ProductCondition>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export class FacebookSDKJSInterface {
				public static class: java.lang.Class<com.facebook.appevents.FacebookSDKJSInterface>;
				public static TAG: string;
				public sendEvent(param0: string, param1: string, param2: string): void;
				public constructor(param0: globalAndroid.content.Context);
				public getProtocol(): string;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export class FacebookTimeSpentData {
				public static class: java.lang.Class<com.facebook.appevents.FacebookTimeSpentData>;
			}
			export module FacebookTimeSpentData {
				export class SerializationProxyV1 {
					public static class: java.lang.Class<com.facebook.appevents.FacebookTimeSpentData.SerializationProxyV1>;
				}
				export class SerializationProxyV2 {
					public static class: java.lang.Class<com.facebook.appevents.FacebookTimeSpentData.SerializationProxyV2>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export class FlushReason {
				public static class: java.lang.Class<com.facebook.appevents.FlushReason>;
				public static EXPLICIT: com.facebook.appevents.FlushReason;
				public static TIMER: com.facebook.appevents.FlushReason;
				public static SESSION_CHANGE: com.facebook.appevents.FlushReason;
				public static PERSISTED_EVENTS: com.facebook.appevents.FlushReason;
				public static EVENT_THRESHOLD: com.facebook.appevents.FlushReason;
				public static EAGER_FLUSHING_EVENT: com.facebook.appevents.FlushReason;
				public static values(): native.Array<com.facebook.appevents.FlushReason>;
				public static valueOf(param0: string): com.facebook.appevents.FlushReason;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export class FlushResult {
				public static class: java.lang.Class<com.facebook.appevents.FlushResult>;
				public static SUCCESS: com.facebook.appevents.FlushResult;
				public static SERVER_ERROR: com.facebook.appevents.FlushResult;
				public static NO_CONNECTIVITY: com.facebook.appevents.FlushResult;
				public static UNKNOWN_ERROR: com.facebook.appevents.FlushResult;
				public static values(): native.Array<com.facebook.appevents.FlushResult>;
				public static valueOf(param0: string): com.facebook.appevents.FlushResult;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export class FlushStatistics {
				public static class: java.lang.Class<com.facebook.appevents.FlushStatistics>;
				public numEvents: number;
				public result: com.facebook.appevents.FlushResult;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export class PersistedEvents {
				public static class: java.lang.Class<com.facebook.appevents.PersistedEvents>;
				public keySet(): java.util.Set<com.facebook.appevents.AccessTokenAppIdPair>;
				public containsKey(param0: com.facebook.appevents.AccessTokenAppIdPair): boolean;
				public get(param0: com.facebook.appevents.AccessTokenAppIdPair): java.util.List<com.facebook.appevents.AppEvent>;
				public constructor(param0: java.util.HashMap<com.facebook.appevents.AccessTokenAppIdPair,java.util.List<com.facebook.appevents.AppEvent>>);
				public addEvents(param0: com.facebook.appevents.AccessTokenAppIdPair, param1: java.util.List<com.facebook.appevents.AppEvent>): void;
				public constructor();
			}
			export module PersistedEvents {
				export class SerializationProxyV1 {
					public static class: java.lang.Class<com.facebook.appevents.PersistedEvents.SerializationProxyV1>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export class SessionEventsState {
				public static class: java.lang.Class<com.facebook.appevents.SessionEventsState>;
				public constructor(param0: com.facebook.internal.AttributionIdentifiers, param1: string);
				public clearInFlightAndStats(param0: boolean): void;
				public addEvent(param0: com.facebook.appevents.AppEvent): void;
				public populateRequest(param0: com.facebook.GraphRequest, param1: globalAndroid.content.Context, param2: boolean, param3: boolean): number;
				public accumulatePersistedEvents(param0: java.util.List<com.facebook.appevents.AppEvent>): void;
				public getAccumulatedEventCount(): number;
				public getEventsToPersist(): java.util.List<com.facebook.appevents.AppEvent>;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export class UserDataStore {
				public static class: java.lang.Class<com.facebook.appevents.UserDataStore>;
				public static EMAIL: string;
				public static FIRST_NAME: string;
				public static LAST_NAME: string;
				public static PHONE: string;
				public static DATE_OF_BIRTH: string;
				public static GENDER: string;
				public static CITY: string;
				public static STATE: string;
				public static ZIP: string;
				public static COUNTRY: string;
				public static getHashedUserData(): string;
				public static initStore(): void;
				public static setUserDataAndHash(param0: globalAndroid.os.Bundle): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module codeless {
				export class CodelessLoggingEventListener {
					public static class: java.lang.Class<com.facebook.appevents.codeless.CodelessLoggingEventListener>;
					public constructor();
					public static getAccessibilityDelegate(param0: com.facebook.appevents.codeless.internal.EventBinding, param1: globalAndroid.view.View, param2: globalAndroid.view.View): com.facebook.appevents.codeless.CodelessLoggingEventListener.AutoLoggingAccessibilityDelegate;
				}
				export module CodelessLoggingEventListener {
					export class AutoLoggingAccessibilityDelegate {
						public static class: java.lang.Class<com.facebook.appevents.codeless.CodelessLoggingEventListener.AutoLoggingAccessibilityDelegate>;
						public supportButtonIndexing: boolean;
						public getSupportCodelessLogging(): boolean;
						public constructor();
						public getSupportButtonIndexing(): boolean;
						public sendAccessibilityEvent(param0: globalAndroid.view.View, param1: number): void;
						public constructor(param0: com.facebook.appevents.codeless.internal.EventBinding, param1: globalAndroid.view.View, param2: globalAndroid.view.View);
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module codeless {
				export class CodelessMatcher {
					public static class: java.lang.Class<com.facebook.appevents.codeless.CodelessMatcher>;
					public add(param0: globalAndroid.app.Activity): void;
					public remove(param0: globalAndroid.app.Activity): void;
					public constructor();
					public static getParameters(param0: com.facebook.appevents.codeless.internal.EventBinding, param1: globalAndroid.view.View, param2: globalAndroid.view.View): globalAndroid.os.Bundle;
				}
				export module CodelessMatcher {
					export class MatchedView {
						public static class: java.lang.Class<com.facebook.appevents.codeless.CodelessMatcher.MatchedView>;
						public constructor(param0: globalAndroid.view.View, param1: string);
						public getView(): globalAndroid.view.View;
						public getViewMapKey(): string;
					}
					export class ViewMatcher {
						public static class: java.lang.Class<com.facebook.appevents.codeless.CodelessMatcher.ViewMatcher>;
						public run(): void;
						public onScrollChanged(): void;
						public onGlobalLayout(): void;
						public static findViewByPath(param0: com.facebook.appevents.codeless.internal.EventBinding, param1: globalAndroid.view.View, param2: java.util.List<com.facebook.appevents.codeless.internal.PathComponent>, param3: number, param4: number, param5: string): java.util.List<com.facebook.appevents.codeless.CodelessMatcher.MatchedView>;
						public constructor(param0: globalAndroid.view.View, param1: globalAndroid.os.Handler, param2: java.util.HashMap<string,string>, param3: string);
						public findView(param0: com.facebook.appevents.codeless.internal.EventBinding, param1: globalAndroid.view.View): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module codeless {
				export module internal {
					export class Constants {
						public static class: java.lang.Class<com.facebook.appevents.codeless.internal.Constants>;
						public static MAX_TREE_DEPTH: number;
						public static IS_CODELESS_EVENT_KEY: string;
						public static EVENT_MAPPING_PATH_TYPE_KEY: string;
						public static PATH_TYPE_RELATIVE: string;
						public static PATH_TYPE_ABSOLUTE: string;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module codeless {
				export module internal {
					export class EventBinding {
						public static class: java.lang.Class<com.facebook.appevents.codeless.internal.EventBinding>;
						public getViewParameters(): java.util.List<com.facebook.appevents.codeless.internal.ParameterComponent>;
						public getAppVersion(): string;
						public getActivityName(): string;
						public static getInstanceFromJson(param0: org.json.JSONObject): com.facebook.appevents.codeless.internal.EventBinding;
						public getEventName(): string;
						public static parseArray(param0: org.json.JSONArray): java.util.List<com.facebook.appevents.codeless.internal.EventBinding>;
						public getMethod(): com.facebook.appevents.codeless.internal.EventBinding.MappingMethod;
						public getViewPath(): java.util.List<com.facebook.appevents.codeless.internal.PathComponent>;
						public getComponentId(): string;
						public constructor(param0: string, param1: com.facebook.appevents.codeless.internal.EventBinding.MappingMethod, param2: com.facebook.appevents.codeless.internal.EventBinding.ActionType, param3: string, param4: java.util.List<com.facebook.appevents.codeless.internal.PathComponent>, param5: java.util.List<com.facebook.appevents.codeless.internal.ParameterComponent>, param6: string, param7: string, param8: string);
						public getPathType(): string;
						public getType(): com.facebook.appevents.codeless.internal.EventBinding.ActionType;
					}
					export module EventBinding {
						export class ActionType {
							public static class: java.lang.Class<com.facebook.appevents.codeless.internal.EventBinding.ActionType>;
							public static CLICK: com.facebook.appevents.codeless.internal.EventBinding.ActionType;
							public static SELECTED: com.facebook.appevents.codeless.internal.EventBinding.ActionType;
							public static TEXT_CHANGED: com.facebook.appevents.codeless.internal.EventBinding.ActionType;
							public static valueOf(param0: string): com.facebook.appevents.codeless.internal.EventBinding.ActionType;
							public static values(): native.Array<com.facebook.appevents.codeless.internal.EventBinding.ActionType>;
						}
						export class MappingMethod {
							public static class: java.lang.Class<com.facebook.appevents.codeless.internal.EventBinding.MappingMethod>;
							public static MANUAL: com.facebook.appevents.codeless.internal.EventBinding.MappingMethod;
							public static INFERENCE: com.facebook.appevents.codeless.internal.EventBinding.MappingMethod;
							public static values(): native.Array<com.facebook.appevents.codeless.internal.EventBinding.MappingMethod>;
							public static valueOf(param0: string): com.facebook.appevents.codeless.internal.EventBinding.MappingMethod;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module codeless {
				export module internal {
					export class ParameterComponent {
						public static class: java.lang.Class<com.facebook.appevents.codeless.internal.ParameterComponent>;
						public name: string;
						public value: string;
						public path: java.util.List<com.facebook.appevents.codeless.internal.PathComponent>;
						public pathType: string;
						public constructor(param0: org.json.JSONObject);
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module codeless {
				export module internal {
					export class PathComponent {
						public static class: java.lang.Class<com.facebook.appevents.codeless.internal.PathComponent>;
						public className: string;
						public index: number;
						public id: number;
						public text: string;
						public tag: string;
						public description: string;
						public hint: string;
						public matchBitmask: number;
					}
					export module PathComponent {
						export class MatchBitmaskType {
							public static class: java.lang.Class<com.facebook.appevents.codeless.internal.PathComponent.MatchBitmaskType>;
							public static ID: com.facebook.appevents.codeless.internal.PathComponent.MatchBitmaskType;
							public static TEXT: com.facebook.appevents.codeless.internal.PathComponent.MatchBitmaskType;
							public static TAG: com.facebook.appevents.codeless.internal.PathComponent.MatchBitmaskType;
							public static DESCRIPTION: com.facebook.appevents.codeless.internal.PathComponent.MatchBitmaskType;
							public static HINT: com.facebook.appevents.codeless.internal.PathComponent.MatchBitmaskType;
							public static valueOf(param0: string): com.facebook.appevents.codeless.internal.PathComponent.MatchBitmaskType;
							public getValue(): number;
							public static values(): native.Array<com.facebook.appevents.codeless.internal.PathComponent.MatchBitmaskType>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module codeless {
				export module internal {
					export class SensitiveUserDataUtils {
						public static class: java.lang.Class<com.facebook.appevents.codeless.internal.SensitiveUserDataUtils>;
						public constructor();
						public static isSensitiveUserData(param0: globalAndroid.view.View): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module codeless {
				export module internal {
					export class ViewHierarchy {
						public static class: java.lang.Class<com.facebook.appevents.codeless.internal.ViewHierarchy>;
						public static isClickableView(param0: globalAndroid.view.View): boolean;
						public constructor();
						public static getDictionaryOfView(param0: globalAndroid.view.View): org.json.JSONObject;
						public static getHintOfView(param0: globalAndroid.view.View): string;
						public static getTextOfView(param0: globalAndroid.view.View): string;
						public static getChildrenOfView(param0: globalAndroid.view.View): java.util.List<globalAndroid.view.View>;
						public static getExistingDelegate(param0: globalAndroid.view.View): globalAndroid.view.View.AccessibilityDelegate;
						public static getParentOfView(param0: globalAndroid.view.View): globalAndroid.view.ViewGroup;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module internal {
				export class ActivityLifecycleTracker {
					public static class: java.lang.Class<com.facebook.appevents.internal.ActivityLifecycleTracker>;
					public static getCurrentSessionGuid(): java.util.UUID;
					public constructor();
					public static isTracking(): boolean;
					public static startTracking(param0: globalAndroid.app.Application, param1: string): void;
					public static onActivityCreated(param0: globalAndroid.app.Activity): void;
					public static onActivityResumed(param0: globalAndroid.app.Activity): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module internal {
				export class AppEventUtility {
					public static class: java.lang.Class<com.facebook.appevents.internal.AppEventUtility>;
					public static assertIsNotMainThread(): void;
					public constructor();
					public static assertIsMainThread(): void;
					public static normalizePrice(param0: string): number;
					public static bytesToHex(param0: native.Array<number>): string;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module internal {
				export class AppEventsLoggerUtility {
					public static class: java.lang.Class<com.facebook.appevents.internal.AppEventsLoggerUtility>;
					public constructor();
					public static getJSONObjectForGraphAPICall(param0: com.facebook.appevents.internal.AppEventsLoggerUtility.GraphAPIActivityType, param1: com.facebook.internal.AttributionIdentifiers, param2: string, param3: boolean, param4: globalAndroid.content.Context): org.json.JSONObject;
				}
				export module AppEventsLoggerUtility {
					export class GraphAPIActivityType {
						public static class: java.lang.Class<com.facebook.appevents.internal.AppEventsLoggerUtility.GraphAPIActivityType>;
						public static MOBILE_INSTALL_EVENT: com.facebook.appevents.internal.AppEventsLoggerUtility.GraphAPIActivityType;
						public static CUSTOM_APP_EVENTS: com.facebook.appevents.internal.AppEventsLoggerUtility.GraphAPIActivityType;
						public static valueOf(param0: string): com.facebook.appevents.internal.AppEventsLoggerUtility.GraphAPIActivityType;
						public static values(): native.Array<com.facebook.appevents.internal.AppEventsLoggerUtility.GraphAPIActivityType>;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module internal {
				export class AutomaticAnalyticsLogger {
					public static class: java.lang.Class<com.facebook.appevents.internal.AutomaticAnalyticsLogger>;
					public constructor();
					public static isImplicitPurchaseLoggingEnabled(): boolean;
					public static logActivateAppEvent(): void;
					public static logPurchaseInapp(param0: string, param1: string): void;
					public static logActivityTimeSpentEvent(param0: string, param1: number): void;
					public static logPurchaseSubs(param0: com.facebook.appevents.internal.SubscriptionType, param1: string, param2: string): void;
				}
				export module AutomaticAnalyticsLogger {
					export class PurchaseLoggingParameters {
						public static class: java.lang.Class<com.facebook.appevents.internal.AutomaticAnalyticsLogger.PurchaseLoggingParameters>;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module internal {
				export class Constants {
					public static class: java.lang.Class<com.facebook.appevents.internal.Constants>;
					public static LOG_TIME_APP_EVENT_KEY: string;
					public static EVENT_NAME_EVENT_KEY: string;
					public static EVENT_NAME_MD5_EVENT_KEY: string;
					public static AA_TIME_SPENT_EVENT_NAME: string;
					public static AA_TIME_SPENT_SCREEN_PARAMETER_NAME: string;
					public static IAP_PRODUCT_ID: string;
					public static IAP_PURCHASE_TIME: string;
					public static IAP_PURCHASE_TOKEN: string;
					public static IAP_PRODUCT_TYPE: string;
					public static IAP_PRODUCT_TITLE: string;
					public static IAP_PRODUCT_DESCRIPTION: string;
					public static IAP_PACKAGE_NAME: string;
					public static IAP_SUBSCRIPTION_AUTORENEWING: string;
					public static IAP_SUBSCRIPTION_PERIOD: string;
					public static IAP_FREE_TRIAL_PERIOD: string;
					public static IAP_INTRO_PRICE_AMOUNT_MICROS: string;
					public static IAP_INTRO_PRICE_CYCLES: string;
					public static EVENT_PARAM_PRODUCT_ITEM_ID: string;
					public static EVENT_PARAM_PRODUCT_AVAILABILITY: string;
					public static EVENT_PARAM_PRODUCT_CONDITION: string;
					public static EVENT_PARAM_PRODUCT_DESCRIPTION: string;
					public static EVENT_PARAM_PRODUCT_IMAGE_LINK: string;
					public static EVENT_PARAM_PRODUCT_LINK: string;
					public static EVENT_PARAM_PRODUCT_TITLE: string;
					public static EVENT_PARAM_PRODUCT_GTIN: string;
					public static EVENT_PARAM_PRODUCT_MPN: string;
					public static EVENT_PARAM_PRODUCT_BRAND: string;
					public static EVENT_PARAM_PRODUCT_PRICE_AMOUNT: string;
					public static EVENT_PARAM_PRODUCT_PRICE_CURRENCY: string;
					public static getDefaultAppEventsSessionTimeoutInSeconds(): number;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module internal {
				export class InAppPurchaseActivityLifecycleTracker {
					public static class: java.lang.Class<com.facebook.appevents.internal.InAppPurchaseActivityLifecycleTracker>;
					public constructor();
					public static update(): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module internal {
				export class InAppPurchaseEventManager {
					public static class: java.lang.Class<com.facebook.appevents.internal.InAppPurchaseEventManager>;
					public static asInterface(param0: globalAndroid.content.Context, param1: globalAndroid.os.IBinder): any;
					public static getPurchasesInapp(param0: globalAndroid.content.Context, param1: any): java.util.ArrayList<string>;
					public static getSkuDetails(param0: globalAndroid.content.Context, param1: java.util.ArrayList<string>, param2: any, param3: boolean): java.util.Map<string,string>;
					public static getPurchasesSubs(param0: globalAndroid.content.Context, param1: any): java.util.Map<string,com.facebook.appevents.internal.SubscriptionType>;
					public static isBillingSupported(param0: globalAndroid.content.Context, param1: any, param2: string): java.lang.Boolean;
					public constructor();
					public static clearSkuDetailsCache(): void;
					public static getPurchaseHistoryInapp(param0: globalAndroid.content.Context, param1: any): java.util.ArrayList<string>;
					public static getPurchasesSubsExpire(param0: globalAndroid.content.Context, param1: any): java.util.ArrayList<string>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module internal {
				export class InternalAppEventsLogger extends com.facebook.appevents.AppEventsLogger {
					public static class: java.lang.Class<com.facebook.appevents.internal.InternalAppEventsLogger>;
					public logPurchaseImplicitlyInternal(param0: java.math.BigDecimal, param1: java.util.Currency, param2: globalAndroid.os.Bundle): void;
					public logEventImplicitly(param0: string, param1: java.math.BigDecimal, param2: java.util.Currency, param3: globalAndroid.os.Bundle): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module internal {
				export class SessionInfo {
					public static class: java.lang.Class<com.facebook.appevents.internal.SessionInfo>;
					public getSourceApplicationInfo(): com.facebook.appevents.internal.SourceApplicationInfo;
					public static getStoredSessionInfo(): com.facebook.appevents.internal.SessionInfo;
					public getInterruptionCount(): number;
					public getSessionId(): java.util.UUID;
					public static clearSavedSessionFromDisk(): void;
					public incrementInterruptionCount(): void;
					public getDiskRestoreTime(): number;
					public setSourceApplicationInfo(param0: com.facebook.appevents.internal.SourceApplicationInfo): void;
					public writeSessionToDisk(): void;
					public getSessionLastEventTime(): java.lang.Long;
					public setSessionLastEventTime(param0: java.lang.Long): void;
					public getSessionLength(): number;
					public getSessionStartTime(): java.lang.Long;
					public constructor(param0: java.lang.Long, param1: java.lang.Long, param2: java.util.UUID);
					public constructor(param0: java.lang.Long, param1: java.lang.Long);
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module internal {
				export class SessionLogger {
					public static class: java.lang.Class<com.facebook.appevents.internal.SessionLogger>;
					public static logActivateApp(param0: globalAndroid.content.Context, param1: string, param2: com.facebook.appevents.internal.SourceApplicationInfo, param3: string): void;
					public static logDeactivateApp(param0: globalAndroid.content.Context, param1: string, param2: com.facebook.appevents.internal.SessionInfo, param3: string): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module internal {
				export class SourceApplicationInfo {
					public static class: java.lang.Class<com.facebook.appevents.internal.SourceApplicationInfo>;
					public writeSourceApplicationInfoToDisk(): void;
					public toString(): string;
					public static clearSavedSourceApplicationInfoFromDisk(): void;
					public getCallingApplicationPackage(): string;
					public static getStoredSourceApplicatioInfo(): com.facebook.appevents.internal.SourceApplicationInfo;
					public isOpenedByAppLink(): boolean;
				}
				export module SourceApplicationInfo {
					export class Factory {
						public static class: java.lang.Class<com.facebook.appevents.internal.SourceApplicationInfo.Factory>;
						public constructor();
						public static create(param0: globalAndroid.app.Activity): com.facebook.appevents.internal.SourceApplicationInfo;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module appevents {
			export module internal {
				export class SubscriptionType {
					public static class: java.lang.Class<com.facebook.appevents.internal.SubscriptionType>;
					public static NEW: com.facebook.appevents.internal.SubscriptionType;
					public static HEARTBEAT: com.facebook.appevents.internal.SubscriptionType;
					public static EXPIRE: com.facebook.appevents.internal.SubscriptionType;
					public static CANCEL: com.facebook.appevents.internal.SubscriptionType;
					public static RESTORE: com.facebook.appevents.internal.SubscriptionType;
					public static DUPLICATED: com.facebook.appevents.internal.SubscriptionType;
					public static UNKNOWN: com.facebook.appevents.internal.SubscriptionType;
					public static values(): native.Array<com.facebook.appevents.internal.SubscriptionType>;
					public static valueOf(param0: string): com.facebook.appevents.internal.SubscriptionType;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module applinks {
			export class AppLinkData {
				public static class: java.lang.Class<com.facebook.applinks.AppLinkData>;
				public static ARGUMENTS_TAPTIME_KEY: string;
				public static ARGUMENTS_REFERER_DATA_KEY: string;
				public static ARGUMENTS_EXTRAS_KEY: string;
				public static ARGUMENTS_NATIVE_CLASS_KEY: string;
				public static ARGUMENTS_NATIVE_URL: string;
				public static createFromActivity(param0: globalAndroid.app.Activity): com.facebook.applinks.AppLinkData;
				public getRef(): string;
				public static fetchDeferredAppLinkData(param0: globalAndroid.content.Context, param1: com.facebook.applinks.AppLinkData.CompletionHandler): void;
				public getPromotionCode(): string;
				public static fetchDeferredAppLinkData(param0: globalAndroid.content.Context, param1: string, param2: com.facebook.applinks.AppLinkData.CompletionHandler): void;
				public static createFromAlApplinkData(param0: globalAndroid.content.Intent): com.facebook.applinks.AppLinkData;
				public getRefererData(): globalAndroid.os.Bundle;
				public getTargetUri(): globalAndroid.net.Uri;
				public getArgumentBundle(): globalAndroid.os.Bundle;
			}
			export module AppLinkData {
				export class CompletionHandler {
					public static class: java.lang.Class<com.facebook.applinks.AppLinkData.CompletionHandler>;
					/**
					 * Constructs a new instance of the com.facebook.applinks.AppLinkData$CompletionHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onDeferredAppLinkDataFetched(param0: com.facebook.applinks.AppLinkData): void;
					});
					public constructor();
					public onDeferredAppLinkDataFetched(param0: com.facebook.applinks.AppLinkData): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module applinks {
			export class AppLinks {
				public static class: java.lang.Class<com.facebook.applinks.AppLinks>;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module applinks {
			export class BuildConfig {
				public static class: java.lang.Class<com.facebook.applinks.BuildConfig>;
				public static DEBUG: boolean;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module applinks {
			export class FacebookAppLinkResolver {
				public static class: java.lang.Class<com.facebook.applinks.FacebookAppLinkResolver>;
				public getAppLinkFromUrlInBackground(param0: globalAndroid.net.Uri): bolts.Task<bolts.AppLink>;
				public getAppLinkFromUrlsInBackground(param0: java.util.List<globalAndroid.net.Uri>): bolts.Task<java.util.Map<globalAndroid.net.Uri,bolts.AppLink>>;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export class BuildConfig {
				public static class: java.lang.Class<com.facebook.common.BuildConfig>;
				public static DEBUG: boolean;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module common {
			export class Common {
				public static class: java.lang.Class<com.facebook.common.Common>;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module core {
			export class BuildConfig {
				public static class: java.lang.Class<com.facebook.core.BuildConfig>;
				public static DEBUG: boolean;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module core {
			export class Core {
				public static class: java.lang.Class<com.facebook.core.Core>;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module devicerequests {
			export module internal {
				export class DeviceRequestsHelper {
					public static class: java.lang.Class<com.facebook.devicerequests.internal.DeviceRequestsHelper>;
					public static DEVICE_INFO_PARAM: string;
					public constructor();
					public static getDeviceInfo(): string;
					public static generateQRCode(param0: string): globalAndroid.graphics.Bitmap;
					public static cleanUpAdvertisementService(param0: string): void;
					public static isAvailable(): boolean;
					public static startAdvertisementService(param0: string): boolean;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class AnalyticsEvents {
				public static class: java.lang.Class<com.facebook.internal.AnalyticsEvents>;
				public static EVENT_NATIVE_LOGIN_DIALOG_COMPLETE: string;
				public static EVENT_NATIVE_LOGIN_DIALOG_START: string;
				public static EVENT_WEB_LOGIN_COMPLETE: string;
				public static EVENT_FRIEND_PICKER_USAGE: string;
				public static EVENT_PLACE_PICKER_USAGE: string;
				public static EVENT_LOGIN_VIEW_USAGE: string;
				public static EVENT_USER_SETTINGS_USAGE: string;
				public static EVENT_NATIVE_DIALOG_START: string;
				public static EVENT_NATIVE_DIALOG_COMPLETE: string;
				public static PARAMETER_WEB_LOGIN_E2E: string;
				public static PARAMETER_WEB_LOGIN_SWITCHBACK_TIME: string;
				public static PARAMETER_APP_ID: string;
				public static PARAMETER_CALL_ID: string;
				public static PARAMETER_ACTION_ID: string;
				public static PARAMETER_NATIVE_LOGIN_DIALOG_START_TIME: string;
				public static PARAMETER_NATIVE_LOGIN_DIALOG_COMPLETE_TIME: string;
				public static PARAMETER_DIALOG_OUTCOME: string;
				public static PARAMETER_DIALOG_OUTCOME_VALUE_COMPLETED: string;
				public static PARAMETER_DIALOG_OUTCOME_VALUE_UNKNOWN: string;
				public static PARAMETER_DIALOG_OUTCOME_VALUE_CANCELLED: string;
				public static PARAMETER_DIALOG_OUTCOME_VALUE_FAILED: string;
				public static EVENT_NATIVE_DIALOG_TYPE_SHARE: string;
				public static EVENT_NATIVE_DIALOG_TYPE_MESSAGE: string;
				public static EVENT_NATIVE_DIALOG_TYPE_OG_SHARE: string;
				public static EVENT_NATIVE_DIALOG_TYPE_OG_MESSAGE: string;
				public static EVENT_NATIVE_DIALOG_TYPE_PHOTO_SHARE: string;
				public static EVENT_NATIVE_DIALOG_TYPE_PHOTO_MESSAGE: string;
				public static EVENT_NATIVE_DIALOG_TYPE_VIDEO_SHARE: string;
				public static EVENT_NATIVE_DIALOG_TYPE_LIKE: string;
				public static EVENT_LIKE_VIEW_CANNOT_PRESENT_DIALOG: string;
				public static EVENT_LIKE_VIEW_DID_LIKE: string;
				public static EVENT_LIKE_VIEW_DID_PRESENT_DIALOG: string;
				public static EVENT_LIKE_VIEW_DID_PRESENT_FALLBACK: string;
				public static EVENT_LIKE_VIEW_DID_UNLIKE: string;
				public static EVENT_LIKE_VIEW_DID_UNDO_QUICKLY: string;
				public static EVENT_LIKE_VIEW_DIALOG_DID_SUCCEED: string;
				public static EVENT_LIKE_VIEW_ERROR: string;
				public static PARAMETER_LIKE_VIEW_STYLE: string;
				public static PARAMETER_LIKE_VIEW_AUXILIARY_POSITION: string;
				public static PARAMETER_LIKE_VIEW_HORIZONTAL_ALIGNMENT: string;
				public static PARAMETER_LIKE_VIEW_OBJECT_ID: string;
				public static PARAMETER_LIKE_VIEW_OBJECT_TYPE: string;
				public static PARAMETER_LIKE_VIEW_CURRENT_ACTION: string;
				public static PARAMETER_LIKE_VIEW_ERROR_JSON: string;
				public static PARAMETER_SHARE_OUTCOME: string;
				public static PARAMETER_SHARE_OUTCOME_SUCCEEDED: string;
				public static PARAMETER_SHARE_OUTCOME_CANCELLED: string;
				public static PARAMETER_SHARE_OUTCOME_ERROR: string;
				public static PARAMETER_SHARE_OUTCOME_UNKNOWN: string;
				public static PARAMETER_SHARE_ERROR_MESSAGE: string;
				public static PARAMETER_SHARE_DIALOG_SHOW: string;
				public static PARAMETER_SHARE_DIALOG_SHOW_WEB: string;
				public static PARAMETER_SHARE_DIALOG_SHOW_NATIVE: string;
				public static PARAMETER_SHARE_DIALOG_SHOW_AUTOMATIC: string;
				public static PARAMETER_SHARE_DIALOG_SHOW_UNKNOWN: string;
				public static PARAMETER_SHARE_DIALOG_CONTENT_TYPE: string;
				public static PARAMETER_SHARE_DIALOG_CONTENT_UUID: string;
				public static PARAMETER_SHARE_DIALOG_CONTENT_PAGE_ID: string;
				public static PARAMETER_SHARE_DIALOG_CONTENT_VIDEO: string;
				public static PARAMETER_SHARE_DIALOG_CONTENT_PHOTO: string;
				public static PARAMETER_SHARE_DIALOG_CONTENT_STATUS: string;
				public static PARAMETER_SHARE_DIALOG_CONTENT_OPENGRAPH: string;
				public static PARAMETER_SHARE_DIALOG_CONTENT_UNKNOWN: string;
				public static EVENT_SHARE_RESULT: string;
				public static EVENT_SHARE_DIALOG_SHOW: string;
				public static EVENT_SHARE_MESSENGER_DIALOG_SHOW: string;
				public static EVENT_LIKE_BUTTON_CREATE: string;
				public static EVENT_LOGIN_BUTTON_CREATE: string;
				public static EVENT_SHARE_BUTTON_CREATE: string;
				public static EVENT_SEND_BUTTON_CREATE: string;
				public static EVENT_SHARE_BUTTON_DID_TAP: string;
				public static EVENT_SEND_BUTTON_DID_TAP: string;
				public static EVENT_LIKE_BUTTON_DID_TAP: string;
				public static EVENT_LOGIN_BUTTON_DID_TAP: string;
				public static EVENT_DEVICE_SHARE_BUTTON_CREATE: string;
				public static EVENT_DEVICE_SHARE_BUTTON_DID_TAP: string;
				public static EVENT_SMART_LOGIN_SERVICE: string;
				public static EVENT_SDK_INITIALIZE: string;
				public static PARAMETER_SHARE_MESSENGER_GENERIC_TEMPLATE: string;
				public static PARAMETER_SHARE_MESSENGER_MEDIA_TEMPLATE: string;
				public static PARAMETER_SHARE_MESSENGER_OPEN_GRAPH_MUSIC_TEMPLATE: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class AppCall {
				public static class: java.lang.Class<com.facebook.internal.AppCall>;
				public static getCurrentPendingCall(): com.facebook.internal.AppCall;
				public static finishPendingCall(param0: java.util.UUID, param1: number): com.facebook.internal.AppCall;
				public getCallId(): java.util.UUID;
				public setRequestCode(param0: number): void;
				public setRequestIntent(param0: globalAndroid.content.Intent): void;
				public constructor(param0: number);
				public constructor(param0: number, param1: java.util.UUID);
				public getRequestCode(): number;
				public setPending(): boolean;
				public getRequestIntent(): globalAndroid.content.Intent;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class AttributionIdentifiers {
				public static class: java.lang.Class<com.facebook.internal.AttributionIdentifiers>;
				public getAndroidAdvertiserId(): string;
				public getAndroidInstallerPackage(): string;
				public isTrackingLimited(): boolean;
				public getAttributionId(): string;
				public static getAttributionIdentifiers(param0: globalAndroid.content.Context): com.facebook.internal.AttributionIdentifiers;
				public constructor();
			}
			export module AttributionIdentifiers {
				export class GoogleAdInfo {
					public static class: java.lang.Class<com.facebook.internal.AttributionIdentifiers.GoogleAdInfo>;
					public getAdvertiserId(): string;
					public isTrackingLimited(): boolean;
					public asBinder(): globalAndroid.os.IBinder;
				}
				export class GoogleAdServiceConnection {
					public static class: java.lang.Class<com.facebook.internal.AttributionIdentifiers.GoogleAdServiceConnection>;
					public onServiceConnected(param0: globalAndroid.content.ComponentName, param1: globalAndroid.os.IBinder): void;
					public getBinder(): globalAndroid.os.IBinder;
					public onServiceDisconnected(param0: globalAndroid.content.ComponentName): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class BoltsMeasurementEventListener {
				public static class: java.lang.Class<com.facebook.internal.BoltsMeasurementEventListener>;
				public static getInstance(param0: globalAndroid.content.Context): com.facebook.internal.BoltsMeasurementEventListener;
				public finalize(): void;
				public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class BundleJSONConverter {
				public static class: java.lang.Class<com.facebook.internal.BundleJSONConverter>;
				public static convertToBundle(param0: org.json.JSONObject): globalAndroid.os.Bundle;
				public static convertToJSON(param0: globalAndroid.os.Bundle): org.json.JSONObject;
				public constructor();
			}
			export module BundleJSONConverter {
				export class Setter {
					public static class: java.lang.Class<com.facebook.internal.BundleJSONConverter.Setter>;
					/**
					 * Constructs a new instance of the com.facebook.internal.BundleJSONConverter$Setter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setOnBundle(param0: globalAndroid.os.Bundle, param1: string, param2: any): void;
						setOnJSON(param0: org.json.JSONObject, param1: string, param2: any): void;
					});
					public constructor();
					public setOnJSON(param0: org.json.JSONObject, param1: string, param2: any): void;
					public setOnBundle(param0: globalAndroid.os.Bundle, param1: string, param2: any): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class CallbackManagerImpl extends com.facebook.CallbackManager {
				public static class: java.lang.Class<com.facebook.internal.CallbackManagerImpl>;
				public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): boolean;
				public constructor();
				public static registerStaticCallback(param0: number, param1: com.facebook.internal.CallbackManagerImpl.Callback): void;
				public registerCallback(param0: number, param1: com.facebook.internal.CallbackManagerImpl.Callback): void;
				public unregisterCallback(param0: number): void;
			}
			export module CallbackManagerImpl {
				export class Callback {
					public static class: java.lang.Class<com.facebook.internal.CallbackManagerImpl.Callback>;
					/**
					 * Constructs a new instance of the com.facebook.internal.CallbackManagerImpl$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onActivityResult(param0: number, param1: globalAndroid.content.Intent): boolean;
					});
					public constructor();
					public onActivityResult(param0: number, param1: globalAndroid.content.Intent): boolean;
				}
				export class RequestCodeOffset {
					public static class: java.lang.Class<com.facebook.internal.CallbackManagerImpl.RequestCodeOffset>;
					public static Login: com.facebook.internal.CallbackManagerImpl.RequestCodeOffset;
					public static Share: com.facebook.internal.CallbackManagerImpl.RequestCodeOffset;
					public static Message: com.facebook.internal.CallbackManagerImpl.RequestCodeOffset;
					public static Like: com.facebook.internal.CallbackManagerImpl.RequestCodeOffset;
					public static GameRequest: com.facebook.internal.CallbackManagerImpl.RequestCodeOffset;
					public static AppGroupCreate: com.facebook.internal.CallbackManagerImpl.RequestCodeOffset;
					public static AppGroupJoin: com.facebook.internal.CallbackManagerImpl.RequestCodeOffset;
					public static AppInvite: com.facebook.internal.CallbackManagerImpl.RequestCodeOffset;
					public static DeviceShare: com.facebook.internal.CallbackManagerImpl.RequestCodeOffset;
					public static values(): native.Array<com.facebook.internal.CallbackManagerImpl.RequestCodeOffset>;
					public static valueOf(param0: string): com.facebook.internal.CallbackManagerImpl.RequestCodeOffset;
					public toRequestCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class CollectionMapper {
				public static class: java.lang.Class<com.facebook.internal.CollectionMapper>;
				public static iterate(param0: com.facebook.internal.CollectionMapper.Collection<any>, param1: com.facebook.internal.CollectionMapper.ValueMapper, param2: com.facebook.internal.CollectionMapper.OnMapperCompleteListener): void;
			}
			export module CollectionMapper {
				export class Collection<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.internal.CollectionMapper.Collection<any>>;
					/**
					 * Constructs a new instance of the com.facebook.internal.CollectionMapper$Collection interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						keyIterator(): java.util.Iterator<T>;
						get(param0: T): any;
						set(param0: T, param1: any, param2: com.facebook.internal.CollectionMapper.OnErrorListener): void;
					});
					public constructor();
					public keyIterator(): java.util.Iterator<T>;
					public get(param0: T): any;
					public set(param0: T, param1: any, param2: com.facebook.internal.CollectionMapper.OnErrorListener): void;
				}
				export class OnErrorListener {
					public static class: java.lang.Class<com.facebook.internal.CollectionMapper.OnErrorListener>;
					/**
					 * Constructs a new instance of the com.facebook.internal.CollectionMapper$OnErrorListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onError(param0: com.facebook.FacebookException): void;
					});
					public constructor();
					public onError(param0: com.facebook.FacebookException): void;
				}
				export class OnMapValueCompleteListener extends com.facebook.internal.CollectionMapper.OnErrorListener {
					public static class: java.lang.Class<com.facebook.internal.CollectionMapper.OnMapValueCompleteListener>;
					/**
					 * Constructs a new instance of the com.facebook.internal.CollectionMapper$OnMapValueCompleteListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onComplete(param0: any): void;
						onError(param0: com.facebook.FacebookException): void;
					});
					public constructor();
					public onError(param0: com.facebook.FacebookException): void;
					public onComplete(param0: any): void;
				}
				export class OnMapperCompleteListener extends com.facebook.internal.CollectionMapper.OnErrorListener {
					public static class: java.lang.Class<com.facebook.internal.CollectionMapper.OnMapperCompleteListener>;
					/**
					 * Constructs a new instance of the com.facebook.internal.CollectionMapper$OnMapperCompleteListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onComplete(): void;
						onError(param0: com.facebook.FacebookException): void;
					});
					public constructor();
					public onError(param0: com.facebook.FacebookException): void;
					public onComplete(): void;
				}
				export class ValueMapper {
					public static class: java.lang.Class<com.facebook.internal.CollectionMapper.ValueMapper>;
					/**
					 * Constructs a new instance of the com.facebook.internal.CollectionMapper$ValueMapper interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						mapValue(param0: any, param1: com.facebook.internal.CollectionMapper.OnMapValueCompleteListener): void;
					});
					public constructor();
					public mapValue(param0: any, param1: com.facebook.internal.CollectionMapper.OnMapValueCompleteListener): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class CustomTab {
				public static class: java.lang.Class<com.facebook.internal.CustomTab>;
				public constructor(param0: string, param1: globalAndroid.os.Bundle);
				public openCustomTab(param0: globalAndroid.app.Activity, param1: string): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class DialogFeature {
				public static class: java.lang.Class<com.facebook.internal.DialogFeature>;
				/**
				 * Constructs a new instance of the com.facebook.internal.DialogFeature interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getAction(): string;
					getMinVersion(): number;
					name(): string;
				});
				public constructor();
				public getMinVersion(): number;
				public name(): string;
				public getAction(): string;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class DialogPresenter {
				public static class: java.lang.Class<com.facebook.internal.DialogPresenter>;
				public static setupAppCallForNativeDialog(param0: com.facebook.internal.AppCall, param1: com.facebook.internal.DialogPresenter.ParameterProvider, param2: com.facebook.internal.DialogFeature): void;
				public static setupAppCallForWebFallbackDialog(param0: com.facebook.internal.AppCall, param1: globalAndroid.os.Bundle, param2: com.facebook.internal.DialogFeature): void;
				public static setupAppCallForErrorResult(param0: com.facebook.internal.AppCall, param1: com.facebook.FacebookException): void;
				public static canPresentNativeDialogWithFeature(param0: com.facebook.internal.DialogFeature): boolean;
				public static canPresentWebFallbackDialogWithFeature(param0: com.facebook.internal.DialogFeature): boolean;
				public static logDialogActivity(param0: globalAndroid.content.Context, param1: string, param2: string): void;
				public constructor();
				public static present(param0: com.facebook.internal.AppCall, param1: com.facebook.internal.FragmentWrapper): void;
				public static getProtocolVersionForNativeDialog(param0: com.facebook.internal.DialogFeature): com.facebook.internal.NativeProtocol.ProtocolVersionQueryResult;
				public static setupAppCallForWebDialog(param0: com.facebook.internal.AppCall, param1: string, param2: globalAndroid.os.Bundle): void;
				public static setupAppCallForValidationError(param0: com.facebook.internal.AppCall, param1: com.facebook.FacebookException): void;
				public static setupAppCallForCannotShowError(param0: com.facebook.internal.AppCall): void;
				public static present(param0: com.facebook.internal.AppCall, param1: globalAndroid.app.Activity): void;
			}
			export module DialogPresenter {
				export class ParameterProvider {
					public static class: java.lang.Class<com.facebook.internal.DialogPresenter.ParameterProvider>;
					/**
					 * Constructs a new instance of the com.facebook.internal.DialogPresenter$ParameterProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getParameters(): globalAndroid.os.Bundle;
						getLegacyParameters(): globalAndroid.os.Bundle;
					});
					public constructor();
					public getParameters(): globalAndroid.os.Bundle;
					public getLegacyParameters(): globalAndroid.os.Bundle;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export abstract class FacebookDialogBase<CONTENT, RESULT>  extends com.facebook.FacebookDialog<any,any> {
				public static class: java.lang.Class<com.facebook.internal.FacebookDialogBase<any,any>>;
				public static BASE_AUTOMATIC_MODE: any;
				public constructor(param0: com.facebook.internal.FragmentWrapper, param1: number);
				public showImpl(param0: any, param1: any): void;
				public registerCallback(param0: com.facebook.CallbackManager, param1: com.facebook.FacebookCallback<any>, param2: number): void;
				public canShowImpl(param0: any, param1: any): boolean;
				public canShow(param0: any): boolean;
				public constructor(param0: globalAndroid.app.Activity, param1: number);
				public registerCallback(param0: com.facebook.CallbackManager, param1: com.facebook.FacebookCallback<any>): void;
				public getOrderedModeHandlers(): java.util.List<com.facebook.internal.FacebookDialogBase.ModeHandler>;
				public registerCallbackImpl(param0: com.facebook.internal.CallbackManagerImpl, param1: com.facebook.FacebookCallback<any>): void;
				public setRequestCode(param0: number): void;
				public show(param0: any): void;
				public startActivityForResult(param0: globalAndroid.content.Intent, param1: number): void;
				public getActivityContext(): globalAndroid.app.Activity;
				public createBaseAppCall(): com.facebook.internal.AppCall;
				public getRequestCode(): number;
			}
			export module FacebookDialogBase {
				export abstract class ModeHandler {
					public static class: java.lang.Class<com.facebook.internal.FacebookDialogBase.ModeHandler>;
					public getMode(): any;
					public canShow(param0: any, param1: boolean): boolean;
					public createAppCall(param0: any): com.facebook.internal.AppCall;
					public constructor(param0: com.facebook.internal.FacebookDialogBase<any,any>);
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class FacebookDialogFragment {
				public static class: java.lang.Class<com.facebook.internal.FacebookDialogFragment>;
				public static TAG: string;
				public setDialog(param0: globalAndroid.app.Dialog): void;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public onResume(): void;
				public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
				public onDestroyView(): void;
				public onCreateDialog(param0: globalAndroid.os.Bundle): globalAndroid.app.Dialog;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class FacebookInitProvider {
				public static class: java.lang.Class<com.facebook.internal.FacebookInitProvider>;
				public getType(param0: globalAndroid.net.Uri): string;
				public insert(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues): globalAndroid.net.Uri;
				public update(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues, param2: string, param3: native.Array<string>): number;
				public delete(param0: globalAndroid.net.Uri, param1: string, param2: native.Array<string>): number;
				public query(param0: globalAndroid.net.Uri, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string): globalAndroid.database.Cursor;
				public onCreate(): boolean;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class FacebookRequestErrorClassification {
				public static class: java.lang.Class<com.facebook.internal.FacebookRequestErrorClassification>;
				public static EC_SERVICE_UNAVAILABLE: number;
				public static EC_APP_TOO_MANY_CALLS: number;
				public static EC_RATE: number;
				public static EC_USER_TOO_MANY_CALLS: number;
				public static EC_INVALID_SESSION: number;
				public static EC_INVALID_TOKEN: number;
				public static EC_APP_NOT_INSTALLED: number;
				public static EC_TOO_MANY_USER_ACTION_CALLS: number;
				public static ESC_APP_NOT_INSTALLED: number;
				public static ESC_APP_INACTIVE: number;
				public static KEY_RECOVERY_MESSAGE: string;
				public static KEY_NAME: string;
				public static KEY_OTHER: string;
				public static KEY_TRANSIENT: string;
				public static KEY_LOGIN_RECOVERABLE: string;
				public getLoginRecoverableErrors(): java.util.Map<java.lang.Integer,java.util.Set<java.lang.Integer>>;
				public static getDefaultErrorClassification(): com.facebook.internal.FacebookRequestErrorClassification;
				public getTransientErrors(): java.util.Map<java.lang.Integer,java.util.Set<java.lang.Integer>>;
				public getOtherErrors(): java.util.Map<java.lang.Integer,java.util.Set<java.lang.Integer>>;
				public classify(param0: number, param1: number, param2: boolean): com.facebook.FacebookRequestError.Category;
				public getRecoveryMessage(param0: com.facebook.FacebookRequestError.Category): string;
				public static createFromJSON(param0: org.json.JSONArray): com.facebook.internal.FacebookRequestErrorClassification;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class FacebookSignatureValidator {
				public static class: java.lang.Class<com.facebook.internal.FacebookSignatureValidator>;
				public static validateSignature(param0: globalAndroid.content.Context, param1: string): boolean;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class FacebookWebFallbackDialog extends com.facebook.internal.WebDialog {
				public static class: java.lang.Class<com.facebook.internal.FacebookWebFallbackDialog>;
				public cancel(): void;
				public static newInstance(param0: globalAndroid.content.Context, param1: string, param2: globalAndroid.os.Bundle, param3: number, param4: com.facebook.internal.WebDialog.OnCompleteListener): com.facebook.internal.WebDialog;
				public parseResponseUri(param0: string): globalAndroid.os.Bundle;
				public static newInstance(param0: globalAndroid.content.Context, param1: string, param2: string): com.facebook.internal.FacebookWebFallbackDialog;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class FetchedAppSettings {
				public static class: java.lang.Class<com.facebook.internal.FetchedAppSettings>;
				public getErrorClassification(): com.facebook.internal.FacebookRequestErrorClassification;
				public getSmartLoginMenuIconURL(): string;
				public getEventBindings(): org.json.JSONArray;
				public getSdkUpdateMessage(): string;
				public getIAPAutomaticLoggingEnabled(): boolean;
				public getCodelessEventsEnabled(): boolean;
				public static getDialogFeatureConfig(param0: string, param1: string, param2: string): com.facebook.internal.FetchedAppSettings.DialogFeatureConfig;
				public constructor(param0: boolean, param1: string, param2: boolean, param3: boolean, param4: number, param5: java.util.EnumSet<com.facebook.internal.SmartLoginOption>, param6: java.util.Map<string,java.util.Map<string,com.facebook.internal.FetchedAppSettings.DialogFeatureConfig>>, param7: boolean, param8: com.facebook.internal.FacebookRequestErrorClassification, param9: string, param10: string, param11: boolean, param12: boolean, param13: org.json.JSONArray, param14: string, param15: boolean);
				public getNuxContent(): string;
				public getCustomTabsEnabled(): boolean;
				public getSmartLoginOptions(): java.util.EnumSet<com.facebook.internal.SmartLoginOption>;
				public getTrackUninstallEnabled(): boolean;
				public getSessionTimeoutInSeconds(): number;
				public getDialogConfigurations(): java.util.Map<string,java.util.Map<string,com.facebook.internal.FetchedAppSettings.DialogFeatureConfig>>;
				public getAutomaticLoggingEnabled(): boolean;
				public getSmartLoginBookmarkIconURL(): string;
				public supportsImplicitLogging(): boolean;
				public getNuxEnabled(): boolean;
			}
			export module FetchedAppSettings {
				export class DialogFeatureConfig {
					public static class: java.lang.Class<com.facebook.internal.FetchedAppSettings.DialogFeatureConfig>;
					public static parseDialogConfig(param0: org.json.JSONObject): com.facebook.internal.FetchedAppSettings.DialogFeatureConfig;
					public getVersionSpec(): native.Array<number>;
					public getFeatureName(): string;
					public getFallbackUrl(): globalAndroid.net.Uri;
					public getDialogName(): string;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class FetchedAppSettingsManager {
				public static class: java.lang.Class<com.facebook.internal.FetchedAppSettingsManager>;
				public static getAppSettingsWithoutQuery(param0: string): com.facebook.internal.FetchedAppSettings;
				public static loadAppSettingsAsync(): void;
				public static queryAppSettings(param0: string, param1: boolean): com.facebook.internal.FetchedAppSettings;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class FileLruCache {
				public static class: java.lang.Class<com.facebook.internal.FileLruCache>;
				public get(param0: string, param1: string): java.io.InputStream;
				public constructor(param0: string, param1: com.facebook.internal.FileLruCache.Limits);
				public openPutStream(param0: string, param1: string): java.io.OutputStream;
				public getLocation(): string;
				public get(param0: string): java.io.InputStream;
				public interceptAndPut(param0: string, param1: java.io.InputStream): java.io.InputStream;
				public toString(): string;
				public clearCache(): void;
				public openPutStream(param0: string): java.io.OutputStream;
			}
			export module FileLruCache {
				export class BufferFile {
					public static class: java.lang.Class<com.facebook.internal.FileLruCache.BufferFile>;
				}
				export class CloseCallbackOutputStream {
					public static class: java.lang.Class<com.facebook.internal.FileLruCache.CloseCallbackOutputStream>;
					public write(param0: native.Array<number>, param1: number, param2: number): void;
					public write(param0: native.Array<number>): void;
					public close(): void;
					public flush(): void;
					public write(param0: number): void;
				}
				export class CopyingInputStream {
					public static class: java.lang.Class<com.facebook.internal.FileLruCache.CopyingInputStream>;
					public available(): number;
					public read(): number;
					public read(param0: native.Array<number>, param1: number, param2: number): number;
					public reset(): void;
					public markSupported(): boolean;
					public read(param0: native.Array<number>): number;
					public close(): void;
					public skip(param0: number): number;
					public mark(param0: number): void;
				}
				export class Limits {
					public static class: java.lang.Class<com.facebook.internal.FileLruCache.Limits>;
					public constructor();
				}
				export class ModifiedFile extends java.lang.Comparable<com.facebook.internal.FileLruCache.ModifiedFile> {
					public static class: java.lang.Class<com.facebook.internal.FileLruCache.ModifiedFile>;
					public equals(param0: any): boolean;
					public compareTo(param0: com.facebook.internal.FileLruCache.ModifiedFile): number;
					public hashCode(): number;
				}
				export class StreamCloseCallback {
					public static class: java.lang.Class<com.facebook.internal.FileLruCache.StreamCloseCallback>;
					/**
					 * Constructs a new instance of the com.facebook.internal.FileLruCache$StreamCloseCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onClose(): void;
					});
					public constructor();
					public onClose(): void;
				}
				export class StreamHeader {
					public static class: java.lang.Class<com.facebook.internal.FileLruCache.StreamHeader>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class FragmentWrapper {
				public static class: java.lang.Class<com.facebook.internal.FragmentWrapper>;
				public getActivity(): globalAndroid.app.Activity;
				public constructor(param0: globalAndroid.support.v4.app.Fragment);
				public getSupportFragment(): globalAndroid.support.v4.app.Fragment;
				public startActivityForResult(param0: globalAndroid.content.Intent, param1: number): void;
				public getNativeFragment(): globalAndroid.app.Fragment;
				public constructor(param0: globalAndroid.app.Fragment);
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class ImageDownloader {
				public static class: java.lang.Class<com.facebook.internal.ImageDownloader>;
				public static downloadAsync(param0: com.facebook.internal.ImageRequest): void;
				public static cancelRequest(param0: com.facebook.internal.ImageRequest): boolean;
				public static clearCache(param0: globalAndroid.content.Context): void;
				public static prioritizeRequest(param0: com.facebook.internal.ImageRequest): void;
				public constructor();
			}
			export module ImageDownloader {
				export class CacheReadWorkItem {
					public static class: java.lang.Class<com.facebook.internal.ImageDownloader.CacheReadWorkItem>;
					public run(): void;
				}
				export class DownloadImageWorkItem {
					public static class: java.lang.Class<com.facebook.internal.ImageDownloader.DownloadImageWorkItem>;
					public run(): void;
				}
				export class DownloaderContext {
					public static class: java.lang.Class<com.facebook.internal.ImageDownloader.DownloaderContext>;
				}
				export class RequestKey {
					public static class: java.lang.Class<com.facebook.internal.ImageDownloader.RequestKey>;
					public equals(param0: any): boolean;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class ImageRequest {
				public static class: java.lang.Class<com.facebook.internal.ImageRequest>;
				public static UNSPECIFIED_DIMENSION: number;
				public static getProfilePictureUri(param0: string, param1: number, param2: number): globalAndroid.net.Uri;
				public getContext(): globalAndroid.content.Context;
				public getImageUri(): globalAndroid.net.Uri;
				public getCallerTag(): any;
				public getCallback(): com.facebook.internal.ImageRequest.Callback;
				public isCachedRedirectAllowed(): boolean;
			}
			export module ImageRequest {
				export class Builder {
					public static class: java.lang.Class<com.facebook.internal.ImageRequest.Builder>;
					public setCallback(param0: com.facebook.internal.ImageRequest.Callback): com.facebook.internal.ImageRequest.Builder;
					public setCallerTag(param0: any): com.facebook.internal.ImageRequest.Builder;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.net.Uri);
					public setAllowCachedRedirects(param0: boolean): com.facebook.internal.ImageRequest.Builder;
					public build(): com.facebook.internal.ImageRequest;
				}
				export class Callback {
					public static class: java.lang.Class<com.facebook.internal.ImageRequest.Callback>;
					/**
					 * Constructs a new instance of the com.facebook.internal.ImageRequest$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onCompleted(param0: com.facebook.internal.ImageResponse): void;
					});
					public constructor();
					public onCompleted(param0: com.facebook.internal.ImageResponse): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class ImageResponse {
				public static class: java.lang.Class<com.facebook.internal.ImageResponse>;
				public getRequest(): com.facebook.internal.ImageRequest;
				public isCachedRedirect(): boolean;
				public getBitmap(): globalAndroid.graphics.Bitmap;
				public getError(): java.lang.Exception;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class ImageResponseCache {
				public static class: java.lang.Class<com.facebook.internal.ImageResponseCache>;
			}
			export module ImageResponseCache {
				export class BufferedHttpInputStream {
					public static class: java.lang.Class<com.facebook.internal.ImageResponseCache.BufferedHttpInputStream>;
					public close(): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class InternalSettings {
				public static class: java.lang.Class<com.facebook.internal.InternalSettings>;
				public static getCustomUserAgent(): string;
				public constructor();
				public static setCustomUserAgent(param0: string): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class LockOnGetVariable<T>  extends java.lang.Object {
				public static class: java.lang.Class<com.facebook.internal.LockOnGetVariable<any>>;
				public constructor(param0: T);
				public getValue(): T;
				public constructor(param0: java.util.concurrent.Callable<T>);
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class Logger {
				public static class: java.lang.Class<com.facebook.internal.Logger>;
				public static LOG_TAG_BASE: string;
				public getContents(): string;
				public append(param0: string): void;
				public logString(param0: string): void;
				public static log(param0: com.facebook.LoggingBehavior, param1: number, param2: string, param3: string): void;
				public static registerAccessToken(param0: string): void;
				public getPriority(): number;
				public static registerStringToReplace(param0: string, param1: string): void;
				public static log(param0: com.facebook.LoggingBehavior, param1: number, param2: string, param3: string, param4: native.Array<any>): void;
				public constructor(param0: com.facebook.LoggingBehavior, param1: string);
				public static log(param0: com.facebook.LoggingBehavior, param1: string, param2: string): void;
				public append(param0: string, param1: native.Array<any>): void;
				public setPriority(param0: number): void;
				public appendKeyValue(param0: string, param1: any): void;
				public static log(param0: com.facebook.LoggingBehavior, param1: string, param2: string, param3: native.Array<any>): void;
				public log(): void;
				public append(param0: java.lang.StringBuilder): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class LoginAuthorizationType {
				public static class: java.lang.Class<com.facebook.internal.LoginAuthorizationType>;
				public static READ: com.facebook.internal.LoginAuthorizationType;
				public static PUBLISH: com.facebook.internal.LoginAuthorizationType;
				public static valueOf(param0: string): com.facebook.internal.LoginAuthorizationType;
				public static values(): native.Array<com.facebook.internal.LoginAuthorizationType>;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class Mutable<T>  extends java.lang.Object {
				public static class: java.lang.Class<com.facebook.internal.Mutable<any>>;
				public value: T;
				public constructor(param0: T);
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class NativeAppCallAttachmentStore {
				public static class: java.lang.Class<com.facebook.internal.NativeAppCallAttachmentStore>;
				public static cleanupAllAttachments(): void;
				public static createAttachment(param0: java.util.UUID, param1: globalAndroid.graphics.Bitmap): com.facebook.internal.NativeAppCallAttachmentStore.Attachment;
				public static createAttachment(param0: java.util.UUID, param1: globalAndroid.net.Uri): com.facebook.internal.NativeAppCallAttachmentStore.Attachment;
				public static addAttachments(param0: java.util.Collection<com.facebook.internal.NativeAppCallAttachmentStore.Attachment>): void;
				public static cleanupAttachmentsForCall(param0: java.util.UUID): void;
				public static openAttachment(param0: java.util.UUID, param1: string): java.io.File;
			}
			export module NativeAppCallAttachmentStore {
				export class Attachment {
					public static class: java.lang.Class<com.facebook.internal.NativeAppCallAttachmentStore.Attachment>;
					public getOriginalUri(): globalAndroid.net.Uri;
					public getAttachmentUrl(): string;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class NativeProtocol {
				public static class: java.lang.Class<com.facebook.internal.NativeProtocol>;
				public static NO_PROTOCOL_AVAILABLE: number;
				public static FACEBOOK_PROXY_AUTH_PERMISSIONS_KEY: string;
				public static FACEBOOK_PROXY_AUTH_APP_ID_KEY: string;
				public static FACEBOOK_PROXY_AUTH_E2E_KEY: string;
				public static FACEBOOK_SDK_VERSION_KEY: string;
				public static PROTOCOL_VERSION_20121101: number;
				public static PROTOCOL_VERSION_20130502: number;
				public static PROTOCOL_VERSION_20130618: number;
				public static PROTOCOL_VERSION_20131107: number;
				public static PROTOCOL_VERSION_20140204: number;
				public static PROTOCOL_VERSION_20140324: number;
				public static PROTOCOL_VERSION_20140701: number;
				public static PROTOCOL_VERSION_20141001: number;
				public static PROTOCOL_VERSION_20141028: number;
				public static PROTOCOL_VERSION_20141107: number;
				public static PROTOCOL_VERSION_20141218: number;
				public static PROTOCOL_VERSION_20160327: number;
				public static PROTOCOL_VERSION_20170213: number;
				public static PROTOCOL_VERSION_20170411: number;
				public static PROTOCOL_VERSION_20170417: number;
				public static PROTOCOL_VERSION_20171115: number;
				public static EXTRA_PROTOCOL_VERSION: string;
				public static EXTRA_PROTOCOL_ACTION: string;
				public static EXTRA_PROTOCOL_CALL_ID: string;
				public static EXTRA_GET_INSTALL_DATA_PACKAGE: string;
				public static EXTRA_PROTOCOL_BRIDGE_ARGS: string;
				public static EXTRA_PROTOCOL_METHOD_ARGS: string;
				public static EXTRA_PROTOCOL_METHOD_RESULTS: string;
				public static BRIDGE_ARG_APP_NAME_STRING: string;
				public static BRIDGE_ARG_ACTION_ID_STRING: string;
				public static BRIDGE_ARG_ERROR_BUNDLE: string;
				public static EXTRA_DIALOG_COMPLETE_KEY: string;
				public static EXTRA_DIALOG_COMPLETION_GESTURE_KEY: string;
				public static RESULT_ARGS_DIALOG_COMPLETE_KEY: string;
				public static RESULT_ARGS_DIALOG_COMPLETION_GESTURE_KEY: string;
				public static MESSAGE_GET_ACCESS_TOKEN_REQUEST: number;
				public static MESSAGE_GET_ACCESS_TOKEN_REPLY: number;
				public static MESSAGE_GET_INSTALL_DATA_REQUEST: number;
				public static MESSAGE_GET_INSTALL_DATA_REPLY: number;
				public static MESSAGE_GET_LIKE_STATUS_REQUEST: number;
				public static MESSAGE_GET_LIKE_STATUS_REPLY: number;
				public static MESSAGE_GET_AK_SEAMLESS_TOKEN_REQUEST: number;
				public static MESSAGE_GET_AK_SEAMLESS_TOKEN_REPLY: number;
				public static MESSAGE_GET_LOGIN_STATUS_REQUEST: number;
				public static MESSAGE_GET_LOGIN_STATUS_REPLY: number;
				public static ACTION_FEED_DIALOG: string;
				public static ACTION_MESSAGE_DIALOG: string;
				public static ACTION_OGACTIONPUBLISH_DIALOG: string;
				public static ACTION_OGMESSAGEPUBLISH_DIALOG: string;
				public static ACTION_LIKE_DIALOG: string;
				public static ACTION_APPINVITE_DIALOG: string;
				public static ACTION_CAMERA_EFFECT: string;
				public static ACTION_SHARE_STORY: string;
				public static EXTRA_PERMISSIONS: string;
				public static EXTRA_APPLICATION_ID: string;
				public static EXTRA_APPLICATION_NAME: string;
				public static EXTRA_USER_ID: string;
				public static EXTRA_LOGGER_REF: string;
				public static EXTRA_TOAST_DURATION_MS: string;
				public static EXTRA_GRAPH_API_VERSION: string;
				public static EXTRA_ACCESS_TOKEN: string;
				public static EXTRA_EXPIRES_SECONDS_SINCE_EPOCH: string;
				public static RESULT_ARGS_ACCESS_TOKEN: string;
				public static RESULT_ARGS_SIGNED_REQUEST: string;
				public static RESULT_ARGS_EXPIRES_SECONDS_SINCE_EPOCH: string;
				public static RESULT_ARGS_PERMISSIONS: string;
				public static EXTRA_ARGS_PROFILE: string;
				public static EXTRA_ARGS_PROFILE_NAME: string;
				public static EXTRA_ARGS_PROFILE_LAST_NAME: string;
				public static EXTRA_ARGS_PROFILE_FIRST_NAME: string;
				public static EXTRA_ARGS_PROFILE_MIDDLE_NAME: string;
				public static EXTRA_ARGS_PROFILE_LINK: string;
				public static EXTRA_ARGS_PROFILE_USER_ID: string;
				public static OPEN_GRAPH_CREATE_OBJECT_KEY: string;
				public static IMAGE_USER_GENERATED_KEY: string;
				public static IMAGE_URL_KEY: string;
				public static STATUS_ERROR_TYPE: string;
				public static STATUS_ERROR_DESCRIPTION: string;
				public static STATUS_ERROR_CODE: string;
				public static STATUS_ERROR_SUBCODE: string;
				public static STATUS_ERROR_JSON: string;
				public static BRIDGE_ARG_ERROR_TYPE: string;
				public static BRIDGE_ARG_ERROR_DESCRIPTION: string;
				public static BRIDGE_ARG_ERROR_CODE: string;
				public static BRIDGE_ARG_ERROR_SUBCODE: string;
				public static BRIDGE_ARG_ERROR_JSON: string;
				public static ERROR_UNKNOWN_ERROR: string;
				public static ERROR_PROTOCOL_ERROR: string;
				public static ERROR_USER_CANCELED: string;
				public static ERROR_APPLICATION_ERROR: string;
				public static ERROR_NETWORK_ERROR: string;
				public static ERROR_PERMISSION_DENIED: string;
				public static ERROR_SERVICE_DISABLED: string;
				public static WEB_DIALOG_URL: string;
				public static WEB_DIALOG_ACTION: string;
				public static WEB_DIALOG_PARAMS: string;
				public static WEB_DIALOG_IS_FALLBACK: string;
				public static AUDIENCE_ME: string;
				public static AUDIENCE_FRIENDS: string;
				public static AUDIENCE_EVERYONE: string;
				public static createFacebookLiteIntent(param0: globalAndroid.content.Context, param1: string, param2: java.util.Collection<string>, param3: string, param4: boolean, param5: boolean, param6: com.facebook.login.DefaultAudience, param7: string, param8: string): globalAndroid.content.Intent;
				public static createBundleForException(param0: com.facebook.FacebookException): globalAndroid.os.Bundle;
				public static getMethodArgumentsFromIntent(param0: globalAndroid.content.Intent): globalAndroid.os.Bundle;
				public static createProtocolResultIntent(param0: globalAndroid.content.Intent, param1: globalAndroid.os.Bundle, param2: com.facebook.FacebookException): globalAndroid.content.Intent;
				public static setupProtocolRequestIntent(param0: globalAndroid.content.Intent, param1: string, param2: string, param3: number, param4: globalAndroid.os.Bundle): void;
				public static getCallIdFromIntent(param0: globalAndroid.content.Intent): java.util.UUID;
				public static getBridgeArgumentsFromIntent(param0: globalAndroid.content.Intent): globalAndroid.os.Bundle;
				public static createTokenRefreshIntent(param0: globalAndroid.content.Context): globalAndroid.content.Intent;
				public static getProtocolVersionFromIntent(param0: globalAndroid.content.Intent): number;
				public static getExceptionFromErrorData(param0: globalAndroid.os.Bundle): com.facebook.FacebookException;
				public static createProxyAuthIntent(param0: globalAndroid.content.Context, param1: string, param2: java.util.Collection<string>, param3: string, param4: boolean, param5: boolean, param6: com.facebook.login.DefaultAudience, param7: string, param8: string): globalAndroid.content.Intent;
				public constructor();
				public static getLatestAvailableProtocolVersionForAction(param0: string, param1: native.Array<number>): com.facebook.internal.NativeProtocol.ProtocolVersionQueryResult;
				public static createPlatformServiceIntent(param0: globalAndroid.content.Context): globalAndroid.content.Intent;
				public static getLatestAvailableProtocolVersionForService(param0: number): number;
				public static isErrorResult(param0: globalAndroid.content.Intent): boolean;
				public static computeLatestAvailableVersionFromVersionSpec(param0: java.util.TreeSet<java.lang.Integer>, param1: number, param2: native.Array<number>): number;
				public static getSuccessResultsFromIntent(param0: globalAndroid.content.Intent): globalAndroid.os.Bundle;
				public static getErrorDataFromResultIntent(param0: globalAndroid.content.Intent): globalAndroid.os.Bundle;
				public static isVersionCompatibleWithBucketedIntent(param0: number): boolean;
				public static updateAllAvailableProtocolVersionsAsync(): void;
				public static getLatestKnownVersion(): number;
				public static createPlatformActivityIntent(param0: globalAndroid.content.Context, param1: string, param2: string, param3: com.facebook.internal.NativeProtocol.ProtocolVersionQueryResult, param4: globalAndroid.os.Bundle): globalAndroid.content.Intent;
			}
			export module NativeProtocol {
				export class EffectTestAppInfo extends com.facebook.internal.NativeProtocol.NativeAppInfo {
					public static class: java.lang.Class<com.facebook.internal.NativeProtocol.EffectTestAppInfo>;
					public getPackage(): string;
					public getLoginActivity(): string;
				}
				export class FBLiteAppInfo extends com.facebook.internal.NativeProtocol.NativeAppInfo {
					public static class: java.lang.Class<com.facebook.internal.NativeProtocol.FBLiteAppInfo>;
					public getPackage(): string;
					public getLoginActivity(): string;
				}
				export class KatanaAppInfo extends com.facebook.internal.NativeProtocol.NativeAppInfo {
					public static class: java.lang.Class<com.facebook.internal.NativeProtocol.KatanaAppInfo>;
					public getPackage(): string;
					public getLoginActivity(): string;
				}
				export class MessengerAppInfo extends com.facebook.internal.NativeProtocol.NativeAppInfo {
					public static class: java.lang.Class<com.facebook.internal.NativeProtocol.MessengerAppInfo>;
					public getPackage(): string;
					public getLoginActivity(): string;
				}
				export abstract class NativeAppInfo {
					public static class: java.lang.Class<com.facebook.internal.NativeProtocol.NativeAppInfo>;
					public getPackage(): string;
					public getLoginActivity(): string;
					public getAvailableVersions(): java.util.TreeSet<java.lang.Integer>;
				}
				export class ProtocolVersionQueryResult {
					public static class: java.lang.Class<com.facebook.internal.NativeProtocol.ProtocolVersionQueryResult>;
					public static createEmpty(): com.facebook.internal.NativeProtocol.ProtocolVersionQueryResult;
					public getProtocolVersion(): number;
					public static create(param0: com.facebook.internal.NativeProtocol.NativeAppInfo, param1: number): com.facebook.internal.NativeProtocol.ProtocolVersionQueryResult;
					public getAppInfo(): com.facebook.internal.NativeProtocol.NativeAppInfo;
				}
				export class WakizashiAppInfo extends com.facebook.internal.NativeProtocol.NativeAppInfo {
					public static class: java.lang.Class<com.facebook.internal.NativeProtocol.WakizashiAppInfo>;
					public getPackage(): string;
					public getLoginActivity(): string;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export abstract class PlatformServiceClient {
				public static class: java.lang.Class<com.facebook.internal.PlatformServiceClient>;
				public onServiceDisconnected(param0: globalAndroid.content.ComponentName): void;
				public onServiceConnected(param0: globalAndroid.content.ComponentName, param1: globalAndroid.os.IBinder): void;
				public setCompletedListener(param0: com.facebook.internal.PlatformServiceClient.CompletedListener): void;
				public handleMessage(param0: globalAndroid.os.Message): void;
				public constructor(param0: globalAndroid.content.Context, param1: number, param2: number, param3: number, param4: string);
				public getContext(): globalAndroid.content.Context;
				public start(): boolean;
				public cancel(): void;
				public populateRequestBundle(param0: globalAndroid.os.Bundle): void;
			}
			export module PlatformServiceClient {
				export class CompletedListener {
					public static class: java.lang.Class<com.facebook.internal.PlatformServiceClient.CompletedListener>;
					/**
					 * Constructs a new instance of the com.facebook.internal.PlatformServiceClient$CompletedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						completed(param0: globalAndroid.os.Bundle): void;
					});
					public constructor();
					public completed(param0: globalAndroid.os.Bundle): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class ProfileInformationCache {
				public static class: java.lang.Class<com.facebook.internal.ProfileInformationCache>;
				public static getProfileInformation(param0: string): org.json.JSONObject;
				public static putProfileInformation(param0: string, param1: org.json.JSONObject): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class ServerProtocol {
				public static class: java.lang.Class<com.facebook.internal.ServerProtocol>;
				public static DIALOG_PATH: string;
				public static DIALOG_PARAM_ACCESS_TOKEN: string;
				public static DIALOG_PARAM_APP_ID: string;
				public static DIALOG_PARAM_AUTH_TYPE: string;
				public static DIALOG_PARAM_CLIENT_ID: string;
				public static DIALOG_PARAM_DISPLAY: string;
				public static DIALOG_PARAM_DISPLAY_TOUCH: string;
				public static DIALOG_PARAM_E2E: string;
				public static DIALOG_PARAM_LEGACY_OVERRIDE: string;
				public static DIALOG_PARAM_REDIRECT_URI: string;
				public static DIALOG_PARAM_RESPONSE_TYPE: string;
				public static DIALOG_PARAM_RETURN_SCOPES: string;
				public static DIALOG_PARAM_SCOPE: string;
				public static DIALOG_PARAM_SSO_DEVICE: string;
				public static DIALOG_PARAM_DEFAULT_AUDIENCE: string;
				public static DIALOG_PARAM_SDK_VERSION: string;
				public static DIALOG_PARAM_STATE: string;
				public static DIALOG_REREQUEST_AUTH_TYPE: string;
				public static DIALOG_RESPONSE_TYPE_TOKEN_AND_SIGNED_REQUEST: string;
				public static DIALOG_RETURN_SCOPES_TRUE: string;
				public static DIALOG_REDIRECT_URI: string;
				public static DIALOG_REDIRECT_CHROME_OS_URI: string;
				public static DIALOG_CANCEL_URI: string;
				public static FALLBACK_DIALOG_PARAM_APP_ID: string;
				public static FALLBACK_DIALOG_PARAM_BRIDGE_ARGS: string;
				public static FALLBACK_DIALOG_PARAM_KEY_HASH: string;
				public static FALLBACK_DIALOG_PARAM_METHOD_ARGS: string;
				public static FALLBACK_DIALOG_PARAM_METHOD_RESULTS: string;
				public static FALLBACK_DIALOG_PARAM_VERSION: string;
				public static FALLBACK_DIALOG_DISPLAY_VALUE_TOUCH: string;
				public static errorsProxyAuthDisabled: java.util.Collection<string>;
				public static errorsUserCanceled: java.util.Collection<string>;
				public static errorConnectionFailure: string;
				public static getGraphUrlBase(): string;
				public static getGraphVideoUrlBase(): string;
				public static getDefaultAPIVersion(): string;
				public static getDialogAuthority(): string;
				public static getQueryParamsForPlatformActivityIntentWebFallback(param0: string, param1: number, param2: globalAndroid.os.Bundle): globalAndroid.os.Bundle;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class SmartLoginOption {
				public static class: java.lang.Class<com.facebook.internal.SmartLoginOption>;
				public static None: com.facebook.internal.SmartLoginOption;
				public static Enabled: com.facebook.internal.SmartLoginOption;
				public static RequireConfirm: com.facebook.internal.SmartLoginOption;
				public static ALL: java.util.EnumSet<com.facebook.internal.SmartLoginOption>;
				public static parseOptions(param0: number): java.util.EnumSet<com.facebook.internal.SmartLoginOption>;
				public static values(): native.Array<com.facebook.internal.SmartLoginOption>;
				public static valueOf(param0: string): com.facebook.internal.SmartLoginOption;
				public getValue(): number;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class UrlRedirectCache {
				public static class: java.lang.Class<com.facebook.internal.UrlRedirectCache>;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class Utility {
				public static class: java.lang.Class<com.facebook.internal.Utility>;
				public static DEFAULT_STREAM_BUFFER_SIZE: number;
				public static getActivityName(param0: globalAndroid.content.Context): string;
				public static logd(param0: string, param1: string): void;
				public static isWebUri(param0: globalAndroid.net.Uri): boolean;
				public static isCurrentAccessToken(param0: com.facebook.AccessToken): boolean;
				public static getMethodQuietly(param0: string, param1: string, param2: native.Array<java.lang.Class<any>>): java.lang.reflect.Method;
				public static tryGetJSONObjectFromResponse(param0: org.json.JSONObject, param1: string): org.json.JSONObject;
				public static jsonArrayToStringList(param0: org.json.JSONArray): java.util.List<string>;
				public static logd(param0: string, param1: string, param2: java.lang.Throwable): void;
				public static setAppEventExtendedDeviceInfoParameters(param0: org.json.JSONObject, param1: globalAndroid.content.Context): void;
				public constructor();
				public static invokeMethodQuietly(param0: any, param1: java.lang.reflect.Method, param2: native.Array<any>): any;
				public static filter(param0: java.util.List, param1: com.facebook.internal.Utility.Predicate<any>): java.util.List;
				public static writeStringMapToParcel(param0: globalAndroid.os.Parcel, param1: java.util.Map<string,string>): void;
				public static getMethodQuietly(param0: java.lang.Class<any>, param1: string, param2: native.Array<java.lang.Class<any>>): java.lang.reflect.Method;
				public static getBundleLongAsDate(param0: globalAndroid.os.Bundle, param1: string, param2: java.util.Date): java.util.Date;
				public static putJSONValueInBundle(param0: globalAndroid.os.Bundle, param1: string, param2: any): boolean;
				public static putCommaSeparatedStringList(param0: globalAndroid.os.Bundle, param1: string, param2: java.util.List<string>): void;
				public static isSubset(param0: java.util.Collection, param1: java.util.Collection): boolean;
				public static handlePermissionResponse(param0: org.json.JSONObject): com.facebook.internal.Utility.PermissionsPair;
				public static safeGetStringFromResponse(param0: org.json.JSONObject, param1: string): string;
				public static isAutofillAvailable(param0: globalAndroid.content.Context): boolean;
				public static closeQuietly(param0: java.io.Closeable): void;
				public static getContentSize(param0: globalAndroid.net.Uri): number;
				public static intersectRanges(param0: native.Array<number>, param1: native.Array<number>): native.Array<number>;
				public static clearCaches(param0: globalAndroid.content.Context): void;
				public static coerceValueIfNullOrEmpty(param0: string, param1: string): string;
				public static isFileUri(param0: globalAndroid.net.Uri): boolean;
				public static arrayList(param0: native.Array<any>): java.util.ArrayList;
				public static md5hash(param0: string): string;
				public static deleteDirectory(param0: java.io.File): void;
				public static getStringPropertyAsJSON(param0: org.json.JSONObject, param1: string, param2: string): any;
				public static readStreamToString(param0: java.io.InputStream): string;
				public static copyAndCloseInputStream(param0: java.io.InputStream, param1: java.io.OutputStream): number;
				public static isNullOrEmpty(param0: java.util.Collection): boolean;
				public static clearFacebookCookies(param0: globalAndroid.content.Context): void;
				public static tryGetJSONArrayFromResponse(param0: org.json.JSONObject, param1: string): org.json.JSONArray;
				public static getCurrentLocale(): java.util.Locale;
				public static mustFixWindowParamsForAutofill(param0: globalAndroid.content.Context): boolean;
				public static parseUrlQueryString(param0: string): globalAndroid.os.Bundle;
				public static setAppEventAttributionParameters(param0: org.json.JSONObject, param1: com.facebook.internal.AttributionIdentifiers, param2: string, param3: boolean): void;
				public static logd(param0: string, param1: java.lang.Exception): void;
				public static asListNoNulls(param0: native.Array<any>): java.util.List;
				public static sha1hash(param0: string): string;
				public static map(param0: java.util.List, param1: com.facebook.internal.Utility.Mapper<any,any>): java.util.List;
				public static isContentUri(param0: globalAndroid.net.Uri): boolean;
				public static hasSameId(param0: org.json.JSONObject, param1: org.json.JSONObject): boolean;
				public static readStringMapFromParcel(param0: globalAndroid.os.Parcel): java.util.Map<string,string>;
				public static areObjectsEqual(param0: any, param1: any): boolean;
				public static isChromeOS(param0: globalAndroid.content.Context): boolean;
                public static hashSet(param0: native.Array<any>): java.util.HashSet;
				public static putUri(param0: globalAndroid.os.Bundle, param1: string, param2: globalAndroid.net.Uri): void;
				public static awaitGetGraphMeRequestWithCache(param0: string): org.json.JSONObject;
				public static getMetadataApplicationId(param0: globalAndroid.content.Context): string;
				public static getGraphMeRequestWithCacheAsync(param0: string, param1: com.facebook.internal.Utility.GraphMeRequestWithCacheCallback): void;
				public static getUriString(param0: globalAndroid.net.Uri): string;
				public static disconnectQuietly(param0: java.net.URLConnection): void;
				public static sha1hash(param0: native.Array<number>): string;
				public static stringsEqualOrEmpty(param0: string, param1: string): boolean;
				public static generateRandomString(param0: number): string;
				public static buildUri(param0: string, param1: string, param2: globalAndroid.os.Bundle): globalAndroid.net.Uri;
				public static jsonArrayToSet(param0: org.json.JSONArray): java.util.Set<string>;
				public static isNullOrEmpty(param0: string): boolean;
				public static putNonEmptyString(param0: globalAndroid.os.Bundle, param1: string, param2: string): void;
				public static unmodifiableCollection(param0: native.Array<any>): java.util.Collection;
			}
			export module Utility {
				export class GraphMeRequestWithCacheCallback {
					public static class: java.lang.Class<com.facebook.internal.Utility.GraphMeRequestWithCacheCallback>;
					/**
					 * Constructs a new instance of the com.facebook.internal.Utility$GraphMeRequestWithCacheCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onSuccess(param0: org.json.JSONObject): void;
						onFailure(param0: com.facebook.FacebookException): void;
					});
					public constructor();
					public onFailure(param0: com.facebook.FacebookException): void;
					public onSuccess(param0: org.json.JSONObject): void;
				}
				export class Mapper<T, K>  extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.internal.Utility.Mapper<any,any>>;
					/**
					 * Constructs a new instance of the com.facebook.internal.Utility$Mapper interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						apply(param0: T): K;
					});
					public constructor();
					public apply(param0: T): K;
				}
				export class PermissionsPair {
					public static class: java.lang.Class<com.facebook.internal.Utility.PermissionsPair>;
					public constructor(param0: java.util.List<string>, param1: java.util.List<string>);
					public getDeclinedPermissions(): java.util.List<string>;
					public getGrantedPermissions(): java.util.List<string>;
				}
				export class Predicate<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.facebook.internal.Utility.Predicate<any>>;
					/**
					 * Constructs a new instance of the com.facebook.internal.Utility$Predicate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						apply(param0: T): boolean;
					});
					public constructor();
					public apply(param0: T): boolean;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class Validate {
				public static class: java.lang.Class<com.facebook.internal.Validate>;
				public static hasPermission(param0: globalAndroid.content.Context, param1: string): boolean;
				public static hasContentProvider(param0: globalAndroid.content.Context): void;
				public static containsNoNullOrEmpty(param0: java.util.Collection<string>, param1: string): void;
				public static notEmpty(param0: java.util.Collection, param1: string): void;
				public static hasFacebookActivity(param0: globalAndroid.content.Context, param1: boolean): void;
				public static hasInternetPermissions(param0: globalAndroid.content.Context): void;
				public static containsNoNulls(param0: java.util.Collection, param1: string): void;
				public static hasWiFiPermission(param0: globalAndroid.content.Context): boolean;
				public static hasCustomTabRedirectActivity(param0: globalAndroid.content.Context): boolean;
				public constructor();
				public static hasFacebookActivity(param0: globalAndroid.content.Context): void;
				public static hasAppID(): string;
				public static hasBluetoothPermission(param0: globalAndroid.content.Context): boolean;
				public static checkCustomTabRedirectActivity(param0: globalAndroid.content.Context, param1: boolean): void;
				public static hasLocationPermission(param0: globalAndroid.content.Context): boolean;
				public static notNull(param0: any, param1: string): void;
				public static oneOf(param0: any, param1: string, param2: native.Array<any>): void;
				public static checkCustomTabRedirectActivity(param0: globalAndroid.content.Context): void;
				public static hasChangeWifiStatePermission(param0: globalAndroid.content.Context): boolean;
				public static runningOnUiThread(): void;
				public static hasInternetPermissions(param0: globalAndroid.content.Context, param1: boolean): void;
				public static notNullOrEmpty(param0: string, param1: string): void;
				public static hasClientToken(): string;
				public static notEmptyAndContainsNoNulls(param0: java.util.Collection, param1: string): void;
				public static sdkInitialized(): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class WebDialog {
				public static class: java.lang.Class<com.facebook.internal.WebDialog>;
				public isListenerCalled(): boolean;
				public getOnCompleteListener(): com.facebook.internal.WebDialog.OnCompleteListener;
				public isPageFinished(): boolean;
				public constructor(param0: globalAndroid.content.Context, param1: string);
				public static getWebDialogTheme(): number;
				public onKeyDown(param0: number, param1: globalAndroid.view.KeyEvent): boolean;
				public sendSuccessToListener(param0: globalAndroid.os.Bundle): void;
				public static initDefaultTheme(param0: globalAndroid.content.Context): void;
				public static newInstance(param0: globalAndroid.content.Context, param1: string, param2: globalAndroid.os.Bundle, param3: number, param4: com.facebook.internal.WebDialog.OnCompleteListener): com.facebook.internal.WebDialog;
				public parseResponseUri(param0: string): globalAndroid.os.Bundle;
				public dismiss(): void;
				public onWindowAttributesChanged(param0: globalAndroid.view.WindowManager.LayoutParams): void;
				public setExpectedRedirectUrl(param0: string): void;
				public setOnCompleteListener(param0: com.facebook.internal.WebDialog.OnCompleteListener): void;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public onStart(): void;
				public sendErrorToListener(param0: java.lang.Throwable): void;
				public static setWebDialogTheme(param0: number): void;
				public resize(): void;
				public onDetachedFromWindow(): void;
				public cancel(): void;
				public onStop(): void;
				public getWebView(): globalAndroid.webkit.WebView;
				public onAttachedToWindow(): void;
			}
			export module WebDialog {
				export class Builder {
					public static class: java.lang.Class<com.facebook.internal.WebDialog.Builder>;
					public constructor(param0: globalAndroid.content.Context, param1: string, param2: globalAndroid.os.Bundle);
					public getTheme(): number;
					public getListener(): com.facebook.internal.WebDialog.OnCompleteListener;
					public getParameters(): globalAndroid.os.Bundle;
					public constructor(param0: globalAndroid.content.Context, param1: string, param2: string, param3: globalAndroid.os.Bundle);
					public getApplicationId(): string;
					public getContext(): globalAndroid.content.Context;
					public setTheme(param0: number): com.facebook.internal.WebDialog.Builder;
					public setOnCompleteListener(param0: com.facebook.internal.WebDialog.OnCompleteListener): com.facebook.internal.WebDialog.Builder;
					public build(): com.facebook.internal.WebDialog;
				}
				export class DialogWebViewClient {
					public static class: java.lang.Class<com.facebook.internal.WebDialog.DialogWebViewClient>;
					public onPageFinished(param0: globalAndroid.webkit.WebView, param1: string): void;
					public onReceivedSslError(param0: globalAndroid.webkit.WebView, param1: globalAndroid.webkit.SslErrorHandler, param2: globalAndroid.net.http.SslError): void;
					public shouldOverrideUrlLoading(param0: globalAndroid.webkit.WebView, param1: string): boolean;
					public onReceivedError(param0: globalAndroid.webkit.WebView, param1: number, param2: string, param3: string): void;
					public onPageStarted(param0: globalAndroid.webkit.WebView, param1: string, param2: globalAndroid.graphics.Bitmap): void;
				}
				export class OnCompleteListener {
					public static class: java.lang.Class<com.facebook.internal.WebDialog.OnCompleteListener>;
					/**
					 * Constructs a new instance of the com.facebook.internal.WebDialog$OnCompleteListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onComplete(param0: globalAndroid.os.Bundle, param1: com.facebook.FacebookException): void;
					});
					public constructor();
					public onComplete(param0: globalAndroid.os.Bundle, param1: com.facebook.FacebookException): void;
				}
				export class UploadStagingResourcesTask extends globalAndroid.os.AsyncTask<java.lang.Void,java.lang.Void,native.Array<string>> {
					public static class: java.lang.Class<com.facebook.internal.WebDialog.UploadStagingResourcesTask>;
					public doInBackground(param0: native.Array<java.lang.Void>): native.Array<string>;
					public onPostExecute(param0: native.Array<string>): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module internal {
			export class WorkQueue {
				public static class: java.lang.Class<com.facebook.internal.WorkQueue>;
				public static DEFAULT_MAX_CONCURRENT: number;
				public addActiveWorkItem(param0: java.lang.Runnable): com.facebook.internal.WorkQueue.WorkItem;
				public constructor(param0: number);
				public validate(): void;
				public addActiveWorkItem(param0: java.lang.Runnable, param1: boolean): com.facebook.internal.WorkQueue.WorkItem;
				public constructor(param0: number, param1: java.util.concurrent.Executor);
				public constructor();
			}
			export module WorkQueue {
				export class WorkItem {
					public static class: java.lang.Class<com.facebook.internal.WorkQueue.WorkItem>;
					/**
					 * Constructs a new instance of the com.facebook.internal.WorkQueue$WorkItem interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						cancel(): boolean;
						isRunning(): boolean;
						moveToFront(): void;
					});
					public constructor();
					public cancel(): boolean;
					public isRunning(): boolean;
					public moveToFront(): void;
				}
				export class WorkNode extends com.facebook.internal.WorkQueue.WorkItem {
					public static class: java.lang.Class<com.facebook.internal.WorkQueue.WorkNode>;
					public cancel(): boolean;
					public isRunning(): boolean;
					public moveToFront(): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module login {
			export class BuildConfig {
				public static class: java.lang.Class<com.facebook.login.BuildConfig>;
				public static DEBUG: boolean;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module login {
			export class CustomTabLoginMethodHandler extends com.facebook.login.WebLoginMethodHandler {
				public static class: java.lang.Class<com.facebook.login.CustomTabLoginMethodHandler>;
				public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.login.CustomTabLoginMethodHandler>;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public putChallengeParam(param0: org.json.JSONObject): void;
				public describeContents(): number;
				public getSSODevice(): string;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module login {
			export class DefaultAudience {
				public static class: java.lang.Class<com.facebook.login.DefaultAudience>;
				public static NONE: com.facebook.login.DefaultAudience;
				public static ONLY_ME: com.facebook.login.DefaultAudience;
				public static FRIENDS: com.facebook.login.DefaultAudience;
				public static EVERYONE: com.facebook.login.DefaultAudience;
				public static values(): native.Array<com.facebook.login.DefaultAudience>;
				public getNativeProtocolAudience(): string;
				public static valueOf(param0: string): com.facebook.login.DefaultAudience;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module login {
			export class DeviceAuthDialog {
				public static class: java.lang.Class<com.facebook.login.DeviceAuthDialog>;
				public onDismiss(param0: globalAndroid.content.DialogInterface): void;
				public startLogin(param0: com.facebook.login.LoginClient.Request): void;
				public onError(param0: com.facebook.FacebookException): void;
				public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
				public onDestroy(): void;
				public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
				public onCreateDialog(param0: globalAndroid.os.Bundle): globalAndroid.app.Dialog;
				public initializeContentView(param0: boolean): globalAndroid.view.View;
				public getLayoutResId(param0: boolean): number;
				public constructor();
			}
			export module DeviceAuthDialog {
				export class RequestState {
					public static class: java.lang.Class<com.facebook.login.DeviceAuthDialog.RequestState>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.login.DeviceAuthDialog.RequestState>;
					public getRequestCode(): string;
					public constructor(param0: globalAndroid.os.Parcel);
					public getUserCode(): string;
					public getInterval(): number;
					public setInterval(param0: number): void;
					public setLastPoll(param0: number): void;
					public getAuthorizationUri(): string;
					public withinLastRefreshWindow(): boolean;
					public describeContents(): number;
					public setRequestCode(param0: string): void;
					public setUserCode(param0: string): void;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module login {
			export class DeviceAuthMethodHandler extends com.facebook.login.LoginMethodHandler {
				public static class: java.lang.Class<com.facebook.login.DeviceAuthMethodHandler>;
				public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.login.DeviceAuthMethodHandler>;
				public createDeviceAuthDialog(): com.facebook.login.DeviceAuthDialog;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public onSuccess(param0: string, param1: string, param2: string, param3: java.util.Collection<string>, param4: java.util.Collection<string>, param5: com.facebook.AccessTokenSource, param6: java.util.Date, param7: java.util.Date): void;
				public static getBackgroundExecutor(): java.util.concurrent.ScheduledThreadPoolExecutor;
				public onCancel(): void;
				public describeContents(): number;
				public onError(param0: java.lang.Exception): void;
				public constructor(param0: globalAndroid.os.Parcel);
			}
		}
	}
}

declare module com {
	export module facebook {
		export module login {
			export class DeviceLoginManager extends com.facebook.login.LoginManager {
				public static class: java.lang.Class<com.facebook.login.DeviceLoginManager>;
				public getDeviceRedirectUri(): globalAndroid.net.Uri;
				public createLoginRequest(param0: java.util.Collection<string>): com.facebook.login.LoginClient.Request;
				public setDeviceRedirectUri(param0: globalAndroid.net.Uri): void;
				public static getInstance(): com.facebook.login.DeviceLoginManager;
				public static getInstance(): com.facebook.login.LoginManager;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module login {
			export class FacebookLiteLoginMethodHandler extends com.facebook.login.NativeAppLoginMethodHandler {
				public static class: java.lang.Class<com.facebook.login.FacebookLiteLoginMethodHandler>;
				public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.login.FacebookLiteLoginMethodHandler>;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public describeContents(): number;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module login {
			export class GetTokenClient extends com.facebook.internal.PlatformServiceClient {
				public static class: java.lang.Class<com.facebook.login.GetTokenClient>;
				public populateRequestBundle(param0: globalAndroid.os.Bundle): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module login {
			export class GetTokenLoginMethodHandler extends com.facebook.login.LoginMethodHandler {
				public static class: java.lang.Class<com.facebook.login.GetTokenLoginMethodHandler>;
				public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.login.GetTokenLoginMethodHandler>;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public describeContents(): number;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module login {
			export class KatanaProxyLoginMethodHandler extends com.facebook.login.NativeAppLoginMethodHandler {
				public static class: java.lang.Class<com.facebook.login.KatanaProxyLoginMethodHandler>;
				public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.login.KatanaProxyLoginMethodHandler>;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public describeContents(): number;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module login {
			export class Login {
				public static class: java.lang.Class<com.facebook.login.Login>;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module login {
			export class LoginBehavior {
				public static class: java.lang.Class<com.facebook.login.LoginBehavior>;
				public static NATIVE_WITH_FALLBACK: com.facebook.login.LoginBehavior;
				public static NATIVE_ONLY: com.facebook.login.LoginBehavior;
				public static KATANA_ONLY: com.facebook.login.LoginBehavior;
				public static WEB_ONLY: com.facebook.login.LoginBehavior;
				public static WEB_VIEW_ONLY: com.facebook.login.LoginBehavior;
				public static DEVICE_AUTH: com.facebook.login.LoginBehavior;
				public static values(): native.Array<com.facebook.login.LoginBehavior>;
				public static valueOf(param0: string): com.facebook.login.LoginBehavior;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module login {
			export class LoginClient {
				public static class: java.lang.Class<com.facebook.login.LoginClient>;
				public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.login.LoginClient>;
				public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): boolean;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public static getLoginRequestCode(): number;
				public constructor(param0: globalAndroid.support.v4.app.Fragment);
				public describeContents(): number;
				public getPendingRequest(): com.facebook.login.LoginClient.Request;
				public getFragment(): globalAndroid.support.v4.app.Fragment;
				public getHandlersToTry(param0: com.facebook.login.LoginClient.Request): native.Array<com.facebook.login.LoginMethodHandler>;
				public constructor(param0: globalAndroid.os.Parcel);
			}
			export module LoginClient {
				export class BackgroundProcessingListener {
					public static class: java.lang.Class<com.facebook.login.LoginClient.BackgroundProcessingListener>;
					/**
					 * Constructs a new instance of the com.facebook.login.LoginClient$BackgroundProcessingListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onBackgroundProcessingStarted(): void;
						onBackgroundProcessingStopped(): void;
					});
					public constructor();
					public onBackgroundProcessingStarted(): void;
					public onBackgroundProcessingStopped(): void;
				}
				export class OnCompletedListener {
					public static class: java.lang.Class<com.facebook.login.LoginClient.OnCompletedListener>;
					/**
					 * Constructs a new instance of the com.facebook.login.LoginClient$OnCompletedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onCompleted(param0: com.facebook.login.LoginClient.Result): void;
					});
					public constructor();
					public onCompleted(param0: com.facebook.login.LoginClient.Result): void;
				}
				export class Request {
					public static class: java.lang.Class<com.facebook.login.LoginClient.Request>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.login.LoginClient.Request>;
					public describeContents(): number;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				}
				export class Result {
					public static class: java.lang.Class<com.facebook.login.LoginClient.Result>;
					public loggingExtras: java.util.Map<string,string>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.login.LoginClient.Result>;
					public describeContents(): number;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				}
				export module Result {
					export class Code {
						public static class: java.lang.Class<com.facebook.login.LoginClient.Result.Code>;
						public static SUCCESS: com.facebook.login.LoginClient.Result.Code;
						public static CANCEL: com.facebook.login.LoginClient.Result.Code;
						public static ERROR: com.facebook.login.LoginClient.Result.Code;
						public static values(): native.Array<com.facebook.login.LoginClient.Result.Code>;
						public static valueOf(param0: string): com.facebook.login.LoginClient.Result.Code;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module login {
			export class LoginFragment {
				public static class: java.lang.Class<com.facebook.login.LoginFragment>;
				public createLoginClient(): com.facebook.login.LoginClient;
				public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public onResume(): void;
				public onPause(): void;
				public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
				public onDestroy(): void;
				public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module login {
			export class LoginLogger {
				public static class: java.lang.Class<com.facebook.login.LoginLogger>;
				public logLoginStatusStart(param0: string): void;
				public logAuthorizationMethodStart(param0: string, param1: string): void;
				public logAuthorizationMethodComplete(param0: string, param1: string, param2: string, param3: string, param4: string, param5: java.util.Map<string,string>): void;
				public logLoginStatusError(param0: string, param1: java.lang.Exception): void;
				public logAuthorizationMethodNotTried(param0: string, param1: string): void;
				public getApplicationId(): string;
				public logStartLogin(param0: com.facebook.login.LoginClient.Request): void;
				public logUnexpectedError(param0: string, param1: string, param2: string): void;
				public logLoginStatusFailure(param0: string): void;
				public logLoginStatusSuccess(param0: string): void;
				public logCompleteLogin(param0: string, param1: java.util.Map<string,string>, param2: com.facebook.login.LoginClient.Result.Code, param3: java.util.Map<string,string>, param4: java.lang.Exception): void;
				public logUnexpectedError(param0: string, param1: string): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module login {
			export class LoginManager {
				public static class: java.lang.Class<com.facebook.login.LoginManager>;
				public setLoginBehavior(param0: com.facebook.login.LoginBehavior): com.facebook.login.LoginManager;
				public logInWithPublishPermissions(param0: globalAndroid.app.Activity, param1: java.util.Collection<string>): void;
				public logInWithPublishPermissions(param0: globalAndroid.support.v4.app.Fragment, param1: java.util.Collection<string>): void;
				public getDefaultAudience(): com.facebook.login.DefaultAudience;
				public retrieveLoginStatus(param0: globalAndroid.content.Context, param1: com.facebook.LoginStatusCallback): void;
				public logInWithReadPermissions(param0: globalAndroid.support.v4.app.Fragment, param1: java.util.Collection<string>): void;
				public getLoginBehavior(): com.facebook.login.LoginBehavior;
				public unregisterCallback(param0: com.facebook.CallbackManager): void;
				public setDefaultAudience(param0: com.facebook.login.DefaultAudience): com.facebook.login.LoginManager;
				public setAuthType(param0: string): com.facebook.login.LoginManager;
				public logInWithReadPermissions(param0: globalAndroid.app.Fragment, param1: java.util.Collection<string>): void;
				public registerCallback(param0: com.facebook.CallbackManager, param1: com.facebook.FacebookCallback<com.facebook.login.LoginResult>): void;
				public logOut(): void;
				public resolveError(param0: globalAndroid.support.v4.app.Fragment, param1: com.facebook.GraphResponse): void;
				public resolveError(param0: globalAndroid.app.Fragment, param1: com.facebook.GraphResponse): void;
				public createLoginRequest(param0: java.util.Collection<string>): com.facebook.login.LoginClient.Request;
				public retrieveLoginStatus(param0: globalAndroid.content.Context, param1: number, param2: com.facebook.LoginStatusCallback): void;
				public getFacebookActivityIntent(param0: com.facebook.login.LoginClient.Request): globalAndroid.content.Intent;
				public getAuthType(): string;
				public logInWithReadPermissions(param0: globalAndroid.app.Activity, param1: java.util.Collection<string>): void;
				public static getInstance(): com.facebook.login.LoginManager;
				public resolveError(param0: globalAndroid.app.Activity, param1: com.facebook.GraphResponse): void;
				public logInWithPublishPermissions(param0: globalAndroid.app.Fragment, param1: java.util.Collection<string>): void;
			}
			export module LoginManager {
				export class ActivityStartActivityDelegate extends com.facebook.login.StartActivityDelegate {
					public static class: java.lang.Class<com.facebook.login.LoginManager.ActivityStartActivityDelegate>;
					public startActivityForResult(param0: globalAndroid.content.Intent, param1: number): void;
					public getActivityContext(): globalAndroid.app.Activity;
				}
				export class FragmentStartActivityDelegate extends com.facebook.login.StartActivityDelegate {
					public static class: java.lang.Class<com.facebook.login.LoginManager.FragmentStartActivityDelegate>;
					public startActivityForResult(param0: globalAndroid.content.Intent, param1: number): void;
					public getActivityContext(): globalAndroid.app.Activity;
				}
				export class LoginLoggerHolder {
					public static class: java.lang.Class<com.facebook.login.LoginManager.LoginLoggerHolder>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module login {
			export abstract class LoginMethodHandler {
				public static class: java.lang.Class<com.facebook.login.LoginMethodHandler>;
				public loginClient: com.facebook.login.LoginClient;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public getClientState(param0: string): string;
				public addLoggingExtra(param0: string, param1: any): void;
				public logWebLoginCompleted(param0: string): void;
				public static createAccessTokenFromWebBundle(param0: java.util.Collection<string>, param1: globalAndroid.os.Bundle, param2: com.facebook.AccessTokenSource, param3: string): com.facebook.AccessToken;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module login {
			export class LoginResult {
				public static class: java.lang.Class<com.facebook.login.LoginResult>;
				public constructor(param0: com.facebook.AccessToken, param1: java.util.Set<string>, param2: java.util.Set<string>);
				public getRecentlyGrantedPermissions(): java.util.Set<string>;
				public getRecentlyDeniedPermissions(): java.util.Set<string>;
				public getAccessToken(): com.facebook.AccessToken;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module login {
			export class LoginStatusClient extends com.facebook.internal.PlatformServiceClient {
				public static class: java.lang.Class<com.facebook.login.LoginStatusClient>;
				public populateRequestBundle(param0: globalAndroid.os.Bundle): void;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module login {
			export abstract class NativeAppLoginMethodHandler extends com.facebook.login.LoginMethodHandler {
				public static class: java.lang.Class<com.facebook.login.NativeAppLoginMethodHandler>;
				public tryIntent(param0: globalAndroid.content.Intent, param1: number): boolean;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module login {
			export class StartActivityDelegate {
				public static class: java.lang.Class<com.facebook.login.StartActivityDelegate>;
				/**
				 * Constructs a new instance of the com.facebook.login.StartActivityDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					startActivityForResult(param0: globalAndroid.content.Intent, param1: number): void;
					getActivityContext(): globalAndroid.app.Activity;
				});
				public constructor();
				public startActivityForResult(param0: globalAndroid.content.Intent, param1: number): void;
				public getActivityContext(): globalAndroid.app.Activity;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module login {
			export abstract class WebLoginMethodHandler extends com.facebook.login.LoginMethodHandler {
				public static class: java.lang.Class<com.facebook.login.WebLoginMethodHandler>;
				public getParameters(param0: com.facebook.login.LoginClient.Request): globalAndroid.os.Bundle;
				public addExtraParameters(param0: globalAndroid.os.Bundle, param1: com.facebook.login.LoginClient.Request): globalAndroid.os.Bundle;
				public onComplete(param0: com.facebook.login.LoginClient.Request, param1: globalAndroid.os.Bundle, param2: com.facebook.FacebookException): void;
				public getSSODevice(): string;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module login {
			export class WebViewLoginMethodHandler extends com.facebook.login.WebLoginMethodHandler {
				public static class: java.lang.Class<com.facebook.login.WebViewLoginMethodHandler>;
				public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.login.WebViewLoginMethodHandler>;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public describeContents(): number;
			}
			export module WebViewLoginMethodHandler {
				export class AuthDialogBuilder extends com.facebook.internal.WebDialog.Builder {
					public static class: java.lang.Class<com.facebook.login.WebViewLoginMethodHandler.AuthDialogBuilder>;
					public setAuthType(param0: string): com.facebook.login.WebViewLoginMethodHandler.AuthDialogBuilder;
					public constructor(param0: globalAndroid.content.Context, param1: string, param2: globalAndroid.os.Bundle);
					public setIsRerequest(param0: boolean): com.facebook.login.WebViewLoginMethodHandler.AuthDialogBuilder;
					public constructor(param0: globalAndroid.content.Context, param1: string, param2: string, param3: globalAndroid.os.Bundle);
					public setE2E(param0: string): com.facebook.login.WebViewLoginMethodHandler.AuthDialogBuilder;
					public setIsChromeOS(param0: boolean): com.facebook.login.WebViewLoginMethodHandler.AuthDialogBuilder;
					public build(): com.facebook.internal.WebDialog;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module login {
			export module widget {
				export class DeviceLoginButton extends com.facebook.login.widget.LoginButton {
					public static class: java.lang.Class<com.facebook.login.widget.DeviceLoginButton>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public getDeviceRedirectUri(): globalAndroid.net.Uri;
					public getNewLoginClickListener(): com.facebook.login.widget.LoginButton.LoginClickListener;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number, param4: string, param5: string);
					public setDeviceRedirectUri(param0: globalAndroid.net.Uri): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				}
				export module DeviceLoginButton {
					export class DeviceLoginClickListener extends com.facebook.login.widget.LoginButton.LoginClickListener {
						public static class: java.lang.Class<com.facebook.login.widget.DeviceLoginButton.DeviceLoginClickListener>;
						public getLoginManager(): com.facebook.login.LoginManager;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module login {
			export module widget {
				export class LoginButton extends com.facebook.FacebookButtonBase {
					public static class: java.lang.Class<com.facebook.login.widget.LoginButton>;
					public setToolTipStyle(param0: com.facebook.login.widget.ToolTipPopup.Style): void;
					public onAttachedToWindow(): void;
					public onVisibilityChanged(param0: globalAndroid.view.View, param1: number): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public clearPermissions(): void;
					public getLoginBehavior(): com.facebook.login.LoginBehavior;
					public getDefaultStyleResource(): number;
					public setReadPermissions(param0: native.Array<string>): void;
					public getDefaultRequestCode(): number;
					public setReadPermissions(param0: java.util.List<string>): void;
					public setToolTipDisplayTime(param0: number): void;
					public getDefaultAudience(): com.facebook.login.DefaultAudience;
					public registerCallback(param0: com.facebook.CallbackManager, param1: com.facebook.FacebookCallback<com.facebook.login.LoginResult>): void;
					public onDetachedFromWindow(): void;
					public setAuthType(param0: string): void;
					public onMeasure(param0: number, param1: number): void;
					public onDraw(param0: globalAndroid.graphics.Canvas): void;
					public getToolTipMode(): com.facebook.login.widget.LoginButton.ToolTipMode;
					public getToolTipDisplayTime(): number;
					public dismissToolTip(): void;
					public configureButton(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public setDefaultAudience(param0: com.facebook.login.DefaultAudience): void;
					public getAuthType(): string;
					public constructor(param0: globalAndroid.content.Context);
					public getNewLoginClickListener(): com.facebook.login.widget.LoginButton.LoginClickListener;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number, param4: string, param5: string);
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					public setPublishPermissions(param0: native.Array<string>): void;
					public setToolTipMode(param0: com.facebook.login.widget.LoginButton.ToolTipMode): void;
					public setPublishPermissions(param0: java.util.List<string>): void;
					public setLoginBehavior(param0: com.facebook.login.LoginBehavior): void;
					public unregisterCallback(param0: com.facebook.CallbackManager): void;
				}
				export module LoginButton {
					export class LoginButtonProperties {
						public static class: java.lang.Class<com.facebook.login.widget.LoginButton.LoginButtonProperties>;
						public clearPermissions(): void;
						public setLoginBehavior(param0: com.facebook.login.LoginBehavior): void;
						public getDefaultAudience(): com.facebook.login.DefaultAudience;
						public setPublishPermissions(param0: java.util.List<string>): void;
						public getAuthType(): string;
						public setDefaultAudience(param0: com.facebook.login.DefaultAudience): void;
						public setAuthType(param0: string): void;
						public setReadPermissions(param0: java.util.List<string>): void;
						public getLoginBehavior(): com.facebook.login.LoginBehavior;
					}
					export class LoginClickListener {
						public static class: java.lang.Class<com.facebook.login.widget.LoginButton.LoginClickListener>;
						public constructor(param0: com.facebook.login.widget.LoginButton);
						public performLogin(): void;
						public performLogout(param0: globalAndroid.content.Context): void;
						public onClick(param0: globalAndroid.view.View): void;
						public getLoginManager(): com.facebook.login.LoginManager;
					}
					export class ToolTipMode {
						public static class: java.lang.Class<com.facebook.login.widget.LoginButton.ToolTipMode>;
						public static AUTOMATIC: com.facebook.login.widget.LoginButton.ToolTipMode;
						public static DISPLAY_ALWAYS: com.facebook.login.widget.LoginButton.ToolTipMode;
						public static NEVER_DISPLAY: com.facebook.login.widget.LoginButton.ToolTipMode;
						public static DEFAULT: com.facebook.login.widget.LoginButton.ToolTipMode;
						public static values(): native.Array<com.facebook.login.widget.LoginButton.ToolTipMode>;
						public static valueOf(param0: string): com.facebook.login.widget.LoginButton.ToolTipMode;
						public static fromInt(param0: number): com.facebook.login.widget.LoginButton.ToolTipMode;
						public toString(): string;
						public getValue(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module login {
			export module widget {
				export class ProfilePictureView {
					public static class: java.lang.Class<com.facebook.login.widget.ProfilePictureView>;
					public static TAG: string;
					public static CUSTOM: number;
					public static SMALL: number;
					public static NORMAL: number;
					public static LARGE: number;
					public onDetachedFromWindow(): void;
					public onMeasure(param0: number, param1: number): void;
					public getPresetSize(): number;
					public setProfileId(param0: string): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public getProfileId(): string;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public setOnErrorListener(param0: com.facebook.login.widget.ProfilePictureView.OnErrorListener): void;
					public setCropped(param0: boolean): void;
					public getOnErrorListener(): com.facebook.login.widget.ProfilePictureView.OnErrorListener;
					public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					public onSaveInstanceState(): globalAndroid.os.Parcelable;
					public setPresetSize(param0: number): void;
					public isCropped(): boolean;
					public setDefaultProfilePicture(param0: globalAndroid.graphics.Bitmap): void;
				}
				export module ProfilePictureView {
					export class OnErrorListener {
						public static class: java.lang.Class<com.facebook.login.widget.ProfilePictureView.OnErrorListener>;
						/**
						 * Constructs a new instance of the com.facebook.login.widget.ProfilePictureView$OnErrorListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onError(param0: com.facebook.FacebookException): void;
						});
						public constructor();
						public onError(param0: com.facebook.FacebookException): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module login {
			export module widget {
				export class ToolTipPopup {
					public static class: java.lang.Class<com.facebook.login.widget.ToolTipPopup>;
					public static DEFAULT_POPUP_DISPLAY_TIME: number;
					public show(): void;
					public setStyle(param0: com.facebook.login.widget.ToolTipPopup.Style): void;
					public setNuxDisplayTime(param0: number): void;
					public constructor(param0: string, param1: globalAndroid.view.View);
					public dismiss(): void;
				}
				export module ToolTipPopup {
					export class PopupContentView {
						public static class: java.lang.Class<com.facebook.login.widget.ToolTipPopup.PopupContentView>;
						public showTopArrow(): void;
						public showBottomArrow(): void;
						public constructor(param0: com.facebook.login.widget.ToolTipPopup, param1: globalAndroid.content.Context);
					}
					export class Style {
						public static class: java.lang.Class<com.facebook.login.widget.ToolTipPopup.Style>;
						public static BLUE: com.facebook.login.widget.ToolTipPopup.Style;
						public static BLACK: com.facebook.login.widget.ToolTipPopup.Style;
						public static valueOf(param0: string): com.facebook.login.widget.ToolTipPopup.Style;
						public static values(): native.Array<com.facebook.login.widget.ToolTipPopup.Style>;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module marketing {
			export class BuildConfig {
				public static class: java.lang.Class<com.facebook.marketing.BuildConfig>;
				public static DEBUG: boolean;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module marketing {
			export class CodelessActivityLifecycleTracker {
				public static class: java.lang.Class<com.facebook.marketing.CodelessActivityLifecycleTracker>;
				public static startTracking(param0: globalAndroid.app.Application, param1: string): void;
				public static checkCodelessSession(param0: string, param1: com.facebook.marketing.internal.MarketingLogger): void;
				public static getIsAppIndexingEnabled(): boolean;
				public static updateAppIndexing(param0: java.lang.Boolean): void;
				public static getCurrentDeviceSessionID(): string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module marketing {
			export class FacebookUninstallTracker {
				public static class: java.lang.Class<com.facebook.marketing.FacebookUninstallTracker>;
				public static updateDeviceToken(param0: string): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module marketing {
			export class Marketing {
				public static class: java.lang.Class<com.facebook.marketing.Marketing>;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module marketing {
			export class ViewIndexer {
				public static class: java.lang.Class<com.facebook.marketing.ViewIndexer>;
				public constructor(param0: globalAndroid.app.Activity);
				public schedule(): void;
				public unschedule(): void;
			}
			export module ViewIndexer {
				export class ScreenshotTaker extends java.util.concurrent.Callable<string> {
					public static class: java.lang.Class<com.facebook.marketing.ViewIndexer.ScreenshotTaker>;
					public call(): string;
					public constructor(param0: globalAndroid.view.View);
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module marketing {
			export class ViewIndexingTrigger {
				public static class: java.lang.Class<com.facebook.marketing.ViewIndexingTrigger>;
				public setOnShakeListener(param0: com.facebook.marketing.ViewIndexingTrigger.OnShakeListener): void;
				public resetCount(): void;
				public onSensorChanged(param0: globalAndroid.hardware.SensorEvent): void;
				public onAccuracyChanged(param0: globalAndroid.hardware.Sensor, param1: number): void;
				public constructor();
			}
			export module ViewIndexingTrigger {
				export class OnShakeListener {
					public static class: java.lang.Class<com.facebook.marketing.ViewIndexingTrigger.OnShakeListener>;
					/**
					 * Constructs a new instance of the com.facebook.marketing.ViewIndexingTrigger$OnShakeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onShake(param0: number): void;
					});
					public constructor();
					public onShake(param0: number): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module marketing {
			export module internal {
				export class ButtonIndexer {
					public static class: java.lang.Class<com.facebook.marketing.internal.ButtonIndexer>;
					public add(param0: globalAndroid.app.Activity): void;
					public remove(param0: globalAndroid.app.Activity): void;
					public constructor();
				}
				export module ButtonIndexer {
					export class ViewProcessor {
						public static class: java.lang.Class<com.facebook.marketing.internal.ButtonIndexer.ViewProcessor>;
						public run(): void;
						public attachListeners(param0: globalAndroid.view.View): void;
						public onScrollChanged(): void;
						public onGlobalLayout(): void;
						public getClickableElementsOfView(param0: globalAndroid.view.View, param1: number, param2: string): void;
						public constructor(param0: globalAndroid.view.View, param1: string, param2: java.util.HashSet<string>, param3: globalAndroid.os.Handler);
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module marketing {
			export module internal {
				export class ButtonIndexingEventListener {
					public static class: java.lang.Class<com.facebook.marketing.internal.ButtonIndexingEventListener>;
					public constructor();
					public static getAccessibilityDelegate(param0: globalAndroid.view.View, param1: string): com.facebook.marketing.internal.ButtonIndexingEventListener.ButtonIndexingAccessibilityDelegate;
				}
				export module ButtonIndexingEventListener {
					export class ButtonIndexingAccessibilityDelegate extends com.facebook.appevents.codeless.CodelessLoggingEventListener.AutoLoggingAccessibilityDelegate {
						public static class: java.lang.Class<com.facebook.marketing.internal.ButtonIndexingEventListener.ButtonIndexingAccessibilityDelegate>;
						public constructor();
						public constructor(param0: globalAndroid.view.View, param1: string);
						public sendAccessibilityEvent(param0: globalAndroid.view.View, param1: number): void;
						public constructor(param0: com.facebook.appevents.codeless.internal.EventBinding, param1: globalAndroid.view.View, param2: globalAndroid.view.View);
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module marketing {
			export module internal {
				export class ButtonIndexingLogger {
					public static class: java.lang.Class<com.facebook.marketing.internal.ButtonIndexingLogger>;
					public constructor();
					public static logAllIndexing(param0: string, param1: java.util.HashMap<string,java.lang.ref.WeakReference<globalAndroid.view.View>>, param2: globalAndroid.content.Context): void;
					public static logIndexing(param0: string, param1: globalAndroid.view.View, param2: string, param3: globalAndroid.content.Context): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module marketing {
			export module internal {
				export class Constants {
					public static class: java.lang.Class<com.facebook.marketing.internal.Constants>;
					public static PLATFORM: string;
					public static APP_INDEXING_SHAKING_THRESHOLD: number;
					public static APP_INDEXING_SCHEDULE_INTERVAL_MS: number;
					public static APP_INDEXING_ENABLED: string;
					public static DEVICE_SESSION_ID: string;
					public static EXTINFO: string;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module marketing {
			export module internal {
				export class MarketingInitProvider {
					public static class: java.lang.Class<com.facebook.marketing.internal.MarketingInitProvider>;
					public query(param0: globalAndroid.net.Uri, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string): globalAndroid.database.Cursor;
					public update(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues, param2: string, param3: native.Array<string>): number;
					public constructor();
					public onCreate(): boolean;
					public getType(param0: globalAndroid.net.Uri): string;
					public delete(param0: globalAndroid.net.Uri, param1: string, param2: native.Array<string>): number;
					public insert(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues): globalAndroid.net.Uri;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module marketing {
			export module internal {
				export class MarketingLogger {
					public static class: java.lang.Class<com.facebook.marketing.internal.MarketingLogger>;
					public logIndexingStart(param0: string): void;
					public logSessionReady(): void;
					public logGestureTriggered(): void;
					public logIndexingComplete(param0: string): void;
					public logCodelessInitialized(): void;
					public constructor(param0: globalAndroid.content.Context, param1: string);
					public logIndexingCancelled(param0: string): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module marketing {
			export module internal {
				export class MarketingUtils {
					public static class: java.lang.Class<com.facebook.marketing.internal.MarketingUtils>;
					public constructor();
					public static getAppVersion(): string;
					public static normalizePrice(param0: string): number;
					public static isEmulator(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module marketing {
			export module internal {
				export class RemoteConfig {
					public static class: java.lang.Class<com.facebook.marketing.internal.RemoteConfig>;
					public constructor(param0: boolean);
					public getEnableButtonIndexing(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module marketing {
			export module internal {
				export class RemoteConfigManager {
					public static class: java.lang.Class<com.facebook.marketing.internal.RemoteConfigManager>;
					public static loadRemoteConfig(): void;
					public constructor();
					public static getRemoteConfigWithoutQuery(param0: string): com.facebook.marketing.internal.RemoteConfig;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module messenger {
			export class BuildConfig {
				public static class: java.lang.Class<com.facebook.messenger.BuildConfig>;
				public static DEBUG: boolean;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module messenger {
			export class Messenger {
				public static class: java.lang.Class<com.facebook.messenger.Messenger>;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module messenger {
			export class MessengerThreadParams {
				public static class: java.lang.Class<com.facebook.messenger.MessengerThreadParams>;
				public origin: com.facebook.messenger.MessengerThreadParams.Origin;
				public threadToken: string;
				public metadata: string;
				public participants: java.util.List<string>;
				public constructor(param0: com.facebook.messenger.MessengerThreadParams.Origin, param1: string, param2: string, param3: java.util.List<string>);
			}
			export module MessengerThreadParams {
				export class Origin {
					public static class: java.lang.Class<com.facebook.messenger.MessengerThreadParams.Origin>;
					public static REPLY_FLOW: com.facebook.messenger.MessengerThreadParams.Origin;
					public static COMPOSE_FLOW: com.facebook.messenger.MessengerThreadParams.Origin;
					public static UNKNOWN: com.facebook.messenger.MessengerThreadParams.Origin;
					public static valueOf(param0: string): com.facebook.messenger.MessengerThreadParams.Origin;
					public static values(): native.Array<com.facebook.messenger.MessengerThreadParams.Origin>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module messenger {
			export class MessengerUtils {
				public static class: java.lang.Class<com.facebook.messenger.MessengerUtils>;
				public static PACKAGE_NAME: string;
				public static EXTRA_PROTOCOL_VERSION: string;
				public static EXTRA_APP_ID: string;
				public static EXTRA_REPLY_TOKEN_KEY: string;
				public static EXTRA_THREAD_TOKEN_KEY: string;
				public static EXTRA_METADATA: string;
				public static EXTRA_EXTERNAL_URI: string;
				public static EXTRA_PARTICIPANTS: string;
				public static EXTRA_IS_REPLY: string;
				public static EXTRA_IS_COMPOSE: string;
				public static PROTOCOL_VERSION_20150314: number;
				public static ORCA_THREAD_CATEGORY_20150314: string;
				public static openMessengerInPlayStore(param0: globalAndroid.content.Context): void;
				public static shareToMessenger(param0: globalAndroid.app.Activity, param1: number, param2: com.facebook.messenger.ShareToMessengerParams): void;
				public static hasMessengerInstalled(param0: globalAndroid.content.Context): boolean;
				public static finishShareToMessenger(param0: globalAndroid.app.Activity, param1: com.facebook.messenger.ShareToMessengerParams): void;
				public static getMessengerThreadParamsForIntent(param0: globalAndroid.content.Intent): com.facebook.messenger.MessengerThreadParams;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module messenger {
			export class ShareToMessengerParams {
				public static class: java.lang.Class<com.facebook.messenger.ShareToMessengerParams>;
				public static VALID_URI_SCHEMES: java.util.Set<string>;
				public static VALID_MIME_TYPES: java.util.Set<string>;
				public static VALID_EXTERNAL_URI_SCHEMES: java.util.Set<string>;
				public uri: globalAndroid.net.Uri;
				public mimeType: string;
				public metaData: string;
				public externalUri: globalAndroid.net.Uri;
				public static newBuilder(param0: globalAndroid.net.Uri, param1: string): com.facebook.messenger.ShareToMessengerParamsBuilder;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module messenger {
			export class ShareToMessengerParamsBuilder {
				public static class: java.lang.Class<com.facebook.messenger.ShareToMessengerParamsBuilder>;
				public getExternalUri(): globalAndroid.net.Uri;
				public setExternalUri(param0: globalAndroid.net.Uri): com.facebook.messenger.ShareToMessengerParamsBuilder;
				public getUri(): globalAndroid.net.Uri;
				public getMimeType(): string;
				public build(): com.facebook.messenger.ShareToMessengerParams;
				public getMetaData(): string;
				public setMetaData(param0: string): com.facebook.messenger.ShareToMessengerParamsBuilder;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module places {
			export class BuildConfig {
				public static class: java.lang.Class<com.facebook.places.BuildConfig>;
				public static DEBUG: boolean;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module places {
			export class PlaceManager {
				public static class: java.lang.Class<com.facebook.places.PlaceManager>;
				public static newPlaceSearchRequestForLocation(param0: com.facebook.places.model.PlaceSearchRequestParams, param1: globalAndroid.location.Location): com.facebook.GraphRequest;
				public static newCurrentPlaceRequest(param0: com.facebook.places.model.CurrentPlaceRequestParams, param1: com.facebook.places.PlaceManager.OnRequestReadyCallback): void;
				public static newPlaceSearchRequest(param0: com.facebook.places.model.PlaceSearchRequestParams, param1: com.facebook.places.PlaceManager.OnRequestReadyCallback): void;
				public static newPlaceInfoRequest(param0: com.facebook.places.model.PlaceInfoRequestParams): com.facebook.GraphRequest;
				public static newCurrentPlaceFeedbackRequest(param0: com.facebook.places.model.CurrentPlaceFeedbackRequestParams): com.facebook.GraphRequest;
			}
			export module PlaceManager {
				export class LocationError {
					public static class: java.lang.Class<com.facebook.places.PlaceManager.LocationError>;
					public static LOCATION_PERMISSION_DENIED: com.facebook.places.PlaceManager.LocationError;
					public static LOCATION_SERVICES_DISABLED: com.facebook.places.PlaceManager.LocationError;
					public static LOCATION_TIMEOUT: com.facebook.places.PlaceManager.LocationError;
					public static UNKNOWN_ERROR: com.facebook.places.PlaceManager.LocationError;
					public static values(): native.Array<com.facebook.places.PlaceManager.LocationError>;
					public static valueOf(param0: string): com.facebook.places.PlaceManager.LocationError;
				}
				export class OnRequestReadyCallback {
					public static class: java.lang.Class<com.facebook.places.PlaceManager.OnRequestReadyCallback>;
					/**
					 * Constructs a new instance of the com.facebook.places.PlaceManager$OnRequestReadyCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onLocationError(param0: com.facebook.places.PlaceManager.LocationError): void;
						onRequestReady(param0: com.facebook.GraphRequest): void;
					});
					public constructor();
					public onLocationError(param0: com.facebook.places.PlaceManager.LocationError): void;
					public onRequestReady(param0: com.facebook.GraphRequest): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module places {
			export class Places {
				public static class: java.lang.Class<com.facebook.places.Places>;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module places {
			export module internal {
				export class BleScanner {
					public static class: java.lang.Class<com.facebook.places.internal.BleScanner>;
					/**
					 * Constructs a new instance of the com.facebook.places.internal.BleScanner interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						initAndCheckEligibility(): void;
						startScanning(): void;
						stopScanning(): void;
						getErrorCode(): number;
						getScanResults(): java.util.List<com.facebook.places.internal.BluetoothScanResult>;
					});
					public constructor();
					public initAndCheckEligibility(): void;
					public getErrorCode(): number;
					public getScanResults(): java.util.List<com.facebook.places.internal.BluetoothScanResult>;
					public startScanning(): void;
					public stopScanning(): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module places {
			export module internal {
				export class BleScannerImpl extends com.facebook.places.internal.BleScanner {
					public static class: java.lang.Class<com.facebook.places.internal.BleScannerImpl>;
					public initAndCheckEligibility(): void;
					public getErrorCode(): number;
					public getScanResults(): java.util.List<com.facebook.places.internal.BluetoothScanResult>;
					public startScanning(): void;
					public stopScanning(): void;
				}
				export module BleScannerImpl {
					export class ScanCallBackImpl {
						public static class: java.lang.Class<com.facebook.places.internal.BleScannerImpl.ScanCallBackImpl>;
						public onBatchScanResults(param0: java.util.List<globalAndroid.bluetooth.le.ScanResult>): void;
						public onScanFailed(param0: number): void;
						public onScanResult(param0: number, param1: globalAndroid.bluetooth.le.ScanResult): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module places {
			export module internal {
				export class BleScannerLegacy extends com.facebook.places.internal.BleScanner {
					public static class: java.lang.Class<com.facebook.places.internal.BleScannerLegacy>;
					public initAndCheckEligibility(): void;
					public getErrorCode(): number;
					public getScanResults(): java.util.List<com.facebook.places.internal.BluetoothScanResult>;
					public startScanning(): void;
					public stopScanning(): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module places {
			export module internal {
				export class BluetoothScanResult {
					public static class: java.lang.Class<com.facebook.places.internal.BluetoothScanResult>;
					public payload: string;
					public rssi: number;
					public timestampNanos: number;
					public constructor(param0: string, param1: number, param2: number);
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module places {
			export module internal {
				export class LocationPackage {
					public static class: java.lang.Class<com.facebook.places.internal.LocationPackage>;
					public location: globalAndroid.location.Location;
					public locationError: com.facebook.places.internal.ScannerException.Type;
					public isWifiScanningEnabled: boolean;
					public connectedWifi: com.facebook.places.internal.WifiScanResult;
					public ambientWifi: java.util.List<com.facebook.places.internal.WifiScanResult>;
					public isBluetoothScanningEnabled: boolean;
					public ambientBluetoothLe: java.util.List<com.facebook.places.internal.BluetoothScanResult>;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module places {
			export module internal {
				export class LocationPackageManager {
					public static class: java.lang.Class<com.facebook.places.internal.LocationPackageManager>;
					public constructor();
					public static requestLocationPackage(param0: com.facebook.places.internal.LocationPackageRequestParams, param1: com.facebook.places.internal.LocationPackageManager.Listener): void;
				}
				export module LocationPackageManager {
					export class Listener {
						public static class: java.lang.Class<com.facebook.places.internal.LocationPackageManager.Listener>;
						/**
						 * Constructs a new instance of the com.facebook.places.internal.LocationPackageManager$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onLocationPackage(param0: com.facebook.places.internal.LocationPackage): void;
						});
						public constructor();
						public onLocationPackage(param0: com.facebook.places.internal.LocationPackage): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module places {
			export module internal {
				export class LocationPackageRequestParams {
					public static class: java.lang.Class<com.facebook.places.internal.LocationPackageRequestParams>;
					public getLocationRequestTimeoutMs(): number;
					public getBluetoothScanDurationMs(): number;
					public getLastLocationMaxAgeMs(): number;
					public isWifiActiveScanAllowed(): boolean;
					public getBluetoothFlushResultsTimeoutMs(): number;
					public isBluetoothScanEnabled(): boolean;
					public isLocationScanEnabled(): boolean;
					public getWifiScanTimeoutMs(): number;
					public getLocationMaxAccuracyMeters(): number;
					public getLocationProviders(): native.Array<string>;
					public getWifiScanMaxAgeMs(): number;
					public isWifiActiveScanForced(): boolean;
					public getBluetoothMaxScanResults(): number;
					public isWifiScanEnabled(): boolean;
					public getWifiMaxScanResults(): number;
				}
				export module LocationPackageRequestParams {
					export class Builder {
						public static class: java.lang.Class<com.facebook.places.internal.LocationPackageRequestParams.Builder>;
						public constructor();
						public setLocationMaxAccuracyMeters(param0: number): com.facebook.places.internal.LocationPackageRequestParams.Builder;
						public setBluetoothScanDurationMs(param0: number): com.facebook.places.internal.LocationPackageRequestParams.Builder;
						public setWifiActiveScanForced(param0: boolean): com.facebook.places.internal.LocationPackageRequestParams.Builder;
						public build(): com.facebook.places.internal.LocationPackageRequestParams;
						public setWifiActiveScanAllowed(param0: boolean): com.facebook.places.internal.LocationPackageRequestParams.Builder;
						public setLastLocationMaxAgeMs(param0: number): com.facebook.places.internal.LocationPackageRequestParams.Builder;
						public setBluetoothMaxScanResults(param0: number): com.facebook.places.internal.LocationPackageRequestParams.Builder;
						public setWifiMaxScanResults(param0: number): com.facebook.places.internal.LocationPackageRequestParams.Builder;
						public setLocationProviders(param0: native.Array<string>): com.facebook.places.internal.LocationPackageRequestParams.Builder;
						public setLocationScanEnabled(param0: boolean): com.facebook.places.internal.LocationPackageRequestParams.Builder;
						public setBluetoothFlushResultsTimeoutMs(param0: number): com.facebook.places.internal.LocationPackageRequestParams.Builder;
						public setLocationRequestTimeoutMs(param0: number): com.facebook.places.internal.LocationPackageRequestParams.Builder;
						public setWifiScanEnabled(param0: boolean): com.facebook.places.internal.LocationPackageRequestParams.Builder;
						public setWifiScanTimeoutMs(param0: number): com.facebook.places.internal.LocationPackageRequestParams.Builder;
						public setBluetoothScanEnabled(param0: boolean): com.facebook.places.internal.LocationPackageRequestParams.Builder;
						public setWifiScanMaxAgeMs(param0: number): com.facebook.places.internal.LocationPackageRequestParams.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module places {
			export module internal {
				export class LocationScanner {
					public static class: java.lang.Class<com.facebook.places.internal.LocationScanner>;
					/**
					 * Constructs a new instance of the com.facebook.places.internal.LocationScanner interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						initAndCheckEligibility(): void;
						getLocation(): globalAndroid.location.Location;
					});
					public constructor();
					public initAndCheckEligibility(): void;
					public getLocation(): globalAndroid.location.Location;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module places {
			export module internal {
				export class LocationScannerImpl extends com.facebook.places.internal.LocationScanner {
					public static class: java.lang.Class<com.facebook.places.internal.LocationScannerImpl>;
					public constructor(param0: globalAndroid.content.Context, param1: com.facebook.places.internal.LocationPackageRequestParams);
					public initAndCheckEligibility(): void;
					public onProviderDisabled(param0: string): void;
					public onStatusChanged(param0: string, param1: number, param2: globalAndroid.os.Bundle): void;
					public onProviderEnabled(param0: string): void;
					public onLocationChanged(param0: globalAndroid.location.Location): void;
					public getLocation(): globalAndroid.location.Location;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module places {
			export module internal {
				export class ScannerException {
					public static class: java.lang.Class<com.facebook.places.internal.ScannerException>;
					public type: com.facebook.places.internal.ScannerException.Type;
					public constructor(param0: com.facebook.places.internal.ScannerException.Type, param1: java.lang.Exception);
					public constructor(param0: com.facebook.places.internal.ScannerException.Type);
					public constructor(param0: com.facebook.places.internal.ScannerException.Type, param1: string);
				}
				export module ScannerException {
					export class Type {
						public static class: java.lang.Class<com.facebook.places.internal.ScannerException.Type>;
						public static NOT_SUPPORTED: com.facebook.places.internal.ScannerException.Type;
						public static PERMISSION_DENIED: com.facebook.places.internal.ScannerException.Type;
						public static DISABLED: com.facebook.places.internal.ScannerException.Type;
						public static SCAN_ALREADY_IN_PROGRESS: com.facebook.places.internal.ScannerException.Type;
						public static UNKNOWN_ERROR: com.facebook.places.internal.ScannerException.Type;
						public static TIMEOUT: com.facebook.places.internal.ScannerException.Type;
						public static valueOf(param0: string): com.facebook.places.internal.ScannerException.Type;
						public static values(): native.Array<com.facebook.places.internal.ScannerException.Type>;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module places {
			export module internal {
				export class ScannerFactory {
					public static class: java.lang.Class<com.facebook.places.internal.ScannerFactory>;
					public static OS_VERSION_LOLLIPOP: number;
					public static OS_VERSION_JELLY_BEAN_MR2: number;
					public static OS_VERSION_JELLY_BEAN_MR1: number;
					public constructor();
					public static newLocationScanner(param0: globalAndroid.content.Context, param1: com.facebook.places.internal.LocationPackageRequestParams): com.facebook.places.internal.LocationScanner;
					public static newWifiScanner(param0: globalAndroid.content.Context, param1: com.facebook.places.internal.LocationPackageRequestParams): com.facebook.places.internal.WifiScanner;
					public static newBleScanner(param0: globalAndroid.content.Context, param1: com.facebook.places.internal.LocationPackageRequestParams): com.facebook.places.internal.BleScanner;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module places {
			export module internal {
				export class WifiScanResult {
					public static class: java.lang.Class<com.facebook.places.internal.WifiScanResult>;
					public ssid: string;
					public bssid: string;
					public rssi: number;
					public frequency: number;
					public timestampMs: number;
					public constructor();
					public constructor(param0: string, param1: string, param2: number, param3: number, param4: number);
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module places {
			export module internal {
				export class WifiScanner {
					public static class: java.lang.Class<com.facebook.places.internal.WifiScanner>;
					/**
					 * Constructs a new instance of the com.facebook.places.internal.WifiScanner interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						initAndCheckEligibility(): void;
						getConnectedWifi(): com.facebook.places.internal.WifiScanResult;
						isWifiScanningEnabled(): boolean;
						getWifiScans(): java.util.List<com.facebook.places.internal.WifiScanResult>;
					});
					public constructor();
					public getWifiScans(): java.util.List<com.facebook.places.internal.WifiScanResult>;
					public isWifiScanningEnabled(): boolean;
					public initAndCheckEligibility(): void;
					public getConnectedWifi(): com.facebook.places.internal.WifiScanResult;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module places {
			export module internal {
				export class WifiScannerImpl extends com.facebook.places.internal.WifiScanner {
					public static class: java.lang.Class<com.facebook.places.internal.WifiScannerImpl>;
					public getWifiScans(): java.util.List<com.facebook.places.internal.WifiScanResult>;
					public isWifiScanningEnabled(): boolean;
					public initAndCheckEligibility(): void;
					public getConnectedWifi(): com.facebook.places.internal.WifiScanResult;
				}
				export module WifiScannerImpl {
					export class ScanResultBroadcastReceiver {
						public static class: java.lang.Class<com.facebook.places.internal.WifiScannerImpl.ScanResultBroadcastReceiver>;
						public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module places {
			export module model {
				export class CurrentPlaceFeedbackRequestParams {
					public static class: java.lang.Class<com.facebook.places.model.CurrentPlaceFeedbackRequestParams>;
					public getPlaceId(): string;
					public wasHere(): java.lang.Boolean;
					public getTracking(): string;
				}
				export module CurrentPlaceFeedbackRequestParams {
					export class Builder {
						public static class: java.lang.Class<com.facebook.places.model.CurrentPlaceFeedbackRequestParams.Builder>;
						public constructor();
						public setTracking(param0: string): com.facebook.places.model.CurrentPlaceFeedbackRequestParams.Builder;
						public setWasHere(param0: boolean): com.facebook.places.model.CurrentPlaceFeedbackRequestParams.Builder;
						public build(): com.facebook.places.model.CurrentPlaceFeedbackRequestParams;
						public setPlaceId(param0: string): com.facebook.places.model.CurrentPlaceFeedbackRequestParams.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module places {
			export module model {
				export class CurrentPlaceRequestParams {
					public static class: java.lang.Class<com.facebook.places.model.CurrentPlaceRequestParams>;
					public getScanMode(): com.facebook.places.model.CurrentPlaceRequestParams.ScanMode;
					public getFields(): java.util.Set<string>;
					public getLimit(): number;
					public getMinConfidenceLevel(): com.facebook.places.model.CurrentPlaceRequestParams.ConfidenceLevel;
					public getLocation(): globalAndroid.location.Location;
				}
				export module CurrentPlaceRequestParams {
					export class Builder {
						public static class: java.lang.Class<com.facebook.places.model.CurrentPlaceRequestParams.Builder>;
						public constructor();
						public build(): com.facebook.places.model.CurrentPlaceRequestParams;
						public setLimit(param0: number): com.facebook.places.model.CurrentPlaceRequestParams.Builder;
						public setLocation(param0: globalAndroid.location.Location): com.facebook.places.model.CurrentPlaceRequestParams.Builder;
						public setMinConfidenceLevel(param0: com.facebook.places.model.CurrentPlaceRequestParams.ConfidenceLevel): com.facebook.places.model.CurrentPlaceRequestParams.Builder;
						public setScanMode(param0: com.facebook.places.model.CurrentPlaceRequestParams.ScanMode): com.facebook.places.model.CurrentPlaceRequestParams.Builder;
						public addField(param0: string): com.facebook.places.model.CurrentPlaceRequestParams.Builder;
					}
					export class ConfidenceLevel {
						public static class: java.lang.Class<com.facebook.places.model.CurrentPlaceRequestParams.ConfidenceLevel>;
						public static LOW: com.facebook.places.model.CurrentPlaceRequestParams.ConfidenceLevel;
						public static MEDIUM: com.facebook.places.model.CurrentPlaceRequestParams.ConfidenceLevel;
						public static HIGH: com.facebook.places.model.CurrentPlaceRequestParams.ConfidenceLevel;
						public static values(): native.Array<com.facebook.places.model.CurrentPlaceRequestParams.ConfidenceLevel>;
						public static valueOf(param0: string): com.facebook.places.model.CurrentPlaceRequestParams.ConfidenceLevel;
					}
					export class ScanMode {
						public static class: java.lang.Class<com.facebook.places.model.CurrentPlaceRequestParams.ScanMode>;
						public static HIGH_ACCURACY: com.facebook.places.model.CurrentPlaceRequestParams.ScanMode;
						public static LOW_LATENCY: com.facebook.places.model.CurrentPlaceRequestParams.ScanMode;
						public static values(): native.Array<com.facebook.places.model.CurrentPlaceRequestParams.ScanMode>;
						public static valueOf(param0: string): com.facebook.places.model.CurrentPlaceRequestParams.ScanMode;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module places {
			export module model {
				export class PlaceFields {
					public static class: java.lang.Class<com.facebook.places.model.PlaceFields>;
					/**
					 * Constructs a new instance of the com.facebook.places.model.PlaceFields interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
					public static RATING_COUNT: string;
					public static SINGLE_LINE_ADDRESS: string;
					public static HOURS: string;
					public static PRICE_RANGE: string;
					public static WEBSITE: string;
					public static CHECKINS: string;
					public static RESTAURANT_SERVICES: string;
					public static PAGE: string;
					public static NAME: string;
					public static CONFIDENCE_LEVEL: string;
					public static DESCRIPTION: string;
					public static ENGAGEMENT: string;
					public static LINK: string;
					public static ID: string;
					public static IS_ALWAYS_OPEN: string;
					public static PAYMENT_OPTIONS: string;
					public static PARKING: string;
					public static ABOUT: string;
					public static LOCATION: string;
					public static WORKFLOWS: string;
					public static COVER: string;
					public static PHOTOS_PROFILE: string;
					public static APP_LINKS: string;
					public static IS_PERMANENTLY_CLOSED: string;
					public static PICTURE: string;
					public static PHONE: string;
					public static OVERALL_STAR_RATING: string;
					public static MATCHED_CATEGORIES: string;
					public static RESTAURANT_SPECIALTIES: string;
					public static IS_VERIFIED: string;
					public static CATEGORY_LIST: string;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module places {
			export module model {
				export class PlaceInfoRequestParams {
					public static class: java.lang.Class<com.facebook.places.model.PlaceInfoRequestParams>;
					public getPlaceId(): string;
					public getFields(): java.util.Set<string>;
				}
				export module PlaceInfoRequestParams {
					export class Builder {
						public static class: java.lang.Class<com.facebook.places.model.PlaceInfoRequestParams.Builder>;
						public constructor();
						public addField(param0: string): com.facebook.places.model.PlaceInfoRequestParams.Builder;
						public setPlaceId(param0: string): com.facebook.places.model.PlaceInfoRequestParams.Builder;
						public build(): com.facebook.places.model.PlaceInfoRequestParams;
						public addFields(param0: native.Array<string>): com.facebook.places.model.PlaceInfoRequestParams.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module places {
			export module model {
				export class PlaceSearchRequestParams {
					public static class: java.lang.Class<com.facebook.places.model.PlaceSearchRequestParams>;
					public getCategories(): java.util.Set<string>;
					public getDistance(): number;
					public getSearchText(): string;
					public getFields(): java.util.Set<string>;
					public getLimit(): number;
				}
				export module PlaceSearchRequestParams {
					export class Builder {
						public static class: java.lang.Class<com.facebook.places.model.PlaceSearchRequestParams.Builder>;
						public addField(param0: string): com.facebook.places.model.PlaceSearchRequestParams.Builder;
						public constructor();
						public addCategory(param0: string): com.facebook.places.model.PlaceSearchRequestParams.Builder;
						public setDistance(param0: number): com.facebook.places.model.PlaceSearchRequestParams.Builder;
						public build(): com.facebook.places.model.PlaceSearchRequestParams;
						public setLimit(param0: number): com.facebook.places.model.PlaceSearchRequestParams.Builder;
						public setSearchText(param0: string): com.facebook.places.model.PlaceSearchRequestParams.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export class BuildConfig {
				public static class: java.lang.Class<com.facebook.share.BuildConfig>;
				public static DEBUG: boolean;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export class DeviceShareDialog extends com.facebook.internal.FacebookDialogBase<com.facebook.share.model.ShareContent<any,any>,com.facebook.share.DeviceShareDialog.Result> {
				public static class: java.lang.Class<com.facebook.share.DeviceShareDialog>;
				public constructor(param0: com.facebook.internal.FragmentWrapper, param1: number);
				public constructor(param0: globalAndroid.app.Activity);
				public constructor(param0: globalAndroid.support.v4.app.Fragment);
				public registerCallbackImpl(param0: com.facebook.internal.CallbackManagerImpl, param1: com.facebook.FacebookCallback<com.facebook.share.DeviceShareDialog.Result>): void;
				public showImpl(param0: com.facebook.share.model.ShareContent<any,any>, param1: any): void;
				public showImpl(param0: any, param1: any): void;
				public canShowImpl(param0: any, param1: any): boolean;
				public registerCallback(param0: com.facebook.CallbackManager, param1: com.facebook.FacebookCallback<any>, param2: number): void;
				public constructor(param0: globalAndroid.app.Fragment);
				public canShow(param0: any): boolean;
				public constructor(param0: globalAndroid.app.Activity, param1: number);
				public getOrderedModeHandlers(): java.util.List<com.facebook.internal.FacebookDialogBase.ModeHandler>;
				public registerCallback(param0: com.facebook.CallbackManager, param1: com.facebook.FacebookCallback<any>): void;
				public registerCallbackImpl(param0: com.facebook.internal.CallbackManagerImpl, param1: com.facebook.FacebookCallback<any>): void;
				public show(param0: any): void;
				public createBaseAppCall(): com.facebook.internal.AppCall;
				public canShowImpl(param0: com.facebook.share.model.ShareContent<any,any>, param1: any): boolean;
			}
			export module DeviceShareDialog {
				export class Result {
					public static class: java.lang.Class<com.facebook.share.DeviceShareDialog.Result>;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export class Share {
				public static class: java.lang.Class<com.facebook.share.Share>;
				public constructor();
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export class ShareApi {
				public static class: java.lang.Class<com.facebook.share.ShareApi>;
				public constructor(param0: com.facebook.share.model.ShareContent<any,any>);
				public static share(param0: com.facebook.share.model.ShareContent<any,any>, param1: com.facebook.FacebookCallback<com.facebook.share.Sharer.Result>): void;
				public getGraphNode(): string;
				public share(param0: com.facebook.FacebookCallback<com.facebook.share.Sharer.Result>): void;
				public getShareContent(): com.facebook.share.model.ShareContent<any,any>;
				public setMessage(param0: string): void;
				public getMessage(): string;
				public setGraphNode(param0: string): void;
				public canShare(): boolean;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export class ShareBuilder<P, E>  extends java.lang.Object {
				public static class: java.lang.Class<com.facebook.share.ShareBuilder<any,any>>;
				/**
				 * Constructs a new instance of the com.facebook.share.ShareBuilder<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					build(): P;
				});
				public constructor();
				public build(): P;
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export class Sharer {
				public static class: java.lang.Class<com.facebook.share.Sharer>;
				/**
				 * Constructs a new instance of the com.facebook.share.Sharer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getShouldFailOnDataError(): boolean;
					setShouldFailOnDataError(param0: boolean): void;
				});
				public constructor();
				public getShouldFailOnDataError(): boolean;
				public setShouldFailOnDataError(param0: boolean): void;
			}
			export module Sharer {
				export class Result {
					public static class: java.lang.Class<com.facebook.share.Sharer.Result>;
					public constructor(param0: string);
					public getPostId(): string;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module internal {
				export class AppInviteDialogFeature extends com.facebook.internal.DialogFeature {
					public static class: java.lang.Class<com.facebook.share.internal.AppInviteDialogFeature>;
					public static APP_INVITES_DIALOG: com.facebook.share.internal.AppInviteDialogFeature;
					public getMinVersion(): number;
					public name(): string;
					public static valueOf(param0: string): com.facebook.share.internal.AppInviteDialogFeature;
					public static values(): native.Array<com.facebook.share.internal.AppInviteDialogFeature>;
					public getAction(): string;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module internal {
				export class CameraEffectFeature extends com.facebook.internal.DialogFeature {
					public static class: java.lang.Class<com.facebook.share.internal.CameraEffectFeature>;
					public static SHARE_CAMERA_EFFECT: com.facebook.share.internal.CameraEffectFeature;
					public getMinVersion(): number;
					public name(): string;
					public static valueOf(param0: string): com.facebook.share.internal.CameraEffectFeature;
					public static values(): native.Array<com.facebook.share.internal.CameraEffectFeature>;
					public getAction(): string;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module internal {
				export class CameraEffectJSONUtility {
					public static class: java.lang.Class<com.facebook.share.internal.CameraEffectJSONUtility>;
					public static convertToJSON(param0: com.facebook.share.model.CameraEffectArguments): org.json.JSONObject;
					public constructor();
					public static convertToCameraEffectArguments(param0: org.json.JSONObject): com.facebook.share.model.CameraEffectArguments;
				}
				export module CameraEffectJSONUtility {
					export class Setter {
						public static class: java.lang.Class<com.facebook.share.internal.CameraEffectJSONUtility.Setter>;
						/**
						 * Constructs a new instance of the com.facebook.share.internal.CameraEffectJSONUtility$Setter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							setOnArgumentsBuilder(param0: com.facebook.share.model.CameraEffectArguments.Builder, param1: string, param2: any): void;
							setOnJSON(param0: org.json.JSONObject, param1: string, param2: any): void;
						});
						public constructor();
						public setOnArgumentsBuilder(param0: com.facebook.share.model.CameraEffectArguments.Builder, param1: string, param2: any): void;
						public setOnJSON(param0: org.json.JSONObject, param1: string, param2: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module internal {
				export class DeviceShareDialogFragment {
					public static class: java.lang.Class<com.facebook.share.internal.DeviceShareDialogFragment>;
					public static TAG: string;
					public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
					public constructor();
					public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
					public onDismiss(param0: globalAndroid.content.DialogInterface): void;
					public onCreateDialog(param0: globalAndroid.os.Bundle): globalAndroid.app.Dialog;
					public setShareContent(param0: com.facebook.share.model.ShareContent<any,any>): void;
				}
				export module DeviceShareDialogFragment {
					export class RequestState {
						public static class: java.lang.Class<com.facebook.share.internal.DeviceShareDialogFragment.RequestState>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.share.internal.DeviceShareDialogFragment.RequestState>;
						public constructor(param0: globalAndroid.os.Parcel);
						public setExpiresIn(param0: number): void;
						public describeContents(): number;
						public getUserCode(): string;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public setUserCode(param0: string): void;
						public getExpiresIn(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module internal {
				export class GameRequestValidation {
					public static class: java.lang.Class<com.facebook.share.internal.GameRequestValidation>;
					public constructor();
					public static validate(param0: com.facebook.share.model.GameRequestContent): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module internal {
				export class LegacyNativeDialogParameters {
					public static class: java.lang.Class<com.facebook.share.internal.LegacyNativeDialogParameters>;
					public constructor();
					public static create(param0: java.util.UUID, param1: com.facebook.share.model.ShareContent<any,any>, param2: boolean): globalAndroid.os.Bundle;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module internal {
				export class LikeActionController {
					public static class: java.lang.Class<com.facebook.share.internal.LikeActionController>;
					public static ACTION_LIKE_ACTION_CONTROLLER_UPDATED: string;
					public static ACTION_LIKE_ACTION_CONTROLLER_DID_ERROR: string;
					public static ACTION_LIKE_ACTION_CONTROLLER_DID_RESET: string;
					public static ACTION_OBJECT_ID_KEY: string;
					public static ERROR_INVALID_OBJECT_ID: string;
					public static ERROR_PUBLISH_ERROR: string;
					public getSocialSentence(): string;
					public static getControllerForObjectId(param0: string, param1: com.facebook.share.widget.LikeView.ObjectType, param2: com.facebook.share.internal.LikeActionController.CreationCallback): void;
					public toggleLike(param0: globalAndroid.app.Activity, param1: com.facebook.internal.FragmentWrapper, param2: globalAndroid.os.Bundle): void;
					public getObjectId(): string;
					public getLikeCountString(): string;
					public isObjectLiked(): boolean;
					public shouldEnableView(): boolean;
					public static handleOnActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): boolean;
				}
				export module LikeActionController {
					export abstract class AbstractRequestWrapper extends com.facebook.share.internal.LikeActionController.RequestWrapper {
						public static class: java.lang.Class<com.facebook.share.internal.LikeActionController.AbstractRequestWrapper>;
						public objectId: string;
						public objectType: com.facebook.share.widget.LikeView.ObjectType;
						public error: com.facebook.FacebookRequestError;
						public addToBatch(param0: com.facebook.GraphRequestBatch): void;
						public getError(): com.facebook.FacebookRequestError;
						public constructor(param0: com.facebook.share.internal.LikeActionController, param1: string, param2: com.facebook.share.widget.LikeView.ObjectType);
						public setRequest(param0: com.facebook.GraphRequest): void;
						public processError(param0: com.facebook.FacebookRequestError): void;
						public processSuccess(param0: com.facebook.GraphResponse): void;
					}
					export class CreateLikeActionControllerWorkItem {
						public static class: java.lang.Class<com.facebook.share.internal.LikeActionController.CreateLikeActionControllerWorkItem>;
						public run(): void;
					}
					export class CreationCallback {
						public static class: java.lang.Class<com.facebook.share.internal.LikeActionController.CreationCallback>;
						/**
						 * Constructs a new instance of the com.facebook.share.internal.LikeActionController$CreationCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onComplete(param0: com.facebook.share.internal.LikeActionController, param1: com.facebook.FacebookException): void;
						});
						public constructor();
						public onComplete(param0: com.facebook.share.internal.LikeActionController, param1: com.facebook.FacebookException): void;
					}
					export class GetEngagementRequestWrapper extends com.facebook.share.internal.LikeActionController.AbstractRequestWrapper {
						public static class: java.lang.Class<com.facebook.share.internal.LikeActionController.GetEngagementRequestWrapper>;
						public addToBatch(param0: com.facebook.GraphRequestBatch): void;
						public getError(): com.facebook.FacebookRequestError;
						public processError(param0: com.facebook.FacebookRequestError): void;
						public processSuccess(param0: com.facebook.GraphResponse): void;
					}
					export class GetOGObjectIdRequestWrapper extends com.facebook.share.internal.LikeActionController.AbstractRequestWrapper {
						public static class: java.lang.Class<com.facebook.share.internal.LikeActionController.GetOGObjectIdRequestWrapper>;
						public addToBatch(param0: com.facebook.GraphRequestBatch): void;
						public getError(): com.facebook.FacebookRequestError;
						public processError(param0: com.facebook.FacebookRequestError): void;
						public processSuccess(param0: com.facebook.GraphResponse): void;
					}
					export class GetOGObjectLikesRequestWrapper extends com.facebook.share.internal.LikeActionController.AbstractRequestWrapper implements com.facebook.share.internal.LikeActionController.LikeRequestWrapper {
						public static class: java.lang.Class<com.facebook.share.internal.LikeActionController.GetOGObjectLikesRequestWrapper>;
						public getUnlikeToken(): string;
						public addToBatch(param0: com.facebook.GraphRequestBatch): void;
						public isObjectLiked(): boolean;
						public getError(): com.facebook.FacebookRequestError;
						public processError(param0: com.facebook.FacebookRequestError): void;
						public processSuccess(param0: com.facebook.GraphResponse): void;
					}
					export class GetPageIdRequestWrapper extends com.facebook.share.internal.LikeActionController.AbstractRequestWrapper {
						public static class: java.lang.Class<com.facebook.share.internal.LikeActionController.GetPageIdRequestWrapper>;
						public addToBatch(param0: com.facebook.GraphRequestBatch): void;
						public getError(): com.facebook.FacebookRequestError;
						public processError(param0: com.facebook.FacebookRequestError): void;
						public processSuccess(param0: com.facebook.GraphResponse): void;
					}
					export class GetPageLikesRequestWrapper extends com.facebook.share.internal.LikeActionController.AbstractRequestWrapper implements com.facebook.share.internal.LikeActionController.LikeRequestWrapper {
						public static class: java.lang.Class<com.facebook.share.internal.LikeActionController.GetPageLikesRequestWrapper>;
						public getUnlikeToken(): string;
						public addToBatch(param0: com.facebook.GraphRequestBatch): void;
						public isObjectLiked(): boolean;
						public getError(): com.facebook.FacebookRequestError;
						public processError(param0: com.facebook.FacebookRequestError): void;
						public processSuccess(param0: com.facebook.GraphResponse): void;
					}
					export class LikeRequestWrapper extends com.facebook.share.internal.LikeActionController.RequestWrapper {
						public static class: java.lang.Class<com.facebook.share.internal.LikeActionController.LikeRequestWrapper>;
						/**
						 * Constructs a new instance of the com.facebook.share.internal.LikeActionController$LikeRequestWrapper interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							isObjectLiked(): boolean;
							getUnlikeToken(): string;
							getError(): com.facebook.FacebookRequestError;
							addToBatch(param0: com.facebook.GraphRequestBatch): void;
						});
						public constructor();
						public getUnlikeToken(): string;
						public addToBatch(param0: com.facebook.GraphRequestBatch): void;
						public isObjectLiked(): boolean;
						public getError(): com.facebook.FacebookRequestError;
					}
					export class MRUCacheWorkItem {
						public static class: java.lang.Class<com.facebook.share.internal.LikeActionController.MRUCacheWorkItem>;
						public run(): void;
					}
					export class PublishLikeRequestWrapper extends com.facebook.share.internal.LikeActionController.AbstractRequestWrapper {
						public static class: java.lang.Class<com.facebook.share.internal.LikeActionController.PublishLikeRequestWrapper>;
						public addToBatch(param0: com.facebook.GraphRequestBatch): void;
						public getError(): com.facebook.FacebookRequestError;
						public processError(param0: com.facebook.FacebookRequestError): void;
						public processSuccess(param0: com.facebook.GraphResponse): void;
					}
					export class PublishUnlikeRequestWrapper extends com.facebook.share.internal.LikeActionController.AbstractRequestWrapper {
						public static class: java.lang.Class<com.facebook.share.internal.LikeActionController.PublishUnlikeRequestWrapper>;
						public addToBatch(param0: com.facebook.GraphRequestBatch): void;
						public getError(): com.facebook.FacebookRequestError;
						public processError(param0: com.facebook.FacebookRequestError): void;
						public processSuccess(param0: com.facebook.GraphResponse): void;
					}
					export class RequestCompletionCallback {
						public static class: java.lang.Class<com.facebook.share.internal.LikeActionController.RequestCompletionCallback>;
						/**
						 * Constructs a new instance of the com.facebook.share.internal.LikeActionController$RequestCompletionCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onComplete(): void;
						});
						public constructor();
						public onComplete(): void;
					}
					export class RequestWrapper {
						public static class: java.lang.Class<com.facebook.share.internal.LikeActionController.RequestWrapper>;
						/**
						 * Constructs a new instance of the com.facebook.share.internal.LikeActionController$RequestWrapper interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getError(): com.facebook.FacebookRequestError;
							addToBatch(param0: com.facebook.GraphRequestBatch): void;
						});
						public constructor();
						public addToBatch(param0: com.facebook.GraphRequestBatch): void;
						public getError(): com.facebook.FacebookRequestError;
					}
					export class SerializeToDiskWorkItem {
						public static class: java.lang.Class<com.facebook.share.internal.LikeActionController.SerializeToDiskWorkItem>;
						public run(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module internal {
				export class LikeBoxCountView {
					public static class: java.lang.Class<com.facebook.share.internal.LikeBoxCountView>;
					public constructor(param0: globalAndroid.content.Context);
					public setText(param0: string): void;
					public setCaretPosition(param0: com.facebook.share.internal.LikeBoxCountView.LikeBoxCountViewCaretPosition): void;
					public onDraw(param0: globalAndroid.graphics.Canvas): void;
				}
				export module LikeBoxCountView {
					export class LikeBoxCountViewCaretPosition {
						public static class: java.lang.Class<com.facebook.share.internal.LikeBoxCountView.LikeBoxCountViewCaretPosition>;
						public static LEFT: com.facebook.share.internal.LikeBoxCountView.LikeBoxCountViewCaretPosition;
						public static TOP: com.facebook.share.internal.LikeBoxCountView.LikeBoxCountViewCaretPosition;
						public static RIGHT: com.facebook.share.internal.LikeBoxCountView.LikeBoxCountViewCaretPosition;
						public static BOTTOM: com.facebook.share.internal.LikeBoxCountView.LikeBoxCountViewCaretPosition;
						public static values(): native.Array<com.facebook.share.internal.LikeBoxCountView.LikeBoxCountViewCaretPosition>;
						public static valueOf(param0: string): com.facebook.share.internal.LikeBoxCountView.LikeBoxCountViewCaretPosition;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module internal {
				export class LikeButton extends com.facebook.FacebookButtonBase {
					public static class: java.lang.Class<com.facebook.share.internal.LikeButton>;
					public getDefaultStyleResource(): number;
					public getDefaultRequestCode(): number;
					public setSelected(param0: boolean): void;
					public constructor(param0: globalAndroid.content.Context, param1: boolean);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number, param4: string, param5: string);
					public configureButton(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module internal {
				export class LikeContent extends com.facebook.share.model.ShareModel {
					public static class: java.lang.Class<com.facebook.share.internal.LikeContent>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.share.internal.LikeContent>;
					public getObjectType(): string;
					public describeContents(): number;
					public getObjectId(): string;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				}
				export module LikeContent {
					export class Builder extends com.facebook.share.model.ShareModelBuilder<com.facebook.share.internal.LikeContent,com.facebook.share.internal.LikeContent.Builder> {
						public static class: java.lang.Class<com.facebook.share.internal.LikeContent.Builder>;
						public constructor();
						public readFrom(param0: any): any;
						public setObjectType(param0: string): com.facebook.share.internal.LikeContent.Builder;
						public build(): com.facebook.share.internal.LikeContent;
						public readFrom(param0: com.facebook.share.internal.LikeContent): com.facebook.share.internal.LikeContent.Builder;
						public setObjectId(param0: string): com.facebook.share.internal.LikeContent.Builder;
						public build(): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module internal {
				export class LikeDialog extends com.facebook.internal.FacebookDialogBase<com.facebook.share.internal.LikeContent,com.facebook.share.internal.LikeDialog.Result> {
					public static class: java.lang.Class<com.facebook.share.internal.LikeDialog>;
					public static canShowNativeDialog(): boolean;
					public constructor(param0: globalAndroid.app.Fragment);
					public createBaseAppCall(): com.facebook.internal.AppCall;
					public registerCallbackImpl(param0: com.facebook.internal.CallbackManagerImpl, param1: com.facebook.FacebookCallback<any>): void;
					public registerCallback(param0: com.facebook.CallbackManager, param1: com.facebook.FacebookCallback<any>, param2: number): void;
					public registerCallback(param0: com.facebook.CallbackManager, param1: com.facebook.FacebookCallback<any>): void;
					public constructor(param0: globalAndroid.app.Activity);
					public constructor(param0: com.facebook.internal.FragmentWrapper);
					public getOrderedModeHandlers(): java.util.List<com.facebook.internal.FacebookDialogBase.ModeHandler>;
					public show(param0: any): void;
					public show(param0: com.facebook.share.internal.LikeContent): void;
					public registerCallbackImpl(param0: com.facebook.internal.CallbackManagerImpl, param1: com.facebook.FacebookCallback<com.facebook.share.internal.LikeDialog.Result>): void;
					public canShow(param0: any): boolean;
					public constructor(param0: globalAndroid.support.v4.app.Fragment);
					public static canShowWebFallback(): boolean;
					public constructor(param0: globalAndroid.app.Activity, param1: number);
					public constructor(param0: com.facebook.internal.FragmentWrapper, param1: number);
				}
				export module LikeDialog {
					export class NativeHandler extends com.facebook.internal.FacebookDialogBase.ModeHandler {
						public static class: java.lang.Class<com.facebook.share.internal.LikeDialog.NativeHandler>;
						public createAppCall(param0: com.facebook.share.internal.LikeContent): com.facebook.internal.AppCall;
						public canShow(param0: com.facebook.share.internal.LikeContent, param1: boolean): boolean;
						public createAppCall(param0: any): com.facebook.internal.AppCall;
						public canShow(param0: any, param1: boolean): boolean;
					}
					export class Result {
						public static class: java.lang.Class<com.facebook.share.internal.LikeDialog.Result>;
						public constructor(param0: globalAndroid.os.Bundle);
						public getData(): globalAndroid.os.Bundle;
					}
					export class WebFallbackHandler extends com.facebook.internal.FacebookDialogBase.ModeHandler {
						public static class: java.lang.Class<com.facebook.share.internal.LikeDialog.WebFallbackHandler>;
						public createAppCall(param0: com.facebook.share.internal.LikeContent): com.facebook.internal.AppCall;
						public canShow(param0: com.facebook.share.internal.LikeContent, param1: boolean): boolean;
						public createAppCall(param0: any): com.facebook.internal.AppCall;
						public canShow(param0: any, param1: boolean): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module internal {
				export class LikeDialogFeature extends com.facebook.internal.DialogFeature {
					public static class: java.lang.Class<com.facebook.share.internal.LikeDialogFeature>;
					public static LIKE_DIALOG: com.facebook.share.internal.LikeDialogFeature;
					public getMinVersion(): number;
					public name(): string;
					public static values(): native.Array<com.facebook.share.internal.LikeDialogFeature>;
					public static valueOf(param0: string): com.facebook.share.internal.LikeDialogFeature;
					public getAction(): string;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module internal {
				export class LikeStatusClient extends com.facebook.internal.PlatformServiceClient {
					public static class: java.lang.Class<com.facebook.share.internal.LikeStatusClient>;
					public populateRequestBundle(param0: globalAndroid.os.Bundle): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module internal {
				export class MessageDialogFeature extends com.facebook.internal.DialogFeature {
					public static class: java.lang.Class<com.facebook.share.internal.MessageDialogFeature>;
					public static MESSAGE_DIALOG: com.facebook.share.internal.MessageDialogFeature;
					public static PHOTOS: com.facebook.share.internal.MessageDialogFeature;
					public static VIDEO: com.facebook.share.internal.MessageDialogFeature;
					public static MESSENGER_GENERIC_TEMPLATE: com.facebook.share.internal.MessageDialogFeature;
					public static MESSENGER_OPEN_GRAPH_MUSIC_TEMPLATE: com.facebook.share.internal.MessageDialogFeature;
					public static MESSENGER_MEDIA_TEMPLATE: com.facebook.share.internal.MessageDialogFeature;
					public getMinVersion(): number;
					public name(): string;
					public static valueOf(param0: string): com.facebook.share.internal.MessageDialogFeature;
					public getAction(): string;
					public static values(): native.Array<com.facebook.share.internal.MessageDialogFeature>;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module internal {
				export class MessengerShareContentUtility {
					public static class: java.lang.Class<com.facebook.share.internal.MessengerShareContentUtility>;
					public static FACEBOOK_DOMAIN: java.util.regex.Pattern;
					public static TITLE: string;
					public static SUBTITLE: string;
					public static URL: string;
					public static IMAGE_URL: string;
					public static BUTTONS: string;
					public static FALLBACK_URL: string;
					public static MESSENGER_EXTENSIONS: string;
					public static WEBVIEW_SHARE_BUTTON: string;
					public static SHARABLE: string;
					public static ATTACHMENT: string;
					public static ATTACHMENT_ID: string;
					public static ELEMENTS: string;
					public static DEFAULT_ACTION: string;
					public static SHARE_BUTTON_HIDE: string;
					public static BUTTON_TYPE: string;
					public static BUTTON_URL_TYPE: string;
					public static PREVIEW_DEFAULT: string;
					public static PREVIEW_OPEN_GRAPH: string;
					public static TEMPLATE_TYPE: string;
					public static TEMPLATE_GENERIC_TYPE: string;
					public static TEMPLATE_OPEN_GRAPH_TYPE: string;
					public static TEMPLATE_MEDIA_TYPE: string;
					public static ATTACHMENT_TYPE: string;
					public static ATTACHMENT_PAYLOAD: string;
					public static ATTACHMENT_TEMPLATE_TYPE: string;
					public static WEBVIEW_RATIO: string;
					public static WEBVIEW_RATIO_FULL: string;
					public static WEBVIEW_RATIO_TALL: string;
					public static WEBVIEW_RATIO_COMPACT: string;
					public static IMAGE_ASPECT_RATIO: string;
					public static IMAGE_RATIO_SQUARE: string;
					public static IMAGE_RATIO_HORIZONTAL: string;
					public static MEDIA_TYPE: string;
					public static MEDIA_VIDEO: string;
					public static MEDIA_IMAGE: string;
					public static addGenericTemplateContent(param0: globalAndroid.os.Bundle, param1: com.facebook.share.model.ShareMessengerGenericTemplateContent): void;
					public constructor();
					public static addMediaTemplateContent(param0: globalAndroid.os.Bundle, param1: com.facebook.share.model.ShareMessengerMediaTemplateContent): void;
					public static addOpenGraphMusicTemplateContent(param0: globalAndroid.os.Bundle, param1: com.facebook.share.model.ShareMessengerOpenGraphMusicTemplateContent): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module internal {
				export class NativeDialogParameters {
					public static class: java.lang.Class<com.facebook.share.internal.NativeDialogParameters>;
					public constructor();
					public static create(param0: java.util.UUID, param1: com.facebook.share.model.ShareContent<any,any>, param2: boolean): globalAndroid.os.Bundle;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module internal {
				export class OpenGraphActionDialogFeature extends com.facebook.internal.DialogFeature {
					public static class: java.lang.Class<com.facebook.share.internal.OpenGraphActionDialogFeature>;
					public static OG_ACTION_DIALOG: com.facebook.share.internal.OpenGraphActionDialogFeature;
					public getMinVersion(): number;
					public name(): string;
					public static valueOf(param0: string): com.facebook.share.internal.OpenGraphActionDialogFeature;
					public static values(): native.Array<com.facebook.share.internal.OpenGraphActionDialogFeature>;
					public getAction(): string;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module internal {
				export class OpenGraphJSONUtility {
					public static class: java.lang.Class<com.facebook.share.internal.OpenGraphJSONUtility>;
					public static toJSONObject(param0: com.facebook.share.model.ShareOpenGraphAction, param1: com.facebook.share.internal.OpenGraphJSONUtility.PhotoJSONProcessor): org.json.JSONObject;
					public static toJSONValue(param0: any, param1: com.facebook.share.internal.OpenGraphJSONUtility.PhotoJSONProcessor): any;
				}
				export module OpenGraphJSONUtility {
					export class PhotoJSONProcessor {
						public static class: java.lang.Class<com.facebook.share.internal.OpenGraphJSONUtility.PhotoJSONProcessor>;
						/**
						 * Constructs a new instance of the com.facebook.share.internal.OpenGraphJSONUtility$PhotoJSONProcessor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							toJSONObject(param0: com.facebook.share.model.SharePhoto): org.json.JSONObject;
						});
						public constructor();
						public toJSONObject(param0: com.facebook.share.model.SharePhoto): org.json.JSONObject;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module internal {
				export class OpenGraphMessageDialogFeature extends com.facebook.internal.DialogFeature {
					public static class: java.lang.Class<com.facebook.share.internal.OpenGraphMessageDialogFeature>;
					public static OG_MESSAGE_DIALOG: com.facebook.share.internal.OpenGraphMessageDialogFeature;
					public getMinVersion(): number;
					public name(): string;
					public static valueOf(param0: string): com.facebook.share.internal.OpenGraphMessageDialogFeature;
					public static values(): native.Array<com.facebook.share.internal.OpenGraphMessageDialogFeature>;
					public getAction(): string;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module internal {
				export abstract class ResultProcessor {
					public static class: java.lang.Class<com.facebook.share.internal.ResultProcessor>;
					public onError(param0: com.facebook.internal.AppCall, param1: com.facebook.FacebookException): void;
					public onSuccess(param0: com.facebook.internal.AppCall, param1: globalAndroid.os.Bundle): void;
					public onCancel(param0: com.facebook.internal.AppCall): void;
					public constructor(param0: com.facebook.FacebookCallback<any>);
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module internal {
				export class ShareConstants {
					public static class: java.lang.Class<com.facebook.share.internal.ShareConstants>;
					public static WEB_DIALOG_PARAM_ACTION_TYPE: string;
					public static WEB_DIALOG_PARAM_DATA: string;
					public static WEB_DIALOG_PARAM_MESSAGE: string;
					public static WEB_DIALOG_PARAM_TO: string;
					public static WEB_DIALOG_PARAM_TITLE: string;
					public static WEB_DIALOG_PARAM_OBJECT_ID: string;
					public static WEB_DIALOG_PARAM_FILTERS: string;
					public static WEB_DIALOG_PARAM_SUGGESTIONS: string;
					public static WEB_DIALOG_PARAM_HREF: string;
					public static WEB_DIALOG_PARAM_ACTION_PROPERTIES: string;
					public static WEB_DIALOG_PARAM_QUOTE: string;
					public static WEB_DIALOG_PARAM_HASHTAG: string;
					public static WEB_DIALOG_PARAM_MEDIA: string;
					public static WEB_DIALOG_PARAM_LINK: string;
					public static WEB_DIALOG_PARAM_PICTURE: string;
					public static WEB_DIALOG_PARAM_NAME: string;
					public static WEB_DIALOG_PARAM_DESCRIPTION: string;
					public static WEB_DIALOG_PARAM_ID: string;
					public static WEB_DIALOG_PARAM_PRIVACY: string;
					public static WEB_DIALOG_RESULT_PARAM_POST_ID: string;
					public static WEB_DIALOG_RESULT_PARAM_REQUEST_ID: string;
					public static WEB_DIALOG_RESULT_PARAM_TO_ARRAY_MEMBER: string;
					public static LEGACY_PLACE_TAG: string;
					public static LEGACY_FRIEND_TAGS: string;
					public static LEGACY_LINK: string;
					public static LEGACY_IMAGE: string;
					public static LEGACY_TITLE: string;
					public static LEGACY_DESCRIPTION: string;
					public static LEGACY_REF: string;
					public static LEGACY_DATA_FAILURES_FATAL: string;
					public static LEGACY_PHOTOS: string;
					public static PLACE_ID: string;
					public static PEOPLE_IDS: string;
					public static PAGE_ID: string;
					public static CONTENT_URL: string;
					public static MESSENGER_URL: string;
					public static HASHTAG: string;
					public static IMAGE_URL: string;
					public static TITLE: string;
					public static SUBTITLE: string;
					public static ITEM_URL: string;
					public static BUTTON_TITLE: string;
					public static BUTTON_URL: string;
					public static PREVIEW_TYPE: string;
					public static TARGET_DISPLAY: string;
					public static ATTACHMENT_ID: string;
					public static OPEN_GRAPH_URL: string;
					public static DESCRIPTION: string;
					public static REF: string;
					public static DATA_FAILURES_FATAL: string;
					public static PHOTOS: string;
					public static VIDEO_URL: string;
					public static QUOTE: string;
					public static MEDIA: string;
					public static MESSENGER_PLATFORM_CONTENT: string;
					public static MEDIA_TYPE: string;
					public static MEDIA_URI: string;
					public static MEDIA_EXTENSION: string;
					public static EFFECT_ID: string;
					public static EFFECT_ARGS: string;
					public static EFFECT_TEXTURES: string;
					public static LEGACY_ACTION: string;
					public static LEGACY_ACTION_TYPE: string;
					public static LEGACY_PREVIEW_PROPERTY_NAME: string;
					public static ACTION: string;
					public static ACTION_TYPE: string;
					public static PREVIEW_PROPERTY_NAME: string;
					public static OBJECT_ID: string;
					public static OBJECT_TYPE: string;
					public static APPLINK_URL: string;
					public static PREVIEW_IMAGE_URL: string;
					public static PROMO_CODE: string;
					public static PROMO_TEXT: string;
					public static DEEPLINK_CONTEXT: string;
					public static DESTINATION: string;
					public static EXTRA_OBJECT_ID: string;
					public static EXTRA_OBJECT_IS_LIKED: string;
					public static EXTRA_LIKE_COUNT_STRING_WITH_LIKE: string;
					public static EXTRA_LIKE_COUNT_STRING_WITHOUT_LIKE: string;
					public static EXTRA_SOCIAL_SENTENCE_WITH_LIKE: string;
					public static EXTRA_SOCIAL_SENTENCE_WITHOUT_LIKE: string;
					public static EXTRA_UNLIKE_TOKEN: string;
					public static EXTRA_RESULT_POST_ID: string;
					public static RESULT_POST_ID: string;
					public static MAXIMUM_PHOTO_COUNT: number;
					public static MAXIMUM_MEDIA_COUNT: number;
					public static FEED_TO_PARAM: string;
					public static FEED_LINK_PARAM: string;
					public static FEED_PICTURE_PARAM: string;
					public static FEED_SOURCE_PARAM: string;
					public static FEED_NAME_PARAM: string;
					public static FEED_CAPTION_PARAM: string;
					public static FEED_DESCRIPTION_PARAM: string;
					public static STORY_INTERACTIVE_COLOR_LIST: string;
					public static STORY_DEEP_LINK_URL: string;
					public static STORY_BG_ASSET: string;
					public static STORY_INTERACTIVE_ASSET_URI: string;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module internal {
				export class ShareContentValidation {
					public static class: java.lang.Class<com.facebook.share.internal.ShareContentValidation>;
					public static validateMedium(param0: com.facebook.share.model.ShareMedia, param1: com.facebook.share.internal.ShareContentValidation.Validator): void;
					public static validateForMessage(param0: com.facebook.share.model.ShareContent<any,any>): void;
					public static validateForNativeShare(param0: com.facebook.share.model.ShareContent<any,any>): void;
					public constructor();
					public static validateForApiShare(param0: com.facebook.share.model.ShareContent<any,any>): void;
					public static validateForStoryShare(param0: com.facebook.share.model.ShareContent<any,any>): void;
					public static validateForWebShare(param0: com.facebook.share.model.ShareContent<any,any>): void;
				}
				export module ShareContentValidation {
					export class ApiValidator extends com.facebook.share.internal.ShareContentValidation.Validator {
						public static class: java.lang.Class<com.facebook.share.internal.ShareContentValidation.ApiValidator>;
						public validate(param0: com.facebook.share.model.ShareMedia): void;
						public validate(param0: com.facebook.share.model.ShareMessengerMediaTemplateContent): void;
						public validate(param0: com.facebook.share.model.SharePhotoContent): void;
						public validate(param0: com.facebook.share.model.ShareCameraEffectContent): void;
						public validate(param0: com.facebook.share.model.ShareMediaContent): void;
						public validate(param0: com.facebook.share.model.ShareStoryContent): void;
						public validate(param0: com.facebook.share.model.ShareOpenGraphContent): void;
						public validate(param0: com.facebook.share.model.ShareLinkContent): void;
						public validate(param0: com.facebook.share.model.ShareVideoContent): void;
						public validate(param0: com.facebook.share.model.ShareOpenGraphAction): void;
						public validate(param0: com.facebook.share.model.ShareOpenGraphObject): void;
						public validate(param0: com.facebook.share.model.SharePhoto): void;
						public validate(param0: com.facebook.share.model.ShareMessengerOpenGraphMusicTemplateContent): void;
						public validate(param0: com.facebook.share.model.ShareMessengerGenericTemplateContent): void;
						public validate(param0: com.facebook.share.model.ShareVideo): void;
						public validate(param0: com.facebook.share.model.ShareOpenGraphValueContainer<any,any>, param1: boolean): void;
					}
					export class StoryShareValidator extends com.facebook.share.internal.ShareContentValidation.Validator {
						public static class: java.lang.Class<com.facebook.share.internal.ShareContentValidation.StoryShareValidator>;
						public validate(param0: com.facebook.share.model.ShareMedia): void;
						public validate(param0: com.facebook.share.model.ShareMessengerMediaTemplateContent): void;
						public validate(param0: com.facebook.share.model.SharePhotoContent): void;
						public validate(param0: com.facebook.share.model.ShareCameraEffectContent): void;
						public validate(param0: com.facebook.share.model.ShareMediaContent): void;
						public validate(param0: com.facebook.share.model.ShareStoryContent): void;
						public validate(param0: com.facebook.share.model.ShareOpenGraphContent): void;
						public validate(param0: com.facebook.share.model.ShareLinkContent): void;
						public validate(param0: com.facebook.share.model.ShareVideoContent): void;
						public validate(param0: com.facebook.share.model.ShareOpenGraphAction): void;
						public validate(param0: com.facebook.share.model.ShareOpenGraphObject): void;
						public validate(param0: com.facebook.share.model.SharePhoto): void;
						public validate(param0: com.facebook.share.model.ShareMessengerOpenGraphMusicTemplateContent): void;
						public validate(param0: com.facebook.share.model.ShareMessengerGenericTemplateContent): void;
						public validate(param0: com.facebook.share.model.ShareVideo): void;
						public validate(param0: com.facebook.share.model.ShareOpenGraphValueContainer<any,any>, param1: boolean): void;
					}
					export class Validator {
						public static class: java.lang.Class<com.facebook.share.internal.ShareContentValidation.Validator>;
						public validate(param0: com.facebook.share.model.ShareMedia): void;
						public validate(param0: com.facebook.share.model.ShareMessengerMediaTemplateContent): void;
						public validate(param0: com.facebook.share.model.SharePhotoContent): void;
						public validate(param0: com.facebook.share.model.ShareCameraEffectContent): void;
						public validate(param0: com.facebook.share.model.ShareMediaContent): void;
						public validate(param0: com.facebook.share.model.ShareStoryContent): void;
						public validate(param0: com.facebook.share.model.ShareOpenGraphContent): void;
						public validate(param0: com.facebook.share.model.ShareLinkContent): void;
						public validate(param0: com.facebook.share.model.ShareVideoContent): void;
						public validate(param0: com.facebook.share.model.ShareOpenGraphAction): void;
						public isOpenGraphContent(): boolean;
						public validate(param0: com.facebook.share.model.ShareOpenGraphObject): void;
						public validate(param0: com.facebook.share.model.SharePhoto): void;
						public validate(param0: com.facebook.share.model.ShareMessengerOpenGraphMusicTemplateContent): void;
						public validate(param0: com.facebook.share.model.ShareMessengerGenericTemplateContent): void;
						public validate(param0: com.facebook.share.model.ShareVideo): void;
						public validate(param0: com.facebook.share.model.ShareOpenGraphValueContainer<any,any>, param1: boolean): void;
					}
					export class WebShareValidator extends com.facebook.share.internal.ShareContentValidation.Validator {
						public static class: java.lang.Class<com.facebook.share.internal.ShareContentValidation.WebShareValidator>;
						public validate(param0: com.facebook.share.model.ShareMedia): void;
						public validate(param0: com.facebook.share.model.ShareMessengerMediaTemplateContent): void;
						public validate(param0: com.facebook.share.model.SharePhotoContent): void;
						public validate(param0: com.facebook.share.model.ShareCameraEffectContent): void;
						public validate(param0: com.facebook.share.model.ShareMediaContent): void;
						public validate(param0: com.facebook.share.model.ShareStoryContent): void;
						public validate(param0: com.facebook.share.model.ShareOpenGraphContent): void;
						public validate(param0: com.facebook.share.model.ShareLinkContent): void;
						public validate(param0: com.facebook.share.model.ShareVideoContent): void;
						public validate(param0: com.facebook.share.model.ShareOpenGraphAction): void;
						public validate(param0: com.facebook.share.model.ShareOpenGraphObject): void;
						public validate(param0: com.facebook.share.model.SharePhoto): void;
						public validate(param0: com.facebook.share.model.ShareMessengerOpenGraphMusicTemplateContent): void;
						public validate(param0: com.facebook.share.model.ShareMessengerGenericTemplateContent): void;
						public validate(param0: com.facebook.share.model.ShareVideo): void;
						public validate(param0: com.facebook.share.model.ShareOpenGraphValueContainer<any,any>, param1: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module internal {
				export class ShareDialogFeature extends com.facebook.internal.DialogFeature {
					public static class: java.lang.Class<com.facebook.share.internal.ShareDialogFeature>;
					public static SHARE_DIALOG: com.facebook.share.internal.ShareDialogFeature;
					public static PHOTOS: com.facebook.share.internal.ShareDialogFeature;
					public static VIDEO: com.facebook.share.internal.ShareDialogFeature;
					public static MULTIMEDIA: com.facebook.share.internal.ShareDialogFeature;
					public static HASHTAG: com.facebook.share.internal.ShareDialogFeature;
					public static LINK_SHARE_QUOTES: com.facebook.share.internal.ShareDialogFeature;
					public getMinVersion(): number;
					public name(): string;
					public static values(): native.Array<com.facebook.share.internal.ShareDialogFeature>;
					public static valueOf(param0: string): com.facebook.share.internal.ShareDialogFeature;
					public getAction(): string;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module internal {
				export class ShareFeedContent extends com.facebook.share.model.ShareContent<com.facebook.share.internal.ShareFeedContent,com.facebook.share.internal.ShareFeedContent.Builder> {
					public static class: java.lang.Class<com.facebook.share.internal.ShareFeedContent>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.share.internal.ShareFeedContent>;
					public getPicture(): string;
					public getLinkName(): string;
					public describeContents(): number;
					public getLink(): string;
					public getLinkCaption(): string;
					public getLinkDescription(): string;
					public getToId(): string;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getMediaSource(): string;
				}
				export module ShareFeedContent {
					export class Builder extends com.facebook.share.model.ShareContent.Builder<com.facebook.share.internal.ShareFeedContent,com.facebook.share.internal.ShareFeedContent.Builder> {
						public static class: java.lang.Class<com.facebook.share.internal.ShareFeedContent.Builder>;
						public constructor();
						public setLinkCaption(param0: string): com.facebook.share.internal.ShareFeedContent.Builder;
						public readFrom(param0: any): any;
						public readFrom(param0: com.facebook.share.internal.ShareFeedContent): com.facebook.share.internal.ShareFeedContent.Builder;
						public setPicture(param0: string): com.facebook.share.internal.ShareFeedContent.Builder;
						public build(): com.facebook.share.internal.ShareFeedContent;
						public setToId(param0: string): com.facebook.share.internal.ShareFeedContent.Builder;
						public setLink(param0: string): com.facebook.share.internal.ShareFeedContent.Builder;
						public setLinkName(param0: string): com.facebook.share.internal.ShareFeedContent.Builder;
						public setMediaSource(param0: string): com.facebook.share.internal.ShareFeedContent.Builder;
						public setLinkDescription(param0: string): com.facebook.share.internal.ShareFeedContent.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module internal {
				export class ShareInternalUtility {
					public static class: java.lang.Class<com.facebook.share.internal.ShareInternalUtility>;
					public static MY_PHOTOS: string;
					public static getTextureUrlBundle(param0: com.facebook.share.model.ShareCameraEffectContent, param1: java.util.UUID): globalAndroid.os.Bundle;
					public static registerStaticShareCallback(param0: number): void;
					public static invokeCallbackWithException(param0: com.facebook.FacebookCallback<com.facebook.share.Sharer.Result>, param1: java.lang.Exception): void;
					public static getFieldNameAndNamespaceFromFullName(param0: string): globalAndroid.util.Pair<string,string>;
					public constructor();
					public static getPhotoUrls(param0: com.facebook.share.model.SharePhotoContent, param1: java.util.UUID): java.util.List<string>;
					public static getMediaInfos(param0: com.facebook.share.model.ShareMediaContent, param1: java.util.UUID): java.util.List<globalAndroid.os.Bundle>;
					public static getShareDialogPostId(param0: globalAndroid.os.Bundle): string;
					public static newUploadStagingResourceWithImageRequest(param0: com.facebook.AccessToken, param1: globalAndroid.graphics.Bitmap, param2: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
					public static getStickerUrl(param0: com.facebook.share.model.ShareStoryContent, param1: java.util.UUID): globalAndroid.os.Bundle;
					public static getNativeDialogCompletionGesture(param0: globalAndroid.os.Bundle): string;
					public static getBackgroundAssetMediaInfo(param0: com.facebook.share.model.ShareStoryContent, param1: java.util.UUID): globalAndroid.os.Bundle;
					public static getUriExtension(param0: globalAndroid.net.Uri): string;
					public static newUploadStagingResourceWithImageRequest(param0: com.facebook.AccessToken, param1: globalAndroid.net.Uri, param2: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
					public static getMostSpecificObjectType(param0: com.facebook.share.widget.LikeView.ObjectType, param1: com.facebook.share.widget.LikeView.ObjectType): com.facebook.share.widget.LikeView.ObjectType;
					public static toJSONObjectForWeb(param0: com.facebook.share.model.ShareOpenGraphContent): org.json.JSONObject;
					public static removeNamespacesFromOGJsonArray(param0: org.json.JSONArray, param1: boolean): org.json.JSONArray;
					public static handleActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent, param3: com.facebook.share.internal.ResultProcessor): boolean;
					public static registerSharerCallback(param0: number, param1: com.facebook.CallbackManager, param2: com.facebook.FacebookCallback<com.facebook.share.Sharer.Result>): void;
					public static getVideoUrl(param0: com.facebook.share.model.ShareVideoContent, param1: java.util.UUID): string;
					public static removeNamespacesFromOGJsonObject(param0: org.json.JSONObject, param1: boolean): org.json.JSONObject;
					public static invokeCallbackWithResults(param0: com.facebook.FacebookCallback<com.facebook.share.Sharer.Result>, param1: string, param2: com.facebook.GraphResponse): void;
					public static toJSONObjectForCall(param0: java.util.UUID, param1: com.facebook.share.model.ShareOpenGraphContent): org.json.JSONObject;
					public static invokeCallbackWithError(param0: com.facebook.FacebookCallback<com.facebook.share.Sharer.Result>, param1: string): void;
					public static getShareResultProcessor(param0: com.facebook.FacebookCallback<com.facebook.share.Sharer.Result>): com.facebook.share.internal.ResultProcessor;
					public static newUploadStagingResourceWithImageRequest(param0: com.facebook.AccessToken, param1: java.io.File, param2: com.facebook.GraphRequest.Callback): com.facebook.GraphRequest;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module internal {
				export class ShareStoryFeature extends com.facebook.internal.DialogFeature {
					public static class: java.lang.Class<com.facebook.share.internal.ShareStoryFeature>;
					public static SHARE_STORY_ASSET: com.facebook.share.internal.ShareStoryFeature;
					public getMinVersion(): number;
					public name(): string;
					public static valueOf(param0: string): com.facebook.share.internal.ShareStoryFeature;
					public static values(): native.Array<com.facebook.share.internal.ShareStoryFeature>;
					public getAction(): string;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module internal {
				export class VideoUploader {
					public static class: java.lang.Class<com.facebook.share.internal.VideoUploader>;
					public constructor();
					public static uploadAsync(param0: com.facebook.share.model.ShareVideoContent, param1: com.facebook.FacebookCallback<com.facebook.share.Sharer.Result>): void;
					public static uploadAsync(param0: com.facebook.share.model.ShareVideoContent, param1: string, param2: com.facebook.FacebookCallback<com.facebook.share.Sharer.Result>): void;
				}
				export module VideoUploader {
					export class FinishUploadWorkItem extends com.facebook.share.internal.VideoUploader.UploadWorkItemBase {
						public static class: java.lang.Class<com.facebook.share.internal.VideoUploader.FinishUploadWorkItem>;
						public getParameters(): globalAndroid.os.Bundle;
						public getTransientErrorCodes(): java.util.Set<java.lang.Integer>;
						public handleError(param0: com.facebook.FacebookException): void;
						public enqueueRetry(param0: number): void;
						public constructor(param0: com.facebook.share.internal.VideoUploader.UploadContext, param1: number);
						public handleSuccess(param0: org.json.JSONObject): void;
					}
					export class StartUploadWorkItem extends com.facebook.share.internal.VideoUploader.UploadWorkItemBase {
						public static class: java.lang.Class<com.facebook.share.internal.VideoUploader.StartUploadWorkItem>;
						public getParameters(): globalAndroid.os.Bundle;
						public getTransientErrorCodes(): java.util.Set<java.lang.Integer>;
						public handleError(param0: com.facebook.FacebookException): void;
						public enqueueRetry(param0: number): void;
						public constructor(param0: com.facebook.share.internal.VideoUploader.UploadContext, param1: number);
						public handleSuccess(param0: org.json.JSONObject): void;
					}
					export class TransferChunkWorkItem extends com.facebook.share.internal.VideoUploader.UploadWorkItemBase {
						public static class: java.lang.Class<com.facebook.share.internal.VideoUploader.TransferChunkWorkItem>;
						public getParameters(): globalAndroid.os.Bundle;
						public getTransientErrorCodes(): java.util.Set<java.lang.Integer>;
						public handleError(param0: com.facebook.FacebookException): void;
						public enqueueRetry(param0: number): void;
						public constructor(param0: com.facebook.share.internal.VideoUploader.UploadContext, param1: string, param2: string, param3: number);
						public constructor(param0: com.facebook.share.internal.VideoUploader.UploadContext, param1: number);
						public handleSuccess(param0: org.json.JSONObject): void;
					}
					export class UploadContext {
						public static class: java.lang.Class<com.facebook.share.internal.VideoUploader.UploadContext>;
						public videoUri: globalAndroid.net.Uri;
						public title: string;
						public description: string;
						public ref: string;
						public graphNode: string;
						public accessToken: com.facebook.AccessToken;
						public callback: com.facebook.FacebookCallback<com.facebook.share.Sharer.Result>;
						public sessionId: string;
						public videoId: string;
						public videoStream: java.io.InputStream;
						public videoSize: number;
						public chunkStart: string;
						public isCanceled: boolean;
						public workItem: com.facebook.internal.WorkQueue.WorkItem;
						public params: globalAndroid.os.Bundle;
					}
					export abstract class UploadWorkItemBase {
						public static class: java.lang.Class<com.facebook.share.internal.VideoUploader.UploadWorkItemBase>;
						public uploadContext: com.facebook.share.internal.VideoUploader.UploadContext;
						public completedRetries: number;
						public getParameters(): globalAndroid.os.Bundle;
						public getTransientErrorCodes(): java.util.Set<java.lang.Integer>;
						public run(): void;
						public issueResponseOnMainThread(param0: com.facebook.FacebookException, param1: string): void;
						public endUploadWithFailure(param0: com.facebook.FacebookException): void;
						public handleError(param0: com.facebook.FacebookException): void;
						public enqueueRetry(param0: number): void;
						public constructor(param0: com.facebook.share.internal.VideoUploader.UploadContext, param1: number);
						public handleSuccess(param0: org.json.JSONObject): void;
						public executeGraphRequestSynchronously(param0: globalAndroid.os.Bundle): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module internal {
				export class WebDialogParameters {
					public static class: java.lang.Class<com.facebook.share.internal.WebDialogParameters>;
					public static create(param0: com.facebook.share.model.ShareOpenGraphContent): globalAndroid.os.Bundle;
					public static create(param0: com.facebook.share.model.GameRequestContent): globalAndroid.os.Bundle;
					public static createBaseParameters(param0: com.facebook.share.model.ShareContent<any,any>): globalAndroid.os.Bundle;
					public static createForFeed(param0: com.facebook.share.internal.ShareFeedContent): globalAndroid.os.Bundle;
					public constructor();
					public static create(param0: com.facebook.share.model.ShareLinkContent): globalAndroid.os.Bundle;
					public static create(param0: com.facebook.share.model.SharePhotoContent): globalAndroid.os.Bundle;
					public static createForFeed(param0: com.facebook.share.model.ShareLinkContent): globalAndroid.os.Bundle;
					public static create(param0: com.facebook.share.model.AppGroupCreationContent): globalAndroid.os.Bundle;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module model {
				export class AppGroupCreationContent extends com.facebook.share.model.ShareModel {
					public static class: java.lang.Class<com.facebook.share.model.AppGroupCreationContent>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.share.model.AppGroupCreationContent>;
					public getName(): string;
					public getAppGroupPrivacy(): com.facebook.share.model.AppGroupCreationContent.AppGroupPrivacy;
					public describeContents(): number;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getDescription(): string;
				}
				export module AppGroupCreationContent {
					export class AppGroupPrivacy {
						public static class: java.lang.Class<com.facebook.share.model.AppGroupCreationContent.AppGroupPrivacy>;
						public static Open: com.facebook.share.model.AppGroupCreationContent.AppGroupPrivacy;
						public static Closed: com.facebook.share.model.AppGroupCreationContent.AppGroupPrivacy;
						public static valueOf(param0: string): com.facebook.share.model.AppGroupCreationContent.AppGroupPrivacy;
						public static values(): native.Array<com.facebook.share.model.AppGroupCreationContent.AppGroupPrivacy>;
					}
					export class Builder extends com.facebook.share.model.ShareModelBuilder<com.facebook.share.model.AppGroupCreationContent,com.facebook.share.model.AppGroupCreationContent.Builder> {
						public static class: java.lang.Class<com.facebook.share.model.AppGroupCreationContent.Builder>;
						public constructor();
						public setDescription(param0: string): com.facebook.share.model.AppGroupCreationContent.Builder;
						public readFrom(param0: any): any;
						public setAppGroupPrivacy(param0: com.facebook.share.model.AppGroupCreationContent.AppGroupPrivacy): com.facebook.share.model.AppGroupCreationContent.Builder;
						public build(): com.facebook.share.model.AppGroupCreationContent;
						public setName(param0: string): com.facebook.share.model.AppGroupCreationContent.Builder;
						public readFrom(param0: com.facebook.share.model.AppGroupCreationContent): com.facebook.share.model.AppGroupCreationContent.Builder;
						public build(): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module model {
				export class AppInviteContent extends com.facebook.share.model.ShareModel {
					public static class: java.lang.Class<com.facebook.share.model.AppInviteContent>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.share.model.AppInviteContent>;
					public getApplinkUrl(): string;
					public getDestination(): com.facebook.share.model.AppInviteContent.Builder.Destination;
					public describeContents(): number;
					public getPreviewImageUrl(): string;
					public getPromotionCode(): string;
					public getPromotionText(): string;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				}
				export module AppInviteContent {
					export class Builder extends com.facebook.share.model.ShareModelBuilder<com.facebook.share.model.AppInviteContent,com.facebook.share.model.AppInviteContent.Builder> {
						public static class: java.lang.Class<com.facebook.share.model.AppInviteContent.Builder>;
						public setPromotionDetails(param0: string, param1: string): com.facebook.share.model.AppInviteContent.Builder;
						public setDestination(param0: com.facebook.share.model.AppInviteContent.Builder.Destination): com.facebook.share.model.AppInviteContent.Builder;
						public constructor();
						public setPreviewImageUrl(param0: string): com.facebook.share.model.AppInviteContent.Builder;
						public setApplinkUrl(param0: string): com.facebook.share.model.AppInviteContent.Builder;
						public readFrom(param0: com.facebook.share.model.AppInviteContent): com.facebook.share.model.AppInviteContent.Builder;
						public readFrom(param0: any): any;
						public build(): com.facebook.share.model.AppInviteContent;
						public build(): any;
					}
					export module Builder {
						export class Destination {
							public static class: java.lang.Class<com.facebook.share.model.AppInviteContent.Builder.Destination>;
							public static FACEBOOK: com.facebook.share.model.AppInviteContent.Builder.Destination;
							public static MESSENGER: com.facebook.share.model.AppInviteContent.Builder.Destination;
							public static valueOf(param0: string): com.facebook.share.model.AppInviteContent.Builder.Destination;
							public equalsName(param0: string): boolean;
							public toString(): string;
							public static values(): native.Array<com.facebook.share.model.AppInviteContent.Builder.Destination>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module model {
				export class CameraEffectArguments extends com.facebook.share.model.ShareModel {
					public static class: java.lang.Class<com.facebook.share.model.CameraEffectArguments>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.share.model.CameraEffectArguments>;
					public getStringArray(param0: string): native.Array<string>;
					public get(param0: string): any;
					public describeContents(): number;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getString(param0: string): string;
					public keySet(): java.util.Set<string>;
				}
				export module CameraEffectArguments {
					export class Builder extends com.facebook.share.model.ShareModelBuilder<com.facebook.share.model.CameraEffectArguments,com.facebook.share.model.CameraEffectArguments.Builder> {
						public static class: java.lang.Class<com.facebook.share.model.CameraEffectArguments.Builder>;
						public readFrom(param0: com.facebook.share.model.CameraEffectArguments): com.facebook.share.model.CameraEffectArguments.Builder;
						public putArgument(param0: string, param1: native.Array<string>): com.facebook.share.model.CameraEffectArguments.Builder;
						public constructor();
						public readFrom(param0: any): any;
						public readFrom(param0: globalAndroid.os.Parcel): com.facebook.share.model.CameraEffectArguments.Builder;
						public build(): com.facebook.share.model.CameraEffectArguments;
						public putArgument(param0: string, param1: string): com.facebook.share.model.CameraEffectArguments.Builder;
						public build(): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module model {
				export class CameraEffectTextures extends com.facebook.share.model.ShareModel {
					public static class: java.lang.Class<com.facebook.share.model.CameraEffectTextures>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.share.model.CameraEffectTextures>;
					public getTextureBitmap(param0: string): globalAndroid.graphics.Bitmap;
					public get(param0: string): any;
					public describeContents(): number;
					public getTextureUri(param0: string): globalAndroid.net.Uri;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public keySet(): java.util.Set<string>;
				}
				export module CameraEffectTextures {
					export class Builder extends com.facebook.share.model.ShareModelBuilder<com.facebook.share.model.CameraEffectTextures,com.facebook.share.model.CameraEffectTextures.Builder> {
						public static class: java.lang.Class<com.facebook.share.model.CameraEffectTextures.Builder>;
						public readFrom(param0: globalAndroid.os.Parcel): com.facebook.share.model.CameraEffectTextures.Builder;
						public constructor();
						public readFrom(param0: any): any;
						public putTexture(param0: string, param1: globalAndroid.graphics.Bitmap): com.facebook.share.model.CameraEffectTextures.Builder;
						public readFrom(param0: com.facebook.share.model.CameraEffectTextures): com.facebook.share.model.CameraEffectTextures.Builder;
						public build(): com.facebook.share.model.CameraEffectTextures;
						public putTexture(param0: string, param1: globalAndroid.net.Uri): com.facebook.share.model.CameraEffectTextures.Builder;
						public build(): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module model {
				export class GameRequestContent extends com.facebook.share.model.ShareModel {
					public static class: java.lang.Class<com.facebook.share.model.GameRequestContent>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.share.model.GameRequestContent>;
					public getTitle(): string;
					public getData(): string;
					public getActionType(): com.facebook.share.model.GameRequestContent.ActionType;
					public getRecipients(): java.util.List<string>;
					public getTo(): string;
					public describeContents(): number;
					public getMessage(): string;
					public getSuggestions(): java.util.List<string>;
					public getObjectId(): string;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getFilters(): com.facebook.share.model.GameRequestContent.Filters;
				}
				export module GameRequestContent {
					export class ActionType {
						public static class: java.lang.Class<com.facebook.share.model.GameRequestContent.ActionType>;
						public static SEND: com.facebook.share.model.GameRequestContent.ActionType;
						public static ASKFOR: com.facebook.share.model.GameRequestContent.ActionType;
						public static TURN: com.facebook.share.model.GameRequestContent.ActionType;
						public static valueOf(param0: string): com.facebook.share.model.GameRequestContent.ActionType;
						public static values(): native.Array<com.facebook.share.model.GameRequestContent.ActionType>;
					}
					export class Builder extends com.facebook.share.model.ShareModelBuilder<com.facebook.share.model.GameRequestContent,com.facebook.share.model.GameRequestContent.Builder> {
						public static class: java.lang.Class<com.facebook.share.model.GameRequestContent.Builder>;
						public setMessage(param0: string): com.facebook.share.model.GameRequestContent.Builder;
						public setRecipients(param0: java.util.List<string>): com.facebook.share.model.GameRequestContent.Builder;
						public constructor();
						public setTitle(param0: string): com.facebook.share.model.GameRequestContent.Builder;
						public readFrom(param0: any): any;
						public setData(param0: string): com.facebook.share.model.GameRequestContent.Builder;
						public setTo(param0: string): com.facebook.share.model.GameRequestContent.Builder;
						public build(): any;
						public setFilters(param0: com.facebook.share.model.GameRequestContent.Filters): com.facebook.share.model.GameRequestContent.Builder;
						public setSuggestions(param0: java.util.List<string>): com.facebook.share.model.GameRequestContent.Builder;
						public build(): com.facebook.share.model.GameRequestContent;
						public setActionType(param0: com.facebook.share.model.GameRequestContent.ActionType): com.facebook.share.model.GameRequestContent.Builder;
						public readFrom(param0: com.facebook.share.model.GameRequestContent): com.facebook.share.model.GameRequestContent.Builder;
						public setObjectId(param0: string): com.facebook.share.model.GameRequestContent.Builder;
					}
					export class Filters {
						public static class: java.lang.Class<com.facebook.share.model.GameRequestContent.Filters>;
						public static APP_USERS: com.facebook.share.model.GameRequestContent.Filters;
						public static APP_NON_USERS: com.facebook.share.model.GameRequestContent.Filters;
						public static values(): native.Array<com.facebook.share.model.GameRequestContent.Filters>;
						public static valueOf(param0: string): com.facebook.share.model.GameRequestContent.Filters;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module model {
				export class ShareCameraEffectContent extends com.facebook.share.model.ShareContent<com.facebook.share.model.ShareCameraEffectContent,com.facebook.share.model.ShareCameraEffectContent.Builder> {
					public static class: java.lang.Class<com.facebook.share.model.ShareCameraEffectContent>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.share.model.ShareCameraEffectContent>;
					public getArguments(): com.facebook.share.model.CameraEffectArguments;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getTextures(): com.facebook.share.model.CameraEffectTextures;
					public getEffectId(): string;
				}
				export module ShareCameraEffectContent {
					export class Builder extends com.facebook.share.model.ShareContent.Builder<com.facebook.share.model.ShareCameraEffectContent,com.facebook.share.model.ShareCameraEffectContent.Builder> {
						public static class: java.lang.Class<com.facebook.share.model.ShareCameraEffectContent.Builder>;
						public build(): com.facebook.share.model.ShareCameraEffectContent;
						public readFrom(param0: com.facebook.share.model.ShareCameraEffectContent): com.facebook.share.model.ShareCameraEffectContent.Builder;
						public constructor();
						public readFrom(param0: any): any;
						public setArguments(param0: com.facebook.share.model.CameraEffectArguments): com.facebook.share.model.ShareCameraEffectContent.Builder;
						public setTextures(param0: com.facebook.share.model.CameraEffectTextures): com.facebook.share.model.ShareCameraEffectContent.Builder;
						public setEffectId(param0: string): com.facebook.share.model.ShareCameraEffectContent.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module model {
				export abstract class ShareContent<P, E>  extends com.facebook.share.model.ShareModel {
					public static class: java.lang.Class<com.facebook.share.model.ShareContent<any,any>>;
					public getPlaceId(): string;
					public constructor(param0: globalAndroid.os.Parcel);
					public constructor(param0: com.facebook.share.model.ShareContent.Builder<any,any>);
					public getRef(): string;
					public getContentUrl(): globalAndroid.net.Uri;
					public getPeopleIds(): java.util.List<string>;
					public describeContents(): number;
					public getPageId(): string;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getShareHashtag(): com.facebook.share.model.ShareHashtag;
				}
				export module ShareContent {
					export abstract class Builder<P, E>  extends com.facebook.share.model.ShareModelBuilder<any,any> {
						public static class: java.lang.Class<com.facebook.share.model.ShareContent.Builder<any,any>>;
						public constructor();
						public readFrom(param0: any): any;
						public setPeopleIds(param0: java.util.List<string>): any;
						public setShareHashtag(param0: com.facebook.share.model.ShareHashtag): any;
						public setPageId(param0: string): any;
						public setContentUrl(param0: globalAndroid.net.Uri): any;
						public setPlaceId(param0: string): any;
						public setRef(param0: string): any;
						public build(): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module model {
				export class ShareHashtag extends com.facebook.share.model.ShareModel {
					public static class: java.lang.Class<com.facebook.share.model.ShareHashtag>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.share.model.ShareHashtag>;
					public describeContents(): number;
					public getHashtag(): string;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				}
				export module ShareHashtag {
					export class Builder extends com.facebook.share.model.ShareModelBuilder<com.facebook.share.model.ShareHashtag,com.facebook.share.model.ShareHashtag.Builder> {
						public static class: java.lang.Class<com.facebook.share.model.ShareHashtag.Builder>;
						public constructor();
						public readFrom(param0: any): any;
						public getHashtag(): string;
						public build(): com.facebook.share.model.ShareHashtag;
						public readFrom(param0: com.facebook.share.model.ShareHashtag): com.facebook.share.model.ShareHashtag.Builder;
						public setHashtag(param0: string): com.facebook.share.model.ShareHashtag.Builder;
						public build(): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module model {
				export class ShareLinkContent extends com.facebook.share.model.ShareContent<com.facebook.share.model.ShareLinkContent,com.facebook.share.model.ShareLinkContent.Builder> {
					public static class: java.lang.Class<com.facebook.share.model.ShareLinkContent>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.share.model.ShareLinkContent>;
					public getImageUrl(): globalAndroid.net.Uri;
					public getQuote(): string;
					public describeContents(): number;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getContentDescription(): string;
					public getContentTitle(): string;
				}
				export module ShareLinkContent {
					export class Builder extends com.facebook.share.model.ShareContent.Builder<com.facebook.share.model.ShareLinkContent,com.facebook.share.model.ShareLinkContent.Builder> {
						public static class: java.lang.Class<com.facebook.share.model.ShareLinkContent.Builder>;
						public setQuote(param0: string): com.facebook.share.model.ShareLinkContent.Builder;
						public constructor();
						public setContentDescription(param0: string): com.facebook.share.model.ShareLinkContent.Builder;
						public setImageUrl(param0: globalAndroid.net.Uri): com.facebook.share.model.ShareLinkContent.Builder;
						public readFrom(param0: any): any;
						public setContentTitle(param0: string): com.facebook.share.model.ShareLinkContent.Builder;
						public build(): com.facebook.share.model.ShareLinkContent;
						public readFrom(param0: com.facebook.share.model.ShareLinkContent): com.facebook.share.model.ShareLinkContent.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module model {
				export abstract class ShareMedia extends com.facebook.share.model.ShareModel {
					public static class: java.lang.Class<com.facebook.share.model.ShareMedia>;
					public getParameters(): globalAndroid.os.Bundle;
					public describeContents(): number;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public constructor(param0: com.facebook.share.model.ShareMedia.Builder<any,any>);
					public getMediaType(): com.facebook.share.model.ShareMedia.Type;
				}
				export module ShareMedia {
					export abstract class Builder<M, B>  extends com.facebook.share.model.ShareModelBuilder<any,any> {
						public static class: java.lang.Class<com.facebook.share.model.ShareMedia.Builder<any,any>>;
						public constructor();
						public readFrom(param0: any): any;
						public setParameter(param0: string, param1: string): any;
						public setParameters(param0: globalAndroid.os.Bundle): any;
						public build(): any;
					}
					export class Type {
						public static class: java.lang.Class<com.facebook.share.model.ShareMedia.Type>;
						public static PHOTO: com.facebook.share.model.ShareMedia.Type;
						public static VIDEO: com.facebook.share.model.ShareMedia.Type;
						public static values(): native.Array<com.facebook.share.model.ShareMedia.Type>;
						public static valueOf(param0: string): com.facebook.share.model.ShareMedia.Type;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module model {
				export class ShareMediaContent extends com.facebook.share.model.ShareContent<com.facebook.share.model.ShareMediaContent,com.facebook.share.model.ShareMediaContent.Builder> {
					public static class: java.lang.Class<com.facebook.share.model.ShareMediaContent>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.share.model.ShareMediaContent>;
					public getMedia(): java.util.List<com.facebook.share.model.ShareMedia>;
					public describeContents(): number;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				}
				export module ShareMediaContent {
					export class Builder extends com.facebook.share.model.ShareContent.Builder<com.facebook.share.model.ShareMediaContent,com.facebook.share.model.ShareMediaContent.Builder> {
						public static class: java.lang.Class<com.facebook.share.model.ShareMediaContent.Builder>;
						public addMedium(param0: com.facebook.share.model.ShareMedia): com.facebook.share.model.ShareMediaContent.Builder;
						public readFrom(param0: com.facebook.share.model.ShareMediaContent): com.facebook.share.model.ShareMediaContent.Builder;
						public constructor();
						public build(): com.facebook.share.model.ShareMediaContent;
						public readFrom(param0: any): any;
						public setMedia(param0: java.util.List<com.facebook.share.model.ShareMedia>): com.facebook.share.model.ShareMediaContent.Builder;
						public addMedia(param0: java.util.List<com.facebook.share.model.ShareMedia>): com.facebook.share.model.ShareMediaContent.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module model {
				export abstract class ShareMessengerActionButton extends com.facebook.share.model.ShareModel {
					public static class: java.lang.Class<com.facebook.share.model.ShareMessengerActionButton>;
					public getTitle(): string;
					public constructor(param0: com.facebook.share.model.ShareMessengerActionButton.Builder<any,any>);
					public describeContents(): number;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				}
				export module ShareMessengerActionButton {
					export abstract class Builder<M, B>  extends com.facebook.share.model.ShareModelBuilder<any,any> {
						public static class: java.lang.Class<com.facebook.share.model.ShareMessengerActionButton.Builder<any,any>>;
						public constructor();
						public readFrom(param0: any): any;
						public setTitle(param0: string): any;
						public build(): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module model {
				export class ShareMessengerGenericTemplateContent extends com.facebook.share.model.ShareContent<com.facebook.share.model.ShareMessengerGenericTemplateContent,com.facebook.share.model.ShareMessengerGenericTemplateContent.Builder> {
					public static class: java.lang.Class<com.facebook.share.model.ShareMessengerGenericTemplateContent>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.share.model.ShareMessengerGenericTemplateContent>;
					public constructor(param0: globalAndroid.os.Parcel);
					public constructor(param0: com.facebook.share.model.ShareContent.Builder<any,any>);
					public describeContents(): number;
					public constructor(param0: com.facebook.share.model.ShareMessengerGenericTemplateContent.Builder);
					public getIsSharable(): boolean;
					public getGenericTemplateElement(): com.facebook.share.model.ShareMessengerGenericTemplateElement;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getImageAspectRatio(): com.facebook.share.model.ShareMessengerGenericTemplateContent.ImageAspectRatio;
				}
				export module ShareMessengerGenericTemplateContent {
					export class Builder extends com.facebook.share.model.ShareContent.Builder<com.facebook.share.model.ShareMessengerGenericTemplateContent,com.facebook.share.model.ShareMessengerGenericTemplateContent.Builder> {
						public static class: java.lang.Class<com.facebook.share.model.ShareMessengerGenericTemplateContent.Builder>;
						public setImageAspectRatio(param0: com.facebook.share.model.ShareMessengerGenericTemplateContent.ImageAspectRatio): com.facebook.share.model.ShareMessengerGenericTemplateContent.Builder;
						public constructor();
						public setGenericTemplateElement(param0: com.facebook.share.model.ShareMessengerGenericTemplateElement): com.facebook.share.model.ShareMessengerGenericTemplateContent.Builder;
						public readFrom(param0: any): any;
						public build(): com.facebook.share.model.ShareMessengerGenericTemplateContent;
						public readFrom(param0: com.facebook.share.model.ShareMessengerGenericTemplateContent): com.facebook.share.model.ShareMessengerGenericTemplateContent.Builder;
						public setIsSharable(param0: boolean): com.facebook.share.model.ShareMessengerGenericTemplateContent.Builder;
					}
					export class ImageAspectRatio {
						public static class: java.lang.Class<com.facebook.share.model.ShareMessengerGenericTemplateContent.ImageAspectRatio>;
						public static HORIZONTAL: com.facebook.share.model.ShareMessengerGenericTemplateContent.ImageAspectRatio;
						public static SQUARE: com.facebook.share.model.ShareMessengerGenericTemplateContent.ImageAspectRatio;
						public static values(): native.Array<com.facebook.share.model.ShareMessengerGenericTemplateContent.ImageAspectRatio>;
						public static valueOf(param0: string): com.facebook.share.model.ShareMessengerGenericTemplateContent.ImageAspectRatio;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module model {
				export class ShareMessengerGenericTemplateElement extends com.facebook.share.model.ShareModel {
					public static class: java.lang.Class<com.facebook.share.model.ShareMessengerGenericTemplateElement>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.share.model.ShareMessengerGenericTemplateElement>;
					public getTitle(): string;
					public getImageUrl(): globalAndroid.net.Uri;
					public getSubtitle(): string;
					public getDefaultAction(): com.facebook.share.model.ShareMessengerActionButton;
					public describeContents(): number;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getButton(): com.facebook.share.model.ShareMessengerActionButton;
				}
				export module ShareMessengerGenericTemplateElement {
					export class Builder extends com.facebook.share.model.ShareModelBuilder<com.facebook.share.model.ShareMessengerGenericTemplateElement,com.facebook.share.model.ShareMessengerGenericTemplateElement.Builder> {
						public static class: java.lang.Class<com.facebook.share.model.ShareMessengerGenericTemplateElement.Builder>;
						public setDefaultAction(param0: com.facebook.share.model.ShareMessengerActionButton): com.facebook.share.model.ShareMessengerGenericTemplateElement.Builder;
						public build(): com.facebook.share.model.ShareMessengerGenericTemplateElement;
						public constructor();
						public setTitle(param0: string): com.facebook.share.model.ShareMessengerGenericTemplateElement.Builder;
						public setSubtitle(param0: string): com.facebook.share.model.ShareMessengerGenericTemplateElement.Builder;
						public readFrom(param0: any): any;
						public setImageUrl(param0: globalAndroid.net.Uri): com.facebook.share.model.ShareMessengerGenericTemplateElement.Builder;
						public setButton(param0: com.facebook.share.model.ShareMessengerActionButton): com.facebook.share.model.ShareMessengerGenericTemplateElement.Builder;
						public readFrom(param0: com.facebook.share.model.ShareMessengerGenericTemplateElement): com.facebook.share.model.ShareMessengerGenericTemplateElement.Builder;
						public build(): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module model {
				export class ShareMessengerMediaTemplateContent extends com.facebook.share.model.ShareContent<com.facebook.share.model.ShareMessengerMediaTemplateContent,com.facebook.share.model.ShareMessengerMediaTemplateContent.Builder> {
					public static class: java.lang.Class<com.facebook.share.model.ShareMessengerMediaTemplateContent>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.share.model.ShareMessengerMediaTemplateContent>;
					public describeContents(): number;
					public getMediaType(): com.facebook.share.model.ShareMessengerMediaTemplateContent.MediaType;
					public getMediaUrl(): globalAndroid.net.Uri;
					public getAttachmentId(): string;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getButton(): com.facebook.share.model.ShareMessengerActionButton;
				}
				export module ShareMessengerMediaTemplateContent {
					export class Builder extends com.facebook.share.model.ShareContent.Builder<com.facebook.share.model.ShareMessengerMediaTemplateContent,com.facebook.share.model.ShareMessengerMediaTemplateContent.Builder> {
						public static class: java.lang.Class<com.facebook.share.model.ShareMessengerMediaTemplateContent.Builder>;
						public setMediaUrl(param0: globalAndroid.net.Uri): com.facebook.share.model.ShareMessengerMediaTemplateContent.Builder;
						public constructor();
						public setButton(param0: com.facebook.share.model.ShareMessengerActionButton): com.facebook.share.model.ShareMessengerMediaTemplateContent.Builder;
						public readFrom(param0: any): any;
						public setAttachmentId(param0: string): com.facebook.share.model.ShareMessengerMediaTemplateContent.Builder;
						public build(): com.facebook.share.model.ShareMessengerMediaTemplateContent;
						public readFrom(param0: com.facebook.share.model.ShareMessengerMediaTemplateContent): com.facebook.share.model.ShareMessengerMediaTemplateContent.Builder;
						public setMediaType(param0: com.facebook.share.model.ShareMessengerMediaTemplateContent.MediaType): com.facebook.share.model.ShareMessengerMediaTemplateContent.Builder;
					}
					export class MediaType {
						public static class: java.lang.Class<com.facebook.share.model.ShareMessengerMediaTemplateContent.MediaType>;
						public static IMAGE: com.facebook.share.model.ShareMessengerMediaTemplateContent.MediaType;
						public static VIDEO: com.facebook.share.model.ShareMessengerMediaTemplateContent.MediaType;
						public static values(): native.Array<com.facebook.share.model.ShareMessengerMediaTemplateContent.MediaType>;
						public static valueOf(param0: string): com.facebook.share.model.ShareMessengerMediaTemplateContent.MediaType;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module model {
				export class ShareMessengerOpenGraphMusicTemplateContent extends com.facebook.share.model.ShareContent<com.facebook.share.model.ShareMessengerOpenGraphMusicTemplateContent,com.facebook.share.model.ShareMessengerOpenGraphMusicTemplateContent.Builder> {
					public static class: java.lang.Class<com.facebook.share.model.ShareMessengerOpenGraphMusicTemplateContent>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.share.model.ShareMessengerOpenGraphMusicTemplateContent>;
					public describeContents(): number;
					public getUrl(): globalAndroid.net.Uri;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getButton(): com.facebook.share.model.ShareMessengerActionButton;
				}
				export module ShareMessengerOpenGraphMusicTemplateContent {
					export class Builder extends com.facebook.share.model.ShareContent.Builder<com.facebook.share.model.ShareMessengerOpenGraphMusicTemplateContent,com.facebook.share.model.ShareMessengerOpenGraphMusicTemplateContent.Builder> {
						public static class: java.lang.Class<com.facebook.share.model.ShareMessengerOpenGraphMusicTemplateContent.Builder>;
						public constructor();
						public readFrom(param0: com.facebook.share.model.ShareMessengerOpenGraphMusicTemplateContent): com.facebook.share.model.ShareMessengerOpenGraphMusicTemplateContent.Builder;
						public setButton(param0: com.facebook.share.model.ShareMessengerActionButton): com.facebook.share.model.ShareMessengerOpenGraphMusicTemplateContent.Builder;
						public readFrom(param0: any): any;
						public setUrl(param0: globalAndroid.net.Uri): com.facebook.share.model.ShareMessengerOpenGraphMusicTemplateContent.Builder;
						public build(): com.facebook.share.model.ShareMessengerOpenGraphMusicTemplateContent;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module model {
				export class ShareMessengerURLActionButton extends com.facebook.share.model.ShareMessengerActionButton {
					public static class: java.lang.Class<com.facebook.share.model.ShareMessengerURLActionButton>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.share.model.ShareMessengerURLActionButton>;
					public getWebviewHeightRatio(): com.facebook.share.model.ShareMessengerURLActionButton.WebviewHeightRatio;
					public getIsMessengerExtensionURL(): boolean;
					public getUrl(): globalAndroid.net.Uri;
					public getShouldHideWebviewShareButton(): boolean;
					public getFallbackUrl(): globalAndroid.net.Uri;
				}
				export module ShareMessengerURLActionButton {
					export class Builder extends com.facebook.share.model.ShareMessengerActionButton.Builder<com.facebook.share.model.ShareMessengerURLActionButton,com.facebook.share.model.ShareMessengerURLActionButton.Builder> {
						public static class: java.lang.Class<com.facebook.share.model.ShareMessengerURLActionButton.Builder>;
						public setFallbackUrl(param0: globalAndroid.net.Uri): com.facebook.share.model.ShareMessengerURLActionButton.Builder;
						public constructor();
						public setWebviewHeightRatio(param0: com.facebook.share.model.ShareMessengerURLActionButton.WebviewHeightRatio): com.facebook.share.model.ShareMessengerURLActionButton.Builder;
						public build(): com.facebook.share.model.ShareMessengerURLActionButton;
						public readFrom(param0: any): any;
						public setUrl(param0: globalAndroid.net.Uri): com.facebook.share.model.ShareMessengerURLActionButton.Builder;
						public setIsMessengerExtensionURL(param0: boolean): com.facebook.share.model.ShareMessengerURLActionButton.Builder;
						public readFrom(param0: com.facebook.share.model.ShareMessengerURLActionButton): com.facebook.share.model.ShareMessengerURLActionButton.Builder;
						public setShouldHideWebviewShareButton(param0: boolean): com.facebook.share.model.ShareMessengerURLActionButton.Builder;
					}
					export class WebviewHeightRatio {
						public static class: java.lang.Class<com.facebook.share.model.ShareMessengerURLActionButton.WebviewHeightRatio>;
						public static WebviewHeightRatioFull: com.facebook.share.model.ShareMessengerURLActionButton.WebviewHeightRatio;
						public static WebviewHeightRatioTall: com.facebook.share.model.ShareMessengerURLActionButton.WebviewHeightRatio;
						public static WebviewHeightRatioCompact: com.facebook.share.model.ShareMessengerURLActionButton.WebviewHeightRatio;
						public static valueOf(param0: string): com.facebook.share.model.ShareMessengerURLActionButton.WebviewHeightRatio;
						public static values(): native.Array<com.facebook.share.model.ShareMessengerURLActionButton.WebviewHeightRatio>;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module model {
				export class ShareModel {
					public static class: java.lang.Class<com.facebook.share.model.ShareModel>;
					/**
					 * Constructs a new instance of the com.facebook.share.model.ShareModel interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module model {
				export class ShareModelBuilder<P, E>  extends com.facebook.share.ShareBuilder<any,any> {
					public static class: java.lang.Class<com.facebook.share.model.ShareModelBuilder<any,any>>;
					/**
					 * Constructs a new instance of the com.facebook.share.model.ShareModelBuilder<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						readFrom(param0: any): any;
						build(): any;
					});
					public constructor();
					public build(): any;
					public readFrom(param0: any): any;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module model {
				export class ShareOpenGraphAction extends com.facebook.share.model.ShareOpenGraphValueContainer<com.facebook.share.model.ShareOpenGraphAction,com.facebook.share.model.ShareOpenGraphAction.Builder> {
					public static class: java.lang.Class<com.facebook.share.model.ShareOpenGraphAction>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.share.model.ShareOpenGraphAction>;
					public getActionType(): string;
				}
				export module ShareOpenGraphAction {
					export class Builder extends com.facebook.share.model.ShareOpenGraphValueContainer.Builder<com.facebook.share.model.ShareOpenGraphAction,com.facebook.share.model.ShareOpenGraphAction.Builder> {
						public static class: java.lang.Class<com.facebook.share.model.ShareOpenGraphAction.Builder>;
						public readFrom(param0: com.facebook.share.model.ShareOpenGraphAction): com.facebook.share.model.ShareOpenGraphAction.Builder;
						public constructor();
						public readFrom(param0: any): any;
						public build(): com.facebook.share.model.ShareOpenGraphAction;
						public setActionType(param0: string): com.facebook.share.model.ShareOpenGraphAction.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module model {
				export class ShareOpenGraphContent extends com.facebook.share.model.ShareContent<com.facebook.share.model.ShareOpenGraphContent,com.facebook.share.model.ShareOpenGraphContent.Builder> {
					public static class: java.lang.Class<com.facebook.share.model.ShareOpenGraphContent>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.share.model.ShareOpenGraphContent>;
					public getAction(): com.facebook.share.model.ShareOpenGraphAction;
					public getPreviewPropertyName(): string;
					public describeContents(): number;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				}
				export module ShareOpenGraphContent {
					export class Builder extends com.facebook.share.model.ShareContent.Builder<com.facebook.share.model.ShareOpenGraphContent,com.facebook.share.model.ShareOpenGraphContent.Builder> {
						public static class: java.lang.Class<com.facebook.share.model.ShareOpenGraphContent.Builder>;
						public setAction(param0: com.facebook.share.model.ShareOpenGraphAction): com.facebook.share.model.ShareOpenGraphContent.Builder;
						public constructor();
						public readFrom(param0: any): any;
						public setPreviewPropertyName(param0: string): com.facebook.share.model.ShareOpenGraphContent.Builder;
						public build(): com.facebook.share.model.ShareOpenGraphContent;
						public readFrom(param0: com.facebook.share.model.ShareOpenGraphContent): com.facebook.share.model.ShareOpenGraphContent.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module model {
				export class ShareOpenGraphObject extends com.facebook.share.model.ShareOpenGraphValueContainer<com.facebook.share.model.ShareOpenGraphObject,com.facebook.share.model.ShareOpenGraphObject.Builder> {
					public static class: java.lang.Class<com.facebook.share.model.ShareOpenGraphObject>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.share.model.ShareOpenGraphObject>;
				}
				export module ShareOpenGraphObject {
					export class Builder extends com.facebook.share.model.ShareOpenGraphValueContainer.Builder<com.facebook.share.model.ShareOpenGraphObject,com.facebook.share.model.ShareOpenGraphObject.Builder> {
						public static class: java.lang.Class<com.facebook.share.model.ShareOpenGraphObject.Builder>;
						public constructor();
						public readFrom(param0: any): any;
						public build(): com.facebook.share.model.ShareOpenGraphObject;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module model {
				export abstract class ShareOpenGraphValueContainer<P, E>  extends com.facebook.share.model.ShareModel {
					public static class: java.lang.Class<com.facebook.share.model.ShareOpenGraphValueContainer<any,any>>;
					public get(param0: string): any;
					public getIntArray(param0: string): native.Array<number>;
					public getDouble(param0: string, param1: number): number;
					public getObjectArrayList(param0: string): java.util.ArrayList<com.facebook.share.model.ShareOpenGraphObject>;
					public getDoubleArray(param0: string): native.Array<number>;
					public describeContents(): number;
					public getLongArray(param0: string): native.Array<number>;
					public getBoolean(param0: string, param1: boolean): boolean;
					public getBooleanArray(param0: string): native.Array<boolean>;
					public getString(param0: string): string;
					public getPhotoArrayList(param0: string): java.util.ArrayList<com.facebook.share.model.SharePhoto>;
					public getLong(param0: string, param1: number): number;
					public getObject(param0: string): com.facebook.share.model.ShareOpenGraphObject;
					public getPhoto(param0: string): com.facebook.share.model.SharePhoto;
					public getBundle(): globalAndroid.os.Bundle;
					public getStringArrayList(param0: string): java.util.ArrayList<string>;
					public constructor(param0: com.facebook.share.model.ShareOpenGraphValueContainer.Builder<any,any>);
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public keySet(): java.util.Set<string>;
					public getInt(param0: string, param1: number): number;
				}
				export module ShareOpenGraphValueContainer {
					export abstract class Builder<P, E>  extends com.facebook.share.model.ShareModelBuilder<any,any> {
						public static class: java.lang.Class<com.facebook.share.model.ShareOpenGraphValueContainer.Builder<any,any>>;
						public constructor();
						public putPhoto(param0: string, param1: com.facebook.share.model.SharePhoto): any;
						public readFrom(param0: any): any;
						public putDouble(param0: string, param1: number): any;
						public putInt(param0: string, param1: number): any;
						public putString(param0: string, param1: string): any;
						public putBoolean(param0: string, param1: boolean): any;
						public build(): any;
						public putDoubleArray(param0: string, param1: native.Array<number>): any;
						public putBooleanArray(param0: string, param1: native.Array<boolean>): any;
						public putObject(param0: string, param1: com.facebook.share.model.ShareOpenGraphObject): any;
						public putPhotoArrayList(param0: string, param1: java.util.ArrayList<com.facebook.share.model.SharePhoto>): any;
						public putLongArray(param0: string, param1: native.Array<number>): any;
						public putLong(param0: string, param1: number): any;
						public putIntArray(param0: string, param1: native.Array<number>): any;
						public putStringArrayList(param0: string, param1: java.util.ArrayList<string>): any;
						public putObjectArrayList(param0: string, param1: java.util.ArrayList<com.facebook.share.model.ShareOpenGraphObject>): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module model {
				export class SharePhoto extends com.facebook.share.model.ShareMedia {
					public static class: java.lang.Class<com.facebook.share.model.SharePhoto>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.share.model.SharePhoto>;
					public getImageUrl(): globalAndroid.net.Uri;
					public getUserGenerated(): boolean;
					public describeContents(): number;
					public getCaption(): string;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getBitmap(): globalAndroid.graphics.Bitmap;
					public getMediaType(): com.facebook.share.model.ShareMedia.Type;
				}
				export module SharePhoto {
					export class Builder extends com.facebook.share.model.ShareMedia.Builder<com.facebook.share.model.SharePhoto,com.facebook.share.model.SharePhoto.Builder> {
						public static class: java.lang.Class<com.facebook.share.model.SharePhoto.Builder>;
						public setBitmap(param0: globalAndroid.graphics.Bitmap): com.facebook.share.model.SharePhoto.Builder;
						public setImageUrl(param0: globalAndroid.net.Uri): com.facebook.share.model.SharePhoto.Builder;
						public constructor();
						public readFrom(param0: any): any;
						public setUserGenerated(param0: boolean): com.facebook.share.model.SharePhoto.Builder;
						public build(): com.facebook.share.model.SharePhoto;
						public setCaption(param0: string): com.facebook.share.model.SharePhoto.Builder;
						public readFrom(param0: com.facebook.share.model.SharePhoto): com.facebook.share.model.SharePhoto.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module model {
				export class SharePhotoContent extends com.facebook.share.model.ShareContent<com.facebook.share.model.SharePhotoContent,com.facebook.share.model.SharePhotoContent.Builder> {
					public static class: java.lang.Class<com.facebook.share.model.SharePhotoContent>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.share.model.SharePhotoContent>;
					public describeContents(): number;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getPhotos(): java.util.List<com.facebook.share.model.SharePhoto>;
				}
				export module SharePhotoContent {
					export class Builder extends com.facebook.share.model.ShareContent.Builder<com.facebook.share.model.SharePhotoContent,com.facebook.share.model.SharePhotoContent.Builder> {
						public static class: java.lang.Class<com.facebook.share.model.SharePhotoContent.Builder>;
						public constructor();
						public build(): com.facebook.share.model.SharePhotoContent;
						public readFrom(param0: any): any;
						public addPhoto(param0: com.facebook.share.model.SharePhoto): com.facebook.share.model.SharePhotoContent.Builder;
						public setPhotos(param0: java.util.List<com.facebook.share.model.SharePhoto>): com.facebook.share.model.SharePhotoContent.Builder;
						public addPhotos(param0: java.util.List<com.facebook.share.model.SharePhoto>): com.facebook.share.model.SharePhotoContent.Builder;
						public readFrom(param0: com.facebook.share.model.SharePhotoContent): com.facebook.share.model.SharePhotoContent.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module model {
				export class ShareStoryContent extends com.facebook.share.model.ShareContent<com.facebook.share.model.ShareStoryContent,com.facebook.share.model.ShareStoryContent.Builder> {
					public static class: java.lang.Class<com.facebook.share.model.ShareStoryContent>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.share.model.ShareStoryContent>;
					public getBackgroundAsset(): com.facebook.share.model.ShareMedia;
					public getStickerAsset(): com.facebook.share.model.SharePhoto;
					public getAttributionLink(): string;
					public describeContents(): number;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getBackgroundColorList(): java.util.List<string>;
				}
				export module ShareStoryContent {
					export class Builder extends com.facebook.share.model.ShareContent.Builder<com.facebook.share.model.ShareStoryContent,com.facebook.share.model.ShareStoryContent.Builder> {
						public static class: java.lang.Class<com.facebook.share.model.ShareStoryContent.Builder>;
						public constructor();
						public build(): com.facebook.share.model.ShareStoryContent;
						public setAttributionLink(param0: string): com.facebook.share.model.ShareStoryContent.Builder;
						public readFrom(param0: any): any;
						public setBackgroundAsset(param0: com.facebook.share.model.ShareMedia): com.facebook.share.model.ShareStoryContent.Builder;
						public readFrom(param0: com.facebook.share.model.ShareStoryContent): com.facebook.share.model.ShareStoryContent.Builder;
						public setBackgroundColorList(param0: java.util.List<string>): com.facebook.share.model.ShareStoryContent.Builder;
						public setStickerAsset(param0: com.facebook.share.model.SharePhoto): com.facebook.share.model.ShareStoryContent.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module model {
				export class ShareVideo extends com.facebook.share.model.ShareMedia {
					public static class: java.lang.Class<com.facebook.share.model.ShareVideo>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.share.model.ShareVideo>;
					public describeContents(): number;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getLocalUrl(): globalAndroid.net.Uri;
					public getMediaType(): com.facebook.share.model.ShareMedia.Type;
				}
				export module ShareVideo {
					export class Builder extends com.facebook.share.model.ShareMedia.Builder<com.facebook.share.model.ShareVideo,com.facebook.share.model.ShareVideo.Builder> {
						public static class: java.lang.Class<com.facebook.share.model.ShareVideo.Builder>;
						public constructor();
						public readFrom(param0: any): any;
						public setLocalUrl(param0: globalAndroid.net.Uri): com.facebook.share.model.ShareVideo.Builder;
						public readFrom(param0: com.facebook.share.model.ShareVideo): com.facebook.share.model.ShareVideo.Builder;
						public build(): com.facebook.share.model.ShareVideo;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module model {
				export class ShareVideoContent extends com.facebook.share.model.ShareContent<com.facebook.share.model.ShareVideoContent,com.facebook.share.model.ShareVideoContent.Builder> implements com.facebook.share.model.ShareModel  {
					public static class: java.lang.Class<com.facebook.share.model.ShareVideoContent>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.facebook.share.model.ShareVideoContent>;
					public describeContents(): number;
					public getVideo(): com.facebook.share.model.ShareVideo;
					public getPreviewPhoto(): com.facebook.share.model.SharePhoto;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getContentDescription(): string;
					public getContentTitle(): string;
				}
				export module ShareVideoContent {
					export class Builder extends com.facebook.share.model.ShareContent.Builder<com.facebook.share.model.ShareVideoContent,com.facebook.share.model.ShareVideoContent.Builder> {
						public static class: java.lang.Class<com.facebook.share.model.ShareVideoContent.Builder>;
						public readFrom(param0: com.facebook.share.model.ShareVideoContent): com.facebook.share.model.ShareVideoContent.Builder;
						public constructor();
						public setVideo(param0: com.facebook.share.model.ShareVideo): com.facebook.share.model.ShareVideoContent.Builder;
						public readFrom(param0: any): any;
						public setContentTitle(param0: string): com.facebook.share.model.ShareVideoContent.Builder;
						public build(): com.facebook.share.model.ShareVideoContent;
						public setContentDescription(param0: string): com.facebook.share.model.ShareVideoContent.Builder;
						public setPreviewPhoto(param0: com.facebook.share.model.SharePhoto): com.facebook.share.model.ShareVideoContent.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module widget {
				export class AppInviteDialog extends com.facebook.internal.FacebookDialogBase<com.facebook.share.model.AppInviteContent,com.facebook.share.widget.AppInviteDialog.Result> {
					public static class: java.lang.Class<com.facebook.share.widget.AppInviteDialog>;
					public registerCallbackImpl(param0: com.facebook.internal.CallbackManagerImpl, param1: com.facebook.FacebookCallback<com.facebook.share.widget.AppInviteDialog.Result>): void;
					public static canShow(): boolean;
					public show(param0: com.facebook.share.model.AppInviteContent): void;
					public constructor(param0: globalAndroid.app.Fragment);
					public createBaseAppCall(): com.facebook.internal.AppCall;
					public registerCallbackImpl(param0: com.facebook.internal.CallbackManagerImpl, param1: com.facebook.FacebookCallback<any>): void;
					public registerCallback(param0: com.facebook.CallbackManager, param1: com.facebook.FacebookCallback<any>, param2: number): void;
					public static show(param0: globalAndroid.app.Activity, param1: com.facebook.share.model.AppInviteContent): void;
					public static show(param0: globalAndroid.support.v4.app.Fragment, param1: com.facebook.share.model.AppInviteContent): void;
					public static show(param0: globalAndroid.app.Fragment, param1: com.facebook.share.model.AppInviteContent): void;
					public registerCallback(param0: com.facebook.CallbackManager, param1: com.facebook.FacebookCallback<any>): void;
					public constructor(param0: globalAndroid.app.Activity);
					public getOrderedModeHandlers(): java.util.List<com.facebook.internal.FacebookDialogBase.ModeHandler>;
					public show(param0: any): void;
					public canShow(param0: any): boolean;
					public constructor(param0: globalAndroid.support.v4.app.Fragment);
					public constructor(param0: globalAndroid.app.Activity, param1: number);
					public constructor(param0: com.facebook.internal.FragmentWrapper, param1: number);
				}
				export module AppInviteDialog {
					export class NativeHandler extends com.facebook.internal.FacebookDialogBase.ModeHandler {
						public static class: java.lang.Class<com.facebook.share.widget.AppInviteDialog.NativeHandler>;
						public createAppCall(param0: any): com.facebook.internal.AppCall;
						public createAppCall(param0: com.facebook.share.model.AppInviteContent): com.facebook.internal.AppCall;
						public canShow(param0: com.facebook.share.model.AppInviteContent, param1: boolean): boolean;
						public canShow(param0: any, param1: boolean): boolean;
					}
					export class Result {
						public static class: java.lang.Class<com.facebook.share.widget.AppInviteDialog.Result>;
						public constructor(param0: globalAndroid.os.Bundle);
						public getData(): globalAndroid.os.Bundle;
					}
					export class WebFallbackHandler extends com.facebook.internal.FacebookDialogBase.ModeHandler {
						public static class: java.lang.Class<com.facebook.share.widget.AppInviteDialog.WebFallbackHandler>;
						public createAppCall(param0: any): com.facebook.internal.AppCall;
						public createAppCall(param0: com.facebook.share.model.AppInviteContent): com.facebook.internal.AppCall;
						public canShow(param0: com.facebook.share.model.AppInviteContent, param1: boolean): boolean;
						public canShow(param0: any, param1: boolean): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module widget {
				export class CreateAppGroupDialog extends com.facebook.internal.FacebookDialogBase<com.facebook.share.model.AppGroupCreationContent,com.facebook.share.widget.CreateAppGroupDialog.Result> {
					public static class: java.lang.Class<com.facebook.share.widget.CreateAppGroupDialog>;
					public static canShow(): boolean;
					public constructor(param0: globalAndroid.app.Fragment);
					public createBaseAppCall(): com.facebook.internal.AppCall;
					public registerCallbackImpl(param0: com.facebook.internal.CallbackManagerImpl, param1: com.facebook.FacebookCallback<any>): void;
					public registerCallback(param0: com.facebook.CallbackManager, param1: com.facebook.FacebookCallback<any>, param2: number): void;
					public registerCallback(param0: com.facebook.CallbackManager, param1: com.facebook.FacebookCallback<any>): void;
					public constructor(param0: globalAndroid.app.Activity);
					public getOrderedModeHandlers(): java.util.List<com.facebook.internal.FacebookDialogBase.ModeHandler>;
					public registerCallbackImpl(param0: com.facebook.internal.CallbackManagerImpl, param1: com.facebook.FacebookCallback<com.facebook.share.widget.CreateAppGroupDialog.Result>): void;
					public show(param0: any): void;
					public canShow(param0: any): boolean;
					public static show(param0: globalAndroid.support.v4.app.Fragment, param1: com.facebook.share.model.AppGroupCreationContent): void;
					public constructor(param0: globalAndroid.support.v4.app.Fragment);
					public constructor(param0: globalAndroid.app.Activity, param1: number);
					public constructor(param0: com.facebook.internal.FragmentWrapper, param1: number);
					public static show(param0: globalAndroid.app.Activity, param1: com.facebook.share.model.AppGroupCreationContent): void;
					public static show(param0: globalAndroid.app.Fragment, param1: com.facebook.share.model.AppGroupCreationContent): void;
				}
				export module CreateAppGroupDialog {
					export class Result {
						public static class: java.lang.Class<com.facebook.share.widget.CreateAppGroupDialog.Result>;
						public getId(): string;
					}
					export class WebHandler extends com.facebook.internal.FacebookDialogBase.ModeHandler {
						public static class: java.lang.Class<com.facebook.share.widget.CreateAppGroupDialog.WebHandler>;
						public canShow(param0: com.facebook.share.model.AppGroupCreationContent, param1: boolean): boolean;
						public createAppCall(param0: any): com.facebook.internal.AppCall;
						public createAppCall(param0: com.facebook.share.model.AppGroupCreationContent): com.facebook.internal.AppCall;
						public canShow(param0: any, param1: boolean): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module widget {
				export class DeviceShareButton extends com.facebook.FacebookButtonBase {
					public static class: java.lang.Class<com.facebook.share.widget.DeviceShareButton>;
					public setEnabled(param0: boolean): void;
					public registerCallback(param0: com.facebook.CallbackManager, param1: com.facebook.FacebookCallback<com.facebook.share.DeviceShareDialog.Result>, param2: number): void;
					public configureButton(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number): void;
					public getShareOnClickListener(): globalAndroid.view.View.OnClickListener;
					public getRequestCode(): number;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public getDefaultStyleResource(): number;
					public getDefaultRequestCode(): number;
					public getShareContent(): com.facebook.share.model.ShareContent<any,any>;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number, param4: string, param5: string);
					public setShareContent(param0: com.facebook.share.model.ShareContent<any,any>): void;
					public registerCallback(param0: com.facebook.CallbackManager, param1: com.facebook.FacebookCallback<com.facebook.share.DeviceShareDialog.Result>): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module widget {
				export class GameRequestDialog extends com.facebook.internal.FacebookDialogBase<com.facebook.share.model.GameRequestContent,com.facebook.share.widget.GameRequestDialog.Result> {
					public static class: java.lang.Class<com.facebook.share.widget.GameRequestDialog>;
					public static canShow(): boolean;
					public constructor(param0: globalAndroid.app.Fragment);
					public createBaseAppCall(): com.facebook.internal.AppCall;
					public registerCallbackImpl(param0: com.facebook.internal.CallbackManagerImpl, param1: com.facebook.FacebookCallback<any>): void;
					public registerCallback(param0: com.facebook.CallbackManager, param1: com.facebook.FacebookCallback<any>, param2: number): void;
					public registerCallback(param0: com.facebook.CallbackManager, param1: com.facebook.FacebookCallback<any>): void;
					public constructor(param0: globalAndroid.app.Activity);
					public getOrderedModeHandlers(): java.util.List<com.facebook.internal.FacebookDialogBase.ModeHandler>;
					public static show(param0: globalAndroid.support.v4.app.Fragment, param1: com.facebook.share.model.GameRequestContent): void;
					public static show(param0: globalAndroid.app.Fragment, param1: com.facebook.share.model.GameRequestContent): void;
					public registerCallbackImpl(param0: com.facebook.internal.CallbackManagerImpl, param1: com.facebook.FacebookCallback<com.facebook.share.widget.GameRequestDialog.Result>): void;
					public show(param0: any): void;
					public canShow(param0: any): boolean;
					public constructor(param0: globalAndroid.support.v4.app.Fragment);
					public constructor(param0: globalAndroid.app.Activity, param1: number);
					public constructor(param0: com.facebook.internal.FragmentWrapper, param1: number);
					public static show(param0: globalAndroid.app.Activity, param1: com.facebook.share.model.GameRequestContent): void;
				}
				export module GameRequestDialog {
					export class Result {
						public static class: java.lang.Class<com.facebook.share.widget.GameRequestDialog.Result>;
						public getRequestId(): string;
						public getRequestRecipients(): java.util.List<string>;
					}
					export class WebHandler extends com.facebook.internal.FacebookDialogBase.ModeHandler {
						public static class: java.lang.Class<com.facebook.share.widget.GameRequestDialog.WebHandler>;
						public createAppCall(param0: com.facebook.share.model.GameRequestContent): com.facebook.internal.AppCall;
						public canShow(param0: com.facebook.share.model.GameRequestContent, param1: boolean): boolean;
						public createAppCall(param0: any): com.facebook.internal.AppCall;
						public canShow(param0: any, param1: boolean): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module widget {
				export class JoinAppGroupDialog extends com.facebook.internal.FacebookDialogBase<string,com.facebook.share.widget.JoinAppGroupDialog.Result> {
					public static class: java.lang.Class<com.facebook.share.widget.JoinAppGroupDialog>;
					public static canShow(): boolean;
					public constructor(param0: globalAndroid.app.Fragment);
					public createBaseAppCall(): com.facebook.internal.AppCall;
					public static show(param0: globalAndroid.support.v4.app.Fragment, param1: string): void;
					public registerCallbackImpl(param0: com.facebook.internal.CallbackManagerImpl, param1: com.facebook.FacebookCallback<any>): void;
					public registerCallback(param0: com.facebook.CallbackManager, param1: com.facebook.FacebookCallback<any>, param2: number): void;
					public registerCallback(param0: com.facebook.CallbackManager, param1: com.facebook.FacebookCallback<any>): void;
					public constructor(param0: globalAndroid.app.Activity);
					public getOrderedModeHandlers(): java.util.List<com.facebook.internal.FacebookDialogBase.ModeHandler>;
					public static show(param0: globalAndroid.app.Fragment, param1: string): void;
					public show(param0: any): void;
					public static show(param0: globalAndroid.app.Activity, param1: string): void;
					public canShow(param0: any): boolean;
					public constructor(param0: globalAndroid.support.v4.app.Fragment);
					public constructor(param0: globalAndroid.app.Activity, param1: number);
					public constructor(param0: com.facebook.internal.FragmentWrapper, param1: number);
					public registerCallbackImpl(param0: com.facebook.internal.CallbackManagerImpl, param1: com.facebook.FacebookCallback<com.facebook.share.widget.JoinAppGroupDialog.Result>): void;
				}
				export module JoinAppGroupDialog {
					export class Result {
						public static class: java.lang.Class<com.facebook.share.widget.JoinAppGroupDialog.Result>;
						public getData(): globalAndroid.os.Bundle;
					}
					export class WebHandler extends com.facebook.internal.FacebookDialogBase.ModeHandler {
						public static class: java.lang.Class<com.facebook.share.widget.JoinAppGroupDialog.WebHandler>;
						public canShow(param0: string, param1: boolean): boolean;
						public createAppCall(param0: any): com.facebook.internal.AppCall;
						public createAppCall(param0: string): com.facebook.internal.AppCall;
						public canShow(param0: any, param1: boolean): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module widget {
				export class LikeView {
					public static class: java.lang.Class<com.facebook.share.widget.LikeView>;
					public setOnErrorListener(param0: com.facebook.share.widget.LikeView.OnErrorListener): void;
					public setEnabled(param0: boolean): void;
					public onDetachedFromWindow(): void;
					public setAuxiliaryViewPosition(param0: com.facebook.share.widget.LikeView.AuxiliaryViewPosition): void;
					public setFragment(param0: globalAndroid.app.Fragment): void;
					public setObjectIdAndType(param0: string, param1: com.facebook.share.widget.LikeView.ObjectType): void;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public getOnErrorListener(): com.facebook.share.widget.LikeView.OnErrorListener;
					public setForegroundColor(param0: number): void;
					public setHorizontalAlignment(param0: com.facebook.share.widget.LikeView.HorizontalAlignment): void;
					public setLikeViewStyle(param0: com.facebook.share.widget.LikeView.Style): void;
					public setFragment(param0: globalAndroid.support.v4.app.Fragment): void;
				}
				export module LikeView {
					export class AuxiliaryViewPosition {
						public static class: java.lang.Class<com.facebook.share.widget.LikeView.AuxiliaryViewPosition>;
						public static BOTTOM: com.facebook.share.widget.LikeView.AuxiliaryViewPosition;
						public static INLINE: com.facebook.share.widget.LikeView.AuxiliaryViewPosition;
						public static TOP: com.facebook.share.widget.LikeView.AuxiliaryViewPosition;
						public static values(): native.Array<com.facebook.share.widget.LikeView.AuxiliaryViewPosition>;
						public static valueOf(param0: string): com.facebook.share.widget.LikeView.AuxiliaryViewPosition;
						public toString(): string;
					}
					export class HorizontalAlignment {
						public static class: java.lang.Class<com.facebook.share.widget.LikeView.HorizontalAlignment>;
						public static CENTER: com.facebook.share.widget.LikeView.HorizontalAlignment;
						public static LEFT: com.facebook.share.widget.LikeView.HorizontalAlignment;
						public static RIGHT: com.facebook.share.widget.LikeView.HorizontalAlignment;
						public static valueOf(param0: string): com.facebook.share.widget.LikeView.HorizontalAlignment;
						public static values(): native.Array<com.facebook.share.widget.LikeView.HorizontalAlignment>;
						public toString(): string;
					}
					export class LikeActionControllerCreationCallback extends com.facebook.share.internal.LikeActionController.CreationCallback {
						public static class: java.lang.Class<com.facebook.share.widget.LikeView.LikeActionControllerCreationCallback>;
						public onComplete(param0: com.facebook.share.internal.LikeActionController, param1: com.facebook.FacebookException): void;
						public cancel(): void;
					}
					export class LikeControllerBroadcastReceiver {
						public static class: java.lang.Class<com.facebook.share.widget.LikeView.LikeControllerBroadcastReceiver>;
						public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
					}
					export class ObjectType {
						public static class: java.lang.Class<com.facebook.share.widget.LikeView.ObjectType>;
						public static UNKNOWN: com.facebook.share.widget.LikeView.ObjectType;
						public static OPEN_GRAPH: com.facebook.share.widget.LikeView.ObjectType;
						public static PAGE: com.facebook.share.widget.LikeView.ObjectType;
						public static DEFAULT: com.facebook.share.widget.LikeView.ObjectType;
						public static valueOf(param0: string): com.facebook.share.widget.LikeView.ObjectType;
						public static fromInt(param0: number): com.facebook.share.widget.LikeView.ObjectType;
						public static values(): native.Array<com.facebook.share.widget.LikeView.ObjectType>;
						public toString(): string;
						public getValue(): number;
					}
					export class OnErrorListener {
						public static class: java.lang.Class<com.facebook.share.widget.LikeView.OnErrorListener>;
						/**
						 * Constructs a new instance of the com.facebook.share.widget.LikeView$OnErrorListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onError(param0: com.facebook.FacebookException): void;
						});
						public constructor();
						public onError(param0: com.facebook.FacebookException): void;
					}
					export class Style {
						public static class: java.lang.Class<com.facebook.share.widget.LikeView.Style>;
						public static STANDARD: com.facebook.share.widget.LikeView.Style;
						public static BUTTON: com.facebook.share.widget.LikeView.Style;
						public static BOX_COUNT: com.facebook.share.widget.LikeView.Style;
						public static values(): native.Array<com.facebook.share.widget.LikeView.Style>;
						public static valueOf(param0: string): com.facebook.share.widget.LikeView.Style;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module widget {
				export class MessageDialog extends com.facebook.internal.FacebookDialogBase<com.facebook.share.model.ShareContent<any,any>,com.facebook.share.Sharer.Result> implements com.facebook.share.Sharer  {
					public static class: java.lang.Class<com.facebook.share.widget.MessageDialog>;
					public constructor(param0: globalAndroid.app.Fragment);
					public createBaseAppCall(): com.facebook.internal.AppCall;
					public static canShow(param0: java.lang.Class<any>): boolean;
					public registerCallbackImpl(param0: com.facebook.internal.CallbackManagerImpl, param1: com.facebook.FacebookCallback<any>): void;
					public registerCallback(param0: com.facebook.CallbackManager, param1: com.facebook.FacebookCallback<any>, param2: number): void;
					public static show(param0: globalAndroid.app.Fragment, param1: com.facebook.share.model.ShareContent<any,any>): void;
					public registerCallback(param0: com.facebook.CallbackManager, param1: com.facebook.FacebookCallback<any>): void;
					public constructor(param0: globalAndroid.app.Activity);
					public getOrderedModeHandlers(): java.util.List<com.facebook.internal.FacebookDialogBase.ModeHandler>;
					public setShouldFailOnDataError(param0: boolean): void;
					public show(param0: any): void;
					public static show(param0: globalAndroid.support.v4.app.Fragment, param1: com.facebook.share.model.ShareContent<any,any>): void;
					public canShow(param0: any): boolean;
					public constructor(param0: globalAndroid.support.v4.app.Fragment);
					public constructor(param0: globalAndroid.app.Activity, param1: number);
					public constructor(param0: com.facebook.internal.FragmentWrapper, param1: number);
					public registerCallbackImpl(param0: com.facebook.internal.CallbackManagerImpl, param1: com.facebook.FacebookCallback<com.facebook.share.Sharer.Result>): void;
					public getShouldFailOnDataError(): boolean;
					public static show(param0: globalAndroid.app.Activity, param1: com.facebook.share.model.ShareContent<any,any>): void;
				}
				export module MessageDialog {
					export class NativeHandler extends com.facebook.internal.FacebookDialogBase.ModeHandler {
						public static class: java.lang.Class<com.facebook.share.widget.MessageDialog.NativeHandler>;
						public createAppCall(param0: any): com.facebook.internal.AppCall;
						public createAppCall(param0: com.facebook.share.model.ShareContent<any,any>): com.facebook.internal.AppCall;
						public canShow(param0: com.facebook.share.model.ShareContent<any,any>, param1: boolean): boolean;
						public canShow(param0: any, param1: boolean): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module widget {
				export class SendButton extends com.facebook.share.widget.ShareButtonBase {
					public static class: java.lang.Class<com.facebook.share.widget.SendButton>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public getDefaultStyleResource(): number;
					public getDefaultRequestCode(): number;
					public getDialog(): com.facebook.internal.FacebookDialogBase<com.facebook.share.model.ShareContent<any,any>,com.facebook.share.Sharer.Result>;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number, param4: string, param5: string);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: string, param4: string);
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module widget {
				export class ShareButton extends com.facebook.share.widget.ShareButtonBase {
					public static class: java.lang.Class<com.facebook.share.widget.ShareButton>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public getDefaultStyleResource(): number;
					public getDefaultRequestCode(): number;
					public getDialog(): com.facebook.internal.FacebookDialogBase<com.facebook.share.model.ShareContent<any,any>,com.facebook.share.Sharer.Result>;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number, param4: string, param5: string);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: string, param4: string);
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module widget {
				export abstract class ShareButtonBase extends com.facebook.FacebookButtonBase {
					public static class: java.lang.Class<com.facebook.share.widget.ShareButtonBase>;
					public setEnabled(param0: boolean): void;
					public registerCallback(param0: com.facebook.CallbackManager, param1: com.facebook.FacebookCallback<com.facebook.share.Sharer.Result>, param2: number): void;
					public setRequestCode(param0: number): void;
					public configureButton(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number): void;
					public getShareOnClickListener(): globalAndroid.view.View.OnClickListener;
					public getRequestCode(): number;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: string, param4: string);
					public registerCallback(param0: com.facebook.CallbackManager, param1: com.facebook.FacebookCallback<com.facebook.share.Sharer.Result>): void;
					public getShareContent(): com.facebook.share.model.ShareContent<any,any>;
					public canShare(): boolean;
					public getDialog(): com.facebook.internal.FacebookDialogBase<com.facebook.share.model.ShareContent<any,any>,com.facebook.share.Sharer.Result>;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number, param4: string, param5: string);
					public setShareContent(param0: com.facebook.share.model.ShareContent<any,any>): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module share {
			export module widget {
				export class ShareDialog extends com.facebook.internal.FacebookDialogBase<com.facebook.share.model.ShareContent<any,any>,com.facebook.share.Sharer.Result> implements com.facebook.share.Sharer  {
					public static class: java.lang.Class<com.facebook.share.widget.ShareDialog>;
					public static WEB_SHARE_DIALOG: string;
					public show(param0: com.facebook.share.model.ShareContent<any,any>, param1: com.facebook.share.widget.ShareDialog.Mode): void;
					public constructor(param0: globalAndroid.app.Fragment);
					public createBaseAppCall(): com.facebook.internal.AppCall;
					public static canShow(param0: java.lang.Class<any>): boolean;
					public registerCallbackImpl(param0: com.facebook.internal.CallbackManagerImpl, param1: com.facebook.FacebookCallback<any>): void;
					public canShow(param0: com.facebook.share.model.ShareContent<any,any>, param1: com.facebook.share.widget.ShareDialog.Mode): boolean;
					public registerCallback(param0: com.facebook.CallbackManager, param1: com.facebook.FacebookCallback<any>, param2: number): void;
					public static show(param0: globalAndroid.app.Fragment, param1: com.facebook.share.model.ShareContent<any,any>): void;
					public registerCallback(param0: com.facebook.CallbackManager, param1: com.facebook.FacebookCallback<any>): void;
					public constructor(param0: globalAndroid.app.Activity);
					public getOrderedModeHandlers(): java.util.List<com.facebook.internal.FacebookDialogBase.ModeHandler>;
					public setShouldFailOnDataError(param0: boolean): void;
					public show(param0: any): void;
					public static show(param0: globalAndroid.support.v4.app.Fragment, param1: com.facebook.share.model.ShareContent<any,any>): void;
					public canShow(param0: any): boolean;
					public constructor(param0: globalAndroid.support.v4.app.Fragment);
					public constructor(param0: globalAndroid.app.Activity, param1: number);
					public constructor(param0: com.facebook.internal.FragmentWrapper, param1: number);
					public registerCallbackImpl(param0: com.facebook.internal.CallbackManagerImpl, param1: com.facebook.FacebookCallback<com.facebook.share.Sharer.Result>): void;
					public getShouldFailOnDataError(): boolean;
					public static show(param0: globalAndroid.app.Activity, param1: com.facebook.share.model.ShareContent<any,any>): void;
				}
				export module ShareDialog {
					export class CameraEffectHandler extends com.facebook.internal.FacebookDialogBase.ModeHandler {
						public static class: java.lang.Class<com.facebook.share.widget.ShareDialog.CameraEffectHandler>;
						public getMode(): any;
						public createAppCall(param0: any): com.facebook.internal.AppCall;
						public createAppCall(param0: com.facebook.share.model.ShareContent<any,any>): com.facebook.internal.AppCall;
						public canShow(param0: com.facebook.share.model.ShareContent<any,any>, param1: boolean): boolean;
						public canShow(param0: any, param1: boolean): boolean;
					}
					export class FeedHandler extends com.facebook.internal.FacebookDialogBase.ModeHandler {
						public static class: java.lang.Class<com.facebook.share.widget.ShareDialog.FeedHandler>;
						public getMode(): any;
						public createAppCall(param0: any): com.facebook.internal.AppCall;
						public createAppCall(param0: com.facebook.share.model.ShareContent<any,any>): com.facebook.internal.AppCall;
						public canShow(param0: com.facebook.share.model.ShareContent<any,any>, param1: boolean): boolean;
						public canShow(param0: any, param1: boolean): boolean;
					}
					export class Mode {
						public static class: java.lang.Class<com.facebook.share.widget.ShareDialog.Mode>;
						public static AUTOMATIC: com.facebook.share.widget.ShareDialog.Mode;
						public static NATIVE: com.facebook.share.widget.ShareDialog.Mode;
						public static WEB: com.facebook.share.widget.ShareDialog.Mode;
						public static FEED: com.facebook.share.widget.ShareDialog.Mode;
						public static valueOf(param0: string): com.facebook.share.widget.ShareDialog.Mode;
						public static values(): native.Array<com.facebook.share.widget.ShareDialog.Mode>;
					}
					export class NativeHandler extends com.facebook.internal.FacebookDialogBase.ModeHandler {
						public static class: java.lang.Class<com.facebook.share.widget.ShareDialog.NativeHandler>;
						public getMode(): any;
						public createAppCall(param0: any): com.facebook.internal.AppCall;
						public createAppCall(param0: com.facebook.share.model.ShareContent<any,any>): com.facebook.internal.AppCall;
						public canShow(param0: com.facebook.share.model.ShareContent<any,any>, param1: boolean): boolean;
						public canShow(param0: any, param1: boolean): boolean;
					}
					export class ShareStoryHandler extends com.facebook.internal.FacebookDialogBase.ModeHandler {
						public static class: java.lang.Class<com.facebook.share.widget.ShareDialog.ShareStoryHandler>;
						public getMode(): any;
						public createAppCall(param0: any): com.facebook.internal.AppCall;
						public createAppCall(param0: com.facebook.share.model.ShareContent<any,any>): com.facebook.internal.AppCall;
						public canShow(param0: com.facebook.share.model.ShareContent<any,any>, param1: boolean): boolean;
						public canShow(param0: any, param1: boolean): boolean;
					}
					export class WebShareHandler extends com.facebook.internal.FacebookDialogBase.ModeHandler {
						public static class: java.lang.Class<com.facebook.share.widget.ShareDialog.WebShareHandler>;
						public getMode(): any;
						public createAppCall(param0: any): com.facebook.internal.AppCall;
						public createAppCall(param0: com.facebook.share.model.ShareContent<any,any>): com.facebook.internal.AppCall;
						public canShow(param0: com.facebook.share.model.ShareContent<any,any>, param1: boolean): boolean;
						public canShow(param0: any, param1: boolean): boolean;
					}
				}
			}
		}
	}
}

//Generics information:
//com.facebook.FacebookCallback:1
//com.facebook.FacebookDialog:2
//com.facebook.GraphRequest.ParcelableResourceWithMimeType:1
//com.facebook.internal.CollectionMapper.Collection:1
//com.facebook.internal.FacebookDialogBase:2
//com.facebook.internal.LockOnGetVariable:1
//com.facebook.internal.Mutable:1
//com.facebook.internal.Utility.Mapper:2
//com.facebook.internal.Utility.Predicate:1
//com.facebook.share.ShareBuilder:2
//com.facebook.share.model.ShareContent:2
//com.facebook.share.model.ShareContent.Builder:2
//com.facebook.share.model.ShareMedia.Builder:2
//com.facebook.share.model.ShareMessengerActionButton.Builder:2
//com.facebook.share.model.ShareModelBuilder:2
//com.facebook.share.model.ShareOpenGraphValueContainer:2
//com.facebook.share.model.ShareOpenGraphValueContainer.Builder:2

