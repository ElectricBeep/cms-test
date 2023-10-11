<template>
  <div class="flex gap-5 items-start lg:items-end">
    <span class="text-3xl text-gray-500 italic">
      {{ `0${index + 1} ` }}
    </span>
    <p class="text-gray-300 text-xl italic">
      {{ text }}
    </p>
  </div>
</template>

<script>
  export default {
    name: "TeledentistryCard",
    props: {
      text: String,
      index: Number
    }
  };
</script>