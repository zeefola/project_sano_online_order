<template>
   <app-master>


      <div slot="main-content">

           <!--error-404 start-->
        <section class="error-404">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="ttm-big-icon ttm-textcolor-skincolor">
                            <i class="fa fa-thumbs-o-down"></i>
                        </div>
                        <header class="page-header"><h1 class="page-title">404 ERROR</h1></header>
                        <div class="page-content"> <p>This page may have been moved or deleted. Be sure to check your spelling.</p></div>
                        <router-link to="/" tag="a" class="ttm-btn ttm-btn-size-md ttm-btn-bgcolor-skincolor mb-15"> Back To Home </router-link>
                    </div>
                </div>
            </div>
        </section>
        <!--error-404 end-->
           

           
      </div>



   </app-master>
</template>

<script>
// @ is an alias to /src
import Master from "@/components/Master.vue";
export default {
  name: "Faq",
  components: {
    "app-master" : Master,
  }
};
</script>





