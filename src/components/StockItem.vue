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
      <button>{{ currentRoute === "stocks" ? "Buy" : "Sell" }}</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "StockItem",
  props: ["currentRoute", "stockName", "currentValue", "amountOwned"]
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
  align-content: flex-start;
  justify-content: space-around;
  padding-right: 4.5rem;
}

button {
  margin-right: 1vw;
}

.label {
  font-size: 0.3rem;
}
</style>
