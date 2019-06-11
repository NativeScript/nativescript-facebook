
declare class FBSDKAppGroupContent extends NSObject implements FBSDKCopying, NSSecureCoding {

	static alloc(): FBSDKAppGroupContent; // inherited from NSObject

	static new(): FBSDKAppGroupContent; // inherited from NSObject

	groupDescription: string;

	name: string;

	privacy: FBSDKAppGroupPrivacy;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copy(): any;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;

	isEqual(object: any): boolean;

	isEqualToAppGroupContent(content: FBSDKAppGroupContent): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare const enum FBSDKAppGroupPrivacy {

	Open = 0,

	Closed = 1
}

declare class FBSDKAppInviteContent extends NSObject implements FBSDKCopying, FBSDKSharingValidation, NSSecureCoding {

	static alloc(): FBSDKAppInviteContent; // inherited from NSObject

	static new(): FBSDKAppInviteContent; // inherited from NSObject

	appInvitePreviewImageURL: NSURL;

	appLinkURL: NSURL;

	destination: FBSDKAppInviteDestination;

	promotionCode: string;

	promotionText: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copy(): any;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;

	isEqual(object: any): boolean;

	isEqualToAppInviteContent(content: FBSDKAppInviteContent): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	validateWithOptionsError(bridgeOptions: FBSDKShareBridgeOptions): boolean;
}

declare const enum FBSDKAppInviteDestination {

	Facebook = 0,

	Messenger = 1
}

declare class FBSDKCameraEffectArguments extends NSObject implements FBSDKCopying, NSSecureCoding {

	static alloc(): FBSDKCameraEffectArguments; // inherited from NSObject

	static new(): FBSDKCameraEffectArguments; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	arrayForKey(key: string): NSArray<string>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copy(): any;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setArrayForKey(array: NSArray<string> | string[], key: string): void;

	setStringForKey(string: string, key: string): void;

	stringForKey(key: string): string;
}

declare class FBSDKCameraEffectTextures extends NSObject implements FBSDKCopying, NSSecureCoding {

	static alloc(): FBSDKCameraEffectTextures; // inherited from NSObject

	static new(): FBSDKCameraEffectTextures; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copy(): any;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(aCoder: NSCoder): void;

	imageForKey(key: string): UIImage;

	initWithCoder(aDecoder: NSCoder): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setImageForKey(image: UIImage, key: string): void;
}

declare const enum FBSDKGameRequestActionType {

	None = 0,

	Send = 1,

	AskFor = 2,

	Turn = 3
}

declare class FBSDKGameRequestContent extends NSObject implements FBSDKCopying, FBSDKSharingValidation, NSSecureCoding {

	static alloc(): FBSDKGameRequestContent; // inherited from NSObject

	static new(): FBSDKGameRequestContent; // inherited from NSObject

	actionType: FBSDKGameRequestActionType;

	data: string;

	filters: FBSDKGameRequestFilter;

	message: string;

	objectID: string;

	recipientSuggestions: NSArray<string>;

	recipients: NSArray<string>;

	title: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copy(): any;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;

	isEqual(object: any): boolean;

	isEqualToGameRequestContent(content: FBSDKGameRequestContent): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	validateWithOptionsError(bridgeOptions: FBSDKShareBridgeOptions): boolean;
}

declare class FBSDKGameRequestDialog extends NSObject {

	static alloc(): FBSDKGameRequestDialog; // inherited from NSObject

	static dialogWithContentDelegate(content: FBSDKGameRequestContent, delegate: FBSDKGameRequestDialogDelegate): FBSDKGameRequestDialog;

	static new(): FBSDKGameRequestDialog; // inherited from NSObject

	static showWithContentDelegate(content: FBSDKGameRequestContent, delegate: FBSDKGameRequestDialogDelegate): FBSDKGameRequestDialog;

	readonly canShow: boolean;

	content: FBSDKGameRequestContent;

	delegate: FBSDKGameRequestDialogDelegate;

	frictionlessRequestsEnabled: boolean;

	show(): boolean;

	validateWithError(): boolean;
}

interface FBSDKGameRequestDialogDelegate extends NSObjectProtocol {

	gameRequestDialogDidCancel(gameRequestDialog: FBSDKGameRequestDialog): void;

