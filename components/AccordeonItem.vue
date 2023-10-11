<template>
  <div :class="['', id < optionsLength ? 'border-b border-gray-700' : '']">
    <div
      :class="['flex items-center justify-between hover:bg-gray-800 cursor-pointer', active === id ? 'border-b border-gray-700 bg-gray-800' : '']"
      @click="handleClick(id)"
    >
      <h2 class="text-white text-2xl px-10 py-4">
        {{ title }}
      </h2>
      <div class="px-10 py-4">
        <div v-if="active === id">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1.5em"
            viewBox="0 0 512 512"
            fill="white"
          >
            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
          </svg>
        </div>
        <div v-else>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1.5em"
            viewBox="0 0 512 512"
            fill="white"
          >
            <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
          </svg>
        </div>
      </div>
    </div>
    <p :class="['text-gray-300 text-lg', active === id ? 'content content-v' : 'content']">
      {{ text }}
    </p>
  </div>
</template>

<script>
  export default {
    name: "AccordeonItem",
    props: {
      id: Number,
      title: String,
      text: String,
      active: Number,
      optionsLength: Number
    },
    methods: {
      handleClick(optionId) {
        this.$emit("itemClick", optionId);
      }
    }
  };
</script>

<style scoped>
  .content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 1s, padding 1s;
    padding: 0 40px;
  }

  .content-v {
    max-height: 1000px;
    padding: 24px 40px;
  }
</style>