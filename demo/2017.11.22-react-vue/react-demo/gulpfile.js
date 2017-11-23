var gulp = require('gulp');
var path = require('path');
// var pug = require('gulp-pug');
// var less = require('gulp-less');
// var minifyCSS = require('gulp-csso');

// gulp.task('html', function(){
//   return gulp.src('client/templates/*.pug')
//     .pipe(pug())
//     .pipe(gulp.dest('build/html'))
// });

var svrRoot = '/Users/a/Documents/code/develop/xunjiatong/InquiryHandNodeSvr/branches/2017.11.23-kh-m';

gulp.task('views', function(){
  // let dest = '/Users/a/Documents/code/develop/xunjiatong/InquiryHandNodeSvr/branches/2017.11.10-group-inquiry/app/view/kh-m';
  // let dest = '../react-svr/views';
  let dest = path.join(svrRoot, 'app/view/kh-m');
  return gulp.src(['page/*.html', 'page/*.ejs', 'build/*.html'])
    .pipe(gulp.dest(dest));
});

gulp.task('public', function(){
  let dest = path.join(svrRoot, 'app/public/kh-m');
  // let dest = '/Users/a/Documents/code/develop/xunjiatong/InquiryHandNodeSvr/branches/2017.11.10-group-inquiry/app/public/kh-m';
  // let dest = '../react-svr/public/bundle';
  return gulp.src('build/*.js')
    .pipe(gulp.dest(dest));
});

// gulp.task('css', function(){
//   return gulp.src('client/templates/*.less')
//     .pipe(less())
//     .pipe(minifyCSS())
//     .pipe(gulp.dest('build/css'))
// });

gulp.task('default', 
  [ 'views', 
    'public' ]);