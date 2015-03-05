/* jslint node:true */
'use strict';

var gulp = require("gulp");
var plugins = require("gulp-load-plugins")();

var path = {
  servers:[
    "./**/**/!(statics)**/*.js"
  ]
};

gulp.task('develop', function(){
  plugins.nodemon({
    script:"./viralstore/index.js",
    ext:"js css html"
    watch:path.servers
  })
  .on('change', ['jslint'])
  .on('restart', function(){
    console.log("Nodemon restarted on: "+ new Date());
  });
});

gulp.task('jslint', function(){
  return gulp.src(path.servers)
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter('default'));
});

gulp.task('watch', function(){
  gulp.watch(path.servers,['jslint']);
});

gulp.task('default',['jslint', 'develop', 'watch']);