<script setup>
import AnimatedGraph from "@/components/Animations/AnimatedGraph.vue";
import SpotlightCard from "@/components/Animations/SpotlightCard.vue";
import save_art from "@/assets/images/save_art.png";
import card_art from "@/assets/images/card_art.png";
import handshake_art from "@/assets/images/handshake_art.png";
</script>

<template>
  <h1 class="text-5xl text-center">
    Ensuring all goals are achieved within the dedicated timeline
  </h1>
  <div
    class="highlight-container flex flex-row w-full gap-3 md:gap-6 mx-auto px-4 md:max-w-7xl pt-6 mt-8 justify-center"
  >
    <SpotlightCard
      spotlightColor="rgba(0, 8, 81, 0.5)"
      class="border border-gray-100 shadow-md"
    >
      <div
        class="p-[2rem] bg-clip-padding backdrop-filter backdrop-blur-lg bg-gray-100/50"
      >
        <h1 class="text-4xl font-bold mb-4">5X</h1>
        <p class="text-xl text-left text-gray-500">Faster Project Delivery</p>
        <div class="h-[200px] flex flex-col justify-end items-center">
          <AnimatedGraph />
        </div>
      </div>
    </SpotlightCard>
    <SpotlightCard
      spotlightColor="rgba(255,116,185, 0.3)"
      class="h-max border border-gray-100 shadow-md"
    >
      <div
        class="bg-clip-padding backdrop-filter backdrop-blur-lg bg-gray-100/50 w-full px-[2rem] pt-[2rem]"
      >
        <div>
          <h1 class="text-4xl font-bold mb-4">60%</h1>
          <p class="text-xl text-left text-gray-500">
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
      spotlightColor="rgba(0, 229, 255, 0.2)"
      class="h-max border border-gray-100 shadow-md"
    >
      <div
        class="bg-clip-padding flex flex-col justify-start backdrop-filter backdrop-blur-lg bg-gray-100/50 px-[2rem] pt-[2rem]"
      >
        <div>
          <h1 class="text-4xl font-bold mb-4">KES 30m+</h1>
          <p class="text-xl text-left text-gray-500">Raised in Kenya</p>
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
      spotlightColor="rgba(28, 181, 224, 0.5)"
      class="h-max border border-gray-100 shadow-md"
    >
      <div
        class="bg-clip-padding backdrop-filter backdrop-blur-lg bg-gray-100/50 w-full py-[2rem]"
      >
        <div class="px-[2rem]">
          <h1 class="text-4xl font-bold mb-4">100+</h1>
          <p class="text-xl text-left text-gray-500">Investors engaged</p>
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
</style>
