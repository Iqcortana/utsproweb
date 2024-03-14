const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css')
   .webpackConfig({
      module: {
         rules: [
            {
               test: /\.js$/,
               exclude: /node_modules/,
               use: {
                  loader: 'babel-loader',
                  options: {
                     presets: ['@babel/preset-env']
                  }
               }
            }
         ]
      }
   })
   .styles([
      "resources/css/bootstrap.min.css" ,
      "resources/css/slicknav.css",
      "resources/css/owl.carousel.min.css",
      "resources/css/owl.theme.css",
      "resources/css/magnific-popup.css",
      "resources/css/nivo-lightbox.css",
      "resources/css/animate.css",
      "resources/css/main.css",
      "resources/css/responsive.css"
   ],
   "public/css/app.css")
   .scripts([
      "resources/js/jquery-min.js",
      "resources/js/popper.min.js",
      "resources/js/bootstrap.min.js",
      "resources/js/owl.carousel.min.js",
      "resources/js/wow.js",
      "resources/js/jquery.nav.js",
      "resources/js/scrolling-nav.js",
      "resources/js/jquery.easing.min.js",
      "resources/js/jquery.counterup.min.js",  
      "resources/js/waypoints.min.js",   
      "resources/js/jquery.slicknav.js",
      "resources/js/main.js"
   ],
   "public/js/app.js")
