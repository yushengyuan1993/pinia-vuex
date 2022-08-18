import { createStore } from "vuex";

export const vuexStore = createStore({
  state() {
    return {
      count: 10086,
      msg: "",
    };
  },
  getters: {
    doubleCount(state) {
      return state.count * 2;
    },
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    setGreeter(state, value) {
      state.msg = value;
    },
  },
  actions: {
    setGreeter(ctx) {
      const p = new Promise((resolve, reject) => {
        const n = Math.random();

        setTimeout(() => {
          console.log("n: ", n);
          if (n > 0.5) {
            resolve("hello");
          } else {
            reject("shit");
          }
        }, 350);
      });

      p.then((res) => {
        ctx.commit("setGreeter", res);
      }).catch((err) => {
        ctx.commit("setGreeter", err);
      });
    },
  },
});
