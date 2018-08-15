<template>
  <div>
    <ul>
       <li>
      <span class="label">Name: </span>
      <span class="value">{{stockName}}</span>
      </li>
      <li>
      <span class="label">Value: </span>
      <span class="value">{{currentValue}}</span>
      </li>
      <li>
      <span class="label">Owned: </span>
      <span class="value">{{amountOwned}}</span>
      </li>
      <li>
      <input v-model="input" type="number" >
      <button v-if="currentRoute === 'stocks'" @click="buyStock">Buy</button>
      <button v-else @click="sellStock">Sell</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "StockItem",
  props: ["currentRoute", "stockName", "currentValue", "amountOwned"],
  data() {
    return {
      input: 0
    };
  },
  methods: {
    ...mapMutations(["buyStock", "sellStock"]),
    buyStock() {
      this.$store.commit("buyStock", this.stockName);
    },
    sellStock() {
      this.$store.commit("sellStock", this.stockName);
    }
  }
};
</script>

<style scoped>
div {
  outline-style: ridge;
  outline-width: 0.1rem;
  padding: 0.1rem 0;
  width: 40vw;
  margin: 0 5vw;
}

ul {
  display: flex;
}

ul li {
  list-style: none;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-around;
  padding-right: 4.5rem;
}

button {
  width: 4vw;
}

input {
  width: 4vw;
}

.label {
  font-size: 0.3rem;
}
</style>
