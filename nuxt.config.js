const nodeExternals = require('webpack-node-externals')
const resolve = (dir) => require('path').join(__dirname, dir)

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-vuetify-i18n',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt+vuetify+i18n demo problem \"not exist VueI18n instance in Vue instance\"' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },
  plugins: ['~/plugins/vuetify.js'],
  css: [
    '~/assets/style/app.styl'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    babel: {
      plugins: [
        ["transform-imports", {
          "vuetify": {
            "transform": "vuetify/es5/components/${member}",
            "preventFullImport": true
          }
        }]
      ]
    },
    vendor: [
      '~/plugins/vuetify.js'
    ],
    extractCSS: true,
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      if (ctx.isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/]
          })
        ]
      }

      // enable <i18n> blocks in sfc
      const vueLoader = config.module.rules.find(rule => rule.loader === 'vue-loader')
      vueLoader.options.loaders.i18n = '@kazupon/vue-i18n-loader'
    }
  },
  modules: [
    ['nuxt-i18n', {
      locales: [
        {
          code: 'en',
          iso:  'en-US',
          name: 'English',
        },
        {
          code: 'es',
          iso:  'es',
          name: 'Español',
        },
      ],
      defaultLocale: 'en',
      pages: {
        'Inspire/index': {
          en: '/ENGLISH-inspire',
          es: '/SPANISH-inspire',
        },
      },
      // disable acorn parsing, https://github.com/nuxt-community/nuxt-i18n/issues/78
      parsePages: false,
      vueI18n:    {
        fallbackLocale: 'en',
        // TODO not working properly - these strings are ignored if there is <i18n> in component
        messages:       {
          es: {
            hello: 'mensaje global de saludo',
            english: "inglés (de global)",
            spanish: "español (de global)"
          },
          en: {
            hello: 'global hello message',
            english: "english (from global)",
            spanish: "spanish (from global)"
          },
        },
      },
    }],
  ],
}
