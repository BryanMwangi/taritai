<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { useAnimationStore } from "@/stores/animation";
import ContactForm from "./components/ContactForm.vue";

const animationStore = useAnimationStore();

const textRevealRef2 = ref(null);

const onIntersect = (e) => {
  e.forEach((entry) => {
    if (entry.isIntersecting) {
      animationStore.startBackDarkAnimation();
    } else {
      animationStore.stopBackDarkAnimation();
    }
  });
};

const observer = new IntersectionObserver(onIntersect, {
  root: document.querySelector(".main-container"),
  threshold: 0.7,
});

onMounted(() => {
  if (textRevealRef2.value) {
    observer.observe(textRevealRef2.value);
  }
});

onUnmounted(() => {
  if (textRevealRef2.value) {
    observer.unobserve(textRevealRef2.value);
  }
});
</script>
<template>
  <section
    class="contact-section flex flex-col w-full min-h-[100vh] h-max bg-[rgb(69,4,10)] py-[10vh]"
    ref="textRevealRef2"
  >
    <div class="flex flex-col justify-center items-center">
      <h1 class="hero-h1 font-medium text-center text-6xl text-white">
        Take the first step toward the success of your business
      </h1>
      <p
        class="header-p text-white text-center text-xl font-medium w-[60%] my-4"
      >
        Taritai is reinventing project management and management consulting for
        for large enterprises. We are a team of experts who have been working in
        the industry for over 10 years.
      </p>
    </div>
    <ContactForm />
  </section>
</template>
