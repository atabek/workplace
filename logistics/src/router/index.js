import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Services from "../views/Services.vue";
import Partners from "../views/Partners.vue";
import Contacts from "../views/Contacts.vue";
import Routes from "../views/Routes.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: About
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/services",
    name: "services",
    component: Services
  },
  {
    path: "/partners",
    name: "partners",
    component: Partners
  },
  {
    path: "/contacts",
    name: "contacts",
    component: Contacts
  },
  {
    path: "/routes",
    name: "routes",
    component: Routes
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
