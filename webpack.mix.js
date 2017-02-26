const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/assets/js/albums/component.jsx', 'public/js/albums')
   .sass('resources/assets/sass/reset.scss', 'public/css')
   .sass('resources/assets/sass/albums/index.scss', 'public/css/albums');
