<template>
    <Page class="page">
          <StackLayout class="home">
            <Image :src="avatarUrl" class="avatar"/>
            <StackLayout class="info">
                <Label text="ID:" class="label"></Label>
                <Label :text="userId"></Label>
                <Label text="NAME:" class="label"></Label>
                <Label :text="username"></Label>
            </StackLayout>
            <StackLayout class="buttons">
            <FacebookLoginButton @logout="onLogout"></FacebookLoginButton>
            <Button @tap="logout" text="Log out (Custom)"></Button>
            <Button @tap="getAccessToken" text="Get current access token"></Button>
            <Button @tap="logEventAction" text="Log event"></Button>
            </StackLayout>
        </StackLayout>
    </Page>
</template>

<script>
    import { logout as fbLogout, getCurrentAccessToken, logEvent } from "nativescript-facebook";
    import Login from "./Login";
    let appSettings = require("tns-core-modules/application-settings");
    let http = require("tns-core-modules/http");
    let FACEBOOK_GRAPH_API_URL = "https://graph.facebook.com/v2.9";

    export default {
        created() {
            // Get logged in user's info
            http.getJSON(FACEBOOK_GRAPH_API_URL + "/me?access_token=" + this.accessToken).then((res) => {
                this.username = res.name;
                this.userId = res.id;

                // Get logged in user's avatar
                // ref: https://github.com/NativeScript/NativeScript/issues/2176
                console.log(FACEBOOK_GRAPH_API_URL + "/" + this.userId + "/picture?type=large&redirect=false&access_token=" + this.accessToken);
                http.getJSON(FACEBOOK_GRAPH_API_URL + "/" + this.userId + "/picture?type=large&redirect=false&access_token=" + this.accessToken).then((res) => {
                    this.avatarUrl = res.data.url;
                }, function (err) {
                    alert("Error getting user info: " + err);
                });
            }, function (err) {
                alert("Error getting user info: " + err);
            });
		},
        data() {
            return {
                userId: null,
                accessToken: appSettings.getString("access_token"),
                avatarUrl: null,
                eventCounter: 0
            }
        },
        methods: {
            onLogout: function() {
                appSettings.clear();
                this.$navigateTo(Login, { clearHistory: true });
            },
            logout() {
                fbLogout(() => {
                appSettings.clear();
                this.$navigateTo(Login, { clearHistory: true });
                });
            },
            getAccessToken: function() {
                let accessToken = getCurrentAccessToken();
                alert("Current access token: " + JSON.stringify(accessToken, null, '\t'));
            },
            logEventAction() {
                this.counter++;
                logEvent('Home', [{
                    key: 'counter',
                    value: this.eventCounter.toString()
                }]);
            }
        }
    };
</script>

<style scoped lang="scss">
    @import '~nativescript-theme-core/css/core.light.css';
    .label {
        font-size: 10;
        font-weight: bold;
        padding-top: 10;
    }

    .home {
        margin: 30;
        margin-right: 30;
        margin-top: 10%;
    }

    .home .buttons {
        margin-top: 15%;
        margin-bottom: 10%;    
    }

    .home .info {
        margin-top: 20;
        horizontal-align: center;
    }

    .avatar {
        border-radius: 100;
        width: 150;
        height: auto;
    }
</style>
