<template>
  <v-app id="app">
    <stockgame-header></stockgame-header>
    <router-view></router-view>
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import { mapMutations } from "vuex";
export default {
  name: "app",
  components: {
    stockgameHeader: Header
  },
  methods: mapMutations(["endDay"]),
  created() {
    this.endDay();
  }
};
</script>

<style>
/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
