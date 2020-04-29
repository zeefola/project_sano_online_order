<template>
   <app-master>

    
     <div slot="main-content">  
            <!-- services-section -->
            <section class="ttm-row faqpage-section clearfix">
                <div class="container">
                    
                    <!-- row -->
                    <div class="row">
                        <div class="col-lg-12"  >
                            <div class="coupon_toggle" >
                                <div class="coupon_code">
                                    <h5 id="order_review_heading" style="font-size: 1rem">Your order has been place successfully </h5>
                                </div>
                            </div>
                           
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
                                                <tr class="cart_item" v-for="(item, index) in cart_backup" :key="index+'item'">
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
                                                            <span class="Price-currencySymbol">&#8358;</span> {{ getCartTotalBackup | number_format }}
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
                                                <div class="instruction-bloc">
                                                      <div class="instruction-bloc__subtitle">
                                                          <p>Bank Name </p>
                                                      </div>

                                                      <div class="instruction-bloc__title">
                                                          <p> {{ payment_instruction.bank_name }} </p>
                                                      </div>
                                                </div>


                                                <div class="instruction-bloc">
                                                      <div class="instruction-bloc__subtitle">
                                                          <p> Account Name </p>
                                                      </div>

                                                      <div class="instruction-bloc__title">
                                                          <p> {{ payment_instruction.acc_name }} </p>
                                                      </div>
                                                </div>

                                                <div class="instruction-bloc">
                                                      <div class="instruction-bloc__subtitle">
                                                          <p> Account Number </p>
                                                      </div>

                                                      <div class="instruction-bloc__title">
                                                          <p> {{payment_instruction.acc_no}} </p>
                                                      </div>
                                                </div>

                                                 <div class="instruction-bloc">
                                                      <div class="instruction-bloc__subtitle">
                                                          <p> Payment Amount </p>
                                                      </div>

                                                      <div class="instruction-bloc__title">
                                                          <p> &#8358;  {{ getCartWithShippingTotal | number_format }} </p>
                                                      </div>
                                                </div>

                                                <div class="instruction-bloc">
                                                      <div class="instruction-bloc__subtitle">
                                                          <p> Order ID </p>
                                                      </div>

                                                      <div class="instruction-bloc__title">
                                                          <p>  {{ payment_instruction.order_id }} </p>
                                                      </div>
                                                </div>

                                               
                                            </div>

                                            <div class="col-sm-12">
                                                <p class="mb-0 note" > Kindly call <span class="highlight">{{ payment_instruction.outlet_telephone }} </span> to confirm  your payment.</p>
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
          'cart_backup',
          ]
        ),

         ...mapState(
          'shipping',
          [
          'shipping_details',
          ]
        ),


        ...mapState(
          'paymentdetails',
          [
          'payment_instruction',
          ]
        ),

      ...mapGetters(
          'paymentdetails',
          [
              'getCartWithShippingTotal',
          ]
      ),


      ...mapGetters(
          'cart',
          [
            'getCartTotalBackup'
          ]
      ),

      

      
      
  },

  methods: {
     
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

    //   //Middleware 
      this.paymentDetailsMiddleware();
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


.instruction-bloc{
    display: inline-block;
    border: 1px solid #ccc;
    padding: 5px;
    background: #f7f7f6;
    padding: 10px 5px 0px 20px;
    
    margin: 5px 4px;
    width: 48%;
}


.instruction-bloc__subtitle p{
    line-height: 1;
    color: green;
    text-transform: uppercase;
    font-size: 0.8rem;
    margin-bottom: 5px;

}


.instruction-bloc__title p{
    font: inherit;
    font-weight: 500;
    color: #000000b8;
    margin-bottom: 5px;

}


.note{
    border-left: 2px solid teal;
    padding: 1rem;
}


.highlight{
    color: green;
}



@media (min-width: 0px) and (max-width: 600px){
    .accordion .toggle-content {
    padding: 4px 4px;
    overflow: hidden;

    }

    .instruction-bloc{
        display: block;
        width: 100%;
    }
}

</style>
