import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import VueMeta from 'vue-meta'
import Vuesax from 'vuesax'


import 'vuesax/dist/vuesax.css' //Vuesax styles
Vue.use(Vuesax, {
  // options here
})




// axios.defaults.baseURL = 'https://www.agropark.com.ng/'
// axios.defaults.headers.get['Accepts'] = 'application/json'
// axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded'


// axios.interceptors.request.use(config => {
//   console.log(config, 'conf');
//   return config;
// })

// axios.interceptors.response.use(res => {
//   console.log(res, 'res');
//   return res;
// })







Vue.use(VueMeta)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
