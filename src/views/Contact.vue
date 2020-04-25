<template>
   <app-master>


    <div slot='breadcrumb'>
        <app-breadcrumb>
             <div class="title-box text-left">
                <div class="page-title-heading">
                    <h1 class="title">Contact Us</h1>
                </div><!-- /.page-title-captions -->
                <div class="breadcrumb-wrapper">
                    <span>
                       <router-link to="/" tag="a" > <i class="ti ti-home"></i>&nbsp;&nbsp;Home </router-link>
                    </span>
                    <span class="ttm-bread-sep ttm-textcolor-white">&nbsp;   →  &nbsp;</span>
                    <span class="ttm-textcolor-skincolor">Contact</span>
                </div>  
            </div>
        </app-breadcrumb>
    </div>



      <div slot="main-content">

           <!-- contactbox-section -->
            <section class="ttm-row contact-box-section ttm-bgcolor-grey clearfix" style="margin-bottom: 100px">
                <div class="container">
                    <div class="row"><!-- row -->
                        <div class="col-lg-4">
                            <!--  featured-icon-box --> 
                            <div class="featured-icon-box left-icon p-15 ttm-bgcolor-white mb-20">
                                <div class="featured-icon"><!--  featured-icon --> 
                                    <div class="ttm-icon ttm-icon_element-bgcolor-skincolor ttm-icon_element-size-sm">
                                        <i class="flaticon flaticon-phone-call"></i><!--  ttm-icon --> 
                                    </div>
                                </div>
                                <div class="featured-content"><!--  featured-content -->
                                    <div class="featured-title"><!--  featured-title -->
                                        <h5>Phone</h5>
                                    </div>
                                    <div class="featured-desc"><!--  featured-desc -->
                                        <p>{{ this.$store.state.config.telephone1 }}</p>
                                        
                                    </div>
                                    <div class="featured-desc"><!--  featured-desc -->
                                        <p>{{ this.$store.state.config.telephone2 }}</p>
                                        
                                    </div>
                                </div>
                            </div><!--  featured-icon-box END -->
                        </div>
                        <div class="col-lg-4">
                            <!--  featured-icon-box --> 
                            <div class="featured-icon-box left-icon p-15 ttm-bgcolor-white mb-20">
                                <div class="featured-icon"><!--  featured-icon --> 
                                    <div class="ttm-icon ttm-icon_element-bgcolor-skincolor ttm-icon_element-size-sm">
                                        <i class="flaticon flaticon-envelope"></i><!--  ttm-icon --> 
                                    </div>
                                </div>
                                <div class="featured-content" style="padding-bottom: 27px"><!--  featured-content -->
                                    <div class="featured-title"><!--  featured-title -->
                                        <h5>Email Us</h5>
                                    </div>
                                    <div class="featured-desc"><!--  featured-desc -->
                                        <p>{{ this.$store.state.config.email }}</p>
                                    </div>
                                </div>
                            </div><!--  featured-icon-box END -->
                        </div>
                        <div class="col-lg-4">
                            <!--  featured-icon-box --> 
                            <div class="featured-icon-box left-icon p-15 ttm-bgcolor-white mb-20">
                                <div class="featured-icon"><!--  featured-icon --> 
                                    <div class="ttm-icon ttm-icon_element-bgcolor-skincolor ttm-icon_element-size-sm">
                                        <i class="flaticon flaticon-placeholder"></i><!--  ttm-icon --> 
                                    </div>
                                </div>
                                <div class="featured-content"><!--  featured-content -->
                                    <div class="featured-title"><!--  featured-title -->
                                        <h5>Address</h5>
                                    </div>
                                    <div class="featured-desc"><!--  featured-desc -->
                                        <p>{{ this.$store.state.config.address }}</p>
                                    </div>
                                </div>
                            </div><!--  featured-icon-box END -->
                        </div>
                    </div><!-- row end -->
                </div>
            </section>
            <!-- contactbox-section end -->
           

           
      </div>



   </app-master>
</template>

<script>
// @ is an alias to /src
import Master from "@/components/Master.vue";
import BreadCrumb from "@/components/BreadCrumb.vue";
import {seo} from "../Repositories/seo.js"
import {pick} from "../Repositories/pick.js"
import {vuesax} from "../Repositories/vuesax"

export default {
  name: "Contact",
  mixins : [seo,pick,vuesax],
  components: {
    "app-master" : Master,
    "app-breadcrumb": BreadCrumb
  },
  data(){
      return {
          

      }
  },
  methods:{


  

    
  },

  created(){
      this.seoMetaData('Contact Us' , '');
  }
};
</script>

<style>

    .vs-notifications{
        padding: 5px 15px!important;
    }
</style>
