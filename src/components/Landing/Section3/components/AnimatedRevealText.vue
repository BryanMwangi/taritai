<script setup>
import { useAnimationStore } from "@/stores/animation";
import { onMounted, onUnmounted, ref } from "vue";

const props = defineProps({
  text: String,
  color: String,
  speed: String,
  class: String,
});
const animationStore = useAnimationStore();
const textRevealRef = ref(null);
const textHeaderRef = ref(null);
const scrollElemt = ref(null);
const textArray = props.text.split(" ");

const onIntersect = (e) => {
  e.forEach((entry) => {
    if (entry.isIntersecting) {
      animationStore.startBackDarkAnimation();
      textRevealRef.value.style.backgroundColor = "rgb(0,0,0)";
      textHeaderRef.value.style.color = "rgb(255,255,255)";
    } else {
      animationStore.stopBackDarkAnimation();
      textRevealRef.value.style.backgroundColor = "rgb(255,255,255)";
      textHeaderRef.value.style.color = "rgb(0,0,0)";
    }
  });
};

const observer = new IntersectionObserver(onIntersect, {
  root: document.querySelector(".main-container"),
  threshold: 0.3,
});

onMounted(() => {
  if (textRevealRef.value) {
    observer.observe(textRevealRef.value);
  }
});

onUnmounted(() => {
  if (textRevealRef.value) {
    observer.unobserve(textRevealRef.value);
  }
});

const revealText = () => {
  if (!scrollElemt.value) return;

  const textElements = document.querySelectorAll(".text-white");
  textElements.forEach((el, index) => {
    const rect = el.getBoundingClientRect();

    if (rect.top < scrollElemt.value.clientHeight * 0.6 && rect.bottom >= 0) {
      // small timeout to debounce
      setTimeout(() => {
        el.classList.add("visible");
      }, 200);
    } else {
      el.classList.remove("visible");
    }
  });
};

onMounted(() => {
  scrollElemt.value = document.querySelector(".main-container");
  if (scrollElemt.value) {
    scrollElemt.value.addEventListener("scroll", revealText);
    revealText();
  }
});

onUnmounted(() => {
  if (scrollElemt.value) {
    scrollElemt.value.removeEventListener("scroll", revealText);
  }
});
</script>
<template>
  <div class="wrapper-container" ref="textRevealRef">
    <div class="block m-auto w-full max-w-[calc(1234px+2rem)] px-[2rem]">
      <div class="text_reveal_wrapper">
        <h1 class="text-6xl text-center text_header" ref="textHeaderRef">
          About Us
        </h1>
        <div class="text_reveal_sticky">
          <div class="relative w-full h-full">
            <p
              class="title-lead font-semibold leading-none text-left flex flex-wrap"
            >
              <span
                v-for="(word, index) in textArray"
                :key="index"
                :class="['text-white', { visible: index === 0 }]"
                class="ml-2"
              >
                {{ word }}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.text_reveal_wrapper {
  position: relative;
  min-height: 250vh;
  height: max-content;
  padding-top: 20vh;
}
.wrapper-container {
  width: 100vw;
  transition: background-color 2s ease-in-out, color 2s ease-in-out;
}
.text_reveal_sticky {
  position: sticky;
  top: 0;
  left: 0;
  padding: 5rem 0;
  display: flex;
  height: 50%;
}

.title-lead {
  font-size: 3.8rem;
  line-height: 1.2;
}
.text_header {
  transition: color 0.5s ease-in-out, color 0.5s ease-in-out;
}

.text-white {
  opacity: 0.2;
  transition: opacity 0.5s ease-in-out;
}

.text-white.visible {
  opacity: 1;
}
</style>
