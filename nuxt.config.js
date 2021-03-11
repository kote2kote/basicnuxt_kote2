export default {
  /*
  ※ディレクトリ指定のgenerate
  BASE_DIR=/data/2020/ccc/ npm run generate
*/
  mode: "universal",
  target: "static",
  publicRuntimeConfig: {
    isProd: process.env.NODE_ENV === "production" ? true : false,
    MAIN_URL:
      process.env.NODE_ENV === "production"
        ? process.env.PROD_URL
        : process.env.DEV_URL,
    MAIN_REST_API:
      process.env.NODE_ENV === "production"
        ? process.env.PROD_REST_API
        : process.env.DEV_REST_API,
    MAIN_MENU_API:
      process.env.NODE_ENV === "production"
        ? process.env.PROD_MENU_API
        : process.env.DEV_MENU_API,
    PER_PAGES: process.env.PER_PAGES
  },
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/icons/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  styleResources: {
    scss: ["~/assets/scss/style.scss"]
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    "@nuxtjs/tailwindcss",
    "@aceforth/nuxt-optimized-images"
  ],
  optimizedImages: {
    optimizeImages: true,
    optimizeImagesInDev: true
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    // Doc: https://github.com/nuxt-community/dotenv-module
    "@nuxtjs/dotenv",
    "@nuxtjs/style-resources"
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
    transpile: ["vee-validate/dist/rules"],
    postcss: {
      preset: {
        autoprefixer: { grid: "autoplace" }
      }
    },
    terser: {
      // trueでconsoleを消す(開発用時false)
      terserOptions: {
        compress: { drop_console: true }
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  srcDir: "src/"
};
