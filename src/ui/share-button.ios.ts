import {FacebookShareButtonBase} from './share-button.common';

export class ShareButton extends FacebookShareButtonBase {
    nativeView: FBSDKShareButton;

    createNativeView() {
        const button = FBSDKShareButton.alloc().init();
        this.nativeView = button;
        return button;
    }

    onContentChanged(oldValue: any, newValue: any): void {
        this.nativeView.shareContent = newValue;
    }
}


export class SendButton extends FacebookShareButtonBase {
    nativeView: FBSDKSendButton;

    createNativeView() {
        const button = FBSDKSendButton.alloc().init();
        this.nativeView = button;
        return button;
    }

    onContentChanged(oldValue: any, newValue: any): void {
        this.nativeView.shareContent = newValue;
    }
}