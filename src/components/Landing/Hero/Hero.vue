<script setup>
import orb from "@/assets/images/orb.png";
import taritai_lettering from "@/assets/images/taritai_lettering.png";
</script>
<template>
  <div
    class="w-full flex flex-col justify-center items-center min-h-[80vh] relative"
  >
    <img
      :src="orb"
      class="floating-orb blk-element max-h-[1400px]"
      alt="floating orb"
    />
    <div class="w-[70vw] mx-auto mb-10 z-[2]">
      <div class="flex flex-col items-center justify-center text-center">
        <img
          :src="taritai_lettering"
          class="min-h-[90px] blk-element object-contain max-w-[280px]"
          alt="taritai"
        />
        <span
          class="hero-h1 text-6xl leading-tight mt-[-20px] font-medium text-sky-950"
        >
          is a global leader in
          <span class="text-red-700">project management</span> and
          <span class="text-red-700">planning</span>
        </span>
      </div>
    </div>

    <p
      class="hero-p text-center text-2xl leading-tight text-sky-950 mb-10 z-[2]"
    >
      Taritai has been responsible for some of the biggest projects in Kenya and
      ensuring that they are delivered on time and within budget.
    </p>
  </div>
</template>
<style scoped>
.floating-orb {
  position: absolute;
  object-fit: contain;
  min-width: 60%;
  max-width: 620px;
  top: 0;
  left: 0;
  margin-top: -10%;
  margin-left: -10%;
  transition: all 0.5s ease-in-out;
  opacity: 0.7;
  z-index: -1;
  animation: floating-orb-animation 15s ease-in-out;
}
.hero-p {
  width: 60vw;
}

@media (max-width: 1024px) {
  .hero-p {
    width: 90vw;
  }
}

@keyframes floating-orb-animation {
  0% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(90%, 10%, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}
</style>
