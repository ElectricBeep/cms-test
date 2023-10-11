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

<script>
  export default {
    name: "IndexPage",
    layout: "default"
  };
</script>