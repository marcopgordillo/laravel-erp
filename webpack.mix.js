const mix = require('laravel-mix')
const path = require('path')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .alias({
      '@': path.join(__dirname, 'resources/js'),
      '~': path.join(__dirname, 'resources/css'),
      'vue$': path.join(__dirname, 'node_modules/vue/dist/vue.runtime.esm-bundler.js'),
      'vue-simple-acl$': path.join(__dirname, 'node_modules/vue-simple-acl/dist/vue-simple-acl.esm.js'),
    })
    .postCss('resources/css/app.css', 'public/css', [
        require("tailwindcss")
    ])
    .browserSync({
        proxy: process.env.MIX_PROXY,
        open: false,
    })
    .disableNotifications()

if (mix.inProduction()) {
    mix.version()
}
