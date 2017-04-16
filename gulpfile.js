const gulp = require('gulp');

// task cnary
gulp.task('canary',() => {
  console.log('Hello gulp!');
});

gulp.task('default',['canary']);
