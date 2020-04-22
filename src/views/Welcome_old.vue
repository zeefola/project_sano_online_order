<template>

    
   <div class="main-container">

       <!-- this is a flexBox -->
       <div class="banner">
           <div class="logoBox">
               <img src="" alt="logo">
           </div>

           <div class="pageTitleBox">
               Your favorite restaurants, delivered
           </div>

       </div>



        
        

        <section class="brief">

            <div class="brief__contentBlock">

                <div class="brief__contentBlock__subtitle">
                    ABOUT US
                </div>

                <div class="brief__contentBlock__title">
                   Brief Introduction
                </div>

                <div class="brief__contentBlock__description">
                   <p> ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
                    laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
                    architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                     sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione </p>
                     
                     <p>voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                      consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et 
                      dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum 
                      exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
                       Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,
                        vel illum qui dolorem eum fugiat quo voluptas nulla pariatur
                    </p>
                </div>

            </div>
            <div class="brief__imageBlock">
                <div class="handle">
                    <img src="/images/ScootScoot.svg" style="width: 100%; height: 100% ">
                </div>

            </div>

            

        </section>




        <div class="space-gap"></div>






       
        <main>


            
          
             <!-- this is another flexBox -->
            <div class="main-category">
                <div class="main-category__items" v-for="(category, index) in categories" :key="index+'category'">
                        <div class="main-category__items__thumbnail">
                            <img :src="category.featured_image">
                            
                            
                        </div>

                        <div class="main-category__items__content">
                            <div class="main-category__items__content__title">
                                {{ category.name }}
                            </div>
                            <div class="main-category__items__content__subtitle">
                                <p> {{ category.description }} </p>
                            </div>
                            
                           

                            <router-link  :to="{ name: 'Category', params: { name: convertToSlug(category.name) } }" class="main-category__items__content__link"  tag="div"> <a> Start earning </a></router-link>

                            <div >
                                
                            </div>
                        </div>
                </div>




               

            </div>
        </main>



        <footer>
            <div class="items">
                   <router-link to="/" tag="a">Home</router-link>
                 
            </div>


            <div class="items">
                   <router-link to="/products" tag="a">Our Products</router-link>
            </div>

            <div class="items">
                   <router-link to="/contact" tag="a">Contact Us</router-link>
            </div>

        </footer>
       


   </div>
</template>

<script>
// @ is an alias to /src
import {seo} from "../Repositories/seo.js";
import { pick } from "../Repositories/pick"
import { vuesax } from "../Repositories/vuesax"
import { mapState, mapMutations, mapActions } from "vuex"



export default {
  name: "Welcome",
  mixins: [seo, pick, vuesax],
  components: {
  },
  data(){
      return {
          
      }
  },
  computed: {

    ...mapState(
        'welcome',
    [
        'categories'
    ])


  },
  methods: {


  },
    created(){
       
       
        

    }
};
</script>


<style scoped>

   .handle{
     width: 100%;
     height: 100%;
   }

   .main-container{
       margin: 0;
       box-sizing: border-box;
       margin-top: 0px
   }

    .banner{
        display: block;
        height: 400px;
        background: url('/images/banner.png');
        background-position-y: center;
   
    }


    .logoBox{
        
        padding: 16px 8px; 
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
    }

    .pageTitleBox{

    }


    section.brief{
        display: flex;
        width: 70%;
        height: 500px;
        margin: auto;
        margin-top: 5rem;
        padding: 10px;
       
    }


    .brief__contentBlock{
        display: inline-block;
        width: 55%;
        
        height: 100%;
    }


    .brief .brief__contentBlock__subtitle{
        font-size: 15px;
        text-transform: uppercase;
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        padding: 10px 5px;
        line-height: 1;
        color: #ff431e;
    }


    .brief .brief__contentBlock__title{
        font-size: 27px;
        text-transform: capitalize;
        font-family: 'Roboto', sans-serif;
        font-weight: 600;
        padding: 5px 5px;
        line-height: 1;
        color: #000000c4;
    }


     .brief .brief__contentBlock__description{
        font-size: 1rem;
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        padding: 10px 5px;
        line-height: 2;
        color: black;
    }

    .brief__imageBlock{
        display: inline-block;
        width: 45%;
        height: 100%;
    }

    main{
        display: block;
        margin-top: 100px;
        margin: auto;
        width: 70%;
    }


    .main-category{
        display: flex;
        width: 100%;
        flex-flow: row wrap;
        justify-content: center;
        margin: 96px 0px;
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        
    }

    .main-category .main-category__items{
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        text-align: center;
        margin: 0px 17px;
        padding: 16px;
        width: 350px;
        cursor: pointer;
    }


    .main-category .main-category__items .main-category__items__thumbnail{
        height: 10rem;
    }

    .main-category .main-category__items .main-category__items__thumbnail img{
        height: 100%;
    }

    .main-category__items__content .main-category__items__content__title{
        font-family: inherit;
        font-size: 1.5rem;
        line-height: 2.5rem;
        color: rgb(25, 25, 25);
    }

    .main-category__items__content .main-category__items__content__subtitle{
        margin-top: 10px
    }


    .main-category__items__content .main-category__items__content__link{
        color: red;
        font-size: 1rem;
    }

    .main-category__items__content .main-category__items__content__link a{
        color: red;
        font-size: 1rem;
    }




    .space-gap{
         margin-top: 12rem; 
         display: none
    }



    footer{
        background: rgb(25, 25, 25);
        height: 70px;
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
    }

    footer .items a{
        color: white;
        margin: 0px 10px;
       

    }





    @media (min-width: 0px) and (max-width: 1000px){
        main{
            width: 100%;
        }

         .banner{
            background-position-y: 0%;
        }


        section.brief{
            display: flex;
            flex-flow: column;
            width: 100%;
            margin-top: 5rem;
        
        }


        .brief__contentBlock{
            width: 100%;

        }

        .brief__imageBlock{
            height: 100%;
            width: 100%;
            display: none;
        }

        .space-gap{
            display: block;
        }


    }


     @media (min-width: 1001px) and (max-width: 1100px){
        main{
            width: 90%;
        }

       

         section.brief{
            display: flex;
            flex-flow: column;
            width: 100%;
            margin-top: 5rem;
        
        }


        .brief__contentBlock{
            width: 100%;

        }

        .brief__imageBlock{
            height: 100%;
            width: 100%;
            display: none;
        }

        .space-gap{
            display: block;
        }
     }



    
</style>
