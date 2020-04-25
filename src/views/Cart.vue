<template>
   <app-master>

    <div slot='breadcrumb'>
        <app-breadcrumb>
             <div class="title-box text-left">
                  <div class="page-title-heading">
                      <h1 class="title">Cart</h1>
                  </div><!-- /.page-title-captions -->
                  <div class="breadcrumb-wrapper">
                      <span>
                          <router-link to="/" tag="a" > <i class="ti ti-home"></i>&nbsp;&nbsp;Home </router-link>
                      </span>
                      <span class="ttm-bread-sep ttm-textcolor-white">&nbsp;   →  &nbsp;</span>
                      <span class="ttm-textcolor-skincolor">Cart</span>
                  </div>  
              </div>
        </app-breadcrumb>
    </div>



      <div slot="main-content">

          <!-- sidebar -->
            <div class="ttm-row only-one-section ttm-bgcolor-white clearfix">
                <div class="container">
                    <!-- row -->
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="coupon_toggle" v-if="cart.length < 1" >
                                <div class="coupon_code">
                                    Ooops!!! Your cart is empty <router-link to='/' tag="a">.... Click here to add items to your cart</router-link>
                                </div>
                            </div>
                            <!-- ttm-cart-form -->
                            <form class="ttm-cart-form" action="#" method="post">
                                <table class="shop_table shop_table_responsive">
                                    <thead>
                                        <tr>
                                            <th class="product-remove">&nbsp;</th>
                                            <th class="product-name">Product</th>
                                            <th class="product-mainprice">Price</th>
                                            <th class="product-quantity">Quantity</th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="cart_item" v-for="(item, index) in cart" :key="index+'item'">
                                            <td class="product-remove">
                                                <a @click.prevent="REMOVE_CART_ITEM(index)" class="remove">×</a>
                                            </td>
                                           
                                            <td class="product-name" data-title="Product">
                                                <a href="#">{{item.name}}</a>

                                                <select class="form-control iform-control" @change="modifyCartViaWeight($event,index)" v-if="item.unit_rate.length > 0">
                                                    <option  v-for="(unitX, index) in item.unit_rate" :key="index+'unitX'" :value="unitX"> {{ unitX+' '+item.unit }}</option>
                                                    
                                                </select>
                                            </td>
                                            <td class="product-mainprice" data-title="Price">
                                                <span class="Price-amount">
                                                    <span class="Price-currencySymbol">&#8358;</span>{{ item.price}}
                                                </span>
                                            </td>
                                            <td class="product-quantity" data-title="Quantity">
                                                <div class="quantity">

                                                    <!-- <select class="form-control iform-control" @change="modifyCartViaWeight($event,index)" v-if="item.unit_rate.length > 0">
                                                        <option  v-for="(unitX, index) in item.unit_rate" :key="index+'unitX'" :value="unitX"> {{ unitX+' '+item.unit }}</option>
                                                    
                                                    </select> -->
                                                    <input type="number" class="product-quantity____input" @change="modifyCart($event,index)"  :value="item.quantity" min="1" title="Qty">
                                                </div>
                                            </td>
                                            
                                        </tr>
                                       
                                        
                                    </tbody>
                                </table>
                            </form><!-- ttm-cart-form end -->
                            <!-- cart-collaterals -->
                            <div class="cart-collaterals">
                                <div class="cart_totals ">
                                    <h2>Cart totals</h2>
                                    <table class="shop_table shop_table_responsive">
                                        <tbody>
                                            <tr class="cart-subtotal">
                                                <th>Subtotal</th>
                                                <td data-title="Subtotal">
                                                    <span class="Price-amount">
                                                        <span class="Price-currencySymbol">&#8358;</span> {{ getCartTotal | number_format }}
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr class="order-total">
                                                <th>Total</th>
                                                <td data-title="Total">
                                                    <strong><span class="Price-amount">
                                                        <span class="Price-currencySymbol">&#8358;</span> {{ getCartTotal | number_format }}</span>
                                                    </strong>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div class="button-block">
                                         <router-link  to="/" class="button-block__item prev"> Back </router-link>
                                         <router-link  to="/shipping" class="button-block__item next"> Proceed to shipping </router-link>
                                      
             
                                    </div>
                                </div>
                            </div><!-- cart-collaterals end-->
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
import BreadCrumb from "@/components/BreadCrumb.vue";
import {seo} from "../Repositories/seo.js"
import { mapGetters, mapMutations, mapState } from 'vuex';
import { middleware } from "../Repositories/middleware"
import { pick } from "../Repositories/pick"
import { vuesax } from "../Repositories/vuesax"


export default {
  name: "Cart",
  mixins: [seo, pick, vuesax, middleware],
  components: {
    "app-master" : Master,
    "app-breadcrumb": BreadCrumb,
  },
  computed: {
      ...mapState(
        'cart',['cart']
      ),

      ...mapGetters(
        'cart',
        [
         'getCartTotal'
        ]
       )

  },

  

  methods: {
      ...mapMutations(
          'cart',
        [
          'REMOVE_CART_ITEM',
          'MODIFY_CART_ITEM'
      ]
      ),

      modifyCart(event,index){
          let quantity = event.target.value;

          if(quantity){
              this.$store.commit('cart/MODIFY_CART_ITEM',{quantity: quantity, index: index});
          }
          
      },


      modifyCartViaWeight(event, index){
          let weight = event.target.value;

          if(weight){
              this.$store.commit('cart/MODIFY_CART_ITEM_VIA_WEIGHT',{weight: weight, index: index});
          }

      }

  },
  created(){

      //SEO
      this.seoMetaData('Cart', ' ');

    //   this.cartMiddleware();
  }

  
};

</script>

<style>
.product-quantity____input{
    width: 100%;
    overflow: hidden;
}

.product-remove,
.product-remove a{
    cursor: pointer;
}

.iform-control{
    display: inline-block;

outline: 1px solid black;

width: 5rem;

height: 2rem;

padding: 0px;

margin-left: 1rem;
}



</style>
