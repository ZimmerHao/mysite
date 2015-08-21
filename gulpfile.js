var jshint = require('gulp-jshint');
var gulp   = require('gulp');
var concat = require('gulp-concat');



gulp.task('js', function() {
  return gulp.src('./mysite/assets/src/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./mysite/assets/dist/js/'));
});