
export const pick ={


    
    
    data(){
        return {
            API_KEY: '$2y$10$Nk2XaBQ5YDpAKugOw2aNeOpVG0j6IThui3l8Vps1nP2k1jpjYNnKy', 
            
            


        }
    },

    methods:{
        clearInputField(obj){
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    obj[key] = '';
                }
            }
        },

    }

    

}