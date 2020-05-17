import axios from 'axios'

const state = {
    shipping_rate: [
        {
            id: '1',
            state: 'lagos',
            zone: 'Agbado/Oke-odo',
            zone_tags: ['Agbado','Oke','Odo','Oke-Odo'],
            cost: '1000',
            
        },
        {
            id: '2',
            state: 'lagos',
            zone: 'Agboyi/Ketu',
            zone_tags: ['Agboyi','ketu'],
            cost: '1000',
            
        },

        // {
        //     id: '3',
        //     state: 'oyo',
        //     zone: 'Bodija',
        //     cost: '500',
        //     zone_tags: ['bodija'],
        //     category : ' ',
        // },

        {
            id: '4',
            state: 'lagos',
            zone: 'Agege',
            cost: '1000',
            zone_tags: ['agege'],
            category : ' ',
        },
        {
            id: '5',
            state: 'lagos',
            zone: 'Ajeromi',
            cost: '1500',
            zone_tags: ['ajeromi'],
            category : ' ',
        },
        {
            id: '6',
            state: 'lagos',
            zone: 'Alimosho',
            cost: '1500',
            zone_tags: ['alimosho'],
            category : ' ',
        },
        {
            id: '7',
            state: 'lagos',
            zone: 'Apapa',
            cost: '1500',
            zone_tags: ['apapa'],
            category : ' ',
        },
        {
            id: '8',
            state: 'lagos',
            zone: 'Apapa-Iganmu',
            cost: '1500',
            zone_tags: ['apapa','iganmu'],
            category : ' ',
        },
        {
            id: '9',
            state: 'lagos',
            zone: 'Ayobo/Ipaja',
            cost: '1500',
            zone_tags: ['ayobo','ipaja'],
            category : ' ',
        },
        // {
        //     id: '10',
        //     state: 'lagos',
        //     zone: 'Badagry West',
        //     cost: '2500',
        //     category : ' ',
        // },
        // {
        //     id: '11',
        //     state: 'lagos',
        //     zone: 'Badagry',
        //     cost: '2500',
        //     category : ' ',
        // },
        {
            id: '12',
            state: 'lagos',
            zone: 'Bariga',
            cost: '1000',
            zone_tags: ['bariga'],
            category : ' ',
        },
        {
            id: '13',
            state: 'lagos',
            zone: 'Coker Aguda',
            cost: '1000',
            zone_tags: ['coker','aguda'],
            category : ' ',
        },
        {
            id: '14',
            state: 'lagos',
            zone: 'Egbe Idimu',
            cost: '1500',
            zone_tags:['egbe','idimu'],
            category : ' ',
        },
        {
            id: '15',
            state: 'lagos',
            zone: 'Ejigbo',
            cost: '1500',
            zone_tags:['ejigbo'],
            category : ' ',
        },
        // {
        //     id: '16',
        //     state: 'lagos',
        //     zone: 'Epe',
        //     cost: '2000',
        //     category : ' ',
        // },
        // {
        //     id: '17',
        //     state: 'lagos',
        //     zone: 'Eredo',
        //     cost: '2000',
        //     category : ' ',
        // },
        {
            id: '18',
            state: 'lagos',
            zone: 'Eti Osa East',
            cost: '1500',
            zone_tags:['eti','osa','east'],
            category : ' ',
        },
        {
            id: '19',
            state: 'lagos',
            zone: 'Eti Osa West',
            cost: '1500',
            zone_tags:['eti osa','eti','osa','west'],
            category : ' ',
        },
        {
            id: '20',
            state: 'lagos',
            zone: 'Iba',
            cost: '1500',
            zone_tags:['iba'],
            category : ' ',
        },
        {
            id: '21',
            state: 'lagos',
            zone: 'Isolo',
            cost: '1000',
            zone_tags: ['isolo'],
            category : ' ',
        },
        // {
        //     id: '22',
        //     state: 'lagos',
        //     zone: 'Imota',
        //     cost: '2000',
        //     category : ' ',
        // },
        {
            id: '23',
            state: 'lagos',
            zone: 'Ikoyi',
            cost: '1500',
            zone_tags: ['ikoyi'],
            category : ' ',
        },
        {
            id: '24',
            state: 'lagos',
            zone: 'Ibeju',
            cost: '2000',
            zone_tags: ['ibeju'],
            category : ' ',
        },
        {
            id: '25',
            state: 'lagos',
            zone: 'Ifako-Ijaiye',
            cost: '1000',
            zone_tags: ['ifako', 'ijaiye', 'ifako-ijaiye'],
            category : ' ',
        },
        // {
        //     id: '26',
        //     state: 'lagos',
        //     zone: 'Ifelodun',
        //     cost: '1500',
        //     category : ' ',
        // },
        {
            id: '27',
            state: 'lagos',
            zone: 'Igando/Ikotun',
            cost: '1500',
            zone_tags: ['igando', 'ikotun'],
            category : ' ',
        },
        {
            id: '28',
            state: 'lagos',
            zone: 'Igbogbo/Bayeku',
            cost: '1500',
            zone_tags: ['igbogbo' , 'bayeku'],
            category : ' ',
        },
        {
            id: '29',
            state: 'lagos',
            zone: 'Ikeja',
            cost: '1000',
            zone_tags: ['ikeja'],
            category : ' ',
        },
        // {
        //     id: '30',
        //     state: 'lagos',
        //     zone: 'Ijede',
        //     cost: '1500',
        //     category : ' ',
        // },
        {
            id: '31',
            state: 'lagos',
            zone: 'Ikorodu North',
            cost: '1500',
            zone_tags: ['ikorodu','north'],
            category : ' ',
        },
        {
            id: '32',
            state: 'lagos',
            zone: 'Ikorodu West',
            cost: '1500',
            zone_tags: ['ikorodu','west'],
            category : ' ',
        },
        // {
        //     id: '33',
        //     state: 'lagos',
        //     zone: 'Ikosi Ejinrin',
        //     cost: '1500',
        //     category : ' ',
        // },
        {
            id: '34',
            state: 'lagos',
            zone: 'Ikorodu',
            cost: '1500',
            zone_tags: ['ikorodu'],
            category : ' ',
        },
        {
            id: '35',
            state: 'lagos',
            zone: 'Iru/Victoria Island',
            cost: '1500',
            zone_tags: ['iru', 'victoria','island'],
            category : ' ',
        },
        {
            id: '36',
            state: 'lagos',
            zone: 'Itire Ikate',
            cost: '1500',
            zone_tags: ['itire','ikate'],
            category : ' ',
        },
        {
            id: '37',
            state: 'lagos',
            zone: 'Lagos Island West',
            cost: '1500',
            zone_tags: ['victoria island west','victoria','island'],
            category : ' ',
        },
        {
            id: '38',
            state: 'lagos',
            zone: 'Lagos Island East',
            cost: '1500',
            zone_tags: ['victoria island east','victoria','island'],
            category : ' ',
        },
        {
            id: '39',
            state: 'lagos',
            zone: 'Lekki',
            cost: '1500',
            zone_tags: ['lekki'],
            category : ' ',
        },
        {
            id: '40',
            state: 'lagos',
            zone: 'Mushin',
            cost: '1000',
            zone_tags: ['mushin'],
            category : ' ',
        },
        {
            id: '41',
            state: 'lagos',
            zone: 'Olowo/Ojuwoye',
            cost: '1000',
            zone_tags: ['olowo', 'ojuwoye'],
            category : ' ',
        },
        {
            id: '42',
            state: 'lagos',
            zone: 'Ojo',
            cost: '1500',
            zone_tags: ['ojo'],
            category : ' ',
        },
        {
            id: '43',
            state: 'lagos',
            zone: 'Ojodu',
            cost: '1000',
            zone_tags: ['ojodu'],
            category : ' ',
        },
        {
            id: '44',
            state: 'lagos',
            zone: 'Ojokoro',
            cost: '1000',
            zone_tags: ['ojokoro'],
            category : ' ',
        },
        {
            id: '45',
            state: 'lagos',
            zone: 'Onigbongbo/Maryland',
            cost: '1000',
            zone_tags: ['onigbongbo', 'maryland'],
            category : ' ',
        },
        {
            id: '46',
            state: 'lagos',
            zone: 'Orile Agege',
            cost: '1000',
            zone_tags: ['orile','agege'],
            category : ' ',
        },
        {
            id: '47',
            state: 'lagos',
            zone: 'Oshodi',
            cost: '1000',
            zone_tags: ['oshodi'],
            category : ' ',
        },
        {
            id: '48',
            state: 'lagos',
            zone: 'Shomolu',
            cost: '1000',
            zone_tags: ['shomolu'],
            category : ' ',
        },
        {
            id: '49',
            state: 'lagos',
            zone: 'Surulere',
            cost: '1000',
            zone_tags: ['surulere'],
            category : ' ',
        },
        {
            id: '50',
            state: 'lagos',
            zone: 'Yaba',
            cost: '1000',
            zone_tags: ['yaba'],
            category : ' ',
        },
        {
            id: '51',
            state: 'oyo',
            zone: 'Bodija',
            cost: '500',
            zone_tags: ['bodija'],
            category : ' ',
        },
        {
            id: '52',
            state: 'oyo',
            zone: 'Ojoo',
            cost: '700',
            zone_tags: ['ojoo'],
            category : ' ',
        },
        {
            id: '53',
            state: 'oyo',
            zone: 'UI',
            cost: '600',
            zone_tags: ['ui'],
            category : ' ',
        },
        {
            id: '54',
            state: 'oyo',
            zone: 'Mokola',
            cost: '600',
            zone_tags: ['mokola'],
            category : ' ',
        },
        {
            id: '55',
            state: 'oyo',
            zone: 'Shoprite',
            cost: '700',
            zone_tags: ['shoprite'],
            category : ' ',
        },
        {
            id: '56',
            state: 'oyo',
            zone: 'Bashorun',
            cost: '600',
            zone_tags: ['bashorun'],
            category : ' ',
        },
        {
            id: '57',
            state: 'oyo',
            zone: 'Challenge',
            cost: '700',
            zone_tags: ['challenge'],
            category : ' ',
        },
        {
            id: '58',
            state: 'oyo',
            zone: 'Iwo-road',
            cost: '800',
            zone_tags: ['iwo-road','iwo'],
            category : ' ',
        },
        {
            id: '59',
            state: 'oyo',
            zone: 'Ajibode',
            cost: '700',
            zone_tags: ['ajibode'],
            category : ' ',
        },
        {
            id: '60',
            state: 'oyo',
            zone: 'Sango',
            cost: '800',
            zone_tags: ['sango'],
            category : ' ',
        },
        {
            id: '61',
            state: 'oyo',
            zone: 'Eleyele',
            cost: '600',
            zone_tags: ['eleyele'],
            category : ' ',
        },
        {
            id: '62',
            state: 'oyo',
            zone: 'Ologuneru',
            cost: '800',
            zone_tags: ['ologuneru'],
            category : ' ',
        },
        {
            id: '63',
            state: 'oyo',
            zone: 'Apata',
            cost: '800',
            zone_tags: ['apata'],
            category : ' ',
        },
        {
            id: '64',
            state: 'oyo',
            zone: 'Oluyole',
            cost: '700',
            zone_tags: ['oluyole'],
            category : ' ',
        },
        {
            id: '65',
            state: 'oyo',
            zone: 'Dugbe',
            cost: '700',
            zone_tags: ['dugbe'],
            category : ' ',
        },
        {
            id: '66',
            state: 'oyo',
            zone: 'Ajibade',
            cost: '500',
            zone_tags: ['ajibade'],
            category : ' ',
        },
        {
            id: '67',
            state: 'oyo',
            zone: 'Akobo',
            cost: '700',
            zone_tags: ['akobo'],
            category : ' ',
        },
        {
            id: '68',
            state: 'oyo',
            zone: 'Aleshinloye',
            cost: '700',
            zone_tags: ['aleshinloye'],
            category : ' ',
        },
        {
            id: '69',
            state: 'oyo',
            zone: 'UCH',
            cost: '700',
            zone_tags: ['uch'],
            category : ' ',
        },
        {
            id: '70',
            state: 'oyo',
            zone: 'Ring-road',
            cost: '800',
            zone_tags: ['ring-road','ring'],
            category : ' ',
        },
        {
            id: '71',
            state: 'oyo',
            zone: 'Elebu',
            cost: '1000',
            zone_tags: ['elebu'],
            category : ' ',
        },
        {
            id: '72',
            state: 'oyo',
            zone: 'Moniya',
            cost: '1000',
            zone_tags:['moniya'],
            category : ' ',
        },
        {
            id: '73',
            state: 'oyo',
            zone: 'Agbaje',
            cost: '1000',
            zone_tags: ['agbaje'],
            category : ' ',
        },
        {
            id: '74',
            state: 'oyo',
            zone: 'Alakia Olosan',
            cost: '1000',
            zone_tags: ['alakia','olosan'],
            category : ' ',
        },
        {
            id: '75',
            state: 'oyo',
            zone: 'Soka',
            cost: '1000',
            zone_tags: ['soka'],
            category : ' ',
        },
        {
            id: '76',
            state: 'oyo',
            zone: 'Olomi',
            cost: '1000',
            zone_tags: ['olomi'],
            category : ' ',
        },
        {
            id: '77',
            state: 'oyo',
            zone: 'Agbowo',
            cost: '500',
            zone_tags: ['agbowo'],
            category : ' ',
        },
        {
            id: '78',
            state: 'oyo',
            zone: 'Ijokodo',
            cost: '600',
            zone_tags: ['ijokodo'],
            category : ' ',
        },
        {
            id: '79',
            state: 'oyo',
            zone: 'Gbagi',
            cost: '800',
            zone_tags: ['gbagi'],
            category : ' ',
        },
        {
            id: '80',
            state: 'oyo',
            zone: 'Tipper garage',
            cost: '1000',
            zone_tags: ['tipper','garage'],
            category : ' ',
        },
        {
            id: '81',
            state: 'ogun',
            zone: 'Rounder',
            cost: '700',
            zone_tags: ['rounder'],
            category : ' ',
        },
        {
            id: '82',
            state: 'ogun',
            zone: 'Lafenwa',
            cost: '700',
            zone_tags: ['lafenwa'],
            category : ' ',
        },
        {
            id: '83',
            state: 'ogun',
            zone: 'Itaoshin',
            cost: '800',
            zone_tags: ['itaoshin'],
            category : ' ',
        },
        {
            id: '84',
            state: 'ogun',
            zone: 'Olomore',
            cost: '800',
            zone_tags: ['olomore'],
            category : ' ',
        },
        {
            id: '85',
            state: 'ogun',
            zone: 'Abiola way',
            cost: '900',
            zone_tags: ['abiola','abiola way','way'],
            category : ' ',
        },
        {
            id: '86',
            state: 'ogun',
            zone: 'Idi-aba',
            cost: '900',
            zone_tags: ['idi-aba'],
            category : ' ',
        },
        {
            id: '87',
            state: 'ogun',
            zone: 'Ibara',
            cost: '900',
            zone_tags: ['ibara'],
            category : ' ',
        },
        {
            id: '88',
            state: 'ogun',
            zone: 'Asero',
            cost: '1000',
            zone_tags: ['asero'],
            category : ' ',
        },
        {
            id: '89',
            state: 'ogun',
            zone: 'Obantoko',
            cost: '1000',
            zone_tags: ['obantoko'],
            category : ' ',
        },
        {
            id: '90',
            state: 'ogun',
            zone: 'Camp',
            cost: '1000',
            zone_tags: ['camp'],
            category : ' ',
        },
        {
            id: '91',
            state: 'ogun',
            zone: 'Elega',
            cost: '900',
            zone_tags: ['elega'],
            category : ' ',
        },
        {
            id: '92',
            state: 'lagos',
            zone: 'Alagbole',
            cost: '1000',
            zone_tags: ['alagbole'],
            category : ' ',
        },
        {
            id: '93',
            state: 'lagos',
            zone: 'Opic',
            cost: '1000',
            zone_tags: ['opic'],
            category : ' ',
        },
        {
            id: '94',
            state: 'lagos',
            zone: 'Akute',
            cost: '1000',
            zone_tags: ['akute'],
            category : ' ',
        },
        {
            id: '95',
            state: 'lagos',
            zone: 'Mile 2/Amuwo Odofin',
            cost: '1000',
            zone_tags: ['mile 2', 'amuwo','odofin'],
            category : ' ',
        },
        {
            id: '96',
            state: 'lagos',
            zone: 'Ebute-Metta',
            cost: '1500',
            zone_tags: ['ebute-metta'],
            category : ' ',
        },
        {
            id: '97',
            state: 'lagos',
            zone: 'Ojota',
            cost: '1000',
            zone_tags: ['ojota'],
            category : ' ',
        },
        {
            id: '98',
            state: 'lagos',
            zone: 'Ogudu',
            cost: '1000',
            zone_tags: ['ogudu'],
            category : ' ',
        },
        {
            id: '99',
            state: 'lagos',
            zone: 'Magodo',
            cost: '1000',
            zone_tags: ['magodo'],
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
        zone_tags: [],
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
        state.shipping_details.zone_tags = data[0].zone_tags;
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






