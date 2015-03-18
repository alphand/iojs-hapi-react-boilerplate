var gulp = require('gulp');
var plumber = require('gulp-plumber');
var jscs = require('gulp-jscs');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var handleErrors = require('../util/handleErrors');
var config = require("../config");

var jsxhinter = require('jshint-jsx');
jsxhinter.JSHINT = jsxhinter.JSXHINT;
// var jsxhint = jshint({linter:'jsxhint'});


// JSHint and jscs
gulp.task('lint', function () {
  return gulp.src(['./src/**/*.jsx'])
    .pipe(plumber())
    // .pipe(jscs())
    .pipe(jshint({linter:jsxhinter.JSHINT, esnext:true}))
    .on('error', handleErrors)
    .pipe(jshint.reporter(stylish)); // Console output
});
