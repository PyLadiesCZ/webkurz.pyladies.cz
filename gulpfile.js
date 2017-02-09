var gulp = require('gulp');

var clean = require('gulp-clean');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var browserSync = require('browser-sync').create();
var surge = require('gulp-surge');



gulp.task('cssclean', function(){
	return gulp.src('dist/css', { read: false }).pipe(clean());
});



gulp.task('csscompile', ['cssclean'], function(){
	return gulp
		.src('src/sass/index.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(sourcemaps.init())
		.pipe(postcss([autoprefixer()]))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('dist'))
		.pipe(browserSync.stream());
});



gulp.task('develop', ['csscompile'], function(){
	browserSync.init({
		server: {
			baseDir: './'
		},
		port:3030,
		files: ['*.html', 'dist/**/*.css', 'dist/**/*.js']
	});

	gulp.watch('src/sass/index.scss', ['csscompile']);
});



gulp.task('deploy', ['csscompile'], function(){
	return surge({
		project: './',
		domain: 'webkurz.pyladies.cz'
	})
});

gulp.task('default', ['develop']);
