<template>
  <NuxtLayout>
    <div class="bg-gray-900 relative">
      <div class="absolute w-48 h-48 left-0 top-10 blue-gradient" />
      <div class="absolute w-44 h-44 right-0 top-96 blue-gradient" />
      <div class="container mx-auto pb-20 pt-44 px-3 md:px-6 lg:px-10">
        <h1 class="text-white text-4xl font-bold text-center lg:text-left">
          Teleclinic in dentistry
        </h1>
        <div class="flex flex-col lg:flex-row gap-20 mt-20">
          <NuxtImg
            format="webp"
            loading="lazy"
            src="teledentistry.png"
            alt="teledentis call"
            class="w-full lg:w-2/5 rounded-2xl object-cover"
          />
          <div class="w-full lg:w-3/5 flex flex-col justify-around">
            <p class="text-lg text-gray-300">
              <span class="font-bold">Teleclinic in dentistry</span> refer to the use of telecommunication technology
              to provide dental care remotely. This can include <span class="font-bold">virtual consultations</span>,
              <span class="font-bold">remote diagnosis</span>, and <span class="font-bold">remote treatment planning</span>. Dental teleclinics are
              an innovative solution that can help to <span class="font-bold">improve</span> the delivery of dental
              care and make it more accessible for patient. It is also a huge growth
              opportunity for dental clinics to <span class="font-bold">close gap</span> in our healthcare systems,
              <span class="font-bold">reduce costs</span> and <span class="font-bold">improve patient care</span>. That’s why our clients are a
              future and technology focused dental specialists.
            </p>
            <p class="text-lg text-gray-300 mt-10">
              <span class="font-bold">E-health and telemedicine</span> in dentistry are one of the most important
              dental trends of the future. Dentists who adapt their practice to include
              digital technologies and teleclinics will have important <span class="font-bold">competitive advantages</span>
              in the future. The use of digital technologies can help to streamline
              and automate many of the processes in a dental practice, which can lead
              to <span class="font-bold">increased efficiency and productivity</span>. Additionally, by offering
              teleclinic services, dentists can expand their reach and provide care
              to a wider patient base, regardless of location. This can help to
              increase patient satisfaction and loyalty, which is essential for any
              successful dental practice.
            </p>
          </div>
        </div>
        <div class="mt-32">
          <h2 class="text-white text-3xl font-bold">
            Why is teleclinic in dentistry important
          </h2>
          <p class="mt-10 text-gray-300 text-xl">
            <span class="font-bold">The importance of teleclinics</span> in dentistry lies in the increased accessibility
            and convenience they provide for patient. With teleclinics, patients can
            receive dental care from the comfort of their own homes, without the need
            to travel to a physical office. As well as having the ability to improve
            patient experience, teleclinic in dentistry can dramatically improve patients
            access to care. <span class="font-bold">This is especially important for certain groups of people such as:</span>
          </p>
          <ul class="mt-6 flex flex-col gap-3">
            <TeledentistryCard
              v-for="(item, index) in items"
              :key="index"
              :text="item"
              :index="index"
            />
          </ul>
          <p class="mt-10 text-gray-300 text-xl">
            In this sense, <span class="font-bold">virtual dental care has the power to make an impact on equity and
              inclusive dental healthcare.</span> The COVID-19 pandemic illustrated this clearly.
            At a time when certain communities were placed under quarantine, and there
            were restrictions on in-person interactions, telehealth played a critical
            role in providing access to healthcare for patients in need.
          </p>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script>
  export default {
    name: "TeledentistryPage",
    data() {
      return {
        items: [
          "Those who live in rural areas and who would otherwise need to travel long distances to seek out care",
          "Those who have chronic conditions (periodontitis) who need to see a specialist frequently",
          "Those who wear orthodontic devices (dental braces, aligners) and need to see a specialist frequently",
          "Those who have physical disabilities and who would otherwise struggle with in-person visits",
          "Those who seek dental care abroad"
        ]
      };
    }
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