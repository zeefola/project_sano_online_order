export const seo ={   
    methods:{
        seoMetaData(title, description){
           localStorage.setItem('meta_title',title);
           localStorage.setItem('meta_description',description);
        },
    },

    metaInfo: {
        title: process.env.VUE_APP_NAME,
        meta: [{
          vmid: 'description',
          name: 'description',
          content: localStorage.getItem('meta_description'),
        }],
        titleTemplate(titleChunk){
            
            var dynamicTitle = localStorage.getItem('meta_title');
            
            if(dynamicTitle){
                return titleChunk ? `${dynamicTitle} |  ${titleChunk}` : 'Site Title';
            }

            return titleChunk ? `${titleChunk} ` : 'Site Title';
            
        }
 
    },
}