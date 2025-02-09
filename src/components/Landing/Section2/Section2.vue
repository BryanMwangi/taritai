<script setup>
import AnimatedGraph from "@/components/Animations/AnimatedGraph.vue";
import SpotlightCard from "@/components/Animations/SpotlightCard.vue";
import save_art from "@/assets/images/save_art.png";
import card_art from "@/assets/images/card_art.png";
import handshake_art from "@/assets/images/handshake_art.png";
import pattern_bg from "@/assets/images/pattern_bg.png";
</script>

<template>
  <img
    :src="pattern_bg"
    class="w-full h-full object-cover absolute z-0 opacity-[0.04] blk-element"
  />
  <h1 class="text-5xl text-center hero-h1 font-medium text-red-900">
    Ensuring all goals are achieved within the dedicated timeline
  </h1>
  <div
    class="highlight-container flex flex-row w-full gap-3 md:gap-6 mx-auto px-4 md:max-w-7xl pt-6 mt-8 justify-center"
  >
    <SpotlightCard
      spotlightColor="rgba(138, 180, 152, 0.5)"
      class="border border-gray-100 shadow-md"
    >
      <div
        class="highlight-container-item p-[2rem] bg-clip-padding backdrop-filter backdrop-blur-lg bg-gray-100/50"
      >
        <h1 class="text-4xl font-bold mb-4 text-red-700">5X</h1>
        <p class="text-xl text-left text-gray-500 font-semibold">
          Faster Project Delivery
        </p>
        <div class="h-[200px] flex flex-col justify-end items-center">
          <AnimatedGraph />
        </div>
      </div>
    </SpotlightCard>
    <SpotlightCard
      spotlightColor="rgba(138, 180, 152, 0.5)"
      class="h-max border border-gray-100 shadow-md"
    >
      <div
        class="highlight-container-item bg-clip-padding backdrop-filter backdrop-blur-lg bg-gray-100/50 w-full px-[2rem] pt-[2rem]"
      >
        <div>
          <h1 class="text-4xl font-bold mb-4 text-red-700 font-semibold">
            60%
          </h1>
          <p class="text-xl text-left text-gray-500 font-semibold">
            Savings on Project Costs
          </p>
        </div>

        <div
          class="h-[120px] flex flex-col justify-start items-center mt-4 overflow-hidden"
        >
          <img
            :src="save_art"
            class="w-[200px] h-[300px] blk-element object-contain max-w-[80%]"
          />
        </div>
      </div>
    </SpotlightCard>
    <SpotlightCard
      spotlightColor="rgba(138, 180, 152, 0.5)"
      class="h-max border border-gray-100 shadow-md"
    >
      <div
        class="highlight-container-item bg-clip-padding flex flex-col justify-start backdrop-filter backdrop-blur-lg bg-gray-100/50 px-[2rem] pt-[2rem]"
      >
        <div>
          <h1 class="text-4xl font-bold mb-4 text-red-700">KES 30m+</h1>
          <p class="text-xl text-left text-gray-500 font-semibold">
            Raised in Kenya
          </p>
        </div>
        <div
          class="h-[120px] flex flex-col justify-start items-center mt-4 overflow-hidden"
        >
          <img
            :src="card_art"
            class="h-[170px] blk-element object-contain max-w-[80%]"
          />
        </div>
      </div>
    </SpotlightCard>

    <SpotlightCard
      spotlightColor="rgba(138, 180, 152, 0.5)"
      class="h-max border border-gray-100 shadow-md"
    >
      <div
        class="highlight-container-item bg-clip-padding backdrop-filter backdrop-blur-lg bg-gray-100/50 w-full py-[2rem]"
      >
        <div class="px-[2rem]">
          <h1 class="text-4xl font-bold mb-4 text-red-700">100+</h1>
          <p class="text-xl text-left text-gray-500 font-semibold">
            Investors engaged
          </p>
        </div>
        <div
          class="h-[120px] flex flex-col justify-start items-center mt-4 overflow-hidden"
        >
          <img
            :src="handshake_art"
            class="h-[140px] blk-element object-contain"
          />
        </div>
      </div>
    </SpotlightCard>
  </div>
</template>
<style scoped>
@media (max-width: 800px) {
  .highlight-container {
    flex-direction: column;
    gap: 3rem;
  }
}
.highlight-container-item:hover p {
  color: #6e8b47;
}
</style>
