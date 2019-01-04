import {FacebookShareButtonBase} from './share-button.common';

export class ShareButton extends FacebookShareButtonBase {
    nativeView: com.facebook.share.widget.ShareButton;

    createNativeView() {
        this.nativeView = new com.facebook.share.widget.ShareButton(this._context);
        if (this.content) {
            this.nativeView.setShareContent(this.content);
        }
        return this.nativeView;
    }

    onContentChanged(oldValue: any, newValue: any): void {
        if (this.nativeView) {
            this.nativeView.setShareContent(newValue);
        }
    }
}


export class SendButton extends FacebookShareButtonBase {
    nativeView: com.facebook.share.widget.SendButton;

    createNativeView() {
        this.nativeView = new com.facebook.share.widget.SendButton(this._context);
        if (this.content) {
            this.nativeView.setShareContent(this.content);
        }
        return this.nativeView;
    }

    onContentChanged(oldValue: any, newValue: any): void {
        if (this.nativeView) {
            this.nativeView.setShareContent(newValue);
        }
    }
}