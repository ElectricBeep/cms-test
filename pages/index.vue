<template>
  <div>
    <NuxtLayout>
      <CallToAction />
      <!-- <CMSTest /> -->
      <Header :data="data" />
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

  const { data } = await useAsyncData("home-artiicle", () =>
    queryContent("home-artiicle").find()
  );
</script>