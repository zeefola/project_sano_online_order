import axios from 'axios'

const state = {
    shipping_rate: [
        {
            id: '1',
            state: 'lagos',
            zone: 'mainland',
            cost: '1000',
            
        },
        {
            id: '2',
            state: 'lagos',
            zone: 'island',
            cost: '1500',
            
        },

        {
            id: '3',
            state: 'oyo',
            zone: 'ibadan-1',
            cost: '700',
            category : ' ',
        },

        {
            id: '2',
            state: 'lagos',
            zone: 'island',
            cost: '1500',
            category : ' ',
        },
        
    ],
    customer_details: {
        fullname: '',
        email: '',
        telephone: '',       
        address: '',
        state: '',
        city: '',
    },

    shipping_details: {
        zone: '',
        cost: 0,
    }
   
}
const getters = { 
    getZonesFromShippingRateUsingState: (state) => (selectedState) =>{
        let data = [];
        let obj = state.shipping_rate;

        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                if(obj[key].state == selectedState){
                    data.push(obj[key].zone);
                }
                
            }
        }
        

        return Array.from(new Set(data));


    },

    getStatesFromShippingRate(state){
        let data = [];
        let obj = state.shipping_rate;

        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                    data.push(obj[key].state);
                
            }
        }
        

        return Array.from(new Set(data));


    }
}
const mutations = {
    UPDATE_FULLNAME(state, value){
        state.customer_details.fullname = value;
    },

    UPDATE_EMAIL(state,value){
        state.customer_details.email = value;
    },

    UPDATE_TELEPHONE(state,value){
        state.customer_details.telephone = value;
    },

    UPDATE_ADDRESS(state,value){
        state.customer_details.address = value;
    },

    UPDATE_STATE(state,value){
        state.customer_details.state = value;
    },

    UPDATE_CITY(state,value){
        state.customer_details.city = value;
    },

    UPDATE_ZONE(state,value){
        state.shipping_details.zone = value;
    },

    UPDATE_COST(state,value){
        state.shipping_details.cost = value;
    },

    UPDATE_SHIPPING_DETAILS(state,zone){
        let data = state.shipping_rate.filter(rate => rate.zone === zone);
        state.shipping_details.cost = data[0].cost;
        state.shipping_details.zone = zone;
       
    }
 }
const actions = {}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}






