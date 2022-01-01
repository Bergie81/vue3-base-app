import { createRouter, createWebHistory } from "vue-router";
import store from "@/store/index";

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "home" */ "@/views/HomePage.vue"),
  },
  {
    path: "/components",
    name: "components",
    component: () =>
      import(/* webpackChunkName: "components" */ "@/views/ComponentsPage.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/AboutPage.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () =>
      import(/* webpackChunkName: "contact" */ "@/views/ContactPage.vue"),
  },
  {
    path: "/:notFound(.*)",
    name: "notfound",
    component: () =>
      import(/* webpackChunkName: "notfound" */ "@/views/404Page.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    let position = { x: 0, y: 0 };
    // Keep scroll position when using browser buttons
    if (savedPosition) {
      position = savedPosition;
    }

    // Workaround for transitions scrolling to the top of the page
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(position);
      }, 500);
    });
  },
});

// NAVIGATION GUARDS
router.beforeEach((to, from, next) => {
  store.dispatch("openMobileMenu", false);
  next();
});

// Prevents jumping to top when routing
if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

export default router;
