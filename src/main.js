import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";
import App from "./App.vue";
import { routes } from "./routes";

Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter({ routes });
const store = new Vuex.Store({
  state: {
    stocks: [
      {
        name: "Stock1",
        currentValue: 100,
        amountOwned: 10
      },
      {
        name: "Stock2",
        currentValue: 150,
        amountOwned: 0
      },
      {
        name: "Stock3",
        currentValue: 70,
        amountOwned: 1
      },
      {
        name: "Stock4",
        currentValue: 200,
        amountOwned: 56
      },
      {
        name: "Stock5",
        currentValue: 300,
        amountOwned: 0
      },
      {
        name: "Stock6",
        currentValue: 260,
        amountOwned: 0
      }
    ],
    funds: 5000
  },
  getters: {
    stocks: state => state.stocks,
    funds: state => state.funds,
    ownedStocks: state => {
      return state.stocks.filter(stock => {
        return stock.amountOwned > 0;
      });
    }
  }
});

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
