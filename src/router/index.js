import Vue from "vue";
import VueRouter from "vue-router";
import Dt from "../components/Dt.vue";
import NewsView from "@/components/NewsView";
import "../css/reset.css"
Vue.use(VueRouter);

const routes = [
  {
    path: "/new",
    name: "new",
    component: NewsView,
  },
  {
    path: "/dt",
    name: "Dt",
    component: Dt,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
