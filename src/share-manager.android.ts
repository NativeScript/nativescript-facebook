export * from './share-manager-common';

import {ImageAsset} from 'tns-core-modules/image-asset';
import {topmost} from 'tns-core-modules/ui/frame';
import {android as androidApp} from 'tns-core-modules/application';
import {ShareAdditionContent} from './share-manager-common';

function currentViewController(): any {
    const topView = topmost();
    return (topView.currentPage.modal || topView).viewController;
}

function attachAdditionalContent(content: any, addition?: ShareAdditionContent) {
    if (addition) {
        if (addition.hashtag) {
            content.setShareHashtag(
                new com.facebook.share.model.ShareHashtag.Builder()
                    .setHashtag(addition.hashtag)
                    .build()
            );
        }
        if (addition.quote) {
            content.setQuote(addition.quote)
        }
    }
}


export function createLinksShareContent(link: string, addition?: ShareAdditionContent) {
    const content = new com.facebook.share.model.ShareLinkContent
        .Builder()
        .setContentUrl(android.net.Uri.parse(link));

    attachAdditionalContent(content, addition);
    return content.build();
}

export function createPhotosShareContent(images: ImageAsset[] | string[], userGenerated: boolean, addition?: ShareAdditionContent) {
    let nativeImages;
    if (typeof images[0] === 'string') {
        nativeImages = (images as string[]).map(each => {
            return new com.facebook.share.model.SharePhoto.Builder()
                .setImageUrl(android.net.Uri.parse(each))
                .build();
        });
    }
    else {
        nativeImages = (images as ImageAsset[]).map(each => {
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

export function showShareDialog(content: any) {
    // fragment
    const dialog = new com.facebook.share.widget.ShareDialog(androidApp.context);
    dialog.show(content);
}

export function showMessageDialog(content: any) {
    com.facebook.share.widget.MessageDialog.show(androidApp.context, content);
}