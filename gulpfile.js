var gulp = require('gulp');

var clean = require('gulp-clean');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var browserSync = require('browser-sync').create();
var surge = require('gulp-surge');
var concat = require('gulp-concat');



gulp.task('cssclean', function(){
	return gulp.src('dist/*.css', { read: false }).pipe(clean());
});


gulp.task('jsclean', function(){
	return gulp.src('dist/*.js', { read: false }).pipe(clean());
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



gulp.task('jsconcat', ['jsclean'], function(){
	return gulp.src([
		'src/js/highlight.pack.js',
		'src/js/jquery-3.1.1.min.js',
		'src/js/marked.js',
		'src/js/flat-file.js'
	])
		.pipe(concat('all.js'))
		.pipe(gulp.dest('dist'));
});



gulp.task('develop', ['distprep'], function(){
	browserSync.init({
		server: {
			baseDir: './',
			serveStaticOptions: {
				extensions: ['html']
			}
		},
		port: 3030,
		files: [
			'*.html',
			'lekce/**/*.(html|md)',
			'dist/**/*.css',
			'dist/**/*.js'
		]
	});

	gulp.watch('src/sass/*.scss', ['csscompile']);
	gulp.watch('src/js/*.js', ['jsconcat']);
});


gulp.task('distprep', ['csscompile', 'jsconcat']);



gulp.task('deploy', ['distprep'], function(){
	return surge({
		project: './',
		domain: 'webkurz.pyladies.cz'
	})
});



gulp.task('default', ['develop']);
