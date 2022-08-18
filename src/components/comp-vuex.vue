<template>
  <div class="vuex">
    <h3>Vuex</h3>
    <div>
      <div>input: <input type="text" v-model="num" /></div>
      <p>view: {{ num }}</p>
      <p>store: {{ store.state.count }}</p>
      <p>getter: {{ store.getters.doubleCount }}</p>
      <p>action: {{ store.state.msg }}</p>

      <button @click="changeCount">count++</button>
      <button @click="setGreeter">setGreeter</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const num = ref(0);

const store = useStore();

const changeCount = () => {
  store.commit("increment", num);
  console.log(store.state.count);
};

const setGreeter = () => {
  store.dispatch("setGreeter");
}
</script>

<style scoped></style>
