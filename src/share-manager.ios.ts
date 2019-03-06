export * from './share-manager.common';

import {ImageSource} from 'tns-core-modules/image-source';
import {
    MessageActionButton,
    MessageGenericTemplateContent,
    MessageGenericTemplateImageAspectRatio,
    MessageMediaTemplateContent,
    MessageMediaTemplateMediaType,
    ShareAdditionContent,
    ShareCallbackFunction
} from './share-manager.common';
import {topmost} from 'tns-core-modules/ui/frame';

function currentViewController(): any {
    const topView = topmost();
    return (topView.currentPage.modal || topView).viewController;
}

function attachAdditionalContent(content: any, addition?: ShareAdditionContent) {
    if (addition) {
        if (addition.hashtag) {
            content.hashtag = FBSDKHashtag.hashtagWithString(addition.hashtag);
        }
    }
}


export function createShareLinksContent(link: string, quote?: string, addition?: ShareAdditionContent) {
    const content: FBSDKShareLinkContent = FBSDKShareLinkContent.new();
    content.contentURL = NSURL.URLWithString(link);
    if (quote) {
        content.quote = quote;
    }

    attachAdditionalContent(content, addition);
    return content;
}

export function createSharePhotosContent(images: ImageSource[] | string[], userGenerated: boolean, addition?: ShareAdditionContent) {
    let nativeImages;
    if (typeof images[0] === 'string') {
        nativeImages = (images as string[]).map(each => {
            return FBSDKSharePhoto.photoWithImageURLUserGenerated(NSURL.URLWithString(each), userGenerated);
        });
    }
    else {
        nativeImages = (images as ImageSource[]).map(each => {
            return FBSDKSharePhoto.photoWithImageUserGenerated(each.ios, userGenerated);
        });
    }
    const content: FBSDKSharePhotoContent = FBSDKSharePhotoContent.new();
    content.photos = NSArray.arrayWithArray(nativeImages);
    attachAdditionalContent(content, addition);
    return content;
}

function createMessageActionButton(config?: MessageActionButton) {
    if (config) {
        const button = FBSDKShareMessengerURLActionButton.new();
        button.title = config.title;
        button.url = NSURL.URLWithString(config.url);
        return button;
    }
    return null;
}

export function createShareMessageGenericTemplateContent(contentConfig: MessageGenericTemplateContent) {
    const elementConfig = contentConfig.element;
    const element: FBSDKShareMessengerGenericTemplateElement = FBSDKShareMessengerGenericTemplateElement.new();
    element.title = elementConfig.title;
    element.subtitle = elementConfig.subtitle || null;
    element.imageURL = NSURL.URLWithString(elementConfig.imageUrl);

    if (elementConfig.button) {
        element.button = createMessageActionButton(elementConfig.button);
    }
    if (elementConfig.defaultAction) {
        element.defaultAction = createMessageActionButton(elementConfig.defaultAction);
    }

    const content = FBSDKShareMessengerGenericTemplateContent.new();
    content.element = element;
    if (contentConfig.hasOwnProperty('isSharable')) {
        content.isSharable = contentConfig.isSharable;
    }
    if (contentConfig.pageID) {
        content.pageID = contentConfig.pageID;
    }
    if (contentConfig.hasOwnProperty('imageAspectRatio')) {
        if (contentConfig.imageAspectRatio === MessageGenericTemplateImageAspectRatio.Horizontal) {
            content.imageAspectRatio = FBSDKShareMessengerGenericTemplateImageAspectRatio.Horizontal;
        }
        else {
            content.imageAspectRatio = FBSDKShareMessengerGenericTemplateImageAspectRatio.Square;
        }
    }
    return content;
}

