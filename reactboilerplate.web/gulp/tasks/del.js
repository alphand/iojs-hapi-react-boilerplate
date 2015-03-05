var gulp = require("gulp");
var del  = require("del");
var vinylPaths = require('vinyl-paths');
var config = require("../config");


gulp.task("del", function(cb){
  return gulp.src([config.path.dest.assets], {read:false})
    .pipe(vinylPaths(del))
});
