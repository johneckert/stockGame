<template>
  <div>
    <h2>Available Stocks</h2>
    <stock-item v-for="(stock, i) in stocks"
    :key="i" 
    :current-route="currentRoute"
    :stock-name="stock.name"
    :current-value="stock.currentValue"
    :amount-owned="stock.amountOwned"
    ></stock-item>
  </div>
</template>

<script>
import stockItem from "./StockItem.vue";
export default {
  name: "Stocks",
  components: {
    stockItem
  },
  data() {
    return {
      stocks: [
        {
          name: "Stock1",
          currentValue: 100,
          amountOwned: 0
        },
        {
          name: "Stock2",
          currentValue: 150,
          amountOwned: 0
        },
        {
          name: "Stock3",
          currentValue: 70,
          amountOwned: 0
        },
        {
          name: "Stock4",
          currentValue: 200,
          amountOwned: 0
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
      currentRoute: "stocks"
    };
  }
};
</script>

<style>
</style>
