<template>
  <div>
    <NuxtLayout>
      <CallToAction />
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
</script>