	gameRequestDialogDidCompleteWithResults(gameRequestDialog: FBSDKGameRequestDialog, results: NSDictionary<string, any>): void;

	gameRequestDialogDidFailWithError(gameRequestDialog: FBSDKGameRequestDialog, error: NSError): void;
}
declare var FBSDKGameRequestDialogDelegate: {

	prototype: FBSDKGameRequestDialogDelegate;
};

declare const enum FBSDKGameRequestFilter {

	None = 0,

	AppUsers = 1,

	AppNonUsers = 2
}

declare class FBSDKHashtag extends NSObject implements FBSDKCopying, NSSecureCoding {

	static alloc(): FBSDKHashtag; // inherited from NSObject

	static hashtagWithString(hashtagString: string): FBSDKHashtag;

	static new(): FBSDKHashtag; // inherited from NSObject

	stringRepresentation: string;

	readonly valid: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copy(): any;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;

	isEqual(object: any): boolean;

	isEqualToHashtag(hashtag: FBSDKHashtag): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare const enum FBSDKLikeObjectType {

	Unknown = 0,

	OpenGraph = 1,

	Page = 2
}

interface FBSDKLiking extends NSObjectProtocol {

	objectID: string;

	objectType: FBSDKLikeObjectType;
}
declare var FBSDKLiking: {

	prototype: FBSDKLiking;
};

declare class FBSDKMessageDialog extends NSObject implements FBSDKSharingDialog {

	static alloc(): FBSDKMessageDialog; // inherited from NSObject

	static dialogWithContentDelegate(content: FBSDKSharingContent, delegate: FBSDKSharingDelegate): FBSDKMessageDialog;

	static new(): FBSDKMessageDialog; // inherited from NSObject

	static showWithContentDelegate(content: FBSDKSharingContent, delegate: FBSDKSharingDelegate): FBSDKMessageDialog;

	readonly canShow: boolean; // inherited from FBSDKSharingDialog

	readonly debugDescription: string; // inherited from NSObjectProtocol

	delegate: FBSDKSharingDelegate; // inherited from FBSDKSharing

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	shareContent: FBSDKSharingContent; // inherited from FBSDKSharing

	shouldFailOnDataError: boolean; // inherited from FBSDKSharing

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	show(): boolean;

	validateWithError(): boolean;
}

declare class FBSDKSendButton extends FBSDKButton implements FBSDKSharingButton {

	static alloc(): FBSDKSendButton; // inherited from NSObject

	static appearance(): FBSDKSendButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): FBSDKSendButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): FBSDKSendButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): FBSDKSendButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): FBSDKSendButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): FBSDKSendButton; // inherited from UIAppearance

	static buttonWithType(buttonType: UIButtonType): FBSDKSendButton; // inherited from UIButton

	static new(): FBSDKSendButton; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	shareContent: FBSDKSharingContent; // inherited from FBSDKSharingButton

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class FBSDKShareAPI extends NSObject implements FBSDKSharing {

	static alloc(): FBSDKShareAPI; // inherited from NSObject

	static apiWithContentDelegate(content: FBSDKSharingContent, delegate: FBSDKSharingDelegate): FBSDKShareAPI;

	static new(): FBSDKShareAPI; // inherited from NSObject

	static shareWithContentDelegate(content: FBSDKSharingContent, delegate: FBSDKSharingDelegate): FBSDKShareAPI;

	accessToken: FBSDKAccessToken;

	readonly canShare: boolean;

	graphNode: string;

	message: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	delegate: FBSDKSharingDelegate; // inherited from FBSDKSharing

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	shareContent: FBSDKSharingContent; // inherited from FBSDKSharing

	shouldFailOnDataError: boolean; // inherited from FBSDKSharing

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	createOpenGraphObject(openGraphObject: FBSDKShareOpenGraphObject): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	share(): boolean;

	validateWithError(): boolean;
}

declare const enum FBSDKShareBridgeOptions {

	Default = 0,

	PhotoAsset = 1,

	PhotoImageURL = 2,

	VideoAsset = 4,

	VideoData = 8,

	WebHashtag = 16
}

declare class FBSDKShareButton extends FBSDKButton implements FBSDKSharingButton {

