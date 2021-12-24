import { createStore } from "vuex";
import app from "./modules/app";
import components from "./modules/components";

const store = createStore({
  modules: {
    app,
    components,
  },
});

export default store;
