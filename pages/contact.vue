<template>
  <NuxtLayout>
    <div class="bg-gray-900 relative">
      <div class="absolute w-48 h-48 right-0 top-48 blue-gradient" />
      <div class="absolute w-32 h-32 left-0 top-20 blue-gradient" />
      <div class="container mx-auto pb-20 pt-44 flex items-center justify-center px-3 md:px-6 lg:px-10">
        <div>
          <h1 class="text-white text-4xl font-bold text-center xl:text-left">
            Feel Free to Contact Us
          </h1>
          <div class="flex flex-wrap gap-10 items-center justify-around mt-20 px-3 md:px-0">
            <ContactCard
              title="Adresse"
              text="Nördliche Münchnerstr. 27a, 82031 Grünwald"
              iconPath="M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152V422.8c0 9.8-6 18.6-15.1 22.3L416 503V200.4zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6V451.8L32.9 502.7C17.1 509 0 497.4 0 480.4V209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77V504.3L192 449.4V255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
            />
            <ContactCard
              title="Telefonnummer"
              text="+49 89 95 429 6781"
              iconPath="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
            />
            <ContactCard
              title="Email"
              text="contact@med-ai.de"
              iconPath="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
            />
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script>
  export default {
    name: "ContactPage"
  };
</script>

<style scoped>
  @media only screen and (min-width: 1280px) {
    .container {
      height: 100vh;
    }
  }

  .container {
    max-width: 1440px;
  }

  .blue-gradient {
    background-image: linear-gradient(
      270deg,
      hsl(200deg 70% 50%) 0%,
      hsl(200deg 70% 70%) 26%,
      hsl(200deg 70% 80%) 39%,
      hsl(200deg 80% 90%) 50%,
      hsl(200deg 70% 80%) 61%,
      hsl(200deg 70% 70%) 74%,
      hsl(200deg 70% 50%) 100%
    );
    filter: blur(125px);
  }
</style>