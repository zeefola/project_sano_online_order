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
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue")
  },

  {
    path: "/faq",
    name: "Faq",
    component: () => import("../views/Faq.vue")
  },

  {
    path: "/services",
    name: "Services",
    component: () => import("../views/Services.vue")
  },

  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },

  {
    path: "/essential-oils",
    name: "Essential Oils",
    component: () => import("../views/Essential-oils.vue")
  },

  {
    path: "/hand-sanitizer",
    name: "Hand Sanitizer",
    component: () => import("../views/Hand-sanitizer.vue")
  },

  {
    path: "/hydrosol",
    name: "Hydrosol",
    component: () => import("../views/Hydrosol.vue")
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
