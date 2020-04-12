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
            <!-- sidebar -->
        <div class="sidebar ttm-bgcolor-white clearfix">
            <div class="container">
                <!-- row -->
                <div class="row">
                    <div class="col-lg-12 content-area">
                        <div class="row">
                            <div class="col-md-12">
                                <p class="products-result-count">Showing 1–9 of 14 results</p>
                                <form class="products-ordering float-sm-right" method="get">
                                    <div class="form-group mb-30">
                                        <select name="orderby" class="form-control border">
                                            <option value="menu_order" selected="selected">Default sorting</option>
                                            <option value="popularity">Sort by popularity</option>
                                            <option value="rating">Sort by average rating</option>
                                            <option value="date">Sort by newness</option>
                                            <option value="price">Sort by price: low to high</option>
                                            <option value="price-desc">Sort by price: high to low</option>
                                        </select>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-3 col-md-6 col-sm-6">
                                <div class="product"><!-- product -->
                                    <div class="product-thumbnail"><!-- product-thumbnail -->
                                        <img class="img-fluid w-100" src="https://via.placeholder.com/470X520/444444.jpg" alt="">
                                        <div class="ttm-shop-icon"><!-- ttm-shop-icon -->
                                            <div class="product-btn add-to-cart-btn"><a href="#">ADD TO CART</a></div>
                                        </div>
                                    </div><!-- product-thumbnail end -->
                                    <div class="product-content text-left"><!-- product-content -->
                                        <div class="product-title"><!-- product-title -->
                                            <h2><a href="product-details.html">Corn Tree</a></h2>
                                        </div>
                                        <div class="ttm-ratting-star"><!-- ratting-star -->
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                        </div>
                                        <span class="product-price"><!-- product-Price -->
                                            <span class="product-Price-currencySymbol">$</span>16.00
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-6">
                                <div class="product"><!-- product -->
                                    <div class="product-thumbnail"><!-- product-thumbnail -->
                                        <span class="onsale">Sale!</span>
                                        <img class="img-fluid w-100" src="https://via.placeholder.com/470X520/444444.jpg" alt="">
                                        <div class="ttm-shop-icon"><!-- ttm-shop-icon -->
                                            <div class="product-btn add-to-cart-btn"><a href="#">ADD TO CART</a></div>
                                        </div>
                                    </div><!-- product-thumbnail end -->
                                    <div class="product-content text-left"><!-- product-content -->
                                        <div class="product-title"><!-- product-title -->
                                            <h2><a href="product-details.html">Beardrock Root</a></h2>
                                        </div>
                                        <div class="ttm-ratting-star"><!-- ratting-star -->
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                        </div>
                                        <span class="product-price"><!-- product-Price -->
                                            <span class="product-Price-currencySymbol">
                                                <del><span class="product-Price-amount">
                                                        <span class="product-Price-currencySymbol">$</span>20.00
                                                    </span>
                                                </del>
                                                <ins><span class="product-Price-amount">
                                                        <span class="product-Price-currencySymbol">$</span>18.00
                                                    </span>
                                                </ins>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-6">
                                <div class="product"><!-- product -->
                                    <div class="product-thumbnail"><!-- product-thumbnail -->
                                        <img class="img-fluid w-100" src="https://via.placeholder.com/470X520/444444.jpg" alt="">
                                        <div class="ttm-shop-icon"><!-- ttm-shop-icon -->
                                            <div class="product-btn add-to-cart-btn"><a href="#">ADD TO CART</a></div>
                                        </div>
                                    </div><!-- product-thumbnail end -->
                                    <div class="product-content text-left"><!-- product-content -->
                                        <div class="product-title"><!-- product-title -->
                                            <h2><a href="product-details.html">Fresh Okra</a></h2>
                                        </div>
                                        <div class="ttm-ratting-star"><!-- ratting-star -->
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                        </div>
                                        <span class="product-price"><!-- product-Price -->
                                            <span class="product-Price-currencySymbol">$</span>16.00
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-6">
                                <div class="product"><!-- product -->
                                    <div class="product-thumbnail"><!-- product-thumbnail -->
                                        <img class="img-fluid w-100" src="https://via.placeholder.com/470X520/444444.jpg" alt="">
                                        <div class="ttm-shop-icon"><!-- ttm-shop-icon -->
                                            <div class="product-btn add-to-cart-btn"><a href="#">ADD TO CART</a></div>
                                        </div>
                                    </div><!-- product-thumbnail end -->
                                    <div class="product-content text-left"><!-- product-content -->
                                        <div class="product-title"><!-- product-title -->
                                            <h2><a href="product-details.html">Green Broccoli</a></h2>
                                        </div>
                                        <div class="ttm-ratting-star"><!-- ratting-star -->
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                        </div>
                                        <span class="product-price"><!-- product-Price -->
                                            <span class="product-Price-currencySymbol">$</span>16.00
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-6">
                                <div class="product"><!-- product -->
                                    <div class="product-thumbnail"><!-- product-thumbnail -->
                                        <span class="onsale">Sale!</span>
                                        <img class="img-fluid w-100" src="https://via.placeholder.com/470X520/444444.jpg" alt="">
                                        <div class="ttm-shop-icon"><!-- ttm-shop-icon -->
                                            <div class="product-btn add-to-cart-btn"><a href="#">ADD TO CART</a></div>
                                        </div>
                                    </div><!-- product-thumbnail end -->
                                    <div class="product-content text-left"><!-- product-content -->
                                        <div class="product-title"><!-- product-title -->
                                            <h2><a href="product-details.html">Long Sleeve Tee</a></h2>
                                        </div>
                                        <div class="ttm-ratting-star"><!-- ratting-star -->
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                        </div>
                                        <span class="product-price"><!-- product-Price -->
                                            <span class="product-Price-currencySymbol">
                                                <del><span class="product-Price-amount">
                                                        <span class="product-Price-currencySymbol">$</span>40.00
                                                    </span>
                                                </del>
                                                <ins><span class="product-Price-amount">
                                                        <span class="product-Price-currencySymbol">$</span>35.00
                                                    </span>
                                                </ins>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-6">
                                <div class="product"><!-- product -->
                                    <div class="product-thumbnail"><!-- product-thumbnail -->
                                        <img class="img-fluid w-100" src="https://via.placeholder.com/470X520/444444.jpg" alt="">
                                        <div class="ttm-shop-icon"><!-- ttm-shop-icon -->
                                            <div class="product-btn add-to-cart-btn"><a href="#">ADD TO CART</a></div>
                                        </div>
                                    </div><!-- product-thumbnail end -->
                                    <div class="product-content text-left"><!-- product-content -->
                                        <div class="product-title"><!-- product-title -->
                                            <h2><a href="product-details.html">Red Beet</a></h2>
                                        </div>
                                        <div class="ttm-ratting-star"><!-- ratting-star -->
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                        </div>
                                        <span class="product-price"><!-- product-Price -->
                                            <span class="product-Price-currencySymbol">$</span>16.00
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-6">
                                <div class="product"><!-- product -->
                                    <div class="product-thumbnail"><!-- product-thumbnail -->
                                        <img class="img-fluid w-100" src="https://via.placeholder.com/470X520/444444.jpg" alt="">
                                        <div class="ttm-shop-icon"><!-- ttm-shop-icon -->
                                            <div class="product-btn add-to-cart-btn"><a href="#">ADD TO CART</a></div>
                                        </div>
                                    </div><!-- product-thumbnail end -->
                                    <div class="product-content text-left"><!-- product-content -->
                                        <div class="product-title"><!-- product-title -->
                                            <h2><a href="product-details.html">Long Sleeve Tee</a></h2>
                                        </div>
                                        <div class="ttm-ratting-star"><!-- ratting-star -->
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                        </div>
                                        <span class="product-price"><!-- product-Price -->
                                            <span class="product-Price-currencySymbol">$</span>32.00
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-6">
                                <div class="product"><!-- product -->
                                    <div class="product-thumbnail"><!-- product-thumbnail -->
                                        <img class="img-fluid w-100" src="https://via.placeholder.com/470X520/444444.jpg" alt="">
                                        <div class="ttm-shop-icon"><!-- ttm-shop-icon -->
                                            <div class="product-btn add-to-cart-btn"><a href="#">ADD TO CART</a></div>
                                        </div>
                                    </div><!-- product-thumbnail end -->
                                    <div class="product-content text-left"><!-- product-content -->
                                        <div class="product-title"><!-- product-title -->
                                            <h2><a href="product-details.html">Red Beet</a></h2>
                                        </div>
                                        <div class="ttm-ratting-star"><!-- ratting-star -->
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                        </div>
                                        <span class="product-price"><!-- product-Price -->
                                            <span class="product-Price-currencySymbol">$</span>40.00
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-6">
                                <div class="product"><!-- product -->
                                    <div class="product-thumbnail"><!-- product-thumbnail -->
                                        <span class="onsale">Sale!</span>
                                        <img class="img-fluid w-100" src="https://via.placeholder.com/470X520/444444.jpg" alt="">
                                        <div class="ttm-shop-icon"><!-- ttm-shop-icon -->
                                            <div class="product-btn add-to-cart-btn"><a href="#">ADD TO CART</a></div>
                                        </div>
                                    </div><!-- product-thumbnail end -->
                                    <div class="product-content text-left"><!-- product-content -->
                                        <div class="product-title"><!-- product-title -->
                                            <h2><a href="product-details.html">Fresh Okra</a></h2>
                                        </div>
                                        <div class="ttm-ratting-star"><!-- ratting-star -->
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                        </div>
                                        <span class="product-price"><!-- product-Price -->
                                            <span class="product-Price-currencySymbol">
                                                <del><span class="product-Price-amount">
                                                        <span class="product-Price-currencySymbol">$</span>50.00
                                                    </span>
                                                </del>
                                                <ins><span class="product-Price-amount">
                                                        <span class="product-Price-currencySymbol">$</span>40.00
                                                    </span>
                                                </ins>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div><!-- row end -->
            </div>
        </div>
        <!-- sidebar end -->
      </div>
   </app-master>
</template>

<script>
// @ is an alias to /src
import Master from "@/components/Master.vue";
import Slider from "@/components/Slider.vue";
import BreadCrumb from "@/components/BreadCrumb.vue";
import {seo} from "../Repositories/seo.js";



export default {
  name: "Welcome",
  mixins: [seo],
  components: {
    "app-master" : Master,
    "app-breadcrumb": BreadCrumb
  },
  data(){
      return {
         
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


<style scoped>

</style>
