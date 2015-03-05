/* jslint node:true */
'use strict';

var gulp = require("gulp");
var plugins = require("gulp-load-plugins")();

var path = {
  servers:[
    "../!(shared)**/!(node_modules|bower_components|.sass_cache|tmp|src|coverage)/!(statics)**/*.js"
  ]
};

gulp.task('jslint', function(){
  return gulp.src(path.servers)
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter('default'));
});

gulp.task('develop', function(){
  plugins.nodemon({
    script:"index.js",
    ext:"js html css"
  })
  .on('change', ['jslint'])
  .on('restart', function(){
    console.log("Nodemon restarted on: "+ new Date());
  });
});



gulp.task('watch', function(){
  gulp.watch(path.servers,['jslint']);
});

gulp.task('default',['jslint', 'develop', 'watch']);