var gulp = require('gulp');

var fs = require('fs');
var path = require('path');
var autoprefixer = require('autoprefixer');
var browserSync = require('browser-sync').create();
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var debug = require('gulp-debug');
var postcss = require('gulp-postcss');
var rename = require("gulp-rename");
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var surge = require('gulp-surge');
var watch = require('gulp-watch');



gulp.task('cssclean', function(){
    return gulp.src('dist/*.css', { read: false }).pipe(clean());
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



gulp.task('jsclean', function(){
    return gulp.src('dist/*.js', { read: false }).pipe(clean());
});

gulp.task('jsconcat', ['jsclean'], function(){
    return gulp.src([
        'src/js/highlight.pack.js',
        'src/js/jquery-3.1.1.min.js',
        'src/js/marked.js',
        'src/js/flat-file.js',
        'src/js/gitter.js'
    ])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());
});



gulp.task('lekceclean', function(){
    return gulp
        .src(['lekce/**/*.html', '!lekce/*.html'], { read: false })
        .pipe(clean());
});

// function to get list of future html files from .md present
var getHtmlFileList = function(dir, filelist){
    var files = fs.readdirSync(dir); // where to find .md
    filelist = filelist || [];

    files.forEach(function(file){
        if (fs.statSync(path.join(dir, file)).isDirectory()){
            filelist = getHtmlFileList(path.join(dir, file), filelist);
        } else if (path.parse(file).ext == '.md'){
            filelist.push(path.join(dir, path.parse(file).name + '.html'));
        }
    });

    return filelist;
};


gulp.task('lekcecreate', ['lekceclean'], function(){
    var filelist = getHtmlFileList('lekce');

    var p = gulp.src('lekce/sablona.html'); // source to be copied

    // copy source to each location on the list
    for (var i = 0; i < filelist.length; i++){
        p = p
            .pipe(rename(filelist[i]))
            .pipe(gulp.dest(''));
    }

    // return and reload browserSync
    return p.pipe(browserSync.stream());
});



gulp.task('develop', ['distprep'], function(){
    browserSync.init({
        server: {
            baseDir: './',
            serveStaticOptions: {
                extensions: ['html']
            }
        },
        open: false,
        port: 3030,
        files: ['*.html'] // only root html files watched
        // for other files browserSync is called manually via browserSync.stream()
    });

    gulp.watch('src/sass/*.scss', ['csscompile']);
    gulp.watch('src/js/*.js', ['jsconcat']);
    gulp.watch(['lekce/**/*.md', 'lekce/sablona.html'])
        .on('change', function(event){
            if (event.type != 'renamed'){ // preventing multiple calls
                gulp.start('lekcecreate');
            }
        });
});



gulp.task('distprep', ['csscompile', 'jsconcat', 'lekcecreate']);



gulp.task('deploy', ['distprep'], function(){
    return surge({
        project: './',
        domain: 'webkurz.pyladies.cz'
    })
});



gulp.task('default', ['develop']);
