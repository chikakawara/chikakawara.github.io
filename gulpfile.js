const gulp = require('gulp');
const sass = require('gulp-ruby-sass');
const browserSync = require('browser-sync').create();

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('sass', () =>
    sass('./src/css/scss/*.scss', {
            style: 'expanded'
        })
        .on('error', sass.logError)
        .pipe(gulp.dest('./src/css'))
);

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("./src/css/scss/*.scss", ['sass']);
    gulp.watch("./src/css/*.css").on('change', browserSync.reload);
    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch("./src/js/*.js").on('change', browserSync.reload);
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