	static alloc(): FBSDKShareButton; // inherited from NSObject

	static appearance(): FBSDKShareButton; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): FBSDKShareButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): FBSDKShareButton; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): FBSDKShareButton; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): FBSDKShareButton; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): FBSDKShareButton; // inherited from UIAppearance

	static buttonWithType(buttonType: UIButtonType): FBSDKShareButton; // inherited from UIButton

	static new(): FBSDKShareButton; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	shareContent: FBSDKSharingContent; // inherited from FBSDKSharingButton

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class FBSDKShareCameraEffectContent extends NSObject implements FBSDKSharingContent, FBSDKSharingScheme {

	static alloc(): FBSDKShareCameraEffectContent; // inherited from NSObject

	static new(): FBSDKShareCameraEffectContent; // inherited from NSObject

	effectArguments: FBSDKCameraEffectArguments;

	effectID: string;

	effectTextures: FBSDKCameraEffectTextures;

	contentURL: NSURL; // inherited from FBSDKSharingContent

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	hashtag: FBSDKHashtag; // inherited from FBSDKSharingContent

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	pageID: string; // inherited from FBSDKSharingContent

	peopleIDs: NSArray<string>; // inherited from FBSDKSharingContent

	placeID: string; // inherited from FBSDKSharingContent

	ref: string; // inherited from FBSDKSharingContent

	readonly shareUUID: string; // inherited from FBSDKSharingContent

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	addParametersBridgeOptions(existingParameters: NSDictionary<string, any>, bridgeOptions: FBSDKShareBridgeOptions): NSDictionary<string, any>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copy(): any;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;

	isEqual(object: any): boolean;

	isEqualToShareCameraEffectContent(content: FBSDKShareCameraEffectContent): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	schemeForMode(mode: FBSDKShareDialogMode): string;

	self(): this;

	validateWithOptionsError(bridgeOptions: FBSDKShareBridgeOptions): boolean;
}

declare class FBSDKShareDialog extends NSObject implements FBSDKSharingDialog {

	static alloc(): FBSDKShareDialog; // inherited from NSObject

	static dialogWithViewControllerWithContentDelegate(viewController: UIViewController, content: FBSDKSharingContent, delegate: FBSDKSharingDelegate): FBSDKShareDialog;

	static new(): FBSDKShareDialog; // inherited from NSObject

	static showFromViewControllerWithContentDelegate(viewController: UIViewController, content: FBSDKSharingContent, delegate: FBSDKSharingDelegate): FBSDKShareDialog;

	fromViewController: UIViewController;

	mode: FBSDKShareDialogMode;

	readonly canShow: boolean; // inherited from FBSDKSharingDialog

	readonly debugDescription: string; // inherited from NSObjectProtocol

	delegate: FBSDKSharingDelegate; // inherited from FBSDKSharing

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	shareContent: FBSDKSharingContent; // inherited from FBSDKSharing

	shouldFailOnDataError: boolean; // inherited from FBSDKSharing

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	show(): boolean;

	validateWithError(): boolean;
}

declare const enum FBSDKShareDialogMode {

	Automatic = 0,

	Native = 1,

	ShareSheet = 2,

	Browser = 3,

	Web = 4,

	FeedBrowser = 5,

	FeedWeb = 6
}

declare const enum FBSDKShareError {

	Reserved = 200,

	OpenGraph = 201,

	DialogNotAvailable = 202,

	Unknown = 203
}

declare var FBSDKShareErrorDomain: string;

declare var FBSDKShareKitVersionNumber: number;

declare var FBSDKShareKitVersionString: interop.Reference<number>;

declare class FBSDKShareLinkContent extends NSObject implements FBSDKSharingContent {

	static alloc(): FBSDKShareLinkContent; // inherited from NSObject

	static new(): FBSDKShareLinkContent; // inherited from NSObject

	quote: string;

	contentURL: NSURL; // inherited from FBSDKSharingContent

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	hashtag: FBSDKHashtag; // inherited from FBSDKSharingContent

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	pageID: string; // inherited from FBSDKSharingContent

	peopleIDs: NSArray<string>; // inherited from FBSDKSharingContent

