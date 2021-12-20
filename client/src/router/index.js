import Vue from "vue";
import Router from "vue-router";
import Main from "@/views/Main";
import Player from "@/components/PlayerCard";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: Main
    }
  ]
});
