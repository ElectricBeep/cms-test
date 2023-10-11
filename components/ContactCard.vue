<template>
  <div class="bg-gray-800 w-96 border border-gray-700 rounded-xl p-8 z-10 h-48">
    <div class="flex gap-4">
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
      <h3 class="text-white mt-4 font-bold text-xl">
        {{ title }}
      </h3>
    </div>
    <p class="mt-4 text-lg text-gray-300">
      {{ text }}
    </p>
  </div>
</template>

<script>
  export default {
    name: "ContactCard",
    props: {
      title: String,
      text: String,
      iconPath: String
    }
  };
</script>