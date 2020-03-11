import axios from 'axios'

const state = {}
const getters = {   }
const mutations = {  }
const actions = {

    async contact_us_confirm({commit},value){

            try {
                var response = await axios
                .post(
                    "https://www.agropark.com.ng/api/v1/section/nardus_contact_us",value
                );
               
                return await response;
            }catch(error){
                return await error.response;
            } 
      
    },





}

export default {
    state,
    getters,
    mutations,
    actions,
}






