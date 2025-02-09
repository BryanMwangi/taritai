<script setup>
import AnimatedWall from "@/components/Animations/AnimatedWall.vue";
import ReviewCard from "./components/ReviewCard.vue";

const reviews = [
  {
    name: "John Doe",
    profilePicture:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    title: "CEO, Kapkugo",
    review:
      "Kapkugo was a success thanks to the amazing talent working at Taritai! The Kalenjin community will forever appreciate what Taritai did for us.",
  },
  {
    name: "John Doe",
    profilePicture:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    title: "CTO, Acme",
    review: "Our project would not have been possible without TariTai",
  },
  {
    name: "John Doe",
    profilePicture:
      "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    title: "Manager, Acme",
    review:
      "Tari Tai made our project goals come true. They have to be the best team in Kenya.",
  },
  {
    name: "Jane Doe",
    profilePicture:
      "https://plus.unsplash.com/premium_photo-1681489930334-b0d26fdb9ed8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    title: "Technical Lead, Acme",
    review:
      "It does not get better than this. Taritai is the best you will ever get in Kenya and in the world!",
  },
  {
    name: "John Doe",
    profilePicture:
      "https://images.unsplash.com/photo-1508835277982-1c1b0e205603?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsJTIwYmxhY2t8ZW58MHx8MHx8fDA%3D",
    title: "Managing Director, Acme",
    review: "Best company we have worked with to date!",
  },
  {
    name: "John Doe",
    profilePicture:
      "https://images.unsplash.com/photo-1656313815939-6373a497bbf2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsJTIwYmxhY2t8ZW58MHx8MHx8fDA%3D",
    title: "Business Manager, Acme",
    review: "Professionals at work!",
  },
];
</script>
<template>
  <div>
    <h1 class="text-center text-6xl px-3 hero-h1 font-medium text-red-900">
      What people say about us
    </h1>
    <p class="text-center text-xl mt-10 mb-20 text-gray-500 px-3">
      Read what our customers have to say about us. We are always listening to
      our customers and we are happy to hear their feedback.
    </p>
    <div>
      <AnimatedWall marqueeClass="pb-2" duration="120s" :pause-on-hover="true">
        <ReviewCard
          v-for="(review, index) in reviews"
          :key="index"
          :review="review"
        />
      </AnimatedWall>
    </div>
  </div>
</template>
