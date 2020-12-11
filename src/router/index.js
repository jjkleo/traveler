import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: { name: "Home" } },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/resource",
    name: "Resource",
    component: () => import(/* webpackChunkName: "resource" */ "../views/Resource.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  routes
});

export default router;
