import { Component, ChangeDetectorRef } from "@angular/core";
import * as Facebook from "nativescript-facebook";
import { NavigationService } from "../../services/navigation.service";
import * as appSettings from "tns-core-modules/application-settings";
import {fromResource} from 'tns-core-modules/image-source';

@Component({
    selector: "login",
    moduleId: module.id,
    templateUrl: "login.component.html",
    styleUrls: ["login.component.css"]
})
export class LoginComponent {
    linkContent = null;
    photosContent = null;
    genericContent = null;
    canShowLinksShareDialog = false;
    canShowPhotosShareDialog = false;
    canShowLinksMessageDialog = false;
    canShowGenericMessageDialog = false;
    eventCounter = 0;

    constructor(private ref: ChangeDetectorRef, private navigationService: NavigationService) {
        // have to init after facebook sdk inited
        setTimeout(() => {
            this.init();
        }, 100);
    }

    init() {
        this.linkContent = this.generateLinksShareContent();
        this.photosContent = this.generatePhotosShareContent();
        this.genericContent = this.generateGenericTemplateContent();
        this.canShowLinksShareDialog = Facebook.canShareDialogShow(this.linkContent);
        this.canShowPhotosShareDialog = Facebook.canShareDialogShow(this.photosContent);
        this.canShowLinksMessageDialog = Facebook.canMessageDialogShow(this.linkContent);
        this.canShowGenericMessageDialog = Facebook.canMessageDialogShow(this.genericContent);
    }

    onLogin(eventData: Facebook.LoginEventData) {
        if (eventData.error) {
            alert("Error during login: " + eventData.error);
        } else {
            appSettings.setString("access_token", eventData.loginResponse.token);
            this.navigationService.go(['home']);
        }
    }

    login() {
        Facebook.login((error, fbData) => {
            if (error) {
                alert("Error during login: " + error.message);
            } else {
                appSettings.setString("access_token", fbData.token);
                this.navigationService.go(['home']);
            }
        });
    }

    getCurrentAccessToken() {
        let accessToken = Facebook.getCurrentAccessToken();

        alert("Current access token: " + JSON.stringify(accessToken, null, '\t'));
    }

    generateLinksShareContent() {
        return Facebook.createShareLinksContent('https://www.nativescript.org',
            'Create Native iOS and Android Apps With JavaScript',
            {
                hashtag: '#Nativescript'
            });
    }

    generatePhotosShareContent() {
        const logoImage = fromResource('logo');
        return Facebook.createSharePhotosContent([logoImage], false, {
            hashtag: '#Nativescript'
        });
    }

    generateGenericTemplateContent() {
        return Facebook.createShareMessageGenericTemplateContent({
            element: {
                title: 'Nativescript',
                subtitle: 'Create Native iOS and Android Apps With JavaScript',
                imageUrl: 'https://d2odgkulk9w7if.cloudfront.net/images/default-source/home/how-it-works-min.png',
                button: {
                    title: 'Check Doc',
                    url: 'https://docs.nativescript.org'
                },
                defaultAction: {
                    title: 'Go HomePage',
                    url: 'https://www.nativescript.org'
                }
            },
            // it seems android have to provide a pageId, otherwise the MessageDialog just wont show
            pageID: 'testestsett',
            imageAspectRatio: Facebook.MessageGenericTemplateImageAspectRatio.Horizontal
        });
    }

    onShareDialog() {
        Facebook.showShareDialog(this.linkContent, (error, result) => {
            if (error) {
                console.error(error);
                return;
            }
            alert('Successfully shared');
        });
    }

    onShareDialogPhotos() {
        Facebook.showShareDialog(this.photosContent);
    }

    onSendDialog() {
        Facebook.showMessageDialog(this.linkContent);
    }

    onSendGenericDialog() {
        Facebook.showMessageDialog(this.genericContent);
    }

    logEvent() {
        this.eventCounter++;
        Facebook.logEvent('Login', [{
            key: 'counter',
            value: this.eventCounter.toString()
        }]);
    }
}
