<template>
  <svg
    width="194"
    height="141"
    viewBox="0 0 194 141"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.5 139.5C18.5 122.5 47.1306 90.4418 61.5 88.5C80 86 87.9164 146.408 110.5 116.5C129 92 170 33 180 3"
      stroke="url(#paint0_linear_2019_21)"
      stroke-width="3"
      stroke-dasharray="200"
      stroke-dashoffset="300"
      class="animate-graph"
    />

    <defs>
      <linearGradient
        id="paint0_linear_2019_21"
        x1="169.5"
        y1="-0.499998"
        x2="1"
        y2="138.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#B03838" />
        <stop offset="0.825" stop-color="#B03838" stop-opacity="0.2" />
      </linearGradient>
    </defs>

    <circle cx="180" cy="7" r="6" class="pulse" />
  </svg>
</template>

<style scoped>
.animate-graph {
  stroke-dasharray: 300;
  stroke-dashoffset: 300;
  animation: draw 2s linear forwards;
}

@keyframes draw {
  to {
    stroke-dashoffset: 0;
  }
}

/* Pulsing Circle Animation */
.pulse {
  fill: #b03838;
  animation: pulse 1.5s infinite ease-in-out;
}

@keyframes pulse {
  0% {
    r: 5;
    opacity: 1;
  }
  50% {
    r: 8;
    opacity: 0.6;
  }
  100% {
    r: 5;
    opacity: 1;
  }
}
</style>
