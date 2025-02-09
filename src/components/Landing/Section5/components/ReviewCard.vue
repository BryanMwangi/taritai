<script setup>
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const props = defineProps({
  review: Object,
});
</script>
<template>
  <div
    class="flex flex-col gap-4 max-w-[380px] w-[75vw] bg-clip-padding backdrop-filter backdrop-blur-lg bg-gray-100/50 px-[2rem] py-8 rounded-2xl shadow-md ml-16"
  >
    <div class="flex flex-row items-center mb-4 gap-4">
      <Avatar>
        <AvatarImage :src="review.profilePicture" alt="@radix-vue" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div class="flex flex-col">
        <p class="text-lg font-bold text-gray-800">
          {{ review.name }}
        </p>
        <p class="text-sm text-gray-500">{{ review.title }}</p>
      </div>
    </div>
    <div>
      <p class="text-left text-lg font-semibold tracking-wide">
        {{ review.review }}
      </p>
    </div>
  </div>
</template>
