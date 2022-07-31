import { defineNuxtConfig } from 'nuxt'
import cz from './locales/cz.json'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: ['@nuxtjs/i18n', '@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
	tailwindcss: {
		cssPath: '~/assets/css/tailwind.css',
		configPath: 'tailwind.config.js',
		exposeConfig: false,
		config: {},
		injectPosition: 0,
		viewer: true,
	},
	colorMode: {
		classSuffix: '',
	},
  i18n: {
    locales:
		[
		  { code: 'en', iso: 'en-US', file: 'en.json'},
		  { code: 'cz', iso: 'cs-CZ', file: 'cz.json'},
		],
		langDir: "lang/",
    defaultLocale: 'cz',
		strategy: 'prefix_and_default',
    vueI18n: {
      fallbackLocale: 'en'
    },
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'i18n_redirected',
    redirectOn: 'no prefix',  // recommended
  }

  }
})
