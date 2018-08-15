import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";
import App from "./App.vue";
import { routes } from "./routes";

Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter({ routes });

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
