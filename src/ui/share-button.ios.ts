import {FacebookShareButtonBase} from './share-button.common';

export class ShareButton extends FacebookShareButtonBase {
    nativeView: FBSDKShareButton;

    createNativeView() {
        const button = FBSDKShareButton.new();
        this.nativeView = button;
        if (this.content) {
            this.nativeView.shareContent = this.content;
        }
        return button;
    }

    onContentChanged(oldValue: any, newValue: any): void {
        if (this.nativeView) {
            this.nativeView.shareContent = newValue;
        }
    }
}


export class SendButton extends FacebookShareButtonBase {
    nativeView: FBSDKSendButton;

    createNativeView() {
        const button = FBSDKSendButton.new();
        this.nativeView = button;
        if (this.content) {
            this.nativeView.shareContent = this.content;
        }
        return button;
    }

    onContentChanged(oldValue: any, newValue: any): void {
        if (this.nativeView) {
            this.nativeView.shareContent = newValue;
        }
    }
}