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
                                <p class="products-result-count">Showing {{ items.length }} items  {{ cart }}</p>
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
                            <div class="col-lg-3 col-md-6 col-sm-6" v-for="(product, index) in items" :key="index+'items'">
                                <div class="product"><!-- product -->
                                    <div class="product-thumbnail"><!-- product-thumbnail -->
                                    <!-- <span class="onsale">Sale!</span> -->
                                        <img class="img-fluid w-100" :src="product.featured_image" alt="">
                                        <div class="ttm-shop-icon" @click="ADD_TO_CART(product)"><!-- ttm-shop-icon -->
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
                                            <span class="product-Price-currencySymbol">&#8358;</span>{{ product.price }}
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
import {database} from "../Repositories/database"
import { mapState, mapMutations } from "vuex"



export default {
  name: "Welcome",
  mixins: [seo, database],
  components: {
    "app-master" : Master,
    "app-breadcrumb": BreadCrumb
  },
  data(){
      return {}
  },
  computed: {

      ...mapState([
          'items',
          'categories',
          'cart'
      ])


  },
  methods: {
      ...mapMutations([
          'fetchAllItems',
          'fetchItemsByCategory',
          'fetchItemCategories',
          'FETCH_PRELOADER',
          'ADD_TO_CART',
          
      ]),


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


<style scoped>
    .add-to-cart-btn a:hover,
    .add-to-cart-btn a:active
    {
        cursor: pointer;
        color: white;
    }
</style>
