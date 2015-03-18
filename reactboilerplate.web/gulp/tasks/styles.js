var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require("gulp-autoprefixer");
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');
var config = require("../config")
var handleErrors = require('../util/handleErrors');


gulp.task('styles', function () {
  gulp.src("./styles/main.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(rename('main.css'))
    .pipe(gulp.dest(config.path.dest.assets+"/css"))
    .on('error', handleErrors);
});
