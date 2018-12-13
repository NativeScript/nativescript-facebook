export * from './share-manager.common';

import {ImageSource} from 'tns-core-modules/image-source';
import {topmost} from 'tns-core-modules/ui/frame';
import {android as androidApp} from 'tns-core-modules/application';
import {ShareAdditionContent} from './share-manager.common';

function attachAdditionalContent(content: any, addition?: ShareAdditionContent) {
    if (addition) {
        if (addition.hashtag) {
            content.setShareHashtag(
                new com.facebook.share.model.ShareHashtag.Builder()
                    .setHashtag(addition.hashtag)
                    .build()
            );
        }
    }
}


export function createLinksShareContent(link: string, quote?: string, addition?: ShareAdditionContent) {
    const content: com.facebook.share.model.ShareLinkContent.Builder = new com.facebook.share.model.ShareLinkContent
        .Builder()
        .setContentUrl(android.net.Uri.parse(link));
    if (quote) {
        content.setQuote(quote);
    }

    attachAdditionalContent(content, addition);
    return content.build();
}

export function createPhotosShareContent(images: ImageSource[] | string[], userGenerated: boolean, addition?: ShareAdditionContent) {
    let nativeImages;
    if (typeof images[0] === 'string') {
        nativeImages = (images as string[]).map(each => {
            return new com.facebook.share.model.SharePhoto.Builder()
                .setImageUrl(android.net.Uri.parse(each))
                .build();
        });
    }
    else {
        nativeImages = (images as ImageSource[]).map(each => {
            return new com.facebook.share.model.SharePhoto.Builder()
                .setBitmap(each.android)
                .build();
        });
    }
    const content = new com.facebook.share.model.SharePhotoContent
        .Builder();
    nativeImages.forEach(each => {
        content.addPhoto(each);
    });

    attachAdditionalContent(content, addition);
    return content.build();
}

export function canShareDialogShow(content: any): boolean {
    if (content) {
        return com.facebook.share.widget.ShareDialog.canShow(content.getClass());
    }
    return false;
}

export function canMessageDialogShow(content: any): boolean {
    if (content) {
        return com.facebook.share.widget.MessageDialog.canShow(content.getClass());
    }
    return false;
}

export function showShareDialog(content: any) {
    com.facebook.share.widget.ShareDialog.show(androidApp.foregroundActivity, content);
}

export function showMessageDialog(content: any) {
    com.facebook.share.widget.MessageDialog.show(androidApp.foregroundActivity, content);
}