	placeID: string; // inherited from FBSDKSharingContent

	ref: string; // inherited from FBSDKSharingContent

	readonly shareUUID: string; // inherited from FBSDKSharingContent

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	addParametersBridgeOptions(existingParameters: NSDictionary<string, any>, bridgeOptions: FBSDKShareBridgeOptions): NSDictionary<string, any>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copy(): any;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;

	isEqual(object: any): boolean;

	isEqualToShareLinkContent(content: FBSDKShareLinkContent): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	validateWithOptionsError(bridgeOptions: FBSDKShareBridgeOptions): boolean;
}

interface FBSDKShareMedia extends NSObjectProtocol {
}
declare var FBSDKShareMedia: {

	prototype: FBSDKShareMedia;
};

declare class FBSDKShareMediaContent extends NSObject implements FBSDKSharingContent {

	static alloc(): FBSDKShareMediaContent; // inherited from NSObject

	static new(): FBSDKShareMediaContent; // inherited from NSObject

	media: NSArray<FBSDKShareMedia>;

	contentURL: NSURL; // inherited from FBSDKSharingContent

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	hashtag: FBSDKHashtag; // inherited from FBSDKSharingContent

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	pageID: string; // inherited from FBSDKSharingContent

	peopleIDs: NSArray<string>; // inherited from FBSDKSharingContent

	placeID: string; // inherited from FBSDKSharingContent

	ref: string; // inherited from FBSDKSharingContent

	readonly shareUUID: string; // inherited from FBSDKSharingContent

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	addParametersBridgeOptions(existingParameters: NSDictionary<string, any>, bridgeOptions: FBSDKShareBridgeOptions): NSDictionary<string, any>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copy(): any;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;

	isEqual(object: any): boolean;

	isEqualToShareMediaContent(content: FBSDKShareMediaContent): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	validateWithOptionsError(bridgeOptions: FBSDKShareBridgeOptions): boolean;
}

interface FBSDKShareMessengerActionButton extends FBSDKCopying, NSSecureCoding {

	title: string;
}
declare var FBSDKShareMessengerActionButton: {

	prototype: FBSDKShareMessengerActionButton;
};

declare class FBSDKShareMessengerGenericTemplateContent extends NSObject implements FBSDKSharingContent {

	static alloc(): FBSDKShareMessengerGenericTemplateContent; // inherited from NSObject

	static new(): FBSDKShareMessengerGenericTemplateContent; // inherited from NSObject

	element: FBSDKShareMessengerGenericTemplateElement;

	imageAspectRatio: FBSDKShareMessengerGenericTemplateImageAspectRatio;

	isSharable: boolean;

	contentURL: NSURL; // inherited from FBSDKSharingContent

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	hashtag: FBSDKHashtag; // inherited from FBSDKSharingContent

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	pageID: string; // inherited from FBSDKSharingContent

	peopleIDs: NSArray<string>; // inherited from FBSDKSharingContent

	placeID: string; // inherited from FBSDKSharingContent

	ref: string; // inherited from FBSDKSharingContent

	readonly shareUUID: string; // inherited from FBSDKSharingContent

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	addParametersBridgeOptions(existingParameters: NSDictionary<string, any>, bridgeOptions: FBSDKShareBridgeOptions): NSDictionary<string, any>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copy(): any;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	validateWithOptionsError(bridgeOptions: FBSDKShareBridgeOptions): boolean;
}

declare class FBSDKShareMessengerGenericTemplateElement extends NSObject implements FBSDKCopying, NSSecureCoding {

	static alloc(): FBSDKShareMessengerGenericTemplateElement; // inherited from NSObject

	static new(): FBSDKShareMessengerGenericTemplateElement; // inherited from NSObject

	button: FBSDKShareMessengerActionButton;

	defaultAction: FBSDKShareMessengerActionButton;

	imageURL: NSURL;

	subtitle: string;

	title: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copy(): any;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare const enum FBSDKShareMessengerGenericTemplateImageAspectRatio {

	Horizontal = 0,

	Square = 1
}

declare class FBSDKShareMessengerMediaTemplateContent extends NSObject implements FBSDKSharingContent {

	static alloc(): FBSDKShareMessengerMediaTemplateContent; // inherited from NSObject

