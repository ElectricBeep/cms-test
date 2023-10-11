<template>
  <div
    class="container"
    @mousemove="updateSpotlight"
    @mouseleave="resetSpotlight"
    @mousedown="onMouseDown"
    @mouseup="onMouseUp"
  >
    <ClientOnly>
      <div>
        <div class="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-10 w-80 flex flex-col items-center gap-y-7">
          <h1 class="title text-white font-bold text-4xl text-center">
            We are MED AI
          </h1>
          <button
            @click="$router.push('/contact')"
            class="font-bold border border-blue-700 text-blue-700 backdrop-filter backdrop-blur-sm hover:bg-blue-700/20 hover:text-white transition rounded-lg px-10 py-3"
          >
            Join Now
          </button>
        </div>
        <div
          class="spotlight"
          :style="spotlightStyle"
        ></div>
      </div>
    </ClientOnly>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        spotlightStyle: {
          backgroundImage:
            "radial-gradient(circle, transparent 160px, rgba(0, 0, 0, 0.85) 200px)"
        },
        spotlightSize: "transparent 160px, rgba(0, 0, 0, 0.85) 200px"
      };
    },
    methods: {
      updateSpotlight(event) {
        this.spotlightStyle.backgroundImage = `radial-gradient(circle at ${(event.pageX /
          window.innerWidth) *
          100}% ${(event.pageY / window.innerHeight) * 100}%, ${
          this.spotlightSize
        })`;
      },
      onMouseDown(event) {
        this.spotlightSize = "transparent 130px, rgba(0, 0, 0, 0.95) 150px";
        this.updateSpotlight(event);
      },
      onMouseUp(event) {
        this.spotlightSize = "transparent 160px, rgba(0, 0, 0, 0.85) 200px";
        this.updateSpotlight(event);
      },
      resetSpotlight() {
        this.spotlightStyle.backgroundImage =
          "radial-gradient(circle, transparent 160px, rgba(0, 0, 0, 0.85) 200px)";
      }
    },
    mounted() {
      this.spotlightSize = "transparent 160px, rgba(0, 0, 0, 0.85) 200px";
    }
  };
</script>

<style scoped>
  .container {
    height: 100vh;
    min-width: 100%;
    background: url("/smile.webp") no-repeat center;
    background-size: cover;
    position: relative;
    user-select: none;
    cursor: url("/search.png"), auto;
  }

  .title {
    text-shadow: 2px 2px 2px #000;
  }

  .spotlight {
    position: absolute;
    height: 100%;
    width: 100%;
    background-image: radial-gradient(
      circle,
      transparent 160px,
      rgba(243, 11, 11, 0.85) 200px
    );
  }
</style>