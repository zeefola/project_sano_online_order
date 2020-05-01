
export const middleware ={


    
    
    data(){
        return {

        }
       
    },

    methods:{
        cartMiddleware(){
            let x = this;
            let cartLength = this.$store.state.cart.cart.length;
  
            if(cartLength < 1){
                 x.$router.push('/products').then(() => {
                     x.showNotif({ type: 'warning', position: 'bottom-right', message: 'Ooops!! Your cart is empty'});
                 })
                 
            }
      },

      shippingAddressMiddleware(){
          let x = this;
          let shipping_zone_tags = this.$store.state.shipping.shipping_details.zone_tags;
          let shipping_address = this.$store.state.shipping.customer_details.address.toLowerCase();
          let result =  false;


          //looping through the shipping_zone_tags
          for(var tag of shipping_zone_tags){

            if(shipping_address.includes(tag.toLowerCase())){
                result = true;
            }

          }


          if(result == false){
            x.$router.push('/shipping').then(() => {
                x.showNotif({ type: 'warning', position: 'bottom-right', message: 'Ooops!! invalid shipping zone'});
            })
          }

          

          
      },


      paymentDetailsMiddleware(){
        let x = this;
        let cartLength = this.$store.state.cart.cart_backup.length;

        if(cartLength < 1){
             x.$router.push('/checkout').then(() => {
                 x.showNotif({ type: 'warning', position: 'bottom-right', message: 'Ooops!! Something went wrong'});
             })
             
        }
      },

      shippingMiddleware(){
         let x = this;
         let customer_details = this.$store.state.shipping.customer_details;
         let shipping_details = this.$store.state.shipping.shipping_details;

         for (var key in customer_details) {
            if (customer_details.hasOwnProperty(key)) {
                if(customer_details[key] == ''){
                    x.$router.push('/shipping').then(() => {
                        x.showNotif({ type: 'warning', position: 'bottom-right', message: 'Ooops!! Incomplete billing details'});
                    })

                   
                    return;
                    
                   
                }
               
            }

        }

        for (var key in shipping_details) {
            if (shipping_details.hasOwnProperty(key)) {
                if(shipping_details[key] == ''){
                    x.$router.push('/shipping').then(() => {
                         x.showNotif({ type: 'warning', position: 'bottom-right', message: 'Ooops!! Incomplete shipping details'});
                    });

                    break;
                   
                }
               
            }

            // break;
        }

      }

    },

    filters: {}

    

}