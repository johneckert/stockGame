<template>
  <div>
    <h2>Portfolio</h2>
    <stock-item v-for="(stock, i) in ownedStocks"
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
  name: "Portfolio",
  components: {
    stockItem
  },
  data() {
    return {
      currentRoute: "portfolio"
    };
  },
  computed: {
    ...mapGetters(["ownedStocks"])
  }
};
</script>

<style>
</style>