	static new(): FBSDKShareMessengerMediaTemplateContent; // inherited from NSObject

	readonly attachmentID: string;

	button: FBSDKShareMessengerActionButton;

	mediaType: FBSDKShareMessengerMediaTemplateMediaType;

	readonly mediaURL: NSURL;

	contentURL: NSURL; // inherited from FBSDKSharingContent

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	hashtag: FBSDKHashtag; // inherited from FBSDKSharingContent

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	pageID: string; // inherited from FBSDKSharingContent

	peopleIDs: NSArray<string>; // inherited from FBSDKSharingContent

	placeID: string; // inherited from FBSDKSharingContent

	ref: string; // inherited from FBSDKSharingContent

	readonly shareUUID: string; // inherited from FBSDKSharingContent

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { attachmentID: string; });

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { mediaURL: NSURL; });

	addParametersBridgeOptions(existingParameters: NSDictionary<string, any>, bridgeOptions: FBSDKShareBridgeOptions): NSDictionary<string, any>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copy(): any;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(aCoder: NSCoder): void;

	initWithAttachmentID(attachmentID: string): this;

	initWithCoder(aDecoder: NSCoder): this;

	initWithMediaURL(mediaURL: NSURL): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	validateWithOptionsError(bridgeOptions: FBSDKShareBridgeOptions): boolean;
}

declare const enum FBSDKShareMessengerMediaTemplateMediaType {

	Image = 0,

	Video = 1
}

declare class FBSDKShareMessengerOpenGraphMusicTemplateContent extends NSObject implements FBSDKSharingContent {

	static alloc(): FBSDKShareMessengerOpenGraphMusicTemplateContent; // inherited from NSObject

	static new(): FBSDKShareMessengerOpenGraphMusicTemplateContent; // inherited from NSObject

	button: FBSDKShareMessengerActionButton;

	url: NSURL;

	contentURL: NSURL; // inherited from FBSDKSharingContent

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	hashtag: FBSDKHashtag; // inherited from FBSDKSharingContent

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	pageID: string; // inherited from FBSDKSharingContent

	peopleIDs: NSArray<string>; // inherited from FBSDKSharingContent

	placeID: string; // inherited from FBSDKSharingContent

	ref: string; // inherited from FBSDKSharingContent

	readonly shareUUID: string; // inherited from FBSDKSharingContent

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	addParametersBridgeOptions(existingParameters: NSDictionary<string, any>, bridgeOptions: FBSDKShareBridgeOptions): NSDictionary<string, any>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copy(): any;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	validateWithOptionsError(bridgeOptions: FBSDKShareBridgeOptions): boolean;
}

declare class FBSDKShareMessengerURLActionButton extends NSObject implements FBSDKShareMessengerActionButton {

	static alloc(): FBSDKShareMessengerURLActionButton; // inherited from NSObject

	static new(): FBSDKShareMessengerURLActionButton; // inherited from NSObject

	fallbackURL: NSURL;

	isMessengerExtensionURL: boolean;

	shouldHideWebviewShareButton: boolean;

	url: NSURL;

	webviewHeightRatio: FBSDKShareMessengerURLActionButtonWebviewHeightRatio;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	title: string; // inherited from FBSDKShareMessengerActionButton

	readonly  // inherited from NSObjectProtocol

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copy(): any;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare const enum FBSDKShareMessengerURLActionButtonWebviewHeightRatio {

	Full = 0,

	Tall = 1,

	Compact = 2
}

declare class FBSDKShareOpenGraphAction extends FBSDKShareOpenGraphValueContainer implements FBSDKCopying, NSSecureCoding {

	static actionWithTypeObjectIDKey(actionType: string, objectID: string, key: string): FBSDKShareOpenGraphAction;

	static actionWithTypeObjectKey(actionType: string, object: FBSDKShareOpenGraphObject, key: string): FBSDKShareOpenGraphAction;

	static actionWithTypeObjectURLKey(actionType: string, objectURL: NSURL, key: string): FBSDKShareOpenGraphAction;

	static alloc(): FBSDKShareOpenGraphAction; // inherited from NSObject

	static new(): FBSDKShareOpenGraphAction; // inherited from NSObject

