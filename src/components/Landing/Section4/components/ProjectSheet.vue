<script setup>
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";

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
          <ScrollArea class="h-[70vh] w-full mb-6">
            <img
              :src="project.image"
              class="object-cover h-[600px] rounded-xl"
            />
            <p class="text-md mb-4 text-left mt-4">
              {{ project.description }}
            </p>
            <p class="text-md text-left mb-[10rem]">
              {{ project.details }}
            </p>
          </ScrollArea>
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  </Sheet>
</template>
