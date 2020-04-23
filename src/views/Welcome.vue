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
                                    <h5>Product Categories</h5>
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
                        
                        <div class="ttm-box-col-wrapper col-lg-4" v-for="(category, index) in product_categories" :key="index+'category'">
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
        'shop',
        [
            'product_categories'
        ])


  },
  methods: {},
    created(){
        //   (title, description)
        this.seoMetaData('Home','');

        

    }
};
</script>


<style scoped>
    
</style>