	actionType: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { actionType: string; });

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copy(): any;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(aCoder: NSCoder): void;

	initWithActionType(actionType: string): this;

	initWithCoder(aDecoder: NSCoder): this;

	isEqual(object: any): boolean;

	isEqualToShareOpenGraphAction(action: FBSDKShareOpenGraphAction): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class FBSDKShareOpenGraphContent extends NSObject implements FBSDKSharingContent {

	static alloc(): FBSDKShareOpenGraphContent; // inherited from NSObject

	static new(): FBSDKShareOpenGraphContent; // inherited from NSObject

	action: FBSDKShareOpenGraphAction;

	previewPropertyName: string;

	contentURL: NSURL; // inherited from FBSDKSharingContent

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	hashtag: FBSDKHashtag; // inherited from FBSDKSharingContent

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	pageID: string; // inherited from FBSDKSharingContent

	peopleIDs: NSArray<string>; // inherited from FBSDKSharingContent

	placeID: string; // inherited from FBSDKSharingContent

	ref: string; // inherited from FBSDKSharingContent

	readonly shareUUID: string; // inherited from FBSDKSharingContent

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	addParametersBridgeOptions(existingParameters: NSDictionary<string, any>, bridgeOptions: FBSDKShareBridgeOptions): NSDictionary<string, any>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copy(): any;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;

	isEqual(object: any): boolean;

	isEqualToShareOpenGraphContent(content: FBSDKShareOpenGraphContent): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	validateWithOptionsError(bridgeOptions: FBSDKShareBridgeOptions): boolean;
}

declare class FBSDKShareOpenGraphObject extends FBSDKShareOpenGraphValueContainer implements FBSDKCopying, NSSecureCoding {

	static alloc(): FBSDKShareOpenGraphObject; // inherited from NSObject

	static new(): FBSDKShareOpenGraphObject; // inherited from NSObject

	static objectWithProperties(properties: NSDictionary<string, any>): FBSDKShareOpenGraphObject;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copy(): any;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;

	isEqual(object: any): boolean;

	isEqualToShareOpenGraphObject(object: FBSDKShareOpenGraphObject): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class FBSDKShareOpenGraphValueContainer extends NSObject implements FBSDKShareOpenGraphValueContaining {

	static alloc(): FBSDKShareOpenGraphValueContainer; // inherited from NSObject

	static new(): FBSDKShareOpenGraphValueContainer; // inherited from NSObject

	readonly allProperties: NSDictionary<string, any>; // inherited from FBSDKShareOpenGraphValueContaining

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly keyEnumerator: NSEnumerator<any>; // inherited from FBSDKShareOpenGraphValueContaining

	readonly objectEnumerator: NSEnumerator<any>; // inherited from FBSDKShareOpenGraphValueContaining

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	URLForKey(key: string): NSURL;

	arrayForKey(key: string): NSArray<any>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	encodeWithCoder(aCoder: NSCoder): void;

	enumerateKeysAndObjectsUsingBlock(block: (p1: string, p2: any, p3: interop.Pointer | interop.Reference<boolean>) => void): void;

	initWithCoder(aDecoder: NSCoder): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	numberForKey(key: string): number;

	objectForKey(key: string): FBSDKShareOpenGraphObject;

	objectForKeyedSubscript(key: string): any;

	parseProperties(properties: NSDictionary<string, any>): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	photoForKey(key: string): FBSDKSharePhoto;

	removeObjectForKey(key: string): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setArrayForKey(array: NSArray<any> | any[], key: string): void;

	setNumberForKey(number: number, key: string): void;

	setObjectForKey(object: FBSDKShareOpenGraphObject, key: string): void;

	setPhotoForKey(photo: FBSDKSharePhoto, key: string): void;

	setStringForKey(string: string, key: string): void;

	setURLForKey(URL: NSURL, key: string): void;

	stringForKey(key: string): string;
}

interface FBSDKShareOpenGraphValueContaining extends NSObjectProtocol, NSSecureCoding {

	allProperties: NSDictionary<string, any>;

	keyEnumerator: NSEnumerator<any>;

	objectEnumerator: NSEnumerator<any>;

	URLForKey(key: string): NSURL;

	arrayForKey(key: string): NSArray<any>;

