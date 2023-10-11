<template>
  <button
    @click.prevent="$emit('click')"
    class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-medium font-medium text-white rounded-lg group bg-gradient-to-br from-blue-400 to-blue-700 group-hover:from-blue-400 group-hover:to-blue-700 focus:ring-2 focus:outline-none"
  >
    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 font-bold rounded-md group-hover:bg-opacity-0">
      {{ text }}
    </span>
  </button>
</template>

<script>
  export default {
    name: "CustomButton",
    props: {
      text: String
    }
  };
</script>