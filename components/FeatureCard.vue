<template>
  <div class="bg-gray-800 border border-gray-700 rounded-xl w-96 p-8 z-10 shadow-md">
    <div class="bg-blue-500 w-16 h-16 rounded-lg flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="2em"
        viewBox="0 0 640 512"
        fill="white"
        class="ml-2"
      >
        <path :d="iconPath" />
      </svg>
    </div>
    <h3 class="mt-4 text-white font-bold text-lg">
      {{ title }}
    </h3>
    <p class="mt-4 text-gray-300">
      {{ text }}
    </p>
  </div>
</template>

<script>
  export default {
    name: "FeatureCard",
    props: {
      title: String,
      text: String,
      iconPath: String
    }
  };
</script>