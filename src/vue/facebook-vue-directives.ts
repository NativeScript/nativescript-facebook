import * as Vue from "nativescript-vue";

Vue.registerElement("FacebookLoginButton", () => require("../").LoginButton);
Vue.registerElement("FacebookShareButton", () => require('../').ShareButton);
Vue.registerElement("FacebookSendButton", () => require('../').SendButton);