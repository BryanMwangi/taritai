<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavBar from "./components/NavBar/NavBar.vue";
import Footer from "./components/Footer/Footer.vue";
</script>

<template>
  <div class="w-full flex flex-col relative h-max">
    <NavBar />
    <div class="main-container">
      <RouterView />
      <Footer />
    </div>
  </div>
</template>
