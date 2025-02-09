<script setup>
import { computed } from "vue";

const props = defineProps({
  color: String,
  class: String,
  innerClass: String,
  speed: String,
});

const animationSpeed = computed(() => props.speed || "6s");
const color = computed(() => props.color || "rgba(255, 255, 255, 1)");
</script>

<template>
  <div :class="props.class" class="star-border-container">
    <div
      class="border-gradient-bottom"
      :style="{
        animationDuration: animationSpeed,
        background: `radial-gradient(circle, ${color}, transparent 10%)`,
      }"
    ></div>
    <div
      class="border-gradient-top"
      :style="{
        background: `radial-gradient(circle, ${color}, transparent 10%)`,
        animationDuration: animationSpeed,
      }"
    ></div>
    <div class="inner-content" :class="props.innerClass">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.star-border-container {
  display: inline-block;
  padding: 1px 0;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
}

.border-gradient-bottom {
  position: absolute;
  width: 300%;
  height: 50%;
  opacity: 0.7;
  bottom: -11px;
  right: -250%;
  border-radius: 50%;
  animation: star-movement-bottom linear infinite alternate;
  z-index: 0;
}

.border-gradient-top {
  position: absolute;
  opacity: 0.7;
  width: 300%;
  height: 50%;
  top: -10px;
  left: -250%;
  border-radius: 50%;
  animation: star-movement-top linear infinite alternate;
  z-index: 0;
}

.inner-content {
  position: relative;
  font-size: 16px;
  text-align: center;
  z-index: 1;
}

@keyframes star-movement-bottom {
  0% {
    transform: translate3d(0%, 0%, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(-100%, 0%, 0);
    opacity: 0;
  }
}

@keyframes star-movement-top {
  0% {
    transform: translate3d(0%, 0%, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(100%, 0%, 0);
    opacity: 0;
  }
}
</style>
