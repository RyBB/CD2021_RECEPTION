import VueRouter from "vue-router";
import Vue from "vue";
import Index from "@/components/Index";
import Signup from "@/components/Signup";
import QRcode from "@/components/QRcode";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: Index,
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },
  {
    path: "/qrcode",
    name: "qrcode",
    component: QRcode,
  },
];

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition;
  } else {
    const position = {};
    // new navigation.
    // scroll to anchor by returning the selector
    if (to.hash) {
      position.selector = to.hash;
    } else {
      position.x = 0;
      position.y = 0;
    }
    return position;
  }
};
var router = new VueRouter({
  mode: "history",
  // base: process.env.ROOT_BASE,
  scrollBehavior,
  routes,
  linkActiveClass: "active",
});

export default router;
