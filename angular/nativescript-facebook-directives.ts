import { Directive } from '@angular/core'; // TODO: check require .Directive without hacks

@Directive({
    selector: "FacebookLoginButton"
})
export class FacebookLoginButtonDirective {
    constructor() { }
}

export const DIRECTIVES = [FacebookLoginButtonDirective];