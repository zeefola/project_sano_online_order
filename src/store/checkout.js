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
        let total_cost = getters.getCartWithShippingTotal;

        return { orders: cart, total_cost: total_cost, ...customer_details, ...shipping_details}

        

    }

}
const mutations = { 

    
}
const actions = {

    


    async place_order({commit, getters}, payload){
        let value = { ...payload, ...getters.getFormData};

        try {
            var response = await axios
            .post(
                "https://www.agropark.com.ng/api/v1/section/sano_customer_order_placement",value
            );
           
            return await response;
        }catch(error){
            return await error.response;
        } 
  
    },


    





}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}






