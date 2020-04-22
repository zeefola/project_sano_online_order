import Vue from "vue";
import VueRouter from "vue-router";
import Welcome from "../views/Welcome.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome
  },
  {
    path: "/products",
    name: "Products",
    component: () => import("../views/Products.vue")
  },
  {
    path: "/category/:name",
    name: "Category",
    component: () => import("../views/Category.vue")
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../views/Cart.vue")
  },

  {
    path: "/shipping",
    name: "Shipping",
    component: () => import("../views/Shipping.vue")
  },

  {
    path: "/checkout",
    name: "Checkout",
    component: () => import("../views/Checkout.vue")
  },

  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue")
  },

  {
    path: "/404",
    name: "Error",
    component: () => import("../views/Error.vue")
  },
  { path: '*', redirect: '/404'},
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
