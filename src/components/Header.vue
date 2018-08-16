<template>
<div class="header">
  <router-link to="instructions" tag="h1">Stock Game</router-link>
  <nav>
    <router-link to="portfolio" tag="li">Portfolio</router-link>
    <router-link to="stocks" tag="li">Stocks</router-link>
    <li @click="endDay">End Day</li>
    <li>Funds: ${{ funds }}</li>
  </nav>
</div>  
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
export default {
  name: "Header",
  computed: {
    ...mapGetters(["funds"])
  },
  methods: mapMutations(["endDay"])
};
</script>

<style>
nav {
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-around;
  list-style: none;
  cursor: pointer;
}
.header {
  padding-bottom: 10vw;
}
</style>
