var gulp = require('gulp');
var fs = require('fs');
var path = require('path');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
// 压缩js文件
// var  uglify = require('gulp-uglify');
var compass = require( 'gulp-compass' );
// Gulp plugin to run a webserver
var connect = require('gulp-connect');


gulp.task( 'compass', function(){
    gulp.src('source/sass/*.scss')
        .pipe(compass({
            project: __dirname,
            css: 'source/css',
            sass: 'source/sass'
        }
        ))
        .pipe(gulp.dest('resource/css'));
})
gulp.task('html', function() {
    gulp.src('*.html')
        .pipe(connect.reload())
});
gulp.task("sass", function() {
    gulp.src("source/sass/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest("resource/css"))
});
// 压缩js文件
// gulp.task('js', function() {
// 	gulp.src('source/js/*.js')
// 		.pipe(uglify())
// 		.pipe(rename('index.min.js'))
// 		.pipe(gulp.dest('source/js'))
// });
gulp.task('watch', function () {
    gulp.watch('*.html',['html']);
    gulp.watch("sass/*.scss", ["sass"])
    // gulp.watch('js/*.js',['js'])
});

gulp.task("connect", function() {
    connect.server({
        livereload: true
    });
});

gulp.task('default', ['html','sass','watch','connect']);
