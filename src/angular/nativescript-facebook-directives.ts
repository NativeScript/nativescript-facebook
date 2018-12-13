import { Directive } from "@angular/core"; // TODO: check require .Directive without hacks

@Directive({
    selector: "FacebookLoginButton"
})
export class FacebookLoginButtonDirective { }

@Directive({
    selector: "FacebookShareButton"
})
export class FacebookShareButtonDirective { }

@Directive({
    selector: "FacebookSendButton"
})
export class FacebookSendButtonDirective { }

export const DIRECTIVES = [FacebookLoginButtonDirective, FacebookShareButtonDirective, FacebookSendButtonDirective];
