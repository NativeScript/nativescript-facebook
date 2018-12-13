import {Observable} from 'tns-core-modules/data/observable';
import {ImageSource, fromResource} from 'tns-core-modules/image-source';
import {
    LoginEventData,
    login as fbLogin,
    getCurrentAccessToken,
    createLinksShareContent,
    createPhotosShareContent,
    showShareDialog,
    showMessageDialog,
    canShareDialogShow,
    canMessageDialogShow
} from 'nativescript-facebook';

let frameModule = require('tns-core-modules/ui/frame');
let appSettings = require('tns-core-modules/application-settings');

export class LoginViewModel extends Observable {
    public linkContent = this.generateLinksShareContent();
    public photosContent = this.generatePhotosShareContent();
    public canShowLinksShareDialog = canShareDialogShow(this.linkContent);
    public canShowPhotosShareDialog = canShareDialogShow(this.photosContent);
    public canShowLinksMessageDialog = canMessageDialogShow(this.linkContent);


    private _navigate(path: string) {
        let topmost = frameModule.topmost();
        topmost.navigate({
            moduleName: path,
            clearHistory: true
        });
    }

    public onLogin(eventData: LoginEventData) {
        if (eventData.error) {
            alert('Error during login: ' + eventData.error.message);
        } else {
            appSettings.setString('access_token', eventData.loginResponse.token);
            this._navigate('home-page');
        }
    }

    public login() {
        fbLogin((err, fbData) => {
            if (err) {
                alert('Error during login: ' + err.message);
            } else {
                appSettings.setString('access_token', fbData.token);
                this._navigate('home-page');
            }
        });
    }

    public getCurrentAccessToken() {
        let accessToken = getCurrentAccessToken();

        alert('Current access token: ' + JSON.stringify(accessToken, null, '\t'));
    }

    public generateLinksShareContent() {
        return createLinksShareContent('https://www.nativescript.org',
            'Create Native iOS and Android Apps With JavaScript',
            {
                hashtag: '#Nativescript'
            })
    }

    public generatePhotosShareContent() {
        const logoImage = fromResource('logo');
        return createPhotosShareContent([logoImage], false, {
            hashtag: '#Nativescript'
        });
    }

    public onShareDialog() {
        showShareDialog(this.linkContent);
    }

    public onShareDialogPhotos() {
        showShareDialog(this.photosContent);
    }

    public onSendDialog() {
        showMessageDialog(this.linkContent);
    }
}
