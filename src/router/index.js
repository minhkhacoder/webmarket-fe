/** @format */

import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Features from "../components/Features.vue";
import store from "../store";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/features",
    name: "features",
    component: Features,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const publicPages = ["/login", "/register"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = store.getters.userLoggedIn;
  if (authRequired && !loggedIn) {
    next("/login");
  } else {
    next();
  }
});

export default router;
