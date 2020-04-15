<template>
   <app-master>

    <div slot='breadcrumb'>
        <app-breadcrumb>
             <div class="title-box text-left">
                  <div class="page-title-heading">
                      <h1 class="title">Shipping</h1>
                  </div><!-- /.page-title-captions -->
                  <div class="breadcrumb-wrapper">
                      <span>
                          <router-link to="/" tag="a" > <i class="ti ti-home"></i>&nbsp;&nbsp;Home </router-link>
                      </span>
                      <span class="ttm-bread-sep ttm-textcolor-white">&nbsp;   →  &nbsp;</span>
                      <span class="ttm-textcolor-skincolor">Shipping</span>
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
                                        <!-- <div class="col-sm-6">
                                            <div class="form-group">
                                                <label>Fullname<abbr>*</abbr></label>
                                                <input type="text" v-model="fullname"  class="form-control border">
                                            </div>
                                        </div> -->
                                        <!-- <div class="col-sm-6">
                                            <div class="form-group">
                                                <label>Email<abbr>*</abbr></label>
                                                <input type="email" v-model="email" class="form-control border">
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <label>Telephone<abbr>*</abbr></label>
                                                <input type="text" v-model="telephone" class="form-control border">
                                            </div>
                                        </div>

                                      
                                        <div class="col-sm-6">
                                            <div class="form-group">
                                                <label>State <abbr class="">*</abbr></label>
                                                <select v-model="state" tabindex="-1" aria-hidden="true" class="form-control border"> 
                                                    <option value="lagos">Lagos</option>
                                                    <option value="ibadan">Oyo</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div class="col-sm-12">
                                            <div class="form-group">
                                                <label>City<abbr>*</abbr></label>
                                                <input type="text" v-model="city" class="form-control border">
                                            </div>
                                        </div> -->



                                        
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <h4>Shipping Information</h4>
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <div class="form-group">
                                                <label>Shipping Address <abbr>*</abbr></label>
                                                <textarea  class="form-control border" rows="4"></textarea>
                                            </div>
                                        </div>

                                         <div class="col-sm-12">
                                            <div class="form-group">
                                                <label>Local Govt Area <abbr class="">*</abbr></label>
                                                <select v-model="state" tabindex="-1" aria-hidden="true" class="form-control border"> 
                                                    <option value="lagos">Lagos</option>
                                                    <option value="ibadan">Oyo</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div class="col-sm-12">
                                             <div class="button-block">
                                                <router-link  to="/cart" class="button-block__item prev"> Back </router-link>
                                                <div class="button-block__item next">Proceed to checkout </div>
                                                
                    
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
import { mapState, mapMutations, mapGetters } from 'vuex';

export default {
  name: "Checkout",
  mixins: [seo,pick],
  components: {
    "app-master" : Master,
    "app-breadcrumb": BreadCrumb
  },
  computed: {

    //    fullname(){

    //    },

       
      
  },


  created(){
      this.seoMetaData('Shipping', ' ');
  }

  
};

</script>


<style>
.bg-grey-light{
    background: #cccccc24;
}




</style>
