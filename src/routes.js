import Instructions from "./components/Instructions.vue";
import Portfolio from "./components/Portfolio.vue";
import Stocks from "./components/Stocks.vue";

export const routes = [
  {
    path: "",
    component: Instructions,
    name: "instructions"
  },
  {
    path: "/portfolio",
    component: Portfolio,
    name: "portfolio"
  },
  {
    path: "/stocks",
    component: Stocks,
    name: "stocks"
  },
  {
    path: "*",
    redirect: "/"
  }
];
