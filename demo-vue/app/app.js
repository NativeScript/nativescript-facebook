import Vue from "nativescript-vue";
import * as application from 'tns-core-modules/application';
import Login from "./components/Login";

import {
    init,
    initAnalytics,
    LoginBehavior
} from 'nativescript-facebook';

Vue.config.silent = true;

application.on(application.launchEvent, function (args) {
    init("1771472059772879", LoginBehavior.LoginBehaviorWeb);
    initAnalytics();
});

new Vue({
    render: h => h('frame', [h(Login)])
}).$start();

