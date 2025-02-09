import { defineStore } from "pinia";

export const useAnimationStore = defineStore("animation", {
  state: () => ({
    isBackDark: false,
    textColor: "rgb(0,0,0)",
    backgroundColorTemp: "rgb(255,255,255)",
  }),
  actions: {
    startBackDarkAnimation() {
      this.isBackDark = true;
      this.textColor = "rgba(255,255,255)";
      this.backgroundColorTemp = "rgba(0,0,0)";
    },
    stopBackDarkAnimation() {
      this.isBackDark = false;
      this.textColor = "rgba(0,0,0)";
      this.backgroundColorTemp = "rgb(255,255,255)";
    },
  },
});
