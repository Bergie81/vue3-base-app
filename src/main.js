import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./main.css";

import VueProgressBar from "@aacassandra/vue3-progressbar";
import { createMetaManager, plugin as metaPlugin } from "vue-meta";
// import VueSmoothScroll from "vue3-smooth-scroll";
import VueScrollTo from "vue-scrollto";
import VueLazyLoad from "vue3-lazyload";

const optionsProgressBar = {
  color: "#304269",
  failedColor: "#874b4b",
  thickness: "4px",
  transition: {
    speed: "0.2s",
    opacity: "0.6s",
    termination: 300,
  },
  autoRevert: true,
  location: "bottom",
  inverse: false,
};

const optionsScroll = {
  container: "body",
  duration: 800,
  easing: [1, 0, 0.67, 1],
  //easing: [0.5, 0.0, 0.0, 1.25],
  // easing: "ease-in-out",
  offset: -80,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true,
};

const optionsLazyLoading = {
  error: "../img/image_loading-error.png",
  loading: "../img/image-loader_bar.gif",
  observerOptions: { rootMargin: "0px", threshold: 0.1 },
  // lifecycle: {
  //   loading: (el) => {
  //     console.log("image loading", el);
  //   },
  //   error: (el) => {
  //     console.log("image error", el);
  //   },
  //   loaded: (el) => {
  //     console.log("image loaded", el);
  //   },
  // },
};

const app = createApp(App)
  .use(VueProgressBar, optionsProgressBar)
  .use(router)
  .use(store)
  .use(createMetaManager())
  .use(metaPlugin)
  .use(VueScrollTo, optionsScroll)
  .use(VueLazyLoad, optionsLazyLoading);

app.mount("#app");
