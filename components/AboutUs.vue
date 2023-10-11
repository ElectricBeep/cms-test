<template>
  <div class="bg-gray-900 py-20 relative">
    <div class="absolute w-44 h-44 left-0 top-0 blue-gradient" />
    <div class="absolute w-80 h-80 right-0 bottom-0 blue-gradient" />
    <div class="container mx-auto px-3 md:px-6 lg:px-10">
      <div class="inner-container mx-auto z-10">
        <h1 class="text-center font-bold text-blue-500">
          ABOUT US
        </h1>
        <div class="mt-4 bg-gradient-to-b from-blue-600 to-gray-900 py-6 px-10 rounded-xl border border-blue-500 relative">
          <h2 class="text-white text-3xl font-bold text-center">
            We are MED AI
          </h2>
          <p class="mt-4 text-gray-300 text-xl text-center mx-auto">
            MedAI is a medical AI research and development company, with current focus
            on dentistry. Our mission is to ensure that medical artificial intelligence
            benefits all of humanity. MedAI’s mission is to ensure that our product
            outperform dental examination at most economically valuable work. Thanks
            to recent advances in computer science and informatics, artificial
            intelligence (AI) and technology is quickly becoming an integral
            part of modern healthcare.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AboutUs"
  };
</script>

<style scoped>
  .container {
    max-width: 1440px;
  }

  .inner-container {
    max-width: 800px;
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