<template>
   <app-master>

    <div slot='breadcrumb'>
        <app-breadcrumb>
            <div class="title-box text-left">
                <div class="page-title-heading">
                    <h1 class="title">FAQ's</h1>
                </div><!-- /.page-title-captions -->
                <div class="breadcrumb-wrapper">
                    <span>
                       <router-link to="/" tag="a" > <i class="ti ti-home"></i>&nbsp;&nbsp;Home </router-link>
                    </span>
                    <span class="ttm-bread-sep ttm-textcolor-white">&nbsp;   →  &nbsp;</span>
                    <span class="ttm-textcolor-skincolor">faq</span>
                </div>  
            </div>
        </app-breadcrumb>
    </div>



      <div slot="main-content">

           
            <!-- services-section -->
            <section class="ttm-row faqpage-section clearfix">
                <div class="container">
                    <div class="row"><!-- row -->
                        <div class="col-lg-12">
                            <!-- section title -->
                            <div class="section-title text-center clearfix">
                                <div class="title-header mb-50">
                                    <h5>WHAT WE OFFER</h5>
                                    <h2 class="title">Do you have any Questions?</h2>
                                </div>
                                <div class="heading-seperator">
                                    <span></span>
                                </div>
                            </div><!-- section title end -->
                        </div>
                    </div><!-- row end -->
                    <!-- row -->
                    <div class="row">
                        <div class="col-lg-6">
                            <!-- ttm_single_image-wrapper -->
                            <div class="ttm_single_image-wrapper">
                                <img class="img-fluid" src="https://via.placeholder.com/1200X800/444444.jpg" title="single-img-eight" alt="single-img-eight">
                            </div><!-- ttm_single_image-wrapper end -->
                            <div class="ttm-play-icon-btn ttm-play-icon-btn-center">
                                <div class="ttm-play-icon-animation">
                                    <a href="https://youtu.be/7e90gBu4pas" target="_self" class="ttm_prettyphoto">
                                        <div class="ttm-icon ttm-icon_element-bgcolor-skincolor ttm-icon_element-size-md ttm-icon_element-style-round">
                                            <i class="ti ti-control-play"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <!-- acadion -->
                            <div class="accordion grey-background res-991-mt-30">
                                <!-- toggle -->
                                <div class="toggle">
                                    <div class="toggle-title">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne"  @click="display('collapseOneData')" :class="{ active: this.menu.collapseOneData}" >What does having Managed your services provider?</a>
                                    </div>
                                    <div :class="{ block: this.menu.collapseOneData }" class="toggle-content" >
                                        <div class="row">
                                            <div class="col-sm-12">
                                                <p class="mb-0"> Yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy  yyyyyyyyyyyyy</p>
                                            </div>
                                        </div>
                                    </div>
                                </div><!-- toggle end -->



                                 <!-- toggle -->
                                <div class="toggle">
                                    <div class="toggle-title">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne"  @click="display('collapseTwoData')" :class="{ active: this.menu.collapseTwoData}" >What does having Managed your services provider?</a>
                                    </div>
                                    <div :class="{ block: this.menu.collapseTwoData }" class="toggle-content" >
                                        <div class="row">
                                            <div class="col-sm-12">
                                                <p class="mb-0"> Yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy  yyyyyyyyyyyyy</p>
                                            </div>
                                        </div>
                                    </div>
                                </div><!-- toggle end -->

                                
                            </div><!-- acadion  end-->
                        </div>
                    </div>
                    <!-- row end -->
                </div>
            </section>
            <!-- services-section end -->
           

           
      </div>



   </app-master>
</template>

<script>
// @ is an alias to /src
import Master from "@/components/Master.vue";
import BreadCrumb from "@/components/BreadCrumb.vue";
import {  seo } from "../Repositories/seo.js"

export default {
  name: "Faq",
  mixins : [seo],
  components: {
    "app-master" : Master,
    "app-breadcrumb": BreadCrumb
  },
  data() {
      return {
          menu: {
            collapseOneData: false,
            collapseTwoData: false,
            collapseThreeata: false
          }
      }

  },
  methods: {
      display(val){
          let x = this;
          let obj = x.menu;

          for(var key in obj){
              if(obj.hasOwnProperty(key)){

                  if(key == val){
                      obj[key] = !obj[key];
                  }else{
                      obj[key] = false;

                  }

              }
          }

        //   if(val == 'collapseOne'){
        //       this.collapseOneData = !this.collapseOneData;
        //       this.collapseTwoData = false;
        //   }
        //   if(val == 'collapseTwo'){
        //       this.collapseOneData = false;
        //       this.collapseTwoData = !this.collapseTwoData;
        //   }
      }
  },


  created(){
      this.seoMetaData('Frequently Ask Questions' , ' ');
      this.display("collapseOneData");
  }
};
</script>


<style>
 .block{
     display: block!important;
 }

</style>
