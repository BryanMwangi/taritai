<script setup>
import { RouterLink } from "vue-router";
import taritailogo from "@/assets/images/taritai_logo.png";
import taritai_lettering from "@/assets/images/taritai_llp.png";
import { BxFacebook } from "@kalimahapps/vue-icons";
import { BxInstagram } from "@kalimahapps/vue-icons";
import { AnOutlinedX } from "@kalimahapps/vue-icons";
import { BxLinkedinSquare } from "@kalimahapps/vue-icons";

const year = new Date().getFullYear();
</script>
<template>
  <section class="bg-zinc-100 w-full py-[2rem] h-max">
    <div class="w-full gap-3 md:gap-6 mx-auto px-6 md:max-w-5xl">
      <div class="footer-container flex flex-row justify-between items-center">
        <div class="flex flex-col">
          <div class="flex flex-row items-center gap-2 mb-4">
            <img
              :src="taritailogo"
              class="w-[40px] h-[40px] blk-element object-contain max-w-[80%]"
              alt="taritai logo"
            />
            <img
              :src="taritai_lettering"
              class="h-[25px] blk-element object-contain max-w-[80%]"
              alt="taritai lettering"
            />
          </div>
          <div
            class="footer-actions flex flex-row justify-evenly items-center gap-[3rem] pr-10"
          >
            <RouterLink to="/about"> About Us </RouterLink>
            <RouterLink to="/#contact"> Contact Us </RouterLink>
            <RouterLink to="/about"> Blog </RouterLink>
            <RouterLink to="/about"> Careers </RouterLink>
          </div>
        </div>
        <div class="flex flex-col items-center justify-center">
          <p class="text-center text-sm text-gray-500 mb-4">
            Send us an email at
            <a href="mailto:info@taritai.co.ke" class="underline text-rose-700"
              >info@taritai.co.ke</a
            >
          </p>
          <div
            class="social-media flex flex-row justify-start items-center gap-2 w-full mt-2"
          >
            <a href="#">
              <BxFacebook class="text-xl text-gray-500" />
            </a>
            <a href="#">
              <BxInstagram class="text-xl text-gray-500" />
            </a>
            <a href="#">
              <AnOutlinedX class="text-xl text-gray-500" />
            </a>
            <a href="#">
              <BxLinkedinSquare class="text-xl text-gray-500" />
            </a>
          </div>
        </div>
      </div>
      <div class="w-full h-[1px] bg-gray-200 my-10" />
      <div class="flex flex-row justify-center items-center">
        <p class="text-gray-500 text-center">
          Copyright © {{ year }} Taritai. All rights reserved.
          <a href="#" class="text-gray-500">Privacy Policy</a>
        </p>
      </div>
    </div>
  </section>
</template>
<style scoped>
@media (max-width: 800px) {
  .footer-container {
    flex-direction: column;
    padding: 0 2rem;
  }
  .footer-actions {
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
  }
  .social-media {
    justify-content: center;
  }
}
</style>
