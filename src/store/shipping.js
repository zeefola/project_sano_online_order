import axios from 'axios'

const state = {
    shipping_rate: [
        {
            id: '1',
            state: 'lagos',
            zone: 'Agbado/Oke-odo',
            cost: '1000',
            
        },
        {
            id: '2',
            state: 'lagos',
            zone: 'Agboyi/Ketu',
            cost: '1000',
            
        },

        {
            id: '3',
            state: 'oyo',
            zone: 'ibadan-1',
            cost: '700',
            category : ' ',
        },

        {
            id: '4',
            state: 'lagos',
            zone: 'Agege',
            cost: '1000',
            category : ' ',
        },
        {
            id: '5',
            state: 'lagos',
            zone: 'Ajeromi',
            cost: '1500',
            category : ' ',
        },
        {
            id: '6',
            state: 'lagos',
            zone: 'Alimosho',
            cost: '1500',
            category : ' ',
        },
        {
            id: '7',
            state: 'lagos',
            zone: 'Apapa',
            cost: '1500',
            category : ' ',
        },
        {
            id: '8',
            state: 'lagos',
            zone: 'Apapa-Iganmu',
            cost: '1500',
            category : ' ',
        },
        {
            id: '9',
            state: 'lagos',
            zone: 'Ayobo/Ipaja',
            cost: '1500',
            category : ' ',
        },
        {
            id: '10',
            state: 'lagos',
            zone: 'Badagry West',
            cost: '2500',
            category : ' ',
        },
        {
            id: '11',
            state: 'lagos',
            zone: 'Badagry',
            cost: '2500',
            category : ' ',
        },
        {
            id: '12',
            state: 'lagos',
            zone: 'Bariga',
            cost: '1000',
            category : ' ',
        },
        {
            id: '13',
            state: 'lagos',
            zone: 'Coker Aguda',
            cost: '1000',
            category : ' ',
        },
        {
            id: '14',
            state: 'lagos',
            zone: 'Egbe Idimu',
            cost: '1500',
            category : ' ',
        },
        {
            id: '15',
            state: 'lagos',
            zone: 'Ejigbo',
            cost: '1500',
            category : ' ',
        },
        {
            id: '16',
            state: 'lagos',
            zone: 'Epe',
            cost: '2000',
            category : ' ',
        },
        {
            id: '17',
            state: 'lagos',
            zone: 'Eredo',
            cost: '2000',
            category : ' ',
        },
        {
            id: '18',
            state: 'lagos',
            zone: 'Eti Osa East',
            cost: '1500',
            category : ' ',
        },
        {
            id: '19',
            state: 'lagos',
            zone: 'Eti Osa West',
            cost: '1500',
            category : ' ',
        },
        {
            id: '20',
            state: 'lagos',
            zone: 'Iba',
            cost: '1500',
            category : ' ',
        },
        {
            id: '21',
            state: 'lagos',
            zone: 'Isolo',
            cost: '1000',
            category : ' ',
        },
        {
            id: '22',
            state: 'lagos',
            zone: 'Imota',
            cost: '2000',
            category : ' ',
        },
        {
            id: '23',
            state: 'lagos',
            zone: 'Ikoyi',
            cost: '1500',
            category : ' ',
        },
        {
            id: '24',
            state: 'lagos',
            zone: 'Ibeju',
            cost: '2000',
            category : ' ',
        },
        {
            id: '25',
            state: 'lagos',
            zone: 'Ifako-Ijaiye',
            cost: '1000',
            category : ' ',
        },
        {
            id: '26',
            state: 'lagos',
            zone: 'Ifelodun',
            cost: '1500',
            category : ' ',
        },
        {
            id: '27',
            state: 'lagos',
            zone: 'Igando/Ikotun',
            cost: '1500',
            category : ' ',
        },
        {
            id: '28',
            state: 'lagos',
            zone: 'Igbogbo/Bayeku',
            cost: '1500',
            category : ' ',
        },
        {
            id: '29',
            state: 'lagos',
            zone: 'Ikeja',
            cost: '1000',
            category : ' ',
        },
        {
            id: '30',
            state: 'lagos',
            zone: 'Ijede',
            cost: '1500',
            category : ' ',
        },
        {
            id: '31',
            state: 'lagos',
            zone: 'Ikorodu North',
            cost: '1500',
            category : ' ',
        },
        {
            id: '32',
            state: 'lagos',
            zone: 'Ikorodu West',
            cost: '1500',
            category : ' ',
        },
        {
            id: '33',
            state: 'lagos',
            zone: 'Ikosi Ejinrin',
            cost: '1500',
            category : ' ',
        },
        {
            id: '34',
            state: 'lagos',
            zone: 'Ikorodu',
            cost: '1500',
            category : ' ',
        },
        {
            id: '35',
            state: 'lagos',
            zone: 'Iru/Victoria Island',
            cost: '1500',
            category : ' ',
        },
        {
            id: '36',
            state: 'lagos',
            zone: 'Itire Ikate',
            cost: '1500',
            category : ' ',
        },
        {
            id: '37',
            state: 'lagos',
            zone: 'Lagos Island West',
            cost: '1500',
            category : ' ',
        },
        {
            id: '38',
            state: 'lagos',
            zone: 'Lagos Island East',
            cost: '1500',
            category : ' ',
        },
        {
            id: '39',
            state: 'lagos',
            zone: 'Lekki',
            cost: '1500',
            category : ' ',
        },
        {
            id: '40',
            state: 'lagos',
            zone: 'Mushin',
            cost: '1000',
            category : ' ',
        },
        {
            id: '41',
            state: 'lagos',
            zone: 'Olowo/Ojuwoye',
            cost: '1000',
            category : ' ',
        },
        {
            id: '42',
            state: 'lagos',
            zone: 'Ojo',
            cost: '1500',
            category : ' ',
        },
        {
            id: '43',
            state: 'lagos',
            zone: 'Ojodu',
            cost: '1000',
            category : ' ',
        },
        {
            id: '44',
            state: 'lagos',
            zone: 'Ojokoro',
            cost: '1000',
            category : ' ',
        },
        {
            id: '45',
            state: 'lagos',
            zone: 'Onigbongbo/Maryland',
            cost: '1000',
            category : ' ',
        },
        {
            id: '46',
            state: 'lagos',
            zone: 'Orile Agege',
            cost: '1000',
            category : ' ',
        },
        {
            id: '47',
            state: 'lagos',
            zone: 'Oshodi',
            cost: '1000',
            category : ' ',
        },
        {
            id: '48',
            state: 'lagos',
            zone: 'Shomolu',
            cost: '1000',
            category : ' ',
        },
        {
            id: '49',
            state: 'lagos',
            zone: 'Surulere',
            cost: '1000',
            category : ' ',
        },
        {
            id: '50',
            state: 'lagos',
            zone: 'Yaba',
            cost: '1000',
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






