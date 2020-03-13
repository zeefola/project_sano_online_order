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
                        <div class="col-lg-6"  >
                            <!-- ttm_single_image-wrapper -->
                            <div class="ttm_single_image-wrapper">
                                <img class="img-fluid" src="/img/question.jpg" title="single-img-eight" alt="single-img-eight">
                            </div><!-- ttm_single_image-wrapper end -->
                            <!-- <div class="ttm-play-icon-btn ttm-play-icon-btn-center">
                                <div class="ttm-play-icon-animation">
                                    <a href="https://youtu.be/7e90gBu4pas" target="_self" class="ttm_prettyphoto">
                                        <div class="ttm-icon ttm-icon_element-bgcolor-skincolor ttm-icon_element-size-md ttm-icon_element-style-round">
                                            <i class="ti ti-control-play"></i>
                                        </div>
                                    </a>
                                </div>
                            </div> -->
                        </div>
                        <div class="col-lg-6">
                            <!-- acadion -->
                            <div class="accordion grey-background res-991-mt-30">
                                <!-- toggle -->
                                <div class="toggle">
                                    <div class="toggle-title">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne"  @click="display('collapseOneData')" :class="{ active: this.menu.collapseOneData}" >What are the real health benefits of lemongrass?</a>
                                    </div>
                                    <div :class="{ block: this.menu.collapseOneData }" class="toggle-content" >
                                        <div class="row">
                                            <div class="col-sm-12">
                                                <p class="mb-0"> Lemongrass is versatile. Its essential oil possesses many therapeutic properties. Lemongrass essential oil improves muscle and joint pain, and inflammation, as well as toothaches and headaches. It has an uplifting aroma which reduces depression, boosts self-esteem, confidence, hope, and mental strength. It has a broad spectrum of effects against microbial growth in the organ systems, and may combat body odour and skin diseases.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div><!-- toggle end -->

                                 <!-- toggle -->
                                <div class="toggle">
                                    <div class="toggle-title">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne"  @click="display('collapseTwoData')" :class="{ active: this.menu.collapseTwoData}" >How do you use lemongrass oil?</a>
                                    </div>
                                    <div :class="{ block: this.menu.collapseTwoData }" class="toggle-content" >
                                        <div class="row">
                                            <div class="col-sm-12">
                                                <p class="mb-0"> Lemongrass oil is applied topically. Because lemongrass essential oil is highly concentrated, it should not be used directly on the skin. For use in aromatherapy, you can inhale lemongrass oil directly. Add a few drops of lemongrass oil into carrier oil of your choice, then mix into a warm bath or massage into skin.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div><!-- toggle end -->

                                <!-- toggle -->
                                <div class="toggle">
                                    <div class="toggle-title">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne"  @click="display('collapseThreeData')" :class="{ active: this.menu.collapseThreeData}" >Can I use lemongrass oil on my sensitive skin?</a>
                                    </div>
                                    <div :class="{ block: this.menu.collapseThreeData }" class="toggle-content" >
                                        <div class="row">
                                            <div class="col-sm-12">
                                                <p class="mb-0"> Lemongrass oil works effectively for all skin types, as an antiseptic and astringent. It is ideal for achieving even, glowing skin. Regular use of lemongrass oil will strengthen your skin tissues, cleanse your pores, and act as a natural toner. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div><!-- toggle end -->

                                <!-- toggle -->
                                <div class="toggle">
                                    <div class="toggle-title">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne"  @click="display('collapseFourData')" :class="{ active: this.menu.collapseFourData}" >Can I ingest lemongrass oil or add to food?</a>
                                    </div>
                                    <div :class="{ block: this.menu.collapseFourData }" class="toggle-content" >
                                        <div class="row">
                                            <div class="col-sm-12">
                                                <p class="mb-0"> Unlike lemongrass infusions made by boiling the leaves in water, lemongrass oil is not edible. Do not swallow, or add to food or beverages. It is meant for cosmetic use. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div><!-- toggle end -->

                                <!-- toggle -->
                                <div class="toggle">
                                    <div class="toggle-title">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne"  @click="display('collapseFiveData')" :class="{ active: this.menu.collapseFiveData}" >How do I guarantee the authenticity of your lemongrass products?</a>
                                    </div>
                                    <div :class="{ block: this.menu.collapseFiveData }" class="toggle-content" >
                                        <div class="row">
                                            <div class="col-sm-12">
                                                <p class="mb-0"> Our lemongrass line of products is created through the most ethical industry standards, and endorsed for quality by the appropriate local standards regulation agencies.  </p>
                                            </div>
                                        </div>
                                    </div>
                                </div><!-- toggle end -->

                                <!-- toggle -->
                                <div class="toggle">
                                    <div class="toggle-title">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne"  @click="display('collapseSixData')" :class="{ active: this.menu.collapseSixData}" >Where are Nardus lemongrass products made?</a>
                                    </div>
                                    <div :class="{ block: this.menu.collapseSixData }" class="toggle-content" >
                                        <div class="row">
                                            <div class="col-sm-12">
                                                <p class="mb-0"> Our lemongrass is locally sourced from the best specimens to ensure superior quality and consistency. Growing and processing our products locally is part of our long-term goals to revive the Agriculture sector. </p>
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
            collapseThreeData: false,
            collapseFourData: false,
            collapseFiveData: false,
            collapseSixData: false
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
