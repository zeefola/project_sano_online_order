<template>
   <app-master>


        <div slot='breadcrumb'>
        <app-breadcrumb>
             <div class="title-box text-left" >
                <div class="page-title-heading" style="text-align: center">
                    <h1 class="title" >{{ this.$store.state.config.app_name }}</h1>
                </div><!-- /.page-title-captions -->
                <div class="breadcrumb-wrapper" style="text-align: center">
                    <span class="ttm-textcolor-skincolor"> &nbsp;&nbsp; {{ this.$store.state.config.tagline }} </span>
                </div>  
            </div>
        </app-breadcrumb>
    </div>

    

      <div slot="main-content">


           <section class="ttm-row about-section clearfix">
                <div class="container">
                    <div class="row"><!-- row -->
                        <div class="col-lg-5">
                           <div class="ml_130 res-991-ml-0">
                                            <!-- ttm_single_image-wrapper -->
                                            <div class="ttm_single_image-wrapper after-border style1 position-relative">
                                                <img class="img-fluid" src="/images/food_one.png" title="single-img-three" alt="single-img-three">
                                            </div><!-- ttm_single_image-wrapper end -->
                                            <div class="about-overlay-02 center-overlay-style1">
                                                <div class="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-md">
                                                    <i class="flaticon flaticon-cow-3"></i><!--  ttm-icon --> 
                                                </div>
                                                <h6>Founded in <br> 1996</h6>
                                            </div>
                                        </div>
                        </div>
                        <div class="col-lg-7">
                            <div class="res-991-mt-30">
                                <!-- section title -->
                                <div class="section-title clearfix">
                                    <div class="title-header">
                                        <h5>About farming</h5>
                                        <h2 class="title">Welcome To Agrotek Dairy Farm</h2>
                                    </div>
                                    <div class="heading-seperator">
                                        <span></span>
                                    </div>
                                </div><!-- section title end -->
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printing gallery making this the first true generator.</p>
                                <div class="row mt-30">
                                    <div class="col-md-4 col-lg-4 col-sm-4">
                                        <div class="text-left pt-15">
                                            <img src="https://via.placeholder.com/145X60/444444.png" alt="about-sign">
                                        </div>
                                    </div>
                                    <div class="col-md-8 col-lg-8 col-sm-8">
                                        <!--  featured-icon-box --> 
                                        <div class="featured-icon-box without-icon style1 text-left pt-15">
                                            <div class="featured-content"><!--  featured-content -->
                                                <div class="featured-desc"><!--  featured-desc -->
                                                    <p>Call to ask any question</p>
                                                </div>
                                                <div class="featured-title"><!--  featured-title -->
                                                    <h5>+0123-456-7890</h5>
                                                </div>
                                            </div>
                                        </div><!--  featured-icon-box END -->
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <!-- row end -->
                </div>
            </section>
            <!-- aboutus-section end -->


          



              <!-- team-section -->
            <section class="ttm-row second-team-section clearfix" style="margin-top: 0px; padding-top: 40px">
                <div class="container">
                    <div class="row"><!-- row -->
                        <div class="col-lg-9 col-xl-10 col-md-9">
                            <!-- section-title -->
                            <div class="section-title style2 clearfix">
                                <div class="title-header">
                                    <h5>Team Member</h5>
                                    <h2 class="title">Meet Our Great Team</h2>
                                </div>
                                <div class="title-desc">Our team mission is to promote agricultural practices designed to provide abundant healthy food, fiber and other services for all communities.</div>
                            </div><!-- section-title end -->
                        </div>
                        <div class="col-lg-3 col-xl-2 col-md-3">
                            <div class="text-md-right">
                                
                                <router-link class="ttm-btn ttm-btn-size-md ttm-btn-style-border ttm-btn-color-darkgrey mb-40" to='/products' > <a> view more </a></router-link>
                                
                            </div>
                        </div>
                    </div>
                    <!-- row end -->
                    <!-- row -->
                    <div class="row slick_slider ttm-boxes-spacing-15px" data-slick='{"slidesToShow": 3, "slidesToScroll": 3, "dots":false, "arrows":false, "autoplay":false, "infinite":true, "centerMode":false}'>
                        
                        <div class="ttm-box-col-wrapper col-lg-4" v-for="(category, index) in categories" :key="index+'category'">
                            <!-- featured-imagebox-team -->
                            <div class="featured-imagebox featured-imagebox-team style1">
                                <div class="featured-thumbnail"><!-- featured-thumbnail -->
                                    <img class="img-fluid" src="https://via.placeholder.com/500X560/444444.jpg" alt="image">
                                    <div class="ttm-social-links-wrapper">
                                      <router-link  :to="{ name: 'Category', params: { name: convertToSlug(category.name) } }" class="main-category__items__content__link" > <a> View Products </a></router-link>
                                    </div>
                                </div> 
                                <div class="featured-content box-shadow">
                                    <div class="featured-title"><!-- featured-title -->
                                         <router-link  :to="{ name: 'Category', params: { name: convertToSlug(category.name) } }" class="main-category__items__content__link"  tag="h5"> <a> {{ category.name }} </a></router-link>
                                    </div>
                                    <p class="category">{{ category.description }}</p><!-- category -->
                                </div>
                            </div><!-- featured-imagebox-team end-->
                        </div>
                        
                     
                    </div>
                    <!-- row end-->
                </div>
            </section>
            <!-- team-section end -->




      </div>
   </app-master>
