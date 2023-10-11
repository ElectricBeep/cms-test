<template>
  <transition name="slide-in">
    <div
      v-if="isMobileMenuOpen"
      class="fixed top-0 right-0 w-3/4 md:w-1/2 h-screen bg-gray-900 z-30"
    >
      <div class="h-28 px-3 md:px-6 flex items-center justify-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="3em"
          viewBox="0 0 384 512"
          fill="white"
          @click="$emit('mobileMenu')"
        >
          <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
        </svg>
      </div>
      <div
        class="flex flex-col"
        @click="$emit('mobileMenu')"
      >
        <NuxtLink
          v-for="item in navItems"
          :key="item.name"
          :to="item.path"
          class="text-white font-bold text-2xl mx-auto py-4 px-2 rounded-lg"
        >
          {{ item.name }}
        </NuxtLink>
        <div class="mt-10 mx-auto">
          <CustomButton
            text="Start Now"
            @click="$router.push('/contact')"
          />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "MobileNavbar",
    props: {
      navItems: Array,
      isMobileMenuOpen: Boolean
    }
  };
</script>

<style scoped>
  .slide-in-enter-active,
  .slide-in-leave-active {
    transition: all 0.2s ease-in-out;
  }

  .slide-in-enter-from {
    transform: translateX(100%);
  }
  .slide-in-leave-to {
    transform: translateX(100%);
  }
</style>