	enumerateKeysAndObjectsUsingBlock(block: (p1: string, p2: any, p3: interop.Pointer | interop.Reference<boolean>) => void): void;

	numberForKey(key: string): number;

	objectForKey(key: string): FBSDKShareOpenGraphObject;

	objectForKeyedSubscript(key: string): any;

	parseProperties(properties: NSDictionary<string, any>): void;

	photoForKey(key: string): FBSDKSharePhoto;

	removeObjectForKey(key: string): void;

	setArrayForKey(array: NSArray<any> | any[], key: string): void;

	setNumberForKey(number: number, key: string): void;

	setObjectForKey(object: FBSDKShareOpenGraphObject, key: string): void;

	setPhotoForKey(photo: FBSDKSharePhoto, key: string): void;

	setStringForKey(string: string, key: string): void;

	setURLForKey(URL: NSURL, key: string): void;

	stringForKey(key: string): string;
}
declare var FBSDKShareOpenGraphValueContaining: {

	prototype: FBSDKShareOpenGraphValueContaining;
};

declare class FBSDKSharePhoto extends NSObject implements FBSDKCopying, FBSDKShareMedia, FBSDKSharingValidation, NSSecureCoding {

	static alloc(): FBSDKSharePhoto; // inherited from NSObject

	static new(): FBSDKSharePhoto; // inherited from NSObject

	static photoWithImageURLUserGenerated(imageURL: NSURL, userGenerated: boolean): FBSDKSharePhoto;

	static photoWithImageUserGenerated(image: UIImage, userGenerated: boolean): FBSDKSharePhoto;

	static photoWithPhotoAssetUserGenerated(photoAsset: PHAsset, userGenerated: boolean): FBSDKSharePhoto;

	caption: string;

	image: UIImage;

	imageURL: NSURL;

	photoAsset: PHAsset;

	userGenerated: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copy(): any;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;

	isEqual(object: any): boolean;

	isEqualToSharePhoto(photo: FBSDKSharePhoto): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	validateWithOptionsError(bridgeOptions: FBSDKShareBridgeOptions): boolean;
}

declare class FBSDKSharePhotoContent extends NSObject implements FBSDKSharingContent {

	static alloc(): FBSDKSharePhotoContent; // inherited from NSObject

	static new(): FBSDKSharePhotoContent; // inherited from NSObject

	photos: NSArray<FBSDKSharePhoto>;

	contentURL: NSURL; // inherited from FBSDKSharingContent

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	hashtag: FBSDKHashtag; // inherited from FBSDKSharingContent

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	pageID: string; // inherited from FBSDKSharingContent

	peopleIDs: NSArray<string>; // inherited from FBSDKSharingContent

	placeID: string; // inherited from FBSDKSharingContent

	ref: string; // inherited from FBSDKSharingContent

	readonly shareUUID: string; // inherited from FBSDKSharingContent

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	addParametersBridgeOptions(existingParameters: NSDictionary<string, any>, bridgeOptions: FBSDKShareBridgeOptions): NSDictionary<string, any>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copy(): any;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;

	isEqual(object: any): boolean;

	isEqualToSharePhotoContent(content: FBSDKSharePhotoContent): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	validateWithOptionsError(bridgeOptions: FBSDKShareBridgeOptions): boolean;
}

declare class FBSDKShareVideo extends NSObject implements FBSDKCopying, FBSDKShareMedia, FBSDKSharingValidation, NSSecureCoding {

	static alloc(): FBSDKShareVideo; // inherited from NSObject

	static new(): FBSDKShareVideo; // inherited from NSObject

	static videoWithData(data: NSData): FBSDKShareVideo;

	static videoWithDataPreviewPhoto(data: NSData, previewPhoto: FBSDKSharePhoto): FBSDKShareVideo;

	static videoWithVideoAsset(videoAsset: PHAsset): FBSDKShareVideo;

	static videoWithVideoAssetPreviewPhoto(videoAsset: PHAsset, previewPhoto: FBSDKSharePhoto): FBSDKShareVideo;

	static videoWithVideoURL(videoURL: NSURL): FBSDKShareVideo;

