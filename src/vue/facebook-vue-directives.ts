const FacebookPlugin = {
    install(Vue, options) {
        Vue.registerElement("FacebookLoginButton", () => require("../").LoginButton);
        Vue.registerElement("FacebookShareButton", () => require('../').ShareButton);
        Vue.registerElement("FacebookSendButton", () => require('../').SendButton);
    }
};

export default FacebookPlugin;