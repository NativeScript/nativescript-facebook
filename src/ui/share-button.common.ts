import {Property, View} from 'tns-core-modules/ui/core/view';

export abstract class FacebookShareButtonBase extends View {
    content: any;

    abstract onContentChanged(oldValue: any, newValue: any): void;
}

export const contentProperty = new Property<FacebookShareButtonBase, any>({
    name: 'content',
    defaultValue: null,
    valueChanged: (target, oldValue, newValue) => {
        target.onContentChanged(oldValue, newValue);
    }
});

contentProperty.register(FacebookShareButtonBase);