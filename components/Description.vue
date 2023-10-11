<template>
  <div class="bg-gray-900 py-20">
    <div class="container mx-auto">
      <div class="flex flex-col-reverse lg:flex-row gap-20 px-3 md:px-6 lg:px-10">
        <div class="w-full lg:w-1/3">
          <NuxtImg
            format="webp"
            loading="lazy"
            quality="5"
            src="telemedicine.png"
            alt="telemedicine"
            class="rounded-xl object-cover"
          />
        </div>
        <div class="w-full lg:w-2/3">
          <h1 class="text-3xl font-bold text-white">
            Medlivo by MedAI
          </h1>
          <p class="mt-6 text-white text-xl">
            Medlivo is a new real-time communication system, a medical technology, which
            fits into this technologically guided world. Particular for a telemedical application,
            our software enables patients to access dental medical care via their smart devices,
            rather than go to the clinic for appointments with their dentist.
          </p>
          <p class="mt-7 text-white text-lg">
            It will allow patients to interact virtually with dental professionals
            (dentists, orthodontists, oral surgeons) by using an intraoral camera and get
            prompt medical advice and diagnosis. We directly build safe and beneficial contact
            between dentist and patient without physical presence in the dental clinic.
          </p>
          <p class="mt-7 text-white text-lg">
            With this possibility research shows that dentists can deliver superior care at lower costs.
            The basic features of our teleclinic platform are appointment scheduling, video call,
            file management, screensharing, in call actions (screenshot). We live in an incredibly
            busy world and we will consider our mission fulfilled if our work aids dentists and patients
            to achieve the outcome of saving both time and costs.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Description"
  };
</script>

<style scoped>
  .container {
    max-width: 1440px;
  }
</style>