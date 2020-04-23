import axios from 'axios'


const state = {
    products: [
        {
            id: '1',
            name: 'Dressed Chicken',
            price: '1000',
            featured_image: '/img/10.png',
            category : 'fish & meat',

        },
        {
            id: '2',
            name: '4 Parts Cut',
            price: '1050',
            featured_image: '/img/11.png',
            category : 'fish & meat',

        },
        {
            id: '3',
            name: '8 Parts Cut',
            price: '1050',
            featured_image: '/img/12.png',
            category : 'fish & meat',

        },
        {
            id: '4',
            name: 'Pork',
            price: '1400',
            featured_image: '/img/13.png',
            category : 'fish & meat',

        },
        {
            id: '5',
            name: 'Chicken Gizzard',
            price: '1200',
            featured_image: '/img/14.png',
            category : 'fish & meat',

        },
        {
            id: '6',
            name: 'Chicken Laps',
            price: '1200',
            featured_image: '/img/15.png',
            category : 'fish & meat',

        },
        {
            id: '7',
            name: 'Chicken Breast With Bone',
            price: '1100',
            featured_image: '/img/16.png',
            category : 'fish & meat',

        },
        {
            id: '8',
            name: 'Smoked Fish',
            price: '1000',
            featured_image: '/img/17.png',
            category : 'fish & meat',

        },
        {
            id: '9',
            name: 'Chicken Wings',
            price: '1100',
            featured_image: '/img/18.png',
            category : 'fish & meat',

        },
        {
            id: '10',
            name: 'Chicken Neck',
            price: '500',
            featured_image: '/img/19.png',
            category : 'fish & meat',

        },
        {
            id: '11',
            name: 'Chicken Back',
            price: '750',
            featured_image: '/img/33.png',
            category : 'fish & meat',

        },
        {
            id: '12',
            name: 'fresh corn',
            price: '200',
            featured_image: '/img/22.png',
            category : 'staples & vegetables',

        },

        {
            id: '13',
            name: 'Fresh lemongrass',
            price: '200',
            featured_image: '/img/lg.jpg',
            category : 'staples & vegetables',

        },
   
        {
            id: '14',
            name: 'Fresh mint leaf',
            price: '200',
            featured_image: '/img/26.png',
            category : 'staples & vegetables',

        },

        {
            id: '15',
            name: 'Garri',
            price: '300',
            featured_image: '/img/24.png',
            category : 'staples & vegetables',

        },
        {
            id: '16',
            name: 'Fresh sweet basil',
            price: '200',
            featured_image: '/img/30.png',
            category : 'staples & vegetables',

        },
        {
            id: '17',
            name: 'Fresh scent leaf',
            price: '200',
            featured_image: '/img/25.png',
            category : 'staples & vegetables',

        },
        // {
        //     id: '18',
        //     name: 'Thyme',
        //     price: '350',
        //     featured_image: '/img/25.png',
        //     category : 'Spices',

        // },
        {
            id: '19',
            name: 'Curry',
            price: '350',
            featured_image: '/img/38.png',
            category : 'spices',

        },
        {
            id: '20',
            name: 'Turmeric',
            price: '350',
            featured_image: '/img/35.png',
            category : 'spices',

        },
        {
            id: '21',
            name: 'Chilli pepper',
            price: '300',
            featured_image: '/img/32.png',
            category : 'spices',

        },
        {
            id: '22',
            name: 'Sweet basil',
            price: '500',
            featured_image: '/img/36.png',
            category : 'spices',

        },
        {
            id: '23',
            name: 'Tropical basil',
            price: '350',
            featured_image: '/img/37.png',
            category : 'spices',

        },
        {
            id: '24',
            name: 'All soup seasoning',
            price: '350',
            featured_image: '/img/31.png',
            category : 'spices',

        },
        {
            id: '25',
            name: 'Chicken seasoning',
            price: '350',
            featured_image: '/img/28.png',
            category : 'spices',

        },
        {
            id: '26',
            name: 'Fried rice seasoning',
            price: '350',
            featured_image: '/img/29.png',
            category : 'spices',

        },
        {
            id: '27',
            name: 'Jollof rice seasoning',
            price: '350',
            featured_image: '/img/34.png',
            category : 'spices',

        },
        {
            id: '28',
            name: 'Pepper soup seasoning',
            price: '350',
            featured_image: '/img/27.png',
            category : 'spices',

        },
        {
            id: '29',
            name: 'Hand Sanitizer(40ml)',
            price: '300',
            featured_image: '/img/sm.png',
            category : 'household',

        },
        {
            id: '30',
            name: 'Hand Sanitizer(250ml)',
            price: '900',
            featured_image: '/img/big.png',
            category : 'household',

        },
        {
            id: '31',
            name: 'Lemongrass Liquid Soap',
            price: '250',
            featured_image: '/img/liquid.png',
            category : 'household',

        },
        {
            id: '32',
            name: 'Lemongrass Hand Wash',
            price: '300',
            featured_image: '/img/han.png',
            category : 'household',

        },
        {
            id: '33',
            name: 'Lemongrass Hydrosol',
            price: '300',
            featured_image: '/img/hydo.png',
            category : 'household',

        },
        {
            id: '34',
            name: 'Lemongrass Essential Oil',
            price: '1500',
            featured_image: '/img/hh.png',
            category : 'household',

        },


        

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
        console.log('In')
        state.items = state.products.filter(function(product){
            console.log(product)
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






