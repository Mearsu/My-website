import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: ['@nuxtjs/i18n', '@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
  target: 'static', // default is 'server'
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
		  { code: 'en', name: 'English', iso: 'en-US', file: 'en.json'},
		  { code: 'cz', name: 'Česky', iso: 'cs-CZ', file: 'cz.json'},
		],
		langDir: "lang/",
    defaultLocale: 'cz',
		strategy: 'prefix',
    vueI18n: {
      fallbackLocale: 'en'
    },
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'i18n_redirected',
    redirectOn: 'no prefix',  // recommended
  }

  },
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '~/assets/favicon.ico',
      },
    ]
})
