export * from './share-manager.common';

import {ImageSource} from 'tns-core-modules/image-source';
import {android as androidApp, AndroidApplication} from 'tns-core-modules/application';
import {
    MessageActionButton,
    MessageGenericTemplateContent,
    MessageGenericTemplateImageAspectRatio,
    MessageMediaTemplateContent,
    MessageMediaTemplateMediaType,
    ShareAdditionContent,
    ShareCallbackFunction
} from './share-manager.common';

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


export function createShareLinksContent(link: string, quote?: string, addition?: ShareAdditionContent) {
    const content: com.facebook.share.model.ShareLinkContent.Builder = new com.facebook.share.model.ShareLinkContent
        .Builder()
        .setContentUrl(android.net.Uri.parse(link));
    if (quote) {
        content.setQuote(quote);
    }

    attachAdditionalContent(content, addition);
    return content.build();
}

export function createSharePhotosContent(images: ImageSource[] | string[], userGenerated: boolean, addition?: ShareAdditionContent) {
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


function createMessageActionButton(config?: MessageActionButton) {
    if (config) {
        const builder = new com.facebook.share.model.ShareMessengerURLActionButton.Builder();
        return builder
            .setTitle(config.title)
            .setUrl(android.net.Uri.parse(config.url))
            .build();
    }
    return null;
}

export function createShareMessageGenericTemplateContent(contentConfig: MessageGenericTemplateContent) {
    const elementConfig = contentConfig.element;
    const elementBuilder = new com.facebook.share.model.ShareMessengerGenericTemplateElement
        .Builder()
        .setTitle(elementConfig.title)
        .setSubtitle(elementConfig.subtitle || null)
        .setImageUrl(android.net.Uri.parse(elementConfig.imageUrl));

    if (elementConfig.button) {
        elementBuilder.setButton(createMessageActionButton(elementConfig.button));
    }
    if (elementConfig.defaultAction) {
        elementBuilder.setDefaultAction(createMessageActionButton(elementConfig.defaultAction));
    }
    const element = elementBuilder.build();

    const contentBuilder = new com.facebook.share.model.ShareMessengerGenericTemplateContent.Builder();
    contentBuilder.setGenericTemplateElement(element);

    if (contentConfig.hasOwnProperty('isSharable')) {
        contentBuilder.setIsSharable(contentConfig.isSharable);
    }
    if (contentConfig.pageID) {
        contentBuilder.setPageId(contentConfig.pageID);
    }
    if (contentConfig.hasOwnProperty('imageAspectRatio')) {
        if (contentConfig.imageAspectRatio === MessageGenericTemplateImageAspectRatio.Horizontal) {
            contentBuilder.setImageAspectRatio(com.facebook.share.model.ShareMessengerGenericTemplateContent.ImageAspectRatio.HORIZONTAL);
        }
        else {
            contentBuilder.setImageAspectRatio(com.facebook.share.model.ShareMessengerGenericTemplateContent.ImageAspectRatio.SQUARE);
        }
    }
    return contentBuilder.build();
}

export function createShareMessageMediaTemplateContent(contentConfig: MessageMediaTemplateContent) {
    const contentBuilder = new com.facebook.share.model.ShareMessengerMediaTemplateContent.Builder();

    if (contentConfig.mediaUrl) {
        contentBuilder.setMediaUrl(android.net.Uri.parse(contentConfig.mediaUrl));
    }
    else if (contentConfig.attachmentID) {
        contentBuilder.setAttachmentId(contentConfig.attachmentID);
    }
    else {
        throw new Error('To use MediaTemplateContent, you have to provide either mediaUrl or attachmentID, see https://developers.facebook.com/docs/sharing/messenger#share-types for more detail');
    }

    if (contentConfig.pageID) {
        contentBuilder.setPageId(contentConfig.pageID);
    }
    else {
        throw new Error('To use MediaTemplateContent, you have to provide a pageId, see https://developers.facebook.com/docs/sharing/messenger#app-page-id for more detail');
    }

    if (contentConfig.mediaType === MessageMediaTemplateMediaType.Video) {
        contentBuilder.setMediaType(com.facebook.share.model.ShareMessengerMediaTemplateContent.MediaType.VIDEO);
    }
    else {
        contentBuilder.setMediaType(com.facebook.share.model.ShareMessengerMediaTemplateContent.MediaType.IMAGE);
    }
    if (contentConfig.button) {
        contentBuilder.setButton(createMessageActionButton(contentConfig.button));
    }
    return contentBuilder.build();
}

export function showShareDialog(content: any, callback?: ShareCallbackFunction) {
    let dialog = new com.facebook.share.widget.ShareDialog(androidApp.startActivity || androidApp.foregroundActivity);
    if (callback) {
        registerShareCallback(dialog, callback);
    }
    dialog.show(content);
}

export function showMessageDialog(content: any, callback?: ShareCallbackFunction) {
    let dialog = new com.facebook.share.widget.MessageDialog(androidApp.startActivity || androidApp.foregroundActivity);
    if (callback) {
        registerShareCallback(dialog, callback);
    }
    dialog.show(content);
}


function registerShareCallback(dialog: com.facebook.share.widget.ShareDialog | com.facebook.share.widget.MessageDialog, callback?: ShareCallbackFunction) {
    let callbackManager = com.facebook.CallbackManager.Factory.create();
    dialog.registerCallback(callbackManager, new com.facebook.FacebookCallback<com.facebook.share.Sharer.Result>({
        onSuccess: function (result) {
            callback(null, {
                android: result
            });
        },
        onCancel: function () {
            callback(new Error('canceled'), null);
        },
        onError: function (e) {
            let errorMessage = 'Error with Facebook';
            if (e['getErrorMessage']) {
                errorMessage += ': ' + e['getErrorMessage']();
            }
            else if (e['getErrorCode']) {
                errorMessage += ': Code ' + e['getErrorCode']();
            }
            else {
                errorMessage += ': ' + e;
            }
            callback(new Error(errorMessage), null);
        }
    }));

    let onActivityResult = (args) => {
        if (callbackManager.onActivityResult(args.requestCode, args.resultCode, args.intent)) {
            unsubscribe();
        }
    };

    let unsubscribe = () => {
        androidApp.off(AndroidApplication.activityResultEvent, onActivityResult);
    };

    androidApp.on(AndroidApplication.activityResultEvent, onActivityResult);
}