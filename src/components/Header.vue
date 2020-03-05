
<template>
  <!--header start-->
  <header id="masthead" class="header ttm-header-style-01">
    <!-- ttm-header-wrap -->
    <div class="ttm-header-wrap">
      <!-- ttm-stickable-header-w -->
      <div id="ttm-stickable-header-w" class="ttm-stickable-header-w clearfix">
        <!-- ttm-topbar-wrapper -->
        <div class="ttm-topbar-wrapper clearfix">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="ttm-topbar-content">
                  <ul class="top-contact text-left">
                    <li>Your Trusted 24 Hours Service Provider!</li>
                  </ul>
                  <div class="topbar-right text-right">
                    <ul class="top-contact">
                      <li>Office Hour : 08:00am - 6:00pm</li>
                    </ul>
                    <div class="ttm-social-links-wrapper list-inline">
                      <ul class="social-icons">
                        <li>
                          <a href="#"><i class="fa fa-facebook"></i></a>
                        </li>
                        <li>
                          <a href="#"><i class="fa fa-twitter"></i></a>
                        </li>
                        <li>
                          <a href="#"><i class="fa fa-flickr"></i></a>
                        </li>
                        <li>
                          <a href="#"><i class="fa fa-linkedin"></i></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- ttm-topbar-wrapper end -->
        <div class="ttm-widget_header">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="d-flex flex-row align-items-center">
                  <!-- site-branding -->
                  <div class="site-branding mr-auto">
                    <a
                      class="home-link"
                      href="index.html"
                      title="Agrotek"
                      rel="home"
                    >
                      <img
                        src="images/logo.png"
                        id="logo-img"
                        class="img-center"
                        alt="logo"
                      />
                    </a>
                  </div>
                  <!-- site-branding end -->
                  <!-- widget-info -->
                  <div
                    class="widget_info d-flex flex-row align-items-center justify-content-end"
                  >
                    <div class="widget_icon"><i class="flaticon-call"></i></div>
                    <div class="widget_content">
                      <h5 class="widget_title">+123 456 7890</h5>
                      <p class="widget_desc">Make A Call</p>
                    </div>
                  </div>
                  <!-- widget-info end -->
                  <!-- widget-info -->
                  <div
                    class="widget_info d-flex flex-row align-items-center justify-content-end"
                  >
                    <div class="widget_icon">
                      <i class="flaticon-email"></i>
                    </div>
                    <div class="widget_content">
                      <h5 class="widget_title">Info@example.com</h5>
                      <p class="widget_desc">Get A Estimate</p>
                    </div>
                  </div>
                  <!-- widget-info end -->
                  <!-- widget-info -->
                  <div
                    class="widget_info d-flex flex-row align-items-center justify-content-end"
                  >
                    <div class="widget_icon">
                      <i class="flaticon-worldwide"></i>
                    </div>
                    <div class="widget_content">
                      <h5 class="widget_title">Newyork USA</h5>
                      <p class="widget_desc">23 Belfast ave, Florida</p>
                    </div>
                  </div>
                  <!-- widget-info end -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="site-header-menu" class="site-header-menu">
          <div class="site-header-menu-inner ttm-stickable-header">
            <div class="container">
              <!--site-navigation -->
              <div id="site-navigation" class="site-navigation">
                <div class="ttm-custombutton">
                  <a
                    href="/contact"
                    class="ttm-btn ttm-btn-size-md ttm-btn-bgcolor-skincolor"
                  >
                    Request for quote</a
                  >
                </div>
                <!-- header-icons -->
                <div class="ttm-header-icons ">
                  <span class="ttm-header-icon ttm-header-cart-link">
                    <a href="#"
                      ><i class="fa fa-shopping-cart"></i>
                      <span class="number-cart">0</span>
                    </a>
                  </span>
         
                </div>
                <!-- header-icons end -->
                <div class="ttm-menu-toggle">
                  <input type="checkbox" id="menu-toggle-form" />
                  <label for="menu-toggle-form" class="ttm-menu-toggle-block">
                    <span class="toggle-block toggle-blocks-1"></span>
                    <span class="toggle-block toggle-blocks-2"></span>
                    <span class="toggle-block toggle-blocks-3"></span>
                  </label>
                </div>
                <nav id="menu" class="menu">
                  <ul class="dropdown">
                    <li class="active">
                        <router-link to="/" tag="a" exact> Home </router-link>
                    </li>
                    <li>
                        <router-link to="/about" tag="a"> About Us </router-link>
                    </li>
                    <li>
                        <router-link to="/services" tag="a" > Services </router-link>
                    </li>
                    <li>
                      <router-link to="/faq" tag="a"> Faq </router-link>
                     
                    </li>
                    <li>
                      <a href="/shop">Shop</a>
                      
                    </li>
                    <li>
                      <a href="/contact">Contact Us</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <!-- site-navigation end-->
            </div>
          </div>
        </div>
      </div>
      <!-- ttm-stickable-header-w end-->
    </div>
    <!--ttm-header-wrap end -->
  </header>
  <!--header end-->
</template>

<script>
export default {
  name: "Header",
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
