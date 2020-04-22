<template>

    
   <div class="main-container">

       <!-- this is a flexBox -->
       <div class="banner">
           <div class="banner__logo">
               <img src="" alt="logo">
           </div>

           <div class="banner__title">
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
                <div class="main-category__items">
                        <div class="main-category__items__thumbnail">
                            <img src="/images/ScootScoot.svg">
                            
                            
                        </div>

                        <div class="main-category__items__content">
                            <div class="main-category__items__content__title">
                                Become a Dasher 
                            </div>
                            <div class="main-category__items__content__subtitle">
                                <p> As a delivery driver, you'll make reliable money—working anytime, anywhere. </p>
                            </div>

                            <div class="main-category__items__content__link">
                                Start earning 
                            </div>
                        </div>
                </div>




                <div class="main-category__items">
                        <div class="main-category__items__thumbnail">
                            <img src="/images/Storefront 2.svg">
                        
                        </div>

                        <div class="main-category__items__content">
                            <div class="main-category__items__content__title">
                                 Become a Dasher
                            </div>
                            <div class="main-category__items__content__subtitle">
                                <p> As a delivery driver, you'll make reliable money—working anytime, anywhere. </p>
                            </div>

                            <div class="main-category__items__content__link">
                                Start earning 
                            </div>
                        </div>
                </div>




                <div class="main-category__items">
                        <div class="main-category__items__thumbnail">
                             <img src="/images/iphone.svg">
                        </div>

                        <div class="main-category__items__content">
                            <div class="main-category__items__content__title">
                               Become a Dasher
                            </div>
                            <div class="main-category__items__content__subtitle">
                                <p>As a delivery driver, you'll make reliable money—working anytime, anywhere. </p>
                            </div>

                            <div class="main-category__items__content__link">
                            Start earning 
                            </div>
                        </div>
                </div>



            </div>
        </main>



        <footer>
            <div class="items">
                   <a href=""> Home </a>
            </div>

            <div class="items">
                   <a href=""> Shop </a>
            </div>

            <div class="items">
                   <a href=""> Products </a>
            </div>

            <div class="items">
                   <a href=""> Contact Us </a>
            </div>

        </footer>
       


   </div>
</template>

<script>
// @ is an alias to /src
import Master from "@/components/Master.vue";
import Slider from "@/components/Slider.vue";
import BreadCrumb from "@/components/BreadCrumb.vue";
import {seo} from "../Repositories/seo.js";
import { pick } from "../Repositories/pick"
import { vuesax } from "../Repositories/vuesax"
import { mapState, mapMutations, mapActions } from "vuex"



export default {
  name: "Welcome",
  mixins: [seo, pick, vuesax],
  components: {
    "app-master" : Master,
    "app-breadcrumb": BreadCrumb
  },
  data(){
      return {
          cat: '',
      }
  },
  computed: {

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
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        height: 400px;
        background: url('/images/banner.png');
        width: 100%;
        justify-content: center;
        align-items: center; 
        position: relative;
    }


    .banner__logo{
        border: 1px solid black;
        padding: 16px 8px; 
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


    .space-gap{
         margin-top: 200px; 
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





    @media (min-width: 0px) and (max-width: 600px){
        main{
            width: 100%;
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
