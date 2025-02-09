<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import StarBorder from "@/components/Animations/StarBorder.vue";
import ProjectSheet from "./components/ProjectSheet.vue";

const projects = [
  {
    name: "Kapkugo",
    description:
      "A community project aim to empower young people within the Kalenjin community.",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image:
      "https://images.unsplash.com/photo-1515657241610-a6b33f0f6c5a?q=80&w=2776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Project One",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, quia?",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",

    image:
      "https://images.unsplash.com/photo-1473694043131-fb0b5da4e14c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Project Two",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, quia?",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",

    image:
      "https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const scrollContainer = ref(null);
const selectedProject = ref(null);
const openDrawer = ref(false);

const selectProject = (project) => {
  selectedProject.value = project;
  openDrawer.value = true;
};

const closeDrawer = () => {
  openDrawer.value = false;
};

const scaleDownDivs = () => {
  const divs = document.querySelectorAll(".stacking-slide");
  const viewportHeight = window.innerHeight;

  divs.forEach((div) => {
    const rect = div.getBoundingClientRect();

    const isPast = rect.top + rect.height > viewportHeight;

    const scaleFactor = isPast ? 0.85 : 1;
    const blurAmount = isPast ? 5 : 0;

    div.style.transform = `scale(${scaleFactor})`;
    div.style.filter = `blur(${blurAmount}px)`;
  });
};

onMounted(() => {
  scrollContainer.value = document.querySelector(".main-container");
  if (scrollContainer.value) {
    scrollContainer.value.addEventListener("scroll", scaleDownDivs);
    scaleDownDivs();
  }
});

onUnmounted(() => {
  if (scrollContainer.value) {
    scrollContainer.value.removeEventListener("scroll", scaleDownDivs);
  }
});
</script>

<template>
  <ProjectSheet
    :open="openDrawer"
    :project="selectedProject"
    @close="closeDrawer"
  />
  <div class="flex flex-col w-full justify-center items-center mb-10">
    <h1 class="text-center text-6xl text-black mt-10">Completed Projects</h1>
    <p
      class="projects-p text-center text-xl font-medium w-[60%] my-4 text-gray-500"
    >
      Check out some of our completed projects and see what we are able to
      achieve.
    </p>
  </div>
  <div
    class="flex flex-col w-full justify-center items-center h-max mb-[100px]"
  >
    <div
      v-for="project in projects"
      :key="project.name"
      class="stacking-slide relative flex flex-col justify-center items-center overflow-hidden w-[90vw] bg-neutral-200 rounded-xl"
    >
      <span
        class="z-[3] w-full h-full flex flex-col justify-center items-center bg-black/50 p-4"
      >
        <h1 class="text-center text-6xl text-white">
          {{ project.name }}
        </h1>
        <p class="text-center text-2xl text-white mt-10">
          {{ project.description }}
        </p>
        <StarBorder inner-class="bg-black px-3 py-2" class="mt-10">
          <button class="text-white text-xl" @click="selectProject(project)">
            View Project
          </button>
        </StarBorder>
      </span>
      <img :src="project.image" class="object-cover absolute w-full h-full" />
    </div>
  </div>
</template>
<style scoped>
.stacking-slide {
  height: 80vh;
  position: sticky;
  top: 0;
  transition: transform 0.7s ease-in-out, filter 0.6s ease-in-out;
  transform-origin: center;
}

@media (max-width: 1024px) {
  .grid-col-2 {
    display: none;
  }
  .projects-p {
    width: 90vw;
  }
}
</style>