</template>

<script>
// @ is an alias to /src
import Master from "@/components/Master.vue";
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

        ...mapState(
        'welcome',
        [
            'categories'
        ])


  },
  methods: {
        check(e){
           let new_val = e.target.value;
           if( new_val != 'all'){
              this.fetchItemsByCategory(new_val);
            }else{
                this.fetchAllItems()
            }
        },
        ...mapMutations(
          'shop',
          [
          'fetchAllItems',
          'fetchItemsByCategory',
          'fetchItemCategories',
          'FETCH_PRELOADER',
          ]
        ),

        

        add_to_cart(payload){ 
            let x = this;
           this.$store.dispatch('cart/add_to_cart',payload).then((yes) =>{
              
              x.showNotif({ type: 'success', position: 'bottom-right', message: 'Product added to cart'});
           })
        }


  },
    created(){
        //   (title, description)
        this.seoMetaData('Home','');

        //Preloader
        this.FETCH_PRELOADER()

        

        //Fetch categories
        this.fetchItemCategories()


        
        //console.log(process.env.VUE_APP_API_KEY)

        //console.log(process.env.VUE_APP_API_KEY)
       
        

    }
};
</script>


<style scoped>
    .add-to-cart-btn a:hover,
    .add-to-cart-btn a:active
    {
        cursor: pointer;
        color: white;
    }



    .flex-container{
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        
    }

    


    .item{
        display: flex;
        flex-flow: column wrap;
        width: 16.4rem;
        height: auto;
        margin: 20px 5px;
        position: relative;
        border: 1px solid beige;

      
        
    }

    .item__overlay{
        position: absolute;
        height: 100%;
        background: rgba(0,0,0,0.2);
        display: none;
        
    }

    .item__overlay__container{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .item__overlay__container__button{
      width: auto;
      background: #232323;
      color: white;
      font: inherit;
      text-align: center;
      padding: 8px 16px;
      cursor: pointer;
      font-size: 1rem;
    }

    .item__overlay__container__button:hover,
    .item__overlay__container__button:active{
        background: #00a85a;
    }

    .item:hover .item__overlay,
    .item:active .item__overlay{
        width: 100%;
        display: block;
    }


    .item .item__featured_image{
        height: 262px;
        width: 100%;
        
    }

     .item .item__featured_image img{
         height: 100%;
         width: 100%;
     }

    .item .item__content{
        height: 90px;
        padding: 18px;
        border-top: 1px solid #f0f0f0;
        color: #232323;
        background: #cccccc2e;
    }

    .item .item__content .item__content__title{
        font-size: 1rem;
        font-weight: 500;
    }

     .item .item__content .item__content__price{
        font-size: 1rem;
    }



    @media (min-width: 0px) and (max-width: 600px){
        .item{
            width: 45%;
            height: auto;
        }

        .item .item__content .item__content__title{
            font-weight: normal;
            font-size: 0.8rem;
        }

        .item .item__content .item__content__price{
            font-weight: normal;
            font-size: 0.8rem;
        }

         .item .item__featured_image{
            height: auto;
            width: 100%;   
        }
    }
</style>
