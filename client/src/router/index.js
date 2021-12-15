import Vue from "vue";
import Router from "vue-router";
import ToDo from "@/components/ToDo";
import Player from "@/components/Player";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: Player
    }
  ]
});
