<template>
  <div class="bg-gray-900 border-t border-gray-700 py-12 relative">
    <div class="absolute w-64 h-64 left-0 blue-gradient" />
    <div class="hidden lg:block absolute w-64 h-64 right-0 blue-gradient" />
    <div class="container mx-auto px-3 md:px-6 lg:px-10">
      <div class="flex flex-col lg:flex-row gap-10 items-center justify-between">
        <div class="z-10">
          <NuxtImg
            format="webp"
            loading="lazy"
            src="medai.png"
            alt="logo"
            class="w-28 z-10 mx-auto lg:mx-0"
          />
          <p class="mt-2 text-gray-300">
            &copy; {{ new Date().getFullYear() }} MED AI GmbH. All rights reserved.
          </p>
        </div>
        <div class="flex items-center gap-10 z-10">
          <NuxtLink
            to="/contact"
            class="text-white font-bold text-lg hover:underline"
          >
            Contact
          </NuxtLink>
          <NuxtLink
            to="/privacy"
            class="text-white font-bold text-lg hover:underline"
          >
            Privacy
          </NuxtLink>
          <NuxtLink
            to="/impressum"
            class="text-white font-bold text-lg hover:underline"
          >
            Impressum
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Footer"
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