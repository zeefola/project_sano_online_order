<template>
  <!--footer start-->
        <footer class="footer widget-footer clearfix">
            <div class="first-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="cta_wrapper">
                                <div class="ttm-quicklink-box">
                                   <div class="ttm-leftlink-box">
                                       <h5 class="custom-heading"><a href="#"> <span class="ti ti-arrow-circle-left ttm-arrow-box"></span> Find Our Nearest Shop</a></h5>
                                       <i class="flaticon flaticon-house ttm-textcolor-skincolor"></i>
                                  </div>    
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="ttm-custom-ctabox">
                                <div class="cta-bg-icon"><span class="flaticon-support"></span></div>
                                <h3 class="ttm-cta-heading ttm-textcolor-skincolor">Call Us On</h3>
                                <h5 class="ttm-cta-content">{{ this.$store.state.config.telephone2 }}</h5>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="cta_wrapper">
                                <div class="ttm-quicklink-box">
                                   <div class="ttm-rightlink-box">
                                        <i class="flaticon flaticon-support ttm-textcolor-skincolor"></i>
                                        <h5 class="custom-heading"> <router-link to="/contact"> Help Center  <span class="ti ti-arrow-circle-right ttm-arrow-box"></span> </router-link> </h5>
                                  </div>    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bottom-footer-text ttm-textcolor-white">
                <div class="container">
                    <div class="row copyright">
                        <div class="col-md-12">
                            <div class="text-center">
                                <span>Copyright © 2020&nbsp;<a href="#"> {{ this.$store.state.config.app_name }} </a> All Right Reserved </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <!--footer end-->

</template>

<script>
export default {
  name: "Footer",
  data(){
      return {
        
      }
  }
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>



