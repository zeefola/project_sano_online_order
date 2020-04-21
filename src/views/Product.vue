<template>
   <app-master>

    <div slot='breadcrumb'>
        <app-breadcrumb>
            <div class="title-box text-left">
                <div class="page-title-heading">
                    <h1 class="title">Products</h1>
                </div><!-- /.page-title-captions -->
                <div class="breadcrumb-wrapper">
                    <span>
                       <router-link to="/" tag="a" > <i class="ti ti-home"></i>&nbsp;&nbsp;Home </router-link>
                    </span>
                    <span class="ttm-bread-sep ttm-textcolor-white">&nbsp;   →  &nbsp;</span>
                    <span class="ttm-textcolor-skincolor">Products</span>
                </div>  
            </div>
        </app-breadcrumb>
    </div>


    

      <div slot="main-content">
            <!-- sidebar -->
        <div class="sidebar ttm-bgcolor-white clearfix">
            <div class="container">
                <!-- row -->
                <div class="row">
                    <div class="col-lg-12 content-area">
                        <div class="row">
                            <div class="col-md-12">
                                <p class="products-result-count">Showing {{ items.length }} items  </p>
                                <form class="products-ordering float-sm-right">
                                    <div class="form-group mb-30">
                                        <select class="form-control border" @change="check($event)" >
                                            <option  value="all" selected>All Categories</option>
                                            <option v-for="(category, index) in categories" :key="index+'category'" :value="category">{{ category}}</option>
                                        </select>
                                    </div>
                                </form>
                            </div>
                        </div>

                       


               
                       
                    </div>
                </div><!-- row end -->


                 
                  <div class="flex-container">
                    <div class="item"  v-for="(product, index) in this.$store.state.shop.items" :key="index+'items'">
                        <div class="item__featured_image">
                            <img :src="product.featured_image">

                           
                        </div>
                         

                        <div class="item__content">
                            <div class="item__content__title">
                                {{ product.name }}
                            </div>

                            <div class="item__content__price">
                                &#8358; {{ product.price | number_format }}
                            </div>


                        </div>

                        <div class="item__overlay">
                             <div class="item__overlay__container">
                                  <div class="item__overlay__container__button" @click.prevent="add_to_cart(product)">
                                      Add to cart
                                  </div>
                             </div>
                         </div>
                        
                    </div>

                        
                  </div>
                



            </div>
        </div>
        <!-- sidebar end -->
      </div>
   </app-master>
</template>

<script>
// @ is an alias to /src
import Master from "@/components/Master.vue";
import Slider from "@/components/Slider.vue";
import BreadCrumb from "@/components/BreadCrumb.vue";
import {seo} from "../Repositories/seo.js";
import { pick } from "../Repositories/pick"
import { vuesax } from "../Repositories/vuesax"
import { mapState, mapMutations, mapActions } from "vuex"



export default {
  name: "Welcome",
  mixins: [seo, pick, vuesax],
  components: {
    "app-master" : Master,
    "app-breadcrumb": BreadCrumb
  },
  data(){
      return {
          cat: '',
      }
  },
  computed: {

        ...mapState(
          'shop',
          [
          'items',
          'categories',
          ]
        ),

        ...mapState(
          'cart',
          [
          'cart',
          ]
        )


  },
  methods: {
        check(e){
           let new_val = e.target.value;
           if( new_val != 'all'){
              this.fetchItemsByCategory(new_val);
            }else{
                this.fetchAllItems()
            }
        },
        ...mapMutations(
          'shop',
          [
          'fetchAllItems',
          'fetchItemsByCategory',
          'fetchItemCategories',
          'FETCH_PRELOADER',
          ]
        ),

        

        add_to_cart(payload){ 
            let x = this;
           this.$store.dispatch('cart/add_to_cart',payload).then((yes) =>{
              
              x.showNotif({ type: 'success', position: 'bottom-right', message: 'Product added to cart'});
           })
        }


  },
    created(){
        //   (title, description)
        this.seoMetaData('Home','Largest Essential Oil Producer');

        //Preloader
        this.FETCH_PRELOADER()

        

        //Fetch categories
        this.fetchItemCategories()


        
        //console.log(process.env.VUE_APP_API_KEY)

        //console.log(process.env.VUE_APP_API_KEY)
       
        

    }
};
</script>


<style scoped>
    .add-to-cart-btn a:hover,
    .add-to-cart-btn a:active
    {
        cursor: pointer;
        color: white;
    }



    .flex-container{
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        
    }

    


    .item{
        display: flex;
        flex-flow: column wrap;
        width: 16.4rem;
        height: auto;
        margin: 20px 5px;
        position: relative;
        border: 1px solid beige;

      
        
    }

    .item__overlay{
        position: absolute;
        height: 100%;
        background: rgba(0,0,0,0.2);
        display: none;
        
    }

    .item__overlay__container{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .item__overlay__container__button{
      width: auto;
      background: #232323;
      color: white;
      font: inherit;
      text-align: center;
      padding: 8px 16px;
      cursor: pointer;
      font-size: 1rem;
    }

    .item__overlay__container__button:hover,
    .item__overlay__container__button:active{
        background: #00a85a;
    }

    .item:hover .item__overlay,
    .item:active .item__overlay{
        width: 100%;
        display: block;
    }


    .item .item__featured_image{
        height: 262px;
        width: 100%;
        
    }

     .item .item__featured_image img{
         height: 100%;
         width: 100%;
     }

    .item .item__content{
        height: 90px;
        padding: 18px;
        border-top: 1px solid #f0f0f0;
        color: #232323;
        background: #cccccc2e;
    }

    .item .item__content .item__content__title{
        font-size: 1rem;
        font-weight: 500;
    }

     .item .item__content .item__content__price{
        font-size: 1rem;
    }



    @media (min-width: 0px) and (max-width: 600px){
        .item{
            width: 45%;
            height: auto;
        }

        .item .item__content .item__content__title{
            font-weight: normal;
            font-size: 0.8rem;
        }

        .item .item__content .item__content__price{
            font-weight: normal;
            font-size: 0.8rem;
        }

         .item .item__featured_image{
            height: auto;
            width: 100%;   
        }
    }
</style>
