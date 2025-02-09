<script setup>
import { RouterLink } from "vue-router";
import taritailogo from "@/assets/images/taritai_logo.png";
import { computed, ref } from "vue";
import { CgMenuRight } from "@kalimahapps/vue-icons";
import { useMediaQuery } from "@vueuse/core";
import NavSheet from "./NavSheet.vue";
import { useAnimationStore } from "@/stores/animation";

const isMobile = useMediaQuery("(max-width: 1024px)");
const animationStore = useAnimationStore();
const open = ref(false);

const navBarItemStyle = computed(() => ({
  color: animationStore.textColor,
}));

const handleClose = () => {
  open.value = false;
};

const handleOpen = () => {
  open.value = true;
};
</script>
<template>
  <NavSheet :open="open" @close="handleClose" />
  <div
    class="nav-container w-full flex justify-between items-center z-[12] h-[80px] absolute flex-row"
  >
    <RouterLink to="/" class="pl-10">
      <img
        :src="taritailogo"
        class="w-[60px] h-[60px] blk-element object-contain max-w-[80%]"
      />
    </RouterLink>
    <div
      class="flex flex-row justify-evenly items-center gap-[3rem] pr-10"
      v-if="!isMobile"
    >
      <RouterLink to="/" class="nav-bar-item" :style="navBarItemStyle"
        >Home</RouterLink
      >
      <RouterLink to="/about" class="nav-bar-item" :style="navBarItemStyle"
        >About</RouterLink
      >
      <RouterLink to="/#contact" class="nav-bar-item" :style="navBarItemStyle"
        >Contact</RouterLink
      >
      <RouterLink to="/about" class="nav-bar-item" :style="navBarItemStyle"
        >Blog</RouterLink
      >
    </div>
    <button
      v-else
      :onclick="handleOpen"
      class="nav-bar-item mr-6"
      :style="navBarItemStyle"
    >
      <CgMenuRight class="text-3xl" />
    </button>
  </div>
</template>
<style scoped>
.nav-container {
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: 3s ease-in-out;
}
.nav-bar-item {
  font-size: 1rem;
  overflow: hidden;
}
.nav-bar-item:hover {
  color: #b23633;
}
</style>
