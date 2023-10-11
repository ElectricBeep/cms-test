<template>
  <div class="bg-gray-900">
    <div class="container mx-auto pt-20 pb-40 px-3 md:px-6 lg:px-10">
      <div class="border border-gray-700 rounded-t-2xl overflow-hidden">
        <AccordeonItem
          v-for="option in options"
          :key="option.id"
          :id="option.id"
          :title="option.title"
          :text="option.text"
          :active="active"
          :optionsLength="options.length"
          @itemClick="handleClick"
        />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Accordeon",
    data() {
      return {
        active: 1,
        options: [
          {
            id: 1,
            title: "Benefits for doctors",
            text:
              "Telemedicine has been around for quite a while, but not yet in dentistry. It has only been now that we are able to enjoy its full effects and benefits. While dental telemedicine is beneficial to patients, especially those who do not have access to dental specialists, this model is very advantageous to dentists and other dental professionals as well. Dental telemedicine interventions are effective in reducing wait times plus improving the coordination of specialty care services. With reduced wait times and more efficient patient visits, clinicians report feeling less burnout, higher satisfaction, and improved communication. As technology further evolves, dental workers will certainly have more to be thankful for since this technology makes opening and running a dental practice cheaper, more efficient, and more profitable."
          },
          {
            id: 2,
            title: "Benefits for patient",
            text:
              "Technology enables people to connect in ways never possible before. Our dental teleclinic makes it possible for dental care providers to offer quality services to individuals, regardless of their geographical location in the world. Patients can access teleclinic services from their home or office and it opens up access to healthcare that might otherwise prove inaccessible and saves time and money. Our platform allows you to participate in video call as third party, for example as parent or a guardian (of kids, elderlies or people with disabilities)."
          },
          {
            id: 3,
            title: "Pricing",
            text:
              "Our dental teleclinic software where you can connect with your patients anywhere at any time allows you a seamless, high-quality video calls that are charged per finished call, ensuring you only pay for the time you use. We also charge a one-time setup fee, which includes a certain number of cameras which work seamlessly with the software. This allows you to easily connect and communicate with your patients. We also offer the option to purchase additional cameras, ensuring you have all the tools you need for a productive and successful business. Try it out today and experience the difference."
          },
          {
            id: 4,
            title: "Development and research",
            text:
              "We are dedicated to creating cutting-edge solutions through collaboration and the sharing of knowledge. We believe that these are the key to success, and we like to work with others to develop innovative products and services. Our team of experts stay at the forefront of research and development in dental healthcare, and our goal is to provide you with the most advanced solutions possible."
          }
        ]
      };
    },
    methods: {
      handleClick(id) {
        if (this.active === id) {
          this.active = 0;
        } else {
          this.active = id;
        }
      }
    }
  };
</script>

<style scoped>
  .container {
    max-width: 1440px;
  }
</style>