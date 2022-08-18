<template>
  <main class="container">
    <comp-pinia />
    <comp-vuex />
  </main>
</template>

<script setup lang="ts">
import compVuex from "./components/comp-vuex.vue";
import compPinia from "./components/comp-pinia.vue";
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.container {
  display: flex;
  justify-content: center;
}

.container>div {
  width: 360px;
  margin: 0 20px;
}
</style>
