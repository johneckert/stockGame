<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <v-card dark color="cyan elevation-10">
          <v-card-title class="display-1">
            <router-link to="instructions" tag="p">Stock Game</router-link>
          </v-card-title>
          <v-btn @click="endDay">End Day</v-btn> 
          <v-card-text>Funds: ${{ funds }}</v-card-text>
          <v-tabs absolute color="transparent" slide-color="yellow">
            <router-link to="portfolio" tag="v-tab" :key="portfolio">Portfolio</router-link>
            <router-link to="stocks" tag="v-tab" :key="stocks">Stocks</router-link>
          </v-tabs>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>  
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
/* nav {
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-around;
  list-style: none;
  cursor: pointer;
}
.header {
  padding-bottom: 10vw;
} */
</style>
