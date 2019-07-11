var gulp = require('gulp'),
    pug  = require('gulp-pug'),
    live = require('gulp-livereload');

gulp.task('html', function () {
    return gulp.src('pug/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('./'))
    .pipe(live());
});

gulp.task('watch', function () {
    live.listen();
    gulp.watch('pug/*.pug', gulp.parallel(['html']));
});

gulp.task('default', gulp.parallel(['html', 'watch']));
