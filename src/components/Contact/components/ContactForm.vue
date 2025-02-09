<script setup>
import { ref } from "vue";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const name = ref("");
const email = ref("");
const message = ref("");
const company = ref("");
const loading = ref(false);
</script>

<template>
  <div class="flex flex-col items-center justify-center mt-16">
    <h1 class="text-white text-center text-3xl font-semibold mb-6">
      Contact Us
    </h1>
    <div class="max-w-[600px] flex flex-col w-full gap-6">
      <div class="space-y-3 text-white w-full">
        <Label for="name" class="text-gray-300 text-lg">Name</Label>
        <Input
          id="name"
          class="h-[60px] bg-transparent border-gray-600 rounded-xl"
          placeholder="John Doe"
          autocomplete="name"
          v-model="name"
          required
        />
      </div>
      <div class="space-y-3 text-white w-full">
        <Label for="email" class="text-gray-300 text-lg">Email</Label>
        <Input
          id="email"
          class="h-[60px] bg-transparent border-gray-600 rounded-xl"
          placeholder="Email"
          autocomplete="email"
          v-model="email"
          required
        />
      </div>
      <div class="space-y-3 text-white w-full">
        <Label for="company" class="text-gray-300 text-lg">Company</Label>
        <Input
          id="company"
          class="h-[60px] bg-transparent border-gray-600 rounded-xl"
          placeholder="Company"
          autocomplete="company"
          v-model="company"
          required
        />
      </div>
      <div class="space-y-3 text-white w-full">
        <Label for="message" class="text-gray-300 text-lg">Message</Label>
        <Textarea
          id="message"
          class="h-[90px] bg-transparent border-gray-600 rounded-xl"
          placeholder="Type your message here"
          autocomplete="message"
          v-model="message"
          required
        />
      </div>
      <div class="w-full flex flex-row justify-start">
        <Button
          class="bg-rose-700 hover:bg-yellow-600 hover:text-white rounded-full text-bold text-md text-white h-[50px]"
          :disabled="loading"
          :style="{ cursor: loading ? 'not-allowed' : 'pointer' }"
        >
          Send Message
        </Button>
      </div>
    </div>
  </div>
</template>
