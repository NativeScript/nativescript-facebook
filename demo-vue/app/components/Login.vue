<template>
    <Page class="page">
        <ActionBar class="action-bar">
            <Label class="action-bar-title" text="Facebook Demo Vue App"></Label>
        </ActionBar>

          <StackLayout class="login-buttons">
            <FacebookLoginButton @login="onLogin"></FacebookLoginButton>
            <Button @tap="login" text="Continue with Facebook (Custom)"></Button>
            <Button @tap="getAccessToken" text="Get current access token"></Button>

            <FacebookShareButton :content="linkContent"></FacebookShareButton>
            <FacebookSendButton :content="genericContent"></FacebookSendButton>
            <Button @tap="onShareDialog" text="Open Share dialog (link)" :visibility="canShowLinksShareDialog ? 'visible' : 'collapsed'" ></Button>
            <Button @tap="onShareDialogPhotos" text="Open Share dialog (photos)" :visibility="canShowPhotosShareDialog ? 'visible' : 'collapsed'"></Button>
            <Button @tap="onSendDialog" text="Share Message (link)" :visibility="canShowLinksMessageDialog ? 'visible' : 'collapsed'"></Button>
            <Button @tap="onSendGenericDialog" text="Share Message (generic)" :visibility="canShowGenericMessageDialog ? 'visible' : 'collapsed'"></Button>
            <Button @tap="logEventAction" text="Log event"></Button>
        </StackLayout>
    </Page>
</template>

<script>

    import { FacebookLoginButton } from 'nativescript-facebook/vue';
    import { fromResource } from 'tns-core-modules/image-source';
    import Home from "./Home";
    import {
        login as fbLogin,
        getCurrentAccessToken,
        createShareLinksContent,
        createSharePhotosContent,
        createShareMessageGenericTemplateContent,
        MessageGenericTemplateImageAspectRatio,
        showShareDialog,
        showMessageDialog,
        canShareDialogShow,
        canMessageDialogShow,
        logEvent
    } from 'nativescript-facebook';
    let appSettings = require('tns-core-modules/application-settings');

    export default {
        created() {
            // have to init after facebook sdk inited
            setTimeout(() => {
                this.init();
            }, 100);
		},
        data() {
            return {
                linkContent: null,
                photosContent: null,
                genericContent: null,
                canShowLinksShareDialog: false,
                canShowPhotosShareDialog: false,
                canShowLinksMessageDialog: false,
                canShowGenericMessageDialog: false,
                eventCounter: 0
            }
        },
        methods: {
            init: function() {
                this.linkContent = this.generateLinksShareContent();
                this.photosContent = this.generatePhotosShareContent();
                this.genericContent = this.generateGenericTemplateContent();
                this.canShowLinksShareDialog = canShareDialogShow(this.linkContent);
                this.canShowPhotosShareDialog = canShareDialogShow(this.photosContent);
                this.canShowLinksMessageDialog = canMessageDialogShow(this.linkContent);
                this.canShowGenericMessageDialog = canMessageDialogShow(this.genericContent);
            },
            onLogin: function(eventData) {
                if (eventData.error) {
                    alert('Error during login: ' + eventData.error.message);
                } else {
                    appSettings.setString('access_token', eventData.loginResponse.token);
                    this.$navigateTo(Home, { clearHistory: true });
                }
            },
            login: function() {
                fbLogin((err, fbData) => {
                    if (err) {
                        alert('Error during login: ' + err.message);
                    } else {
                        appSettings.setString('access_token', fbData.token);
                        this.$navigateTo(Home, { clearHistory: true });
                    }
                });
            },
            getAccessToken() {
                let accessToken = getCurrentAccessToken();

                alert('Current access token: ' + JSON.stringify(accessToken, null, '\t'));
            },
            generateLinksShareContent: function() {
                return createShareLinksContent('https://www.nativescript.org',
                    'Create Native iOS and Android Apps With JavaScript',
                    {
                        hashtag: '#Nativescript'
                    });
            },
            generatePhotosShareContent: function() {
                 let logoImage = fromResource('logo');
                 return createSharePhotosContent([logoImage], false, {
                     hashtag: '#Nativescript'
                 });
            },
            generateGenericTemplateContent: function() {
                return createShareMessageGenericTemplateContent({
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
                    imageAspectRatio: MessageGenericTemplateImageAspectRatio.Horizontal
                });
            },
            onShareDialog: function() {
                showShareDialog(this.linkContent, (error, result) => {
                  if (error) {
                    console.error(error);
                    return;
                  }
                  alert('Successfully shared');
                });
            },
            onShareDialogPhotos: function() {
                showShareDialog(this.photosContent);
            },
            onSendDialog: function() {
                showMessageDialog(this.linkContent);
            },
            onSendGenericDialog: function() {
                showMessageDialog(this.genericContent);
            },
            logEventAction() {
                this.eventCounter++;
                logEvent('Login', [{
                    key: 'counter',
                    value: this.eventCounter.toString()
                }]);
            }
        }
    };
</script>

<style scoped lang="scss">
    @import '~nativescript-theme-core/css/core.light.css';
    .login-buttons {
        margin: 30;
    }

    .label {
        font-size: 10;
        font-weight: bold;
        padding-top: 10;
    }
</style>
