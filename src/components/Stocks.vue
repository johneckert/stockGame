<template>
  <div>
    <h2>Available Stocks</h2>
    <stock-item v-for="(stock, i) in stocks"
      :key="i" 
      :current-route="currentRoute"
      :stock="stock"
      ></stock-item>
  </div>
</template>

<script>
import stockItem from "./StockItem.vue";
import { mapGetters } from "vuex";
export default {
  name: "Stocks",
  components: {
    stockItem
  },
  data() {
    return {
      currentRoute: "stocks"
    };
  },
  computed: {
    ...mapGetters(["stocks"])
  }
};
</script>

<style>
</style>
