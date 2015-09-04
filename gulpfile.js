var jshint = require('gulp-jshint');
var gulp   = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var notify = require("gulp-notify");
var sass = require('gulp-sass');
var compass = require('gulp-compass');
var minifycss = require('gulp-minify-css');
var plumber = require('gulp-plumber');
var path = require('path');
var autoprefixer = require('gulp-autoprefixer');



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
