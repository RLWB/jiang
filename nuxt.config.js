/*
 * @Author: Kuntey
 * @Date: 2022-03-23 11:56:00
 * @LastEditors: Kuntey
 * @LastEditTime: 2022-03-24 14:42:28
 * @Description:
 */
export default {
    // Target: https://go.nuxtjs.dev/config-target
    // target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'nuxt-app',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '@/assets/style/index.scss',
        'element-ui/lib/theme-chalk/index.css',
        '@/assets/variable.scss'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '@/plugins/main'
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: [
        // Equivalent to { path: '~/components' }
        '~/components',
        { path: '~/components/business', extensions: ['vue'] },
        { path: '~/components/common', extensions: ['vue'] }
    ],

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        transpile: [/^element-ui/],
    },

    /*
    ** Router configuration
    */
    router: {
        // middleware: ['auth', 'i18n'],
        extendRoutes (routes, resolve) {
        routes.push({
            path: '/',
            redirect: {
                name: '/lanhu_yinyuerenchuangzuozhongxinzuopinguanliyinyueshenhetongguo'
            }
        })
        }
    },
}
