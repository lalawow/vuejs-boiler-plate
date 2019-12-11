import Vue from "vue";
import "normalize.css/normalize.css"; // A modern alternative to CSS resets

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import locale from "element-ui/lib/locale/lang/en"; // lang i18n

import "@/styles/index.scss"; // global css

import App from "./App";
import store from "./store";
import router from "./router";

import "@/icons"; // icon
// import "@/permission"; // permission control

import VueCarousel from '@chenfengyuan/vue-carousel';

Vue.component('carousel', VueCarousel);
/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online! ! !
 */
// import { mockXHR } from "../mock";
// if (process.env.NODE_ENV === "production") {
//   mockXHR();
// }

import request from "@/utils/request";
import { setDomain, setAxiosInstance } from "@/utils/api";
setDomain("");
setAxiosInstance(request);

// set ElementUI lang to EN
Vue.use(ElementUI, { locale });

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});

store.dispatch('common/getSockets')
store.dispatch('home/getHomepage')
store.dispatch('aboutus/getAboutUs')
store.dispatch('user/setLoggedUser')