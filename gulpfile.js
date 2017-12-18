'use strict'

const {
  task,
  src,
  dest,
  watch
} = require('gulp-named')

const config = require('./config')
const sequence = require('run-sequence')
const wbBuild = require('workbox-build')
const assign = require('lodash.assign')
const isProduction = config.isProduction
const $ = config.plugins

task('images', () =>
  src(`${config.dest.images}/**/*`)
    .pipe($.cache($.image({
      pngquant: true,
      optipng: true,
      zopflipng: true,
      advpng: true,
      jpegRecompress: false,
      jpegoptim: true,
      mozjpeg: true,
      gifsicle: true,
      svgo: true
    })))
    .pipe(dest(config.dest.images)))

task('fonts', () =>
  src('./node_modules/font-awesome/fonts/*')
    .pipe(dest(config.dest.fonts)))

task('templates', () =>
  src('./src/views/*.pug')
    .pipe($.plumber(config.plumber))
    .pipe($.data(file => assign({ fileHash: '' }, config.pkg)))
    .pipe($.pug({
      pretty: true
    }))
    .pipe($.size(config.size('templates')))
    .pipe(dest(config.dest.public))
    .pipe($.plumber.stop()))

task('scripts', ['scripts:vendor'], () =>
  src([`${config.src.scripts}/**/*.js`])
    .pipe($.plumber(config.plumber))
    .pipe($.sourcemaps.init())
    .pipe($.concat('app.js', {
      newLine: ''
    }))
    .pipe($.babel())
    .pipe(isProduction ? $.uglify() : $.util.noop())
    .pipe($.rename(`bundle.js`))
    .pipe($.sourcemaps.write())
    .pipe($.size(config.size('scripts')))
    .pipe(dest(config.dest.javascripts))
    .pipe($.plumber.stop()))

task('scripts:vendor', () =>
  src([
    './node_modules/jquery/dist/jquery.js',
    './node_modules/simple-jekyll-search/dest/simple-jekyll-search.js'
  ])
    .pipe($.plumber(config.plumber))
    .pipe($.concat(`vendor.js`, {
      newLine: ''
    }))
    .pipe(isProduction ? $.uglify() : $.util.noop())
    .pipe($.size(config.size('scripts:vendor')))
    .pipe(dest(config.dest.javascripts))
    .pipe($.plumber.stop()))

task('stylus', () =>
  src(`${config.src.stylus}/app.styl`)
    .pipe($.plumber(config.plumber))
    .pipe($.sourcemaps.init())
    .pipe($.stylus(config.stylus))
    .pipe($.combineMq({
      beautify: true
    }))
    .pipe(isProduction ? $.cssnano(config.cssnano) : $.util.noop())
    .pipe($.rename(`bundle.css`))
    .pipe($.sourcemaps.write())
    .pipe($.size(config.size('stylus')))
    .pipe(dest(config.dest.stylesheets))
    .pipe($.plumber.stop()))

/* eslint no-useless-escape: 0  */
task('generate-service-worker', () => wbBuild.generateSW({
  globDirectory: './_site/',
  swDest: `./_site/sw.js`,
  globPatterns: ['**\/*.{html,js,css}']
})
  .then(() => {
    console.log('Service worker generated.')
  })
  .catch((err) => {
    console.log('[ERROR] This happened: ' + err)
  }))

task('webserver', ['generate-service-worker'], () =>
  src(config.dest.public)
    .pipe($.webserver(config.webServer)))

task('stream', () => {
  watch([`${config.src.views}/**/*`], ['templates'])
  watch([`${config.src.scripts}/**/*`], ['scripts'])
  watch([`${config.src.stylus}/**/*`], ['stylus'])
})

task('build', (cb) =>
  sequence(['templates', 'stylus', 'scripts', 'images', 'fonts'], cb))

task('default', (cb) => sequence('build', 'stream', ['webserver'], cb))
