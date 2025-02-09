<script setup>
import ContactPage from "@/components/Contact/ContactPage.vue";
import Hero from "@/components/Landing/Hero/Hero.vue";
import Section2 from "@/components/Landing/Section2/Section2.vue";
import Section3 from "@/components/Landing/Section3/Section3.vue";
import Section4 from "@/components/Landing/Section4/Section4.vue";
import Section5 from "@/components/Landing/Section5/Section5.vue";
</script>

<template>
  <section class="min-h-[100vh] h-max">
    <Hero />
  </section>
  <section class="w-full h-max py-4">
    <Section2 />
  </section>
  <Section3 />
  <section class="w-full h-max">
    <Section4 />
  </section>
  <section class="w-full h-max">
    <Section5 />
  </section>
  <ContactPage />
</template>
