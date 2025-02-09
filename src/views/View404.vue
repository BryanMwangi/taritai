<script setup>
import Button from "@/components/ui/button/Button.vue";
import { RouterLink } from "vue-router";
import image_404 from "@/assets/images/404.png";
import SpotlightCard from "@/components/Animations/SpotlightCard.vue";
</script>
<template>
  <SpotlightCard
    class="w-full h-max flex flex-col justify-center items-center gap-10 py-[10vh] h-[100vh]"
    spotlight-color="rgba(28,181,224,0.2)"
  >
    <img :src="image_404" class="max-w-600px object-cover blk-element" />
    <p class="text-center text-6xl text-black">Page not found</p>
    <RouterLink to="/" class="btn-primary">
      <Button class="w-[200px] h-[50px] rounded-full text-xl">Go Home</Button>
    </RouterLink>
  </SpotlightCard>
</template>
