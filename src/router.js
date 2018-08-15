import Vue from "vue";
import BasicInfo from "./views/BasicInfo";
import BusinessInfo from "./views/BusinessInfo";
import Glide from "./views/Glide";
import Router from "vue-router";
import Welcome from "./views/Welcome";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "welcome",
      component: Welcome
    },
    {
      path: "/basic-info",
      name: "basic",
      component: BasicInfo
    },
    {
      path: "/business-info",
      name: "business",
      component: BusinessInfo
    },
    {
      path: "/glide-select",
      name: "glide",
      component: Glide
    }
  ]
});
