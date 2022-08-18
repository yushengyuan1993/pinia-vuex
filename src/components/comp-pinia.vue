<template>
  <div class="pinia">
    <h3>Pinia</h3>
    <div>
      <div>input: <input type="text" v-model="num" /></div>
      <p>view: {{ num }}</p>
      <p>store: {{ store.count }}</p>
      <p>getter: {{ store.doubleCount }}</p>
      <p>action: {{ store.msg }}</p>

      <button @click="changeCount">count++</button>
      <button @click="setGreeter">setGreeter</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useCounterStore } from "../store/piniaStore";

const num = ref(0);

const store = useCounterStore();

const changeCount = () => {
  store.increment();
  console.log(store.count);
};

const setGreeter = () => {
  store.setGreeter();

  store.$patch({
    count: 111,
    msg: "yushare",
  });
};
</script>

<style scoped></style>
