var gulp = require('gulp');
var surge = require('gulp-surge');

gulp.task('deploy', [], function(){
	return surge({
		project: './',
		domain: 'webkurz.pyladies.cz'
	})
});