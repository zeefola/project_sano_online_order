<template>
  <!--page start-->
    <div class="page">

       <app-preloader> </app-preloader>
       <app-header></app-header>
       <slot name='breadcrumb'></slot>

        <slot name="slider"></slot>
        
        
        <div class="site-main">
             <slot name="main-content"></slot>
        </div>
        
        

      
        <app-footer></app-footer>
        <app-back-to-top></app-back-to-top>

        
        

    </div><!-- page end -->
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Footer from "@/components/Footer.vue";
import Preloader from "@/components/Preloader.vue";
import Header from "@/components/Header.vue";
import BackToTop from "@/components/BackToTop.vue";

export default {
  name: "Master",
  components: {
    "app-footer" : Footer,
    "app-preloader": Preloader,
    "app-header": Header,

    "app-back-to-top" : BackToTop,
  }
};
</script>
