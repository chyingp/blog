var gulp = require('gulp');
// var pug = require('gulp-pug');
// var less = require('gulp-less');
// var minifyCSS = require('gulp-csso');

// gulp.task('html', function(){
//   return gulp.src('client/templates/*.pug')
//     .pipe(pug())
//     .pipe(gulp.dest('build/html'))
// });

gulp.task('views', function(){
  return gulp.src(['page/*.html', 'page/*.ejs'])
    .pipe(gulp.dest('../react-svr/views'))    
});

gulp.task('public', function(){
  return gulp.src('bundle/*.js')
    .pipe(gulp.dest('../react-svr/public/bundle'))    
});

// gulp.task('css', function(){
//   return gulp.src('client/templates/*.less')
//     .pipe(less())
//     .pipe(minifyCSS())
//     .pipe(gulp.dest('build/css'))
// });

gulp.task('default', [ 'views', 'public' ]);