import Vue from "vue";
import Vuex from "vuex";
import contactus from "./contactus"
import cart from "./cart"
import { database } from "../Repositories/database"




Vue.use(Vuex);

export default new Vuex.Store({
  mixins: [database],
  state: {
    products: [],
    items: [],
    categories: [],
    cart: [],
    
  },
  getters: {

    getCartTotal(state){
      return state.cart.reduce(function (acc, obj) { return acc + parseInt(obj.price); }, 0);
    }
    

   

    
    

    

  },
  
  mutations: {
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

    FETCH_PRELOADER (state,payload){
        state.products = payload;
        state.items = payload;
    },

    ADD_TO_CART(state,payloadX){

      //@ Step 1: Assigning PayloadX to payload
       let payload = {
         id: payloadX.id,
         name: payloadX.name,
         category: payloadX.category,
         price: payloadX.price,
         quantity: 1,
         rate: parseInt(payloadX.price)
       }

      //@@ Step 2: Assigning variables
       let cart = state.cart;
       let count = 0;
       

       //@@@ Step3: Looping through cart
       for(var key in cart){ //looping through cartlist
        if (cart.hasOwnProperty(key)) { //if cartlist has keys
          
           if(cart[key].id === payload.id){ //if cart_single equals to payload id
           

            let result = { 
               id: cart[key].id,
               name: cart[key].name,
               category: cart[key].category,
               price: parseInt(cart[key].price)+parseInt(payload.price),
               quantity: parseInt(cart[key].quantity)+1,
               rate: parseInt(cart[key].rate),
             }

             //Mutating cart
             state.cart.splice(key, 1,result);

             count++; //incrementigng count

             break;

             
           }
        }
       }

       if(count < 1){
         state.cart.push(payload);
       }
    },

    MODIFY_CART_ITEM(state, payload){
      let index = payload.index;
      let quantity = payload.quantity;
      let cart = state.cart;

      let obj = cart[index];
      let obj_rate = obj.rate;

     

       let result = {
        id: obj.id,
        name: obj.name,
        category: obj.category,
        quantity: parseInt(quantity),
        price: parseInt(obj_rate)*parseInt(quantity),
        rate: parseInt(obj.rate),
      }

      
      state.cart.splice(index,1,result);

      
    },

    REMOVE_CART_ITEM(state, id){
      state.cart.splice(id, 1);
    },


    

  },
  actions: {
  //   incrementAsync ({ commit }) {
  //     setTimeout(() => {
  //         commit('increment')
  //     }, 1000)
  //  }
  },
  modules: {
    contactus,
    // cart
  }
});
