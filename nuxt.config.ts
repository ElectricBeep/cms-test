import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxt/image',
    '@nuxt/content',
  ],

  image: {
    format: ['webp'],
    quality: 10,
  },

  content: {
    markdown: {
      mdc: true,
    },
    highlight: {
      theme: {
        dark: "github-dark",
        default: "github-light",
      },
    },
  },

  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
