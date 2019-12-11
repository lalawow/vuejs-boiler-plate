import Vue from "vue";
import Vuex from "vuex";
// import getters from "./getters";
// import app from "./modules/app";
// import settings from "./modules/settings";
import user from "./modules/user";
import common from "./modules/common"
import home from "./modules/home"
import policy from "./modules/policy"
import transfer from "./modules/transfer"
import collaborations from "./modules/collaborations/index"
import mix from "./modules/mix"
import aboutus from "./modules/aboutus"
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    // app,
    // settings,
    user,
    common,
    home,
    policy,
    transfer,
    collaborations,
    mix,
    aboutus
  },
  // getters
});

export default store;