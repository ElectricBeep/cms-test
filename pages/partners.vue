<template>
  <NuxtLayout>
    <div class="bg-gray-900 relative">
      <div class="hidden lg:block absolute w-48 h-48 left-0 top-10 blue-gradient" />
      <div class="container mx-auto pb-20 pt-44 px-3 md:px-6 lg:px-10">
        <h1 class="text-white text-4xl font-bold text-center md:text-left">
          Innovating Dental Healthcare Together
        </h1>
        <div class="flex flex-col gap-16 mt-20 relative">
          <div class="absolute w-48 h-48 right-0 top-0 blue-gradient" />
          <div class="absolute w-48 h-48 left-0 bottom-28 blue-gradient" />
          <PartnersCard
            image="venture.jpg"
            title="Venture building"
            text="Yes, we believe that by working together we can bring a strong solution to the dental healthcare. Venture building is about creating something new and innovative, and by collaborating and sharing our knowledge and expertise, we are confident that we can develop a unique solution that meets the needs of your target market. In the field of dental telehealth, the opportunity lies in providing patients with more convenient and accessible dental care through virtual consultations and treatment planning from the comfort of their own homes, reducing the need for in-person visits."
          />
          <PartnersCard
            imagePosition="left"
            image="data.jpg"
            title="Open data"
            text="We believe in the power of open data and data fusion, and we are always looking for reliable partners who share our vision. We are committed to working with others to advance the field of dental telehealth through the use of open data and data fusion, combining data from different sources to create a more complete and accurate picture, which can lead to the development of more accurate diagnostic tools, improved patient outcomes and reduction in costs."
          />
          <PartnersCard
            image="research.jpg"
            title="Research"
            text="Research partnerships in the field of dental telehealth involve working with research institutions and other organizations to conduct studies and advance the field of dental telehealth. These partnerships can lead to the development of new technologies, improved diagnostic tools, and better patient outcomes. By working together, we can conduct studies to test the effectiveness of different telehealth solutions, investigate the impact of telehealth on patient outcomes, and explore ways to improve the delivery of dental care through telehealth. We look forward to hearing from you and exploring how we can make our skills and resources available to support your research efforts."
          />
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script>
  export default {
    name: "PartnersPage",
    layout: "default"
  };
</script>

<style scoped>
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