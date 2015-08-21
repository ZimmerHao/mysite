var jshint = require('gulp-jshint');
var gulp   = require('gulp');



gulp.task('js', function() {
  return gulp.src('./mysite/assets/src/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});