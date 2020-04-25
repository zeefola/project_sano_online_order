import axios from 'axios'


const state = {
    items: [],
    sub_categories: [],
}
const getters = { 

    // getItemsByCategory: (state, getters, rootState, rootGetters) => (category) => {
    //     let products = rootState.shop.products;

    //     return products.filter(function(product){
    //         return  product.category === category
    //     });
    // },

    getItemsViaSubcategory: (state) => (sub_category) => {
        //console.log(state)
        return state.items.filter(function(item){
           
            if(item.sub_category){
                return item.sub_category.toLowerCase() === sub_category.toLowerCase()
            }
           
        });
    }


}
const mutations = { 

    /** this will mutate [items] based on the value it gets */
    UPDATE_ITEMS(state,value){
        state.items = value;
        console.log(state.items)
    },


    /** This will mutate [categories] based on the [items] 
     * 
    */
    UPDATE_ITEM_SUB_CATEGORIES(state){
        let sub_categories = [];
        let obj = state.items;
        for (var key in obj) {
          if (obj.hasOwnProperty(key)) {
              if(obj[key].sub_category){
                sub_categories.push(obj[key].sub_category)
              }
              
          }
        }
        state.sub_categories = Array.from(new Set(sub_categories))
    },

    
}
const actions = {

    async preloader ({ commit, rootState }, category) {
        let products = rootState.shop.products;
        console.log(products)

        let items = products.filter(function(product){
            return  product.category.toLowerCase() === category.toLowerCase()  
        });

        commit('UPDATE_ITEMS', items);
        commit('UPDATE_ITEM_SUB_CATEGORIES')
        return true;
    },

}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}






