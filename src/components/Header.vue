<template>
<div class="header">
  <router-link to="instructions" tag="h1">Stock Game</router-link>
  <nav>
    <router-link to="portfolio" tag="li">Portfolio</router-link>
    <router-link to="stocks" tag="li">Stocks</router-link>
    <li @click="newDay">End Day</li>
    <li>Funds: ${{ funds }}</li>
  </nav>
</div>  
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      funds: 5000
    };
  },
  methods: {
    newDay() {
      console.log("New Day!");
    }
  }
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
