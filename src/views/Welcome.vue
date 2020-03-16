<template>
   <app-master>

     <div slot='slider'>
        <vueper-slides>
  <vueper-slide v-for="(slide, i) in slides" :key="i" :title="slide.title" :content="slide.content" />
</vueper-slides>
     </div>

    

      <div slot="main-content">
           <!-- aboutus-section -->
            <section class="ttm-row first-about-section bg-img1 clearfix">
                <div class="container">
                    <div class="row"><!-- row -->
                        <div class="col-lg-5">
                            <!-- ttm_single_image-wrapper -->
                            <div class="ttm_single_image-wrapper mr_95 res-991-mr-0 position-relative z-1 res-991-center">
                                <img class="img-fluid" src="/img/essential.jpg" title="single-img-one" alt="single-img-one">
                            </div><!-- ttm_single_image-wrapper end -->
                            <!-- <div class="ttm-play-icon-btn ttm-play-icon-btn-center style1">
                                <a href="https://youtu.be/7e90gBu4pas" target="_self" class="ttm_prettyphoto">
                                    <div class="ttm-icon ttm-icon_element-color-white ttm-icon_element-size-md z-1">
                                        <i class="flaticon flaticon-play-button-1"></i>
                                    </div>
                                </a>
                            </div> -->
                        </div>
                        <div class="col-lg-7">
                            <div class="spacing-1 ttm-bgcolor-white bordertop-12px-solid skincolor-border">
                                <!-- section title -->
                                <div class="section-title clearfix">
                                    <div class="title-header">
                                        <h5>About essential oils</h5>
                                        <h2 class="title">Pure Aroma From Nature.</h2>
                                    </div>
                                    <div class="heading-seperator">
                                        <span></span>
                                    </div>
                                </div><!-- section title end -->
                                <p>Experience the pure potency of a natural essential oil derived through the most ethical extraction process. </p>
                                <p>Incorporating a myriad of properties that the world is yet to fully discover, our pure essential oils is the quintessential topical solution that helps improve your quality of life.</p>
                                <div class="row no-gutters">
                                    <div class="col-md-6 col-lg-6 col-sm-6">
                                        <!--  featured-icon-box --> 
                                        <div class="featured-icon-box style1 left-icon icon-align-top">
                                            <div class="featured-icon"><!--  featured-icon --> 
                                                <div class="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-md">
                                                    <i class="flaticon flaticon-mill"></i><!--  ttm-icon --> 
                                                </div>
                                            </div>
                                            <div class="featured-content"><!--  featured-content -->
                                                <div class="featured-title"><!--  featured-title -->
                                                    <h5>Spa</h5>
                                                </div>
                                            </div>
                                        </div><!--  featured-icon-box END -->
                                    </div>
                                    <div class="col-md-6 col-lg-6 col-sm-6">
                                        <!--  featured-icon-box --> 
                                        <div class="featured-icon-box style1 left-icon icon-align-top">
                                            <div class="featured-icon"><!--  featured-icon --> 
                                                <div class="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-md">
                                                    <i class="flaticon flaticon-agriculture"></i><!--  ttm-icon --> 
                                                </div>
                                            </div>
                                            <div class="featured-content"><!--  featured-content -->
                                                <div class="featured-title"><!--  featured-title -->
                                                    <h5>Massage</h5>
                                                </div>
                                            </div>
                                        </div><!--  featured-icon-box END -->
                                    </div>
                                    <div class="col-md-6 col-lg-6 col-sm-6">
                                        <!--  featured-icon-box --> 
                                        <div class="featured-icon-box style1 left-icon icon-align-top">
                                            <div class="featured-icon"><!--  featured-icon --> 
                                                <div class="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-md">
                                                    <i class="flaticon flaticon-agronomy"></i><!--  ttm-icon --> 
                                                </div>
                                            </div>
                                            <div class="featured-content"><!--  featured-content -->
                                                <div class="featured-title"><!--  featured-title -->
                                                    <h5>Fragrance</h5>
                                                </div>
                                            </div>
                                        </div><!--  featured-icon-box END -->
                                    </div>
                                    <div class="col-md-6 col-lg-6 col-sm-6">
                                        <!--  featured-icon-box --> 
                                        <div class="featured-icon-box style1 left-icon icon-align-top">
                                            <div class="featured-icon"><!--  featured-icon --> 
                                                <div class="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-md">
                                                    <i class="flaticon flaticon-field-1"></i><!--  ttm-icon --> 
                                                </div>
                                            </div>
                                            <div class="featured-content"><!--  featured-content -->
                                                <div class="featured-title"><!--  featured-title -->
                                                    <h5>Flavour</h5>
                                                </div>
                                            </div>
                                        </div><!--  featured-icon-box END -->
                                    </div>
                                </div>
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
                                                    <h5>+234 906-282-2260</h5>
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

            <!-- services-section -->
            <section class="ttm-row zero-padding-section mt_85 res-991-mt-0 clearfix">
                <div class="container">
                    <div class="row ttm-bgcolor-skincolor featured-icon-box-style2-row m-0"><!-- row -->
                        <div class="col-lg-4">
                            <!--  featured-icon-box --> 
                            <div class="featured-icon-box left-icon style2 ttm-bgcolor-white">
                                <div class="featured-icon"><!--  featured-icon --> 
                                    <div class="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                                        <i class="flaticon flaticon-trees"></i><!--  ttm-icon --> 
                                    </div>
                                </div>
                                <div class="featured-content"><!--  featured-content -->
                                    <div class="featured-title"><!--  featured-title -->
                                        <h5>Essential Oils Production   </h5>
                                    </div>
                                    <div class="featured-desc"><!--  featured-desc -->
                                        <p>Aromatherapy</p>
                                    </div>
                                </div>
                            </div><!--  featured-icon-box END -->
                        </div>
                        <div class="col-lg-4">
                            <!--  featured-icon-box --> 
                            <div class="featured-icon-box left-icon style2 ttm-bgcolor-white res-991-mt-20">
                                <div class="featured-icon"><!--  featured-icon --> 
                                    <div class="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                                        <i class="flaticon flaticon-sprinkler"></i><!--  ttm-icon --> 
                                    </div>
                                </div>
                                <div class="featured-content"><!--  featured-content -->
                                    <div class="featured-title"><!--  featured-title -->
                                        <h5>Flavour Formulation</h5>
                                    </div>
                                    <div class="featured-desc"><!--  featured-desc -->
                                        <p>Gourmet Flavors</p>
                                    </div>
                                </div>
                            </div><!--  featured-icon-box END -->
                        </div>
                        <div class="col-lg-4">
                            <!--  featured-icon-box --> 
                            <div class="featured-icon-box left-icon style2 ttm-bgcolor-white res-991-mt-20">
                                <div class="featured-icon"><!--  featured-icon --> 
                                    <div class="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                                        <i class="ti ti-cup"></i><!--  ttm-icon --> 
                                    </div>
                                </div>
                                <div class="featured-content"><!--  featured-content -->
                                    <div class="featured-title"><!--  featured-title -->
                                        <h5>Fragrance Customisation</h5>
                                    </div>
                                    <div class="featured-desc"><!--  featured-desc -->
                                        <p>Oriental Scents</p>
                                    </div>
                                </div>
                            </div><!--  featured-icon-box END -->
                        </div>
                    </div>
                    <!-- row end -->
                </div>
            </section>
            <!-- services-section end -->

            <!-- row-title-section -->
            <section class="ttm-row first-row-title-section bg-img2 clearfix">
                <div class="container">
                    <div class="row"><!-- row -->
                        <div class="col-lg-8 offset-lg-2">
                            <div class="text-center">
                                <div class="featured-icon"><!--  featured-icon --> 
                                    <div class="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-lg mb-0">
                                        <i class="flaticon flaticon-farmer fs-60"></i><!--  ttm-icon --> 
                                    </div>
                                </div>
                                <!-- section-title -->
                                <div class="section-title row-title clearfix">
                                    <div class="title-header">
                                        <h5 class="mb-10">ABOUT ESSENTIAL OILS</h5>
                                        <h2 class="title fw-700 mb-5"> Pure Aroma From Nature </h2>
                                        <!-- <h2 class="title font-weight-normal"> Solution Of Eco Environment </h2> -->
                                    </div>
                                </div><!-- section-title end -->
                                <router-link to="/about" tag="a" class="ttm-btn ttm-btn-size-md ttm-btn-bgcolor-darkgrey mt-20 mr-10"> About Nardus </router-link>
                                <router-link to="/services" tag="a" class="ttm-btn ttm-btn-size-md ttm-btn-bgcolor-skincolor mt-20">Our Services </router-link>
                                <!-- <a href="#" class="ttm-btn ttm-btn-size-md ttm-btn-bgcolor-darkgrey mt-20 mr-10"> About Agrotek</a>
                                <a href="#" class="ttm-btn ttm-btn-size-md ttm-btn-bgcolor-skincolor mt-20"> Our Services</a> -->
                            </div>
                        </div>
                    </div><!-- row -->
                </div>
            </section>
            <!-- row-title-section -->

            <!-- row-title-section -->
            <section class="ttm-row first-services-section ttm-bgcolor-grey clearfix">
                <div class="container">
                    <div class="row"><!-- row -->
                        <div class="col-lg-4">
                            <div class="res-991-mb-30">
                                <!-- section title -->
                                <div class="section-title clearfix">
                                    <div class="title-header">
                                        <h5>WHAT WE OFFER</h5>
                                        <!-- <h2 class="title">Independently owned & operated</h2> -->
                                    </div>
                                    <div class="heading-seperator">
                                        <span></span>
                                    </div>
                                </div><!-- section title end -->
                                <p>Awaken your sixth sense with our 100% natural essential oil! Nardus essential oil contains nothing else but natural essential oils extracted through a rigorous steam distillation and purification process which allows it to retain most of its natural terpenes.</p>
                                <div class="mt-25">
                                    <ul class="ttm-list ttm-list-style-icon">
                                        <li><i class="fa fa-check-circle-o ttm-textcolor-skincolor"></i><span class="ttm-list-li-content">Nardus lemongrass essential oil has been discovered to have a high citral content ranging more than 75% enhancing its aromatherapy, massage, and fragrance usage.</span></li>
                                        <li><i class="fa fa-check-circle-o ttm-textcolor-skincolor"></i><span class="ttm-list-li-content">Nardus turmeric oil has been discovered to also have a high cur['[cumin level thereby enhancing its benefits as an antibacterial and antifungal agent which also helps revitalise the skin.</span></li>
                                        <!-- <li><i class="fa fa-check-circle-o ttm-textcolor-skincolor"></i><span class="ttm-list-li-content">Avoids a pain that produces resultant</span></li> -->
                                    </ul>
                                </div>
                                <!-- <a class="ttm-btn ttm-btn-size-sm ttm-btn-color-darkgrey btn-inline ttm-icon-btn-right mt-15" href="#">Learn More <i class="ti ti-angle-right"></i></a> -->
                            </div>
                        </div>
                        <div class="col-lg-8">
                            <div class="row">
                                <div class="col-md-6">
                                    <!--  featured-icon-box --> 
                                    <div class="featured-icon-box left-icon icon-align-top style3 ttm-bgcolor-white">
                                        <div class="featured-icon"><!--  featured-icon --> 
                                            <div class="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                                                <i class="flaticon flaticon-agriculture"></i><!--  ttm-icon --> 
                                            </div>
                                        </div>
                                        <div class="featured-content"><!--  featured-content -->
                                            <div class="featured-title"><!--  featured-title -->
                                                <h5 class="mb-5">Natural Essential Oils</h5>
                                            </div>
                                            <div class="featured-desc"><!--  featured-desc -->
                                                <p>A wide selection of essential oils ideal for aromatherapy and food</p>
                                            </div>
                                            <a class="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline ttm-icon-btn-right mt-15" href="#">Learn More <i class="fa fa-chevron-right"></i></a>
                                        </div>
                                    </div><!--  featured-icon-box END -->
                                </div>
                                <div class="col-md-6">
                                    <!--  featured-icon-box --> 
                                    <div class="featured-icon-box left-icon icon-align-top style3 ttm-bgcolor-white">
                                        <div class="featured-icon"><!--  featured-icon --> 
                                            <div class="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                                                <i class="flaticon flaticon-plant"></i><!--  ttm-icon --> 
                                            </div>
                                        </div>
                                        <div class="featured-content"><!--  featured-content -->
                                            <div class="featured-title"><!--  featured-title -->
                                                <h5 class="mb-5">Bath & Body</h5>
                                            </div>
                                            <div class="featured-desc"><!--  featured-desc -->
                                                <p>Essential oils can be added to bath or applied to skin</p>
                                            </div>
                                            <a class="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline ttm-icon-btn-right mt-15" href="#">Learn More <i class="fa fa-chevron-right"></i></a>
                                        </div>
                                    </div><!--  featured-icon-box END -->
                                </div>
                                <div class="col-md-6">
                                    <!--  featured-icon-box --> 
                                    <div class="featured-icon-box left-icon icon-align-top style3 ttm-bgcolor-white">
                                        <div class="featured-icon"><!--  featured-icon --> 
                                            <div class="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                                                <i class="flaticon flaticon-house"></i><!--  ttm-icon --> 
                                            </div>
                                        </div>
                                        <div class="featured-content"><!--  featured-content -->
                                            <div class="featured-title"><!--  featured-title -->
                                                <h5 class="mb-5">Household</h5>
                                            </div>
                                            <div class="featured-desc"><!--  featured-desc -->
                                                <p>Maintain proper hygiene in the home in a natural way</p>
                                            </div>
                                            <a class="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline ttm-icon-btn-right mt-15" href="#">Learn More <i class="fa fa-chevron-right"></i></a>
                                        </div>
                                    </div><!--  featured-icon-box END -->
                                </div>
                                <div class="col-md-6">
                                    <!--  featured-icon-box --> 
                                    <div class="featured-icon-box left-icon icon-align-top style3 ttm-bgcolor-white">
                                        <div class="featured-icon"><!--  featured-icon --> 
                                            <div class="ttm-icon ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                                                <i class="flaticon flaticon-sprinkler"></i><!--  ttm-icon --> 
                                            </div>
                                        </div>
                                        <div class="featured-content"><!--  featured-content -->
                                            <div class="featured-title"><!--  featured-title -->
                                                <h5 class="mb-5">Flavor</h5>
                                            </div>
                                            <div class="featured-desc"><!--  featured-desc -->
                                                <p>Organic spices for top of the class flavouring</p>
                                            </div>
                                            <a class="ttm-btn ttm-btn-size-sm ttm-btn-color-skincolor btn-inline ttm-icon-btn-right mt-15" href="#">Learn More <i class="fa fa-chevron-right"></i></a>
                                        </div>
                                    </div><!--  featured-icon-box END -->
                                </div>
                            </div>
                        </div>
                    </div><!-- row -->
                </div>
            </section>
            <!-- row-title-section -->

            <!-- progress-section -->
            <section class="ttm-row zero-padding-section position-relative z-1 clearfix">
                <div class="container">
                    <div class="row no-gutters"><!-- row -->
                        <div class="col-lg-6">
                            <!-- col-img-img-one -->
                            <div class="col-bg-img-one ttm-col-bgimage-yes ttm-bg ttm-col-bgcolor-yes ttm-bgcolor-darkgrey ttm-left-span">
                                <div class="ttm-col-wrapper-bg-layer ttm-bg-layer">
                                    <div class="ttm-bg-layer-inner"></div>
                                </div>
                                <div class="layer-content">
                                    <div class="spacing-2 ">
                                        <!-- section title -->
                                        <div class="section-title clearfix">
                                            <div class="title-header">
                                                <h5>Why Choose Us?</h5>
                                                <!-- <h2 class="title">Our Vegan has 35 year experience in Agriculture</h2> -->
                                            </div>
                                            <div class="heading-seperator">
                                                <span></span>
                                            </div>
                                        </div><!-- section title end -->
                                        <p>We operate in a challenging and highly competitive environment, but we are distinguished by high level of professionalism, integrity and tact. Our facility is complete with stainless steel tanks and filtration facilities for packaging and blending.</p>
                                        <div class="section-title clearfix">
                                            <div class="title-header">
                                                <h5>Objectives</h5>
                                            </div>
                                            <div class="heading-seperator">
                                                <span></span>
                                            </div>
                                        </div>
                                        <!-- <div class="mt-40"> -->
                                            <!-- progress-bar -->
                                            <div class="ttm-progress-bar" data-percent="90%">
                                                <div class="progress-bar-title">To contribute to the world's needs of essential oil</div><!-- progress-bar-title -->
                                                <div class="progress-bar-inner">
                                                    <div class="progress-bar progress-bar-color-bar_skincolor"></div>
                                                </div>
                                                <!-- <div class="progress-bar-percent" data-percent="90">90%</div> -->
                                                <!-- progress-bar-percent -->
                                            </div>
                                            <!-- progress-bar END -->
                                            <!-- progress-bar -->
                                            <div class="ttm-progress-bar" data-percent="80%">
                                                <div class="progress-bar-title">To support health and wellbeing through alternative medicine from plant extracts</div><!-- progress-bar-TITLE -->
                                                <div class="progress-bar-inner">
                                                    <div class="progress-bar progress-bar-color-bar_skincolor"></div>
                                                </div>
                                                <!-- <div class="progress-bar-percent" data-percent="80">80%</div> -->
                                                <!-- progress-bar-PERCENT -->
                                            </div>
                                            <!-- progress-bar END -->
                                            <!-- progress-bar -->
                                            <div class="ttm-progress-bar" data-percent="90%">
                                                <div class="progress-bar-title">To constantly research and source new products that meet our customers growing needs.</div><!-- progress-bar-TITLE -->
                                                <div class="progress-bar-inner">
                                                    <div class="progress-bar progress-bar-color-bar_skincolor"></div>
                                                </div>
                                                <!-- <div class="progress-bar-percent" data-percent="90">90%</div> -->
                                                <!-- progress-bar-PERCENT -->
                                            </div>
                                            <!-- progress-bar END -->
                                        <!-- </div> -->
                                    </div>
                                </div>
                            </div>
                            <!-- col-img-img-one -->
                        </div>
                        <div class="col-lg-6 mt_40 mb_40 res-991-m-0">
                            <!-- col-img-img-two -->
                            <div class="col-bg-img-two ttm-col-bgimage-yes ttm-bg ttm-right-span border40-img skincolor-border res-991-d-none">
                                <div class="ttm-col-wrapper-bg-layer ttm-bg-layer">
                                </div>
                                <div class="layer-content"></div>
                            </div>
                            <!-- col-img-img-two responsive-img-->
                            <img src="/img/home.jpg" class="ttm-equal-height-image" alt="bg-image">
                        </div>
                    </div><!-- row -->
                </div>
            </section>
            <!-- progress-section -->

            <!-- portfolio-text-section -->
            <section class="ttm-row portfolio-text-section ttm-bgcolor-grey clearfix">
                <div class="container">
                    <div class="row"><!-- row -->
                        <div class="col-lg-12">
                            <!-- section title -->
                            <div class="section-title text-center clearfix">
                                <div class="title-header">
                                    <h5>RECENT COMPLETED</h5>
                                    <h2 class="title">Our Latest Products</h2>
                                </div>
                                <div class="heading-seperator">
                                    <span></span>
                                </div>
                            </div><!-- section title end -->
                        </div>
                    </div><!-- row -->
                </div>
            </section>
            <!-- portfolio-text-section -->

            <!-- portfolio-section -->
            <section class="ttm-row topzero-padding-section clearfix">
                <div class="container">
                    <div class="row multi-columns-row ttm-boxes-spacing-10px ttm-bgcolor-white mt_140"><!-- row -->
                        <div class="ttm-box-col-wrapper col-lg-4 col-md-6 col-sm-6">
                            <!-- featured-imagebox -->
                            <div class="featured-imagebox featured-imagebox-portfolio style1">
                                <div class="featured-thumbnail"><!-- featured-thumbnail-->
                                    <img class="img-fluid" src="/img/handwash.jpg" alt="image">
                                </div><!-- featured-thumbnail END-->
                                <div class="ttm-box-view-overlay"> <!-- ttm-box-view-overlay -->
                                    <div class="ttm-media-link"><!-- ttm-media-link-->
                                        <a class="ttm_prettyphoto ttm_image" data-gal="prettyPhoto[gallery1]" title="" href="/img/handwash.jpg" data-rel="prettyPhoto">
                                            <i class="ti ti-search"></i>
                                        </a>
                                    </div>
                                    <div class="featured-content"><!-- featured-content-->
                                        <div class="featured-title"><!-- featured-title-->
                                            <h5><a href="#">Hand Wash</a></h5>
                                        </div>
                                        <!-- <div class="category"> -->
                                            <!-- category -->
                                            <!-- <p>Fresh Garden</p>
                                        </div> -->
                                    </div>
                                </div><!-- ttm-box-view-overlay end-->
                            </div>
                            <!-- featured-imagebox -->
                        </div>
                        <div class="ttm-box-col-wrapper col-lg-4 col-md-6 col-sm-6">
                            <!-- featured-imagebox -->
                            <div class="featured-imagebox featured-imagebox-portfolio style1">
                                <div class="featured-thumbnail"><!-- featured-thumbnail-->
                                    <img class="img-fluid" src="/img/diffuser.jpg" alt="image">
                                </div><!-- featured-thumbnail END-->
                                <div class="ttm-box-view-overlay"> <!-- ttm-box-view-overlay -->
                                    <div class="ttm-media-link"><!-- ttm-media-link-->
                                        <a class="ttm_prettyphoto ttm_image" data-gal="prettyPhoto[gallery1]" title="" href="/img/diffuser.jpg" data-rel="prettyPhoto">
                                            <i class="ti ti-search"></i>
                                        </a>
                                    </div>
                                    <div class="featured-content"><!-- featured-content-->
                                        <div class="featured-title"><!-- featured-title-->
                                            <h5><a href="#">Diffuser</a></h5>
                                        </div>
                                        <!-- <div class="category"> -->
                                            <!-- category -->
                                            <!-- <p>Dairy Farm</p>
                                        </div> -->
                                    </div>
                                </div><!-- ttm-box-view-overlay end-->
                            </div>
                            <!-- featured-imagebox -->
                        </div>
                        <div class="ttm-box-col-wrapper col-lg-4 col-md-6 col-sm-6">
                            <!-- featured-imagebox -->
                            <div class="featured-imagebox featured-imagebox-portfolio style1">
                                <div class="featured-thumbnail"><!-- featured-thumbnail-->
                                    <img class="img-fluid" src="/img/oil.jpg" alt="image">
                                </div><!-- featured-thumbnail END-->
                                <div class="ttm-box-view-overlay"> <!-- ttm-box-view-overlay -->
                                    <div class="ttm-media-link"><!-- ttm-media-link-->
                                        <a class="ttm_prettyphoto ttm_image" data-gal="prettyPhoto[gallery1]" title="" href="/img/oil.jpg" data-rel="prettyPhoto">
                                            <i class="ti ti-search"></i>
                                        </a>
                                    </div>
                                    <div class="featured-content"><!-- featured-content-->
                                        <div class="featured-title"><!-- featured-title-->
                                            <h5><a href="#">Essential Oil</a></h5>
                                        </div>
                                        <!-- <div class="category"> -->
                                            <!-- category -->
                                            <!-- <p>Garden Care</p>
                                        </div> -->
                                    </div>
                                </div><!-- ttm-box-view-overlay end-->
                            </div>
                            <!-- featured-imagebox -->
                        </div>
                        <div class="ttm-box-col-wrapper col-lg-4 col-md-6 col-sm-6">
                            <!-- featured-imagebox -->
                            <div class="featured-imagebox featured-imagebox-portfolio style1">
                                <div class="featured-thumbnail"><!-- featured-thumbnail-->
                                    <img class="img-fluid" src="/img/hydrosol.jpg" alt="image">
                                </div><!-- featured-thumbnail END-->
                                <div class="ttm-box-view-overlay"> <!-- ttm-box-view-overlay -->
                                    <div class="ttm-media-link"><!-- ttm-media-link-->
                                        <a class="ttm_prettyphoto ttm_image" data-gal="prettyPhoto[gallery1]" title="" href="/img/hydrosol.jpg" data-rel="prettyPhoto">
                                            <i class="ti ti-search"></i>
                                        </a>
                                    </div>
                                    <div class="featured-content"><!-- featured-content-->
                                        <div class="featured-title"><!-- featured-title-->
                                            <h5><a href="#">Hydrosol</a></h5>
                                        </div>
                                        <!-- <div class="category"> -->
                                            <!-- category -->
                                            <!-- <p>Dairy Farm</p>
                                        </div> -->
                                    </div>
                                </div><!-- ttm-box-view-overlay end-->
                            </div>
                            <!-- featured-imagebox -->
                        </div>
                        <div class="ttm-box-col-wrapper col-lg-4 col-md-6 col-sm-6">
                            <!-- featured-imagebox -->
                            <div class="featured-imagebox featured-imagebox-portfolio style1">
                                <div class="featured-thumbnail"><!-- featured-thumbnail-->
                                    <img class="img-fluid" src="/img/liquid-soap.jpg" alt="image">
                                </div><!-- featured-thumbnail END-->
                                <div class="ttm-box-view-overlay"> <!-- ttm-box-view-overlay -->
                                    <div class="ttm-media-link"><!-- ttm-media-link-->
                                        <a class="ttm_prettyphoto ttm_image" data-gal="prettyPhoto[gallery1]" title="" href="/img/liquid-soap.jpg" data-rel="prettyPhoto">
                                            <i class="ti ti-search"></i>
                                        </a>
                                    </div>
                                    <div class="featured-content"><!-- featured-content-->
                                        <div class="featured-title"><!-- featured-title-->
                                            <h5><a href="#">Liquid Soap</a></h5>
                                        </div>
                                        <!-- <div class="category"> -->
                                            <!-- category -->
                                            <!-- <p>Garden Care</p>
                                        </div> -->
                                    </div>
                                </div><!-- ttm-box-view-overlay end-->
                            </div>
                            <!-- featured-imagebox -->
                        </div>
                        <div class="ttm-box-col-wrapper col-lg-4 col-md-6 col-sm-6">
                            <!-- featured-imagebox -->
                            <div class="featured-imagebox featured-imagebox-portfolio style1">
                                <div class="featured-thumbnail"><!-- featured-thumbnail-->
                                    <img class="img-fluid" src="/img/sanitizer.jpg" alt="image">
                                </div><!-- featured-thumbnail END-->
                                <div class="ttm-box-view-overlay"> <!-- ttm-box-view-overlay -->
                                    <div class="ttm-media-link"><!-- ttm-media-link-->
                                        <a class="ttm_prettyphoto ttm_image" data-gal="prettyPhoto[gallery1]" title="" href="/img/sanitizer.jpg" data-rel="prettyPhoto">
                                            <i class="ti ti-search"></i>
                                        </a>
                                    </div>
                                    <div class="featured-content"><!-- featured-content-->
                                        <div class="featured-title"><!-- featured-title-->
                                            <h5><a href="#">Hand Sanitizer</a></h5>
                                        </div>
                                        <!-- <div class="category"> -->
                                            <!-- category -->
                                            <!-- <p>Fresh Garden, Dairy Farm</p>
                                        </div> -->
                                    </div>
                                </div><!-- ttm-box-view-overlay end-->
                            </div>
                            <!-- featured-imagebox -->
                        </div>
                    </div><!-- row -->
                </div>
            </section>
            <!-- portfolio-section -->
      </div>
   </app-master>
</template>

<script>
// @ is an alias to /src
import Master from "@/components/Master.vue";
import Slider from "@/components/Slider.vue";
import {seo} from "../Repositories/seo.js";
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css'



export default {
  name: "Welcome",
  mixins: [seo],
  components: {
    VueperSlides,
     VueperSlide ,
    "app-master" : Master,
    "app-slider" : Slider,
  },
  data(){
      return {
          slides: [
    {
      title: 'Slide #1',
      content: 'Slide content.'
    }
  ]
      }
  },
  methods: {

  },
  created(){
      //   (title, description)
      this.seoMetaData('Home','Largest Essential Oil Producer'); 

  }
};
</script>