	static videoWithVideoURLPreviewPhoto(videoURL: NSURL, previewPhoto: FBSDKSharePhoto): FBSDKShareVideo;

	data: NSData;

	previewPhoto: FBSDKSharePhoto;

	videoAsset: PHAsset;

	videoURL: NSURL;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copy(): any;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;

	isEqual(object: any): boolean;

	isEqualToShareVideo(video: FBSDKShareVideo): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	validateWithOptionsError(bridgeOptions: FBSDKShareBridgeOptions): boolean;
}

declare class FBSDKShareVideoContent extends NSObject implements FBSDKSharingContent {

	static alloc(): FBSDKShareVideoContent; // inherited from NSObject

	static new(): FBSDKShareVideoContent; // inherited from NSObject

	video: FBSDKShareVideo;

	contentURL: NSURL; // inherited from FBSDKSharingContent

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	hashtag: FBSDKHashtag; // inherited from FBSDKSharingContent

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	pageID: string; // inherited from FBSDKSharingContent

	peopleIDs: NSArray<string>; // inherited from FBSDKSharingContent

	placeID: string; // inherited from FBSDKSharingContent

	ref: string; // inherited from FBSDKSharingContent

	readonly shareUUID: string; // inherited from FBSDKSharingContent

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	addParametersBridgeOptions(existingParameters: NSDictionary<string, any>, bridgeOptions: FBSDKShareBridgeOptions): NSDictionary<string, any>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copy(): any;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(aCoder: NSCoder): void;

	initWithCoder(aDecoder: NSCoder): this;

	isEqual(object: any): boolean;

	isEqualToShareVideoContent(content: FBSDKShareVideoContent): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	validateWithOptionsError(bridgeOptions: FBSDKShareBridgeOptions): boolean;
}

interface FBSDKSharing extends NSObjectProtocol {

	delegate: FBSDKSharingDelegate;

	shareContent: FBSDKSharingContent;

	shouldFailOnDataError: boolean;

	validateWithError(): boolean;
}
declare var FBSDKSharing: {

	prototype: FBSDKSharing;
};

interface FBSDKSharingButton extends NSObjectProtocol {

	shareContent: FBSDKSharingContent;
}
declare var FBSDKSharingButton: {

	prototype: FBSDKSharingButton;
};

interface FBSDKSharingContent extends FBSDKCopying, FBSDKSharingValidation, NSSecureCoding {

	contentURL: NSURL;

	hashtag: FBSDKHashtag;

	pageID: string;

	peopleIDs: NSArray<string>;

	placeID: string;

	ref: string;

	shareUUID: string;

	addParametersBridgeOptions(existingParameters: NSDictionary<string, any>, bridgeOptions: FBSDKShareBridgeOptions): NSDictionary<string, any>;
}
declare var FBSDKSharingContent: {

	prototype: FBSDKSharingContent;
};

interface FBSDKSharingDelegate extends NSObjectProtocol {

	sharerDidCancel(sharer: FBSDKSharing): void;

	sharerDidCompleteWithResults(sharer: FBSDKSharing, results: NSDictionary<string, any>): void;

	sharerDidFailWithError(sharer: FBSDKSharing, error: NSError): void;
}
declare var FBSDKSharingDelegate: {

	prototype: FBSDKSharingDelegate;
};

interface FBSDKSharingDialog extends FBSDKSharing {

	canShow: boolean;

	show(): boolean;
}
declare var FBSDKSharingDialog: {

	prototype: FBSDKSharingDialog;
};

interface FBSDKSharingScheme {

	schemeForMode(mode: FBSDKShareDialogMode): string;
}
declare var FBSDKSharingScheme: {

	prototype: FBSDKSharingScheme;
};

interface FBSDKSharingValidation {

	validateWithOptionsError(bridgeOptions: FBSDKShareBridgeOptions): boolean;
}
declare var FBSDKSharingValidation: {

	prototype: FBSDKSharingValidation;
};

declare function NSStringFromFBSDKAppGroupPrivacy(privacy: FBSDKAppGroupPrivacy): string;

declare function NSStringFromFBSDKLikeObjectType(objectType: FBSDKLikeObjectType): string;

declare function NSStringFromFBSDKShareDialogMode(dialogMode: FBSDKShareDialogMode): string;
