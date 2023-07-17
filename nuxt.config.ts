// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxt/content', '@nuxtjs/tailwindcss', ['@nuxtjs/supabase', {autoImports: ['useSupabaseUser']}], ['@pinia/nuxt', { autoImports: ['defineStore', 'acceptHMRUpdate'],}]],
    ssr: true,
    devtools: { enabled: true },
    supabase: {
        url: process.env.SUPABASE_URL,
        key: process.env.SUPABASE_KEY
    },
    css: [
        '@/assets/css/main.css',
    ],
})
