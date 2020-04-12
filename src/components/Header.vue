
<template>
  <!--header start-->
  <header id="masthead" class="header ttm-header-style-01">
    <!-- ttm-header-wrap -->
    <div class="ttm-header-wrap">
      <!-- ttm-stickable-header-w -->
      <div id="ttm-stickable-header-w" class="ttm-stickable-header-w clearfix">
        <!-- ttm-topbar-wrapper -->
        <div class="ttm-topbar-wrapper clearfix">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="ttm-topbar-content">
                  <ul class="top-contact top-contact--bg text-left">
                    <li>Organic Chicken</li>
                  </ul>
                  <div class="topbar-right text-right">
                    <ul class="top-contact">
                      <li>Office Hour : 08:00am - 5:00pm</li>
                    </ul>
                    <div class="ttm-social-links-wrapper list-inline">
                      <ul class="social-icons">
                        <li>
                          <a href="#"><i class="fa fa-facebook"></i></a>
                        </li>
                        <li>
                          <a href="https://twitter.com/nardusltd"><i class="fa fa-twitter"></i></a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/nardusltd/"><i class="fa fa-instagram"></i></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- ttm-topbar-wrapper end -->
        
        
      </div>
      <!-- ttm-stickable-header-w end-->
    </div>
    <!--ttm-header-wrap end -->
  </header>
  <!--header end-->
</template>

<script>
export default {
  name: "Header",
  props: {},
  data(){
    return {
      menuStatus: false
    }
  },
  methods: {
    activate: function(){
      this.menuStatus = !this.menuStatus;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
