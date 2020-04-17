<template>
   <app-master>

    <div slot='breadcrumb'>
        <app-breadcrumb>
            <div class="title-box text-left">
                <div class="page-title-heading">
                    <h1 class="title">Products</h1>
                </div><!-- /.page-title-captions -->
                <div class="breadcrumb-wrapper">
                    <span>
                       <router-link to="/" tag="a" > <i class="ti ti-home"></i>&nbsp;&nbsp;Home </router-link>
                    </span>
                    <span class="ttm-bread-sep ttm-textcolor-white">&nbsp;   →  &nbsp;</span>
                    <span class="ttm-textcolor-skincolor">Products</span>
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
                                <p class="products-result-count">Showing {{ items.length }} items  </p>
                                <form class="products-ordering float-sm-right">
                                    <div class="form-group mb-30">
                                        <select class="form-control border">
                                            <option  @click.prevent="fetchAllItems()">All Categories</option>
                                            <option v-for="(category, index) in categories" :key="index+'category'"  @click.prevent="fetchItemsByCategory(category)">{{ category}}</option>
                                        </select>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-3 col-md-6 col-sm-6" v-for="(product, index) in this.$store.state.shop.items" :key="index+'items'">
                                <div class="product"><!-- product -->
                                    <div class="product-thumbnail"><!-- product-thumbnail -->
                                    <!-- <span class="onsale">Sale!</span> -->
                                        <img class="img-fluid w-100" :src="product.featured_image" alt="">
                                        <div class="ttm-shop-icon" @click="add_to_cart(product)"><!-- ttm-shop-icon -->
                                            <div class="product-btn add-to-cart-btn"><a >ADD TO CART</a></div>
                                        </div>
                                    </div><!-- product-thumbnail end -->
                                    <div class="product-content text-left"><!-- product-content -->
                                        <div class="product-title"><!-- product-title -->
                                            <h2><a href="#">{{ product.name }}</a></h2>
                                        </div>
                                        <div class="ttm-ratting-star">
                                            <span> {{ product.Category }}</span>
                                            <!-- ratting-star -->
                                            <!-- <i class="fa fa-star"> </i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i> -->
                                        </div>
                                        <span class="product-price"><!-- product-Price -->
                                            <span class="product-Price-currencySymbol">&#8358;</span>{{ product.price | number_format }}
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
import { pick } from "../Repositories/pick"
import {database} from "../Repositories/database"
import { vuesax } from "../Repositories/vuesax"
import { mapState, mapMutations, mapActions } from "vuex"



export default {
  name: "Welcome",
  mixins: [seo, database, pick, vuesax],
  components: {
    "app-master" : Master,
    "app-breadcrumb": BreadCrumb
  },
  data(){
      return {}
  },
  computed: {

        ...mapState(
          'shop',
          [
          'items',
          'categories',
          ]
        ),

        ...mapState(
          'cart',
          [
          'cart',
          ]
        )


  },
  methods: {
        ...mapMutations(
          'shop',
          [
          'fetchAllItems',
          'fetchItemsByCategory',
          'fetchItemCategories',
          'FETCH_PRELOADER',
          ]
        ),

        

        add_to_cart(payload){ 
            let x = this;
           this.$store.dispatch('cart/add_to_cart',payload).then((yes) =>{
              
              x.showNotif({ type: 'success', position: 'bottom-right', message: 'Product added to cart'});
           })
        }


  },
    created(){
        //   (title, description)
        this.seoMetaData('Home','Largest Essential Oil Producer');

        //Preloader
        this.FETCH_PRELOADER(this.products)

        

        //Fetch categories
        this.fetchItemCategories()
       
        

    }
};
</script>


<style>
    .add-to-cart-btn a:hover,
    .add-to-cart-btn a:active
    {
        cursor: pointer;
        color: white;
    }

</style>
