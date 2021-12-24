import { createRouter, createWebHistory } from "vue-router";
import PageLayout from "./layout/PageLayout.vue";

const staticRoutes = [
  {
    path: "",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "home" */ "@/views/HomeView.vue"),
  },
  {
    path: "about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/AboutView.vue"),
  },
];

// All routes
const routes = [
  {
    path: "/",
    component: PageLayout,
    children: [...staticRoutes],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
