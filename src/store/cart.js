import axios from 'axios'

const state = {
    cart: [],
}
const getters = { 

    getCartTotal(state){
        return state.cart.reduce(function (acc, obj) { return acc + parseInt(obj.price); }, 0);
    },
  
    getCartCount(state){
    return state.cart.reduce(function (acc, obj) { return acc + parseInt(obj.quantity); }, 0);
    }

}
const mutations = { 

    
    ADD_TO_CART(state,payloadX){

        //@ Step 1: Assigning PayloadX to payload
         let payload = {
           id: payloadX.id,
           name: payloadX.name,
           category: payloadX.category,
           price: payloadX.price,
           quantity: 1,
           rate: parseInt(payloadX.price),

           unit: payloadX.unit,  //  (e.g kg, ml)
           unit_rate: payloadX.unit_rate, //( e.g [1,2,3])
           weight: payloadX.weight,  // (e.g 1)
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

                 
                unit: cart[key].unit,  //  (e.g kg, ml)
                unit_rate: cart[key].unit_rate, //( e.g [1,2,3])
                weight: cart[key].weight,  // (e.g 1)


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
          price: parseFloat(obj.weight) *parseInt(obj_rate)*parseInt(quantity),
          rate: parseInt(obj.rate),

          unit: obj.unit,  //  (e.g kg, ml)
          unit_rate: obj.unit_rate, //( e.g [1,2,3])
          weight: obj.weight,  // (e.g 1)


        }
  
        
        state.cart.splice(index,1,result);
  
        
      },

      MODIFY_CART_ITEM_VIA_WEIGHT(state,payload){

        let index = payload.index;
        let weight = payload.weight;
        let cart = state.cart;
  
        let obj = cart[index];
        let obj_rate = obj.rate;


        let calculated_price =   parseFloat(weight) * parseInt(obj_rate)*parseInt(obj.quantity)

        // console.log( parseFloat(weight),'weight')
        // console.log( parseInt(obj_rate),'rate')

        // console.log(parseInt(obj.quantity),'quantity')
  
       
  
         let result = {
          id: obj.id,
          name: obj.name,
          category: obj.category,
          quantity: obj.quantity,
          price: calculated_price,
          rate: parseInt(obj.rate),

          unit: obj.unit,  //  (e.g kg, ml)
          unit_rate: obj.unit_rate, //( e.g [1,2,3])
          weight: parseFloat(weight),  // (e.g 1)
        }
  
        
        state.cart.splice(index,1,result);

      },
  
      REMOVE_CART_ITEM(state, id){
        state.cart.splice(id, 1);
      },

      DUPLICATE_CART_ITEM(state,id){
        let item = state.cart[id];

        console.log(item)
        state.cart.push(item);

      },


      
      CLEAR_CART(state){
        state.cart = [];
      }
  
  
   
}
const actions = {

  async add_to_cart ({ commit }, payload) {
     commit('ADD_TO_CART', payload);
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






