import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

import { vuexStore } from "./store/vuexStore.js";

import "./assets/main.css";

const pinia = createPinia();

const app = createApp(App);

app.use(vuexStore);
app.use(pinia);

app.mount("#app");
