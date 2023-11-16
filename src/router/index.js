import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import ChartView from "../views/ChartView.vue";
import LoginView from "../views/LoginView.vue";
import ProviderListView from "../views/ProviderListView.vue";
import EditProviderView from "../views/EditProviderView.vue";




Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/chart",
    name: "chart",
    component: ChartView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/providerList",
    name: "providerList",
    component: ProviderListView,
  },
  {
    path: "/editProviderView/:provider",
    name: "editProviderView",
    component: EditProviderView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
