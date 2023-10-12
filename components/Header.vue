<template>
  <div class="header bg-gray-900 relative">
    <div class="absolute w-48 h-48 left-0 top-10 blue-gradient" />
    <div class="absolute w-96 h-96 right-40 bottom-0 blue-gradient" />
    <div class="absolute w-36 h-36 right-20 top-0 blue-gradient" />
    <div class="container mx-auto flex flex-col lg:flex-row h-full px-3 md:px-6 lg:px-10">
      <div class="w-full lg:w-1/2 h-full flex flex-col justify-center z-10 py-10 lg:py-0">
        <h1 class="text-5xl text-white font-extrabold text-center lg:text-left">
          {{data[0].title}}
        </h1>
        <p class="text-white text-2xl w-full lg:w-4/5 mt-10 text-center lg:text-left">
          {{data[0].description}}
        </p>
        <div class="mt-10 mx-auto lg:mx-0">
          <CustomButton
            text="Start Now"
            @click="$router.push('/contact')"
          />
        </div>
      </div>
      <div class="w-full lg:w-1/2 h-full flex justify-center items-center">
        <NuxtImg
          format="webp"
          quality="3"
          :src="data[0].image.split('/')[1]"
          alt="header"
          class="h-4/5 z-10 object-cover"
        />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Header",
    props: {
      data: {
        type: Array,
        default: []
      }
    }
  };
</script>

<style scoped>
  @media only screen and (min-width: 1024px) {
    .header {
      height: calc(100vh - 112px);
    }
  }

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