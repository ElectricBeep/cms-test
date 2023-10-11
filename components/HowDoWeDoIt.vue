<template>
  <div class="bg-gray-900 py-20">
    <div class="container mx-auto px-3 md:px-6 lg:px-10">
      <h1 class="text-white text-3xl font-bold text-center">
        How do we do it
      </h1>
      <p class="mt-4 w-1/2 text-gray-300 text-xl text-center mx-auto">
        By using new technology, the client specific data from the peripheral
        devices (dental camera) and the client data captured by the smart
        device can be displayed simultaneously and in real-time in the virtual meeting.
      </p>
      <div class="pt-20 pb-10 relative">
        <div class="absolute w-48 h-48 left-0 top-10 blue-gradient" />
        <div class="absolute w-64 h-64 right-0 bottom-0 blue-gradient" />
        <Carousel />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HowDoWeDoIt"
  };
</script>

<style scoped>
  .container {
    max-width: 1440px;
  }

  .blue-gradient {
    background-image: linear-gradient(
      270deg,
      hsl(200deg 70% 50%) 0%,
      hsl(200deg 70% 70%) 26%,
      hsl(200deg 70% 80%) 39%,
      hsl(200deg 80% 90%) 50%,
      hsl(200deg 70% 80%) 61%,
      hsl(200deg 70% 70%) 74%,
      hsl(200deg 70% 50%) 100%
    );
    filter: blur(125px);
  }
</style>