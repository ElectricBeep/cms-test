<template>
  <div
    :class="{
      'bg-transparent': !scrolled,
      'backdrop-filter backdrop-blur-lg shadow-md': scrolled
    }"
    class="h-28 w-full fixed z-30 transition-colors duration-300"
  >
    <div class="container h-full mx-auto flex items-center justify-between px-3 md:px-6 lg:px-10">
      <NuxtLink to="/">
        <NuxtImg
          format="webp"
          quality="1"
          loading="lazy"
          src="medai.png"
          alt="logo"
          class="w-28"
        />
      </NuxtLink>
      <div class="hidden lg:block items-center gap-3">
        <NuxtLink
          v-for="item in navItems"
          :key="item.name"
          :to="item.path"
          class="text-white font-bold text-lg hover:bg-gray-800 px-3 py-1 rounded-lg"
        >
          {{ item.name }}
        </NuxtLink>
      </div>
      <div class="hidden lg:block">
        <CustomButton
          text="Start Now"
          @click="$router.push('/contact')"
        />
      </div>
      <div
        class="block lg:hidden"
        @click="$emit('mobileMenu')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="2.5em"
          viewBox="0 0 448 512"
          fill="white"
        >
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Navbar",
    props: {
      navItems: Array
    },
    data() {
      return {
        scrolled: false
      };
    },
    methods: {
      handleScroll() {
        if (process.client) {
          var currentScrollPosition = window.scrollY;

          if (currentScrollPosition > 0) {
            this.scrolled = true;
          } else {
            this.scrolled = false;
          }

          this.scrollPosition = currentScrollPosition;
        }
      }
    },
    created() {
      if (process.client) {
        window.addEventListener("scroll", this.handleScroll);
      }
    },
    destroyed() {
      if (process.client) {
        window.removeEventListener("scroll", this.handleScroll);
      }
    }
  };
</script>

<style scoped>
  .container {
    max-width: 1440px;
  }
</style>