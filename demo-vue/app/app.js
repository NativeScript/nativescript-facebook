import Vue from "nativescript-vue";
import * as application from 'tns-core-modules/application';
import Login from "./components/Login";

import {
    init,
    initAnalytics,
} from 'nativescript-facebook';

import FacebookPlugin from "nativescript-facebook/vue";
Vue.use(FacebookPlugin);

Vue.config.silent = true;

application.on(application.launchEvent, function (args) {
    init("1771472059772879");    
    initAnalytics();
});

new Vue({
    render: h => h('frame', [h(Login)])
}).$start();

