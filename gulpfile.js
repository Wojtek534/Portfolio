var gulp = require('gulp');
var minify = require('gulp-minify');
// task
// src
// dest
// watch
var distfolder = './dist/';

gulp.task('dist', function () {
    gulp.src('./src/index.html')
        .pipe(gulp.dest(distfolder));
    gulp.src('./src/style.css')
        .pipe(gulp.dest(distfolder));
    gulp.src('./src/bundle.js')
        .pipe(minify())
        .pipe(gulp.dest(distfolder));
    gulp.src('./src/assets/**')
        .pipe(gulp.dest(distfolder + 'assets'));

})