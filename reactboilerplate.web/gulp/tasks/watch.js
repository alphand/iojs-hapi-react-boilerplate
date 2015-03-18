var gulp = require('gulp');
var livereload = require('gulp-livereload');
var config = require("../config");

gulp.task('setWatch', function () {
  global.isWatching = true;
});


// Watch for changes
gulp.task('watch', ['setWatch'], function () {
    livereload.listen();

    gulp.watch(config.path.sass, ['styles']);
    // gulp.watch("./src/**/*.jsx", ['browserify']);
    // gulp.watch('./webapp/assets/images/**', ['images']);
    gulp.watch(config.path.dest.dist+"/**/*.*").on('change', function (file) {
      livereload.changed(file.path);
    });
});

