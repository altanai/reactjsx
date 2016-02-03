var gulp = require('gulp');
var concat = require('gulp-concat'); 
var babel = require('gulp-babel');
var ReactDom = require('react-dom');

var cat = require('gulp-cat');  
var addsrc = require('gulp-add-src');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css'); 
var base64 = require('gulp-base64');
var gulpSequence = require('gulp-sequence');
var exec  =require('child_process').exec;
var fs = require('fs');

var gVersion = "beta";

gulp.task('js',function() {
    appJsList=[ 

        "public/vendor/jquery.min.js",
        "public/vendor/bootstrap.min.js",
        "public/vendor/browser.min.js",
        "public/vendor/underscore.js",
        "public/vendor/backbone.js",
        "public/vendor/react/react.js",
        "public/vendor/react/react-dom.js",
        "public/vendor/parse-latest.js",
        "public/db/todoboxesDb.js",
        "public/db/todoitemsDb.js",

        "public/jsx/AppHeader.jsx",
        "public/jsx/Todo.jsx",
        "public/jsx/Application.jsx",
        
        "public/js/site.js",
        "public/js/router.js"      
  
    ]; 
    gulp.src(appJsList)
        .pipe(babel({
              presets: ['react']
          })) 
        //.pipe(uglify())
        .pipe(concat('mainScript.js'))  
        .pipe(gulp.dest('public/build/')); 
});


gulp.task('css',function() {

    cssList=[
      "public/vendor/bootstrap.min.css",
      "public/css/reset.css",
      "public/css/styles.css"
    ];

    gulp.src(cssList)
      .pipe(minifyCss())
      .pipe(concat('mainStyle.css'))
      .pipe(gulp.dest('public/build/'));
});

gulp.task('default', gulpSequence(
    'js',
    'css'
)); 
