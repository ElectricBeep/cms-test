<template>
  <div class="flex justify-center">
    <div class="container w-full relative overflow-hidden">
      <CarouselControls
        @prev="prev"
        @next="next"
      />
      <CarouselItem
        v-for="(slide, index) in slides"
        :image="slide.image"
        :title="slide.title"
        :text="slide.text"
        :key="`item-${index}`"
        :currentSlide="currentSlide"
        :index="index"
        :direction="direction"
        @mouseenter="stopSlideTimer"
        @mouseleave="startSlideTimer"
      />
    </div>
  </div>
</template>

<script>
  export default {
    name: "Carousel",
    data() {
      return {
        slides: [
          {
            image: "hardware.png",
            title: "HW development",
            text:
              "In addition to the teleclinic software, we also provide hardware solutions that are designed to work seamlessly with the software. Our teleclinic hardware and software solution is designed to improve patient outcomes, increase efficiency and productivity, and reduce costs for dental practices. Our teleclinic hardware solution is designed to enhance the virtual consultation experience for dental patients and it includes the necessary equipment to ensure high-quality video and audio during virtual consultations."
          },
          {
            image: "software.png",
            title: "SW development",
            text:
              "We understand that the field of dentistry is constantly evolving and that staying current on the latest technologies and trends is essential for the growth and success of dental practices. That's why we have developed a teleclinic software solution specifically designed for the dental industry. Our software includes features such as virtual appointment scheduling, live video consultations with dentists, online treatment planning, and secure patient data storage."
          },
          {
            image: "ai.png",
            title: "AI and healthcare",
            text:
              "We also specialize in integrating artificial intelligence (AI) into dental healthcare solutions. We understand that AI has the potential to revolutionize healthcare by providing more accurate and efficient diagnoses, improving patient outcomes, and reducing costs. Our team of experts stays at the forefront of AI research and development and is constantly exploring new ways to integrate AI into dental healthcare solutions. In 5 years, telemedicine together with AI will improve the health of patients."
          }
        ],
        interval: 4000,
        currentSlide: 0,
        slideInterval: null,
        direction: "right"
      };
    },
    methods: {
      setCurrentSlide(index) {
        this.currentSlide = index;
      },
      prev(step = -1) {
        const index =
          this.currentSlide > 0
            ? this.currentSlide + step
            : this.slides.length - 1;
        this.setCurrentSlide(index);
        this.direction = "left";
        this.startSlideTimer();
      },
      _next(step = 1) {
        const index =
          this.currentSlide < this.slides.length - 1
            ? this.currentSlide + step
            : 0;
        this.setCurrentSlide(index);
        this.direction = "right";
      },
      next(step = 1) {
        this._next(step);
        this.startSlideTimer();
      },
      startSlideTimer() {
        this.stopSlideTimer();
        this.slideInterval = setInterval(() => {
          this._next();
        }, this.interval);
      },
      stopSlideTimer() {
        clearInterval(this.slideInterval);
      },
      switchSlide(index) {
        const step = index - this.currentSlide;
        if (step > 0) {
          this.next(step);
        } else {
          this.prev(step);
        }
      }
    },
    mounted() {
      this.startSlideTimer();
    },
    beforeUnmount() {
      this.stopSlideTimer();
    }
  };
</script>

<style scoped>
  .container {
    height: 384px;
  }

  @media only screen and (max-width: 1024px) {
    .container {
      height: 340px;
    }
  }

  @media only screen and (max-width: 768px) {
    .container {
      height: 350px;
    }
  }

  @media only screen and (max-width: 640px) {
    .container {
      height: 400px;
    }
  }

  @media only screen and (max-width: 460px) {
    .container {
      height: 480px;
    }
  }

  @media only screen and (max-width: 400px) {
    .container {
      height: 550px;
    }
  }
</style>