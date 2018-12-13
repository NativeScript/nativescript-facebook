import {android as androidApp} from 'tns-core-modules/application';
import {FacebookShareButtonBase} from './share-button.common';

export class ShareButton extends FacebookShareButtonBase {
    nativeView: com.facebook.share.widget.ShareButton;

    createNativeView() {
        const resourceId = androidApp.foregroundActivity.getResources().getIdentifier('fb_share_button', 'id', androidApp.context.getPackageName());
        const button: com.facebook.share.widget.ShareButton = androidApp.foregroundActivity.findViewById(resourceId);
        this.nativeView = button;
        return button;
    }

    onContentChanged(oldValue: any, newValue: any): void {
        this.nativeView.setShareContent(newValue);
    }
}


export class SendButton extends FacebookShareButtonBase {
    nativeView: com.facebook.share.widget.SendButton;

    createNativeView() {
        const resourceId = androidApp.foregroundActivity.getResources().getIdentifier('messenger_send_button', 'id', androidApp.context.getPackageName());
        const button: com.facebook.share.widget.SendButton = androidApp.foregroundActivity.findViewById(resourceId);
        this.nativeView = button;
        return button;
    }

    onContentChanged(oldValue: any, newValue: any): void {
        this.nativeView.setShareContent(newValue);
    }
}