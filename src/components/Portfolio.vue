<template>
  <v-tab-item :key="portfolio">
    <v-card>
    <v-card-title>Portfolio</v-card-title>
      <stock-item v-for="(stock, i) in ownedStocks"
        :key="i" 
        :current-route="currentRoute"
        :stock="stock"
        ></stock-item>
    </v-card>
  </v-tab-item>
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

