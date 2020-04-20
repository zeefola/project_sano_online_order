
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

                  <ul class="top-contact top-contact--bg text-left">
                   <router-link to="/" tag="li" exact-active-class=""> <a> Organic Chicken </a></router-link>
                    <router-link to="/cart" tag="li" class="cart-anchor" > 
                    <a> Cart </a> 
                  
                        <span class="fa fa-shopping-cart cart-box">
                          <span class="cart-box__count">{{ getCartCount }}</span>
                        </span>
                        
                      
                    
                    </router-link>
                      <router-link to="/shipping" tag="li" > <a> Shipping </a></router-link>
                     <router-link to="/checkout" tag="li" > <a> Checkout </a></router-link>
                  </ul>

                  <!-- <div class="topbar-center">
                    <ul class="topbar-center__items">
                      <li class="topbar-center__item"> <a href="/cart"> Cart</a> </li>
                       <li class="topbar-center__item"> <a href="/checkout"> Checkout</a> </li>
                    </ul>

                  </div> -->

                  <div class="topbar-right text-right">
                    <ul class="top-contact">
                      <li>Office Hour : 08:00am - 5:00pm</li>
                    </ul>
                    <div class="ttm-social-links-wrapper list-inline">
                      <ul class="social-icons">
                        <li>
                          <a href="#"><i class="fa fa-facebook"></i></a>
                        </li>
                        <li>
                          <a href="https://twitter.com/nardusltd"><i class="fa fa-twitter"></i></a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/nardusltd/"><i class="fa fa-instagram"></i></a>
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
        
        
      </div>
      <!-- ttm-stickable-header-w end-->
    </div>
    <!--ttm-header-wrap end -->

    <div class="nav-block">
      <div class="nav-block__items">
        <router-link to="/" tag="div" class="nav-block__items__item" > <a> Organic Chicken </a></router-link>

        <router-link to="/cart" tag="div" class="nav-block__items__item" > 
         <a> Cart </a>
          <span class="fa fa-shopping-cart cart-box"><span class="cart-box__count">{{ getCartCount }}</span></span>
        </router-link>

         <router-link to="/shipping" tag="div" class="nav-block__items__item" > <a> Shipping </a></router-link>
         <router-link to="/checkout" tag="div" class="nav-block__items__item" > <a> Checkout </a></router-link>
      </div>
    </div>
  </header>
  <!--header end-->
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "Header",
  props: {},
  data(){
    return {
      menuStatus: false
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.cart-box{
  font-size: 15px;
}
.cart-box__count{
  position: absolute;
  display: inline-block;
  top: 10px;
  width: 12px;
  background: #c80e0e;
  text-align: center;
  border-radius: 88%;
  color: white;
  font-weight: bold;
}


.cart-anchor{
  position: relative;
    display: inline-block;

}


.nav-block{
  display: block;
  width: 100%;
  height: 3.2rem;
  background: white;
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 100;
  display: none;

}

.nav-block__items{
  display: block;
  margin: auto;
  width: 100%;
  height: 100%;
  text-align: center;
}

.nav-block__items__item{
  display: inline-block;
  height: 100%;
  background: #4a4947;
  vertical-align: middle;
  outline: none;
  padding: 10px 16px;
  margin: 0px 2px 0px 0px;
  color: white;
  font: inherit;
  cursor: pointer;
  


}

.nav-block__items a{
  color: white;
}

.nav-block__items__item:hover,
.nav-block__items__item:active{
  background: #1ba85a;
}


@media (min-width: 0px) and (max-width: 1200px){
  .nav-block{
    display: block;
  }

  .nav-block__items__item{
    font-size: 0.65rem!important;
     padding: 0.5rem 0.8rem;
  }


  
  .cart-box__count{

    font-weight: 500;
    font-size: 0.8rem;
    font-family: inherit

  }
}
</style>
