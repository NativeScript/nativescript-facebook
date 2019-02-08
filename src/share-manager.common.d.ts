export interface ShareAdditionContent {
    hashtag?: string;
}

export interface MessageActionButton {
    title: string;
    url: string;
}

export interface MessageGenericTemplateElement {
    title: string;
    subtitle?: string;
    imageUrl: string;
    button?: MessageActionButton;
    defaultAction?: MessageActionButton;
}

export interface MessageGenericTemplateContent {
    element: MessageGenericTemplateElement;
    imageAspectRatio?: MessageGenericTemplateImageAspectRatio;
    pageID?: string;
    isSharable?: boolean;
}

export enum MessageGenericTemplateImageAspectRatio {
    Horizontal = 0,
    Square = 1
}

export enum MessageMediaTemplateMediaType {
    Image = 0,
    Video = 1
}

export interface MessageMediaTemplateContent {
    mediaUrl?: string;
    attachmentID?: string;
    mediaType: MessageMediaTemplateMediaType;
    pageID: string;
    button?: MessageActionButton;
}