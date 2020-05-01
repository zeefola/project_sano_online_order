
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
          let shipping_zone = this.$store.state.shipping.shipping_details.zone.toLowerCase();
          let shipping_address = this.$store.state.shipping.customer_details.address.toLowerCase();

          if(shipping_address.includes(shipping_zone)){

          }else{
            x.$router.push('/shipping').then(() => {
                x.showNotif({ type: 'warning', position: 'bottom-right', message: 'Ooops!! shipping address and shipping location do not match'});
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