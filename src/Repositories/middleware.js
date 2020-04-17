
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
                 x.$router.push('/').then(() => {
                     x.showNotif({ type: 'warning', position: 'bottom-right', message: 'Ooops!! Your cart is empty'});
                 })
                 
            }
      }

    },

    filters: {}

    

}