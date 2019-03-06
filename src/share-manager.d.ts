import { ImageSource } from 'tns-core-modules/image-source';
import {
    MessageGenericTemplateContent,
    MessageMediaTemplateContent,
    ShareAdditionContent,
    ShareCallbackFunction
} from './share-manager.common';

export * from './share-manager.common';

/**
 * When people share links from your app to Facebook it includes a contentURL with the link to be shared.
 * @param {string} link  Link to be shared.
 * @param {string} quote You can enable people to highlight text to appear as a quote with a shared link. Alternatively, you can predefine a quote, for example, a pull quote in an article, to appear with the shared link. In either case, the quote appears in its own field separate from the user comments.
 * @param {ShareAdditionContent} addition When you use the Facebook share dialog, you have additional options that aren't available when you share by using the API.
 */
export declare function createShareLinksContent(link: string, quote?: string, addition?: ShareAdditionContent): any;

/**
 * People can share photos from your app to Facebook with the Share Dialog or with a custom interface.
 * Photos must be less than 12MB in size.
 * People need the native Facebook installed, version 7.0 or higher
 * @param {ImageSource[] | string[]} images : ImageSources or image urls of the photo to be shared
 * @param {ShareAdditionContent} addition When you use the Facebook share dialog, you have additional options that aren't available when you share by using the API.
 */
export declare function createSharePhotosContent(images: ImageSource[] | string[], userGenerated: boolean, addition?: ShareAdditionContent): any;

/**
 * The generic template is a simple structured message that includes a title, subtitle, image, a button. You may also specify a default_action object that sets a URL that will be opened in the Messenger webview when the template is tapped.
 * see https://developers.facebook.com/docs/messenger-platform/send-messages/template/generic for more.
 * @param {MessageGenericTemplateContent} contentConfig : config of the structure
 */
export declare function createShareMessageGenericTemplateContent(contentConfig: MessageGenericTemplateContent): any;

/**
 * The media template allows you to send images, GIFs, and video as a structured message with an optional button. Videos and animated GIFs sent with the media template are playable in the conversation.
 * see https://developers.facebook.com/docs/messenger-platform/send-messages/template/media for more
 * @param {MessageMediaTemplateContent} contentConfig : config of the structure
 */
export declare function createShareMessageMediaTemplateContent(contentConfig: MessageMediaTemplateContent): any;


/**
 * the SDK automatically checks for the native Facebook app.
 * If it isn't installed, the SDK switches people to their default browser and opens the Feed Dialog. If someone wants to share an Open Graph story, the SDK opens the Web Share Dialog.
 * @param {any} content: Links content or photos content
 * @param {ShareCallbackFunction} callback: Callback for the sharing dialog
 */
export declare function showShareDialog(content: any, callback?: ShareCallbackFunction): void;


/**
 * The Message Dialog switches to the native Messenger for iOS app, then returns control to your app after a post is published.
 * @param {any} content: Links content or photos content, SUPPORTED SHARE TYPES - ShareLinkContent - ShareCameraEffectContent - ShareMessengerOpenGraphMusicTemplateContent - ShareMessengerMediaTemplateContent - ShareMessengerGenericTemplateContent UNSUPPORTED SHARE TYPES (DEPRECATED AUGUST 2018) - ShareOpenGraphContent - SharePhotoContent - ShareVideoContent - Any other types that are not one of the four supported types listed above
 * @param {ShareCallbackFunction} callback: Callback for the sharing dialog
 */
export declare function showMessageDialog(content: any, callback?: ShareCallbackFunction): void;


/**
 * Indicates whether it is possible to show the dialog for ShareContent
 * @param {any} content: Links content or photos content
 */
export declare function canShareDialogShow(content: any): boolean;


/**
 * Indicates whether it is possible to show the dialog for ShareContent
 * @param {any} content: Links content or photos content, SUPPORTED SHARE TYPES - ShareLinkContent - ShareCameraEffectContent - ShareMessengerOpenGraphMusicTemplateContent - ShareMessengerMediaTemplateContent - ShareMessengerGenericTemplateContent UNSUPPORTED SHARE TYPES (DEPRECATED AUGUST 2018) - ShareOpenGraphContent - SharePhotoContent - ShareVideoContent - Any other types that are not one of the four supported types listed above
 */
export declare function canMessageDialogShow(content: any): boolean;