var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require("gulp-autoprefixer");
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');
var config = require("../config")

gulp.task('styles', function () {
  return gulp.src(config.path.sass)
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(rename('main.css'))
        .pipe(gulp.dest(config.path.dest.assets+"/css"));
});
