var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('app/sass/**/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('app/sass/**/*.sass', ['sass']);
});

gulp.task('pug', function () {
    return gulp.src('app/templates/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('app'));
});

gulp.task('pug:watch', function (){
    gulp.watch('app/templates/*.pug', ['pug']);
});

gulp.task('watch', ['pug:watch', 'sass:watch'], function (){
});
//
// gulp.task('scripts', function() {
//     gulp.src(['src/**/*.js'])
//         .pipe(browserify())
//         .pipe(concat('dest.js'))
//         .pipe(gulp.dest('build'))
//         .pipe(refresh(server))
// })
//
// gulp.task('styles', function() {
//     gulp.src(['css/**/*.css'])
//         .pipe(styl({compress : true}))
//         .pipe(gulp.dest('build'))
//         .pipe(refresh(server))
// })
//
// gulp.task('lr-server', function() {
//     server.listen(35729, function(err) {
//         if(err) return console.log(err);
//     });
// })
//
// gulp.task('default', function() {
//     gulp.run('lr-server', 'scripts', 'styles');
//
//     gulp.watch('src/**', function(event) {
//         gulp.run('scripts');
//     })
//
//     gulp.watch('css/**', function(event) {
//         gulp.run('styles');
//     })
// })