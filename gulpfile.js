'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var minify = require('gulp-minify');
var autoprefixer = require('gulp-autoprefixer');

var jsFiles = ['js/parts/vendor/jquery-3.1.1.min.js','js/parts/vendor/fullpage.fadingEffect.min.js','js/parts/vendor/jquery.fullpage.extensions.min.js', 'js/parts/app.js'],
    jsDest = 'js/';

gulp.task('sass', function () {
	gulp.src('./scss/main.scss')
	    .pipe(sass({outputStyle:'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer())
	    .pipe(gulp.dest('./css'));
});

gulp.task('js', function () {
	return gulp.src(jsFiles)
            .pipe(concat('app.js'))
            .pipe(minify())
	        .pipe(gulp.dest(jsDest));
});

gulp.task('watch', function () {
	gulp.watch('./scss/*.scss', ['sass']);
	gulp.watch('./js/parts/*.js', ['js']);
});

gulp.task('build', ['sass','js']);

gulp.task('default', ['watch']);
