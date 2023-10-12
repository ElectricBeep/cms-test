<template>
  <div>
    <NuxtLayout>
      <CallToAction />
      <!-- <CMSTest /> -->
      <Header />
      <Description />
      <AboutUs />
      <Features />
      <HowDoWeDoIt />
      <Accordeon />
    </NuxtLayout>
  </div>
</template>

<script setup>
  useHead({
    script: [
      { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" }
    ]
  });

  const { data } = await useAsyncData("blog", () =>
    queryContent("blog")
      .limit(3)
      .find()
  );
  console.log(data.value.map(entry => entry.title));
</script>