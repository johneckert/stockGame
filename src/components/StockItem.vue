<template>
  <div>
    <ul>
       <li>
      <span class="label">Name: </span>
      <span class="value">{{stock.name}}</span>
      </li>
      <li>
      <span class="label">Value: </span>
      <span class="value">{{stock.value}}</span>
      </li>
      <li>
      <span class="label">Owned: </span>
      <span class="value">{{stock.owned}}</span>
      </li>
      <li>
      <input v-model="input" type="number" >
      <button v-if="currentRoute === 'stocks'" @click="buyStock({stock: stock, amt: input})">Buy</button>
      <button v-else @click="sellStock({stock: stock, amt: input})">Sell</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "StockItem",
  props: ["currentRoute", "stock"],
  data() {
    return {
      input: 0
    };
  },
  methods: {
    ...mapMutations(["buyStock", "sellStock"])
  }
};
</script>

<style scoped>
/* div {
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
} */
</style>
