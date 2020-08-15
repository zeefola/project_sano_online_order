import axios from 'axios'


const state = {
    products: [
        {
            id: '1',
            name: 'Dressed Chicken',
            price: '1150',
            featured_image: '/img/10.png',
            category : 'fish & meat',
            availability : 'false',
            sub_category : 'fresh',
            description: ' ',
            unit: 'kg',
            unit_rate: ['1.0','1.1'],
            weight: '1' // default


        },
        {
            id: '2',
            name: '4 Parts Cut',
            price: '6000',
            featured_image: '/img/11.png',
            category : 'fish & meat',
            availability : 'true',
            sub_category : 'fresh',
            description: 'Parked in 5kg',
            unit: '',
            unit_rate: [],
            weight: '',

        },
        {
            id: '3',
            name: '8 Parts Cut',
            price: '1200',
            featured_image: '/img/12.png',
            category : 'fish & meat',
            availability : 'false',
            sub_category : 'fresh',
            description: ' ',
            unit: 'kg',
            unit_rate: ['1.0','1.3','1.4'],
            weight: '1' // default

        },
        {
            id: '4',
            name: 'Pork',
            price: '1400',
            featured_image: '/img/13.png',
            category : 'fish & meat',
            availability : 'true',
            sub_category : 'fresh',
            description: ' ',
            unit: '',
            unit_rate: [],
            weight: '',

        },
        {
            id: '5',
            name: 'Chicken Gizzard',
            price: '1350',
            featured_image: '/img/14.png',
            category : 'fish & meat',
            availability : 'false',
            sub_category : 'fresh',
            description: ' ',
            unit: '',
            unit_rate: [],
            weight: '',

        },
        {
            id: '6',
            name: 'Chicken Laps',
            price: '1350',
            featured_image: '/img/lap.png',
            category : 'fish & meat',
            availability : 'false',
            sub_category : 'fresh',
            description: ' ',
            unit: '',
            unit_rate: [],
            weight: '',

        },
        {
            id: '7',
            name: 'Chicken Breast With Bone',
            price: '1250',
            featured_image: '/img/16.png',
            category : 'fish & meat',
            availability : 'false',
            sub_category : 'fresh',
            description: ' ',
            unit: '',
            unit_rate: [],
            weight: '',

        },
        {
            id: '8',
            name: 'Smoked Fish',
            price: '1000',
            featured_image: '/img/17.png',
            category : 'fish & meat',
            availability : 'false',
            sub_category : 'ready-to-eat',
            description: ' ',
            unit: '',
            unit_rate: [],
            weight: '',

        },
        {
            id: '9',
            name: 'Chicken Wings',
            price: '1250',
            featured_image: '/img/18.png',
            category : 'fish & meat',
            availability : 'false',
            sub_category : 'fresh',
            description: ' ',
            unit: '',
            unit_rate: [],
            weight: '',

        },
        {
            id: '10',
            name: 'Chicken Neck',
            price: '600',
            featured_image: '/img/19.png',
            category : 'fish & meat',
            availability : 'false',
            sub_category : 'fresh',
            description: ' ',
            unit: '',
            unit_rate: [],
            weight: '',

        },
        {
            id: '11',
            name: 'Chicken Back',
            price: '850',
            featured_image: '/img/33.png',
            category : 'fish & meat',
            availability : 'false',
            sub_category : 'fresh',
            description: ' ',
            unit: '',
            unit_rate: [],
            weight: '',

        },
        {
            id: '12',
            name: 'fresh corn',
            price: '200',
            featured_image: '/img/22.png',
            category : 'staples & vegetables',
            availability : 'false',
            description: ' ',
            unit: '',
            unit_rate: [],
            weight: '',
            

        },

        {
            id: '13',
            name: 'Fresh lemongrass',
            price: '200',
            featured_image: '/img/lg.jpg',
            category : 'staples & vegetables',
            availability : 'true',
            description: ' ',
            unit: '',
            unit_rate: [],
            weight: '',

        },
   
        {
            id: '14',
            name: 'Fresh mint leaf',
            price: '200',
            featured_image: '/img/26.png',
            category : 'staples & vegetables',
            availability : 'true',
            description: ' ',
            unit: '',
            unit_rate: [],
            weight: '',

        },

        {
            id: '15',
            name: 'Garri (1kg)',
            price: '400',
            featured_image: '/img/24.png',
            category : 'staples & vegetables',
            availability : 'true',
            description: ' ',
            unit: '',
            unit_rate: [],
            weight: '',

        },
        {
            id: '16',
            name: 'Fresh sweet basil',
            price: '200',
            featured_image: '/img/30.png',
            category : 'staples & vegetables',
            availability : 'true',
            description: ' ',
            unit: '',
            unit_rate: [],
            weight: '',

        },
        {
            id: '17',
            name: 'Fresh scent leaf',
            price: '200',
            featured_image: '/img/25.png',
            category : 'staples & vegetables',
            availability : 'true',
            description: ' ',
            unit: '',
            unit_rate: [],
            weight: '',

        },
        // {
        //     id: '18',
        //     name: 'Thyme',
        //     price: '350',
        //     featured_image: ' ',
        //     category : 'Spices',

        // },
        {
            id: '19',
            name: 'Curry',
            price: '350',
            featured_image: '/img/38.png',
            category : 'spices',
            availability : 'true',
            description: ' ',
            unit: '',
            unit_rate: [],
            weight: '',

        },
        {
            id: '20',
            name: 'Turmeric',
            price: '300',
            featured_image: '/img/35.png',
            category : 'spices',
            availability : 'true',
            description: ' ',
            unit: '',
            unit_rate: [],
            weight: '',

        },
        {
            id: '21',
            name: 'Chilli pepper',
            price: '300',
            featured_image: '/img/32.png',
            category : 'spices',
            availability : 'true',
            description: ' ',
            unit: '',
            unit_rate: [],
            weight: '',

        },
        {
            id: '22',
            name: 'Sweet basil',
            price: '300',
            featured_image: '/img/36.png',
            category : 'spices',
            availability : 'true',
            description: ' ',
            unit: '',
            unit_rate: [],
            weight: '',

        },
        {
            id: '23',
            name: 'Tropical basil',
            price: '300',
            featured_image: '/img/37.png',
            category : 'spices',
            availability : 'true',
            description: ' ',
            unit: '',
            unit_rate: [],
            weight: '',

        },
        {
            id: '24',
            name: 'All soup seasoning',
            price: '350',
            featured_image: '/img/31.png',
            category : 'spices',
            availability : 'true',
            description: ' ',
            unit: '',
            unit_rate: [],
            weight: '',

        },
        {
            id: '25',
            name: 'Chicken seasoning',
            price: '350',
            featured_image: '/img/28.png',
            category : 'spices',
            availability : 'true',
            description: ' ',
            unit: '',
            unit_rate: [],
            weight: '',

        },
        {
            id: '26',
            name: 'Fried rice seasoning',
            price: '350',
            featured_image: '/img/29.png',
            category : 'spices',
            availability : 'true',
            description: ' ',
            unit: '',
            unit_rate: [],
            weight: '',

        },
        {
            id: '27',
            name: 'Jollof rice seasoning',
            price: '350',
            featured_image: '/img/34.png',
            category : 'spices',
            availability : 'true',
            description: ' ',
            unit: '',
            unit_rate: [],
            weight: '',

        },
        {
            id: '28',
            name: 'Pepper soup seasoning',
            price: '350',
            featured_image: '/img/27.png',
            category : 'spices',
            availability : 'true',
            description: ' ',
            unit: '',
            unit_rate: [],
            weight: '',

        },
        {
            id: '29',
            name: 'Hand Sanitizer (40ml)',
            price: '300',
            featured_image: '/img/sm.png',
            category : 'household materials',
            availability : 'true',
            description: ' ',
            unit: '',
            unit_rate: [],
            weight: '',

        },
        {
            id: '30',
            name: 'Hand Sanitizer (250ml)',
            price: '900',
            featured_image: '/img/big.png',
            category : 'household materials',
            availability : 'false',
            description: ' ',
            unit: '',
            unit_rate: [],
            weight: '',

        },
        {
            id: '31',
            name: 'Lemongrass Liquid Soap',
            price: '250',
            featured_image: '/img/liquid.png',
            category : 'household materials',
            availability : 'false',
            description: ' ',
            unit: '',
            unit_rate: [],
            weight: '',

        },
        {
            id: '32',
            name: 'Lemongrass Hand Wash',
            price: '600',
            featured_image: '/img/han.png',
            category : 'household materials',
            availability : 'false',
            description: ' ',
            unit: '',
            unit_rate: [],
            weight: '',

        },
        {
            id: '33',
            name: 'Lemongrass Hydrosol',
            price: '300',
            featured_image: '/img/hydo.png',
            category : 'household materials',
            availability : 'false',
            description: ' ',
            unit: '',
            unit_rate: [],
            weight: '',

        },
        {
            id: '34',
            name: 'Lemongrass Essential Oil',
            price: '1500',
            featured_image: '/img/hh.png',
            category : 'household materials',
            availability : 'true',
            description: ' ',
            unit: '',
            unit_rate: [],
            weight: '',

        },
        {
            id: '35',
            name: 'Picante Chicken',
            price: '2500',
            featured_image: ' ',
            category : 'fish & meat',
            availability : 'true',
            sub_category : 'ready-to-eat',
            description: 'Marinated spiced Chicken. NOTE: 24HRS DELIVERY PERIOD',
            unit: '',
            unit_rate: [],
            weight: '',

        },
        {
            id: '36',
            name: 'Picante Pork',
            price: '2200',
            featured_image: '/img/pork.png',
            category : 'fish & meat',
            availability : 'true',
            sub_category : 'ready-to-eat',
            description: 'Spiced-rubbed grilled pork. NOTE: 24HRS DELIVERY PERIOD',
            unit: '',
            unit_rate: [],
            weight: '',

        },
        {
            id: '37',
            name: 'Picante Gizzard',
            price: '2000',
            featured_image: '/img/giz.png',
            category : 'fish & meat',
            availability : 'false',
            sub_category : 'ready-to-eat',
            description: 'Spiced grilled gizzard. NOTE: 24HRS DELIVERY PERIOD',
            unit: '',
            unit_rate: [],
            weight: '',

        },
        {
            id: '38',
            name: 'Picante Laps',
            price: ' 2500',
            featured_image: '/img/laps.png',
            category : 'fish & meat',
            availability : 'true',
            sub_category : 'ready-to-eat',
            description: 'Chicken laps with spiced cuisine. NOTE: 24HRS DELIVERY PERIOD',
            unit: '',
            unit_rate: [],
            weight: '',

        },
        {
            id: '39',
            name: 'Picante Wings',
            price: ' 2300',
            featured_image: '/img/wings.png',
            category : 'fish & meat',
            sub_category : 'ready-to-eat',
            availability : 'false',
            description: 'Marinated spiced Chicken- wings. NOTE: 24HRS DELIVERY PERIOD',
            unit: '',
            unit_rate: [],
            weight: '',

        },
        {
            id: '40',
            name: 'Picante Rabbit',
            price: '4000',
            featured_image: '/img/rabbit.png',
            category : 'fish & meat',
            availability : 'true',
            sub_category : 'ready-to-eat',
            description: 'Spiced marinated rabbit cuisine. NOTE: 24HRS DELIVERY PERIOD',
            unit: '',
            unit_rate: [],
            weight: '',

        },
        {
            id: '41',
            name: 'Picante Snail',
            price: '4500',
            featured_image: '/img/snaill.png',
            category : 'fish & meat',
            availability : 'false',
            sub_category : 'ready-to-eat',
            description: 'Spiced grilled snails. \n\n NOTE: 24HRS DELIVERY PERIOD',
            unit: '',
            unit_rate: [],
            weight: '',

        },
        {
            id: '42',
            name: 'Rabbit',
            price: '3000 ',
            featured_image: '/img/rab.png',
            category : 'fish & meat',
            availability : 'true',
            sub_category : 'fresh',
            description: ' ',
            unit: '',
            unit_rate: [],
            weight: '',

        },
        {
            id: '43',
            name: 'Snail',
            price: '3500 ',
            featured_image: '/img/sn.png',
            category : 'fish & meat',
            availability : 'true',
            sub_category : 'fresh',
            description: ' ',
            unit: '',
            unit_rate: [],
            weight: '',

        },
        {
            id: '44',
            name: 'Garri (2kg)',
            price: '750',
            featured_image: '/img/gabig.png',
            category : 'staples & vegetables',
            availability : 'true',
            description: ' ',
            unit: '',
            unit_rate: [],
            weight: '',

        },
        {
            id: '45',
            name: 'OFSP Garri (1kg)',
            price: '700',
            featured_image: '/img/ofsp 1.png',
            category : 'staples & vegetables',
            availability : 'true',
            description: ' ',
            unit: '',
            unit_rate: [],
            weight: '',

        },
        {
            id: '46',
            name: 'OFSP Garri (2kg)',
            price: '1200',
            featured_image: '/img/ofsp 2.png',
            category : 'staples & vegetables',
            availability : 'true',
            description: ' ',
            unit: '',
            unit_rate: [],
            weight: '',

        },
        {
            id: '47',
            name: 'Grilled Chicken',
            price: '2500',
            featured_image: '/img/pic.png',
            category : 'fish & meat',
            availability : 'true',
            sub_category : 'ready-to-eat',
            description: 'NOTE: 24HRS DELIVERY PERIOD',
            unit: '',
            unit_rate: [],
            weight: '',

        },

        {
            id: '48',
            name: 'Dressed Turkey',
            price: '1400',
            featured_image: '/img/tuk.jpeg',
            category : 'fish & meat',
            availability : 'true',
            sub_category : 'fresh',
            description: ' ',
            unit: 'kg',
            unit_rate: ['1.0'],
            weight: '1' 

        },
        {
            id: '49',
            name: 'OFSP Bread',
            price: '350',
            featured_image: '/img/bread.jpg',
            category : 'sano bakery',
            availability : 'true',
            description: ' ',
            unit: '',
            unit_rate: [],
            weight: '',

        },
        {
            id: '49',
            name: 'Lemongrass juice with pineapple',
            price: '150',
            featured_image: '/img/pineapple.png',
            category : 'natural drinks',
            availability : 'true',
            description: ' ',
            unit: '',
            unit_rate: [],
            weight: '',

        },


        

    ],
    product_categories: [
        {
            id: '1',
            name: 'Fish & Meat',
            featured_image: '/img/ch.png',
            description: 'Organic animal protein which improves your diet needs and food safety.'
        },

        {
            id: '2',
            name: 'Staples & Vegetables',
            featured_image: '/img/staples.png',
            description: 'A wide offering of essential foods cultivated and processed in the best conditions.',
        },

        {
            id: '3',
            name: 'Spices',
            featured_image: '/img/spices.png',
            description: 'Choose from, or collect our entire offering of spices for your cooking delight.',
        },
        {
            id: '4',
            name: 'Household Materials',
            featured_image: '/img/hus.png',
            description: 'Our selection of household materials is formulated to keep you clean, safe, and healthy.',
        },
        {
            id: '5',
            name: 'SANO Bakery',
            featured_image: '/img/bakery.png',
            description: 'Experience Vitamin in every bite of all Sano Bakery Products.',
        },
        {
            id: '6',
            name: 'Natural Drinks',
            featured_image: '/img/drink_banner_new.png',
            description: 'Enjoy refreshing boost on every sip of Sano Natural Drinks.',
        }
    ],

    items: [],
    categories: [],
}
const getters = { 
    
   

}
const mutations = { 

    FETCH_PRELOADER (state){
        state.items = state.products;
    },

    fetchAllItems(state){
        state.items = state.products;
    },
  
    fetchItemsByCategory(state,category){
        
        state.items = state.products.filter(function(product){
            return  product.category === category
            
        });
    },
  
    fetchItemCategories(state){
        let categories = [];
        let obj = state.products;
        for (var key in obj) {
          if (obj.hasOwnProperty(key)) {
              categories.push(obj[key].category)
          }
        }
        state.categories = Array.from(new Set(categories))
    },
   
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






