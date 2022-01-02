import { createRouter, createWebHistory } from "vue-router";
import store from "@/store/index";

//TODO: Dynamic import. Static import due to testing prerender.
import Home from "@/views/HomePage.vue";
import About from "@/views/AboutPage.vue";
import Components from "@/views/ComponentsPage.vue";
import Contact from "@/views/ContactPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    // component: () =>
    //   import(/* webpackChunkName: "home" */ "@/views/HomePage.vue"),
  },
  {
    path: "/components",
    name: "components",
    component: Components,
    // component: () =>
    //   import(/* webpackChunkName: "components" */ "@/views/ComponentsPage.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: About,
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "@/views/AboutPage.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
    // component: () =>
    //   import(/* webpackChunkName: "contact" */ "@/views/ContactPage.vue"),
  },
  // {
  //   path: "/:notFound(.*)",
  //   name: "notfound",
  //   // component: NotFound
  //   component: () =>
  //     import(/* webpackChunkName: "notfound" */ "@/views/404Page.vue"),
  // },
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
