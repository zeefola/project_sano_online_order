<template>
   <app-master>

    <div slot='breadcrumb'>
        <app-breadcrumb>
             <div class="title-box text-left">
                <div class="page-title-heading">
                    <h1 class="title">Essential Oils </h1>
                </div><!-- /.page-title-captions -->
                <div class="breadcrumb-wrapper">
                    <span>
                        <router-link to="/" tag="a" > <i class="ti ti-home"></i>&nbsp;&nbsp;Home </router-link>
                    </span>
                    <span class="ttm-bread-sep ttm-textcolor-white">&nbsp;   →  &nbsp;</span>
                    <span class="ttm-textcolor-skincolor">Essential Oils</span>
                </div>  
            </div>
        </app-breadcrumb>
    </div>



      <div slot="main-content">
            <!--site-main start-->
        <div class="site-main">
            <!-- sidebar -->
            <div class="sidebar ttm-sidebar ttm-bgcolor-white clearfix">
                <div class="container">
                    <!-- row -->
                    <div class="row">
                        <div class="col-lg-9 content-area order-lg-2">
                            <!-- ttm-service-single-content-are -->
                            <!-- ttm-service-single-content-are -->
                            <div class="ttm-service-single-content-area">
                                <div class="ttm_single_image-wrapper mb-35">
                                    <img style="height:400px; width:100%;" src="/img/ser.jpg" alt="single-img-nine">
                                </div>
                                <div class="ttm-service-description">
                                    <h4>Essential Oils</h4>
                                    <p class="mb-30">As humans we have used traditional methods to medicate ourselves for ages, and essential oils are an important part of the regimen. Used mainly in aromatherapy, the healing properties of essential oils support physical and mental wellbeing, and their importance is recognised in the medical field.</p>
                                    <h4>What are Essential Oils?</h4>
                                   <p>Essential oils are extracts of hydrophobic compounds found in plants—trapped as molecules in tiny pockets of the leaf, flower, fruit rind, or tree bark of plants. Each oil extract has a unique aromatic compound which gives the oil its distinctive qualities.</p>
                                   <p>Oils from plants are typically extracted through steam (or water) distillation. However, extraction of some oils is best done through a mechanical process called cold pressing—for example, oils drawn from the rind of citrus fruits.</p>
                                   <p>Essential oils are normally not formulated for ingestion, except in cases where a specific area of concern is targeted. Their major use is in aromatherapy, in which they are inhaled and absorbed through various methods. This extraction process allows the essential oils to retain the natural flavours, aromas, and healing properties of the plant. </p>
                                </div>
                            
                                <div class="row">
                                    <div class="col-md-6">
                                        <h4>What is Aromatherapy?</h4>
                                        <p>Also known as essential oil therapy, the practice involves an all-inclusive approach to improving physical and mental health with the use of fragrant natural plant essentials. Aromatherapy has been demonstrated to be a viable approach to healing and healthy living. It is considered a science, as much as it is an art.</p>
                                    <hr>
                                    <router-link to="#" tag="a" class="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline ttm-icon-btn-right"> Visit Our Product Line Of Essential Oils <i class="ti ti-angle-double-right"></i> </router-link>
                                    </div>
                                    <div class="col-md-6">
                                        <h4>Medical benefits of essential oils</h4>
                                        <!-- <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p> -->
                                        <div class="mt-10">
                                            <ul class="ttm-list ttm-list-style-icon">
                                                <li><i class="fa fa-check-circle-o ttm-textcolor-skincolor"></i><span class="ttm-list-li-content">Taking in the scents essential oils exude can rouse areas of your limbic system, which is a set of neural functions that affect emotion, behaviour, and olfactory and cognitive processes.</span></li>
                                                <li><i class="fa fa-check-circle-o ttm-textcolor-skincolor"></i><span class="ttm-list-li-content">When inhaled, diffused, or used as a therapeutic massage oil, it uplifts both body and mind by improving your energy levels and mental acuity. It instantly soothes the mind and creates a positive emotional state that eases away anxiety and stress. Most essential oils have antimicrobial, antiseptic, anti-carcinogenic, antibacterial, antifungal, and anti-inflammatory benefits.</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            

                            </div>
                            <!-- ttm-service-single-content-are end -->
                        </div>
                        <div class="col-lg-3 widget-area">
                            <aside class="widget widget-nav-menu">
                                <ul class="widget-menu">
                                     <li class="active"> <router-link to="/essential-oils" tag="a"> Essential Oils </router-link> </li>
                                    <li> <router-link to="/hand-sanitizer" tag="a"> Hand Sanitizer </router-link> </li>
                                    <li> <router-link to="/hydrosol" tag="a"> Hydrosol </router-link> </li>
                                </ul>
                            </aside>
                            <!-- <aside class="widget widget_media_image">
                                <div class="banner-img-box ttm-textcolor-white text-left">
                                    <div class="featured-content featured-content-banner">
                                        <i class="flaticon flaticon-call"></i>
                                        <div class="featured-title ttm-box-title">
                                            <h5>How Can We Help?</h5>
                                        </div>
                                        <div class="featured-desc">
                                            <p>If you need any help, please<br> feel free to contact us.</p>
                                        </div>
                                        <ul>
                                            <li><i class="fa fa-phone"></i>+1234567890</li>
                                            <li><i class="fa fa-envelope-o"></i><a href="mailto:info@example.com">info@example.com</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </aside> -->
                            <!-- <aside class="widget widget-download">
                                <ul class="download">
                                    <li>
                                        <i class="fa fa-file-pdf-o"></i>
                                        <a href="#" title="Download">Download.pdf</a>
                                    </li>
                                    <li>
                                        <i class="fa fa-file-word-o"></i>
                                        <a href="#" title="Download">Our ISO Certificate</a>
                                    </li>
                                    <li>
                                        <i class="fa fa-files-o"></i>
                                        <a href="#" title="Download">Download.txt</a>
                                    </li>
                                </ul>
                            </aside> -->
                            <aside class="widget contact-widget">
                                <h3 class="widget-title">Get in touch</h3>      
                                <ul class="contact-widget-wrapper">
                                    <li><i class="fa fa-map-marker"></i>18 Udi street, Wema Terrace <br>
Osborne Foreshore, Ikoyi</li>
                                    <li><i class="fa fa-envelope-o"></i><a href="mailto:info@nardus.ng" target="_blank">info@nardus.ng</a></li>
                                    <li><i class="fa fa-phone"></i>(+234) 906 282 2260</li>
                                    <li><i class="ti ti-alarm-clock"></i>Mon to Fri - 8:00am to 5:00pm (Sunday Closed)</li>
                                </ul>
                            </aside>
                        </div>
                    </div><!-- row end -->
                </div>
            </div>
            <!-- sidebar end -->
        </div><!--site-main end-->

      </div>



   </app-master>
</template>

<script>
// @ is an alias to /src
import Master from "@/components/Master.vue";
import BreadCrumb from "@/components/BreadCrumb.vue";
import { seo } from "../Repositories/seo.js"
export default {
  name: "Essential Oils",
  mixins : [seo] ,
  components: {
    "app-master" : Master,
    "app-breadcrumb": BreadCrumb
  },

  created(){
      this.seoMetaData('Essential Oils' , ' ');
  }
};
</script>
