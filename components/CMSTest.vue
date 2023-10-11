<template>
  <div>
    <li
      v-for="post of posts"
      :key="post.slug"
    >
      <NuxtLink :to="post.slug">{{ post.title }}</NuxtLink>
    </li>
  </div>
</template>

<script>
  export default {
    async asyncData({ $content }) {
      console.log("GOTHERE");
      const posts = await $content("blog").fetch();
      console.log(posts);

      return {
        posts
      };
    }
  };
</script>