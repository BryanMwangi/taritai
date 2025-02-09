<script setup lang="ts">
import { Sheet, SheetContent } from "@/components/ui/sheet";
const props = defineProps({
  open: Boolean,
  itemId: Number,
});

const emit = defineEmits(["close"]);
</script>

<template>
  <Sheet :open="open" @update:open="$emit('close')" class="z-[99]">
    <SheetContent>
      <div class="flex flex-col justify-evenly items-center pr-10">
        <RouterLink to="/" class="nav-bar-item">Home</RouterLink>
        <RouterLink to="/about" class="nav-bar-item">About</RouterLink>
        <RouterLink to="/#contact" class="nav-bar-item">Contact</RouterLink>
        <RouterLink to="/about" class="nav-bar-item">Blog</RouterLink>
      </div>
    </SheetContent>
  </Sheet>
</template>
