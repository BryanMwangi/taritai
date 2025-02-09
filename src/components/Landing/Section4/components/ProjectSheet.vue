<script setup>
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import pattern_bg from "@/assets/images/pattern_bg.png";
const props = defineProps({
  open: Boolean,
  project: Object,
});

const emit = defineEmits(["close"]);
</script>

<template>
  <Sheet :open="open" @update:open="$emit('close')">
    <SheetContent side="bottom" style="max-height: 80vh">
      <SheetHeader>
        <SheetTitle>{{ project.name }}</SheetTitle>
        <SheetDescription>
          <ScrollArea class="h-[70vh] w-full">
            <img
              :src="pattern_bg"
              class="w-full h-full object-cover absolute z-0 opacity-[0.04] blk-element"
            />
            <img
              :src="project.image"
              class="object-cover h-[600px] rounded-xl"
            />
            <p class="text-lg mb-4 text-left mt-4">
              {{ project.description }}
            </p>
            <p class="text-lg text-left mb-[10rem] max-w-[1000px]">
              {{ project.details }}
            </p>
          </ScrollArea>
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  </Sheet>
</template>
