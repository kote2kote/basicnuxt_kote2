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
    MAIN_URL: process.env.MAIN_URL,
    PER_PAGES: process.env.PER_PAGES
  },
  /*
   ** Headers of the page
   */
  head: {
    // title: process.env.npm_package_name || "",
    titleTemplate: titleChunk => {
      return titleChunk ? `${titleChunk} | basic` : "basic";
    },
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=yes"
      },
      {
        hid: "description",
        name: "description",
        content: ``
      },
      {
        property: "og:image",
        content: `https://laughing-saha-766f92.netlify.app/icons/screenshot.png`
      },
      { property: "og:site_name", content: "basic" },
      { property: "fb:app_id", content: "" },
      { name: "twitter:card", content: `summary_large_image` },
      { name: "twitter:site", content: "@kote2" },
      {
        property: "og:image:secure_url",
        content: `https://laughing-saha-766f92.netlify.app/icons/screenshot.png`
      },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "900" },
      {
        hid: "format-detection",
        name: "format-detection",
        content: "email=no,telephone=no,address=no"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/icons/favicon.ico" },
      {
        rel: "icon",
        type: "image/png",
        sizes: "512x512",
        href: "/icons/android-chrome-512x512.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/icons/apple-touch-icon.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "512x512",
        href: "/icons/icon-512x512.png"
      }
    ],
    script: [
      {
        src:
          "//polyfill.io/v3/polyfill.min.js?features=es6%2CIntersectionObserver%2CIntersectionObserverEntry"
      },
      {
        src:
          "//cdnjs.cloudflare.com/ajax/libs/object-fit-images/3.2.4/ofi.min.js"
      }
    ]
  },
  pwa: {
    manifest: {
      name: "basic",
      title: "basic",
      description: "",
      lang: "ja",
      start_url: "/",
      display: "standalone",
      theme_color: "#000000",
      background_color: "#Fffffff",
      icons: [
        {
          src: "/icons/apple-touch-icon.png",
          sizes: "180x180",
          type: "image/png"
        },
        {
          src: "/icons/icon-512x512.png",
          sizes: "512x512",
          type: "image/png"
        }
      ]
    }
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
