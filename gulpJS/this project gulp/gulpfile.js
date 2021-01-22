var gulp = require('gulp');
var concat = require('gulp-concat');


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


gulp.task('js', function(){
    return gulp.src('project/*.js')
            .pipe(concat('all.js'))
            .pipe(gulp.dest('dist/js'))
});