'use strict';

var path = require('path'),
    gulp = require('gulp'),
    args = require('yargs').argv
;

var paths = gulp.paths;
var $ = require('gulp-load-plugins')();

gulp.task('login-vendor-scripts', function () {
    return gulp.src([
        paths.bower + 'jquery/dist/jquery.min.js',
        paths.bower + 'bootstrap/dist/js/bootstrap.min.js'
    ])
        .pipe($.plumber())
        .pipe($.concat('vendorlogin.min.js'))
        .pipe($.if(args.production, $.uglify({mangle: false})))
        .pipe(gulp.dest(paths.destJs))
        .pipe($.size());
});

 gulp.task('vendor-scripts', ['login-vendor-scripts'], function () {
     return gulp.src([
         paths.bower + 'jquery/dist/jquery.min.js',
         paths.bower + 'angular/angular.min.js',
         paths.bower + 'bootstrap/dist/js/bootstrap.min.js',
         paths.bower + 'highcharts/highcharts.js',
         paths.bower + 'highcharts/modules/exporting.js'
     ])
         .pipe($.plumber())
         .pipe($.concat('vendor.min.js'))
         .pipe($.if(args.production, $.uglify({mangle: false})))
         .pipe(gulp.dest(paths.destJs))
         .pipe($.size());
 });

gulp.task('login-scripts', function () {
    return gulp.src(paths.srcJs + 'login.js')
        .pipe($.plumber())
        .pipe($.eslint())
        .pipe($.eslint.format())
        .pipe($.concat('login.min.js'))
        .pipe($.if(args.production, $.uglify()))
        .pipe($.if(args.production, $.jsObfuscator()))
        .pipe(gulp.dest(paths.destJs))
        .pipe($.size());
});

gulp.task('app-scripts', function () {
    return gulp.src([
        paths.srcJs + 'constants/data.js',
        paths.srcJs + 'InfoWindows.js',
        paths.srcJs + 'app.js',
        paths.srcJs + 'controllers/baseController.js',
        paths.srcJs + 'controllers/TeslaController.js',
        paths.srcJs + 'tesla.js'
    ])
        .pipe($.plumber())
        .pipe($.eslint())
        .pipe($.eslint.format())
        .pipe($.ngAnnotate())
        .pipe($.concat('app.min.js'))
        .pipe($.if(args.production, $.uglify()))
        .pipe($.if(args.production, $.jsObfuscator()))
        .pipe(gulp.dest(paths.destJs))
        .pipe($.size());
});

gulp.task('scripts', ['vendor-scripts', 'login-scripts', 'app-scripts']);