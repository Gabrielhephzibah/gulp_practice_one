var gulp = require('gulp');
var sass = require('gulp-sass')
var uglify = require('gulp-uglify')

// gulp.task('task-name', funtion(){
//     do something
// })

gulp.task('bacon', function(done) {
    console.log("wow,this is beautiful");
    done();
});

gulp.task('yes', function() {
    return gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));
})

  
// gulp.task('sass', function(done) {
//     return gulp.src('app/scss/styles.scss')
//     .pipe(sass))
//     .pipe(gulp.dest('app/css'));
//     done()
    
// });

gulp.task('sass', function(){
    return gulp.src('app/scss/styles.scss')
       .pipe(sass())
       .pipe(gulp.dest('app/css'));
 });

 //script task
//  gulp.task('default', ['yes', 'bacon']);

// exports.default = series(
//     parrallel(yesTask,baconTask)
// )
gulp.task('default',
gulp.series('yes','bacon','watch'));


//using watch
//watch task watching js
// gulp.task('watch', function() {
//    gulp.watch('js/*/js',['yes']) //watch any js files in our js folder
// });
gulp.task('watch', function() {
gulp.watch('js/*/js',
gulp.series('yes'))
});