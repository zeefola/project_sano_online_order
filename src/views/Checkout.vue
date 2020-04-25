<template>
   <app-master>

    <div slot='breadcrumb'>
        <app-breadcrumb>
             <div class="title-box text-left">
                  <div class="page-title-heading">
                      <h1 class="title">Checkout</h1>
                  </div><!-- /.page-title-captions -->
                  <div class="breadcrumb-wrapper">
                      <span>
                          <router-link to="/" tag="a" > <i class="ti ti-home"></i>&nbsp;&nbsp;Home </router-link>
                      </span>
                      <span class="ttm-bread-sep ttm-textcolor-white">&nbsp;   →  &nbsp;</span>
                      <span class="ttm-textcolor-skincolor">Checkout</span>
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
                            <!-- <div class="coupon_toggle">
                                <div class="coupon_code">
                                    Have a coupon? <a href="checkout.html">Click here to enter your code</a>
                                </div>
                            </div> -->

                            <div class="coupon_toggle" v-if="cart.length < 1" >
                                <div class="coupon_code">
                                    Ooops!!! Your cart is empty <router-link to='/' tag="a">.... Click here to add items to your cart</router-link>
                                </div>
                            </div>
                            <form name="checkout" method="post" class="checkout row" action="#">
                                
                                <div class="col-lg-12">
                                    <h3 id="order_review_heading">Your order</h3>
                                    
                                    <div id="order_review" class="checkout-review-order">
                                        <table class="shop_table checkout-review-order-table">
                                            <thead>
                                                <tr>
                                                    <th class="product-name">Product</th>
                                                    <th class="product-total">Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr class="cart_item" v-for="(item, index) in cart" :key="index+'item'">
                                                    <td class="product-name">{{ item.name }} &nbsp;
                                                        <strong class="product-quantity">× {{ item.quantity}}</strong>
                                                    </td>
                                                    <td class="product-total">
                                                        <span class="Price-amount amount">
                                                            <span class="Price-currencySymbol">&#8358;</span> {{ item.price | number_format }}
                                                        </span>
                                                    </td>
                                                </tr>
                                                
                                            </tbody>
                                            <tfoot>
                                                <tr class="cart-subtotal bg-grey-light">
                                                    <th>Subtotal</th>
                                                    <td>
                                                        <span class="Price-amount amount">
                                                            <span class="Price-currencySymbol">&#8358;</span> {{ getCartTotal | number_format }}
                                                        </span>
                                                    </td>
                                                </tr>

                                                <tr class="cart-subtotal bg-grey-light">
                                                    <th>Shipping</th>
                                                    <td>
                                                        <span class="Price-amount amount">
                                                            <span class="Price-currencySymbol">&#8358;</span> {{ shipping_details.cost |number_format  }}
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr class="order-total bg-grey-light">
                                                    <th>Total</th>
                                                    <td><strong><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#8358;</span> {{ getCartWithShippingTotal | number_format }} </span></strong> </td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                        <div id="payment" class="checkout-payment">
                                            <!-- <ul class="payment_methods">
                                                <li class="payment_method_ppec_paypal">
                                                    <div class="payment_box">
                                                        <p class="mb-0">Sorry, it seems that there are no available payment methods for your state. Please contact us if you require assistance or wish to make alternate arrangements.</p>
                                                    </div>
                                                </li>
                                            </ul> -->
                                            <div class="checkout-form place-order clearfix">
                                                <p class="payment_policy">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <a href="#" class="ttm-textcolor-skincolor">Privecy policy</a> </p>
                                                <span class="pull-right float-right">

                                                    <router-link class="button margin-sm ttm-btn ttm-btn-size-sm ttm-btn-bgcolor-darkgrey bg-dark" tag="a" to='/shipping'><a>Back</a></router-link>
                                                  
                                                <button type="button" @click="api_calls('PLACE_ORDER')" class="button margin-sm bg-green ttm-btn ttm-btn-size-sm ttm-btn-bgcolor-darkgrey " name="checkout_place_order" id="place_order" value="Place order" data-value="Place order">Place order</button>
                                                </span>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
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
import { pick } from "../Repositories/pick"
import { middleware } from "../Repositories/middleware"
import { mapState, mapMutations, mapGetters } from 'vuex';
import { vuesax } from '../Repositories/vuesax';


export default {
  name: "Checkout",
  mixins: [seo,pick, middleware, vuesax],
  components: {
    "app-master" : Master,
    "app-breadcrumb": BreadCrumb
  },
  computed: {
        ...mapState(
          'cart',
          [
          'cart',
          ]
        ),

         ...mapState(
          'shipping',
          [
          'shipping_details',
          ]
        ),

      ...mapGetters(
          'checkout',
          [
              'getCartWithShippingTotal',
              'getFormData'
          ]
      ),


      ...mapGetters(
          'cart',
          [
              'getCartTotal'
          ]
      ),

      

      
      
  },

  methods: {
      api_calls(type){
          let x = this;
           /** Start loader gif */
          this.showLoading();
          
          let key = { key: this.API_KEY };
          if(type == 'PLACE_ORDER'){
              this.$store.dispatch('checkout/place_order',key).then((response) => {

                  console.log(response);
                 
                /** If response status is 200 */
                if(response.status == 200){

                    x.showNotif({type: 'successLong', message: response.data.message });

                    //clear all input field
                    x.$store.commit('cart/CLEAR_CART');

                    x.$router.push('/');

                }

                  
                /** If response status is 400 or 404 */
                if(response.status == 400 || response.status == 404){
                  x.showNotif({type: 'warning', message: response.data.message });

                }

                /** If response contains error */
                if(response.data.errors){
                  x.showNotif({type: 'warning', message: response.data.errors });
                  
                }


                 x.hideLoading();

              })
          }


          
              /** End loader gif */
              this.hideLoading();

      }
  },


  created(){

      //SEO
      this.seoMetaData('Checkout', ' ');

      //Middleware 
      this.cartMiddleware();
      this.shippingMiddleware();
  }

  
};

</script>


<style>
.bg-grey-light{
    background: #cccccc24;
}

.float-right{
    float: right;
}

.margin-sm{
    margin: 3px;
}

.bg-green{
    background: #00A85A!important;
}

.bg-dark{
    background: #232323!important ;
}

.bg-dark:hover,
.bg-dark:active{
    background: #232323!important;
}

</style>
