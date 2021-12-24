import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./main.css";

import { createMetaManager, plugin as metaPlugin } from "vue-meta";

const app = createApp(App)
  .use(router)
  .use(store)
  .use(createMetaManager())
  .use(metaPlugin);

app.mount("#app");
