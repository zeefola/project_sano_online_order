<template>
  <!-- page-title -->
        <div class="ttm-page-title-row">
            <div class="container">
                <div class="row">
                    <div class="col-md-12"> 
                        <slot></slot>
                    </div><!-- /.col-md-12 -->  
                </div><!-- /.row -->  
            </div><!-- /.container -->                      
        </div><!-- page-title end-->
</template>

<script>
export default {
  name: "BreadCrumb",
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>


 