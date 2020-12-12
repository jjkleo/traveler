import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Summary from "@/views/home/Summary.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/home" },
  {
    path: "/home",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/",
        name: "Summary",
        component: Summary
      },
      {
        path: "images",
        name: "Images",
        component: () => import(/* webpackChunkName: "images" */ "@/views/home/Images.vue")
      },
      {
        path: "videos",
        name: "Videos",
        component: () => import(/* webpackChunkName: "videos" */ "@/views/home/Videos.vue")
      },
      {
        path: "diaries",
        name: "Diaries",
        component: () => import(/* webpackChunkName: "diaries" */ "@/views/home/Diaries.vue")
      },
      {
        path: "comments",
        name: "Comments",
        component: () => import(/* webpackChunkName: "comments" */ "@/views/home/Comments.vue")
      }
    ]
  },
  {
    path: "/resource",
    name: "Resource",
    component: () => import(/* webpackChunkName: "resource" */ "../views/Resource.vue")
  },
  {
    path: "*",
    redirect: "/"
  }
];

const router = new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  routes
});

export default router;
