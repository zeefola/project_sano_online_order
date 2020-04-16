import Vue from "vue";
import Vuex from "vuex";
import shop from "./shop"
import cart from "./cart"
import checkout from "./checkout"
import shipping from "./shipping"


Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  
  mutations: {},
  actions: {
  //   incrementAsync ({ commit }) {
  //     setTimeout(() => {
  //         commit('increment')
  //     }, 1000)
  //  }
  },
  modules: {
    shop,
    cart,
    checkout,
    shipping,
  }
});
