// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@inkline/nuxt'
    ],
    app: {
        head: {
            title: "Philhellenes | Hellenic Folklore Society",
            link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]
        }
    },
    runtimeConfig: {
        public: {
            mailingListSignUpURL: 'https://share.hsforms.com/1s-ofYPbfTFeOUTCW_05iWAeg09q'
        }
    },
})
