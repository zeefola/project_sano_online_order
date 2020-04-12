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
                            <!-- ttm-cart-form -->
                            <form class="ttm-cart-form" action="#" method="post">
                                <table class="shop_table shop_table_responsive">
                                    <thead>
                                        <tr>
                                            <th class="product-remove">&nbsp;</th>
                                            <th class="product-thumbnail">&nbsp;</th>
                                            <th class="product-name">Product</th>
                                            <th class="product-mainprice">Price</th>
                                            <th class="product-quantity">Quantity</th>
                                            <th class="product-subtotal">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="cart_item">
                                            <td class="product-remove">
                                                <a href="#" class="remove">×</a>
                                            </td>
                                            <td class="product-thumbnail">
                                                <a href="product-details.html">
                                                    <img class="img-fluid" src="https://via.placeholder.com/470X520/444444.jpg" alt="product-img">
                                                </a>
                                            </td>
                                            <td class="product-name" data-title="Product">
                                                <a href="product-details.html">Beardrock Root</a>
                                            </td>
                                            <td class="product-mainprice" data-title="Price">
                                                <span class="Price-amount">
                                                    <span class="Price-currencySymbol">$</span>40.00
                                                </span>
                                            </td>
                                            <td class="product-quantity" data-title="Quantity">
                                                <div class="quantity">
                                                    <input type="number" class="form-control" value="1" min="0" title="Qty">
                                                </div>
                                            </td>
                                            <td class="product-subtotal" data-title="Total">
                                                <span class="Price-amount">
                                                    <span class="Price-currencySymbol">$</span>40.00
                                                </span>
                                            </td>
                                        </tr>
                                        <tr class="cart_item">
                                            <td class="product-remove">
                                                <a href="#" class="remove">×</a>
                                            </td>
                                            <td class="product-thumbnail">
                                                <a href="product-details.html">
                                                    <img class="img-fluid" src="https://via.placeholder.com/470X520/444444.jpg" alt="product-img">
                                                </a>
                                            </td>
                                            <td class="product-name" data-title="Product">
                                                <a href="product-details.html">Beardrock Root</a>
                                            </td>
                                            <td class="product-price">
                                                <span class="Price-amount" data-title="Price">
                                                    <span class="Price-currencySymbol">$</span>18.00
                                                </span>
                                            </td>
                                            <td class="product-quantity" data-title="Quantity">
                                                <div class="quantity">
                                                    <input type="number" class="form-control" value="1" min="0" title="Qty">
                                                </div>
                                            </td>
                                            <td class="product-subtotal" data-title="Total">
                                                <span class="Price-amount">
                                                    <span class="Price-currencySymbol">$</span>18.00
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="6" class="actions">
                                                <div class="coupon">
                                                    <input type="text" name="coupon_code" class="form-control border" value="" placeholder="Coupon code">
                                                    <button type="submit" class="button ttm-btn ttm-btn-bgcolor-darkgrey" name="apply_coupon" value="Apply coupon">Apply coupon</button>
                                                </div>
                                                <button type="submit" class="cart_button button ttm-btn ttm-btn-bgcolor-darkgrey" name="update_cart" value="Update cart" disabled="disabled">Update cart</button>
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
                                                        <span class="Price-currencySymbol">$</span>128.00
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr class="order-total">
                                                <th>Total</th>
                                                <td data-title="Total">
                                                    <strong><span class="Price-amount">
                                                        <span class="Price-currencySymbol">$</span>128.00</span>
                                                    </strong>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div class="proceed-to-checkout">
                                        <a href="checkout.html" class="button ttm-btn ttm-btn-bgcolor-darkgrey checkout-button">Proceed to checkout</a>
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

export default {
  name: "Cart",
  mixins: [seo],
  components: {
    "app-master" : Master,
    "app-breadcrumb": BreadCrumb
  },


  created(){
      this.seoMetaData('Cart', ' ');
  }

  
};

</script>
