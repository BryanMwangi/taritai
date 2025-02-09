<script setup>
import { ref } from "vue";

const props = defineProps({
  spotlightColor: { type: String, default: "rgba(0, 229, 255, 0.2)" },
  class: String,
});

const targetRef = ref(null);

const handleMouseMove = (e) => {
  const rect = targetRef.value.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  targetRef.value.style.setProperty("--mouse-x", `${x}px`);
  targetRef.value.style.setProperty("--mouse-y", `${y}px`);
  targetRef.value.style.setProperty("--spotlight-color", props.spotlightColor);
};
</script>
<template>
  <div
    ref="targetRef"
    :onmousemove="handleMouseMove"
    :class="class"
    class="card-spotlight"
  >
    <slot />
  </div>
</template>

<style scoped>
.card-spotlight {
  position: relative;
  border-radius: 1.5rem;
  overflow: hidden;
  --mouse-x: 50%;
  --mouse-y: 50%;
  --spotlight-color: rgba(255, 255, 255, 0.05);
}

.card-spotlight::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    circle at var(--mouse-x) var(--mouse-y),
    var(--spotlight-color),
    transparent 80%
  );
  opacity: 0;
  transition: opacity 0.5s ease;
  pointer-events: none;
}

.card-spotlight:hover::before,
.card-spotlight:focus-within::before {
  opacity: 0.6;
}
</style>
