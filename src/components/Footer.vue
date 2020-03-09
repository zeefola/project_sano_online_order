<template>
  <!--footer start-->
        <footer class="footer widget-footer clearfix">
            <div class="first-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="cta_wrapper">
                                <div class="ttm-quicklink-box">
                                   <div class="ttm-leftlink-box">
                                       <h5 class="custom-heading"><a href="#"> <span class="ti ti-arrow-circle-left ttm-arrow-box"></span> Find Our Nearest Shop</a></h5>
                                       <i class="flaticon flaticon-house ttm-textcolor-skincolor"></i>
                                  </div>    
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="ttm-custom-ctabox">
                                <div class="cta-bg-icon"><span class="flaticon-support"></span></div>
                                <h3 class="ttm-cta-heading ttm-textcolor-skincolor">Call Us On</h3>
                                <h5 class="ttm-cta-content">+234 812 262 7008</h5>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="cta_wrapper">
                                <div class="ttm-quicklink-box">
                                   <div class="ttm-rightlink-box">
                                        <i class="flaticon flaticon-support ttm-textcolor-skincolor"></i>
                                        <h5 class="custom-heading">Help Center <span class="ti ti-arrow-circle-right ttm-arrow-box"></span></a></h5>
                                  </div>    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="second-footer ttm-textcolor-white">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-3 widget-area">
                            <div class="widget widget_text  clearfix">
                                <h3 class="widget-title"> About Nardus</h3>
                                <div class="">
                                    <p>Nardus is the next big name in the essential oils industry. We blaze the trail as the leading local supplier of essential oils in Nigeria, poised to meet the dynamic demands of the global market.</p>
                                    <hr>
                                    <!-- <a class="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline ttm-icon-btn-right" href="#">Find Us On Map  <i class="ti ti-arrow-circle-right"></i></a> -->
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-3 widget-area">
                            <div class="widget link-widget clearfix">
                               <h3 class="widget-title">Useful Links</h3>
                                <ul id="menu-footer-services">
                                    <router-link tag="li" to="/about"><a> About </a></router-link>
                                    <router-link to="/faq" tag="li"> <a>  Faq </a> </router-link>
                                    <router-link to="/shop" tag="li"> <a> Shop </a> </router-link>
                                    <router-link to="/contact" tag="li"><a> Contact Us </a></router-link>
                                </ul>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-3 widget-area">
                            <div class="widget widget_text clearfix">
                                <h3 class="widget-title">Recent News</h3>
                                <ul class="widget-post ttm-recent-post-list">
                                    <li>
                                        <a href="single-blog.html"><img src="https://via.placeholder.com/150X150/444444.jpg" alt="post-img"></a>
                                        <span class="post-date"><i class="fa fa-calendar"></i>May 01, 2019</span>
                                        <a href="single-blog.html">Outdoor Vintage Flower Garden Decor</a>
                                    </li>
                                    <li>
                                        <a href="single-blog.html"><img src="https://via.placeholder.com/150X150/444444.jpg" alt="post-img"></a>
                                        <span class="post-date"><i class="fa fa-calendar"></i>May 03, 2019</span>
                                        <a href="single-blog.html">Grow Your Own Yard Garden For Better Life</a>
                                    </li>
                                    <li>
                                        <a href="single-blog.html"><img src="https://via.placeholder.com/150X150/444444.jpg" alt="post-img"></a>
                                        <span class="post-date"><i class="fa fa-calendar"></i>May 05, 2019</span>
                                        <a href="single-blog.html">Rural Infrastructure for Great Agriculture</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-3 widget-area">
                            <div class="widget contact-widget">
                                <h3 class="widget-title">Get in touch</h3>      
                                <ul class="contact-widget-wrapper">
                                    <li><i class="fa fa-map-marker"></i>18 Udi street, Wema Terrace <br> Osborne Foreshore, Ikoyi</li>
                                    <li><i class="fa fa-phone"></i> (234) 906-282-2260 </li>
                                    <li><i class="fa fa-envelope-o"></i><a href="mailto:info@nardus.ng" target="_blank">info@nardus.ng</a></li>
                                </ul>
                                <div class="social-icons circle social-hover">
                                    <ul class="list-inline">
                                        <li class="social-facebook"><a class="tooltip-top" target="_blank" href="#" data-tooltip="Facebook"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                        <li class="social-twitter"><a class="tooltip-top" target="_blank" href="https://twitter.com/nardusltd" data-tooltip="Twitter"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                        <li class="social-instagram"><a class=" tooltip-top" target="_blank" href="https://www.instagram.com/nardusltd/" data-tooltip="instagram"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bottom-footer-text ttm-textcolor-white">
                <div class="container">
                    <div class="row copyright">
                        <div class="col-md-12">
                            <div class="text-center">
                                <span>Copyright © 2020&nbsp;<a href="#">Nardus</a> All Right Reserved </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <!--footer end-->

</template>

<script>
export default {
  name: "Footer",
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>



