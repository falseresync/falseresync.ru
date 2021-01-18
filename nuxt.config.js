export default {
  target: 'static',

  head: {
    title: 'falseresync',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['./assets/styles/global.scss'],

  plugins: [],

  components: true,

  buildModules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/svg',
  ],

  modules: ['@nuxt/content', '@nuxtjs/dayjs'],

  content: {
    markdown: {
      prism: {
        theme: false,
      },
    },
  },

  build: {},
}
