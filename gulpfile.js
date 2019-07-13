var gulp = require('gulp'),
    pug  = require('gulp-pug'),
    live = require('gulp-livereload');

var watcher = gulp.watch(['./assets/css/main.css', './assets/js/main.js']);

gulp.task('html', function () {
    return gulp.src('pug/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('./'))
    .pipe(live());
});

gulp.task('watch', function () {
    live.listen();
    gulp.watch('pug/*.pug', gulp.parallel(['html']));
    watcher.on('change', function(path){
        gulp.src(path).pipe(live());
    });
});

gulp.task('default', gulp.parallel(['html', 'watch']));
