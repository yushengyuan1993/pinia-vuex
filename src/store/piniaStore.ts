import { defineStore } from "pinia";

interface State {
  count: number;
  msg: string;
}

export const useCounterStore = defineStore("counter", {
  state: (): State => ({
    count: 10086,
    msg: "",
  }),
  getters: {
    doubleCount(state) {
      return state.count * 2;
    },
  },
  actions: {
    increment() {
      this.count++;
    },
    setGreeter() {
      const p = new Promise<string>((resolve, reject) => {
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
        this.msg = res;
      }).catch((err) => {
        this.msg = err;
      });
    },
  },
});
