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

        </section>



       
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

   .main-container{
       
       margin: 0;
       box-sizing: border-box;
       margin-top: 0px
   }


    .banner{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        height: 500px;
        background: url('/images/banner.png');
        width: 100%;
        justify-content: center;
        align-items: center; 
    }


    .banner__logo{
        border: 1px solid black;
        padding: 16px 8px; 
    }


    section.brief{
        background: #ccc;
        display: block;
        margin: auto;
        width: 70%;
        height: 500px;
        margin-top: 20px;
    }

    main{
        display: block;
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
    }


    
</style>
