import axios from 'axios'


const state = {
    shipping: {
        id: '2',
        state: 'lagos',
        zone: 'island',
        cost: '1500', 
    },
}
const getters = { 

    getCartWithShippingTotal(state, getters, rootState, rootGetters){
        return parseInt(rootState.cart.cart.reduce(function (acc, obj) { return acc + parseInt(obj.price); }, 0)) + parseInt(state.shipping.cost);
    },

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






