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
        if (addition.quote) {
            content.quote = addition.quote;
        }
    }
}


export function createLinksShareContent(link: string, addition?: ShareAdditionContent) {
    const content: FBSDKShareLinkContent = FBSDKShareLinkContent.alloc().init();
    content.contentURL = NSURL.URLWithString(link);
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
    const content: FBSDKSharePhotoContent = FBSDKSharePhotoContent.alloc().init();
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