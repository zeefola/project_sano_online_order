import axios from 'axios'


const state = {
    cart: [],
    payment_instruction: [],


}
const getters = { 

    getCartWithShippingTotal(state, getters, rootState, rootGetters){
        return parseInt(rootState.cart.cart_backup.reduce(function (acc, obj) { return acc + parseInt(obj.price); }, 0)) + parseInt(rootState.shipping.shipping_details.cost);
    },

   
}
const mutations = { 

    UPDATE_PAYMENT_INSTRUCTION(state, payload){
        state.payment_instruction = payload;

        console.log(state.payment_instruction,' Payment ')
    }

    
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






