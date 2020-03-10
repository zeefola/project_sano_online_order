import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import VueMeta from 'vue-meta'
// import $ from 'jquery'




Vue.use(VueMeta)

Vue.config.productionTip = false;
Vue.config.ignoredElements = ['rs-module-wrap','rs-module','rs-slides','rs-slide','rs-layer']

// window.$ = window.jQuery = require('jquery');

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
