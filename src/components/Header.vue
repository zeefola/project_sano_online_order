
<template>
  <!--header start-->
        <header id="masthead" class="header ttm-header-style-02">
            <!-- ttm-topbar-wrapper -->
            <div class="ttm-topbar-wrapper ttm-bgcolor-darkgrey ttm-textcolor-white clearfix">
                <div class="container">
                    <div class="ttm-topbar-content">
                        <ul class="top-contact text-left">
                            <li class="list-inline-item">{{ this.$store.state.config.tagline }}</li>
                        </ul>
                        <div class="topbar-right text-right">
                            <div class="ttm-social-links-wrapper list-inline">
                                <ul class="social-icons">
                                    
                                    <li>
                                        <a :href="this.$store.state.config.facebook" target="_blank">
                                            <i class="fa fa-facebook"></i>
                                        </a>
                                    </li>

                                    <li>
                                        <a :href="this.$store.state.config.twitter" target="_blank">
                                            <i class="fa fa-twitter"></i>
                                        </a>
                                    </li>

                                    <li>
                                        <a :href="this.$store.state.config.instagram" target="_blank">
                                            <i class="fa fa-instagram"></i>
                                        </a>
                                    </li>
                                    
                
                                </ul>
                            </div>
                            <ul class="top-contact ttm-highlight-right">
                                <li><strong><i class="fa fa-phone"></i>Talk To Expert :</strong> <span class="tel-no">{{ this.$store.state.config.telephone1 }}</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div><!-- ttm-topbar-wrapper end -->
            <!-- ttm-header-wrap -->
            <div class="ttm-header-wrap">
                <!-- ttm-stickable-header-w -->
                <div id="ttm-stickable-header-w" class="ttm-stickable-header-w clearfix">
                    <div id="site-header-menu" class="site-header-menu">
                        <div class="site-header-menu-inner ttm-stickable-header">
                            <div class="container">
                                <!-- site-branding -->
                                <div class="site-branding">
                                    <router-link class="home-link" to="/" title="FoodPark" rel="home">
                                         <img id="logo-img" class="img-center" src="/img/logo.png" alt="logo-img">
                                    </router-link>
                                   
                                </div><!-- site-branding end -->
                                <!--site-navigation -->
                                <div id="site-navigation" class="site-navigation">
                                    <!-- header-icons -->
                                    <div class="ttm-header-icons ">
                                        <span class="ttm-header-icon ttm-header-cart-link">

                                            <router-link to="/cart">
                                                <i class="fa fa-shopping-cart"></i>
                                                <span class="number-cart">{{ getCartCount }}</span>
                                            </router-link>
                                            
                                        </span>
                                        <!-- <div class="ttm-header-icon ttm-header-search-link">
                                            <a href="#" class="sclose"><i class="ti ti-search"></i></a>
                                            <div class="ttm-search-overlay">
                                                <div class="ttm-bg-layer"></div>
                                                <div class="ttm-icon-close"></div>
                                                <div class="ttm-search-outer">
                                                    <form method="get" class="ttm-site-searchform" action="#">
                                                        <input type="search" class="field searchform-s" name="s" placeholder="Type Word Then Enter...">
                                                        <button type="submit">
                                                            <i class="ti ti-search"></i>
                                                        </button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div> -->
                                    </div><!-- header-icons end -->
                                    <div class="ttm-menu-toggle">
                                        <input type="checkbox" id="menu-toggle-form" :class="{ active: menuStatus }" />
                                        <label for="menu-toggle-form" class="ttm-menu-toggle-block"  @click="activate()">
                                            <span class="toggle-block toggle-blocks-1"></span>
                                            <span class="toggle-block toggle-blocks-2"></span>
                                            <span class="toggle-block toggle-blocks-3"></span>
                                        </label>
                                    </div>
                                    <nav id="menu" class="menu" :class="{ active: menuStatus }">
                                        <ul class="dropdown">
                                             <router-link to="/" tag="li" exact-active-class="active" exact> <a> Home </a> </router-link>
                  
                                            <router-link to="/products" tag="li" exact-active-class="active" exact > <a> Products </a></router-link>
                    
                  
                                            <router-link to="/cart"  tag="li" exact-active-class="active" exact ><a> Cart </a> </router-link>
                    
                   
                                            <router-link to="/shipping"  tag="li" exact-active-class="active" exact> <a> Shipping </a></router-link>
                     
                                             <router-link to="/contact"  tag="li" exact-active-class="active" exact > <a> Contact Us </a></router-link>
                      
                                            
                                            
                                        </ul>
                                    </nav>
                                </div><!-- site-navigation end-->
                            </div>
                        </div>
                    </div>
                </div><!-- ttm-stickable-header-w end-->
            </div><!--ttm-header-wrap end -->
        </header><!--header en -->
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "Header",
  props: {},
  data(){
    return {
      menuStatus: false,
    }
  },
  computed: {
    ...mapGetters(
      'cart',
    [
      'getCartCount',
    ])
  },
  methods: {
    activate: function(){
      this.menuStatus = !this.menuStatus;
    }
  }
};
</script>

