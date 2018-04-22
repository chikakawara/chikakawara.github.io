const gulp = require('gulp');
const sass = require('gulp-ruby-sass');
const browserSync = require('browser-sync').create();

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('sass', () =>
    sass('./html/css/scss/*.scss', {
            style: 'expanded'
        })
        .on('error', sass.logError)
        .pipe(gulp.dest('./html/css'))
);

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("scss/*.scss", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch("js/*.js").on('change', browserSync.reload);
});

// Static server
gulp.task('browser-sync', () =>
    browserSync.init({
        server: {
            baseDir: "./"
        }
    })
);

// gulp.task('browser-sync', function() {
//     browserSync.init({
//         server: {
//             baseDir: "./html"
//         }
//     });
// });
