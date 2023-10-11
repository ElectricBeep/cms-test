<template>
  <div>
    <button
      class="carouse-control h-16 w-16 bg-gray-900 bg-opacity-50 hover:bg-opacity-100 transition border-none text-white pointer z-20 absolute left-2 flex items-center justify-center rounded-full"
      @click="$emit('prev')"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="2em"
        viewBox="0 0 320 512"
        fill="white"
      >
        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
      </svg>
    </button>
    <button
      class="carouse-control h-16 w-16 bg-gray-900 bg-opacity-50 hover:bg-opacity-100 transition border-none text-white pointer z-20 absolute right-2 flex items-center justify-center rounded-full"
      @click="$emit('next')"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="2em"
        viewBox="0 0 320 512"
        fill="white"
      >
        <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
      </svg>
    </button>
  </div>
</template>

<script>
  export default {
    name: "CarouselControls"
  };
</script>

<style scoped>
  .carouse-control {
    top: calc(50% - 25px);
  }
</style>