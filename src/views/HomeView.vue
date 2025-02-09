<script setup>
import Hero from "@/components/Landing/Hero/Hero.vue";
import Section2 from "@/components/Landing/Section2/Section2.vue";
import Section3 from "@/components/Landing/Section3/Section3.vue";
import Section4 from "@/components/Landing/Section4/Section4.vue";
import Section5 from "@/components/Landing/Section5/Section5.vue";
import ContactPage from "@/components/Contact/ContactPage.vue";
import { useRoute } from "vue-router";
import { watch } from "vue";

const route = useRoute();
const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

watch(
  route,
  () => {
    scrollTo(route.hash.slice(1));
  },
  {
    immediate: true,
  }
);
</script>

<template>
  <section class="min-h-[100vh] h-max" id="hero">
    <Hero />
  </section>
  <section class="w-full h-max mb-[10vh] py-[10vh] relative" id="highlights">
    <Section2 />
  </section>
  <Section3 />
  <section class="w-full h-max" id="projects">
    <Section4 />
  </section>
  <section class="w-full h-max" id="testimonials">
    <Section5 />
  </section>
  <section id="contact">
    <ContactPage />
  </section>
</template>
<style scoped></style>
