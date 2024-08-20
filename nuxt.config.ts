// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: false },
    ssr: true,
    routeRules: {
        "/**": {
            swr: true,
        },
    },
    css: ["~/assets/css/main.css"],
    modules: ["nuxt-icon", "@vueuse/nuxt"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    runtimeConfig: {
        hestiaUrl: process.env.HESTIA_URL ?? "http://localhost:5000",
        asteriaUrl: process.env.ASTERIA_URL ?? "http://localhost:3000",
    },
});
