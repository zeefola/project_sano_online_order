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
                            <form name="checkout" method="post" class="checkout row" action="#">
                                <div class="col-lg-6">
                                    <h4>Billing details</h4>
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <label>First Name<abbr>*</abbr></label>
                                                <input type="text" name="fname" class="form-control border">
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <label>Last Name<abbr>*</abbr></label>
                                                <input type="text" name="lname" class="form-control border">
                                            </div>
                                        </div>
                                        <div class="col-sm-12">
                                            <div class="form-group">
                                                <label>Company name (optional)<abbr>*</abbr></label>
                                                <input type="text" name="cname" class="form-control border">
                                            </div>
                                        </div>
                                        <div class="col-sm-12">
                                            <div class="form-group">
                                                <label>Country <abbr class="">*</abbr></label>
                                                <select name="billing_country" tabindex="-1" aria-hidden="true" class="form-control border">
                                                    <option value="">Select a country…</option>
                                                    <option value="AX">Åland Islands</option>
                                                    <option value="AF">Afghanistan</option>
                                                    <option value="AL">Albania</option>
                                                    <option value="DZ">Algeria</option>
                                                    <option value="AS">American Samoa</option>
                                                    <option value="AD">Andorra</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-sm-12">
                                            <div class="form-group">
                                                <label>Street address<abbr>*</abbr></label>
                                                <input type="text" name="address" class="form-control border">
                                            </div>
                                        </div>
                                        <div class="col-sm-12">
                                            <div class="form-group">
                                                <label>Town / City<abbr>*</abbr></label>
                                                <input type="text" name="city" class="form-control border">
                                            </div>
                                        </div>
                                        <div class="col-sm-12">
                                            <div class="form-group">
                                                <label>State<abbr>*</abbr></label>
                                                <select name="billing_state" id="billing_state" class="form-control border">
                                                    <option value="">Select a state…</option>
                                                    <option value="AP">Andhra Pradesh</option>
                                                    <option value="AR">Arunachal Pradesh</option>
                                                    <option value="AS">Assam</option>
                                                    <option value="BR">Bihar</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-sm-12">
                                            <div class="form-group">
                                                <label>ZIP<abbr>*</abbr></label>
                                                <input type="text" name="zip" class="form-control border">
                                            </div>
                                        </div>
                                        <div class="col-sm-12">
                                            <div class="form-group">
                                                <label>Phone (optional)<abbr>*</abbr></label>
                                                <input type="text" name="phone" class="form-control border">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <h4>Additional information</h4>
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <div class="form-group">
                                                <label>Order notes <abbr>*</abbr></label>
                                                <textarea name="order" class="form-control border" rows="4"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                                                <tr class="cart_item">
                                                    <td class="product-name">Beardrock Root&nbsp;
                                                        <strong class="product-quantity">× 1</strong>
                                                    </td>
                                                    <td class="product-total">
                                                        <span class="Price-amount amount">
                                                            <span class="Price-currencySymbol">$</span>40.00
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr class="cart_item">
                                                    <td class="product-name">Beardrock Root&nbsp;
                                                        <strong class="product-quantity">× 1</strong>
                                                    </td>
                                                    <td class="product-total">
                                                        <span class="Price-amount">
                                                            <span class="Price-currencySymbol">$</span>18.00
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                            <tfoot>
                                                <tr class="cart-subtotal">
                                                    <th>Subtotal</th>
                                                    <td>
                                                        <span class="Price-amount amount">
                                                            <span class="Price-currencySymbol">$</span>1610.00
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr class="order-total">
                                                    <th>Total</th>
                                                    <td><strong><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">$</span>1610.00</span></strong> </td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                        <div id="payment" class="checkout-payment">
                                            <ul class="payment_methods">
                                                <li class="payment_method_ppec_paypal">
                                                    <div class="payment_box">
                                                        <p class="mb-0">Sorry, it seems that there are no available payment methods for your state. Please contact us if you require assistance or wish to make alternate arrangements.</p>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div class="checkout-form place-order clearfix">
                                                <p class="payment_policy">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <a href="#" class="ttm-textcolor-skincolor">Privecy policy</a> </p>
                                                <button type="submit" class="button ttm-btn ttm-btn-size-sm ttm-btn-bgcolor-darkgrey pull-right" name="checkout_place_order" id="place_order" value="Place order" data-value="Place order">Place order</button>
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

export default {
  name: "Checkout",
  mixins: [seo],
  components: {
    "app-master" : Master,
    "app-breadcrumb": BreadCrumb
  },
  computed: {
      
  },


  created(){
      this.seoMetaData('Checkout', ' ');
  }

  
};

</script>
