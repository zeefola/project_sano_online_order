import axios from 'axios'


const state = {
    products: [],
    items: [],
    categories: [],
}
const getters = { 
    
   

}
const mutations = { 

    FETCH_PRELOADER (state,payload){
        state.products = payload;
        state.items = payload;
    },

    fetchAllItems(state){
        state.items = state.products;
    },
  
    fetchItemsByCategory(state,category){
        state.items = state.products.filter(product => product.category === category);
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






