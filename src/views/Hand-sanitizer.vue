<template>
   <app-master>

    <div slot='breadcrumb'>
        <app-breadcrumb>
             <div class="title-box text-left">
                <div class="page-title-heading">
                    <h1 class="title">Hand Sanitizer </h1>
                </div><!-- /.page-title-captions -->
                <div class="breadcrumb-wrapper">
                    <span>
                        <router-link to="/" tag="a" > <i class="ti ti-home"></i>&nbsp;&nbsp;Home </router-link>
                    </span>
                    <span class="ttm-bread-sep ttm-textcolor-white">&nbsp;   →  &nbsp;</span>
                    <span class="ttm-textcolor-skincolor">Hand Sanitizer</span>
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
                                    <img style="height:400px; width:100%;" src="/img/sanii.jpg" alt="single-img-nine">
                                </div>
                                <div class="ttm-service-description">
                                    <h4>Hand Sanitizer</h4>
                                    <p>Hand sanitizer is often an alcohol-based gelatinous solution that’s effective against harmful agents which have the potential of getting into our bodies through our hands. While the regular cleaning of the hands with soap and water is advised in order to diminish the risk of infection, alcohol-based formulations, oftentimes, are preferred in the healthcare setting.</p>
                                    <p class="mb-30">There’s nothing that prevents against germs and infections better than maintaining proper hygiene. And it starts with your hands. Given the recent spate of infections traversing the globe like a promulgated law, it becomes imperative to always make effort to protect oneself with the most potent hand sanitizer one could lay hands on. That is why we offer you Nardus hand sanitizer.</p>
                                    <h4>Why is Nardus Hand Sanitizer the best?</h4>
                                   <p>Made with lemongrass essential oil blended with other organic powerful disinfecting agents, it is not hard to fathom how drastically our hand sanitizing solution could prevent the risk of infection, while improving the cosmetic effect of your skin. </p>
                                </div>
                                <hr>
                                    <router-link to="#" tag="a" class="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline ttm-icon-btn-right"> Visit Product Page For More Information <i class="ti ti-angle-double-right"></i> </router-link>
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
  name: "Hand Sanitizer",
  mixins : [seo] ,
  components: {
    "app-master" : Master,
    "app-breadcrumb": BreadCrumb
  },

  created(){
      this.seoMetaData('Hand Sanitizer' , ' ');
  }
};
</script>
