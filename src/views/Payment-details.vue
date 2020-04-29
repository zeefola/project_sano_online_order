<template>
   <app-master>

    <div slot='breadcrumb'>
        <app-breadcrumb>
             <div class="title-box text-left">
                  <div class="page-title-heading">
                      <h1 class="title">Payment Details</h1>
                  </div><!-- /.page-title-captions -->
                  <div class="breadcrumb-wrapper">
                      <span>
                          <router-link to="/" tag="a" > <i class="ti ti-home"></i>&nbsp;&nbsp;Home </router-link>
                      </span>
                      <span class="ttm-bread-sep ttm-textcolor-white">&nbsp;   →  &nbsp;</span>
                      <span class="ttm-textcolor-skincolor">Payment Details</span>
                  </div>  
              </div>
        </app-breadcrumb>
    </div>

     <div slot="main-content">  
            <!-- services-section -->
            <section class="ttm-row faqpage-section clearfix">
                <div class="container">
                    
                    <!-- row -->
                    <div class="row">
                        <div class="col-lg-12"  >
                            <h5 id="order_review_heading">Your order has been place successfully </h5>
                          <div class="accordion grey-background res-991-mt-30">
                              <!-- toggle -->
                                <div class="toggle">
                                    <div class="toggle-title">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne"  @click="display('collapseOneData')" :class="{ active: this.menu.collapseOneData}" >Order Summary</a>
                                    </div>
                                    <div :class="{ block: this.menu.collapseOneData }" class="toggle-content" >
                                        <div class="row">
                                            <div class="col-sm-12">
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
                                                    <td class="product-name">{{ item.name }}  
                                                         <span v-if="item.weight">
                                                             ( {{ item.weight+' '+ item.unit }} )
                                                         </span>
                                                         &nbsp;
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
                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div><!-- toggle end -->
                                 <!-- toggle -->
                                <div class="toggle">
                                    <div class="toggle-title">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne"  @click="display('collapseTwoData')" :class="{ active: this.menu.collapseTwoData}" >Payment Instruction</a>
                                    </div>
                                    <div :class="{ block: this.menu.collapseTwoData }" class="toggle-content" >
                                        <div class="row">
                                            <div class="col-sm-12">
                                                <p class="mb-0"> Lemongrass oil is applied topically. Because lemongrass essential oil is highly concentrated, it should not be used directly on the skin. For use in aromatherapy, you can inhale lemongrass oil directly. Add a few drops of lemongrass oil into carrier oil of your choice, then mix into a warm bath or massage into skin.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div><!-- toggle end -->
                          </div>
                        </div>
                    </div>
                </div>
            </section>
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
  name: "Payment-details",
  mixins: [seo,pick, middleware, vuesax],
  components: {
    "app-master" : Master,
    "app-breadcrumb": BreadCrumb
  },
  data() {
      return {
          menu: {
            collapseOneData: false,
            collapseTwoData: false,
          }
      }

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

      },
      display(val){
          let x = this;
          let obj = x.menu;

          for(var key in obj){
              if(obj.hasOwnProperty(key)){

                  if(key == val){
                      obj[key] = !obj[key];
                  }else{
                      obj[key] = false;

                  }

              }
          }
      }
  },


  created(){

      //SEO
      this.seoMetaData('Payment-details', ' ');

      //Middleware 
      this.cartMiddleware();
      this.shippingMiddleware();
      this.display("collapseTwoData");
  }

  
};

</script>


<style>
.block{
     display: block!important;
 }

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
