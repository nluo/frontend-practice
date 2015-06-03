var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');

gulp.task('compile', function(){
	    return browserify('./public/script/index.js')
        .bundle()
        .pipe(source('index.js'))
        .pipe(gulp.dest('./build/'));
});