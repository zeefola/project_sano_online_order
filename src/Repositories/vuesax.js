export const vuesax ={   
    methods:{
        showLoading(){
            this.activeLoading = true;
            this.$vs.loading({
                type: 'corners',
                color: 'green',
            });
        },

        hideLoading(){
            this.activeLoading = false
            this.$vs.loading.close()
        },

        
        showNotif (obj) {

            let x = this;

            if(obj.type == 'warning'){

                if (typeof obj.message === 'object'){

                    for (var key in obj.message) {
                        if (obj.message.hasOwnProperty(key)) {

                            x.$vs.notify({
                                text: obj.message[key],
                                color: 'red',
                                time: 5000,
                                position: obj.position ? obj.position : 'bottom-right' ,
                  
                            })

                            
                        }
                    }
                }else{

                    this.$vs.notify({
                        text: obj.message,
                        color: 'red',
                        time: 5000,
                        position: obj.position ? obj.position : 'bottom-right' ,
          
                    })

                }

                

            }


            if(obj.type == 'success'){
                

                this.$vs.notify({
                    text: obj.message,
                    color: 'green',
                    time: 5000,
                    position: obj.position ? obj.position : 'bottom-right' ,
      
                })

            }



            if(obj.type == 'info'){

                this.$vs.notify({
                    text: obj.message,
                    color: 'teal',
                    time: 5000,
                    position: obj.position ? obj.position : 'bottom-right' ,
      
                })

            }
            
        },
    },

}