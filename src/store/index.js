import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import shop from "./shop"
import category from "./category"
import cart from "./cart"
import checkout from "./checkout"
import shipping from "./shipping"
import config from "./config"



Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {},
  getters: {},
  
  mutations: {},
  actions: {},
  modules: {
    shop,
    category,
    cart,
    checkout,
    shipping,
    config
  }
});
