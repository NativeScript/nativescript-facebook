export * from './share-manager.common';

import {ImageSource} from 'tns-core-modules/image-source';
import {ShareAdditionContent} from './share-manager.common';
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


export function createLinksShareContent(link: string, quote?: string, addition?: ShareAdditionContent) {
    const content: FBSDKShareLinkContent = FBSDKShareLinkContent.new();
    content.contentURL = NSURL.URLWithString(link);
    if (quote) {
        content.quote = quote;
    }

    attachAdditionalContent(content, addition);
    return content;
}

export function createPhotosShareContent(images: ImageSource[] | string[], userGenerated: boolean, addition?: ShareAdditionContent) {
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

export function showShareDialog(content: any) {
    FBSDKShareDialog.showFromViewControllerWithContentDelegate(currentViewController(), content, null);
}

export function showMessageDialog(content: any) {
    FBSDKMessageDialog.showWithContentDelegate(content, null);
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
        return dialog.canShow();
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
        return dialog.canShow();
    }
    return false;
}