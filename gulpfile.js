var jshint = require('gulp-jshint');
var gulp   = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var notify = require("gulp-notify");


gulp.task('js', function() {
  return gulp.src('./mysite/assets/src/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./mysite/assets/dist/js/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('./mysite/assets/dist/js/'))
    .pipe(notify({ message: 'js task complete' }));
});