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
        value: 0,
        owned: 0
      },
      {
        name: "Stock2",
        value: 0,
        owned: 0
      },
      {
        name: "Stock3",
        value: 0,
        owned: 0
      },
      {
        name: "Stock4",
        value: 0,
        owned: 0
      },
      {
        name: "Stock5",
        value: 0,
        owned: 0
      },
      {
        name: "Stock6",
        value: 0,
        owned: 0
      }
    ],
    funds: 5000
  },
  getters: {
    stocks: state => state.stocks,
    funds: state => state.funds,
    ownedStocks: state => {
      return state.stocks.filter(stock => {
        return stock.owned > 0;
      });
    }
  },
  mutations: {
    buyStock: (state, payload) => {
      let relStock = state.stocks.find(stock => {
        return stock.name === payload.stock.name;
      });
      let numOfStocks = parseInt(payload.amt);

      if (relStock.value * payload.amt <= state.funds) {
        relStock.owned += numOfStocks;
        state.funds -= numOfStocks * relStock.value;
        state[relStock] = relStock;
      }
    },
    sellStock: (state, payload) => {
      let relStock = state.stocks.find(stock => {
        return stock.name === payload.stock.name;
      });
      let numOfStocks = parseInt(payload.amt);

      if (relStock.owned <= numOfStocks) {
        relStock.owned -= numOfStocks;
        state.funds += numOfStocks * relStock.value;
        state[relStock] = relStock;
      }
    },
    endDay: state => {
      state.stocks.forEach(stock => {
        stock.value = Math.floor(Math.random() * 200 + 200);
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