export function createShareMessageMediaTemplateContent(contentConfig: MessageMediaTemplateContent) {
    let content: FBSDKShareMessengerMediaTemplateContent;
    if (contentConfig.mediaUrl) {
        content = FBSDKShareMessengerMediaTemplateContent.alloc().initWithMediaURL(NSURL.URLWithString(contentConfig.mediaUrl));
    }
    else if (contentConfig.attachmentID) {
        content = FBSDKShareMessengerMediaTemplateContent.alloc().initWithAttachmentID(contentConfig.attachmentID);
    }
    else {
        throw new Error('To use MediaTemplateContent, you have to provide either mediaUrl or attachmentID, see https://developers.facebook.com/docs/sharing/messenger#share-types for more detail');
    }

    if (contentConfig.pageID) {
        content.pageID = contentConfig.pageID;
    }
    else {
        throw new Error('To use MediaTemplateContent, you have to provide a pageId, see https://developers.facebook.com/docs/sharing/messenger#app-page-id for more detail');
    }

    if (contentConfig.mediaType === MessageMediaTemplateMediaType.Video) {
        content.mediaType = FBSDKShareMessengerMediaTemplateMediaType.Video;
    }
    else {
        content.mediaType = FBSDKShareMessengerMediaTemplateMediaType.Image;
    }
    if (contentConfig.button) {
        content.button = createMessageActionButton(contentConfig.button);
    }
    return content;
}

function getCallbackDelegate(callback?: ShareCallbackFunction) {
    let delegate;
    if (callback) {
        delegate = SharingDelegate.new().initWithCallback((error, result) => {
            if (callback) {
                callback(error, result);
            }
            CFRelease(delegate);
            delegate = undefined;
        });
        CFRetain(delegate);
    }
    return delegate;
}

export function showShareDialog(content: any, callback?: ShareCallbackFunction) {
    FBSDKShareDialog.showFromViewControllerWithContentDelegate(currentViewController(), content, getCallbackDelegate(callback));
}

export function showMessageDialog(content: any, callback?: ShareCallbackFunction) {
    FBSDKMessageDialog.showWithContentDelegate(content, getCallbackDelegate(callback));
}

// to save the memory usage, cause ios don't have static method to check if a dialog can show
let _shareDialog;

function getShareDialog(): FBSDKShareDialog {
    if (!_shareDialog) {
        _shareDialog = FBSDKShareDialog.new();
    }
    return _shareDialog;
}

export function canShareDialogShow(content: any): boolean {
    if (content) {
        const dialog = getShareDialog();
        getShareDialog().shareContent = content;
        return dialog.canShow;
    }
    return false;
}


let _messageDialog;

function getMessageDialog(): FBSDKMessageDialog {
    if (!_messageDialog) {
        _messageDialog = FBSDKMessageDialog.new();
    }
    return _messageDialog;
}

export function canMessageDialogShow(content: any): boolean {
    if (content) {
        const dialog = getMessageDialog();
        getMessageDialog().shareContent = content;
        return dialog.canShow;
    }
    return false;
}

class SharingDelegate extends NSObject implements FBSDKSharingDelegate {
    public static ObjCProtocols = [];

    static new(): SharingDelegate {
        if (SharingDelegate.ObjCProtocols.length === 0 && typeof (FBSDKSharingDelegate) !== 'undefined') {
            SharingDelegate.ObjCProtocols.push(FBSDKSharingDelegate);
        }
        return <SharingDelegate>super.new();
    }

    private callback: ShareCallbackFunction;

    public initWithCallback(callback: ShareCallbackFunction): SharingDelegate {
        this.callback = callback;
        return this;
    }

    sharerDidCancel(sharer: FBSDKSharing): void {
        this.callback(new Error('canceled'), null);
    }

    sharerDidCompleteWithResults(sharer: FBSDKSharing, results: NSDictionary<any, any>): void {
        this.callback(null, {
            ios: results
        });
    }

    sharerDidFailWithError(sharer: FBSDKSharing, error: NSError): void {
        this.callback(new Error(error.localizedDescription), null);
    }
}