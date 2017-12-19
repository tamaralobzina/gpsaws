var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    babel = require('gulp-babel'),
 minifyCSS= require('gulp-cssmin'),
concatCss=require('gulp-concat-css');

gulp.task('babel',function(){
    gulp.src('js/*.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('dist'));                           //create 'dist' folder with Babeled code
});

gulp.task('minify', function () {
    gulp.src('js/*.js')                                   //'dist/*.js' required to grab all JS files in Babel format
        .pipe(uglify())
        .pipe(gulp.dest('build'));                          //create a new 'build' folder
});

gulp.task('concat', function() {
    gulp.src('build/*.js')                                  //takes all JS files in build which have already been minified
        .pipe(concat('dist.js'))                          // ?
        .pipe(gulp.dest('./'));                             // same as
});

gulp.task('minify-css', function () {
    gulp.src('css/*.css')                                   //'dist/*.js' required to grab all JS files in Babel format
        .pipe(minifyCSS())                                      //send it through the gulp plugin
        .pipe(gulp.dest('./'));                          //create a new 'build' folder
});

