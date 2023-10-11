<template>
  <transition :name="transitionEffect">
    <div
      v-show="currentSlide === index"
      @mouseenter="$emit('mouseenter')"
      @mouseleave="$emit('mouseleave')"
      class="absolute inset-0 flex justify-around gap-14 border border-gray-700 rounded-3xl bg-gray-800"
    >
      <div class="flex items-center">
        <div>
          <h2 class="ml-2 lg:ml-20 mr-2 lg:mr-0 text-center lg:text-left text-white font-bold text-3xl">
            {{ title }}
          </h2>
          <p class="ml-2 lg:ml-20 mr-2 lg:mr-0 mt-5 text-gray-300 text-xl">
            {{ text }}
          </p>
        </div>
      </div>
      <NuxtImg
        format="webp"
        loading="lazy"
        :src="image"
        :alt="title"
        class="hidden lg:block rounded-tr-3xl rounded-br-3xl h-96 w-96"
      />
    </div>
  </transition>
</template>

<script>
  export default {
    name: "CarouselItem",
    props: {
      image: String,
      title: String,
      text: String,
      currentSlide: Number,
      index: Number,
      direction: String
    },
    emits: ["mouseenter", "mouseleave"],
    computed: {
      transitionEffect() {
        return this.direction === "right" ? "slide-out" : "slide-in";
      }
    }
  };
</script>

<style scoped>
  .slide-in-enter-active,
  .slide-in-leave-active,
  .slide-out-enter-active,
  .slide-out-leave-active {
    transition: all 1s ease-in-out;
  }
  .slide-in-enter-from {
    transform: translateX(-100%);
  }
  .slide-in-leave-to {
    transform: translateX(100%);
  }
  .slide-out-enter-from {
    transform: translateX(100%);
  }
  .slide-out-leave-to {
    transform: translateX(-100%);
  }
</style>