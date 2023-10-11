<template>
  <div class="border border-gray-700 rounded-3xl bg-gray-800 overflow-hidden z-10">
    <div :class="['flex flex-col', imagePosition === 'right' ? 'md:flex-row' : 'md:flex-row-reverse']">
      <div class="w-full md:w-3/5 flex items-center">
        <div class="px-4 md:px-10 py-4">
          <h2 class="text-white font-bold text-3xl">
            {{ title }}
          </h2>
          <p class="mt-5 text-gray-300 text-lg">
            {{ text }}
          </p>
        </div>
      </div>
      <NuxtImg
        format="webp"
        loading="lazy"
        quality="30"
        :src="image"
        :alt="title"
        class="w-full md:w-2/5 object-cover"
      />
    </div>
  </div>
</template>

<script>
  export default {
    name: "PartnersCard",
    props: {
      image: String,
      title: String,
      text: String,
      imagePosition: {
        type: String,
        default: "right"
      }
    }
  };
</script>