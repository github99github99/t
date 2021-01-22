var gulp = require('gulp');
var concat = require('gulp-concat');
var prefix = require('gulp-autoprefixer');


// your first task 
//console.log('you you');
// if you want all html type : 'project/*.html'


//gulp.task('aziiz', function(){
//    return gulp.src('project/index.html')
//            .pipe(gulp.dest('dist'))
//});


//gulp.task('css', function(){
//    return gulp.src('project/*.css')
//            .pipe(concat('main.css'))
//            .pipe(gulp.dest('dist/css'))
//});


//gulp.task('js', function(){
//    return gulp.src('project/*.js')
//            .pipe(concat('all.js'))
//            .pipe(gulp.dest('dist/js'))
//});


//autoprefixer
gulp.task('css', function(){
    return gulp.src('project/*.css')
            .pipe(prefix('last 2 versions'))
            .pipe(concat('main.css'))
            .pipe(gulp.dest('dist/css'))
});