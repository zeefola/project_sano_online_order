import axios from 'axios'


const state = {
}
const getters = { 

    getCartWithShippingTotal(state, getters, rootState, rootGetters){
        return parseInt(rootState.cart.cart.reduce(function (acc, obj) { return acc + parseInt(obj.price); }, 0)) + parseInt(rootState.shipping.shipping_details.cost);
    },

    getFormData(state, getters, rootState, rootGetters){
        let data = '';
        let cart = rootState.cart.cart;
        let customer_details = rootState.shipping.customer_details;
        let shipping_details = rootState.shipping.shipping_details;

        return { orders: cart, ...customer_details, ...shipping_details}

        

    }

}
const mutations = { 
   
}
const actions = {





}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}






