export const seo ={   
    methods:{
        seoMetaData(title, description){
           localStorage.setItem('meta_title',title);
           localStorage.setItem('meta_description',description);
        },

       
    },

    metaInfo: {
        title: '',
        meta: [{
          vmid: 'description',
          name: 'description',
          content: localStorage.getItem('meta_description'),
        }],
        titleTemplate(titleChunk){

            var dynamicTitle = localStorage.getItem('meta_title');
            var appName = this.$store.state.config.app_name;
            
            if(dynamicTitle){
                return  `${dynamicTitle} |  ${appName}`;
            }

            return titleChunk ? `${titleChunk} ` : 'Site Title';
            
        }
 
    },
}