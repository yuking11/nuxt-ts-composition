import { resolve } from 'path'
import { Configuration } from '@nuxt/types'
import { NuxtAxiosInstance } from '@nuxtjs/axios'

const env = process.env.NODE_ENV
const envFile = `./env/.env.${env}`

const dotenv = require('dotenv').config({ path: resolve(__dirname, envFile) })
const envSet = dotenv.parsed

const config: Configuration = {
  mode: 'universal',
  srcDir: 'app',
  env: {
    ...envSet
  },
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#'
    },
    titleTemplate: '%s - ' + process.env.SITE_NAME,
    meta: [
      {
        charset: 'utf-8'
      },
      {
        httpEquiv: 'X-UA-Compatible',
        content: 'IE=edge'
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: process.env.SITE_NAME || ''
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: process.env.BASE_URL || ''
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: process.env.SITE_NAME || ''
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: process.env.npm_package_description || ''
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `${process.env.BASE_URL}${process.env.BASE_DIR}/img/og.jpg`
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: process.env.SITE_NAME || ''
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: process.env.npm_package_description || ''
      },
      {
        name: 'twitter:image',
        content: `${process.env.BASE_URL}${process.env.BASE_DIR}/img/og.jpg`
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
      // {
      //   rel: 'apple-touch-icon-precomposed',
      //   href: '/apple-touch-icon-precomposed.png'
      // },
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Common Style Resources
   */
  styleResources: {
    scss: []
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/composition-api'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://typescript.nuxtjs.org/ja/
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/dotenv-module
    ['@nuxtjs/dotenv', { filename: envFile }]
    // GTM
    // ['@nuxtjs/google-tag-manager', { id: process.env.GOOGLE_TAG_MANAGER_ID }]
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    filenames: {
      app: ({ isDev }) => (isDev ? '[name].[hash].js' : '[chunkhash].js'),
      chunk: ({ isDev }) => (isDev ? '[name].[hash].js' : '[chunkhash].js')
    },
    /*
     ** You can extend webpack config here
     */
    extend(config: any, ctx: any) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(ts|js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  typescript: {
    typeCheck: true,
    ignoreNotFoundWarnings: true
  }
}

// ここのひとかたまりを追加
declare module 'vue/types/vue' {
  interface Vue {
    $axios: NuxtAxiosInstance
  }
}

export default config
