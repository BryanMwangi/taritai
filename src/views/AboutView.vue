<script setup>
import taritai_lettering from "@/assets/images/taritai_lettering.png";
const team = [
  {
    name: "Jane Doe",
    profilePicture:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    title: "CEO, Taritai",
  },
  {
    name: "Jane Doe",
    profilePicture:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    title: "CTO, Taritai",
  },
  {
    name: "John Doe",
    profilePicture:
      "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    title: "Manager, Taritai",
  },
  {
    name: "Jane Doe",
    profilePicture:
      "https://plus.unsplash.com/premium_photo-1681489930334-b0d26fdb9ed8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    title: "Technical Lead, Taritai",
  },
  {
    name: "John Doe",
    profilePicture:
      "https://images.unsplash.com/photo-1508835277982-1c1b0e205603?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsJTIwYmxhY2t8ZW58MHx8MHx8fDA%3D",
    title: "Managing Director, Taritai",
  },
  {
    name: "John Doe",
    profilePicture:
      "https://images.unsplash.com/photo-1656313815939-6373a497bbf2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsJTIwYmxhY2t8ZW58MHx8MHx8fDA%3D",
    title: "Business Manager, Taritai",
  },
];
</script>
<template>
  <section
    class="min-h-[100vh] h-max w-full gap-3 md:gap-6 mx-auto px-6 md:max-w-5xl"
  >
    <h1
      class="text-2xl text-center flex flex-row justify-center items-center gap-2"
    >
      About
      <img
        :src="taritai_lettering"
        class="w-[100px] h-[100px] blk-element object-contain"
        alt="taritai lettering"
      />
    </h1>
    <h2 class="text-5xl text-center mb-4 hero-h1 font-medium text-red-900">
      Why did we start Taritai?
    </h2>
    <div class="flex flex-col justify-start items-center gap-4 w-full">
      <p class="text-left text-lg text-gray-700 w-full">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
        totam enim mollitia distinctio nobis quasi velit, debitis porro
        veritatis voluptatem iste quas explicabo, iusto quo inventore alias
        deserunt harum natus!
      </p>
      <div
        class="h-[1px] w-full bg-gradient-to-r from-white via-gray-500 to-white my-[3rem]"
      />
      <h2 class="text-4xl text-center hero-h1 font-medium text-red-900">
        Our Story
      </h2>
      <p class="text-left text-lg text-gray-700 w-full">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
        accusantium! Architecto dicta in, quisquam libero minima, animi iure
        dolorem sequi non dolorum at voluptatem, vitae deserunt quae unde
        reprehenderit ad! Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Delectus similique assumenda laboriosam atque. Aspernatur dolore
        ex architecto, fugiat repellat illo doloribus alias voluptatum?
        Consequuntur iste doloremque, voluptatibus expedita dignissimos magnam?
      </p>
      <p class="text-left text-lg text-gray-700 w-full">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
        accusantium! Architecto dicta in, quisquam libero minima, animi iure
        dolorem sequi non dolorum at voluptatem, vitae deserunt quae unde
        reprehenderit ad! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. A architecto veniam explicabo odit cupiditate repudiandae sequi!
        Veritatis nemo, amet error reiciendis placeat illum libero nisi, nostrum
        maxime, tenetur ipsa incidunt!
      </p>
      <p class="text-left text-lg text-gray-700 w-full">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
        accusantium! Architecto dicta in, quisquam libero minima, animi iure
        dolorem sequi non dolorum at voluptatem, vitae deserunt quae unde
        reprehenderit ad!
      </p>
    </div>
    <h2
      class="text-4xl text-center hero-h1 font-medium text-red-900 mt-10 mb-4"
    >
      Meet the team
    </h2>
    <div class="flex flex-col justify-center items-center">
      <img
        src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVhbSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D"
        alt="team"
        class="rounded-lg max-h-[500px]"
      />
      <p class="text-center text-sm text-gray-500 mt-4">
        Founding team of Taritai: John Doe, Jane Doe, and John Doe.
      </p>
    </div>
    <div class="team-container grid grid-cols-4 gap-4 my-20">
      <div
        v-for="teamMember in team"
        :key="teamMember.name"
        class="flex flex-col justify-start items-center gap-4 mt-6"
      >
        <img
          :src="teamMember.profilePicture"
          :alt="teamMember.name"
          class="rounded-full w-[200px] h-[200px] blk-element object-cover"
        />
        <p class="text-center text-xl font-semibold text-gray-800">
          {{ teamMember.name }}
        </p>
        <p class="text-center text-sm text-gray-500">
          {{ teamMember.title }}
        </p>
      </div>
    </div>
  </section>
</template>
<style scoped>
@media (max-width: 1024px) {
  .team-container {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
